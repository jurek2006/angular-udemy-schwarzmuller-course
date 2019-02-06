import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @Output() operationAdded = new EventEmitter<{
    value: number;
    description: string;
    operationType: string;
  }>();

  value: number;
  description: string;

  constructor() {}

  ngOnInit() {}

  onAddOperation() {
    this.operationAdded.emit({
      value: this.value,
      description: this.description,
      operationType: this.value >= 0 ? "income" : "expense"
    });
  }
}
