import { Component } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public launchsData: any;
  
  constructor(public appService: AppService) { 
   }

  ngOnInit() {
  this.launchsData = this.appService.getFiftyUpcomingLaunchs().subscribe((data: any) => {
    console.log(data.results[0])
  })}




}
