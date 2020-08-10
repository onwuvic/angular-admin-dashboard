declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/dashboard/posts', title: 'Posts',  icon:'pe-7s-note2', class: '' },
  { path: '/dashboard/pages', title: 'Pages',  icon:'pe-7s-news-paper', class: '' },
  { path: '/dashboard/comments', title: 'Comments',  icon:'pe-7s-chat', class: '' },
  { path: '/dashboard/users', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/dashboard/settings', title: 'Settings',  icon:'pe-7s-config', class: 'active-pro' },
];
