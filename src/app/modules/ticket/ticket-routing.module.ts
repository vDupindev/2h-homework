import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketCardComponent } from "./pages/ticket-card/ticket-card.component";
import { TicketListComponent } from "./pages/ticket-list/ticket-list.component";
import { TicketCardResolver } from "./resolvers/ticket-card-resolver";
import { TicketListResolver } from "./resolvers/ticket-list.resolver";

export const DEFAULT_ROUTE = "/ticket/list";

export const routes: Routes = [
  { path: "", redirectTo: DEFAULT_ROUTE, pathMatch: "full" },
  { path: "ticket", redirectTo: DEFAULT_ROUTE, pathMatch: "full" },

  {
    path: "ticket",
    children: [
      {
        path: "list",
        component: TicketListComponent,
        resolve: {
          ticketsList: TicketListResolver
        },
      },
      {
        path: ":id",
        component: TicketCardComponent,
        resolve: {
          ticket: TicketCardResolver
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
