import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SharedModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
