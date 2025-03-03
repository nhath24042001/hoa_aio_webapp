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
