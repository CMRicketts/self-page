(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _titlepage_titlepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titlepage/titlepage.component */ "./src/app/titlepage/titlepage.component.ts");
/* harmony import */ var _contactpage_contactpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactpage/contactpage.component */ "./src/app/contactpage/contactpage.component.ts");
/* harmony import */ var _infopage_infopage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infopage/infopage.component */ "./src/app/infopage/infopage.component.ts");
/* harmony import */ var _resumepage_resumepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resumepage/resumepage.component */ "./src/app/resumepage/resumepage.component.ts");
/* harmony import */ var _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectpage/projectpage.component */ "./src/app/projectpage/projectpage.component.ts");
/* harmony import */ var _mail_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail/mail.component */ "./src/app/mail/mail.component.ts");
/* harmony import */ var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linkedin/linkedin.component */ "./src/app/linkedin/linkedin.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _titlepage_titlepage_component__WEBPACK_IMPORTED_MODULE_2__["TitlepageComponent"] },
    { path: 'about', component: _infopage_infopage_component__WEBPACK_IMPORTED_MODULE_4__["InfopageComponent"] },
    { path: 'contact', component: _contactpage_contactpage_component__WEBPACK_IMPORTED_MODULE_3__["ContactpageComponent"] },
    { path: 'resume', component: _resumepage_resumepage_component__WEBPACK_IMPORTED_MODULE_5__["ResumepageComponent"] },
    { path: 'projects', component: _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_6__["ProjectpageComponent"] },
    { path: 'mail', component: _mail_mail_component__WEBPACK_IMPORTED_MODULE_7__["MailComponent"] },
    { path: 'online', component: _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_8__["LinkedinComponent"] },
    { path: 'email', component: _email_email_component__WEBPACK_IMPORTED_MODULE_9__["EmailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<body>\n  <div>\n    <br/>\n    <router-outlet></router-outlet>\n  </div>\n  <br/>\n  <section class=\"hero is-light\">\n    <div class=\"hero\">\n      <br/>\n      <div class=\"level\">\n        <div class=\"level-item\">\n          <ul class=\"has-text-centered\">\n            <li>Created by Caleb Ricketts, 2018</li>\n            <li>Powered by <a href=\"https://bulma.io\" target=\"_blank\" class=\"has-text-link\">Bulma</a>, <a href=\"https://angular.io\" target=\"_blank\" class=\"has-text-link\">Angular</a>, and <a href=\"https://admin.typeform.com/signup?utm_campaign=SHjfuG&utm_source=typeform.com-12204913-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN\" class=\"has-text-link\" target=\"_blank\" >Typeform</a>\n            </li>\n            <li><a routerLink=\"/contact\" class=\"has-text-link\">Talk to me</a></li>\n            <br/>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>\n</body>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _titlepage_titlepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titlepage/titlepage.component */ "./src/app/titlepage/titlepage.component.ts");
/* harmony import */ var _resumepage_resumepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resumepage/resumepage.component */ "./src/app/resumepage/resumepage.component.ts");
/* harmony import */ var _contactpage_contactpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactpage/contactpage.component */ "./src/app/contactpage/contactpage.component.ts");
/* harmony import */ var _infopage_infopage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infopage/infopage.component */ "./src/app/infopage/infopage.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectpage/projectpage.component */ "./src/app/projectpage/projectpage.component.ts");
/* harmony import */ var _projectinfo_projectinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectinfo/projectinfo.component */ "./src/app/projectinfo/projectinfo.component.ts");
/* harmony import */ var _meinfo_meinfo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meinfo/meinfo.component */ "./src/app/meinfo/meinfo.component.ts");
/* harmony import */ var _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./linkedin/linkedin.component */ "./src/app/linkedin/linkedin.component.ts");
/* harmony import */ var _mail_mail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mail/mail.component */ "./src/app/mail/mail.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _titlepage_titlepage_component__WEBPACK_IMPORTED_MODULE_4__["TitlepageComponent"],
                _resumepage_resumepage_component__WEBPACK_IMPORTED_MODULE_5__["ResumepageComponent"],
                _contactpage_contactpage_component__WEBPACK_IMPORTED_MODULE_6__["ContactpageComponent"],
                _infopage_infopage_component__WEBPACK_IMPORTED_MODULE_7__["InfopageComponent"],
                _projectpage_projectpage_component__WEBPACK_IMPORTED_MODULE_9__["ProjectpageComponent"],
                _projectinfo_projectinfo_component__WEBPACK_IMPORTED_MODULE_10__["ProjectinfoComponent"],
                _meinfo_meinfo_component__WEBPACK_IMPORTED_MODULE_11__["MeinfoComponent"],
                _linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_12__["LinkedinComponent"],
                _mail_mail_component__WEBPACK_IMPORTED_MODULE_13__["MailComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_14__["EmailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contactpage/contactpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactpage/contactpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactpage/contactpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactpage/contactpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container has-text-centered\">\n\n  <div class=\"title is-size-1\">\n    <h1>\n      Talk to Me\n    </h1>\n  </div>\n  <div class=\"subtitle\">\n    <nav class=\"breadcrumb has-text-centered is-centered\" aria-label=\"breadcrumbs\">\n      <ul>\n        <li><a routerLink=\"/email\">Email Me</a></li>\n        <li><a routerLink=\"/mail\">Mail Me Something</a></li>\n        <li><a routerLink=\"/online\">Find Me Online</a></li>\n      </ul>\n    </nav>\n  </div>\n  <br/>\n  <div class=\"subtitle is-size-4\">\n    <h1>\n      Hey. We need to talk.\n    </h1>\n    <h1>\n      Just click one of those helpful links above.\n    </h1>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/contactpage/contactpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactpage/contactpage.component.ts ***!
  \******************************************************/
/*! exports provided: ContactpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactpageComponent", function() { return ContactpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactpageComponent = /** @class */ (function () {
    function ContactpageComponent() {
        /*router.events.subscribe((destination) => {
          if (destination instanceof NavigationEnd) {
            if (destination.url === '/email') {
              document.getElementById('email').classList.add('is-active');
              document.getElementById('mail').classList.remove('is-active');
              document.getElementById('online').classList.remove('is-active');
            } else if (destination.url === '/mail') {
              document.getElementById('email').classList.remove('is-active');
              document.getElementById('mail').classList.add('is-active');
              document.getElementById('online').classList.remove('is-active');
            } else if (destination.url === '/online') {
              document.getElementById('email').classList.remove('is-active');
              document.getElementById('mail').classList.remove('is-active');
              document.getElementById('online').classList.add('is-active');
            }
          }
        });
      }*/
    }
    ContactpageComponent.prototype.ngOnInit = function () {
    };
    ContactpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactpage',
            template: __webpack_require__(/*! ./contactpage.component.html */ "./src/app/contactpage/contactpage.component.html"),
            styles: [__webpack_require__(/*! ./contactpage.component.css */ "./src/app/contactpage/contactpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactpageComponent);
    return ContactpageComponent;
}());



/***/ }),

/***/ "./src/app/email/email.component.css":
/*!*******************************************!*\
  !*** ./src/app/email/email.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  /* Just to center the form on the page */\n  margin: 0 auto;\n  width: 400px;\n  /* To see the outline of the form */\n  padding: 1em;\n  border: 1px solid #CCC;\n  border-radius: 1em;\n}\n\nform div + div {\n  margin-top: 1em;\n}\n\nlabel {\n  /* To make sure that all labels have the same size and are properly aligned */\n  display: inline-block;\n  width: 90px;\n  text-align: right;\n}\n\ninput, textarea {\n  /* To make sure that all text fields have the same font settings\n     By default, textareas have a monospace font */\n  font: 1em sans-serif;\n\n  /* To give the same size to all text fields */\n  width: 300px;\n  box-sizing: border-box;\n\n  /* To harmonize the look & feel of text field border */\n  border: 1px solid #999;\n}\n\ninput:focus, textarea:focus {\n  /* To give a little highlight on active elements */\n  border-color: #000;\n}\n\ntextarea {\n  /* To properly align multiline text fields with their labels */\n  vertical-align: top;\n\n  /* To give enough room to type some text */\n  height: 5em;\n}\n\n.button {\n  /* To position the buttons to the same position of the text fields */\n  padding-left: 0px; /* same size as the label elements */\n}\n\nbutton {\n  /* This extra margin represent roughly the same space as the space\n     between the labels and their text fields */\n  margin-left: .5em;\n}\n"

/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container has-text-centered\">\n  <div class=\"title is-size-1\">\n    <h1>\n      Talk to Me\n    </h1>\n  </div>\n  <div class=\"subtitle\">\n    <nav class=\"breadcrumb is-centered\" aria-label=\"breadcrumbs\">\n      <ul>\n        <li><a routerLink=\"/email\"><strong>Email Me</strong></a></li>\n        <li><a routerLink=\"/mail\">Mail Me Something</a></li>\n        <li><a routerLink=\"/online\">Find Me Online</a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n\n<br/>\n<br/>\n<body>\n<div class=\"container is-fluid\">\n  <div class=\"Subtitle has-text-centered is-size-4\">\n    <h1>\n      Feel free to reach out to me at any time. I'd love to talk with you!\n    </h1>\n    <br/>\n    <div class=\"level\">\n\n        <div class=\"level-item\">\n          <div class=\"subtitle is-size-5\">\n            <strong>You can email me yourself at: <a href=\"mailto:ricketc17@gmail.com\"><i>ricketc17@gmail.com</i></a></strong>\n          </div>\n\n      </div>\n    </div>\n    <br/>\n    <div class=\"level\" id=\"email_form\">\n\n        <div class=\"level-item\">\n          <div class=\"subtitle is-size-6\">\n            Or, you can use this (conveniently placed) form!\n          </div>\n        </div>\n      </div>\n<br/>\n\n          <a class=\"typeform-share button\"\n             href=\"https://jeffmcgee.typeform.com/to/SHjfuG\"\n             data-mode=\"popup\"\n             style=\"display:inline-block;text-decoration:none;background-color:#267DDD;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;\"\n             target=\"_blank\">Launch me </a>\n    <script> (function() {\n      var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm_share\", b=\"https://embed.typeform.com/\";\n      if(!gi.call(d,id)){ js=ce.call(d,\"script\");\n      js.id=id;\n      js.src=b+\"embed.js\";\n      q=gt.call(d,\"script\")[0];\n      q.parentNode.insertBefore(js,q)\n      } })()\n    </script>\n  </div>\n  <script> (function() {\n    var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm\", b=\"https://embed.typeform.com/\";\n    if(!gi.call(d,id)) { js=ce.call(d,\"script\");\n    js.id=id;\n    js.src=b+\"embed.js\";\n    q=gt.call(d,\"script\")[0];\n    q.parentNode.insertBefore(js,q)\n    } })()\n  </script>\n\n  <br/>\n  <br/>\n  <div class=\"level\">\n    <div class=\"level-item\">\n      <h4 class=\"is-size-3 has-text-white\">\n        So long, and thanks for all the fish!\n      </h4>\n    </div>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/infopage/infopage.component.css":
/*!*************************************************!*\
  !*** ./src/app/infopage/infopage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr auto;\n      grid-template-rows: 1fr auto;\n}\n.footer {\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-row-span: 1;\n  grid-row-end: 3;\n}\nh1, title, subtitle {\n  font-family: 'EB Garamond', serif;\n}\n"

/***/ }),

