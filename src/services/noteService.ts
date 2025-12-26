import axios from 'axios';
import type { Note, NoteTag } from '../types/note';

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

interface NoteHttpRequest {
  notes: Note[];
  totalPages: number;
}

interface NewNoteContent {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  search: string,
  page: number,
  perPage = 16
): Promise<NoteHttpRequest> => {
  const params = { search, page, perPage };
  const res = await axiosInstance.get<NoteHttpRequest>('/notes', { params });
  return res.data;
};

export const createNote = async (newNote: NewNoteContent) => {
  const res = await axiosInstance.post<Note>('/notes', newNote);
  return res.data;
};

export const deleteNote = async (id: string) => {
  const res = await axiosInstance.delete<Note>(`/notes/${id}`);
  return res.data;
};
