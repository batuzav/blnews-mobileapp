export const loginQuery = (data) => `query {
  login(dibNumber: "${data.dibNumber}", password: "${data.password}", tokkenApp:"${data.tokkenApp}") {
    user {
      _id,
      dibNumber, email, timezone,
      firstName, lastName, tokkenApp
    },
    token,
  }
}`;

export const checkAuthQuery = () => `query{
  checkLogin{
    isAuth
  }
  }`;

export const updateTokkenAppQuery = (data) => `query{
  updateUserTokkenApp(id:"${data.id}", tokkenApp:"${data.tokkenApp}"){
    _id,
      dibNumber, email, timezone,
      firstName, lastName, tokkenApp
  }
}`;
