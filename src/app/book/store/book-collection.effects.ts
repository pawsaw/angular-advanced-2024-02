import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookApiService } from '../book-api.service';
import { createBookStart, createBookSuccess, loadBooksStart, loadBooksSuccess } from './book-collection.actions';
import { exhaustMap, map } from 'rxjs';
import { Store } from '@ngrx/store';

// function isBooks(books: Book[] | ReturnType<typeof loadBooksError>): books is Book[] {
//   return Array.isArray(books);
// }

@Injectable()
export class BookCollectionEffects {
  load = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadBooksStart),
      exhaustMap(() => this.api.getAll()),
      map(books => loadBooksSuccess({ books }))
    );
  });

  create = createEffect(() => {
    return this.actions$.pipe(
      ofType(createBookStart),
      exhaustMap(action => this.api.create(action.book)),
      map(book => createBookSuccess({ book }))
    );
  });

  // load = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loadBooksStart),
  //     exhaustMap(() => this.api.getAll()),
  //     map(books => loadBooksSuccess({ books }))
  //     catchError(error => of(loadBooksError({ error })))
  //   );
  // });

  //   load = createEffect(
  //     () => {
  //       return this.actions$.pipe(
  //         ofType(loadBooksStart),
  //         exhaustMap(() => this.api.getAll()),
  //         tap({
  //           error: error => this.store.dispatch(loadBooksError({ error: error as unknown })),
  //           next: books => this.store.dispatch(loadBooksSuccess({ books }))
  //         })
  //       );
  //     },
  //     {
  //       dispatch: false
  //     }
  //   );

  constructor(
    private readonly store: Store,
    private readonly actions$: Actions,
    private readonly api: BookApiService
  ) {}
}
