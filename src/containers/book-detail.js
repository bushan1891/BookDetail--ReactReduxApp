import React ,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
if(!this.props.book){
  return <div>Select a book get started. </div>;
}

    return(
      <div>
          <h3>Details of the Book :</h3>
          <p>{this.props.book.title}</p>
          <p>{this.props.book.pages}</p>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    book:state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
