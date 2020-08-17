export const loginQuery = (data) => `query {
  login(dibNumber: "${data.dibNumber}", password: "${data.password}", tokkenApp:"${data.tokkenApp}") {
    user {
      _id,
      dibNumber, email, timezone,
      firstName, lastName, tokkenApp, img
    },
    token,
  }
}`;

export const checkAuthQuery = () => `query{
  checkLogin{
    isAuth
  }
  }`;
