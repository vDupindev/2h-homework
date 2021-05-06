import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "src/app/backend.service";
import { Ticket } from "src/interfaces/ticket.interface";
import { User } from "src/interfaces/user.interface";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketListComponent implements OnInit {
  public readonly users$: Observable<User[]> = this.backendService.users();
  public readonly tickets$: Observable<
    Ticket[]
  > = this.backendService.tickets();

  constructor(private readonly backendService: BackendService) {}

  ngOnInit(): void {}
}
