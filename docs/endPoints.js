module.exports = {
    paths: {
        "/products": {
          get: {
            tags: ["See all the products"],
            description: "See all products",
            operationId: "getProducts",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the product ",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/products/camisetas": {
          get: {
            tags: ["See all the shirts"],
            description: "See all shirts",
            operationId: "getCamisetas",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the shirts ",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/products/pantalones": {
          get: {
            tags: ["See all the pants"],
            description: "See all pants",
            operationId: "getPantalones",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the pants ",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/products/zapatos": {
          get: {
            tags: ["See all the shoes"],
            description: "See all shoes",
            operationId: "getZapatos",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the shoes ",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/products/accesorios": {
          get: {
            tags: ["See all the accesories"],
            description: "See all accesories",
            operationId: "getAccesorios",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the accesories ",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/products/{_id}": {
          get: {
            tags: ["See the accesories by id"],
            description: "See the accesories by id",
            operationId: "getAccesorios",
            parameters: {
                name: "_id",
                in: "path",
                description: "id of the product"
            },
            responses: {
              200: {
                description: "Successfull to get the product by id",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard": {
          get: {
            tags: ["See all the products to edit"],
            description: "See all products to edit",
            operationId: "getDashboard",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the product to edit",
              },
              500: {
                description: "Server error",
              },
            },
          },
          post: {
            tags: ["Create a new product"],
            description: "Create a new product",
            operationId: "postDashboard",
            parameters: [],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Product"
                        }
                    }
                }
            },
            responses: {
              201: {
                description: "Successfull to create a new product",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/camisetas": {
          get: {
            tags: ["See all the shirts to edit"],
            description: "See all shirts to edit",
            operationId: "getDashboardCamisetas",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the shirts to edit",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/pantalones": {
          get: {
            tags: ["See all the pants to edit"],
            description: "See all pants to edit",
            operationId: "getDashboardPantalones",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the pants to edit",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/zapatos": {
          get: {
            tags: ["See all the shoes to edit"],
            description: "See all shoes to edit",
            operationId: "getDashboardZapatos",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the shoes to edit",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/accesorios": {
          get: {
            tags: ["See all the accesories to edit"],
            description: "See all accesories to edit",
            operationId: "getDashboardAccesories",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get all the accesories to edit",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/{_id}": {
          get: {
            tags: ["See the accesories by id to edit or delete"],
            description: "See the accesories by id to edit or delete",
            operationId: "getProductById",
            parameters: {
                name: "_id",
                in: "path",
                description: "id of the product"
            },
            responses: {
              200: {
                description: "Successfull to get the product by id",
              },
              500: {
                description: "Server error",
              },
            },
          },
          put: {
            tags: ["Edit a product"],
            description: "Edit a product",
            operationId: "putDashboard",
            parameters: [],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Product"
                        }
                    }
                }
            },
            responses: {
              201: {
                description: "Successfull to edit a product",
              },
              500: {
                description: "Server error",
              },
            },
          },
          delete: {
              tags: ["Delete a product"],
              description: "Delete a product",
              operationId: "deleteDashboard",
              parameters: [],
              responses: {
                201: {
                  description: "Successfull to delete a product",
                },
                500: {
                  description: "Server error",
                },
              },
            }
        },
        "/dashboard/new": {
          get: {
            tags: ["See a form to create a new product"],
            description: "See a form to create a new product",
            operationId: "getAccesorios",
            parameters: [],
            responses: {
              200: {
                description: "Successfull to get the formulary",
              },
              500: {
                description: "Server error",
              },
            },
          }
        },
        "/dashboard/{_id}/edit": {
          get: {
            tags: ["See a form to edit a product"],
            description: "See a form to edit a product",
            operationId: "getDashboardEdit",
            parameters: {
                name: "_id",
                in: "path",
                description: "id of the product"
            },
            responses: {
              200: {
                description: "Successfull to get the formulary",
              },
              500: {
                description: "Server error",
              },
            },
        }
    },
},    
}
