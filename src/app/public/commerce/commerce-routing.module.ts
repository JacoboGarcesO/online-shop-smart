import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAsideComponent } from '../../ui/layouts/layout-aside/layout-aside.component';
import { HeaderAdminContainerComponent } from '../../containers/header-admin-container/header-admin-container.component';
import { LayoutCommerceComponent } from '../../ui/layouts/layout-commerce/layout-commerce.component';
import { CategoryListComponent } from '../../ui/blocks/category-list/category-list.component';
import { CommerceFoodsContainerComponent } from '../../containers/commerce-foods-container/commerce-foods-container.component';

const routes: Routes = [
  {
    path: ':category',
    component: LayoutCommerceComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header', data: { isCommerce: true } },
      { path: '', component: CategoryListComponent, outlet: 'aside' },
      { path: '', component: CommerceFoodsContainerComponent },
    ]
  },
  {
    path: 'cart',
    component: LayoutAsideComponent,
    children: [
      { path: '', component: HeaderAdminContainerComponent, outlet: 'header', data: { isCommerce: true } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
