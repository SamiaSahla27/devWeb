import Api from '@/services/Ap'

export default {
    register(credentials){
        return Api().post('register', credentials)
    }
    
}

// Appel la methode 
// AuthentificationService.register(
//     email : 'testing@gmail.com'
//     password: '123456'
// )