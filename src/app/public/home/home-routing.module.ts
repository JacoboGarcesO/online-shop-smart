import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHomeComponent } from '../../ui/layouts/layout-home/layout-home.component';
import { HeaderContainerComponent } from '../../containers/header-container/header-container.component';
import { WelcomeContainerComponent } from '../../containers/welcome-container/welcome-container.component';
import { TopProductsContainerComponent } from '../../containers/top-products-container/top-products-container.component';
import { ReviewsContainerComponent } from '../../containers/reviews-container/reviews-container.component';
import { FooterContainerComponent } from '../../containers/footer-container/footer-container.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHomeComponent,
    children: [
      { path: '', component: HeaderContainerComponent, outlet: 'header' },
      { path: '', component: WelcomeContainerComponent, outlet: 'welcome' },
      { path: '', component: TopProductsContainerComponent, outlet: 'top-foods' },
      { path: '', component: ReviewsContainerComponent, outlet: 'reviews' },
      { path: '', component: FooterContainerComponent, outlet: 'footer' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
