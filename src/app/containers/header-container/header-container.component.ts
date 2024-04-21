import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { HeaderComponent } from '../../ui/blocks/header/header.component';
import { HeaderContainerFacade } from './header-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent, AsyncPipe],
  templateUrl: './header-container.component.html'
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  public currentUser$: Observable<IUser>;

  constructor(private readonly facade: HeaderContainerFacade) { }

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
