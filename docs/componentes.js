module.exports = {
    components:{
        schemas:{
            Product:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"user identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    name:{
                        type:'string',
                        description:"name of the product",
                        example:"Camiseta"
                    },
                    description:{
                        type:'string',
                        description:"description of the product",
                        example:"Una camiseta de color azul"
                    },
                    price:{
                        type:'number',
                        description:"price of the product",
                        example:"32"
                    },
                    category:{
                        type:'string',
                        description:"category of the product [camisetas, pantalones, zapatos, accesories]",
                        example:"camisetas"
                    },
                    size:{
                        type:'array',
                        description:"size of the product (xs to xxl for shirt, pants, and accesories and 39 to 44 for shoes)",
                        example:"[xs, s, l, xxl]"
                    },
                }
            }
        }
    }
}