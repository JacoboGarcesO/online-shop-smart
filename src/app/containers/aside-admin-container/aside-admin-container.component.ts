import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenuItem } from '../../core/models/menu-item.model';
import { AsideComponent } from '../../ui/blocks/aside/aside.component';
import { AsideAdminContainerFacade } from './aside-admin-container.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-aside-admin-container',
  standalone: true,
  imports: [AsideComponent, AsyncPipe],
  templateUrl: './aside-admin-container.component.html'
})
export class AsideAdminContainerComponent implements OnInit, OnDestroy {
  public items$: Observable<IMenuItem[]>;

  constructor(private readonly facade: AsideAdminContainerFacade) { }

  ngOnInit(): void {
    this.facade.initSubsciptions();
    this.facade.getReviews();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.items$ = this.facade.items$();
  }
}