import React from 'react'
import Book from './Books'
import sortBy from 'sort-by'


class BookList extends React.Component {
  render() {
    let shelves = ["currentlyReading","wantToRead","read"];
    let shelvesName = ["Currently Reading", "Want to Read", "Read"];

    return (
        <div>
          {shelves.map((shelf,index) => {
            return(
              <div key={index}>
              <div className="bookshelf">
    					    <h2 className="bookshelf-title">{shelvesName[index]}</h2>
    					    <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.booksOnShelf.sort(sortBy('title'))
                    .filter(book => book.shelf === shelf )
                    .map(book => (
                      <Book
                        onmoveBook={this.props.onmoveBook}
                        key={book.id}
                        book={book}
                      />
                    ))
                  }
                  </ol>
    					    </div>
    				   </div>
              </div>
            )}
          )}
        </div>

    )
  }
}

export default BookList
