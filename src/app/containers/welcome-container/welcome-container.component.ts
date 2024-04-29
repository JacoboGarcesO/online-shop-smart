import { Component, OnInit } from '@angular/core';
import { GridImagesComponent } from '../../ui/blocks/grid-images/grid-images.component';
import { WelcomeContainerFacade } from './welcome-container.facade';
import { Observable } from 'rxjs';
import { IUser } from '../../core/models/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-welcome-container',
  standalone: true,
  imports: [GridImagesComponent, AsyncPipe],
  templateUrl: './welcome-container.component.html'
})
export class WelcomeContainerComponent implements OnInit {
  currentUser$: Observable<IUser>;

  constructor(private readonly facade: WelcomeContainerFacade) { }

  ngOnInit(): void {
    this.currentUser$ = this.facade.currentUser$();
  }
}
