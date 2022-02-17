import { observer } from 'mobx-react';
import Spin from './components/spin';
import Search from './components/search';
import { booksStore } from './book.store';
import './style.css';

const App = () => {
  const { isLoading, books } = booksStore;

  return (
    <div>
      <h1 className='title'>BOOKS LOOKUP</h1>
      <Search/>

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
