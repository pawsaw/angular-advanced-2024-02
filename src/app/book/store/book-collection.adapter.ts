import { createEntityAdapter } from '@ngrx/entity';
import { Book } from '../models';

export const adapter = createEntityAdapter<Book>({ selectId: model => model.isbn });
