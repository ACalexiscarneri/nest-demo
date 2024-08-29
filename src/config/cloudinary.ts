import { v2 } from "cloudinary";
import { CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET } from "./envs";


export const cloudinaryConfig = {
    provide:"CLOUDINARY",
    useFactory:() => {
      return v2.config({
        cloud_name:CLOUDINARY_CLOUD_NAME,
        api_key:CLOUDINARY_API_KEY,
        api_secret:CLOUDINARY_API_SECRET
      })
    }
}
