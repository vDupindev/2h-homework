import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { TicketRoutingModule } from "./ticket-routing.module";
import { TicketListComponent } from "./pages/ticket-list/ticket-list.component";
import { TicketCardComponent } from "./pages/ticket-card/ticket-card.component";
import { TicketListResolver } from "./resolvers/ticket-list.resolver";
import { ReactiveFormsModule } from "@angular/forms";
import { TicketCardResolver } from "./resolvers/ticket-card-resolver";

@NgModule({
  declarations: [TicketListComponent, TicketCardComponent],
  imports: [SharedModule, TicketRoutingModule, ReactiveFormsModule],
  providers: [TicketListResolver, TicketCardResolver],
})
export class TicketModule {}
