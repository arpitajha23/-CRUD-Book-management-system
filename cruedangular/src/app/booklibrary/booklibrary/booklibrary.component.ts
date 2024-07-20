import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  brand: string;
}

@Component({
  selector: 'app-booklibrary',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './booklibrary.component.html',
  styleUrl: './booklibrary.component.css'
})
export class BooklibraryComponent {

  searchQuery: string = '';
  books: Book[] = [];
  currentBook: Book = {
    id: 0,
    title: '',
    description: '',
    author: '',
    brand: ''
  };
  isEditingBook: boolean = false;
  isModalOpen: boolean = false; // Declare isModalOpen property here

  constructor() {}

  searchBooks(): void {
    if (this.searchQuery.trim() === '') {
      // If search query is empty, reset to original list
      this.books = [
       
      ];
    } else {
      // Filter books based on search query
      this.books = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  openAddModal(): void {
    this.isEditingBook = false;
    this.currentBook = {
      id: 0,
      title: '',
      description: '',
      author: '',
      brand: ''
    };
    this.isModalOpen = true; // Set isModalOpen to true to open modal
  }

  startEditBook(book: Book): void {
    this.isEditingBook = true;
    this.currentBook = { ...book }; // Create a copy of the book to edit
    this.isModalOpen = true; // Set isModalOpen to true to open modal
  }

  updateBook(book: Book): void {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book; // Update local array with updated book
    }
    this.closeModal(); // Close modal using method
    this.resetModalState();
  }

  deleteBook(book: Book): void {
    this.books = this.books.filter(b => b.id !== book.id); // Remove from local array
    this.closeModal(); // Close modal using method
    this.resetModalState();
  }

  saveBook(): void {
    if (this.isEditingBook) {
      this.updateBook(this.currentBook);
    } else {
      const newId = Math.max(...this.books.map(book => book.id)) + 1;
      const newBook: Book = { ...this.currentBook, id: newId };

      this.books.push(newBook); // Add the new book to local array
      this.closeModal(); // Close modal using method
      this.resetModalState();
    }
  }

  closeModal(): void {
    this.isModalOpen = false; // Close modal by setting isModalOpen to false
  }

  resetModalState(): void {
    this.currentBook = {
      id: 0,
      title: '',
      description: '',
      author: '',
      brand: ''
    };
    this.isEditingBook = false;
  }
}