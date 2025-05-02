export type Issue = {
  id: number;
  number: number;
  title: string;
  state: string;
  html_url: string;
  user: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
  created_at: string;
  updated_at: string;
  comments: number;
  body: string;
};