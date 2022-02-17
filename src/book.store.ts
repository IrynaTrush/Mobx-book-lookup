import { makeAutoObservable } from "mobx";
import api from './api';
import type { Book } from './api/types';

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    searchintByAuthor = false;
    query = '';
    books: Book[] = [] 

    setSearchingByAuthor = (value: boolean) => {
        this.searchintByAuthor = value
    }

    setQuery = (value: string) => {
        this.query = value
    }

    onSearch = async () => {
        try {
            this.isLoading = true
            const result = await api.searchBook(this.query, this.searchintByAuthor)
            if(result === null) return alert('Server error')

            this.books = result.filter((item: Book) => item.cover)
            this.books.forEach((item: Book) => item.title.toUpperCase())
        } finally {
            this.isLoading = false
        }
    }
}

export const booksStore = new Store();