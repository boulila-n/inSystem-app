import { Component, OnInit } from '@angular/core';
import { TempEauService } from './common/temp-eau.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test Technique In System';
  ngOnInit(): void {
    
  }
 
}
