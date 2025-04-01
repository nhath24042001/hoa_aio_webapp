export interface ITaskManagement {
  all_tasks: ITask[]
  claims: ITask[]
  action_items: ITask[]
}

export interface ITask {
  task_id: string
  type_icon: string
  task_type: string
  task_name: string
  priority: string
  created: string
  // resident_name: IAssign[];
  status: string
  assigned_to: IAssign[]
}

interface IAssign {
  id: number
  name: string
  avatar: string
}

export interface IHeaderTable {
  field: string
  name: string
  sortable?: boolean
  width?: string
}
