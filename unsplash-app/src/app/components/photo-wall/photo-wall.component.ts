import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Photo } from "./photo";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-photo-wall",
  templateUrl: "./photo-wall.component.html",
  styleUrls: ["./photo-wall.component.scss"]
})

/*Represents the component which holds the photos */
export class PhotoWallComponent implements OnInit {
  public photosCount: number = 25;
  public loaded: boolean = false;
  public error: boolean = false;
  public errorMessage: string = "";
  photos: Photo[];

  constructor(public photoData: DataService, public modal: ModalService) {}

  ngOnInit() {}
}
