import './style.css';

interface IBook {
    cover: string;
    title: string;
    author: string;
}

const Book = (props: IBook) => {
    const { cover, title, author } = props;
    return (
        <div className="book_container">
            <img 
              src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
              alt=""
              className='cover'
            />

            <div className='book_description'>
              <div className='book_text'><span className="book_label">Title: </span>{title}</div>
             <div className='book_text'><span className="book_label">Author: </span>{author}</div>
            </div>
          </div>
    )
}

export default Book;