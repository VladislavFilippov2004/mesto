
export class UserInfo {
    constructor(userName, userJob) {
     this._userName = userName;
     this._userJob = userJob;
    }

    getUserInfo() {
     return {
         title: this._userName.textContent,
         subTitle: this._userJob.textContent
     }
    };

    setUserInfo( userName, userJob ) {
        console.log({userName, userJob});
        this._userName.textContent = userName;
        this._userJob.textContent = userJob;
    }
} 