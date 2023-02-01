import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service'
import { LaunchSummary, Rocket } from '../app.shared';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  public launchsData: LaunchSummary[] | undefined

  constructor(public appService: AppService, public route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  public onClick(){
    this.appService.getFiftyUpcomingLaunchs().subscribe((data: any) => {
      this.launchsData = data.results
    }
    )
  }
}





