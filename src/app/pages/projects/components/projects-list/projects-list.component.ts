import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/service/project.service';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
})
export class ProjectsListComponent implements OnInit {
  public projects$: Observable<any>;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectService.projects$;
  }
}
