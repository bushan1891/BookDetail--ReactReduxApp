import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; // make sure goes throug all the redusers

// containers are react components which has direct access to react components
class BookList extends Component{

// how to get the this.props

renderList(){
  return this.props.books.map((book) => {
    return (
      <li
       onClick={()=>this.props.selectBook(book)}
       key={book.title}
       className="list-group-item">
       {book.title}
       </li>
    )
  })
}

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// ######## if the state chages the component is auto rerendered #################

function mapStateToProps(state){
  // what ever gets returend from here show up as this.props
  console.log(state);
        return {
          books:state.books
        };
}

// Anything returened from this end up in props of BookList container
// this.selectBook is now available
function mapDispatchToProps(dispatch){
  // Whenever the selectBook is called , the result should be passed to all our reducers
  return bindActionCreators({selectBook:selectBook},dispatch);
}


// promote BookList from component to a container
// takes a fuction and component to produce a containers
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
