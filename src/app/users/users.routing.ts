import {Routes} from "@angular/router";
import {UserLoginComponent} from "./user-login/user-login.component";
// import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

export const UsersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: UserLoginComponent
            }
            // , {
            //     path: 'sign-up',
            //     component: SignUpComponent
            // }
            , {
                path: 'profile',
                component: UserProfileComponent
            }
        ]
    }
]