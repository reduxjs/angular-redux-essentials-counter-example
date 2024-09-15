import { Component } from '@angular/core';
import {CounterComponent} from "./features/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  logo = "/logo.svg";
}
