import {Injectable, EventEmitter} from "@angular/core";
import {WindowService} from "./window.service";
import {Http, Headers} from "@angular/http";

@Injectable()

export class OAuthService{

    public environmentConfig;

    windowHandle:any =null;

    constructor(private windows: WindowService,private http: Http){

    }


    public doLogin(){
        this.windowHandle = this.windows.createWindow('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CKGJ&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fapi%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800', 'OAuth2 Login');
    }
}