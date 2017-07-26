import React from 'react'



class Book extends React.Component {

  updateBook(shelf){
    this.props.onmoveBook(this.props.book, shelf)
  }

render(){

    const {book, booksOnShelf} =  this.props
    //console.log(book);
    if(booksOnShelf){
      booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)
    }

    return(

          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={ { width: 128, height: 193} }>
                {book.imageLinks ? <img src={book.imageLinks.thumbnail} alt={book.title}/> : "" }

              </div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}>
                  <option value="" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      )
  }

}


export default Book