/***/ "./src/app/infopage/infopage.component.html":
/*!**************************************************!*\
  !*** ./src/app/infopage/infopage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n  <br/>\n  <div class=\"container has-text-centered\">\n    <div class=\"title is-size-1\">\n      About Me\n    </div>\n    <div class=\"subtitle is-size-5\">\n      <i>I am a Hard Working, Disciplined Student with a Passion for Data Analytics.</i>\n    </div>\n    <div class=\"subtitle is-size-6\">\n      You can learn more about me <a routerLink=\"/resume\">here</a>\n    </div>\n  </div>\n  <br/>\n  <br/>\n\n  <div class=\"card\">\n    <header class=\"card-header\">\n      <p class=\"card-header-title is-centered is-size-4\">\n        College\n      </p>\n    </header>\n    <div class=\"card-content\">\n      <div class=\"content\">\n        <p>\n          I am currently enrolled and going to the Raikes School of Computer Science and Management: an Honors College\n          within the University of Nebraska, Lincoln. The Raikes School is a competitive and selective school that\n          combines a business and computer science curriculum while placing great importance on innovation and leadership.\n          I am majoring in Actuarial Science, and minoring in Mathematics, Statistics, and Computer Science.\n          <br>\n          <br>\n          In my first year, I expanded my extracurricular horizons to include the Actuarial Science club,\n          KRA (Residential Hall Association), Ballroom Dance club, Computing for All, and more.\n          <figure>\n            <img src=\"../../assets/oculus.ico\">\n          </figure>\n        </p>\n      </div>\n    </div>\n  </div>\n  <br/>\n\n  <div class=\"card\">\n    <header class=\"card-header\">\n      <p class=\"card-header-title is-centered is-size-4\">\n        High School\n      </p>\n    </header>\n    <div class=\"card-content\">\n      <div class=\"content\">\n        <p>\n          I attended Culver Military Academy in Culver, Indiana. I was heavily involved\n          in Band and numerous extracurriculars, including, but not limited to, Speech and Debate, Dungeons and Dragons Club,\n          Band Honor Organizations, the school newspaper, and French Honors Society.\n          <br>\n          <br>\n          I graduated in June of 2017 with the rank of First Lieutenant. Since then, I've been fully integrated\n          in attending and assisting with as many alumni events as I am able.\n          <figure>\n            <img src=\"../../assets/culver.png\">\n          </figure>\n        </p>\n      </div>\n    </div>\n    <footer class=\"card-footer\">\n    </footer>\n  </div>\n  <br/>\n\n  <div class=\"card\">\n    <header class=\"card-header\">\n      <p class=\"card-header-title is-centered is-size-4\">\n        Work and Volunteer Experience\n      </p>\n    </header>\n    <div class=\"card-content\">\n      <div class=\"content\">\n        <h4 class=\"has-text-centered\">\n          Zillow Group, Summer 2018\n        </h4>\n        <p>\n          I worked as the Software Development Engineer Intern for their Lincoln office.\n          I helped develop an internally-used website that utilized AWS API's and Lambdas. This project\n          greatly helped me learn about front-end web development, back-end logic, and the integration\n          between them. It helped me master Python, HTML, Typescript, Javascript, and other web frameworks.\n        </p>\n        <br/>\n        <h4 class=\"has-text-centered\">\n          Raikes School Summer Camp TA, Summer 2018\n        </h4>\n        <p>\n          I helped teach and mentor 30 campers at a Raikes-hosted computer science summer camp. I\n          assisted teaching the basics of Alice and Java during the day, and was a mentor and facsimile\n          Residential Adviser during the evenings, helping keep tabs on the campers and\n          organizing events for their enjoyment.\n        </p>\n        <h4 class=\"has-text-centered\">\n          Realm V Design Intern, Spring 2018\n        </h4>\n        <p>\n          I interned on a capstone project for Raikes juniors and seniors for Realm V.\n          I architected and refactored new core functionality, ensured the quality of\n          the database through interlinked data entries, worked with geospatial\n          data tracking, and unit tested every bit of code I created (and then some).\n          The project was written in Ruby, and was developed under the\n          Agile Methodology framework.\n        </p>\n        <h4 class=\"has-text-centered\">\n          Wikimedia Update, Winter 2017\n        </h4>\n        <p>\n          I worked with a Raikes School alumni to update our 10 year old Wikimedia software-based Raikes Wikipedia site.\n          I had to go and manually update many of the plugins and extensions used, as many were outdated and\n          thus no longer supported. I also had to manage the database, which involved working closely with the\n          WampServer software: which includes PHP, MySQL, and Apache.\n        </p>\n        <h4 class=\"has-text-centered\">\n          Reading and Leading, Spring 2017\n        </h4>\n        <p>\n          I designed and led a summer weekly program for local high school students and younger children.\n          I helped teach the younger children how to read and navigate my local library, and I taught\n          the high school students leadership skills that I learned at Culver Military Academy.\n        </p>\n      </div>\n    </div>\n  </div>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/infopage/infopage.component.ts":
/*!************************************************!*\
  !*** ./src/app/infopage/infopage.component.ts ***!
  \************************************************/
