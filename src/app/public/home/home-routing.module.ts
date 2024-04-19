import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from '../../ui/layouts/layout-home/layout-home.component';
import { HeaderContainerComponent } from '../../containers/header-container/header-container.component';
import { WelcomeContainerComponent } from '../../containers/welcome-container/welcome-container.component';
import { TopProductsContainerComponent } from '../../containers/top-products-container/top-products-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: WelcomeContainerComponent, outlet: 'welcome' },
      { path: '', component: TopProductsContainerComponent, outlet: 'top-foods' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
