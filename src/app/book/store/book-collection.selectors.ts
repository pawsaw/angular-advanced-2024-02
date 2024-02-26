import { createSelector } from '@ngrx/store';
import { selectBookFeature } from './book.feature';
import { Book } from '../models';

export const selectBookCollection = createSelector(selectBookFeature, feature => feature.bookCollection.entities);
export const selectBookByIsbn = (isbn: Book['isbn']) =>
  createSelector(selectBookCollection, books => books.find(book => book.isbn === isbn));
