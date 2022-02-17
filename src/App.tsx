import { observer } from 'mobx-react';
import Spin from './components/spin';
import Search from './components/search';
import { booksStore } from './book.store';
import Book from './components/book';
import './style.css';

const App = () => {
  const { isLoading, books } = booksStore;

  return (
    <div>
      <h1 className='title'>BOOKS LOOKUP</h1>
      <Search/>
      <Spin isLoading={isLoading}/>
      <div className="books_container">
      {
        books.length
        ? books.map(({ key, cover, title, author}) => (
          <Book key={key} cover={cover} title={title} author={author}/>
        ))
        : <h2 className="nomatch_title">No books founded</h2>
      }
      </div>
    </div>
  )
}

export default observer(App);
