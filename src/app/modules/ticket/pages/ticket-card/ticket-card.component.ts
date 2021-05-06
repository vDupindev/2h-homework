import { ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
import { BackendService } from 'src/app/backend.service';
import { Ticket } from 'src/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketCardComponent implements OnInit {

  public ticket$: Observable<Ticket>;

  constructor(private readonly backendService: BackendService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id');
    this.ticket$ = this.backendService.ticket(+ticketId).pipe(take(1));
  }



}
