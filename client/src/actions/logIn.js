export function logIn(user){
    return (dispatch) => {
      dispatch({ type: 'LOG_IN', user});
      sessionStorage.setItem("ID", `${user.id}`);
    };
  };