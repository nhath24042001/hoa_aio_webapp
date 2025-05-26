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
