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

module.exports = "<app-user></app-user>\n\n"

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
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-details/user-details.component */ "./src/app/user/user-details/user-details.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _user_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-new/user-new.component */ "./src/app/user/user-new/user-new.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _user_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"],
                _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
                _user_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_9__["UserNewComponent"],
                _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_10__["UserEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_user_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/user/user-details/user-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user-details/user-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-details/user-details.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
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

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>User Edit Component</h3>\n<form (submit)=\"update()\">\n  <input type=\"text\" name=\"first_name\" [(ngModel)]=\"userEdit.first_name\">\n  <input type=\"text\" name=\"last_name\" [(ngModel)]=\"userEdit.last_name\">\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"userEdit.email\">\n  <input type=\"submit\">\n  </form>"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user */ "./src/app/user/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditComponent = /** @class */ (function () {
    function UserEditComponent() {
        this.updateUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userEdit = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        Object.assign(this.userEdit, this.user);
    };
    UserEditComponent.prototype.update = function () {
        this.userEdit.editable = false;
        this.updateUserEvent.emit({ original: this.user, edited: this.userEdit });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _user__WEBPACK_IMPORTED_MODULE_0__["User"])
    ], UserEditComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], UserEditComponent.prototype, "updateUserEvent", void 0);
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>UserListComponent</h3>\n<div *ngFor=\"let user of users\">\n{{ user._id}} - {{ user.first_name}} - {{ user.last_name}} - {{user.email}} \n<button (click)=\"destroy(user)\">Delete</button>\n<button (click)= \"user.editable = !user.editable\">Edit</button>\n<app-user-edit [user]=\"user\" (updateUserEvent)=\"update($event)\" *ngIf=\"user.editable\"></app-user-edit>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
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

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
        //tells angular that we are sending data into this component
        this.destroyUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.destroy = function (user) {
        this.destroyUserEvent.emit(user);
    };
    UserListComponent.prototype.update = function (users) {
        this.updateUserEvent.emit(users);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "destroyUserEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserListComponent.prototype, "updateUserEvent", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-new/user-new.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user-new/user-new.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>User New Component</h3>\n<form (submit)=\"create()\">\n  <input type=\"text\" name=\"first_name\" [(ngModel)]=\"newUser.first_name\">\n  <input type=\"text\" name=\"last_name\" [(ngModel)]=\"newUser.last_name\">\n  <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\">\n  <input type=\"submit\">\n  </form>\n"

/***/ }),

/***/ "./src/app/user/user-new/user-new.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/user-new/user-new.component.ts ***!
  \*****************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user */ "./src/app/user/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNewComponent = /** @class */ (function () {
    function UserNewComponent() {
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        //component puts out new data that is generated by this event
        this.createNewUserEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UserNewComponent.prototype.ngOnInit = function () {
    };
    UserNewComponent.prototype.create = function () {
        //call server to save
        //new user event passes new user info to the create method
        this.createNewUserEvent.emit(this.newUser);
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_0__["User"](); //clears object by now pointing to a new user object (waiting for new input)
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], UserNewComponent.prototype, "createNewUserEvent", void 0);
    UserNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__(/*! ./user-new.component.html */ "./src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__(/*! ./user-new.component.css */ "./src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>UserComponent</h3>\n{{ users | json }}\n<app-user-new (createNewUserEvent)=\"create($event)\"></app-user-new>\n<app-user-list \n[users]=\"users\" \n(destroyUserEvent)=\"destroy($event)\"\n(updateUserEvent)=\"update($event)\">\n</app-user-list>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
        this.users = [
            new _user__WEBPACK_IMPORTED_MODULE_2__["User"](1, "First", "Last", "email@email.com"),
            new _user__WEBPACK_IMPORTED_MODULE_2__["User"](2, "First", "Last", "email@email.com"),
            new _user__WEBPACK_IMPORTED_MODULE_2__["User"](3, "First", "Last", "email@email.com"),
        ];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.create = function (user) {
        this.users.push(user);
    };
    UserComponent.prototype.destroy = function (user) {
        var i = this.users.indexOf(user);
        this.users.splice(i, 1);
    };
    UserComponent.prototype.update = function (users) {
        console.log(users);
        var i = this.users.indexOf(users.original);
        this.users[i] = users.edited;
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .then(function (users) { return _this.users = users; }); //redefine users array to be the users here
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.create = function (user) {
        return this._http.post("/users", user)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.destroy = function (user) {
        return this._http.delete("/users/" + user._id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.update = function (user) {
        return this._http.put("/users/" + user._id, user)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUsers = function () {
        return this._http.get("/users")
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService.prototype.getUser = function (user) {
        return this._http.get("/users/" + user._id)
            .map(function (data) { return data.json(); }).toPromise();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, first_name, last_name, email, editable) {
        if (_id === void 0) { _id = Math.floor(Math.random() * 100); }
        if (first_name === void 0) { first_name = ""; }
        if (last_name === void 0) { last_name = ""; }
        if (email === void 0) { email = ""; }
        if (editable === void 0) { editable = false; }
        this._id = _id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.editable = editable;
    }
    return User;
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

module.exports = __webpack_require__(/*! /Users/staceyabbott/Desktop/some-project/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map