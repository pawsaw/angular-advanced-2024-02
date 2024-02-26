import { BookCollectionSlice, bookCollectionSliceName } from './book-collection.slice';

export const bookFeatureName = 'book';

export interface BookState {
  [bookCollectionSliceName]: BookCollectionSlice;
}
