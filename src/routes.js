import Home from './pages/home';
import AboutUs from './pages/about-us';
import Login from './pages/login';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import NotFound from './pages/not-found';

const pathRoutes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        needAuthenticate: false
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        needAuthenticate: false
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile,
        needAuthenticate: true
    },
    {
        name: 'about-us',
        path: '/about-us',
        component: AboutUs,
        needAuthenticate: false
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        needAuthenticate: true
    },
    {
        name: 'not-found',
        path: '*',
        component: NotFound,
        needAuthenticate: false
    }
]

export default pathRoutes;