import { Urls } from "./urls";
import { User } from "./user";
import { Links } from "./links";

/*Model for Photos from the API */
export class Photo {
  categories: any[];
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string;
  downloads: number;
  exif: any;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  location: any;
  slug: any;
  sponsored: boolean;
  updated_at: string;
  urls: Urls;
  user: User;
  views: string;
  width: string;
}
