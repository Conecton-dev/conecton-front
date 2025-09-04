import { RouteRecordRaw } from "vue-router";
const painelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/painel",
    redirect: "/painel/inicio",
    component: () => import("@/core/components/LayoutPainel.vue"),
    children: [
      {
        path: "inicio",
        name: "inicio",
        component: () => import("../painel/pages/inicio/InicioPage.vue"),
      },
      {
        path: "notificacoes",
        name: "notificacoes",
        component: () =>
          import("../painel/pages/notificacoes/Notificacoes.vue"),
      },
      {
        path: "meu-perfil",
        name: "meu-perfil",
        component: () =>
          import("../painel/pages/meu-perfil/MeuPerfil.vue"),
      },
    ],
  },
];

export default painelRoutes;
