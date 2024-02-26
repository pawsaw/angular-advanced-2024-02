import { createAction, props } from '@ngrx/store';
import { Book } from '../models';

export const createBookStart = createAction('[Book] create book start', props<{ book: Book }>());
export const createBookSuccess = createAction('[Book] create book success', props<{ book: Book }>());