/*! exports provided: InfopageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfopageComponent", function() { return InfopageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfopageComponent = /** @class */ (function () {
    function InfopageComponent() {
    }
    InfopageComponent.prototype.ngOnInit = function () {
    };
    InfopageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infopage',
            template: __webpack_require__(/*! ./infopage.component.html */ "./src/app/infopage/infopage.component.html"),
            styles: [__webpack_require__(/*! ./infopage.component.css */ "./src/app/infopage/infopage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfopageComponent);
    return InfopageComponent;
}());



/***/ }),

/***/ "./src/app/linkedin/linkedin.component.css":
/*!*************************************************!*\
  !*** ./src/app/linkedin/linkedin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/linkedin/linkedin.component.html":
/*!**************************************************!*\
  !*** ./src/app/linkedin/linkedin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container has-text-centered\">\n  <div class=\"title is-size-1\">\n    <h1>\n      Talk to Me\n    </h1>\n  </div>\n  <div class=\"subtitle\">\n    <nav class=\"breadcrumb is-centered\" aria-label=\"breadcrumbs\">\n      <ul>\n        <li><a routerLink=\"/email\">Email Me</a></li>\n        <li><a routerLink=\"/mail\">Mail Me Something</a></li>\n        <li><a routerLink=\"/online\"><strong>Find Me Online</strong></a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n\n<br/>\n<br/>\n<div class=\"container has-text-centered\">\n  <div class=\"level\">\n    <div class=\"level-item\">\n      <h1 class=\"is-size-4\">\n        You can find me <a href=\"https://www.linkedin.com/in/caleb-ricketts-6457b6126/\" target=\"_blank\" class=\"has-text-link\">Here</a>, on Linkedin\n      </h1>\n    </div>\n  </div>\n  <div class=\"level\">\n    <div class=\"level-item\">\n      <h1 class=\"is-size-4\">\n        Or, you can find me <a href=\"https://www.facebook.com/caleb.ricketts.1\" target=\"_blank\" class=\"has-text-link\">Here</a>, on Facebook\n      </h1>\n    </div>\n  </div>\n  <div class=\"level\">\n    <div class=\"level-item\">\n      <h4 class=\"is-size-3 has-text-white\">\n        IT'S A SECRET TO EVERYBODY\n      </h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/linkedin/linkedin.component.ts":
/*!************************************************!*\
  !*** ./src/app/linkedin/linkedin.component.ts ***!
  \************************************************/
