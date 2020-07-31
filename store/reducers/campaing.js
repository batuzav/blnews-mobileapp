const initialState = {
  _id: "",
  title: "",
  description: "",
  img: "",
  category: [],
};

const Campaign = (state = initialState, action) => {
  switch (action.type) {
    case "CAMPAIGN_UPDATE":
      return {
        ...state,
        ...action.payload,
      };
    case "CAMPAIGN_EXIT":
      return initialState;
    default:
      return state;
  }
};

export default Campaign;
