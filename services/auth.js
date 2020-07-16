export const loginQuery = (data) => `query {
  login(dibNumber: "${data.dibNumber}", password: "${data.password}") {
    user {
      _id,
      dibNumber, email, timezone,
      firstName, lastName
    },
    token,
  }
}`;

// export const registerQuery = (data) => `
//   mutation {
//     createUser(userInput:{ username:"${data.username}", password:"${data.password}", firstName:" ", lastName:" ", email:"${data.email}", timezone:"${data.timezone}", phone:" "})
//     {
//       username,
//       email,
//     }
//   }`;

export const checkAuthQuery = () => `query{
  checkLogin{
    isAuth
  }
  }`;
