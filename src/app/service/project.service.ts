import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TaskService } from './task.service';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly url = 'https://adonis-rest.vercel.app/api/v0/projects/';
  public projects$: BehaviorSubject<any> = new BehaviorSubject([]);
  public project$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private http: HttpClient,
    private router: Router,
    private tasksService: TaskService
  ) {
    this.getPojects();
  }
  private onGetProjects(): Observable<any> {
    return this.http.get(this.url);
  }
  public getPojects(): void {
    this.onGetProjects().subscribe((res) => {
      this.projects$.next(res);
    });
  }

  private onCreateProject(title: string): Observable<any> {
    return this.http.post(this.url, { title });
  }
  public create(title: string): void {
    this.onCreateProject(title).subscribe((res) => {
      const projects = this.projects$.value;
      this.projects$.next([...projects, res]);
    });
  }

  private onGetProjectById(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  public getProjectById(projectId): void {
    const projects = this.projects$.value;
    const project = projects.find((p) => p.id === +projectId);
    if (project) {
      this.project$.next(project);
      this.tasksService.getTasks(project.id);
    } else {
      this.onGetProjectById(projectId).subscribe((res) => {
        this.project$.next(res);
        this.tasksService.getTasks(res.id);
      });
    }
  }
}
