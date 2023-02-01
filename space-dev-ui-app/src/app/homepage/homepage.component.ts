import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { AppState } from '../app.states';
import { loadElements } from '../_states/homepage.actions';
import { HomepageState } from '../_states/homepage.reducer';
import { selectAllElements } from '../_states/homepage.selectors';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(
    public appService: AppService,
    public route: ActivatedRoute,
    public store: Store<AppState>
  ) {}

  public allLaunchsData$ = this.store.select(selectAllElements);
  public homepageState = '';

  ngOnInit() {}

  public loadData(): void {
    this.store.dispatch(loadElements());
  }
}
