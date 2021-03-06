export const getCampaignsQuery = () => `query{
    Campaigns{
      _id,
      title,
      subtitle,
      img,
    }
  }`;

export const getCampaignByCategoryQuery = (category) => `query{
  getCampaignsByCategory(category:"${category}"){
    _id,
    title,
    subtitle,
    img,
  }
}`;

export const getCampaignByIdQuery = (id) => `query{
  getCampaignById(id:"${id}"){
    _id,
    title,
    description,
    img,
    category,
    imageBody,
  }
}`;
