import {Component, signal} from "@angular/core";
import { injectSelector, injectDispatch } from "@reduxjs/angular-redux";
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./counter-slice";

@Component({
  selector: "app-counter",
  standalone: true,
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent {
  count = injectSelector(selectCount);
  dispatch = injectDispatch();
  incrementAmount = signal('2');
  setIncrementAmount(amount: string) {
    this.incrementAmount.set(amount);
  }
  getNumber(val: string) {
    return Number(val);
  }
  incrementByAmount = incrementByAmount;
  incrementAsync = incrementAsync;
  increment = increment;
  decrement = decrement;
}
