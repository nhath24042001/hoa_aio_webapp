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
  type: 'input' | 'select' | 'date' | 'textarea' | 'number' | 'checkbox' | 'file' | 'custom-select';
  label: string;
  position: string;
  placeholder: string;
  list?: { name: string; code: string; icon?: string }[];
  value?: string;
  required?: boolean;
  customIcon?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export interface ISelect {
  name: string;
  code: string;
  icon?: string;
}

export type ButtonType = 'primary' | 'danger' | 'outline';
