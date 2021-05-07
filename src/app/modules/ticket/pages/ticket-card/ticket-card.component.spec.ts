import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { BackendService } from "src/app/backend.service";

import { TicketCardComponent } from "./ticket-card.component";

describe("TicketCardComponent", () => {
  let component: TicketCardComponent;
  let fixture: ComponentFixture<TicketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketCardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: {
              data: {
                assignee: { id: 111, name: "Victor" },
                assigneeId: 111,
                completed: false,
                description: "Install a monitor arm",
                id: 0,
              },
              paramMap: {
                get(): string {
                  return "";
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
