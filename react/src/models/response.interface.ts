export interface Response {
  ok: boolean;
  post: Post;
}

interface Post {
  author: string;
  comments: any[];
  content: string;
  displayTime: string;
  id: string;
  isMyPost: boolean;
  myVote: number;
  timestamp: number;
  votes: number;
}
