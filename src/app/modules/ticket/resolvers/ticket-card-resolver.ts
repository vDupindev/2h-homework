import { Injectable } from "@angular/core";
import { ActivatedRoute, Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { BackendService } from "src/app/backend.service";
import { Ticket } from "../models/ticket.interface";

@Injectable()
export class TicketCardResolver implements Resolve<Ticket | boolean> {
  constructor(
    private backendService: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  resolve(): Observable<Ticket | boolean> {
    const TICKET_ID = +this.route.snapshot.paramMap.get("id");
    const ticketWithoutUser$ = this.backendService.ticket(TICKET_ID);

    const ticket$ = ticketWithoutUser$.pipe(
      switchMap((ticket: Ticket) =>
        this.backendService.user(ticket.assigneeId).pipe(
          map((user) => {
            return { ...ticket, assignee: user } as Ticket;
          })
        )
      )
    );

    return ticket$.pipe(
      catchError(() => {
        return this.router.navigate(["/404"]);
      })
    );
  }
}
