import { UserLinks } from "./user-links";
import { ProfileImg } from "./profile-img";

export class User {
    accepted_tos:boolean
    bio:string
    first_name:string
    id:string
    instagram_username:string
    last_name:string
    links:UserLinks
    location:string
    name:string
    portfolio_url:string
    profile_image:ProfileImg
    total_collections:number
    total_likes: number
    total_photos: number
    twitter_username: string
    updated_at: string
    username: string
}
