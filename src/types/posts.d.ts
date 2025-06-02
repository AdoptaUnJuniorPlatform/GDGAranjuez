interface Post {
  slug: string;
  data: {
    title: string;
    excerpt: string;
    date: Date;
    author: string;
    authorImage: string;
    tags?: string[];
  };
  body: string;
}