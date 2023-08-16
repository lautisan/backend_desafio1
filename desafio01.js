class ProductManager{
    constructor(){
        this.product=[]
    }
    addProduct({title, description, price, thumbnail, code, stock}){   
        
        if(title=="" || title== undefined || description=="" ||description == undefined || price=="" || price == undefined || thumbnail== "" || thumbnail== undefined || code=="" || code== undefined || stock== 0 || stock == undefined ){
            return console.log("Debe ingresar todoso los campos del producto")
        }else{
            
            const id= this.product.length+1
            const producto = this.product.find(e => e.code === code)
            if (producto){
                return console.log("el codigo es invalido")
            }else if (!producto){
                this.product.push({
                    id,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                })
                console.log(this.product[this.product.length-1].id)
            }
            
        }

    } 
      
    getProduct() { 
        return this.product
    }

    getProduct_length() { 
        return this.product.length
    }
    getProductById(productId) {
        const producto = this.product.find(e => e.id === productId)
        if (!producto){
            return console.log("el id es invalido")
        }
        if (producto){
            console.log(producto)
        }
    }
    
}

const p =new ProductManager()
 p.addProduct({ title: 'aaaaaa', description: "cuatro puertas", price: "100", thumbnail: "dasfasdadsa", code: "ABC1", stock: 20})
 p.addProduct({ title: 'asdfasd', description: "aadsfasdasszxcvz", price: "10", thumbnail: "asdfasd", code: "ABC2" , stock: 55})
 p.addProduct({ title: 'auto', description: "3 puertas", price: "500", thumbnail: "dasfasdadsa", code: "ABC6", stock: 5})
 p.addProduct({ title: 'moto', description: "0 puertas", price: "500", thumbnail: "dasfasdadsa", code: "ABC3", stock: 5})
 p.addProduct({ title: 'camioneta', description: "3 puertas", price: "500", thumbnail: "dasfasdadsa", code: "ABC4", stock: 5})


console.log(p.getProduct())
// console.log(p.getProductById(3))
