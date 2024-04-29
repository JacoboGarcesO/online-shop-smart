import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-images',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './grid-images.component.html',
  styleUrl: './grid-images.component.css'
})
export class GridImagesComponent {
  @Input() hasUserLogged: boolean;
  router: Router = inject(Router);

  navigate(category: string): void {
    this.router.navigateByUrl(`/commerce/${category}/shop`);
  }
}
