// import { createStore } from 'redux';
import { createStore, applyMiddleware } from "redux";

// import rootReducer from './reducers';
import appReducer from "./reducers";

import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

// export default store = createStore(rootReducer);
const clearStore = async () => {
  try {
    await AsyncStorage.removeItem("persist:root");
    return true;
  } catch (exception) {
    console.log("Error: ", exception);
    return false;
  }
};

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    console.log("<<<< USER LOGOUT >>>>");
    clearStore();
    state = undefined;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, undefined, applyMiddleware(thunk));
export const persistor = persistStore(store);
