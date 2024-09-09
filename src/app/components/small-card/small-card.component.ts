import { Component, Input, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [AngularMaterialModule, RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss',
})
export class SmallCardComponent implements OnInit {
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
