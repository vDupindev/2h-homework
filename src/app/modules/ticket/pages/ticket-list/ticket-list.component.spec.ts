import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BackendService } from "src/app/backend.service";

import { TicketListComponent } from "./ticket-list.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("TicketListComponent", () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TicketListComponent],
      providers: [BackendService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
