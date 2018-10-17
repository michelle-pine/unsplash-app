import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})

/* Sidebar Component */
export class SidebarComponent implements OnInit {
  public val;
  constructor(private photoData: DataService) {}

  ngOnInit() {}

  search(event) {
    event.preventDefault();
    this.photoData.search(this.val);
  }
}
