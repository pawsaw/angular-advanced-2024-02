import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export const routerFeatureName = 'router';

export const selectRouter = createFeatureSelector<RouterReducerState>(routerFeatureName);
