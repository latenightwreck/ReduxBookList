import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)} 
          key={book.title} 
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

//Function to convert some state properties to props for connect
//the state variable is coming from index.js, which exports rootReducer
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

//Anything returned by this function will end up as props 
//on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed 
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//uses a function that returns an object, and a class that uses said function
export default connect(mapStateToProps, mapDispatchToProps)(BookList);