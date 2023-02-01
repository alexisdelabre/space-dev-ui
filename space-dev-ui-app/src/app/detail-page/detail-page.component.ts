import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AppService } from '../app.service';
import { LaunchDetails } from '../app.shared';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent {
  public data: LaunchDetails | undefined;

  constructor(
    public route: ActivatedRoute,
    public appService: AppService,
    public location: Location,
    public router: Router
  ) {}

  ngOnInit() {
    this.appService
      .getUpcomingLaunchById(this.route.snapshot.params['id'])
      .subscribe({
        next: (data: any) => {
          this.data = data;
        },
        error: () => {
          this.router.navigate(['404/']);
        },
        complete: () => {},
      });
  }

  goBack(): void {
    this.location.back();
  }
}
