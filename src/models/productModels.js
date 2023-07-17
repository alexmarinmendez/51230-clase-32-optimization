    class ProdMem {
        constructor() {
            this.products = [               ]
        }
    
        findAll = () => {
            return this.products
        }
    
        create = (product) => {
            this.products.push(product)
        }
    }
    
    export default new ProdMem()