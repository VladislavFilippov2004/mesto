
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
         avatar: this._avatar.style.backgroundImage
     }
    };

    setUserInfo( userName, userJob, avatar ) {
        if (userName) {
            this._userName.textContent = userName;
        }
        if (userJob) {
            this._userJob.textContent = userJob;   
        }
        if (avatar) {
            this._avatar.style.backgroundImage = `url(${avatar})`; 
        }      
    }
} 