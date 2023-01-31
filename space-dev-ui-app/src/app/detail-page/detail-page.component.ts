import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  
  constructor( public route: ActivatedRoute ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
  }

}
