import { createFeatureSelector } from '@ngrx/store';
import { BookCollectionSlice, bookCollectionSliceName } from './book-collection.slice';

export const bookFeatureName = 'book';

export interface BookState {
  [bookCollectionSliceName]: BookCollectionSlice;
}

export const selectBookFeature = createFeatureSelector<BookState>(bookFeatureName);
