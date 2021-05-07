import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BackendService } from 'src/app/backend.service';
import { Ticket } from '../models/ticket.interface';

@Injectable()
export class TicketListResolver implements Resolve<Ticket[] | boolean> {
  constructor(private backendService: BackendService, private router: Router) {}

  resolve(): Observable<Ticket[] | boolean> {
    return this.backendService.tickets().pipe(
      catchError(() => {
        return this.router.navigate(['/404']);
      })
    );
  }
}
