const initialState = {
  type: "default",
  desc: "",
  show: false,
};

const Notification = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        type: action.payload.type || initialState.type,
        desc: action.payload.desc || initialState.desc,
        show: true,
      };
    case "HIDE_NOTIFICATION":
      return {
        ...state,
        show: false,
      };
    case "RESET_NOTIFICATION":
      return initialState;

    default:
      return state;
  }
};

export default Notification;
