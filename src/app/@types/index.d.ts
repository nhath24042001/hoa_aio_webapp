export interface ISidebar {
  listView: IListView[];
  adminTool: IAdminTool[];
}

export interface IListView {
  icon: string;
  name: string;
  routerLink: string;
}

export interface IToast {
  icon: string;
  title: string;
  description: string;
  type: string;
  buttonText: string;
  visible: boolean;
}

export interface IConfirmDialog {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  type: ConfirmType;
  callback: (confirmed: boolean) => void;
}

export interface DynamicField {
  icon: string;
  field: string;
  type: 'input' | 'select' | 'date' | 'textarea' | 'participants' | 'number' | 'checkbox' | 'file' | 'custom-select';
  label: string;
  position: string;
  placeholder: string;
  list?: { name: string; code: string | number; icon?: string }[];
  value?: string;
  required?: boolean;
  customIcon?: string;
  disabled?: boolean;
  hidden?: boolean;
  validators?: Array<{ type: string; value?: string }>;
}

export interface ISelect {
  name: string;
  code: string;
  icon?: string;
}

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'delete';

export interface ICommonResponse {
  message: string;
  rc: number;
}

interface ITableAction {
  label: string;
  icon: string;
  className: string;
  actionKey: string;
}

export interface IHeaderTable {
  field: string;
  name: string;
  sortable?: boolean;
  width?: number;
}

export interface ITextarea {
  title: string;
  field: string;
  placeholder: string;
  value?: string;
  required?: boolean;
}

export interface ITab<T> {
  name: string;
  img: string;
  activeImg: string;
  status: number;
  data: T[];
  loading: boolean;
}

export interface ICustomSelect {
  name: string;
  code: string;
  icon?: string;
}

export interface PointEvent {
  originalEvent: PointerEvent;
  value: ICustomSelect;
}
