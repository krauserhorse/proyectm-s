import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/Register.vue'
import LoginPage from '../views/Login.vue'
import JakePage from '../views/Jake.vue'
import ItemTabA from '../components/ItemTabA.vue'
import { IonTabs } from '@ionic/vue';
import EntrevistaPage from '../views/Entrevista.vue'
import ProfileCompanyPage from '../views/profile_Company.vue'
import ProfilePage from '../views/Perfil.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/register',
    name: 'REGISTER',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'LOGIN',
    component: LoginPage
  },
  {
    path: '/tabs/',
    name: 'PROFILE',
    component: ItemTabA
  },
  {
    path: '/tabs/',
    component: IonTabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: ProfilePage,
      },
      {
        path: 'tab2',
        component: EntrevistaPage,
      },
      {
        path: 'tab3',
        component: ProfileCompanyPage,
      },
      {
        path: 'tab4',
        component: JakePage,
      },
      
    ],
  },
  {
    path: '/tabs/',
    redirect: '/tabs/tab1',
    
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
