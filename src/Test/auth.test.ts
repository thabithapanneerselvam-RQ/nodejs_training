// import request from "supertest";
// import app from "../app"; 
// import * as authRepo from "../Repositories/authRepository"
// import bcrypt from "bcryptjs"
// import * as jwtUtil from "../Utils/jwt";
// import { emailQueue } from "../Queue/emailQueue";

// const signupData = {
//     userName: "thabitha",
//     userEmail: "thabitha.pvst@gmail.com",
//     userPassword: "thabitha123",
//     userPhone: "9874563728"
// }


// jest.mock("../Repositories/authRepository")
// jest.mock("../Queue/emailQueue", () => ({
//   emailQueue: { add: jest.fn() },
// }));
// jest.mock("bcryptjs")
// jest.mock("../Utils/jwt")


// describe("Authentication API", () => {
//     afterEach(()=>{
//         jest.clearAllMocks();
//     })

//     it("should signup successfully", async()=>{
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue(null);
//         jest.spyOn(bcrypt, "hash").mockReturnValue("hashed-password" as any);

//         jest.spyOn(authRepo, "createUser")
//         .mockResolvedValue({
//             u_id:1,
//             userEmail: signupData.userEmail,
//         } as any);

//         const res = await request(app)
//         .post("/api/auth/signup")
//         .send(signupData)
                
//         expect(res.statusCode).toBe(200)
//         expect(res.body.message).toBe("signup successfull")
//     })


//     it("should fail if user already exists", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue({
//             u_id: 1,
//             userEmail: signupData.userEmail,
//         } as any);

//         const res = await request(app)
//             .post("/api/auth/signup")
//             .send(signupData);

//         expect(res.statusCode).toBe(400);
//         expect(res.body.message).toBe("user already exist");
//     });


//     it("should fail if database error occurs", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue(null);
//         jest.spyOn(bcrypt, "hash").mockReturnValue("hashed-password" as any);

//         jest.spyOn(authRepo, "createUser").mockRejectedValue(
//             new Error("DB error")
//         );

//         const res = await request(app)
//             .post("/api/auth/signup")
//             .send(signupData);

//         expect(res.statusCode).toBe(400);
//     });


//     it("should fail if user does not exist", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue(null);

//         const res = await request(app)
//             .post("/api/auth/login")
//             .send({
//                 userEmail: signupData.userEmail,
//                 userPassword: signupData.userPassword,
//             });

//         expect(res.statusCode).toBe(500);
//         expect(res.body.message).toBe("invalid email");
//     });

//     it("should fail if password is incorrect", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue({
//             u_id: 1,
//             userEmail: signupData.userEmail,
//             userPassword: "hashed-password",
//         } as any);

//         jest.spyOn(bcrypt, "compare").mockReturnValue(false as any);

//         const res = await request(app)
//             .post("/api/auth/login")
//             .send({
//                 userEmail: signupData.userEmail,
//                 userPassword: "wrong-password",
//             });

//         expect(res.statusCode).toBe(500);
//         expect(res.body.message).toBe("invalid password");
//     });

//     it("should fail if token generation fails", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue({
//             u_id: 1,
//             userEmail: signupData.userEmail,
//             userPassword: "hashed-password",
//         } as any);

//         jest.spyOn(bcrypt, "compare").mockReturnValue(true as any);

//         jest.spyOn(jwtUtil, "generateToken").mockImplementation(() => {
//             throw new Error("JWT error");
//         });

//         const res = await request(app)
//             .post("/api/auth/login")
//             .send({
//                 userEmail: signupData.userEmail,
//                 userPassword: signupData.userPassword,
//             });

//         expect(res.statusCode).toBe(500);
//     });


//     it("should login successfully", async () => {
//         jest.spyOn(authRepo, "findByEmail").mockResolvedValue({
//             u_id: 1,
//             userEmail: signupData.userEmail,
//             userPassword: "hashed-password",
//         } as any);

//         jest.spyOn(bcrypt, "compare").mockReturnValue(true as any);

//         jest.spyOn(jwtUtil, "generateToken").mockReturnValue("thabithathabithathabitha");

//         const res = await request(app)
//             .post("/api/auth/login")
//             .send({
//             userEmail: signupData.userEmail,
//             userPassword: signupData.userPassword,
//             });

//         expect(res.statusCode).toBe(200);
//         expect(res.body.message).toBe("login success");
//         expect(res.body.token).toBe("thabithathabithathabitha");
//     });
// });


// describe("Authorization middleware",()=>{
//     afterEach(()=>{
//         jest.clearAllMocks();
//     })
//         it("should fail if no authorization header", async()=>{
//             const res = await request(app).get("/api/auth/authorize");
//             expect(res.statusCode).toBe(500);
//         })

//         it("should fail if invalid token", async()=>{
//             jest.spyOn(jwtUtil, "verifyToken").mockImplementation(() => {
//                 throw new Error("invalid token");
//             });

//             const res = await request(app)
//                 .get("/api/auth/authorize")
//                 .set("Authorization", "Bearer wrong-token");
//             expect(res.statusCode).toBe(400);
//             expect(res.body.message).toBe("invalid token")
//         })

//         it("should allow authorized user", async () => {
//             jest.spyOn(jwtUtil, "verifyToken").mockReturnValue({
//                 id: 1,
//                 email: signupData.userEmail,
//             });

//             const res = await request(app)
//                 .get("/api/auth/authorize")
//                 .set("Authorization", "Bearer valid-token");

//             expect(res.statusCode).toBe(200);
//             expect(res.body.message).toBe("authorized user");
//         })
// })



import request from "supertest";
import app from "../app";
import { AppDataSource } from "../Config/data_source";

describe("Auth API E2E Tests", () => {

  let token: string;

  beforeAll(async () => {
    await AppDataSource.initialize();
    console.log("this is before all")
  });

  beforeEach(async()=>{
    console.log("this is before each test")
  })

  afterAll(async () => {
    await AppDataSource.destroy();
    console.log("this is after all")
  });


    afterEach(async()=>{
        await jest.clearAllMocks();
        console.log("this is after each test")
    })

  it("signup", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        userName: "nav",
        userEmail: "nav@gmail.com",
        userPassword: "nav123",
        userPhone: "9999991239",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
    expect(res.body.user).toHaveProperty("u_id");
    expect(res.body.user.userEmail).toBe("nav@gmail.com");
  });

  it("login", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        userEmail: "thabitha.pvst@gmail.com",
        userPassword: "thabitha123",
      });

    token = res.body.token;
    expect(res.body).toHaveProperty("message")
    expect(res.body.user.userEmail).toBe("thabitha.pvst@gmail.com")
    expect(token).toBeDefined();
  });

  it("authorize", async () => {
    const res = await request(app)
      .get("/api/auth/authorize")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("authorized user");
  });

});
