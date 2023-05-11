import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EditorPage from "../pages/EditorPage";
import TemplateDetail from "../pages/TemplateDetail";

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
  {
    path: "/template/:id",
    component: TemplateDetail,
    meta: { withHeader: true, withFooter: true },
  },
];

export default routes;
