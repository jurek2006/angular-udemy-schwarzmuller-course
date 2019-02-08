import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  constructor() {}
  number: number = 0;
  interval;

  @Output() incrementedNumber = new EventEmitter<number>();

  ngOnInit() {}

  onStart() {
    this.interval = setInterval(() => {
      this.incrementedNumber.emit(++this.number);
    }, 1000);
  }

  onStop() {
    console.log("stop");
    clearInterval(this.interval);
  }
}
