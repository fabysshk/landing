import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.css'],
})
export class ProjectsCreateComponent implements OnInit {
  title = '';
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  onAdd() {
    this.projectService.create(this.title);
  }
}
