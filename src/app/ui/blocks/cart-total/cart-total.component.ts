import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from '../../elements/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.css'
})
export class CartTotalComponent {
  @Input() total: number;
  @Input() subTotal: number;
  @Input() taxes: number;
  router: Router = inject(Router);

  finishPurchase(): void {
    this.router.navigateByUrl('/');
  }
}
