import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "custom-databinding-finance-exercise";

  operations: {
    value: number;
    description: string;
    operationType: string;
  }[] = [
    {
      value: 15.8,
      description: "sold item",
      operationType: "income"
    },
    {
      value: -10000,
      description: "new car",
      operationType: "expense"
    }
  ];

  onOperationAdded(operationData: {
    value: number;
    description: string;
    operationType: string;
  }) {
    this.operations.push(operationData);
  }
}
