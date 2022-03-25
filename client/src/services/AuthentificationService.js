import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
};

// Appel la methode
// AuthentificationService.register(
//     email : 'testing@gmail.com'
//     password: '123456'
// )
