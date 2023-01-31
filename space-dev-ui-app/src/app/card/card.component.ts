import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public data: any | undefined

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
