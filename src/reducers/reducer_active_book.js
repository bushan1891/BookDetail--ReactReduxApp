
// if its undefined set it to null
export default function(state = null,action){

        switch (action.type) {
            case 'BOOK_SELECTED':
            return action.payload;
        }

  return state;
}
