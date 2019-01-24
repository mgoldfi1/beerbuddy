export function logIn(user,token){
    return (dispatch) => {
      dispatch({ type: 'LOG_IN', user});
      if (token) {
      sessionStorage.setItem("jwtToken", `${token}`)}
    };
  };