import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss',
})
export class BigCardComponent implements OnInit {
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
