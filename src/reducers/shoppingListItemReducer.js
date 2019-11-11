export default function shoppingListItemReducer(state = {
  items: [],
  users: [ 'initial user' ]
}, action) {

  switch(action.type) {

    case 'GET_COUNT_OF_ITEMS':
      return {
         ...state,
         items: [...state.items, (state.items.length + 1)]
       }

    case 'GET_COUNT_OF_USERS':
      return {
        ...state,
        users: [...state.users, (state.users.length + 1)]
      }

    default:
      return state;
  }
};
