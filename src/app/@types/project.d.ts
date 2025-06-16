import { ICommonResponse } from './index';

export interface IProjectParams {
  status: number;
  priority: number;
  type: number;
  date_from: string;
  date_to: string;
  sort: 'ASC' | 'DESC';
  search: string;
}

export interface IProjectPayload extends Partial<IOptionalProjectPayload> {
  name: string;
  description: string;
  type: number;
  status: number;
}

export interface IOptionalProjectPayload {
  priority: number;
  status: number;
  estimated_completion_date: string;
  actual_completion_date: string;
  estimated_cost: number;
  actual_cost: number;
  vendors: string[];
  documents: string[];
  action_items: string[];
  bid_id: string;
  project_manager: string;
}

export interface IProjectResponse extends ICommonResponse {
  projects: IProjectPayload[];
}

export interface ICreationResponse extends ICommonResponse {
  project_id: number;
}

export interface Project {
  project_id: number;
  name: string;
  description: string;
  type: number | string;
  priority: number | string;
  status: number | string;
  start_date: string;
  est_comp_date: string | null;
  act_comp_date: string | null;
  est_cost: string | null;
  act_cost: string | null;
  created_by: string;
  manager: string;
  last_update: string;
  vendors: string | null;
  documents: string | null;
  action_items: string | null;
  bid_id: string | null;
}
