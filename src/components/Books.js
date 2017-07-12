import React from 'react'



class Books extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:'none'}
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
      this.setState({value: event.target.value})
    };



  render(){

    const {books} =  this.props

    return(
      <ol className="books-grid">
        {books.map((book) => (

          <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={ { width: 128, height: 193}}  >
                <img src={book.imageURL} alt={book.title}/>
              </div>
              <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
          </div>
          </li>
        ))}
        </ol>
    )
  }

}


export default Books
