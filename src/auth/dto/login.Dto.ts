import { PickType } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.Dto";

export class LoginUserDto extends PickType(CreateUserDto,[
  "email",
  "password",
]){}
