import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service'
import { LaunchSummary } from '../app.shared';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public launchsData: any[] | undefined

  constructor(public appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public onClick(){
    this.appService.getFiftyUpcomingLaunchs().subscribe((data: any) => {
      console.log(data.results)
      this.launchsData = data.results
    }
    )
  }
}





