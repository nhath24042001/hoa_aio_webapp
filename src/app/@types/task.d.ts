import { ICommonResponse } from './index';

export interface ITaskParams {
  is_claim_or_action_item?: number;
  status?: number;
  priority?: number;
  assigned_to?: string;
  created_by?: string;
  type?: number;
  date_from?: string;
  date_to?: string;
  sort?: 'ASC' | 'DESC';
  search?: string;
}

export interface ITaskPayload {
  type: number;
  description: string;
  priority: number;
  property_address: string;
  eta: string;
  media: string;
  video: string;
}

export interface IActionItemPayload extends ITaskPayload {
  assigned_to: string;
  project: string;
}

export interface IClaimPayload extends ITaskPayload {
  resident_id: string;
}

export interface ITaskResponse extends ICommonResponse {
  tasks: {
    tasks: any[];
    total: number;
  };
}

export interface ITaskCreationResponse extends ICommonResponse {
  task_id: number;
}

export enum TaskType {
  CLAIM = 0,
  ACTION_TME = 1,
  ALL = 2
}

export enum TaskStatus {
  NEW = 0,
  ACCEPTED = 1,
  ASSIGNED = 2,
  RESOLVED = 3,
  REJECTED = 4,
  CANCELED = 5
}

export enum Priority {
  URGENT = 0,
  IMPORTANT = 1,
  NORMAL = 2,
  LOW = 3
}
