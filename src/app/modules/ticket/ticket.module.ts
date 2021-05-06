
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketCardComponent } from './pages/ticket-card/ticket-card.component';

@NgModule({
  declarations: [TicketListComponent, TicketCardComponent],
  imports: [
    SharedModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
