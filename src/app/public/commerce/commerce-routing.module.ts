import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartTotalContainerComponent } from '../../containers/cart-total-container/cart-total-container.component';
import { CommerceFoodsContainerComponent } from '../../containers/commerce-foods-container/commerce-foods-container.component';
import { HeaderAdminContainerComponent } from '../../containers/header-admin-container/header-admin-container.component';
import { CategoryListComponent } from '../../ui/blocks/category-list/category-list.component';
import { LayoutCartComponent } from '../../ui/layouts/layout-cart/layout-cart.component';
import { LayoutCommerceComponent } from '../../ui/layouts/layout-commerce/layout-commerce.component';

const routes: Routes = [
  {
    path: ':category/shop',
    component: LayoutCommerceComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header', data: { isCommerce: true } },
      { path: '', component: CategoryListComponent, outlet: 'aside' },
      { path: '', component: CommerceFoodsContainerComponent },
    ]
  },
  {
    path: ':category/pay',
    component: LayoutCartComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header', data: { isCommerce: true } },
      { path: '', component: CartTotalContainerComponent, outlet: 'aside' },
      { path: '', component: CommerceFoodsContainerComponent, data: { isCart: true } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
