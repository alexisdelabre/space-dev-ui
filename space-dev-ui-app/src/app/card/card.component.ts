import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchSummary } from '../app.shared';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public data: LaunchSummary | undefined

  constructor(
    public router: Router

  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  goToDetail(id: string): void {
    this.router.navigate([`detail/${id}`]);
  }

}
