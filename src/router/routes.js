
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      // Public Routes
      {
        path: '/',
        name: 'public.index',
        component: () => import('pages/Index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/login',
        name: 'public.login',
        component: () => import('pages/auth/login'),
        meta: { requiresAuth: false }
      },
      {
        path: '/register',
        name: 'public.register',
        component: () => import('pages/auth/register'),
        meta: { requiresAuth: false }
      },
      {
        path: '/password/reset',
        name: 'public.password.reset',
        component: () => import('pages/auth/password/email'),
        meta: { requiresAuth: false }
      },
      {
        path: '/password/reset/:token',
        name: 'public.password.reset.token',
        component: () => import('pages/auth/password/reset'),
        meta: { requiresAuth: false }
      },
      // Auth Routes
      {
        path: '/profile',
        name: 'auth.profile',
        component: () => import('pages/Profile'),
        meta: { requiresAuth: true }
      },
      {
        path: '/users',
        name: 'auth.users',
        component: () => import('pages/Users'),
        meta: { requiresAuth: true }
      },
      {
        path: '/test',
        name: 'auth.test',
        component: () => import('pages/Test'),
        meta: { requiresAuth: true }
      },
      // Verify Route
      { path: '/email/verify/:id/:hash',
        name: 'auth.verification.verify',
        component: () => import('pages/auth/verify'),
        meta: { requiresVerify: true }
      },
      { path: '/email/verify',
        name: 'auth.verify',
        component: () => import('pages/auth/verify'),
        meta: { requiresVerify: true }
      },
      {
        path: '/auth',
        component: () => import('pages/auth/login.vue')
      },
      {
        path: '/about',
        component: () => import('pages/PageAbout.vue')
      },
      {
        path: '/help',
        component: () => import('pages/PageHelp.vue')
      },
      {
        path: '/calendar',
        component: () => import('pages/PageCalendar.vue')
      },
      {
        path: '/contact',
        component: () => import('pages/PageContact.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/pageSettings.vue')
      },
      {
        path: '/settings/privacy',
        component: () => import('pages/PagePrivacy.vue')
      },
      {
        path: '/settings/email',
        component: () => import('pages/PageEmail.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
