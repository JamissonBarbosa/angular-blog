import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
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
  @Input()
  Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
