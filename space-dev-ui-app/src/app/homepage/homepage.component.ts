import { Component } from '@angular/core';
import { HomepageService } from './homepage.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public homepageService: HomepageService) {  }

  ngOnInit() {
  this.homepageService.getConfig().subscribe((data: any) => {console.log(data)})}
}
