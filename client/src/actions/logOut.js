export function logOut(){
    return (dispatch) => {
      dispatch({ type: 'LOG_OUT'});
      sessionStorage.removeItem('jwtToken');
    };
  };