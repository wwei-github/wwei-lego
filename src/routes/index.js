import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EditorPage from "../pages/EditorPage";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: { withHeader: true, withFooter: true },
  },
  { path: "/login", component: LoginPage },
  {
    path: "/editor",
    component: EditorPage,
    meta: { withHeader: true, withFooter: false },
  },
];

export default routes;
