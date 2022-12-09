import { createReducer, on } from '@ngrx/store';
// import { increment } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  // on(increment, (state, action) => {
  //   return {
  //     ...state,
  //     posts: action.value,
  //   };
  // })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
