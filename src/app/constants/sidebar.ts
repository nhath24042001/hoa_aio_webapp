import { ISidebar } from "../@types";

export const LIST_SIDEBAR: ISidebar = {
  listView: [
    {
      icon: 'overview',
      name: 'Overview',
      routerLink: '/overview',
    },
    {
      icon: 'announcements',
      name: 'Announcements',
      routerLink: '/announcements'
    },
    {
      icon: 'calendar',
      name: 'Calendar',
      routerLink: '/calendar'
    },
    {
      icon: 'task',
      name: 'Task Management',
      routerLink: '/task-management'
    },
    {
      icon: 'project',
      name: 'Projects',
      routerLink: '/projects'
    },
    {
      icon: 'vendor',
      name: 'Vendors',
      routerLink: '/vendors'
    },
    {
      icon: 'violation',
      name: 'Violation Reports',
      routerLink: '/violation-reports'
    },
    {
      icon: 'accounting',
      name: 'Accounting',
      routerLink: '/accounting'
    },
    {
      icon: 'home-owner',
      name: 'Home Owners',
      routerLink: '/home-owners'
    },
    {
      icon: 'document',
      name: 'Documents',
      routerLink: '/documents'
    },
    {
      icon: 'report',
      name: 'Reports',
      routerLink: '/reports'
    },
  ],
  adminTool: [
    {
      icon: 'user',
      name: 'Users',
      routerLink: '/users'
    },
    {
      icon: 'setting',
      name: 'Settings',
      routerLink: '/settings'
    }
  ]
}
