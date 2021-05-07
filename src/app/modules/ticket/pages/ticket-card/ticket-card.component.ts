import { ChangeDetectionStrategy } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { Ticket } from "src/app/modules/ticket/models/ticket.interface";

@Component({
  selector: "app-ticket-card",
  templateUrl: "./ticket-card.component.html",
  styleUrls: ["./ticket-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketCardComponent implements OnInit {
  public ticket$: Observable<Ticket>;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ticket$ = of(this.route.snapshot.data.ticket);
  }
}
