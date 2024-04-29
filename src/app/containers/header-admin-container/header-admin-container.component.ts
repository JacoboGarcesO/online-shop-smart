import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../../ui/blocks/header-admin/header-admin.component';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { HeaderAdminContainerFacade } from './header-admin-container.facade';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-admin-container',
  standalone: true,
  imports: [HeaderAdminComponent, AsyncPipe],
  templateUrl: './header-admin-container.component.html'
})
export class HeaderAdminContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<IUser>;
  public foodsCount$: Observable<number>;

  constructor(
    private readonly facade: HeaderAdminContainerFacade,
    private readonly route: ActivatedRoute,
  ) { }

  get isCommerce(): boolean {
    return this.route.snapshot.data['isCommerce'];
  }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  logOut(): void {
    this.facade.logOutUser();
  }

  private initializeSubscriptions(): void {
    this.currentUser$ = this.facade.currentUser$();
    this.foodsCount$ = this.facade.foodsCount$();
  }
}
