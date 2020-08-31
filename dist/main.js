(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("me", i_r2 % 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r1);
} }
class AppComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.title = 'chat-app';
        this.message = '';
        this.chats = [
            'Lorem ipsum dolor sit',
            'amet consectetur',
            'adipisicing elit. Qui voluptate',
            'culpa nemo doloribus',
            'numquam autem',
            'atque sapiente aliquam',
            'in quas tenetur',
            'hic perspiciatis',
            'omnis magni vitae itaque harum',
            'nulla nisi?'
        ];
    }
    addChat() {
        if (this.message.length === 0) {
            return;
        }
        this.chats.push(this.message);
        this.message = '';
        window.setInterval(() => {
            const elem = document.getElementById('scrolldiv');
            elem.scrollTop = elem.scrollHeight;
        }, 500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 3, consts: [[1, "container"], [1, "topbar"], [1, "chatarea"], ["id", "scrolldiv", 2, "min-height", "0", "overflow", "scroll"], ["class", "chat", 3, "me", 4, "ngFor", "ngForOf"], [1, "inputarea"], [3, "submit"], ["name", "message", "type", "text", 1, "textbox", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "sendbutton"], [1, "chat"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 3, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_Template_form_submit_7_listener() { return ctx.addChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\r\n height: 100%;\r\n display: flex;\r\n flex-direction: column;\r\n}\r\n.topbar[_ngcontent-%COMP%] {\r\n padding: 15px 20px;\r\n background-color: #2196F3;\r\n color: #fff;\r\n font-size: 1.2em;\r\n}\r\n.chatarea[_ngcontent-%COMP%] {\r\n flex-grow: 1;\r\n background-color: #e0e0e0;\r\n padding: 10px 20px;\r\n display: flex;\r\n flex-direction: column;\r\n justify-content: flex-end;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\r\n margin: 4px 0;\r\n display: flex;\r\n justify-content: flex-start;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.me[_ngcontent-%COMP%] {\r\n justify-content: flex-end;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n background-color: #fff;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n background-color: #BBDEFB;\r\n display: inline;\r\n padding: 10px;\r\n border-radius: 5px;\r\n box-shadow: 1px 1px 4px rgba(0,0,0,0.3);\r\n}\r\n.inputarea[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n padding: 10px 0 10px 20px;\r\n display: flex;\r\n flex-direction: row;\r\n justify-content: center;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%] {\r\n flex-grow: 1;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%] {\r\n width: 100%;\r\n display: block;\r\n border: 0;\r\n font-size: 1.2em;\r\n border-bottom: 2px solid #e0e0e0;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]:focus {\r\n outline: 0;\r\n border-color: #2196F3;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .sendbutton[_ngcontent-%COMP%] {\r\n padding: 7px 10px;\r\n font-size: 1em;\r\n border: 0;\r\n background-color: transparent;\r\n color: #2196F3;\r\n font-weight: bold;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .sendbutton[_ngcontent-%COMP%]:focus {\r\n outline: 0; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsdUNBQXVDO0FBQ3hDO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztDQUNYLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsVUFBVTtDQUNWLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiBoZWlnaHQ6IDEwMCU7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udG9wYmFyIHtcclxuIHBhZGRpbmc6IDE1cHggMjBweDtcclxuIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiBjb2xvcjogI2ZmZjtcclxuIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLmNoYXRhcmVhIHtcclxuIGZsZXgtZ3JvdzogMTtcclxuIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmNoYXRhcmVhIC5jaGF0IHtcclxuIG1hcmdpbjogNHB4IDA7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5jaGF0YXJlYSAuY2hhdC5tZSB7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5jaGF0YXJlYSAuY2hhdC5tZSBwIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmNoYXRhcmVhIC5jaGF0IHAge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI0JCREVGQjtcclxuIGRpc3BsYXk6IGlubGluZTtcclxuIHBhZGRpbmc6IDEwcHg7XHJcbiBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5pbnB1dGFyZWEgZm9ybSB7XHJcbiBwYWRkaW5nOiAxMHB4IDAgMTBweCAyMHB4O1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94IHtcclxuIGZsZXgtZ3JvdzogMTtcclxufVxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94IHtcclxuIHdpZHRoOiAxMDAlO1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbiBib3JkZXI6IDA7XHJcbiBmb250LXNpemU6IDEuMmVtO1xyXG4gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuLmlucHV0YXJlYSAudGV4dGJveDpmb2N1cyB7XHJcbiBvdXRsaW5lOiAwO1xyXG4gYm9yZGVyLWNvbG9yOiAjMjE5NkYzO1xyXG59XHJcbi5pbnB1dGFyZWEgLnNlbmRidXR0b24ge1xyXG4gcGFkZGluZzogN3B4IDEwcHg7XHJcbiBmb250LXNpemU6IDFlbTtcclxuIGJvcmRlcjogMDtcclxuIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gY29sb3I6ICMyMTk2RjM7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW5wdXRhcmVhIC5zZW5kYnV0dG9uOmZvY3VzIHtcclxuIG91dGxpbmU6IDA7IFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);



class MessageService {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"]();
        this.socket.on('connect', () => {
            console.log('connected to the server');
        });
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tushar\Desktop\projects\chat-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map