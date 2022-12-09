import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {

  // counter?: number;
  counter$?: Observable<number>;
  counterSubscription?: Subscription

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store.select(getCounter).subscribe(data => {
    //   console.log('counter subscribe')
    //   this.counter = data;
    // });
    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    // this.counterSubscription?.unsubscribe()
  }

}
