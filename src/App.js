import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import Bookshelf from './components/Bookshelf'
import './App.css'

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
          <Bookshelf
            onmoveBook={this.moveBook}
            booksonShelf={this.state.books}
          />
        )} />
        <Route  path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
