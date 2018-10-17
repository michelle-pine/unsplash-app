import { Injectable } from "@angular/core";
import { Photo } from "../components/photo-wall/photo";

@Injectable({
  providedIn: "root"
})

/* Represents the data contained in the download modal */
export class ModalService {
  public selectedPhoto: Photo;

  constructor() {}

  //selects a particular photo
  addPhoto(pic: Photo) {
    this.selectedPhoto = pic;
  }
}
