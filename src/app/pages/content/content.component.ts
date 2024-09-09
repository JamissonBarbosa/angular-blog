import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { datafake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  photo: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = datafake.filter((article) => article.id === id)[0];

    this.photo = result.photo;
    this.contentTitle = result.contentTitle;
    this.contentDescription = result.contentDescription;
  }
}
