import { Component } from "@angular/core";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private title = "app";
  loading = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event: Event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
        )
      )
      // no need to unsubscribe in AppComponent ?
      .subscribe((event: Event) => {
        this.loading = event instanceof NavigationStart;
      });
  }
}
