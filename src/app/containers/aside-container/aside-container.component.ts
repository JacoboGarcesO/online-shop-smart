import { Component } from '@angular/core';
import { AsideComponent } from '../../ui/blocks/aside/aside.component';

@Component({
  selector: 'app-aside-container',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './aside-container.component.html'
})
export class AsideContainerComponent { }
