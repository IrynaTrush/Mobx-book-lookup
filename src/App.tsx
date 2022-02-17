import React from 'react';
import { observer } from 'mobx-react';
import Spin from './components/spin';
import { Input } from './components/input';
import { booksStore } from './book.store';
import './style.css';

const App = () => {
  const { isLoading, books, search } = booksStore;

  return (
    <div>
      <Input isLoading={isLoading} onSearch={search} />

      <Spin isLoading={isLoading}/>

      {
        books.map(({ key, cover, title, author}) => (
          <div key={key}>
            <img 
              src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
              alt=""
              className='cover'
            />

            <div>
              {title}
              <br/>
              <i>{author}</i>
            </div>

            <hr/>
          </div>
        ))
      }
    </div>
  )
}

export default observer(App);
