import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [SharedModule.MODULES],
  exports: [SharedModule.MODULES],
})
export class SharedModule {
  static readonly MODULES = [CommonModule, RouterModule];
}
