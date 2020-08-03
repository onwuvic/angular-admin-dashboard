declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/dashboard/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/dashboard/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/dashboard/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { path: '/dashboard/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  { path: '/dashboard/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/dashboard/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/dashboard/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];
