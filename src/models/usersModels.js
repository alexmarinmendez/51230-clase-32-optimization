    class UserMem {
        constructor() {
            this.users = [               ]
        }
    
        findAll = () => {
            return this.users
        }
    
        create = (user) => {
            this.users.push(user)
        }
    }
    
    export default new UserMem()