const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/Empresas.vue") }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/registro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Registro.vue') }
    ]
  },
  {
    path: '/his.trabajo/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HisTrabajo.vue'),
        name: "His.trabajos",
       },
    ],
  },
  {
    path: "/usuarios/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Users.vue"),
        name: "users",
      },
    ],
  },
  {
    path: "/trabajos/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Trabajo.vue"),
        name: "jobs",
      },
    ],
  },
  {
    path: "/Configuracion",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/UsuarioConfig.vue"),
        name: "Configuracion",
      },
    ],
  },
  {
    path: "/empresas/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Empresas.vue"),
        name: "enterprises",
      },
      {
        path: ":slug/",
        component: () => import("src/pages/EmpresaDetalles.vue"),
        name: "enterprise-detail",
      },
      {
        path: ":enterprise/operator/:pk/",
        component: () => import("src/pages/OperatorDetail.vue"),
        name: "operators-detail",
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
