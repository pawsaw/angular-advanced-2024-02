import { createReducer, on } from '@ngrx/store';
import { BookCollectionSlice } from './book-collection.slice';
import { createBookStart, createBookSuccess } from './book-collection.actions';

export const initialState: BookCollectionSlice = {
  entities: []
};

export const bookCollectionReducer = createReducer(
  initialState,
  on(createBookStart, (state): BookCollectionSlice => {
    return state;
  }),
  on(createBookSuccess, (state, action): BookCollectionSlice => {
    return {
      ...state,
      entities: [...state.entities, action.book]
    };
  })
);
