import { Component } from '@angular/core';
import { GridImagesComponent } from '../../ui/blocks/grid-images/grid-images.component';

@Component({
  selector: 'app-welcome-container',
  standalone: true,
  imports: [GridImagesComponent],
  templateUrl: './welcome-container.component.html'
})
export class WelcomeContainerComponent { }
