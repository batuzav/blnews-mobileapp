const initialState = {
  _id: "",
  dibNumber: "",
  timezone: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  tokkenApp: "",
};

const User = (state = initialState, action) => {
  console.log("entro al reducer de usurio: ", action.type);
  switch (action.type) {
    case "SYNC_USER_DATA":
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
