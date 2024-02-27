import { getRouterSelectors } from '@ngrx/router-store';
import { selectRouter } from './router.feature';

export const { selectRouteParam } = getRouterSelectors(selectRouter);
