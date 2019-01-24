export default function userReducer(state = {user: '', tab: 0}, action) {
    switch (action.type) {
  
      case 'LOG_IN':
        return {...state, user: action.user};
  
      case 'LOG_OUT':
        return {...state, user: ''}

      case 'TAB':
      console.log(action)
        return {...state, tab: action.tab}
  
      default:
        return state;
  
    }
  };