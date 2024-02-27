import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { Book } from '../models';
import { BookCardComponent } from '../book-card/book-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectAllBooks, selectBookCollectionSlice } from '../store';

@Component({
  selector: 'ws-book-list',
  styleUrls: ['./book-list.component.scss'],
  templateUrl: 'book-list.component.html',
  standalone: true,
  imports: [NgFor, BookCardComponent, AsyncPipe]
})
export class BookListComponent {
  protected books$: Observable<Book[]>;

  constructor(
    private readonly bookService: BookApiService,
    private readonly store: Store<AppState>
  ) {
    this.books$ = this.store.select(selectAllBooks);
  }
}
