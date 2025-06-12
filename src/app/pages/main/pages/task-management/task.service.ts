import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICommonResponse } from '~/@types';
import {
  IActionItemPayload,
  IClaimPayload,
  ITaskCreationResponse,
  ITaskDetailResponse,
  ITaskParams,
  ITaskResponse
} from '~/@types/task';
import { HttpClientModel } from '~/models/http/http-client.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends HttpClientModel {
  constructor(http: HttpClient) {
    super(http);
  }

  /* QUERY TASKS */

  public getTasks(params: ITaskParams): Observable<ITaskResponse> {
    return this.post(this.createRequest('Task', 'get_all_tasks', params));
  }

  public getTaskById(task_id: number): Observable<ITaskDetailResponse> {
    return this.post(this.createRequest('Task', 'get_task_by_id', { task_id }));
  }

  /* MUTATION TASK */

  public acceptTask(task_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Task', 'accept_task', { task_id }));
  }

  public assignTask(task_id: number, assigned_to: string): Observable<ICommonResponse> {
    return this.post(this.createRequest('Task', 'assign_task', { task_id, assigned_to }));
  }

  public resolveTask(task_id: number, resolution: string): Observable<ICommonResponse> {
    return this.post(this.createRequest('Task', 'resolve_task', { task_id, resolution }));
  }

  public rejectTask(task_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Task', 'reject_task', { task_id }));
  }

  public addActionItem(payload: IActionItemPayload): Observable<ITaskCreationResponse> {
    return this.post(this.createRequest('Task', 'add_action_item', payload));
  }

  public editActionItem(task_id: number, payload: IActionItemPayload): Observable<ITaskCreationResponse> {
    return this.post(this.createRequest('Task', 'edit_action_item', { task_id, ...payload }));
  }

  public addResidentClaim(payload: IClaimPayload): Observable<ITaskCreationResponse> {
    return this.post(this.createRequest('Task', 'add_resident_claim', payload));
  }

  public editResidentClaim(task_id: number, payload: IClaimPayload): Observable<ITaskCreationResponse> {
    return this.post(this.createRequest('Task', 'edit_resident_claim', { task_id, ...payload }));
  }

  public deleteTask(task_id: number): Observable<ITaskCreationResponse> {
    return this.post(this.createRequest('Task', 'delete_task', { task_id }));
  }
}
