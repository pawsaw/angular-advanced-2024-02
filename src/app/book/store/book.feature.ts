import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { BookCollectionSlice, bookCollectionSliceName } from './book-collection.slice';
import { bookCollectionReducer } from './book-collection.reducer';

export const bookFeatureName = 'book';

export interface BookState {
  [bookCollectionSliceName]: BookCollectionSlice;
}

export const selectBookFeature = createFeatureSelector<BookState>(bookFeatureName);

export const bookReducers: ActionReducerMap<BookState> = {
  [bookCollectionSliceName]: bookCollectionReducer
};
