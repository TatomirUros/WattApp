import { Component } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  books: Book[] = []
  bookToEdit ?: Book

  constructor(private bookService: BookService) {}

  ngOnInit() : void{
    this.bookService
      .getBooks()
      .subscribe((result: Book[]) => (this.books = result));  
  }

  updateBookList(books: Book[]) {
    this.books = books;
  }


  initNewBook() {
    this.bookToEdit = new Book();
  }
  editBook(book: Book){
    this.bookToEdit = book;
  }
  



}
