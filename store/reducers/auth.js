const initialState = {
  verificationCode: "",
  isValidCode: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SET_VERIFICATION_CODE":
      return {
        ...state,
        verificationCode: action.payload,
      };
    case "AUTH_VALIDATE_VERIFICATION_CODE":
      return {
        ...state,
        isValidCode: action.payload,
      };
    default:
      return state;
  }
};

export default Auth;
