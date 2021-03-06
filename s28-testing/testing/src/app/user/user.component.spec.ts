import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { DataService } from "../shared/data.service";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, "getDetails").and.returnValue(
      Promise.resolve("DataFromSpy")
    );
    // fixture.detectChanges(); // if left uncommented spyOn won't work properly
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should use the user name from the service", () => {
    let userService = fixture.debugElement.injector.get(UserComponent);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(component.user.name);
  });

  it("should display the user name if user is logged in", () => {
    let compiled = fixture.debugElement.nativeElement;
    component.isLoggedIn = true; // "zalogowanie" użytkownika
    fixture.detectChanges();
    expect(compiled.querySelector("p").textContent).toContain(
      component.user.name
    );
  });

  it("should not display the user name if user is not logged in", () => {
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector("p").textContent).not.toContain(
      "component.user.name"
    );
  });

  it("should not fetch data successfully if not called asynchronously", () => {
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it("should fetch data successfully if called asynchronously", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe("DataFromSpy");
    });
  }));

  it("should fetch data successfully if called fakeAsync", fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.data).toBe("DataFromSpy");
  }));
});
