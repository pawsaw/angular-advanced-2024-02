import { BookState, bookFeatureName } from '../book/store';

export interface AppState {
  [bookFeatureName]: BookState;
}
