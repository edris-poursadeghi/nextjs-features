// data/posts.ts
interface Post {
  id: string;
  title: string;
  content: string;
  categoryId: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "This is post 1 .",
    categoryId: "1",
  },
  {
    id: "2",
    title: "Post 2 ",
    content: "This is post 2 .",
    categoryId: "2",
  },
  {
    id: "3",
    title: "Post 3 ",
    content: "This is post 3 .",
    categoryId: "3",
  },
];
