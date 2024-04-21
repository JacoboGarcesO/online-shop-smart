import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../../ui/blocks/header-admin/header-admin.component';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { HeaderAdminContainerFacade } from './header-admin-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-admin-container',
  standalone: true,
  imports: [HeaderAdminComponent, AsyncPipe],
  templateUrl: './header-admin-container.component.html'
})
export class HeaderAdminContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<IUser>;

  constructor(private readonly facade: HeaderAdminContainerFacade) { }

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
  }
}
