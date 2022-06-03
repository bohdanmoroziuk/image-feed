export interface Item {
  id: string;
  author: string;
}

export interface Comment {
  id: string;
  text: string;
}

export type Comments = Record<string, Comment[]>;
