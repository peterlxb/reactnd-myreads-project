import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'
import Books from './components/Books'
import './App.css'

class SearchBooks extends React.Component {

  state = {
    query:'',
    books:[]
  }

  updateQuery = (query) => {

    if(!query){
      this.setState({query:'',books:[]});
    } else {
      this.setState({query:query.trim()})
      BooksAPI.search(query).then((books) => {
        if(books.error){
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
            {JSON.stringify(this.state)}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
            {console.log(this.state.books)}
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                .map(book => (
                  <Books
                  onmoveBook={this.props.moveBook}
                  key={book.id}
                  book={book}
                  booksonShelf={this.props.booksonShelf}
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
