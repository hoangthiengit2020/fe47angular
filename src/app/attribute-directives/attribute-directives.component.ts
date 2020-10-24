import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
})
export class AttributeDirectivesComponent implements OnInit {
  isActive: boolean = false;
  message: string = 'Hello world';
  url: string = 'https://picsum.photos/200/200';
  constructor() {}

  ngOnInit(): void {}
}
