import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import '../App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  moveBook = (book, shelf) => {
      if (this.state.books) {
        this.setState((state) => ({
          books: state.books.filter((b) => b.id !== book.id)
        }))
        BooksAPI.update(book, shelf).then((result) => {
          BooksAPI.get(book.id).then((b) => {
              this.setState((state) => ({ books: state.books.concat([b]) }))
          })
        })
      }
    }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  };

render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books-content">
            <div>
              <Bookshelf
              onmoveBook={this.moveBook}
              booksOnShelf={this.state.books}
              />
            </div>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
        )} />
        <Route  path="/search" render={() => (
          <SearchBooks
            onmoveBook={this.moveBook}
            booksOnShelf={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
