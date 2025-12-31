export interface Note {
  title: string;
  content: string;
  tag: NoteTag;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export type NotePost = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;

