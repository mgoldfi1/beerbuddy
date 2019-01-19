export function tabClicked(tab){
    return (dispatch) => {
      dispatch({ type: 'TAB', tab});
    };
  };