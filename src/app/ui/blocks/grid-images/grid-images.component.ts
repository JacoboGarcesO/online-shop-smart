import { Component } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-grid-images',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './grid-images.component.html',
  styleUrl: './grid-images.component.css'
})
export class GridImagesComponent { }
