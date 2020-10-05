declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/dashboard/users', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/dashboard/tables', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/dashboard/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/dashboard/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/dashboard/settings', title: 'Settings',  icon:'pe-7s-config', class: 'active-pro' },
];
