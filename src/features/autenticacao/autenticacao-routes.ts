import { RouteRecordRaw } from "vue-router";
const autenticacaoRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
    path: "/auth",
    component: () =>
      import("@/features/autenticacao/components/LayoutAutenticacao.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import("@/features/autenticacao/pages/login/LoginPage.vue"),
      },
      {
        path: "esqueci-senha",
        name:'esqueci-senha',
        component: () =>
          import("@/features/autenticacao/pages/esqueci-senha/EsqueciSenhaPage.vue"),
      },
      {
        path: "email-redefinir-senha",
        name:'email-redefinir-senha',
        component: () =>
          import("@/features/autenticacao/pages/email-redefinir-senha/EmailRedefinirSenha.vue"),
      },
      {
        path: "redefinir-senha",
        name:'redefinir-senha',
        component: () =>
          import("@/features/autenticacao/pages/redefinir-senha/RedefinirSenha.vue"),
      },
      {
        path: "senha-alterada",
        name:'senha-alterada',
        component: () =>
          import("@/features/autenticacao/pages/senha-alterada/SenhaAlterada.vue"),
      },
    ],
  },
  
];

export default autenticacaoRoutes;
