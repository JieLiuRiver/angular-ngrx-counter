import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, changeChannelName } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  // channelName?: string
  channelName$?: Observable<string>

  constructor(private store: Store<{counter: CounterState}>) {

  }

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe((data) => {
    //   console.log('channelName subscribe')
    //   this.channelName = data;
    // })
    this.channelName$ = this.store.select(getChannelName)
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
