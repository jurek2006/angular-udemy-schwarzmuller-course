import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-operation",
  templateUrl: "./operation.component.html",
  styleUrls: ["./operation.component.css"]
})
export class OperationComponent implements OnInit {
  @Input() operation: {
    value: number;
    description: string;
    operationType: string;
  };

  constructor() {}

  ngOnInit() {}
}
