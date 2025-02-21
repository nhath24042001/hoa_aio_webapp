export interface ISidebar {
  listView: IListView[];
  adminTool: IAdminTool[];
}

export interface IListView {
  icon: string;
  name: string;
  routerLink: string;
}
