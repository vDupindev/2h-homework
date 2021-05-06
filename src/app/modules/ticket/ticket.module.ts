
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { TicketRoutingModule } from './ticket-routing.module';

@NgModule({
  declarations: [TicketListComponent],
  imports: [
    SharedModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
