export const add = () => ({ type: "add" });
export const minus = () => ({ type: "minus" });
export const asyAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "add" });
  }, 1000);
};
