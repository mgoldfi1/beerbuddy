export default function userReducer(state = {user: '', logging_out: false, loading: false}, action) {
    switch (action.type) {
  
      case 'LOG_IN':
        return {user: action.user, logging_out: false, loading: false};
  
      case 'LOG_OUT':
        return {user: '', logging_out: true, loading: false}
  
      default:
        return state;
  
    }
  };