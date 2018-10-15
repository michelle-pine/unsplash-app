import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photo } from "../components/photo-wall/photo";

@Injectable({
  providedIn: "root"
})
//todo - add selected photo class
//add submit for search
export class DataService {
  private endpoint = "https://api.unsplash.com";
  private id =
    "1da2360352cc1588cacfbf709eb0abeb40c9edec116d4e370787b47411c1c1f0";
  private query: string = null;
  public photos: Photo[];
  public isError: boolean = false;
  public errorMessage: string;
  
  constructor(private httpClient: HttpClient) {
    this.loadPhotos();
    
  }

  //retrieves the photos from the unsplash api, accepting a number of visible photos
  loadPhotos(count: number = 25) {
    let call =
      this.endpoint + "/photos/random?client_id=" + this.id + "&count=" + count;
    console.log(call);
    if (this.query) {
      call = call + "&query=" + this.query;
    }

    return this.httpClient.get(call).subscribe(
      res => {
        console.log(res);
        if (res) {
          this.photos = res as Photo[];
          this.isError = false;
        }
      },
      error => {
        this.photos = null;
        this.isError = true;
        this.showError(error);
      }
    );
    //this.photos = this.default;
  }

  //handles error messages, displaying them to the user
  showError(error) {
    this.isError = true;
    if (error.status === 403 && error._body === "Rate Limit Exceeded") {
      this.errorMessage =
        "Oops! We have exceed our hourly free limit. Please try later.";
    } else {
      this.errorMessage = "Oops! Something went wrong. Please try again.";
    }
  }

  //updates the search value
  search(val: string) {
    if (val &&  val !== "") {
      this.query = val;
      this.loadPhotos();
    }
    else {
      this.query = null;
      this.loadPhotos();
    }

  }
}
