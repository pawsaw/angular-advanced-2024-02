import { createReducer, on } from '@ngrx/store';
import { BookCollectionSlice } from './book-collection.slice';
import { createBookStart, createBookSuccess, loadBooksStart, loadBooksSuccess } from './book-collection.actions';
import { adapter } from './book-collection.adapter';

export const initialState: BookCollectionSlice = {
  ...adapter.getInitialState(),
  loading: false
};

export const bookCollectionReducer = createReducer(
  initialState,
  on(createBookStart, (state): BookCollectionSlice => {
    return {
      ...state,
      loading: true
    };
  }),
  on(createBookSuccess, (state, action): BookCollectionSlice => {
    return {
      ...adapter.addOne(action.book, state),
      loading: false
    };
  }),
  on(loadBooksStart, (state): BookCollectionSlice => {
    return {
      ...state,
      loading: true
    };
  }),
  on(loadBooksSuccess, (state, action): BookCollectionSlice => {
    return {
      ...adapter.setAll(action.books, state),
      loading: false
    };
  })
);
