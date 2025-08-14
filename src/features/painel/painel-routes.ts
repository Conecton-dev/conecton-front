import { RouteRecordRaw } from "vue-router";
const painelRoutes: Array<RouteRecordRaw> = [
  {
    path: "/painel",
    redirect: "/painel/inicio",
    component: () =>
      import("@/core/components/LayoutPainel.vue"),
    children: [
        {
          path: "inicio",
          name: "inicio",
          component: () =>
            import("@/features/painel/pages/inicio/Inicio.vue"),
        },
      ],
  },
  
];

export default painelRoutes;
