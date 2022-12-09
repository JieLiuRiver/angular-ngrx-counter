
export interface Post {
  id: string;
  name: string;
  desc: string;
}

export interface PostsState {
  posts: Post[]
}

export const initialState: PostsState = {
  posts: [
    {
      id: '23423',
      name: 'AAA',
      desc: 'JSKDFJKLSDJFSKJFKDSJGKLJDSIHUMWLE[WIEJGMKDSNJHGDGKDSJKFSDJG'
    },
    {
      id: '23423',
      name: 'AAA',
      desc: 'JSKDFJKLSDJFSKJFKDSJGKLJDSIHUMWLE[WIEJGMKDSNJHGDGKDSJKFSDJG'
    }
  ]
}

