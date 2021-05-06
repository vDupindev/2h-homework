import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketModule } from "./modules/ticket/ticket.module";

export const ROUTES: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/ticket/ticket.module").then((m) => m.TicketModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
