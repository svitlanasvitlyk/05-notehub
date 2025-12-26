import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
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
  page = 1,
  search = "",
  perPage = 16
): Promise<NoteHttpRequest> => {
  const res = await axiosInstance.get("/notes", { params: { page, search, perPage } });
  return res.data;
};

export const createNote = async (newNote: NewNoteContent): Promise<Note> => {
  const res = await axiosInstance.post("/notes", newNote);
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await axiosInstance.delete(`/notes/${id}`);
  return res.data;
};
