import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-aside',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-aside.component.html',
  styleUrl: './layout-aside.component.css'
})
export class LayoutAsideComponent { }
