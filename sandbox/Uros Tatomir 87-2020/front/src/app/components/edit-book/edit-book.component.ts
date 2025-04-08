import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  @Input() book?: Book;
  @Output() bookUpdated = new EventEmitter<Book[]>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void{

  }

  updateBook(book:Book){
    this.bookService
      .updateBook(book)
      .subscribe((books : Book[]) => this.bookUpdated.emit(books));
  }
  deleteBook(book:Book){
    this.bookService
      .deleteBook(book)
      .subscribe((books : Book[]) => this.bookUpdated.emit(books));
  }
  createBook(book:Book){
    this.bookService
      .createBook(book)
      .subscribe((books : Book[]) => this.bookUpdated.emit(books));
  }
}
