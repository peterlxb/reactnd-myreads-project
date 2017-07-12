import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class SearchBooks extends React.Component {

  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState({query:query.trim()})
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
              value={this.state.query}
              onChange={(event) => {
                this.updateQuery(event.target.value);
                
              }}
            />
            {JSON.stringify(this.state)}
          </div>

        </div>

        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>

    )
  }
}

export default SearchBooks
