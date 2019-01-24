export function logIn(user,token){
    return (dispatch) => {
      dispatch({ type: 'LOG_IN', user});
      sessionStorage.setItem("jwtToken", `${token}`);
    };
  };