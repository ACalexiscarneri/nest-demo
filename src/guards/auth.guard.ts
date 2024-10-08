import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JWT_SECRET } from "src/config/envs";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService:JwtService){} 

    async canActivate(context: ExecutionContext):  Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers["autorizacion"]?.split(" ")[1] ?? [];
        if (!token) {
            throw new UnauthorizedException();
          }
          try {
            const payload = await this.jwtService.verifyAsync(token,{secret: JWT_SECRET});
            
         return true;
    }catch{
        throw new UnauthorizedException("invalid token");
    }
    
}

}
