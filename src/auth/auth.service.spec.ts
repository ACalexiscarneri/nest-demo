import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/user.service";
import { CreateUserDto } from "../users/dto/create-user.Dto";
import { User } from "src/users/entities/user.entity";


describe ("authService", () => {
  let authService :AuthService
  let mockUserService:Partial<UsersService>


  const mockUser = new CreateUserDto({
    name:"alexis",
    email: "acarneri20@gmail.com",
    password: "12345678",
    confirmPassword:"12345678",
	phone: 3416854678,
	country: "argentina",
	address: "25 de mayo 2124",
	city: "rosario"
  })



  beforeEach(async () => {

       let mockUserService = {
         findByEmail: () => Promise.resolve(mockUser),
         createUsers: (user:CreateUserDto) => Promise.resolve({
             ...user,
             id: "1234ed-2345ed-345edf-456dfg"})
            }
            
            const module: TestingModule = await Test.createTestingModule({
                providers: [AuthService,JwtService,{
                    provide:UsersService,
                    useValue:mockUserService
                }],
              }).compile();

              authService = module.get<AuthService>(AuthService);
  })

    it('create instance of AuthService', async () => {  
        expect(authService).toBeDefined();
    });

    it("register() creates a new user" , async () => {
      const user = await authService.register(mockUser)
      expect(user).toBeDefined()
      expect(user.password).not.toEqual(mockUser.password)

    })

    it("register() throws an error if the email is already use", async () => {
        mockUserService.findByEmail
        try{
         await authService.register(mockUser)
        }catch(error){
        expect(error.message).toEqual("el usuario ya existe")
        }
    })
})