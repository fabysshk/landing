import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  readonly url = 'https://adonis-rest.vercel.app/api/v0/';
  public tasks$: BehaviorSubject<any> = new BehaviorSubject([]);
  public task$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router) {}

  private onGetTasks(projectId: string): Observable<any> {
    return this.http.get(this.url + 'projects/' + projectId + '/tasks');
  }
  public getTasks(projectId: string): void {
    this.onGetTasks(projectId).subscribe((res) => {
      this.tasks$.next(res);
    });
  }

  private onCreateTask(projectId: string, task = {}): Observable<any> {
    return this.http.post(this.url + 'projects/' + projectId + '/tasks', task);
  }
  public createTask(projectId: string, description: string): void {
    this.onCreateTask(projectId, { description }).subscribe((res) => {
      const tasks = this.tasks$.value;
      this.tasks$.next([...tasks, res]);
    });
  }

  private onGetTaskById(taskId: string): Observable<any> {
    return this.http.get(this.url + 'tasks/' + taskId);
  }
  public getTaskById(taskId: string): void {
    const tasks = this.tasks$.value;
    const task = tasks.find((t) => t.id === +taskId);
    if (task) {
      this.task$.next(task);
    } else {
      this.onGetTaskById(taskId).subscribe((res) => {
        this.task$.next(res);
      });
    }
  }
}
