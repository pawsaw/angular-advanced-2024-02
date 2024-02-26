import { createSelector } from '@ngrx/store';
import { selectBookFeature } from './book.feature';

export const selectBookCollection = createSelector(selectBookFeature, feature => feature.bookCollection.entities);
