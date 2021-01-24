
export class UserInfo {
    constructor(userName, userJob, avatar) {
     this._userName = userName;
     this._userJob = userJob;
     this._avatar = avatar;
    }

    getUserInfo() {
     return {
         title: this._userName.textContent,
         subTitle: this._userJob.textContent,
     }
    };

    setUserInfo( userName, userJob, avatar ) {
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
        this._avatar.style.backgroundImage = `url(${avatar})`; 
    }
} 