export default (state = [], action) => {
  let newState;

  switch(action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE': //return a new object of state with all of the quotes that are NOT the removed one
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: ++quote.votes}
        } else {
          return quote;
        }
      })
      return newState;

    case 'DOWNVOTE_QUOTE':
      newState = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: --quote.votes}
        } else {
          return quote;
        }
      })
      return newState;

    default: 
      return state;
  }
}
