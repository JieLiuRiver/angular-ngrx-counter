
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
      name: 'AAA1',
      desc: 'JSKDFJKLSDJFSKJFKDSJGKLJDSIHUMWLE[WIEJGMKDSNJHGDGKDSJKFSDJG'
    },
    {
      id: '23424',
      name: 'AAA2',
      desc: 'JSKDFJKLSDJFSKJFKDSJGKLJDSIHUMWLE[WIEJGMKDSNJHGDGKDSJKFSDJG'
    }
  ]
}

