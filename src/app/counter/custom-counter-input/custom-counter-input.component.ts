import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, changeChannelName } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  channelName?: string

  constructor(private store: Store<{counter: CounterState}>) {

  }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.channelName = data.channelName;
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({
      value: this.value
    }))
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName({
      value: 'Hello World'
    }))
  }

}