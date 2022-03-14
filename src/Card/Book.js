import React from 'react';
  
import './card.css';
import { data } from './BookData';
 
const Books = () => {
  return (
    <>
      <div className="bookList">
        {
        data.map(book => {
          
          const {img, title, author, id} = book;

          return(
            <article key={id} className='books'>
              <img src={img} alt={title} />
              <h1>{title}</h1>
              <h4>{author}</h4> 
          </article>
          );
          
        })
      }
      </div>
    </>
  )
}

export default Books;