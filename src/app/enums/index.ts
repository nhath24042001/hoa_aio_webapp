export enum Action {
  EDIT = 'edit',
  PUBLISH = 'publish',
  DELETE = 'delete',
  APPROVE = 'approve',
  MARK_AS_PENDING = 'mask_as_pending'
}

export enum Priority {
  LOW = 'low',
  NORMAL = 'normal',
  IMPORTANT = 'important',
  URGENT = 'urgent'
}

export enum EventType {
  COMMUNITY = 'Community Event',
  FACILITY = 'Facility Booking',
  ADMINISTRATIVE = 'Administrative Event',
  MAINTENANCE = 'Maintenance Event'
}

export enum ACTION_DIALOG {
  CREATE = 'create',
  DETAIL = 'detail',
  EDIT = 'edit',
  DELETE = 'delete'
}
