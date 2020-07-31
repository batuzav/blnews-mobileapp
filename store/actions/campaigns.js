import { apiCall } from "../../services/api";
import {
  getCampaignsQuery,
  getCampaignByCategoryQuery,
} from "../../services/campaigns";

const campaignSuccess = (payload) => ({
  type: "CAMPAIGNS_SUCCESS",
  payload,
});

export const getCampaigns = () => {
  return async (dispatch, store) => {
    try {
      const { token } = store().app;
      const response = await apiCall(getCampaignsQuery(), token);
      if (response.data.data) {
        dispatch(campaignSuccess(response.data.data.Campaigns));
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

export const getCampaignsByCategory = (category) => {
  return async (dispatch, store) => {
    try {
      const { token } = store().app;
      const response = await apiCall(
        getCampaignByCategoryQuery(category),
        token
      );

      if (response.data.data) {
        dispatch(campaignSuccess(response.data.data.getCampaignsByCategory));
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
