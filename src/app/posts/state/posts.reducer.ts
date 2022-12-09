import { createReducer, on } from '@ngrx/store';
import { addPost } from './posts.actions';
// import { increment } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    const post = {...action.post}
    post.id =  String(state.posts.length)
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