/*! exports provided: LinkedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinComponent", function() { return LinkedinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkedinComponent = /** @class */ (function () {
    function LinkedinComponent() {
    }
    LinkedinComponent.prototype.ngOnInit = function () {
    };
    LinkedinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linkedin',
            template: __webpack_require__(/*! ./linkedin.component.html */ "./src/app/linkedin/linkedin.component.html"),
            styles: [__webpack_require__(/*! ./linkedin.component.css */ "./src/app/linkedin/linkedin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkedinComponent);
    return LinkedinComponent;
}());



/***/ }),

/***/ "./src/app/mail/mail.component.css":
/*!*****************************************!*\
  !*** ./src/app/mail/mail.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mail/mail.component.html":
/*!******************************************!*\
  !*** ./src/app/mail/mail.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container has-text-centered\">\n  <div class=\"title is-size-1\">\n    <h1>\n      Talk to Me\n    </h1>\n  </div>\n  <div class=\"subtitle\">\n    <nav class=\"breadcrumb is-centered\" aria-label=\"breadcrumbs\">\n      <ul>\n        <li><a routerLink=\"/email\">Email Me</a></li>\n        <li><a routerLink=\"/mail\"><strong>Mail Me Something</strong></a></li>\n        <li><a routerLink=\"/online\">Find Me Online</a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n\n<br/>\n<br/>\n<div class=\"container has-text-centered\">\n  <div class=\"level\">\n    <div class=\"level-item\">\n      <h1 class=\"is-size-4\">\n        Hey - Things are cool. Send me your Swag!\n      </h1>\n    </div>\n  </div>\n  <div class=\"container has-text-centered is-size-5 is-italic has-text-weight-bold\">\n    <h1>\n      Caleb Ricketts\n    </h1>\n    <h1>\n      630 N. 14th Street, Room 203\n    </h1>\n    <h1>\n      Lincoln, Nebraska\n    </h1>\n    <h1>\n      68508\n    </h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mail/mail.component.ts":
/*!****************************************!*\
  !*** ./src/app/mail/mail.component.ts ***!
  \****************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailComponent = /** @class */ (function () {
    function MailComponent() {
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__(/*! ./mail.component.html */ "./src/app/mail/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.css */ "./src/app/mail/mail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/meinfo/meinfo.component.css":
/*!*********************************************!*\
  !*** ./src/app/meinfo/meinfo.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meinfo/meinfo.component.html":
/*!**********************************************!*\
  !*** ./src/app/meinfo/meinfo.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"scrolling-wrapper\">\n    <div class=\"card\">\n      <header class=\"card-header\">\n        <p class=\"card-header-title has-background-info has-text-white\">\n          <a routerLink=\"/about\" class=\"has-text-white\">About Me</a>\n        </p>\n      </header>\n      <div class=\"card-content\">\n        <div class=\"content\">\n          <ul>\n            <li>A Hard Working, Disciplined Student with a Passion for Data Analytics.</li>\n            <li>Sophomore at the Raikes School, UNL.</li>\n            <li>Majoring in Actuarial Science.</li>\n            <li>Minoring in Statistics, Mathematics, and Computer Science.</li>\n            <li><a routerLink=\"/resume\">Read my Resume.</a> </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/meinfo/meinfo.component.ts":
/*!********************************************!*\
  !*** ./src/app/meinfo/meinfo.component.ts ***!
  \********************************************/
/*! exports provided: MeinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeinfoComponent", function() { return MeinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeinfoComponent = /** @class */ (function () {
    function MeinfoComponent() {
    }
    MeinfoComponent.prototype.ngOnInit = function () {
    };
    MeinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meinfo',
            template: __webpack_require__(/*! ./meinfo.component.html */ "./src/app/meinfo/meinfo.component.html"),
            styles: [__webpack_require__(/*! ./meinfo.component.css */ "./src/app/meinfo/meinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeinfoComponent);
    return MeinfoComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-info is-flex\" role = \"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/home\">\n      <img src=\"../../assets/crwhitea.png\">\n    </a>\n  </div>\n  <div class=\"navbar-menu is-flex\">\n    <div class=\"navbar-start is-flex-touch\">\n      <a class=\"navbar-item\" routerLink=\"/about\">\n        About Me\n      </a>\n      <a class=\"navbar-item\" routerLink=\"/projects\">\n        My Projects\n      </a>\n      <a class=\"navbar-item\" routerLink=\"/resume\">\n        My Resume\n      </a>\n      <a class=\"navbar-item\" routerLink=\"/contact\">\n        Contact Me\n      </a>\n    </div>\n    <div class=\"navbar-end is-hidden-touch\">\n      <a class=\"navbar-item\" href=\"https://github.com/CMRicketts\" target=\"_blank\">\n        <img src=\"../../assets/github.svg\">\n      </a>\n      <a class=\"navbar-item\" href=\"https://www.facebook.com/caleb.ricketts.1\" target=\"_blank\">\n        <img src=\"../../assets/facebook.png\">\n      </a>\n      <a class=\"navbar-item\" href=\"https://www.linkedin.com/in/caleb-ricketts-6457b6126/\" target=\"_blank\">\n        <img src=\"../../assets/linkedinwhite.png\">\n      </a>\n      <a class=\"navbar-item\" routerLink=\"/email\">\n        <img src=\"../../assets/mail.svg\">\n      </a>\n      <a class=\"navbar-burger\"></a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/projectinfo/projectinfo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/projectinfo/projectinfo.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projectinfo/projectinfo.component.html":
/*!********************************************************!*\
  !*** ./src/app/projectinfo/projectinfo.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"scrolling-wrapper\">\n  <div class=\"card\">\n    <header class=\"card-header\">\n      <p class=\"card-header-title has-background-info\">\n        <a routerLink=\"/projects\" class=\"has-text-white\">My Projects</a>\n      </p>\n    </header>\n    <div class=\"card-content\">\n      <div class=\"content\">\n        <ul>\n          <li><a href=\"https://github.com/CMRicketts/dnd\" target=\"_blank\"><strong>dnd</strong></a>: a command line Dungeons and Dragons character creator application.</li>\n          <li><a href=\"https://github.com/CMRicketts/self_page\" target=\"_blank\"><strong>This Website</strong></a>: A long time dream, fulfilled.</li>\n          <li><strong>Jdekipedia Update:</strong> I manually updated the codebase of a Wikipedia-like website from its 2007 standards to today's coding conventions.</li>\n          <li><strong>Reading and Leading:</strong> A summer seminar where I taught children how to read, and high school students about leadership skills I learned at Culver Military Academy.</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/projectinfo/projectinfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectinfo/projectinfo.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectinfoComponent", function() { return ProjectinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectinfoComponent = /** @class */ (function () {
    function ProjectinfoComponent() {
    }
    ProjectinfoComponent.prototype.ngOnInit = function () {
    };
    ProjectinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectinfo',
            template: __webpack_require__(/*! ./projectinfo.component.html */ "./src/app/projectinfo/projectinfo.component.html"),
            styles: [__webpack_require__(/*! ./projectinfo.component.css */ "./src/app/projectinfo/projectinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectinfoComponent);
    return ProjectinfoComponent;
}());



/***/ }),

/***/ "./src/app/projectpage/projectpage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/projectpage/projectpage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projectpage/projectpage.component.html":
/*!********************************************************!*\
  !*** ./src/app/projectpage/projectpage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n  <br/>\n  <div class=\"level\">\n    <div class=\"level-left\">\n      <ul class=\"has-text-left\">\n        <li>Dnd</li>\n        <li>This website</li>\n        <li>realm V</li>\n        <li>jdekipedia</li>\n        <li>Reaing and leading</li>\n        <li>github link</li>\n        <br/>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projectpage/projectpage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/projectpage/projectpage.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectpageComponent", function() { return ProjectpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectpageComponent = /** @class */ (function () {
    function ProjectpageComponent() {
    }
    ProjectpageComponent.prototype.ngOnInit = function () {
    };
    ProjectpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projectpage',
            template: __webpack_require__(/*! ./projectpage.component.html */ "./src/app/projectpage/projectpage.component.html"),
            styles: [__webpack_require__(/*! ./projectpage.component.css */ "./src/app/projectpage/projectpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectpageComponent);
    return ProjectpageComponent;
}());



/***/ }),

/***/ "./src/app/resumepage/resumepage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/resumepage/resumepage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: 'EB Garamond', serif;\n}\n"

/***/ }),

/***/ "./src/app/resumepage/resumepage.component.html":
/*!******************************************************!*\
  !*** ./src/app/resumepage/resumepage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container has-text-centered\">\n  <div class=\"title is-size-1\">\n    <h1>\n      My Resume\n    </h1>\n  </div>\n  <div class=\"subtitle\">\n    <h1>\n      Enjoy, Read, and Download!\n    </h1>\n  </div>\n</div>\n<div class=\"column\">\n  <div class=\"columns\"></div>\n  <div class=\"columns is-four-fifths\">\n    <div class=\"container has-text-centered\">\n      <embed src=\"../../assets/CalebRickettsResume.pdf\" width=\"1000\" height=\"750\" type=\"application/pdf\">\n    </div>\n  </div>\n  <div class=\"columns\"></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/resumepage/resumepage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/resumepage/resumepage.component.ts ***!
  \****************************************************/
/*! exports provided: ResumepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumepageComponent", function() { return ResumepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumepageComponent = /** @class */ (function () {
    function ResumepageComponent() {
    }
    ResumepageComponent.prototype.ngOnInit = function () {
    };
    ResumepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resumepage',
            template: __webpack_require__(/*! ./resumepage.component.html */ "./src/app/resumepage/resumepage.component.html"),
            styles: [__webpack_require__(/*! ./resumepage.component.css */ "./src/app/resumepage/resumepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumepageComponent);
    return ResumepageComponent;
}());



/***/ }),

/***/ "./src/app/titlepage/titlepage.component.css":
/*!***************************************************!*\
  !*** ./src/app/titlepage/titlepage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-family: 'EB Garamond', serif;\n}\n"

/***/ }),

/***/ "./src/app/titlepage/titlepage.component.html":
/*!****************************************************!*\
  !*** ./src/app/titlepage/titlepage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"https://fonts.googleapis.com/css?family=EB+Garamond\" rel=\"stylesheet\">\n</head>\n<body>\n<div class=\"level\">\n  <div class=\"level-item\">\n    <h1 class=\"title is-1\">\n      Caleb M Ricketts\n    </h1>\n  </div>\n</div>\n<div class=\"level\">\n  <div class=\"level-item\">\n    <h1 class=\"subtitle is-3\">\n      Welcome\n    </h1>\n  </div>\n</div>\n<div class=\"container is-9 is-centered\">\n  <figure class=\"image \">\n    <img src=\"../../assets/cutwide.png\">\n  </figure>\n</div>\n<br/>\n<br/>\n\n<div class=\"container\">\n    <div class=\"columns is-4\">\n      <div class=\"column is-half \">\n        <app-meinfo></app-meinfo>\n      </div>\n      <div class=\"column \">\n        <app-projectinfo></app-projectinfo>\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/titlepage/titlepage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/titlepage/titlepage.component.ts ***!
  \**************************************************/
/*! exports provided: TitlepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlepageComponent", function() { return TitlepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitlepageComponent = /** @class */ (function () {
    function TitlepageComponent() {
    }
    TitlepageComponent.prototype.ngOnInit = function () {
    };
    TitlepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-titlepage',
            template: __webpack_require__(/*! ./titlepage.component.html */ "./src/app/titlepage/titlepage.component.html"),
            styles: [__webpack_require__(/*! ./titlepage.component.css */ "./src/app/titlepage/titlepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitlepageComponent);
    return TitlepageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/zDev/self-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map