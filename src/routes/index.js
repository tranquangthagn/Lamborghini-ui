import Home from '~/pages/Home';
import Model from '~/pages/Model';
import CustomSolutions from '~/pages/CustomSolutions';
import Ownership from '~/pages/Ownership';
import Motorsport from '~/pages/Motorsport';
import configs from '~/configs';
const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.models, component: Model },
    { path: configs.routes.customSolutions, component: CustomSolutions },
    { path: configs.routes.ownership, component: Ownership },
    { path: configs.routes.motorsport, component: Motorsport },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
