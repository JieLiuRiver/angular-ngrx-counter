import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const ADD_POST_ACTION = '[POST PAGE] add post'

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
