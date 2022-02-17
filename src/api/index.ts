import axios from 'axios';
import { keys } from 'mobx';
import type { Book } from './types';
const url = 'https://openlibrary.org/search.json';


async function searchBook(q: string, searchintByAuthor: boolean) {
    const author = q;
    try {
       const { data } = await axios({ url, params: searchintByAuthor ? {author} : {q} })
       return data.docs.map(({key, title, author_name, cover_i} : any) => ({
           key,
           title,
           author: author_name?.join(', '),
           cover: cover_i,
       }))
    } catch (error){
        console.error('search book', error)
        return null
    }
}

export default { searchBook }