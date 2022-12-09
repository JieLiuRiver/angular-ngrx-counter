import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup

  constructor(private store: Store<AppState>) {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      desc: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ])
    });
  }

  ngOnInit(): void {

  }

  onAddPost() {
    if (!this.postForm.valid) return;
    this.store.dispatch(addPost({ post: this.postForm.value }))
  }

}
