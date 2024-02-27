import { createSelector } from '@ngrx/store';
import { selectBookFeature } from './book.feature';
import { adapter } from './book-collection.adapter';
import { selectRouteParam } from '../../store';

export const selectBookCollectionSlice = createSelector(selectBookFeature, feature => feature.bookCollection);
export const { selectAll: selectAllBooks, selectEntities: selectBookEntities } =
  adapter.getSelectors(selectBookCollectionSlice);

export const selectBookByIsbn = createSelector(
  selectRouteParam('isbn'),
  selectBookEntities,
  (isbn, bookEntities) => bookEntities[isbn!]!
);
