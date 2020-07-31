const initialState = {
  isLogged: false,
  serverError: false,
  loginError: false,
  errorMsg: "",
  loading: false,
  isSocketConnected: false,
  token: "",
  tokkenApp: "",
};

const App = (state = initialState, action) => {
  console.log("entro al reducer");
  switch (action.type) {
    case "LOGIN_RESET":
      console.log("LOGIN_REST");
      return initialState;
    case "SERVER_CALL":
      console.log("SERVER_CALL");
      return {
        ...initialState,
        loading: true,
      };
    case "SERVER_ERROR":
      console.log("SERVER_ERROR");
      return {
        ...initialState,
        serverError: true,
        loading: false,
        errorMsg: action.payload.message,
      };
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return {
        ...initialState,
        loading: false,
        isLogged: true,
        token: action.payload.token,
      };
    case "LOGIN_FAILED":
      console.log("LOGIN_FAILED");
      return {
        ...initialState,
        loginError: true,
        loading: false,
        errorMsg: action.payload.message,
      };
    case "SOCKET_CONNECTED":
      return {
        ...state,
        isSocketConnected: true,
      };
    case "SOCKET_DISCONNECTED":
      return {
        ...state,
        isSocketConnected: false,
      };
    case "LOGOUT":
      console.log("LOGOUT");
      // return {
      //   ...initialState,
      //   isLogged: false,
      // }
      return initialState;
    default:
      return state;
  }
};

export default App;
