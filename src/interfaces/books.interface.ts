export const genreOptions = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];
type Genre = (typeof genreOptions)[number];

export interface IBook {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}
