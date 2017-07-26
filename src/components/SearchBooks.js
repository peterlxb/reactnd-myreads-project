import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import sortBy from 'sort-by'
import Book from './Books'
import '../App.css'

class SearchBooks extends React.Component {

  state = {
    query:'',
    books:[]
  }

  updateQuery = (query) => {

    if(!query){
      this.setState({query:'',books:[]});
    } else {
      this.setState({query: query.trim()})
      BooksAPI.search(query).then((books) => {
        if(books.error) {
          books = [];
        }
        this.setState({books})
      })
    }

  }



  render() {

    return (

      <div className="search-books">

        <div className="search-books-bar">

          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                .map(book => (
                  <Book
                    onmoveBook={this.props.onmoveBook}
                    key={book.id}
                    book={book}
                    booksOnShelf={this.props.booksOnShelf}
                  />
                ))
              }

              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
