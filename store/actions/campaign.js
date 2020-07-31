import { apiCall } from "../../services/api";
import { getCampaignByIdQuery } from "../../services/campaigns";

const oneCampaignSuccess = (payload) => ({
  type: "CAMPAIGN_UPDATE",
  payload,
});

export const getCampaignById = (id) => {
  return async (dispatch, store) => {
    try {
      const { token } = store().app;
      const response = await apiCall(getCampaignByIdQuery(id), token);
      if (response.data.data) {
        // console.log("RESPONSE: ", response.data.data);
        dispatch(oneCampaignSuccess(response.data.data.getCampaignById));
      } else if (response.errors) {
        console.log(
          "get Campaigns Response error: ",
          response.errors[0].message
        );
      }
    } catch (e) {
      console.log("API call error: ", e);
    }
  };
};
