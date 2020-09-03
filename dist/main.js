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





function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Who are you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_div_3_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addUser(ctx_r3.user); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.user = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Join Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user);
} }
function AppComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("notify", chat_r7.type == "notify")("me", chat_r7.user == ctx_r6.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r7.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r7.message);
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_4_div_2_Template, 5, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.chats);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AppComponent_div_5_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_5_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.message);
} }
class AppComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.title = 'Chat App';
        this.message = '';
        this.chats = [];
        this.messageService.getChats().subscribe((data) => {
            this.chats = data;
            window.setTimeout(() => {
                const elem = document.getElementById('scrolldiv');
                elem.scrollTop = elem.scrollHeight;
            }, 500);
        });
    }
    addChat() {
        if (this.message.length === 0) {
            return;
        }
        this.messageService.addChat(this.message);
        this.message = '';
    }
    addUser(user) {
        this.messageService.addUser(user);
        this.username = user;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [[1, "container"], [1, "topbar"], ["class", "usernamebox", 4, "ngIf"], ["class", "chatarea", 4, "ngIf"], ["class", "inputarea", 4, "ngIf"], [1, "usernamebox"], [1, "user"], [2, "padding-bottom", "10px", "font-weight", "bold"], [3, "submit"], ["type", "text", "name", "user", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "chatarea"], ["id", "scrolldiv", 2, "min-height", "0", "overflow", "scroll"], ["class", "chat", 3, "notify", "me", 4, "ngFor", "ngForOf"], [1, "chat"], [1, "username"], [1, "inputarea"], ["name", "message", "type", "text", "autofocus", "", "autocomplete", "off", 1, "textbox", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "sendbutton"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 8, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\r\n height: 100%;\r\n display: flex;\r\n flex-direction: column;\r\n}\r\n.topbar[_ngcontent-%COMP%] {\r\n padding: 15px 20px;\r\n background-color: #2196F3;\r\n color: #fff;\r\n font-size: 1.2em;\r\n}\r\n.chatarea[_ngcontent-%COMP%] {\r\n flex-grow: 1;\r\n background-color: #e0e0e0;\r\n padding: 10px 20px;\r\n display: flex;\r\n flex-direction: column;\r\n justify-content: flex-end;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%] {\r\n margin: 4px 0;\r\n display: flex;\r\n justify-content: flex-start;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.me[_ngcontent-%COMP%] {\r\n justify-content: flex-end;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.notify[_ngcontent-%COMP%] {\r\n justify-content: center;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n background-color: #fff;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n background-color: #BBDEFB;\r\n display: inline;\r\n padding: 10px;\r\n border-radius: 5px;\r\n box-shadow: 1px 1px 4px rgba(0,0,0,0.3);\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat.notify[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n background-color: transparent;\r\n box-shadow: none;\r\n font-size: 0.8em;\r\n font-weight: bold;\r\n color: grey;\r\n}\r\n.chatarea[_ngcontent-%COMP%]   .chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\r\n display: block;\r\n font-size: 0.8em;\r\n font-weight: bold;\r\n font-style: italic;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n padding: 10px 0 10px 20px;\r\n display: flex;\r\n flex-direction: row;\r\n justify-content: center;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%] {\r\n flex-grow: 1;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%], .usernamebox[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n width: 100%;\r\n display: block;\r\n border: 0;\r\n font-size: 1.2em;\r\n border-bottom: 2px solid #e0e0e0;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]:focus, .usernamebox[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n outline: 0;\r\n border-color: #2196F3;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .sendbutton[_ngcontent-%COMP%], .usernamebox[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n padding: 7px 10px;\r\n font-size: 1em;\r\n border: 0;\r\n background-color: transparent;\r\n color: #2196F3;\r\n font-weight: bold;\r\n}\r\n.inputarea[_ngcontent-%COMP%]   .sendbutton[_ngcontent-%COMP%]:focus {\r\n outline: 0; \r\n}\r\n.usernamebox[_ngcontent-%COMP%] {\r\n flex: 1;\r\n display: flex;\r\n align-items: center;\r\n justify-content: center;\r\n background-color: #e0e0e0;\r\n}\r\n.usernamebox[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\r\n display: flex;\r\n flex-direction: column;\r\n background-color: #fff;\r\n padding: 20px;\r\n align-items: center;\r\n}\r\n.usernamebox[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLHNCQUFzQjtBQUN2QjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix1Q0FBdUM7QUFDeEM7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsU0FBUztDQUNULGdCQUFnQjtDQUNoQixnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsU0FBUztDQUNULDZCQUE2QjtDQUM3QixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2Qix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiBoZWlnaHQ6IDEwMCU7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udG9wYmFyIHtcclxuIHBhZGRpbmc6IDE1cHggMjBweDtcclxuIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiBjb2xvcjogI2ZmZjtcclxuIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuLmNoYXRhcmVhIHtcclxuIGZsZXgtZ3JvdzogMTtcclxuIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmNoYXRhcmVhIC5jaGF0IHtcclxuIG1hcmdpbjogNHB4IDA7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5jaGF0YXJlYSAuY2hhdC5tZSB7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5jaGF0YXJlYSAuY2hhdC5ub3RpZnkge1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoYXRhcmVhIC5jaGF0Lm1lIHAge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uY2hhdGFyZWEgLmNoYXQgcCB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xyXG4gZGlzcGxheTogaW5saW5lO1xyXG4gcGFkZGluZzogMTBweDtcclxuIGJvcmRlci1yYWRpdXM6IDVweDtcclxuIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4uY2hhdGFyZWEgLmNoYXQubm90aWZ5IHAge1xyXG4gYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiBib3gtc2hhZG93OiBub25lO1xyXG4gZm9udC1zaXplOiAwLjhlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gY29sb3I6IGdyZXk7XHJcbn1cclxuLmNoYXRhcmVhIC5jaGF0IHAgLnVzZXJuYW1lIHtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gZm9udC1zaXplOiAwLjhlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5pbnB1dGFyZWEgZm9ybSB7XHJcbiBwYWRkaW5nOiAxMHB4IDAgMTBweCAyMHB4O1xyXG4gZGlzcGxheTogZmxleDtcclxuIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94IHtcclxuIGZsZXgtZ3JvdzogMTtcclxufVxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94LCAudXNlcm5hbWVib3ggLnVzZXIgaW5wdXQge1xyXG4gd2lkdGg6IDEwMCU7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIGJvcmRlcjogMDtcclxuIGZvbnQtc2l6ZTogMS4yZW07XHJcbiBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UwZTBlMDtcclxufVxyXG4uaW5wdXRhcmVhIC50ZXh0Ym94OmZvY3VzLCAudXNlcm5hbWVib3ggLnVzZXIgaW5wdXQ6Zm9jdXMge1xyXG4gb3V0bGluZTogMDtcclxuIGJvcmRlci1jb2xvcjogIzIxOTZGMztcclxufVxyXG4uaW5wdXRhcmVhIC5zZW5kYnV0dG9uLCAudXNlcm5hbWVib3ggLnVzZXIgYnV0dG9uIHtcclxuIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gZm9udC1zaXplOiAxZW07XHJcbiBib3JkZXI6IDA7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuIGNvbG9yOiAjMjE5NkYzO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmlucHV0YXJlYSAuc2VuZGJ1dHRvbjpmb2N1cyB7XHJcbiBvdXRsaW5lOiAwOyBcclxufVxyXG4udXNlcm5hbWVib3gge1xyXG4gZmxleDogMTtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi51c2VybmFtZWJveCAudXNlciB7XHJcbiBkaXNwbGF5OiBmbGV4O1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiBwYWRkaW5nOiAyMHB4O1xyXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udXNlcm5hbWVib3ggLnVzZXIgZm9ybSB7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class MessageService {
    constructor() {
        this._chats = [];
        this._chatssub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"]();
        this.socket.on('connect', () => {
            console.log('connected to the server');
        });
        this.socket.on('message recieved', (data) => {
            this._chats.push(data);
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('all messages', (data) => {
            this._chats = [...data];
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('user connected', (data) => {
            this._chats.push({ message: `${data} connected`, type: 'notify' });
            this._chatssub.next([...this._chats]);
        });
        this.socket.on('user disconnected', (data) => {
            this._chats.push({ message: `${data} disconnected`, type: 'notify' });
            this._chatssub.next([...this._chats]);
        });
    }
    addChat(message) {
        this.socket.emit('new message', message);
    }
    addUser(user) {
        this.socket.emit('new user', user);
    }
    getChats() {
        return this._chatssub.asObservable();
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