export const loginQuery = (data) => `query {
  login(dibNumber: "${data.dibNumber}", password: "${data.password}", tokkenApp:"${data.tokkenApp}") {
    user {
      _id,
      dibNumber, email, timezone,
      firstName, lastName, tokkenApp, img, countriesToSee
    },
    token,
  }
}`;

export const checkAuthQuery = () => `query{
  checkLogin{
    isAuth
  } 
  }`;

export const registerByAppMutation = (data) => `mutation{
  registerByApp(registerByAppInput: {dibNumber:"${data.dibNumber}", email:"${data.email}", password:"${data.password}", confirmPassword:"${data.confirmPassword}", } ){
    isRegister
  }
}`;

export const changeCountriesToSeeMutation = (data) => `mutation{
  changeCountriesToSee(dibNumber:"${data.dibNumber}", countriesToSee:${data.selectedCountries}){
  isChange
  newUser{
     _id,
      dibNumber, email, timezone,
      firstName, lastName, tokkenApp, img, countriesToSee
    
  }
  
  }
}`;
