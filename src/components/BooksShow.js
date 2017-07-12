import React from 'react'
import BookList from './BookList'
import { Link } from 'react-router-dom'

class BooksShow extends React.Component{

  
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

            <BookList />

        <div className="open-search">
          <Link to="/search">
            <a>Add a book</a>
          </Link>
        </div>
      </div>
      </div>
    )
  }
}

export default BooksShow
