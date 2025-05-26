import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICommonResponse } from '~/@types';
import { IProjectPayload } from '~/@types/projejct';
import { HttpClientModel } from '~/models/http/http-client.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends HttpClientModel {
  /*
    Service: ProjectService
    Role: Admin, Manager
    Description: This service handles all project-related operations such as fetching project details, action items, and documents.
  */

  constructor(http: HttpClient) {
    super(http);
  }

  /* QUERY PROJECTS */

  public getProjects(): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'get_all_projects'));
  }

  public getActionProjects(project_id: number, status: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'get_project_action_items', { project_id, status }));
  }

  public getProjectById(project_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'get_project_by_id', { project_id }));
  }

  public getProjectDocuments(project_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'get_project_documents', { project_id }));
  }

  public getProjectTypes(project_id: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'get_project_types', { project_id }));
  }

  /* MUTATION PROJECT */

  public addProject(payload: IProjectPayload): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'add_project', payload));
  }

  public addProjectBid(project_id: number, bid_id: string): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'add_project_bid', { project_id, bid_id }));
  }

  public addProjectDocument(project_id: number, file_url: string, file_name: string): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'add_project_document', { project_id, file_url, file_name }));
  }

  public addProjectProgress(
    project_id: number,
    status: number,
    percent: number,
    note: string,
    media?: string[]
  ): Observable<ICommonResponse> {
    return this.post(
      this.createRequest('Project', 'add_project_progress', {
        project_id,
        status,
        percent,
        note,
        media
      })
    );
  }

  public editProject(project_id: number, payload: IProjectPayload): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'edit_project', { project_id, ...payload }));
  }

  public updateProjectStatus(project_id: number, status: number): Observable<ICommonResponse> {
    return this.post(this.createRequest('Project', 'update_project_status', { project_id, status }));
  }
}
