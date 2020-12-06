import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.css'],
})
export class ProjectsItemComponent implements OnInit {
  @Input() project;
  constructor() {}

  ngOnInit(): void {}
}
