import React from 'react'



class Books extends React.Component {

  updateBook(shelf){
    this.props.onmoveBook(this.props.book,shelf)
  }

render(){

    const {book, booksonShelf} =  this.props

    if(booksonShelf){
      booksonShelf.filter((b) => b.id === book.id).map(b => book.shelf === b.shelf)
    }
    return(

          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={ { width: 128, height: 193}}  >
                <img src={book.imageLinks} alt={book.title}/>
              </div>
              <div className="book-shelf-changer">
                <select value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}>
                  <option value="none" disabled>Move to...</option>
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


export default Books
