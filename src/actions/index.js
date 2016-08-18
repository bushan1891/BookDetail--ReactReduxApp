export function selectBook(book) {
 // selectBook is a action creator , it needs to return an action ,
 // an object with a type property
 // allways contains type ( upper case )
 return{
   type : 'BOOK_SELECTED',
   payload:book
 };
}
