import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { LoaderComponent } from '../../elements/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [LoaderComponent, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input() public isLoading: boolean;
  @Input() public loadingText: string;
  @Input() public headers: string[][];
  @Input() public items: any[];
  @Input() public itemTemplateRef: TemplateRef<any>;
  @Input() public childTemplateRef: TemplateRef<any>;
}
