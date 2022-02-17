import { makeAutoObservable } from "mobx";
import api from './api';
import type { Book } from './api/types';

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    books: Book[] = [] 

    search = async (query: string) => {
        try {
            this.isLoading = true
            const result = await api.searchBook(query)
            if(result === null) return alert('Server error')

            this.books = result.filter((item: Book) => item.cover)
            this.books.forEach((item: Book) => item.title.toUpperCase())
        } finally {
            this.isLoading = false
        }
    }
}

export const booksStore = new Store();