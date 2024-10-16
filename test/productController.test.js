const request = require("supertest")
const app = require("../index.js")
const agent = request.agent(app)


describe("Testing productRoutes", () => {
    test("Get all product", async () => {
        resProduct = await request(app).get("/products").expect(200)
    })
    
    test("Get all camisetas", async () => {
        resProduct = await request(app).get("/products/camisetas").expect(200)
    })
    
    test("Get all pantalones", async () => {
        resProduct = await request(app).get("/products/pantalones").expect(200)
    })
    
    test("Get all zapatos", async () => {
        resProduct = await request(app).get("/products/zapatos").expect(200)
    })
    
    test("Get all accesorios", async () => {
        resProduct = await request(app).get("/products/accesorios").expect(200)
    })

    test("Get a single product", async () => {
        const _id = "67043f32644be3047543c09c"
        resProduct = await request(app).get(`/products/${_id}`).expect(200)
    })
})

describe("Testing authRoutes", () => {
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOWJlZmQzZWZmY2JiYzgyYzgzYWQwYzk3MmM4ZWE5NzhmNmYxMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdGJyZWFrMiIsImF1ZCI6InByb2plY3RicmVhazIiLCJhdXRoX3RpbWUiOjE3Mjg5Mzc0NDEsInVzZXJfaWQiOiJ6MmNNQmRMMW5QV3hRVHlhOWFab2V5NXhuS2cxIiwic3ViIjoiejJjTUJkTDFuUFd4UVR5YTlhWm9leTV4bktnMSIsImlhdCI6MTcyODkzNzQ0MSwiZXhwIjoxNzI4OTQxMDQxLCJlbWFpbCI6InBydWViYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicHJ1ZWJhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jSIloZ545STwHU8d6eQp2NKkTd8HkhQMZjBQrrU1AxBhckM78YbvsE5SjM-pqoU9NUY23FkLhaBw32GS7wJpsnCQRW0ylmq0UEkbnHJB27UYNchbT8xVZiCoLEJIb0HuDDopvgAUmhWVGA6MrWl1UcpzBRosQmej9E36OkIh_qXNwuW8Ua4Rzzc59DnxOP2FS0S6tW4uT1tEKjaK7M2JjYR1NuUUqLelhDComjiykHnvDBL1AuIUwMHTxX-rpp2TVsMcTTw8xs1xIpZWOmECqSflcu-X1gFuh168UKAbKWAnFqYCQqCKuSqpO5iJxKfqNkRjrqOhEecgF96zfKnqpw"
    const cookie = `token=${token}`
    test("Get all product in /dashboard", async () => {
        const response = await(app).get("/login").set("Cookie", cookie).expect(200)
        await(app).get("/dashboard").expect(200)
    })
})

/*
describe("Testing authRoutes", () => {
    const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhkOWJlZmQzZWZmY2JiYzgyYzgzYWQwYzk3MmM4ZWE5NzhmNmYxMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvamVjdGJyZWFrMiIsImF1ZCI6InByb2plY3RicmVhazIiLCJhdXRoX3RpbWUiOjE3Mjg5Mzc0NDEsInVzZXJfaWQiOiJ6MmNNQmRMMW5QV3hRVHlhOWFab2V5NXhuS2cxIiwic3ViIjoiejJjTUJkTDFuUFd4UVR5YTlhWm9leTV4bktnMSIsImlhdCI6MTcyODkzNzQ0MSwiZXhwIjoxNzI4OTQxMDQxLCJlbWFpbCI6InBydWViYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicHJ1ZWJhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jSIloZ545STwHU8d6eQp2NKkTd8HkhQMZjBQrrU1AxBhckM78YbvsE5SjM-pqoU9NUY23FkLhaBw32GS7wJpsnCQRW0ylmq0UEkbnHJB27UYNchbT8xVZiCoLEJIb0HuDDopvgAUmhWVGA6MrWl1UcpzBRosQmej9E36OkIh_qXNwuW8Ua4Rzzc59DnxOP2FS0S6tW4uT1tEKjaK7M2JjYR1NuUUqLelhDComjiykHnvDBL1AuIUwMHTxX-rpp2TVsMcTTw8xs1xIpZWOmECqSflcu-X1gFuh168UKAbKWAnFqYCQqCKuSqpO5iJxKfqNkRjrqOhEecgF96zfKnqpw";
    const cookie = `token=${token}`;
    
    test("Get dashboard after login", async () => { //Simula una autenticación exitosa
        const loginResponse = await request(app).get("/login").set("Cookie", cookie).expect(200);
        
        const dashboardResponse = await request(app) .get("/dashboard").set("Cookie", cookie).expect(200);
        
        expect(dashboardResponse.body).toHaveProperty('user'); // Asegurar de que la respuesta contiene los datos del usuario
    });
});

*/ 