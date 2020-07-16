const initialState = {
  dibNumber: "",
  timezone: "",
  firstName: "",
  lastName: "",
  _id: null,
  email: "",
  phone: "",
};

const User = (state = initialState, action) => {
  console.log("entro al reducer de usurio: ", action.type);
  switch (action.type) {
    case "SYNC_USER_DATA":
      console.log("entro a la accion");
      console.log("state de user:", state);
      console.log("action de usurio: ", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default User;
