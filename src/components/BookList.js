import React from 'react'
import Books from './Books'



class BookList extends React.Component {
	state = {
		books: []
	}

  render() {


    return (
				<div>
        <div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
						<Books books={currentlyReading}/>
					</div>
					</div>

					<div className="bookshelf">
						<h2 className="bookshelf-title">Want to Read</h2>
						<div className="bookshelf-books">
							<Books books={wantToRead}/>
						</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<Books books={read}/>
							</div>
							</div>
							</div>
    )
  }
}

export default BookList
