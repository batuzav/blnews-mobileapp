const initialState = {
  list: [],
};

const Campaigns = (state = initialState, action) => {
  switch (action.type) {
    case "CAMPAIGNS_SUCCESS":
      return { ...initialState, list: action.payload };
    case "CAMPAIGNS_UPDATE":
      return { ...initialState, list: action.payload };
    default:
      return state;
  }
};

export default Campaigns;
