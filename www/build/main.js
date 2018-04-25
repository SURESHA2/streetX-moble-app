webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, toastCtrl, menuCtrl, navParams, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.emailId = { email: '' };
        this.otpvalue = { traderMailId: '', otp: '', };
        this.submitted = false;
    }
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    ForgotpasswordPage.prototype.forgotPassword = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'sending otp in your mailId...'
            });
            loading_1.present();
            this._setupService.forgotPassword(this.emailId).subscribe(function (response) {
                if (response.statusCode == 200) {
                    _this.responseData = response;
                    loading_1.dismiss();
                    localStorage.setItem('ResponseData', JSON.stringify(response));
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    var loading = _this.loadingCtrl.create({
                                        content: 'verifying otp...'
                                    });
                                    loading.present();
                                    _this._setupService.forgotPasswordOTP({ "userMailId": response.userMailId, "otp": data.otp
                                    }).subscribe(function (response) {
                                        if (response.statusCode == 200) {
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__["a" /* ChangepasswordPage */]);
                                            loading.dismiss();
                                        }
                                        else {
                                            var toast_1 = _this.toastCtrl.create({
                                                message: response.message,
                                                showCloseButton: true,
                                                closeButtonText: 'Ok',
                                                duration: 5000
                                            });
                                            toast_1.present();
                                            loading.dismiss();
                                        }
                                    });
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    _this.responseData = response;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    loading_1.dismiss();
                }
            });
        }
    };
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Forgot Password</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	\n\n	<form #forgotPasswordForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked class="button-color">Email id</ion-label>\n				<ion-input [(ngModel)]="emailId.email" placeholder="enter email id" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n		</ion-list>\n    <ion-row responsive-sm>\n          <ion-col>\n				<button class="button-backcolor" ion-button (click)="forgotPassword(forgotPasswordForm)" type="submit" block>Submit</button>\n			</ion-col>\n	</ion-row> \n		\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\forgotpassword\forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = (function () {
    function SetupService(http) {
        this.http = http;
        this.endpoint_url = 'http://198.187.28.200:3000';
        this.helppoint_url = 'http://192.168.1.5:1337';
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    //create new user account
    SetupService.prototype.createUserAccount = function (SignUpDetail) {
        var response = this.http.post(this.helppoint_url + '/user/createNewUser', SignUpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // verify email
    SetupService.prototype.VerificationEmail = function (otpDetail) {
        var response = this.http.post(this.helppoint_url + '/help/otpmatch', otpDetail).map(function (res) { return res.json(); });
        return response;
    };
    //sent Otp To Email Verificatation
    SetupService.prototype.EmailVerifyforAccount = function (email) {
        var response = this.http.post(this.endpoint_url + '/help/otpmatch', email).map(function (res) { return res.json(); });
        return response;
    };
    // create login
    SetupService.prototype.createLoginDetail = function (loginDetail) {
        var response = this.http.post(this.helppoint_url + '/user/login', loginDetail).map(function (res) { return res.json(); });
        return response;
    };
    // help page
    SetupService.prototype.createHelpDetail = function (helpdetails) {
        var response = this.http.post(this.helppoint_url + '/help/helpUser', helpdetails).map(function (res) { return res.json(); });
        return response;
    };
    // walllet page
    SetupService.prototype.createWalletDetail = function (email) {
        var response = this.http.post(this.helppoint_url + '/coin/getBalBCH', email).map(function (res) { return res.json(); });
        return response;
    };
    //Address details
    SetupService.prototype.createAddressDetail = function (email) {
        var response = this.http.post(this.helppoint_url + '/coin/getNewBCHAddress', email).map(function (res) { return res.json(); });
        return response;
    };
    // for send page
    SetupService.prototype.createSendDetail = function (senddetails) {
        var response = this.http.post(this.helppoint_url + '/coin/sendBCH', senddetails).map(function (res) { return res.json(); });
        return response;
    };
    // update current passeword
    SetupService.prototype.changecurrentpasswords = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/updateCurrentPassword', values).map(function (res) { return res.json(); });
        return response;
    };
    // update current location
    SetupService.prototype.sentLocation = function (position) {
        var response = this.http.post(this.endpoint_url + '/trader/updatelocation', position).map(function (res) { return res.json(); });
        return response;
    };
    // get buy data
    SetupService.prototype.getBuydata = function () {
        var response = this.http.get(this.endpoint_url + '/trader/getRates').map(function (res) { return res.json(); });
        return response;
    };
    //update price
    SetupService.prototype.updateprice = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/buysellupdate', values).map(function (res) { return res.json(); });
        return response;
    };
    //update  Acceptance
    SetupService.prototype.updateAcceptance = function (userId) {
        var response = this.http.get(this.endpoint_url + '/chat/updateAcceptance', userId).map(function (res) { return res.json(); });
        return response;
    };
    // get chat messages
    SetupService.prototype.getChatMessages = function (chatId) {
        var response = this.http.post(this.endpoint_url + '/chat/getChatMessages', chatId).map(function (res) { return res.json(); });
        return response;
    };
    //send message to traders
    SetupService.prototype.sendMessage = function (messageDetail) {
        var response = this.http.post(this.endpoint_url + '/chat/sendMessage', messageDetail).map(function (res) { return res.json(); });
        return response;
    };
    //get friends list
    SetupService.prototype.getfrienlist = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/chat/getTradersForUser', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getUserChats = function (emailId) {
        var response = this.http.get(this.endpoint_url + '/chat/getUserChats', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPassword = function (userDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/sentOtpToEmailForgotPassword', userDetail).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPasswordOTP = function (otp) {
        var response = this.http.post(this.endpoint_url + '/trader/verifyOtpToEmailForgotPassord', otp).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.updateForgotPassord = function (newpasswordvalues) {
        var response = this.http.post(this.endpoint_url + '/trader/updateForgotPassordAfterVerify', newpasswordvalues).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.acceptRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.rejectRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderInfo = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/trader/getTraderInfo', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.services.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorialPage = (function () {
    function TutorialPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, menu, storage) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
        this.login1 = { username: '', password: '' };
        this.loginDetail = { email: '', password: '', ip: '123344', lat: '', long: '' };
        this.submitted = false;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    TutorialPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\tutorial\tutorial.html"*/'<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n    <ion-slide>\n      <img src="assets/img/StreeetX-intro-1.jpg"  style="width: 100%;height: 100%" />\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/StreeetX-intro-2.jpg" style="width: 100%;height: 100%" />\n    <div style="position: fixed;z-index: 1;margin-top: -45px;margin-left:323px;color: #fff" (click)="startApp()">\n         Next &nbsp;<ion-icon name="arrow-forward"  ></ion-icon>\n       </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_SENDDED_IN = 'hasSenddedIn';
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.HAS_ADDED_IN = 'hasAddedIn';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.help = function (subject) {
        this.storage.set(this.HAS_SENDDED_IN, true);
        this.setSubject(subject);
        this.events.publish('subject:help');
    };
    ;
    UserData.prototype.walllet = function (coin) {
        this.storage.set(this.HAS_ADDED_IN, true);
        this.setCoin(coin);
        this.events.publish('coin:wallet');
    };
    ;
    UserData.prototype.send = function (address) {
        this.storage.set(this.HAS_SENDDED_IN, true);
        this.setSubject(address);
        this.events.publish('address:send');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setSubject(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.logoutS = function () {
        this.storage.remove(this.HAS_SENDDED_IN);
        this.storage.remove('subject');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.logoutW = function () {
        this.storage.remove(this.HAS_ADDED_IN);
        this.storage.remove('coin');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.setSubject = function (subject) {
        this.storage.set('subject', subject);
    };
    ;
    UserData.prototype.setCoin = function (coin) {
        this.storage.set('coin', coin);
    };
    ;
    UserData.prototype.setsend = function (send) {
        this.storage.set('send', send);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getSubject = function () {
        return this.storage.get('subject').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getCoin = function () {
        return this.storage.get('coin').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.hasSenddedIn = function () {
        return this.storage.get(this.HAS_SENDDED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.hasAddedIn = function () {
        return this.storage.get(this.HAS_ADDED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, toastCtrl, menuCtrl, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.newPasswordvalue = { userMailId: '', newPassword: '', confirmNewPassword: '' };
        this.userdata();
    }
    ChangepasswordPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('ResponseData'));
        this.newPasswordvalue.userMailId = this.user.userMailId;
    };
    ChangepasswordPage.prototype.changecurrentPassword = function (form) {
        var _this = this;
        // alert("this.newPasswordvalue "+this.newPasswordvalue.userMailId);
        //     alert("this.newPasswordvalue "+this.newPasswordvalue.newPassword);
        //         alert("this.newPasswordvalue "+this.newPasswordvalue.confirmNewPassword);
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingCtrl.create({
                content: 'updating current password...'
            });
            loading_1.present();
            this._setupService.updateForgotPassord(this.newPasswordvalue).subscribe(function (response) {
                if (response.statusCode == 200) {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Password update successfully',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\changepassword\changepassword.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Change Password</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	\n\n	<form #changePasswordForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">New Password</ion-label>\n				<ion-input [(ngModel)]="newPasswordvalue.newPassword" placeholder="enter new password"name="fullName" type="text" #fullName="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="fullName.valid || submitted == false" color="danger" padding-left>\n				new password is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Confirm New Password</ion-label>\n				<ion-input [(ngModel)]="newPasswordvalue.confirmNewPassword" placeholder="enter confirm new password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				confirm new password is required\n			</p>\n		</ion-list>\n		<div padding>\n			<button ion-button (click)="changecurrentPassword(changePasswordForm)" type="submit" block>submit</button>\n		</div>\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatuserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatuserlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatuserlistPage = (function () {
    function ChatuserlistPage(geolocation, _setupService, navCtrl, navParams, platform) {
        var _this = this;
        this.geolocation = geolocation;
        this._setupService = _setupService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.userData = [];
        this.nickname = '';
        this.UserId = { email: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.userdata();
        this.getFriendList();
    }
    ChatuserlistPage.prototype.getFriendList = function () {
        var _this = this;
        this._setupService.getfrienlist({ email: this.UserId.email }).subscribe(function (response) {
            if (response.data.length > 0) {
                var sortData = response.data.sort(function (a, b) {
                    var keyA = a.isAccepted, keyB = b.isAccepted;
                    if (keyA < keyB)
                        return -1;
                    if (keyA > keyB)
                        return 1;
                    return 0;
                });
                _this.friendList = sortData;
                console.log("this.friendList = = " + JSON.stringify(_this.friendList));
            }
        });
    };
    ChatuserlistPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.trader.email;
        }
    };
    ChatuserlistPage.prototype.openChat = function (senderEmail, receiverEmail, chatId) {
        console.log("receiverEmail = = " + receiverEmail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_chatroom_chatroom__["a" /* ChatroomPage */], { sender: receiverEmail, receiver: senderEmail, chatId: chatId });
    };
    ChatuserlistPage.prototype.joinChat = function () {
        this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
    };
    ChatuserlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.latitude = response.coords.latitude;
                _this.longitude = response.coords.longitude;
                _this.zoom = 16;
            }).catch(function (error) {
            });
        });
    };
    //Kunvar singh ---Date : 8th Jan, 2018
    ChatuserlistPage.prototype.acceptRequestByTrader = function (chatId) {
        var _this = this;
        var accept = true;
        this._setupService.acceptRequest({ isAccepted: accept, chatId: chatId }).subscribe(function (response) {
            if (response) {
                _this.getFriendList();
            }
        });
    };
    ChatuserlistPage.prototype.rejectRequestByTrader = function (chatId) {
        var _this = this;
        var reject = true;
        this._setupService.rejectRequest({ isRejected: reject, chatId: chatId }).subscribe(function (response) {
            if (response) {
                _this.getFriendList();
            }
        });
    };
    ChatuserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatuserlist',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\chatuserlist\chatuserlist.html"*/'\n\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<div *ngFor="let friend of friendList" class="row chat-all">\n	<div class="col-12" *ngIf="friend.isAccepted === true">\n		 <span class="chat-user" (click)="openChat(friend.sender,friend.recipient,friend.chatId)">{{friend.sender}}</span>\n  </div>&nbsp;\n	  <div *ngIf="friend.isAccepted === false"  class="row ">\n	  	<div class="col-sm-9">\n	     	<span class="chat-user">{{friend.sender}}</span>\n	  	</div>\n			 	<div class="col col-6"><button class="button-backcolor" ion-button  type="submit"  (click)="acceptRequestByTrader(friend.chatId)" >Accept</button>\n			 	</div>\n			 	<div  class="col col-6">\n			 	 <button class="button-backcolor"  ion-button  type="submit" (click)="rejectRequestByTrader(friend.chatId)"  >Reject</button></div>\n	\n	</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\chatuserlist\chatuserlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], ChatuserlistPage);
    return ChatuserlistPage;
}());

//# sourceMappingURL=chatuserlist.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sails_io_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatroomPage = (function () {
    function ChatroomPage(ngZone, events, platform, navCtrl, navParams, _setupService) {
        // debugger;  
        var _this = this;
        this.ngZone = ngZone;
        this.events = events;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.nickname = '';
        this.chatId = '';
        this.io = __WEBPACK_IMPORTED_MODULE_4_sails_io_js__(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
        this.messageDetails = { sender: '', recipient: '', content: '', chatId: '' };
        this.messages = [];
        this.UserId = { email: '' };
        this.chatid = {
            "chatId": ""
        };
        this.myInfo = this.messages[0];
        // this.io.sails.url = this._setupService.endpoint_url;
        this.io.sails.url = "http://198.187.28.200:3000";
        this.userdata();
        this.messageDetails.sender = this.UserId.email;
        this.nickname = this.messageDetails.sender;
        console.log("this.nickname" + this.nickname);
        this.messageDetails.recipient = this.navParams.get('receiver');
        this.messageDetails.chatId = this.navParams.get('chatId');
        this.chatid.chatId = this.messageDetails.chatId;
        console.log("this.chatid.chatId" + this.chatid.chatId);
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        var ngZ = this.ngZone;
        var event = this.events;
        // create connection between user based on chat id 
        this.io.socket.get('/chat/sendMessage', { chatId: this.messageDetails.chatId }, function (data, response) {
        });
        // get old message based on chat id
        this._setupService.getChatMessages({ chatId: this.messageDetails.chatId }).subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.messages = response.data;
            }
            else {
            }
        });
        // event listner when any events brodcast messages
        this.io.socket.on('NEWMESSAGE', function (respons) {
            var _this = this;
            console.log("this.messages.content " + respons);
            ngZ.run(function () {
                _this.messages = respons.data;
                event.publish("sharemessage", _this.messages);
            });
        });
        //   this._setupService.getOldMessage().subscribe((response)=>{
        //   this.messages=response.data;    
        // })
        this.listenToDataChangeEvents();
    }
    ChatroomPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.UserId.email = this.user.trader.email;
        }
    };
    ChatroomPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('sharemessage', function (userData) {
            _this.messages.push(userData);
            _this.userContent = '';
        });
    };
    ChatroomPage.prototype.sendMessage = function () {
        this.messageDetails.content = this.userContent;
        console.log("this.messageDetails.content = = " + this.messageDetails.content);
        this.io.socket.post('/chat/sendMessage', this.messageDetails, function (data, response) {
            console.log("response  = = " + JSON.stringify(response));
        });
    };
    ChatroomPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-room',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\chatroom\chatroom.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{messageDetails.recipient}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor="let message of messages "> \n \n\n\n      <ion-col offset-3 col-9 *ngIf="message.sender !== nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n        <span class="user_name">{{ message.sender }}</span><br>\n        <span>{{ message.content }}</span>\n      <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div> \n      </ion-col>\n      <ion-col col-9 *ngIf="message.sender === nickname" class="message" [ngClass]="{\'my_message\': message.sender === nickname, \'other_message\': message.sender !== nickname}">\n        <span class="user_name">{{ message.sender }}</span><br>\n        <span>{{ message.content }}</span>\n   <div class="time">{{message.createdAt | date:\'hh:MM\'}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row class="message_row">\n      <ion-col col-9>\n        <ion-item no-lines>\n          <ion-input type="text" placeholder="type your message here..." [(ngModel)]="userContent"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear class="button-color" (click)="sendMessage()" [disabled]="userContent ==\'\'">\n        Send\n      </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\chatroom\chatroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, alertCtrl, toastCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.verifyEmail = false;
        this.userEmail = { email: '' };
        this.passwordValue = { "userMailId": "", "currentPassword": "", "newPassword": "", "confirmNewPassword": "" };
        this.otpvalues = { "email": "", "otp": "" };
        this.userdata();
        //this.verifyEmail=false;        
    }
    SettingPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.trader.email;
            this.verifyEmail = this.user.trader.verifyEmail;
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    // change current password
    SettingPage.prototype.changeCurrentPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Change Password',
            inputs: [
                {
                    name: 'currentPassword',
                    type: 'password',
                    placeholder: 'Current Password',
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    placeholder: 'New Password',
                },
                {
                    name: 'confirmNewPassword',
                    type: 'password',
                    placeholder: 'Confirm New Password',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'submit',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create({
                            content: 'updating current password...'
                        });
                        loading.present();
                        _this.passwordValue.userMailId = _this.userEmail.email;
                        _this.passwordValue.currentPassword = data.currentPassword;
                        _this.passwordValue.newPassword = data.newPassword;
                        _this.passwordValue.confirmNewPassword = data.confirmNewPassword;
                        _this._setupService.changecurrentpasswords(_this.passwordValue).subscribe(function (response) {
                            if (response.statusCode == 200) {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Password change successfully',
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
                            }
                            else {
                                loading.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: response.message,
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    };
    // veryfy email id
    SettingPage.prototype.veryfyEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'sending otp in your emailId..'
        });
        loading.present();
        this._setupService.EmailVerifyforAccount(this.userEmail).subscribe(function (response) {
            loading.dismiss();
            var prompt = _this.alertCtrl.create({
                title: 'Enter One Time Password',
                inputs: [
                    {
                        name: 'otp',
                        type: 'password',
                        placeholder: 'One Time Password',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'submit',
                        handler: function (data) {
                            var loading = _this.loadingCtrl.create({
                                content: 'verifying OtP...'
                            });
                            loading.present();
                            _this.otpvalues.email = _this.userEmail.email;
                            _this.otpvalues.otp = data.otp;
                            _this._setupService.VerificationEmail(_this.otpvalues).subscribe(function (response) {
                                console.log("RES = = " + JSON.stringify(response));
                                if (response.statusCode == 200) {
                                    loading.dismiss();
                                    localStorage.setItem('logindetail', JSON.stringify(response));
                                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                                    console.log("this.user.trader.email" + response.trader.email);
                                    console.log("this.user.trader.verifyEmail" + response.trader.verifyEmail);
                                    _this.userEmail.email = _this.user.trader.email;
                                    _this.verifyEmail = _this.user.trader.verifyEmail;
                                    var toast = _this.toastCtrl.create({
                                        message: 'verify email successfully !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
                                }
                                else {
                                    loading.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: response.message,
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                }
                            });
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            prompt.present();
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	 <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div padding-top text-center >\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <ion-list inset>   	 \n          \n          <span style="margin-right: 259px !important;" > <strong>Account verify</strong></span>\n          <br>{{userEmail.email}}\n          <span (click)="veryfyEmail(userEmail.email)" class="pull-left red-text" *ngIf="verifyEmail==false"> Not Verified</span>\n          <span class="pull-right green-text" *ngIf="verifyEmail==true"> Verified</span><hr>        \n          <button ion-item (click)="changeCurrentPassword()">Change Password</button><hr> \n \n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelpPage = (function () {
    function HelpPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, platform) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.submitted = false;
        this.help = { subject: '', message: '' };
        this.helpdetails = { subject: '', message: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    HelpPage.prototype.onsend = function (Form) {
        var _this = this;
        this.submitted = true;
        if (Form.valid) {
            this.userData.help(this.help.subject);
            var loading_1 = this.loadingCtrl.create({
                content: 'Sending please wait...'
            });
            loading_1.present();
            this._setupService.createHelpDetail(this.helpdetails).subscribe(function (result) {
                console.log(result);
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    localStorage.setItem('helpdetails', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('helpdetails'));
                    _this.subject = _this.responseData.trader.message;
                    _this.events.publish("shareObject", _this.subject);
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    HelpPage.prototype.onsend1 = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.help(this.help.subject);
            this.subject = this.helpdetails.message;
            this.events.publish("shareObject", this.subject);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	  <ion-navbar>\n  	 <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n </ion-header>\n\n<form #helpForm="ngForm" novalidate>\n    <ion-list no-lines class="form-input-fields">\n\n      <br /> <br /> <br /><br /> <br /><br /><br /><br />\n      <ion-item>\n\n        <ion-input [(ngModel)]="helpdetails.subject" placeholder="Enter subject" name="subject" type="text" #subject="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n          required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="subject.valid || submitted == false" color="danger" padding-left>\n        subject is required\n      </p>\n\n      <ion-item>\n        <ion-input [(ngModel)]="helpdetails.message" placeholder="Enter message" name="message" type="ion-textarea" #message="ngModel" required class="login-input" >\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="message.valid || submitted == false" color="danger" padding-left>\n        Message is required\n      </p>\n     \n      <ion-row responsive-sm>\n        <ion-col >\n          <button class="button-backcolor" ion-button (click)="onsend(helpForm)" type="submit" block>Send</button>\n        </ion-col>\n      </ion-row>\n      <hr>\n     \n    </ion-list>\n\n\n  </form>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_send__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = (function () {
    function WalletPage(userData, navCtrl, nav, toastCtrl, events, menuCtrl, navParams, setupService, loadingCtrl, alertCtrl, barcodeScanner) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.setupService = setupService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.qrData = null;
        this.createdCode = null;
        this.scannedCode = null;
        this.submitted = false;
        this.nav = nav;
        var user = JSON.parse(localStorage.getItem('logindetail'));
        this.email = user.user.email;
        this.getWallletBalance();
        this.getAddress();
    }
    WalletPage.prototype.getWallletBalance = function () {
        var _this = this;
        this.setupService.createWalletDetail({ userMailId: this.email }).subscribe(function (result) {
            _this.balance = result.balance;
        });
    };
    WalletPage.prototype.getAddress = function () {
        var _this = this;
        this.setupService.createAddressDetail({ email: this.email }).subscribe(function (result) {
            _this.address = result.newaddress;
            return _this.address;
        });
    };
    WalletPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Address',
            subTitle: '<img src="http://chart.apis.google.com/chart?chs=150x150&amp;cht=qr&amp;chl=' + this.address + '&amp;choe=UTF-8" alt="my alt" />',
            inputs: [
                {
                    name: 'address',
                    placeholder: this.address ? this.address : 'address will come later'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    WalletPage.prototype.openSendPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__send_send__["a" /* SendPage */]);
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n    \n<ion-content padding>\n     <ion-list>\n      <h3 align="center">My Balance</h3>\n    <div>\n      <p align="center">{{balance}}</p>\n    </div>\n\n      \n      <!-- <h3 align="center">Address</h3>\n     <div>\n      <p align="center">{{address}}</p>\n    </div> -->\n  <button class="button-backcolor" ion-button type="submit" block (click)="openSendPage(SendPage)">Send</button>\n   <button class="button-backcolor" ion-button type="submit" block (click)="doPrompt(send-amount)">Recieve</button>\n</ion-list>\n<h3 align="center">Transaction list</h3>\n \n      <ion-grid>\n  <ion-row>\n    <ion-col>\n      Date\n    </ion-col>\n    <ion-col>\n      Amount\n    </ion-col>\n    <ion-col>\n      Transaction list\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- <ion-grid>\n  <ion-row>\n    <ion-col>\n      {{date}}\n    </ion-col>\n    <ion-col>\n       {{amount}}\n    </ion-col>\n    <ion-col>\n      {{txlist}}\n    </ion-col>\n  </ion-row>\n</ion-grid> -->\n    </ion-content>\n\n\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendPage = (function () {
    function SendPage(userData, navCtrl, navParams, _setupService, platform) {
        var _this = this;
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.platform = platform;
        this.submitted = false;
        this.send = { amount: '', spendingPassword: '' };
        this.senddetails = { userMailId: 'kavipal776@gmail.com', amount: '', address: '', spendingPassword: '' };
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SendPage.prototype.onsendBalance = function (Form) {
        var _this = this;
        this.submitted = true;
        if (Form.valid) {
            this.userData.send(this.send.amount);
            this._setupService.createSendDetail(this.senddetails).subscribe(function (result) {
                console.log(_this.senddetails);
                if (result.statusCode == 200) {
                    localStorage.setItem('senddetails', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('senddetails'));
                }
            });
        }
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\send\send.html"*/'<ion-header>\n    <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Send</ion-title>\n  </ion-navbar>\n </ion-header>\n<ion-content>\n<form #sForm="ngForm" novalidate>\n    <ion-list no-lines class="form-input-fields">\n  <br /><br /><br /><br /><br />\n      \n    <ion-item>\n      <ion-input [(ngModel)]="senddetails.amount" placeholder="Enter amount" name="amount" type="text" #amount="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n          required>\n        </ion-input>\n      </ion-item>\n\n      <p ion-text [hidden]="amount.valid || submitted == false" color="danger" padding-left>\n       Amount is required\n      </p>\n\n      <ion-item>\n\n        <ion-input [(ngModel)]="senddetails.address" placeholder="Enter address" name="address" type="text" #address="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n          required>\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="address.valid || submitted == false" color="danger" padding-left>\n        Address is required\n      </p>\n\n      <ion-item>\n        <ion-input [(ngModel)]="senddetails.spendingPassword" placeholder="Enter spendingPassword" name="spendingPassword" type="password" #spendingPassword="ngModel" required class="login-input" >\n        </ion-input>\n      </ion-item>\n      <p ion-text [hidden]="spendingPassword.valid || submitted == false" color="danger" padding-left>\n        SpendingPassword is required\n      </p>\n     \n      <ion-row responsive-sm>\n        <ion-col >\n          <button class="button-backcolor" ion-button (click)="onsendBalance(sForm)" type="submit" block>Send</button>\n          <button class="button-backcolor" ion-button (click)="onsendBalance1(sForm)" type="submit" block>Resset</button>\n        </ion-col>\n      </ion-row>\n      <hr>\n     \n    </ion-list>\n\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\send\send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=send.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_help_help__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_send_send__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_qrcode2__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_send_send__["a" /* SendPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */], name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], name: 'ChatuserlistPage', segment: 'Chatuserlist' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */], name: 'ChatroomPage', segment: 'chatroom' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */], name: 'DashboardPage', segment: 'dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */], name: 'SettingPage', segment: 'setting' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */], name: 'HelpPage', segment: 'help' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */], name: 'WalletPage', segment: 'wallet' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */], name: 'WalletPage', segment: 'sendpage' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_send_send__["a" /* SendPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_24__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_16__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_user_data__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, app, alertCtrl, statusBar, loadingCtrl) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.loggedInPages = [
            { title: 'Dashboard', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'md-browsers' },
            { title: 'Chat', name: 'ChatuserlistPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_chatuserlist_chatuserlist__["a" /* ChatuserlistPage */], icon: 'chatbubbles' },
            { title: 'Setting', name: 'SettingPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */], icon: 'settings' },
            { title: 'Help', name: 'HelpPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */], icon: 'md-help' },
            { title: 'Wallet', name: 'WalletPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */], icon: 'md-cash' },
            { title: 'Logout', name: null, component: null, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // this.io.sails.url = "http://198.187.28.200:3000";
        this.registerBackButtonAction();
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        events.subscribe('shareObject', function (userData) {
            localStorage.setItem('userprofileEmailId', JSON.stringify(userData));
            _this.userEmail = JSON.parse(localStorage.getItem('userprofileEmailId'));
            _this.emailId = _this.userEmail;
        });
    }
    ConferenceApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "DashboardPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            var loading = this.loadingCtrl.create({
                content: 'Logout please wait...'
            });
            loading.present();
            localStorage.removeItem("logindetail");
            localStorage.removeItem("userprofileEmailId");
            setTimeout(function () { return _this.welcomeToBack(); }, loading.dismiss(), 1000);
        }
    };
    ConferenceApp.prototype.welcomeToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    // openTutorial() {
    //   this.nav.setRoot(TutorialPage);
    // }
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#001f38');
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\app\app.template.html"*/'<ion-split-pane>\n\n \n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n         <ion-title style="color: #fff; padding: 0 20px 1px;" text-left> <ion-icon name="contact" class="icon-chat-user">     \n          </ion-icon><br>\n          <small class="white-text">{{this.emailId}}</small>\n       </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <!-- <ion-list-header>\n          Account\n        </ion-list-header> -->\n        <button class="sidemenu-item" ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_14__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '' };
        // loginDetail: LoginDetail = { email: '', password: '', lat:'', long:'' };
        this.loginDetail = { email: '', password: '', ip: '123344', lat: '', long: '' };
        this.submitted = false;
        this.setCurrentPosition();
    }
    LoginPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    LoginPage.prototype.onlogin1 = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'login please wait...'
            });
            loading_1.present();
            this._setupService.createLoginDetail(this.loginDetail).subscribe(function (result) {
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    console.log(_this.responseData.user.email);
                    localStorage.setItem('logindetail', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                    // alert("this.user = = "+this.user);
                    _this.userName = _this.responseData.user.email;
                    _this.events.publish("shareObject", _this.userName);
                    loading_1.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    _this.responseData = result;
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.onlogin11 = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.userName = this.loginDetail.email;
            this.events.publish("shareObject", this.userName);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\login\login.html"*/'\n\n<ion-content>\n	<div  text-center style=" margin-top: 26px;">\n		<img src="assets/img/streetx-logo.png" alt="Ionic logo" class="brand-logo">\n	</div>\n	<ion-row class="logo" text-center>\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 10px;    color: #3896ea;" >\n		 	<ion-icon name="contact" class="icon-chat-user"></ion-icon></ion-col>\n		 <ion-col col-12><h3 class="text_Color"><strong >Sign In</strong></h3></ion-col>\n	</ion-row>\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines class="form-input-fields">\n			<ion-item>\n				<ion-input [(ngModel)]="loginDetail.email" placeholder="Enter emailid" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off" class="login-input"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				email is required\n			</p>\n\n			<ion-item>\n				<ion-input [(ngModel)]="loginDetail.password" placeholder="Enter password" name="password" type="password" #password="ngModel" required class="login-input" >\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n			<ion-row>\n				<ion-col text-right>\n			      <a style="font-size: 0.8em; color: #bdbdbd;" (click)="forgotPassword()">Forgot password?</a>\n			    </ion-col>\n			</ion-row>\n			<ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor" ion-button (click)="onlogin1(loginForm)" type="submit" block>Login</button>\n				</ion-col>\n			</ion-row>\n			<hr>\n			<ion-row>\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n					Not a member? <a class="text_Color" (click)="onSignup()">Create an account</a>\n				</ion-col>\n			</ion-row>\n		</ion-list>\n\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_setup_services__["a" /* SetupService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, loadingCtrl, userData, alertCtrl, menuCtrl, navParams, _setupService, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.signup1 = { username: '', password: '' };
        this.signup = { name: '', email: '', password: '', confirmpassword: '', spendingpassword: '', confirmspendingpassword: '', mobileNumber: '' };
        this.submitted = false;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        });
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup1.username);
            var loading_1 = this.loadingCtrl.create({
                content: 'account creating...'
            });
            loading_1.present();
            this._setupService.createUserAccount(this.signup).subscribe(function (result) {
                console.log(_this.signup);
                if (result.statusCode == 200) {
                    _this.responseData = result;
                    loading_1.dismiss();
                    localStorage.setItem('signUp', JSON.stringify(_this.responseData));
                    var response_1 = JSON.parse(localStorage.getItem('signUp'));
                    console.log("dufgsdfgsdjfgsdh", response_1);
                    var toast = _this.toastCtrl.create({
                        message: 'OTP sent to your email id',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    var prompt_1 = _this.alertCtrl.create({
                        title: 'One Time Password',
                        inputs: [
                            {
                                name: 'otp',
                                type: 'password',
                                placeholder: 'One Time Password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                handler: function (data) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'account created please login and verify !!',
                                        showCloseButton: true,
                                        closeButtonText: 'Ok',
                                        duration: 5000
                                    });
                                    toast.present();
                                    console.log("data " + data);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                }
                            },
                            {
                                text: 'submit',
                                handler: function (data) {
                                    if (!data.otp) {
                                        var toast_1 = _this.toastCtrl.create({
                                            message: 'Otp should be required please signUp retry',
                                            showCloseButton: true,
                                            closeButtonText: 'Ok',
                                            duration: 5000
                                        });
                                        toast_1.present();
                                    }
                                    else {
                                        var loading_2 = _this.loadingCtrl.create({
                                            content: 'verifying otp...'
                                        });
                                        loading_2.present();
                                        _this._setupService.VerificationEmail({ "email": response_1.userMailId, "otp": data.otp
                                        }).subscribe(function (result) {
                                            console.log("verifyemail", result);
                                            loading_2.dismiss();
                                            if (result.statusCode == 200) {
                                                var toast_2 = _this.toastCtrl.create({
                                                    message: 'SignUp successfully',
                                                    showCloseButton: true,
                                                    closeButtonText: 'Ok',
                                                    duration: 5000
                                                });
                                                toast_2.present();
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                                            }
                                        });
                                    }
                                }
                            }
                        ],
                        enableBackdropDismiss: false
                    });
                    prompt_1.present();
                }
                else {
                    loading_1.dismiss();
                    _this.responseData = result;
                    var toast = _this.toastCtrl.create({
                        message: _this.responseData.message,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\signup\signup.html"*/'\n<ion-content>\n\n	<div  text-center style=" margin-top: 0 	px;">\n		<img src="assets/img/streetx-logo.png" alt="Ionic logo" class="brand-logo">\n	</div>\n	<ion-row class="logo" text-center>\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 0px;    color: #3896ea;"><ion-icon name="create" class="icon-chat-user"></ion-icon></ion-col>\n		 <ion-col col-12><h3 class="button-color" ><strong>Create Account</strong></h3></ion-col>\n	</ion-row>\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines class="form-input-fields">\n			<ion-row>\n				<ion-col col-6 class="padding0">\n					<ion-item class="padding0">\n						<ion-input [(ngModel)]="signup.name" placeholder="Full name" name="name" type="text" #name="ngModel" required class="login-input">\n						</ion-input>\n					</ion-item>\n					<p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n						Name is required\n					</p>\n				</ion-col>\n				<ion-col col-6 class="padding0">\n					<ion-item class="padding0">\n						<ion-input [(ngModel)]="signup.mobileNumber" placeholder="Enter mobile number" name="mobileNumber" number="number" #mobileNumber="ngModel" required class="login-input">\n						</ion-input>\n					</ion-item>\n					<p ion-text [hidden]="mobileNumber.valid || submitted == false" color="danger" padding-left>\n						mobileNumber is required\n					</p>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="padding0">\n					<ion-item class="padding0">\n						<ion-input [(ngModel)]="signup.email" placeholder="Enter emailid" name="email" type="email" #email="ngModel" required class="login-input" >\n						</ion-input>\n					</ion-item>\n					<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n						email is required\n					</p>\n\n\n				</ion-col>\n			</ion-row>\n			<ion-row>\n\n				<ion-col col-6 class="padding0">\n					<ion-item class="padding0">\n						<ion-input [(ngModel)]="signup.password" placeholder="Enter password" name="password" type="password" #password="ngModel" required class="login-input" >\n						</ion-input>\n					</ion-item>\n					<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n						Password is required\n					</p>\n				</ion-col>\n				<ion-col col-6 class="padding0">\n					<ion-item class="padding0">\n						<ion-input [(ngModel)]="signup.confirmpassword" placeholder="Re-enter password" name="confirmpassword" type="password" #confirmpassword="ngModel" required class="login-input">\n						</ion-input>\n					</ion-item>\n					<p ion-text [hidden]="confirmpassword.valid || submitted == false" color="danger" padding-left>\n						confirm password is required\n					</p>\n						</ion-col>\n			            </ion-row>\n					<ion-input [(ngModel)]="signup.spendingpassword" placeholder="Enter spending password" name="spendingpassword" type="password" #spendingpassword="ngModel" required class="login-input" >\n						</ion-input>\n						\n						<ion-input [(ngModel)]="signup.confirmspendingpassword" placeholder="Enter  confirmspendingpassword" name="confirmspendingpassword" type="password" #confirmspendingpassword="ngModel" required class="login-input" >\n						</ion-input>\n			\n\n			<ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor"  ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n				</ion-col>\n			</ion-row>\n			<hr>\n			<ion-row>\n				<ion-col text-center  style="font-size: 0.8em; color: #bdbdbd;">\n					Already a member? <a class="button-color" (click)="onLogin()">Login</a>\n				</ion-col>\n			</ion-row>\n		</ion-list>\n\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_setup_services__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sails_io_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sails_io_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sails_io_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(ngZone, toastCtrl, geolocation, navCtrl, platform, events, navParams, _setupService) {
        this.ngZone = ngZone;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.events = events;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.io = __WEBPACK_IMPORTED_MODULE_5_sails_io_js__(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__); //375-384 sails.io.js in nodemodule 
        this.submitted = false;
        this.location = { email: '', lat: '', long: '' };
        this.userEmail = { email: '' };
        this.btcValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.inrValue = { email: '', buyRate: '', currencyType: '', volume: '', sellRate: '' };
        this.io.sails.url = "http://198.187.28.200:3000";
        this.userdata();
        this.getCurrencyPrice();
        this.getCurrentPosition();
        this.getTradersSetValue();
    }
    DashboardPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        //  alert("user = = ="+this.user);
        console.log(this.user.user.email);
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.user.email;
            this.events.publish("shareObject", this.userEmail.email);
        }
    };
    DashboardPage.prototype.getCurrencyPrice = function () {
        var _this = this;
        this._setupService.getBuydata().subscribe(function (response) {
            if (response.statusCode == 200) {
                _this.cexdata = response.data.cex.bid;
                _this.zebPayData = response.data.zeb.buy;
            }
        });
    };
    // get current position
    DashboardPage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                enableHighAccuracy: true,
                maximumAge: 3600,
                timeout: 10000
            };
            _this.geolocation.getCurrentPosition(options).then(function (response) {
                _this.location.lat = response.coords.latitude;
                _this.location.long = response.coords.longitude;
                _this.location.email = _this.userEmail.email;
                _this._setupService.sentLocation(_this.location).subscribe(function (response) {
                });
            }).catch(function (error) {
            });
        });
    };
    //get traders updated values 
    DashboardPage.prototype.getTradersSetValue = function () {
        var _this = this;
        this._setupService.getTraderInfo(this.userEmail).subscribe(function (response) {
            if (response.data != null) {
                for (var i = 0; i < response.data.length; i++) {
                    switch (response.data[i].currencyType) {
                        case "INRW":
                            _this.inrValue.buyRate = response.data[i].buyRate;
                            _this.inrValue.sellRate = response.data[i].sellRate;
                            _this.inrValue.volume = response.data[i].volume;
                            break;
                        case "BTC":
                            _this.btcValue.buyRate = response.data[i].buyRate;
                            _this.btcValue.sellRate = response.data[i].sellRate;
                            _this.btcValue.volume = response.data[i].volume;
                            break;
                        default:
                            // code...
                            break;
                    }
                }
            }
        });
    };
    // update BTC values 
    DashboardPage.prototype.updateBTC = function (form) {
        this.btcValue.currencyType = "BTC";
        this.btcValue.email = this.userEmail.email;
        this.submitted = true;
        var ngZ = this.ngZone;
        var event = this.events;
        if (form.valid) {
            this.io.socket.post('/trader/buySellUpdate', this.btcValue, function (data, response) {
                ngZ.run(function () {
                    event.publish("ShareResponse", response);
                });
            });
            this.listenToDataChangeEvents();
        }
    };
    // update INR values 
    DashboardPage.prototype.updateINR = function (form) {
        this.inrValue.currencyType = "INRW";
        this.inrValue.email = this.userEmail.email;
        this.submitted = true;
        var ngZ = this.ngZone;
        var event = this.events;
        if (form.valid) {
            this.io.socket.post('/trader/buySellUpdate', this.inrValue, function (data, response) {
                ngZ.run(function () {
                    event.publish("ShareResponse", response);
                });
            });
            this.listenToDataChangeEvents();
        }
    };
    DashboardPage.prototype.listenToDataChangeEvents = function () {
        var _this = this;
        this.events.subscribe('ShareResponse', function (res) {
            var toast = _this.toastCtrl.create({
                message: res.body.message,
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 2000
            });
            toast.present();
        });
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        this.io.socket.disconnect();
        delete this.io.sails;
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"F:\IonicApps\Trader\streetX-moble-app\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n     <ion-item >\n  <ion-label >\n    <ion-row class="item-md" style="border:1px;" >  \n    <ion-col col-6>\n        <b><span>BTC VOL:</span></b>\n    </ion-col>\n     <ion-col col-6>{{cexdata}}</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-6>\n      <b><span>STX VOL:</span></b></ion-col>\n     <ion-col col-6>{{zebPayData}}</ion-col>\n  </ion-row>\n</ion-label>  \n</ion-item>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n \n\n<ion-content padding>\n  <ion-icon  name="Walllet"></ion-icon>\n  <h3 align="center">My Walllet</h3>\n    \n    <div>\n      <p align="center">$374.58358000</p>\n    </div>\n  <br />\n   <form #btcForm="ngForm" novalidate>\n    <ion-grid>\n<ion-card>\n  <ion-card-content>\n    <ion-row> <h3 class="text_Color" style="margin-top: 2px"><strong>BTC</strong></h3></ion-row>\n          <ion-row no-lines class="form-input-fields">\n            <ion-col col-4>\n\n          <ion-input [(ngModel)]="btcValue.buyRate"  placeholder="buy" name="buyRate" type="text" #buyRate="ngModel" spellcheck="false" autocapitalize="off" class="login-input" >\n        </ion-input>\n            </ion-col>\n            <ion-col col-4>\n         <ion-input [(ngModel)]="btcValue.sellRate" placeholder="sell" name="sellRate" type="text" #sellRate="ngModel"  class="login-input" >\n        </ion-input>\n            </ion-col>\n            <ion-col col-4>\n            <ion-input [(ngModel)]="btcValue.volume" placeholder="volume" name="volume" type="text" #volume="ngModel"  class="login-input" >\n        </ion-input>\n            </ion-col>\n         </ion-row>\n  </ion-card-content>\n</ion-card>\n       <br><br>\n    </ion-grid>\n </form>\n     \n\n\n    <form #inrForm="ngForm" novalidate>\n          <ion-grid>\n  <ion-card>\n  <ion-card-content>\n         <ion-row> <ion-row> <h3 class="text_Color" style="margin-top: 5px"><strong>ETH</strong></h3></ion-row></ion-row>\n          <ion-row no-lines class="form-input-fields">\n            <ion-col col-4>\n          <ion-input [(ngModel)]="inrValue.buyRate"  placeholder="buy"name="buyRate" type="text" #buyRate="ngModel" spellcheck="false" autocapitalize="off" class="login-input" >\n        </ion-input>\n            </ion-col>\n            <ion-col col-4>\n         <ion-input [(ngModel)]="inrValue.sellRate" placeholder="sell" name="sellRate" type="text" #sellRate="ngModel"  class="login-input" >\n        </ion-input>\n            </ion-col>\n            <ion-col col-4>\n            <ion-input [(ngModel)]="inrValue.volume" placeholder="volume" name="volume" type="text" #volume="ngModel"  class="login-input" >\n        </ion-input>\n            </ion-col>\n         </ion-row>\n  </ion-card-content>\n</ion-card>\n\n      </ion-grid>\n    \n\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"F:\IonicApps\Trader\streetX-moble-app\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */]) === "function" && _h || Object])
    ], DashboardPage);
    return DashboardPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=dashboard.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map