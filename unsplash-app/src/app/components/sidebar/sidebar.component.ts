import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public photos;
  
  constructor(private photoData:DataService) { }

  ngOnInit() {
  

  }
  
  search(input:string) {

    this.photoData.search(input);
    
  }

}
