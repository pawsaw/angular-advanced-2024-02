import { createAction, props } from '@ngrx/store';
import { Book } from '../models';

export const createBookStart = createAction('[Book] create book start', props<{ book: Book }>());
export const createBookSuccess = createAction('[Book] create book success', props<{ book: Book }>());

export const loadBooksStart = createAction('[Book] Load Books Started');
export const loadBooksSuccess = createAction('[Book] Load Books Completed', props<{ books: Book[] }>());
export const loadBooksError = createAction('[Book] Load Books Error', props<{ error: unknown }>());
