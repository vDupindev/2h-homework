import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { BackendService } from "src/app/backend.service";
import { Ticket } from "src/app/modules/ticket/models/ticket.interface";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {

  public readonly tickets$: Observable<Ticket[]> = this.backendService.tickets(); // TODO : need to put logic in resolver

  constructor(
    private readonly backendService: BackendService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  redirectToTicketCard(ticketId): void{
    this.router.navigate(['/ticket/' + ticketId]);
  }
}
