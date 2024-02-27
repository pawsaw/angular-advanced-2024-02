import { createSelector } from '@ngrx/store';
import { selectBookFeature } from './book.feature';
import { Book } from '../models';
import { adapter } from './book-collection.adapter';

export const selectBookCollectionSlice = createSelector(selectBookFeature, feature => feature.bookCollection);
export const { selectAll: selectAllBooks, selectEntities: selectBookEntities } =
  adapter.getSelectors(selectBookCollectionSlice);

export const selectBookByIsbn = (isbn: Book['isbn']) =>
  createSelector(selectBookEntities, bookEntities => bookEntities[isbn]);
