import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardSubTitle: string = '';
  @Input()
  cardDiscription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
