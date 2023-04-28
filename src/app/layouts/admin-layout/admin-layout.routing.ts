import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { servicecmComponent } from '../../serviceManagement/manageService/servicecm.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { siteComponent } from '../../siteManagement/site/site.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddUserComponent } from 'app/ManageUser/addUser/addUser.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { MaterialcmsComponent } from 'app/Material/materialcms/materialcms.component';
import { AuthGuard } from 'app/services/auth.guard';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent,canActivate:[AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent,canActivate:[AuthGuard] },
    { path: 'material',     component:MaterialcmsComponent },
    { path: 'typography',     component: servicecmComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: AddUserComponent },
    { path: 'notifications',  component: siteComponent },
    { path: 'logout',        component: LogoutComponent },
];
