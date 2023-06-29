import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '',
    title: 'Dashboard',
    icon: 'monitor',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'customers',
    title: 'Customers',
    icon: 'users',
    class: '',
    groupTitle: false,
    submenu: []
  },
  
  {
    path: 'events',
    title: 'Upcoming Events',
    icon: 'calendar',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'sales',
    title: 'Sales',
    icon: 'check-circle',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'comms',
    title: 'Emails / SMS',
    icon: 'mail',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'products',
    title: 'Inventory',
    icon: 'briefcase',
    class: '',
    groupTitle: false,
    submenu: []
  },
  {
    path: 'insights',
    title: 'Insights',
    icon: 'pie-chart',
    class: '',
    groupTitle: false,
    submenu: []
  },

  {
    path: 'trends',
    title: 'Trends',
    icon: 'git-pull-request',
    class: '',
    groupTitle: false,
    submenu: []
  }
];
