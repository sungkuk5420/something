const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/join",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Join.vue") }]
  },
  {
    path: "/reset-password",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ResetPassword.vue") }]
  },
  {
    path: "/mainTutorial",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/MainTutorial.vue") }]
  },
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Main.vue") }]
  },
  {
    path: "/chats",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Chats.vue") }]
  },
  {
    path: "/friends",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Friends.vue") }]
  },
  {
    path: "/setting",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Setting.vue") }]
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Profile.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}


export default routes;
