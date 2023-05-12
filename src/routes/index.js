import LoginPage from '../pages/LoginPage.vue';
import HomePage from '../pages/HomePage.vue';
import EditorPage from '../pages/EditorPage.vue';
import TemplateDetail from '../pages/TemplateDetail.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { withHeader: true, withFooter: true },
  },
  { path: '/login', component: LoginPage },
  {
    path: '/editor',
    component: EditorPage,
    meta: { withHeader: true, withFooter: false },
  },
  {
    path: '/template/:id',
    component: TemplateDetail,
    meta: { withHeader: true, withFooter: true },
  },
];

export default routes;
