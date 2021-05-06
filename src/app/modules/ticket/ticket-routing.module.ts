import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketListComponent } from "./pages/ticket-list/ticket-list.component";

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
