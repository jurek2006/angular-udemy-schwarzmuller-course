import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "s05-assignment";
  odds: number[] = [];
  evens: number[] = [];

  onNumberAdded(passedNumber: number) {
    passedNumber % 2 === 0
      ? this.evens.push(passedNumber)
      : this.odds.push(passedNumber);
  }
}
