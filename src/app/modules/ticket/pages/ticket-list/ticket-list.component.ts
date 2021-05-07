import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, Observable, of } from "rxjs";
import { debounceTime, map, startWith } from "rxjs/operators";
import { Ticket } from "src/app/modules/ticket/models/ticket.interface";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  tickets$: Observable<Ticket[]>;
  search: FormControl = new FormControl("");

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const search$ = this.search.valueChanges.pipe(
      startWith(""),
      debounceTime(300)
    );

    const ticketsList$ = of(this.route.snapshot.data.ticketsList);

    this.tickets$ = combineLatest([search$, ticketsList$]).pipe(
      map(([search, tickets]: [string, Ticket[]]) =>
        tickets.filter((t) =>
          t.description.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  redirectToTicketCard(ticketId): void {
    this.router.navigate(["/ticket/" + ticketId]);
  }
}
