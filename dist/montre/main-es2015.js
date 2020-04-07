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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _sequence_builder_sequence_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequence-builder/sequence-builder.component */ "./src/app/sequence-builder/sequence-builder.component.ts");
/* harmony import */ var _sequence_editor_sequence_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sequence-editor/sequence-editor.component */ "./src/app/sequence-editor/sequence-editor.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");








const routes = [
    { path: '', redirectTo: '/upload', pathMatch: 'full' },
    { path: 'upload', component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["FileUploadComponent"] },
    { path: 'build', component: _sequence_builder_sequence_builder_component__WEBPACK_IMPORTED_MODULE_3__["SequenceBuilderComponent"] },
    { path: 'edit', component: _sequence_editor_sequence_editor_component__WEBPACK_IMPORTED_MODULE_4__["SequenceEditorComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_5__["PrintComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Montre';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 960px;\n  margin: 0 auto;\n  padding: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5NjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDUwcHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sequence_builder_sequence_builder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequence-builder/sequence-builder.component */ "./src/app/sequence-builder/sequence-builder.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/monitor/monitor.component.ts");
/* harmony import */ var _sequence_editor_sequence_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sequence-editor/sequence-editor.component */ "./src/app/sequence-editor/sequence-editor.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _sequence_builder_sequence_builder_component__WEBPACK_IMPORTED_MODULE_5__["SequenceBuilderComponent"],
        _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_9__["MonitorComponent"],
        _sequence_editor_sequence_editor_component__WEBPACK_IMPORTED_MODULE_10__["SequenceEditorComponent"],
        _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["FileUploadComponent"],
        _print_print_component__WEBPACK_IMPORTED_MODULE_12__["PrintComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _sequence_builder_sequence_builder_component__WEBPACK_IMPORTED_MODULE_5__["SequenceBuilderComponent"],
                    _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_9__["MonitorComponent"],
                    _sequence_editor_sequence_editor_component__WEBPACK_IMPORTED_MODULE_10__["SequenceEditorComponent"],
                    _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_11__["FileUploadComponent"],
                    _print_print_component__WEBPACK_IMPORTED_MODULE_12__["PrintComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FileUploadComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.file = null;
        this.fileName = "";
        this.fileLoaded = false;
    }
    ngOnInit() {
        this.fileLoadedSubscription = this.fileService.fileLoaded.subscribe(val => this.fileLoaded = val);
        this.fileNameSubscription = this.fileService.fileName.subscribe(val => this.fileName = val);
    }
    ngOnDestroy() {
        this.fileLoadedSubscription.unsubscribe();
        this.fileNameSubscription.unsubscribe();
    }
    selectFile() {
        const fileElement = document.getElementById("fileElem");
        fileElement.click();
    }
    handleFile(files) {
        this.fileService.loadFile(files[0]);
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"])); };
FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["app-file-upload"]], decls: 13, vars: 1, consts: [[1, "flex-vertical"], ["type", "file", "id", "fileElem", "accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 3, "change"], [1, "file-row"], [1, "upload", 3, "click"], [1, "selected-file"], [1, "action-row"], [1, "action-spacer"], ["routerLink", "/build", 1, "action-right"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload a Virtuoso backup file to begin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_3_listener($event) { return ctx.handleFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_5_listener() { return ctx.selectFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select File...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Build Sequence \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".flex-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 50px 0 20px;\n  font-size: 48px;\n  font-weight: 200;\n  text-align: center;\n}\n\n#fileElem[_ngcontent-%COMP%] {\n  display: none;\n  visibility: hidden;\n}\n\n.file-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 100px 0 30px;\n}\n\n.file-row[_ngcontent-%COMP%]   button.upload[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  background-color: #efefef;\n  border: 1px solid #efefef;\n  cursor: pointer;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 20px;\n  font-weight: 300;\n  outline: none;\n  text-decoration: none;\n}\n\n.file-row[_ngcontent-%COMP%]   button.upload[_ngcontent-%COMP%]:hover {\n  background-color: #e5e5e5;\n  border-color: #e5e5e5;\n}\n\n.file-row[_ngcontent-%COMP%]   button.upload[_ngcontent-%COMP%]:active {\n  background-color: #dadada;\n  border-color: #dadada;\n}\n\n.file-row[_ngcontent-%COMP%]   .selected-file[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 17.5px;\n  margin-left: 30px;\n  border: 1px solid #efefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFFSSxhQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURPSTtFQUNJLGtCQUFBO0VBQ0EseUJBNUJTO0VBNkJULHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTFI7O0FET1E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDTFo7O0FEUVE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDTlo7O0FEVUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6Y29sb3JcIjtcbiRnZW5lcmFsLWJhc2U6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiRpbnB1dC1iZy1jb2xvcjogY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogODUlKTtcblxuLmZsZXgtdmVydGljYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiA1MHB4IDAgMjBweDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmaWxlRWxlbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuLmZpbGUtcm93IHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTAwcHggMCAzMHB4O1xuXG4gICAgYnV0dG9uLnVwbG9hZCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnLWNvbG9yO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkaW5wdXQtYmctY29sb3I7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRnZW5lcmFsLWJhc2UsICRsaWdodG5lc3M6IDc1JSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGNvbG9yLnNjYWxlKCRnZW5lcmFsLWJhc2UsICRsaWdodG5lc3M6IDc1JSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiA2NSUpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiA2NSUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zZWxlY3RlZC1maWxlIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNy41cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGlucHV0LWJnLWNvbG9yO1xuICAgIH1cbn1cbiIsIi5mbGV4LXZlcnRpY2FsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICBtYXJnaW46IDUwcHggMCAyMHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2ZpbGVFbGVtIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZmlsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMDBweCAwIDMwcHg7XG59XG4uZmlsZS1yb3cgYnV0dG9uLnVwbG9hZCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZpbGUtcm93IGJ1dHRvbi51cGxvYWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICBib3JkZXItY29sb3I6ICNlNWU1ZTU7XG59XG4uZmlsZS1yb3cgYnV0dG9uLnVwbG9hZDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICBib3JkZXItY29sb3I6ICNkYWRhZGE7XG59XG4uZmlsZS1yb3cgLnNlbGVjdGVkLWZpbGUge1xuICB3aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDE3LjVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-upload',
                templateUrl: './file-upload.component.html',
                styleUrls: ['./file-upload.component.scss']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.show = false;
    }
    ngOnInit() {
        this.subscription = this.fileService.fileLoaded.subscribe(val => this.show = val);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "container"], ["src", "assets/montre-logo-regular.svg"], [1, "spacer"], ["routerLink", "/upload", "routerLinkActive", "active"], ["routerLink", "/build", "routerLinkActive", "active"], ["routerLink", "/edit", "routerLinkActive", "active"], ["routerLink", "/print", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  margin: 0;\n  padding: 0;\n  background-color: #323232;\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 960px;\n  margin: 0 auto;\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 36px;\n  margin: 12px 0;\n  flex-grow: 0;\n}\n.header[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  display: inline-block;\n  color: white;\n  line-height: 60px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtBQ0RSO0FESUk7RUFDSSxZQUFBO0FDRlI7QURJUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0ZaO0FES1E7RUFDSSwwQ0FBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyO1xuICAgIFxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICB9XG5cbiAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSIsIi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjMyMzI7XG59XG4uaGVhZGVyIC5jb250YWluZXIge1xuICB3aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlciBpbWcge1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbjogMTJweCAwO1xuICBmbGV4LWdyb3c6IDA7XG59XG4uaGVhZGVyIC5zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uaGVhZGVyIG5hdiB7XG4gIGZsZXgtZ3JvdzogMDtcbn1cbi5oZWFkZXIgbmF2IGEge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaGVhZGVyIG5hdiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/organ-layout.ts":
/*!****************************************!*\
  !*** ./src/app/models/organ-layout.ts ***!
  \****************************************/
/*! exports provided: OrganLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganLayout", function() { return OrganLayout; });
class OrganLayout {
    constructor() {
        // 12 Columns * 22pt =       264pt
        // 11 Column spacers * 5pt =  55pt
        // 3 Division spacers * 7pt = 21pt
        // 1 Center spacer * 20pt =   20pt
        //                          ------
        //                           360pt (per half)
        // Page variables
        this.pageWidth = 792; // 11"
        this.pageHeight = 612; // 8.5"
        this.pageMargin = 36; // 0.25"
        this.topMargin = 36; // 0.5"
        this.drawknobMargin = 18;
        this.drawknobTopMargin = 160;
        // Drawknob variables
        this.drawknobFontSize = 7;
        this.drawknobPitchOffset = 0.5; // Horizontal offset to center pitch designation (to make up for ')
        this.drawknobColumnWidth = 22;
        this.drawknobRadius = this.drawknobColumnWidth / 2;
        this.spacerColumnWidth = 7;
        this.divisionSpacerWidth = this.spacerColumnWidth + 7;
        this.centerSpacerWidth = 16;
        // Drawknob rows and columns
        this.columns = [];
        this._rowCount = 23;
        this.rows = [];
        // Division dividers
        this.dividers = [];
        // Division labels
        this.labels = [];
        // Calculate row coordinates
        this.rows.push(this.pageMargin + this.drawknobTopMargin + (this.drawknobColumnWidth / 2));
        for (let i = 1; i < this._rowCount + 1; i++) {
            const y = this.rows[i - 1] + (this.drawknobColumnWidth / 2) + (this.spacerColumnWidth / 2);
            this.rows.push(y);
        }
        // Column coordinates should be calculated in sub-class cunstructors
        // Division labels and dividers should be specified in sub-class constructors
    }
    labelColumn(col) {
        // Helper function for calculating the center between columns for 
        // division labels. Returns the center position after the stop column
        // passed into the function.
        const x = this.columns[col] + ((this.drawknobColumnWidth + this.spacerColumnWidth) / 2);
        return x;
    }
    labelRow() {
        // Helper function for calculating the Y position of top-row division labels
        return this.rows[0] - 20;
    }
    dividerColumn(col) {
        // Helper function for calculating the center between columns for 
        // division dividers. Returns the center position after the stop column
        // passed into the function.
        const x = this.columns[col] + ((this.divisionSpacerWidth + this.drawknobColumnWidth) / 2);
        return x;
    }
}


/***/ }),

/***/ "./src/app/models/sequence.ts":
/*!************************************!*\
  !*** ./src/app/models/sequence.ts ***!
  \************************************/
/*! exports provided: Sequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
class Sequence {
    constructor() {
        this.composition = {
            title: "",
            composer: "",
            catalogNo: ""
        };
        this.version = "";
        this.organ = "";
        this.steps = [];
    }
}


/***/ }),

/***/ "./src/app/models/tabernacle-organ-layout.ts":
/*!***************************************************!*\
  !*** ./src/app/models/tabernacle-organ-layout.ts ***!
  \***************************************************/
/*! exports provided: TabernacleOrganLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabernacleOrganLayout", function() { return TabernacleOrganLayout; });
/* harmony import */ var _organ_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organ-layout */ "./src/app/models/organ-layout.ts");

class TabernacleOrganLayout extends _organ_layout__WEBPACK_IMPORTED_MODULE_0__["OrganLayout"] {
    constructor() {
        // Calculate column coordinates
        super();
        //Pedal
        this.columns.push(this.drawknobMargin + (this.drawknobColumnWidth / 2) + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[0] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[1] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[2] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Swell
        this.columns.push(this.columns[3] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[4] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[5] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Bombarde/Anthiphonal
        this.columns.push(this.columns[6] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[7] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Pedal Couplers/Percussion
        this.columns.push(this.columns[8] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[9] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Manual Couplers
        this.columns.push(this.columns[10] + (this.centerSpacerWidth * 2) + (this.drawknobColumnWidth));
        this.columns.push(this.columns[11] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Solo
        this.columns.push(this.columns[12] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[13] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Great
        this.columns.push(this.columns[14] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[15] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[16] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Choir/Positiv
        this.columns.push(this.columns[17] + this.divisionSpacerWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[18] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[19] + this.spacerColumnWidth + this.drawknobColumnWidth);
        this.columns.push(this.columns[20] + this.spacerColumnWidth + this.drawknobColumnWidth);
        // Division dividers
        // Left stop jamb
        this.dividers.push({ x: this.dividerColumn(3), y1: this.rows[0], y2: this.rows[21] });
        this.dividers.push({ x: this.dividerColumn(6), y1: this.rows[0], y2: this.rows[21] });
        this.dividers.push({ x: this.dividerColumn(8), y1: this.rows[0], y2: this.rows[20] });
        // Center
        this.dividers.push({ x: 396, y1: this.rows[0] - 20, y2: this.rows[21] });
        // Right stop jamb
        this.dividers.push({ x: this.dividerColumn(12), y1: this.rows[0], y2: this.rows[18] });
        this.dividers.push({ x: this.dividerColumn(14), y1: this.rows[0], y2: this.rows[18] });
        this.dividers.push({ x: this.dividerColumn(17), y1: this.rows[0], y2: this.rows[21] });
        // Division labels
        this.labels.push({ label: "PEDAL", x: this.labelColumn(1), y: this.labelRow() });
        this.labels.push({ label: "SWELL", x: this.columns[5], y: this.labelRow() });
        this.labels.push({ label: "BOMBARDE", x: this.labelColumn(7), y: this.labelRow() });
        this.labels.push({ label: "PED. COUP.", x: this.labelColumn(9), y: this.labelRow() });
        this.labels.push({ label: "ANT.", x: this.columns[8], y: this.rows[8] + 2 });
        this.labels.push({ label: "PERC.", x: this.columns[9], y: this.rows[9] + 2 });
        this.labels.push({ label: "MAN. COUP.", x: this.labelColumn(11), y: this.labelRow() });
        this.labels.push({ label: "SOLO", x: this.labelColumn(13), y: this.labelRow() });
        this.labels.push({ label: "GREAT", x: this.columns[16], y: this.labelRow() });
        this.labels.push({ label: "CHOIR", x: this.labelColumn(19), y: this.labelRow() });
        this.labels.push({ label: "POS.", x: this.columns[19], y: this.rows[14] + 2 });
    }
}


/***/ }),

/***/ "./src/app/models/tabernacle-organ.ts":
/*!********************************************!*\
  !*** ./src/app/models/tabernacle-organ.ts ***!
  \********************************************/
/*! exports provided: TabernacleOrgan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabernacleOrgan", function() { return TabernacleOrgan; });
const TabernacleOrgan = {
    venue: "Tabernacle",
    builder: "Aeolian-Skinner",
    memoryLevels: 99,
    manuals: [
        {
            name: "General",
            orderNumber: -1,
            orderNumeral: "",
            pistons: [
                {
                    id: 0,
                    division: "General",
                    number: 1
                },
                {
                    id: 1,
                    division: "General",
                    number: 2
                },
                {
                    id: 2,
                    division: "General",
                    number: 3
                },
                {
                    id: 3,
                    division: "General",
                    number: 4
                },
                {
                    id: 4,
                    division: "General",
                    number: 5
                },
                {
                    id: 5,
                    division: "General",
                    number: 6
                },
                {
                    id: 6,
                    division: "General",
                    number: 7
                },
                {
                    id: 7,
                    division: "General",
                    number: 8
                },
                {
                    id: 8,
                    division: "General",
                    number: 9
                },
                {
                    id: 9,
                    division: "General",
                    number: 10
                },
                {
                    id: 10,
                    division: "General",
                    number: 11
                },
                {
                    id: 11,
                    division: "General",
                    number: 12
                },
                {
                    id: 12,
                    division: "General",
                    number: 13
                },
                {
                    id: 13,
                    division: "General",
                    number: 14
                },
                {
                    id: 14,
                    division: "General",
                    number: 15
                },
                {
                    id: 15,
                    division: "General",
                    number: 16
                },
                {
                    id: 16,
                    division: "General",
                    number: 17
                },
                {
                    id: 17,
                    division: "General",
                    number: 18
                },
                {
                    id: 18,
                    division: "General",
                    number: 19
                },
                {
                    id: 19,
                    division: "General",
                    number: 20
                },
                {
                    id: 20,
                    division: "General",
                    number: 21
                },
                {
                    id: 21,
                    division: "General",
                    number: 22
                },
                {
                    id: 22,
                    division: "General",
                    number: 23
                },
                {
                    id: 23,
                    division: "General",
                    number: 24
                }
            ]
        },
        {
            name: "Antiphonal",
            orderNumber: 5,
            orderNumeral: "V",
            pistons: [
                {
                    id: 24,
                    division: "Antiphonal",
                    number: 1
                },
                {
                    id: 25,
                    division: "Antiphonal",
                    number: 2
                },
                {
                    id: 26,
                    division: "Antiphonal",
                    number: 3
                },
                {
                    id: 27,
                    division: "Antiphonal",
                    number: 4
                },
            ]
        },
        {
            name: "Solo/Bombarde",
            orderNumber: 4,
            orderNumeral: "IV",
            pistons: [
                {
                    id: 28,
                    division: "Solo/Bombarde",
                    number: 1
                },
                {
                    id: 29,
                    division: "Solo/Bombarde",
                    number: 2
                },
                {
                    id: 30,
                    division: "Solo/Bombarde",
                    number: 3
                },
                {
                    id: 31,
                    division: "Solo/Bombarde",
                    number: 4
                },
                {
                    id: 32,
                    division: "Solo/Bombarde",
                    number: 5
                },
                {
                    id: 33,
                    division: "Solo/Bombarde",
                    number: 6
                },
                {
                    id: 34,
                    division: "Solo/Bombarde",
                    number: 7
                },
                {
                    id: 35,
                    division: "Solo/Bombarde",
                    number: 8
                }
            ]
        },
        {
            name: "Swell",
            orderNumber: 3,
            orderNumeral: "III",
            pistons: [
                {
                    id: 36,
                    division: "Swell",
                    number: 1
                },
                {
                    id: 37,
                    division: "Swell",
                    number: 2
                },
                {
                    id: 38,
                    division: "Swell",
                    number: 3
                },
                {
                    id: 39,
                    division: "Swell",
                    number: 4
                },
                {
                    id: 40,
                    division: "Swell",
                    number: 5
                },
                {
                    id: 41,
                    division: "Swell",
                    number: 6
                },
                {
                    id: 42,
                    division: "Swell",
                    number: 7
                },
                {
                    id: 43,
                    division: "Swell",
                    number: 8
                }
            ]
        },
        {
            name: "Great",
            orderNumber: 2,
            orderNumeral: "II",
            pistons: [
                {
                    id: 44,
                    division: "Great",
                    number: 1
                },
                {
                    id: 45,
                    division: "Great",
                    number: 2
                },
                {
                    id: 46,
                    division: "Great",
                    number: 3
                },
                {
                    id: 47,
                    division: "Great",
                    number: 4
                },
                {
                    id: 48,
                    division: "Great",
                    number: 5
                },
                {
                    id: 49,
                    division: "Great",
                    number: 6
                },
                {
                    id: 50,
                    division: "Great",
                    number: 7
                },
                {
                    id: 51,
                    division: "Great",
                    number: 8
                }
            ]
        },
        {
            name: "Choir",
            orderNumber: 1,
            orderNumeral: "I",
            pistons: [
                {
                    id: 52,
                    division: "Choir",
                    number: 1
                },
                {
                    id: 53,
                    division: "Choir",
                    number: 2
                },
                {
                    id: 54,
                    division: "Choir",
                    number: 3
                },
                {
                    id: 55,
                    division: "Choir",
                    number: 4
                },
                {
                    id: 56,
                    division: "Choir",
                    number: 5
                },
                {
                    id: 57,
                    division: "Choir",
                    number: 6
                },
                {
                    id: 58,
                    division: "Choir",
                    number: 7
                },
                {
                    id: 59,
                    division: "Choir",
                    number: 8
                }
            ]
        },
        {
            name: "Positiv",
            orderNumber: 1.5,
            orderNumeral: "I",
            pistons: [
                {
                    id: 60,
                    division: "Positiv",
                    number: 1
                },
                {
                    id: 61,
                    division: "Positiv",
                    number: 2
                },
                {
                    id: 62,
                    division: "Positiv",
                    number: 3
                },
                {
                    id: 63,
                    division: "Positiv",
                    number: 4
                },
                {
                    id: 64,
                    division: "Positiv",
                    number: 5
                },
                {
                    id: 65,
                    division: "Positiv",
                    number: 6
                }
            ]
        },
        {
            name: "Pedal",
            orderNumber: 0,
            orderNumeral: "",
            pistons: [
                {
                    id: 66,
                    division: "Pedal",
                    number: 1
                },
                {
                    id: 67,
                    division: "Pedal",
                    number: 2
                },
                {
                    id: 68,
                    division: "Pedal",
                    number: 3
                },
                {
                    id: 69,
                    division: "Pedal",
                    number: 4
                },
                {
                    id: 70,
                    division: "Pedal",
                    number: 5
                },
                {
                    id: 71,
                    division: "Pedal",
                    number: 6
                },
                {
                    id: 72,
                    division: "Pedal",
                    number: 7
                },
                {
                    id: 73,
                    division: "Pedal",
                    number: 8
                }
            ]
        },
    ],
    stops: [
        {
            id: 0,
            name: "Clarion",
            shortName: "CLR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 0,
            row: 2,
            division: 7
        },
        {
            id: 2,
            name: "Posaune",
            shortName: "PSN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 0,
            row: 4,
            division: 7
        },
        {
            id: 3,
            name: "Ophicleide",
            shortName: "OPH",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 0,
            row: 6,
            division: 7
        },
        {
            id: 4,
            name: "Bombarde",
            shortName: "BMB",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 0,
            row: 8,
            division: 7
        },
        {
            id: 5,
            name: "Grand Harmonics V",
            shortName: "GHV",
            pitchDesignation: "10\'",
            shortPitchDesignation: "10\'",
            column: 0,
            row: 10,
            division: 7
        },
        {
            id: 6,
            name: "Lieblich Gedeckt",
            shortName: "LGT",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 0,
            row: 12,
            division: 7
        },
        {
            id: 7,
            name: "Lieblich Gedeckt",
            shortName: "LGT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 0,
            row: 14,
            division: 7
        },
        {
            id: 8,
            name: "Spitzprincipal",
            shortName: "SPP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 0,
            row: 16,
            division: 7
        },
        {
            id: 9,
            name: "Lieblich Gedeckt",
            shortName: "LGT",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 0,
            row: 18,
            division: 7
        },
        {
            id: 10,
            name: "Violone",
            shortName: "VLN",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 0,
            row: 20,
            division: 7
        },
        {
            id: 11,
            name: "Contre Bourdon",
            shortName: "CBD",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 0,
            row: 22,
            division: 7
        },
        {
            id: 12,
            name: "Kornett",
            shortName: "KNT",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 1,
            row: 1,
            division: 7
        },
        {
            id: 13,
            name: "Trumpet",
            shortName: "TPT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 1,
            row: 3,
            division: 7
        },
        {
            id: 14,
            name: "Double Trumpet",
            shortName: "DBL",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 1,
            row: 5,
            division: 7
        },
        {
            id: 15,
            name: "Trombone",
            shortName: "TRB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 1,
            row: 7,
            division: 7
        },
        {
            id: 16,
            name: "Full Mixture",
            shortName: "FUL",
            pitchDesignation: "V",
            shortPitchDesignation: "V",
            column: 1,
            row: 9,
            division: 7
        },
        {
            id: 17,
            name: "Nachthorn",
            shortName: "NHN",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 1,
            row: 11,
            division: 7
        },
        {
            id: 18,
            name: "Quinte",
            shortName: "QNT",
            pitchDesignation: "5 1/3\'",
            shortPitchDesignation: "5.3\'",
            column: 1,
            row: 13,
            division: 7
        },
        {
            id: 19,
            name: "Flûte Ouverte",
            shortName: "FOV",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 1,
            row: 15,
            division: 7
        },
        {
            id: 20,
            name: "Grosse Quinte",
            shortName: "QNT",
            pitchDesignation: "10 2/3\'",
            shortPitchDesignation: "10.7\'",
            column: 1,
            row: 17,
            division: 7
        },
        {
            id: 21,
            name: "Bourdon",
            shortName: "BDN",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 1,
            row: 19,
            division: 7
        },
        {
            id: 22,
            name: "Contre Basse",
            shortName: "CTB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 1,
            row: 21,
            division: 7
        },
        {
            id: 23,
            name: "Contre Trompette",
            shortName: "CTR",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 2,
            row: 2,
            division: 7
        },
        {
            id: 24,
            name: "Double Trumpet",
            shortName: "DBL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 2,
            row: 4,
            division: 7
        },
        {
            id: 25,
            name: "Contre Trompette",
            shortName: "CTR",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 2,
            row: 6,
            division: 7
        },
        {
            id: 26,
            name: "Cymbale",
            shortName: "CYM",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 2,
            row: 8,
            division: 7
        },
        {
            id: 27,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 2,
            row: 10,
            division: 7
        },
        {
            id: 28,
            name: "Choral Bass",
            shortName: "CHB",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 2,
            row: 12,
            division: 7
        },
        {
            id: 29,
            name: "Flauto Dolce",
            shortName: "FLD",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 2,
            row: 14,
            division: 7
        },
        {
            id: 30,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 2,
            row: 16,
            division: 7
        },
        {
            id: 31,
            name: "Gemshorn",
            shortName: "GMS",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 2,
            row: 18,
            division: 7
        },
        {
            id: 32,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 2,
            row: 20,
            division: 7
        },
        {
            id: 33,
            name: "Montre",
            shortName: "MNT",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 2,
            row: 22,
            division: 7
        },
        {
            id: 34,
            name: "Chalmeau",
            shortName: "CHL",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 3,
            row: 1,
            division: 7
        },
        {
            id: 35,
            name: "Krummhorn",
            shortName: "KRM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 3,
            row: 3,
            division: 7
        },
        {
            id: 36,
            name: "Dulzian",
            shortName: "DLZ",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 3,
            row: 5,
            division: 7
        },
        {
            id: 37,
            name: "Contra Fagot",
            shortName: "CFG",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 3,
            row: 7,
            division: 7
        },
        {
            id: 38,
            name: "Blockflöte",
            shortName: "BLK",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 3,
            row: 9,
            division: 7
        },
        {
            id: 39,
            name: "Gamba",
            shortName: "GMB",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 3,
            row: 11,
            division: 7
        },
        {
            id: 40,
            name: "Gamba",
            shortName: "GMB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 3,
            row: 13,
            division: 7
        },
        {
            id: 41,
            name: "Violoncello",
            shortName: "VLC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 3,
            row: 15,
            division: 7
        },
        {
            id: 42,
            name: "Gamba",
            shortName: "GMB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 3,
            row: 17,
            division: 7
        },
        {
            id: 43,
            name: "Flûte Ouverte",
            shortName: "FOV",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 3,
            row: 19,
            division: 7
        },
        {
            id: 44,
            name: "Flûte Ouverte",
            shortName: "FOV",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 3,
            row: 21,
            division: 7
        },
        {
            id: 45,
            name: "Swell to Swell",
            shortName: "STS",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 4,
            row: 0,
            division: 3
        },
        {
            id: 46,
            name: "Quinte Trompette",
            shortName: "QTR",
            pitchDesignation: "5 1/3\'",
            shortPitchDesignation: "5.3\'",
            column: 4,
            row: 2,
            division: 3
        },
        {
            id: 47,
            name: "2ème Trompette",
            shortName: "2TR",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 4,
            row: 4,
            division: 3
        },
        {
            id: 48,
            name: "Contra Fagot",
            shortName: "CFG",
            pitchDesignation: "32\'",
            shortPitchDesignation: "32\'",
            column: 4,
            row: 6,
            division: 3
        },
        {
            id: 49,
            name: "Plein Jeu",
            shortName: "PLJ",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 4,
            row: 8,
            division: 3
        },
        {
            id: 50,
            name: "Octavin",
            shortName: "OCT",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 4,
            row: 10,
            division: 3
        },
        {
            id: 51,
            name: "Prestant",
            shortName: "PRS",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 4,
            row: 12,
            division: 3
        },
        {
            id: 52,
            name: "Flauto Dolce",
            shortName: "FLD",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 4,
            row: 14,
            division: 3
        },
        {
            id: 53,
            name: "Salicional",
            shortName: "SAL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 4,
            row: 16,
            division: 3
        },
        {
            id: 54,
            name: "Viole de Gambe",
            shortName: "VDG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 4,
            row: 18,
            division: 3
        },
        {
            id: 55,
            name: "Geigen Principal",
            shortName: "GPR",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 4,
            row: 20,
            division: 3
        },
        {
            id: 56,
            name: "Tremulant",
            shortName: "TRM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 5,
            row: 1,
            division: 3
        },
        {
            id: 57,
            name: "Clairon",
            shortName: "CLR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 5,
            row: 3,
            division: 3
        },
        {
            id: 58,
            name: "Contre Trompette",
            shortName: "CTR",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 5,
            row: 5,
            division: 3
        },
        {
            id: 59,
            name: "Cymbale",
            shortName: "CYM",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 5,
            row: 7,
            division: 3
        },
        {
            id: 60,
            name: "Plein Jeu",
            shortName: "PLJ",
            pitchDesignation: "VI",
            shortPitchDesignation: "VI",
            column: 5,
            row: 9,
            division: 3
        },
        {
            id: 61,
            name: "Nazard",
            shortName: "NAZ",
            pitchDesignation: "2 2/3\'",
            shortPitchDesignation: "2.7\'",
            column: 5,
            row: 11,
            division: 3
        },
        {
            id: 62,
            name: "Fugara",
            shortName: "FUG",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 5,
            row: 13,
            division: 3
        },
        {
            id: 63,
            name: "Orchestral Strings II",
            shortName: "ORC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 5,
            row: 15,
            division: 3
        },
        {
            id: 64,
            name: "Viole Céleste II",
            shortName: "VLC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 5,
            row: 17,
            division: 3
        },
        {
            id: 65,
            name: "Claribel Flute",
            shortName: "CFL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 5,
            row: 19,
            division: 3
        },
        {
            id: 66,
            name: "Gemshorn",
            shortName: "GMS",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 5,
            row: 21,
            division: 3
        },
        {
            id: 67,
            name: "Swell to Swell",
            shortName: "STS",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 6,
            row: 0,
            division: 3
        },
        {
            id: 68,
            name: "Voix Humaine",
            shortName: "VXH",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 2,
            division: 3
        },
        {
            id: 69,
            name: "1ère Trompette",
            shortName: "1TR",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 4,
            division: 3
        },
        {
            id: 70,
            name: "Hautbois",
            shortName: "HTB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 6,
            division: 3
        },
        {
            id: 71,
            name: "Cornet",
            shortName: "CRN",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 6,
            row: 8,
            division: 3
        },
        {
            id: 72,
            name: "Hohlflöte",
            shortName: "HLF",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 6,
            row: 10,
            division: 3
        },
        {
            id: 73,
            name: "Flauto Traverso",
            shortName: "FTR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 6,
            row: 12,
            division: 3
        },
        {
            id: 74,
            name: "Flute Celeste",
            shortName: "FLC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 14,
            division: 3
        },
        {
            id: 75,
            name: "Voix Céleste",
            shortName: "VOC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 16,
            division: 3
        },
        {
            id: 76,
            name: "Gedeckt",
            shortName: "GED",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 6,
            row: 18,
            division: 3
        },
        {
            id: 77,
            name: "Lieblich Gedeckt",
            shortName: "LGT",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 6,
            row: 20,
            division: 3
        },
        {
            id: 78,
            name: "Clairon",
            shortName: "CLR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 7,
            row: 1,
            division: 2
        },
        {
            id: 79,
            name: "Bombarde",
            shortName: "BMB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 7,
            row: 3,
            division: 2
        },
        {
            id: 80,
            name: "Grande Fourniture",
            shortName: "GRF",
            pitchDesignation: "VI",
            shortPitchDesignation: "VI",
            column: 7,
            row: 5,
            division: 2
        },
        {
            id: 81,
            name: "Diapason",
            shortName: "DIA",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 7,
            row: 7,
            division: 2
        },
        {
            id: 82,
            name: "Antiphonal to Antiphonal",
            shortName: "ATA",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 7,
            row: 9,
            division: 1
        },
        {
            id: 83,
            name: "Tuba Mirabilis",
            shortName: "TBM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 7,
            row: 11,
            division: 1
        },
        {
            id: 84,
            name: "Tremulant",
            shortName: "TRM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 7,
            row: 13,
            division: 1
        },
        {
            id: 85,
            name: "Trompette",
            shortName: "TPT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 7,
            row: 15,
            division: 1
        },
        {
            id: 86,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 7,
            row: 17,
            division: 1
        },
        {
            id: 87,
            name: "Salicional",
            shortName: "SAL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 7,
            row: 19,
            division: 1
        },
        {
            id: 88,
            name: "Diapason",
            shortName: "DIA",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 7,
            row: 21,
            division: 1
        },
        {
            id: 89,
            name: "Trompette Harmonique",
            shortName: "TPH",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 8,
            row: 0,
            division: 2
        },
        {
            id: 90,
            name: "Trompette",
            shortName: "TPT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 8,
            row: 2,
            division: 2
        },
        {
            id: 91,
            name: "Grosse Cornet",
            shortName: "GRC",
            pitchDesignation: "IV-VI",
            shortPitchDesignation: "IV",
            column: 8,
            row: 4,
            division: 2
        },
        {
            id: 92,
            name: "Octave",
            shortName: "OCT",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 8,
            row: 6,
            division: 2
        },
        {
            id: 93,
            name: "Antiphonal to Antiphonal",
            shortName: "ATA",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 8,
            row: 10,
            division: 1
        },
        {
            id: 94,
            name: "Cornet",
            shortName: "CRN",
            pitchDesignation: "V",
            shortPitchDesignation: "V",
            column: 8,
            row: 12,
            division: 1
        },
        {
            id: 95,
            name: "Vox Humana",
            shortName: "VXH",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 8,
            row: 14,
            division: 1
        },
        {
            id: 96,
            name: "Kleine Mixtur",
            shortName: "KLM",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 8,
            row: 16,
            division: 1
        },
        {
            id: 97,
            name: "Voix Céleste",
            shortName: "VOC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 8,
            row: 18,
            division: 1
        },
        {
            id: 98,
            name: "Gedeckt",
            shortName: "GED",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 8,
            row: 20,
            division: 1
        },
        {
            id: 99,
            name: "Swell to Pedal",
            shortName: "STP",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 9,
            row: 1,
            division: 7
        },
        {
            id: 100,
            name: "Choir to Pedal",
            shortName: "CTP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 9,
            row: 3,
            division: 7
        },
        {
            id: 101,
            name: "Solo to Pedal",
            shortName: "SOP",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 9,
            row: 5,
            division: 7
        },
        {
            id: 102,
            name: "Antiphonal to Pedal",
            shortName: "ATP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 9,
            row: 7,
            division: 7
        },
        {
            id: 103,
            name: "Chimes on Pedal",
            shortName: "CHM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "PD",
            column: 9,
            row: 11,
            division: 7
        },
        {
            id: 104,
            name: "Harp on Choir",
            shortName: "HRP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "CH",
            column: 9,
            row: 13,
            division: 5
        },
        {
            id: 105,
            name: "Great to Pedal",
            shortName: "GTP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 10,
            row: 0,
            division: 7
        },
        {
            id: 106,
            name: "Swell to Pedal",
            shortName: "STP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 10,
            row: 2,
            division: 7
        },
        {
            id: 107,
            name: "Positiv to Pedal",
            shortName: "PTP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 10,
            row: 4,
            division: 7
        },
        {
            id: 108,
            name: "Solo to Pedal",
            shortName: "SOP",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 10,
            row: 6,
            division: 7
        },
        {
            id: 109,
            name: "Pedal Tutti to Swell",
            shortName: "PT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "SW",
            column: 10,
            row: 8,
            division: 7
        },
        {
            id: 110,
            name: "Chimes on Great",
            shortName: "CHM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "GT",
            column: 10,
            row: 10,
            division: 4
        },
        {
            id: 111,
            name: "Celesta on Choir",
            shortName: "CEL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "CH",
            column: 10,
            row: 12,
            division: 5
        },
        {
            id: 112,
            name: "Swell to Great",
            shortName: "STG",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 11,
            row: 0,
            division: 4
        },
        {
            id: 113,
            name: "Swell to Great",
            shortName: "STG",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 11,
            row: 2,
            division: 4
        },
        {
            id: 114,
            name: "Choir to Great",
            shortName: "CTG",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 11,
            row: 4,
            division: 4
        },
        {
            id: 115,
            name: "Solo to Great",
            shortName: "SOG",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 11,
            row: 6,
            division: 4
        },
        {
            id: 116,
            name: "Solo to Great",
            shortName: "SOG",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 11,
            row: 8,
            division: 4
        },
        {
            id: 117,
            name: "Swell to Choir",
            shortName: "STC",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 11,
            row: 10,
            division: 5
        },
        {
            id: 118,
            name: "Swell to Choir",
            shortName: "STC",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 11,
            row: 12,
            division: 5
        },
        {
            id: 119,
            name: "Antiphonal to Choir",
            shortName: "ATC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 11,
            row: 14,
            division: 5
        },
        {
            id: 120,
            name: "Positiv to Solo",
            shortName: "PTS",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 11,
            row: 16,
            division: 5
        },
        {
            id: 121,
            name: "Swell to Great",
            shortName: "STG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 1,
            division: 4
        },
        {
            id: 122,
            name: "Positiv to Great",
            shortName: "PTG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 3,
            division: 4
        },
        {
            id: 123,
            name: "Choir to Great",
            shortName: "CTG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 5,
            division: 4
        },
        {
            id: 124,
            name: "Solo to Great",
            shortName: "SOG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 7,
            division: 4
        },
        {
            id: 125,
            name: "Antiphonal to Great",
            shortName: "ATG",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 9,
            division: 4
        },
        {
            id: 126,
            name: "Swell to Choir",
            shortName: "STC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 11,
            division: 5
        },
        {
            id: 127,
            name: "Solo to Choir",
            shortName: "SOC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 13,
            division: 5
        },
        {
            id: 128,
            name: "Antiphonal to Choir",
            shortName: "ATC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 12,
            row: 15,
            division: 5
        },
        {
            id: 129,
            name: "Great Tutti to Solo",
            shortName: "GTS",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 12,
            row: 17,
            division: 2
        },
        {
            id: 130,
            name: "Solo Unison Off",
            shortName: "SUO",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 13,
            row: 0,
            division: 2
        },
        {
            id: 131,
            name: "Solo to Solo",
            shortName: "STS",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 13,
            row: 2,
            division: 2
        },
        {
            id: 132,
            name: "Tremulant",
            shortName: "TRM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 13,
            row: 4,
            division: 2
        },
        {
            id: 133,
            name: "Corno di Bassetto",
            shortName: "CDB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 13,
            row: 6,
            division: 2
        },
        {
            id: 134,
            name: "French Horn",
            shortName: "FHN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 13,
            row: 8,
            division: 2
        },
        {
            id: 135,
            name: "Piccolo",
            shortName: "PIC",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 13,
            row: 10,
            division: 2
        },
        {
            id: 136,
            name: "Concert Flute",
            shortName: "CFL",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 13,
            row: 12,
            division: 2
        },
        {
            id: 137,
            name: "Gamba Céleste",
            shortName: "GMC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 13,
            row: 14,
            division: 2
        },
        {
            id: 138,
            name: "Chimes",
            shortName: "CHM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 13,
            row: 16,
            division: 2
        },
        {
            id: 139,
            name: "Harp",
            shortName: "HRP",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 13,
            row: 18,
            division: 2
        },
        {
            id: 140,
            name: "Solo to Solo",
            shortName: "STS",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 14,
            row: 1,
            division: 2
        },
        {
            id: 141,
            name: "Cornet",
            shortName: "CRN",
            pitchDesignation: "V",
            shortPitchDesignation: "V",
            column: 14,
            row: 3,
            division: 2
        },
        {
            id: 142,
            name: "Tuba",
            shortName: "TUB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 14,
            row: 5,
            division: 2
        },
        {
            id: 143,
            name: "English Horn",
            shortName: "EHN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 14,
            row: 7,
            division: 2
        },
        {
            id: 144,
            name: "Tierce",
            shortName: "TRC",
            pitchDesignation: "1 3/5\'",
            shortPitchDesignation: "1.6\'",
            column: 14,
            row: 9,
            division: 2
        },
        {
            id: 145,
            name: "Nazard",
            shortName: "NAZ",
            pitchDesignation: "2 2/3\'",
            shortPitchDesignation: "2.7\'",
            column: 14,
            row: 11,
            division: 2
        },
        {
            id: 146,
            name: "Flauto Mirabilis",
            shortName: "FLM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 14,
            row: 13,
            division: 2
        },
        {
            id: 147,
            name: "Gamba",
            shortName: "GMB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 14,
            row: 15,
            division: 2
        },
        {
            id: 148,
            name: "Celesta",
            shortName: "CEL",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 14,
            row: 17,
            division: 2
        },
        {
            id: 149,
            name: "I/II Manual Transfer",
            shortName: "MAN",
            pitchDesignation: "",
            shortPitchDesignation: "TR",
            column: 15,
            row: 0,
            division: 4
        },
        {
            id: 150,
            name: "Cornet",
            shortName: "CRN",
            pitchDesignation: "V",
            shortPitchDesignation: "V",
            column: 15,
            row: 2,
            division: 4
        },
        {
            id: 151,
            name: "Fourniture",
            shortName: "FRN",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 15,
            row: 4,
            division: 4
        },
        {
            id: 152,
            name: "Tierce",
            shortName: "TRC",
            pitchDesignation: "1 3/5\'",
            shortPitchDesignation: "1.6\'",
            column: 15,
            row: 6,
            division: 4
        },
        {
            id: 153,
            name: "Quinte",
            shortName: "QTE",
            pitchDesignation: "2 2/3\'",
            shortPitchDesignation: "2.7\'",
            column: 15,
            row: 8,
            division: 4
        },
        {
            id: 154,
            name: "Gemshorn",
            shortName: "GMS",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 15,
            row: 10,
            division: 4
        },
        {
            id: 155,
            name: "Flûte Octaviante",
            shortName: "FLO",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 15,
            row: 12,
            division: 4
        },
        {
            id: 156,
            name: "Bell Gamba",
            shortName: "GMB",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 15,
            row: 14,
            division: 4
        },
        {
            id: 157,
            name: "Flûte Harmonique",
            shortName: "FLH",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 15,
            row: 16,
            division: 4
        },
        {
            id: 158,
            name: "Montre",
            shortName: "MNT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 15,
            row: 18,
            division: 4
        },
        {
            id: 159,
            name: "Trumpet",
            shortName: "TPT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 16,
            row: 1,
            division: 4
        },
        {
            id: 160,
            name: "Acuta",
            shortName: "ACU",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 16,
            row: 3,
            division: 4
        },
        {
            id: 161,
            name: "Full Mixture",
            shortName: "FUL",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 16,
            row: 5,
            division: 4
        },
        {
            id: 162,
            name: "Super Octave",
            shortName: "SUP",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 16,
            row: 7,
            division: 4
        },
        {
            id: 163,
            name: "Grosse Tierce",
            shortName: "GRT",
            pitchDesignation: "3 1/5\'",
            shortPitchDesignation: "3.2\'",
            column: 16,
            row: 9,
            division: 4
        },
        {
            id: 164,
            name: "Octave",
            shortName: "OCT",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 16,
            row: 11,
            division: 4
        },
        {
            id: 165,
            name: "Grosse Quinte",
            shortName: "GQT",
            pitchDesignation: "5 1/3\'",
            shortPitchDesignation: "5.3\'",
            column: 16,
            row: 13,
            division: 4
        },
        {
            id: 166,
            name: "Bourdon",
            shortName: "BDN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 16,
            row: 15,
            division: 4
        },
        {
            id: 167,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 16,
            row: 17,
            division: 4
        },
        {
            id: 168,
            name: "Subprincipal",
            shortName: "SUB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 16,
            row: 19,
            division: 4
        },
        {
            id: 169,
            name: "Clarion",
            shortName: "CLR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 17,
            row: 0,
            division: 4
        },
        {
            id: 170,
            name: "Double Trumpet",
            shortName: "DBL",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 17,
            row: 2,
            division: 4
        },
        {
            id: 171,
            name: "Kleine Mixtur",
            shortName: "KLM",
            pitchDesignation: "IV",
            shortPitchDesignation: "IV",
            column: 17,
            row: 4,
            division: 4
        },
        {
            id: 172,
            name: "Septième",
            shortName: "SPT",
            pitchDesignation: "1 1/7\'",
            shortPitchDesignation: "1.1\'",
            column: 17,
            row: 6,
            division: 4
        },
        {
            id: 173,
            name: "Blockflöte",
            shortName: "BLF",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 17,
            row: 8,
            division: 4
        },
        {
            id: 174,
            name: "Koppelflöte",
            shortName: "KFL",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 17,
            row: 10,
            division: 4
        },
        {
            id: 175,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 17,
            row: 12,
            division: 4
        },
        {
            id: 176,
            name: "Spitzflöte",
            shortName: "SPF",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 17,
            row: 14,
            division: 4
        },
        {
            id: 177,
            name: "Diapason",
            shortName: "DIA",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 17,
            row: 16,
            division: 4
        },
        {
            id: 178,
            name: "Quintaten",
            shortName: "QTN",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 17,
            row: 18,
            division: 4
        },
        {
            id: 179,
            name: "Choir to Choir",
            shortName: "CTC",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 18,
            row: 1,
            division: 5
        },
        {
            id: 180,
            name: "Postiv off Choir",
            shortName: "POS",
            pitchDesignation: "",
            shortPitchDesignation: "OFF",
            column: 18,
            row: 3,
            division: 5
        },
        {
            id: 181,
            name: "Trompette",
            shortName: "TPT",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 18,
            row: 5,
            division: 5
        },
        {
            id: 182,
            name: "Rauschpfeife",
            shortName: "RPF",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 18,
            row: 7,
            division: 5
        },
        {
            id: 183,
            name: "Prestant",
            shortName: "PRS",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 18,
            row: 9,
            division: 5
        },
        {
            id: 184,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 18,
            row: 11,
            division: 5
        },
        {
            id: 185,
            name: "Septerz",
            shortName: "SEP",
            pitchDesignation: "II",
            shortPitchDesignation: "II",
            column: 18,
            row: 15,
            division: 6
        },
        {
            id: 186,
            name: "Larigot",
            shortName: "LAR",
            pitchDesignation: "1 1/3\'",
            shortPitchDesignation: "1.3\'",
            column: 18,
            row: 17,
            division: 6
        },
        {
            id: 187,
            name: "Nazard",
            shortName: "NAZ",
            pitchDesignation: "2 2/3\'",
            shortPitchDesignation: "2.7\'",
            column: 18,
            row: 19,
            division: 6
        },
        {
            id: 188,
            name: "Cor de Nuit",
            shortName: "COR",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 18,
            row: 21,
            division: 6
        },
        {
            id: 189,
            name: "Tremulant",
            shortName: "TRM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 19,
            row: 2,
            division: 5
        },
        {
            id: 190,
            name: "Rohr Schalmei",
            shortName: "RSC",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 19,
            row: 4,
            division: 5
        },
        {
            id: 191,
            name: "Dulzian",
            shortName: "DLZ",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 19,
            row: 6,
            division: 5
        },
        {
            id: 192,
            name: "Piccolo Harmonique",
            shortName: "PIC",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 19,
            row: 8,
            division: 5
        },
        {
            id: 193,
            name: "Zauberflöte",
            shortName: "ZBR",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 19,
            row: 10,
            division: 5
        },
        {
            id: 194,
            name: "Concert Flute",
            shortName: "CFL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 19,
            row: 12,
            division: 5
        },
        {
            id: 195,
            name: "Rankett",
            shortName: "RNK",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 19,
            row: 16,
            division: 6
        },
        {
            id: 196,
            name: "Tierce",
            shortName: "TRC",
            pitchDesignation: "1 3/5\'",
            shortPitchDesignation: "1.6\'",
            column: 19,
            row: 18,
            division: 6
        },
        {
            id: 197,
            name: "Nachthorn",
            shortName: "NHN",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 19,
            row: 20,
            division: 6
        },
        {
            id: 198,
            name: "Quintade",
            shortName: "QTD",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 19,
            row: 22,
            division: 6
        },
        {
            id: 199,
            name: "Choir to Choir",
            shortName: "CTC",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 20,
            row: 1,
            division: 5
        },
        {
            id: 200,
            name: "Krummhorn",
            shortName: "KRM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 20,
            row: 3,
            division: 5
        },
        {
            id: 201,
            name: "Fife",
            shortName: "FIF",
            pitchDesignation: "1\'",
            shortPitchDesignation: "1\'",
            column: 20,
            row: 5,
            division: 5
        },
        {
            id: 202,
            name: "Sesquialtera",
            shortName: "SES",
            pitchDesignation: "II",
            shortPitchDesignation: "II",
            column: 20,
            row: 7,
            division: 5
        },
        {
            id: 203,
            name: "Gambette",
            shortName: "GMB",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 20,
            row: 9,
            division: 5
        },
        {
            id: 204,
            name: "Viola",
            shortName: "VLA",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 20,
            row: 11,
            division: 5
        },
        {
            id: 205,
            name: "Gamba",
            shortName: "GMB",
            pitchDesignation: "16\'",
            shortPitchDesignation: "16\'",
            column: 20,
            row: 13,
            division: 5
        },
        {
            id: 206,
            name: "Cromorne",
            shortName: "CRM",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 20,
            row: 15,
            division: 6
        },
        {
            id: 207,
            name: "Scharf",
            shortName: "SCH",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 20,
            row: 17,
            division: 6
        },
        {
            id: 208,
            name: "Spillflöte",
            shortName: "SPF",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 20,
            row: 19,
            division: 6
        },
        {
            id: 209,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "4\'",
            shortPitchDesignation: "4\'",
            column: 20,
            row: 21,
            division: 6
        },
        {
            id: 210,
            name: "Trompette Harmonique",
            shortName: "TPH",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 2,
            division: 5
        },
        {
            id: 211,
            name: "Orchestral Oboe",
            shortName: "OBO",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 4,
            division: 5
        },
        {
            id: 212,
            name: "Carillon",
            shortName: "CAR",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 21,
            row: 6,
            division: 5
        },
        {
            id: 213,
            name: "Kleine Erzähler II",
            shortName: "ERZ",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 8,
            division: 5
        },
        {
            id: 214,
            name: "Viola Celeste",
            shortName: "VLC",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 10,
            division: 5
        },
        {
            id: 215,
            name: "Dulcet II",
            shortName: "DUL",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 12,
            division: 5
        },
        {
            id: 216,
            name: "Tremulant",
            shortName: "TRM",
            pitchDesignation: "",
            shortPitchDesignation: "",
            column: 21,
            row: 14,
            division: 6
        },
        {
            id: 217,
            name: "Zimbel",
            shortName: "ZMB",
            pitchDesignation: "III",
            shortPitchDesignation: "III",
            column: 21,
            row: 16,
            division: 6
        },
        {
            id: 218,
            name: "Sifflöte",
            shortName: "SFL",
            pitchDesignation: "1\'",
            shortPitchDesignation: "1\'",
            column: 21,
            row: 18,
            division: 6
        },
        {
            id: 219,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "2\'",
            shortPitchDesignation: "2\'",
            column: 21,
            row: 20,
            division: 6
        },
        {
            id: 220,
            name: "Principal",
            shortName: "PRN",
            pitchDesignation: "8\'",
            shortPitchDesignation: "8\'",
            column: 21,
            row: 22,
            division: 6
        }
    ] // end stops
};


/***/ }),

/***/ "./src/app/monitor/monitor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/monitor/monitor.component.ts ***!
  \**********************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sequence.service */ "./src/app/services/sequence.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MonitorComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", i_r37, ". Level ", step_r36.piston.memoryLevel, ": ", step_r36.piston.division, " ", step_r36.piston.number, " (Base: Step ", step_r36.base, ")");
} }
class MonitorComponent {
    constructor(sequenceService) {
        this.sequenceService = sequenceService;
    }
    ngOnInit() {
        this.sequence = this.sequenceService.sequence;
    }
}
MonitorComponent.ɵfac = function MonitorComponent_Factory(t) { return new (t || MonitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"])); };
MonitorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonitorComponent, selectors: [["app-monitor"]], decls: 15, vars: 8, consts: [[1, "monitor"], [4, "ngFor", "ngForOf"]], template: function MonitorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sequence: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MonitorComponent_p_11_Template, 2, 5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title: ", ctx.sequence.composition.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Composer: ", ctx.sequence.composition.composer, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Catalog no: ", ctx.sequence.composition.catalogNo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notes: ", ctx.sequence.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sequence.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.sequence));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".monitor[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  padding: 20px;\n  background-color: #eaeaea;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9tb25pdG9yL21vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vbml0b3IvbW9uaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vbml0b3Ige1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIubW9uaXRvciB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonitorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monitor',
                templateUrl: './monitor.component.html',
                styleUrls: ['./monitor.component.scss']
            }]
    }], function () { return [{ type: _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sequence.service */ "./src/app/services/sequence.service.ts");
/* harmony import */ var _services_organ_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organ.service */ "./src/app/services/organ.service.ts");
/* harmony import */ var _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/division-styles.service */ "./src/app/services/division-styles.service.ts");
/* harmony import */ var _services_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pdf.service */ "./src/app/services/pdf.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function PrintComponent_div_37_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r32.getDivisionStyle(ctx_r32.pistons[ctx_r32.sequence.steps[step_r30.base].piston].division));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.sequence.steps[step_r30.base].memoryLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.pistons[ctx_r32.sequence.steps[step_r30.base].piston].division);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.pistons[ctx_r32.sequence.steps[step_r30.base].piston].number);
} }
function PrintComponent_div_37_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PrintComponent_div_37_span_12_Template, 7, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PrintComponent_div_37_span_13_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.getDivisionStyle(ctx_r29.pistons[step_r30.piston].division));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r30.memoryLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.pistons[step_r30.piston].division);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.pistons[step_r30.piston].number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r30.base !== 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", step_r30.base === 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r30.measure);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r30.notes);
} }
class PrintComponent {
    constructor(sequenceService, organService, divisionStylesService, pdfService) {
        this.sequenceService = sequenceService;
        this.organService = organService;
        this.divisionStylesService = divisionStylesService;
        this.pdfService = pdfService;
    }
    ngOnInit() {
        this.sequence = this.sequenceService.sequence;
        this.pistons = this.organService.pistons;
    }
    basedOn(step) {
        let obj = {
            level: null,
            division: "",
            number: null
        };
        if (step.base === -1) {
            obj.division = "–";
            return obj;
        }
        else {
            let baseStep = this.sequence.steps[step.base];
            obj.level = baseStep.memoryLevel;
            obj.division = this.pistons[baseStep.piston].division;
            obj.number = this.pistons[baseStep.piston].number;
        }
        return obj;
    }
    print() {
        this.pdfService.PDF();
    }
    // Provides conditional CSS classes to enable division colors
    getDivisionStyle(manual) {
        return this.divisionStylesService.getDivisionClass(manual);
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pdf_service__WEBPACK_IMPORTED_MODULE_4__["PDFService"])); };
PrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 44, vars: 5, consts: [[1, "sequence-info"], [1, "row"], [1, "item", "catalog"], [1, "label"], [1, "text"], [1, "item", "title"], [1, "item", "composer"], [1, "item", "notes"], [1, "sequence-table"], [1, "row", "header"], [1, "cell", "step"], [1, "cell", "piston"], [1, "cell", "base"], [1, "cell", "measure"], [1, "cell", "notes"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "action-row"], ["routerLink", "/edit", 1, "action-left"], [1, "action-spacer"], ["routerLink", "/print", 1, "action-right", 3, "click"], [1, "piston-inner", 3, "ngClass"], [1, "piston-level"], [1, "piston-division"], [1, "piston-number"], ["class", "piston-inner", 3, "ngClass", 4, "ngIf"], ["class", "piston-none", 4, "ngIf"], [1, "piston-none"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Review and Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Catalog no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Composer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Piston");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Based on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Measure(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PrintComponent_div_37_Template, 18, 9, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u2190 Edit Sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintComponent_Template_a_click_42_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Generate PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sequence.composition.catalogNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sequence.composition.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sequence.composition.composer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sequence.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sequence.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sequence-info[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 30px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item.catalog[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item.title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item.composer[_ngcontent-%COMP%] {\n  width: 185px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item.notes[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.sequence-info[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  min-height: 19px;\n  padding: 10px 0 4px;\n  border-bottom: 1px solid #ddd;\n}\n.sequence-table[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.sequence-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 0;\n  border-bottom: 1px solid #ddd;\n  line-height: 35px;\n}\n.sequence-table[_ngcontent-%COMP%]   .row.header[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell.step[_ngcontent-%COMP%] {\n  width: 30px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell.piston[_ngcontent-%COMP%], .sequence-table[_ngcontent-%COMP%]   .cell.base[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell.measure[_ngcontent-%COMP%] {\n  width: 100px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-right: 10px;\n  padding: 8.5px 0;\n  line-height: 16px;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell.notes[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 8.5px 0;\n  line-height: 16px;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-none[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-grow: 0;\n  padding: 5px 8px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 25px;\n  text-transform: uppercase;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner[_ngcontent-%COMP%]   .piston-level[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  margin-right: 6px;\n  border: 1px solid black;\n  padding: 0px;\n  line-height: 23px;\n  text-align: center;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner[_ngcontent-%COMP%]   .piston-division[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner[_ngcontent-%COMP%]   .piston-number[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  border: 1px solid black;\n  border-radius: 12px;\n  line-height: 23px;\n  text-align: center;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.general[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.antiphonal[_ngcontent-%COMP%] {\n  background-color: #d4d6fb;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.solo[_ngcontent-%COMP%] {\n  background-color: #f4d4e8;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.swell[_ngcontent-%COMP%] {\n  background-color: #f8dcd2;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.great[_ngcontent-%COMP%] {\n  background-color: #c9f5fe;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.choir[_ngcontent-%COMP%] {\n  background-color: #fffdc7;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.positiv[_ngcontent-%COMP%] {\n  background-color: #ecf5d2;\n}\n.sequence-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]   .piston-inner.pedal[_ngcontent-%COMP%] {\n  background-color: #d4e1e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9wcmludC9wcmludC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpbnQvcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBRUksbUJBQUE7QUNuQko7QURxQkc7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ25CUDtBRHFCTztFQUVLLGtCQUFBO0FDcEJaO0FEc0JZO0VBQ0ksZUFBQTtBQ3BCaEI7QUR1Qlk7RUFDSSxZQUFBO0FDckJoQjtBRHdCWTtFQUNJLFlBQUE7QUN0QmhCO0FEeUJZO0VBQ0ksWUFBQTtBQ3ZCaEI7QUQwQlk7RUFDSSxZQUFBO0FDeEJoQjtBRDJCWTtFQUNJLGVBQUE7QUN6QmhCO0FENEJZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDMUJoQjtBRGdDQTtFQUVJLGVBQUE7QUM5Qko7QURnQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQzlCUjtBRGdDUTtFQUNJLGdCQUFBO0FDOUJaO0FEa0NJO0VBRUksZUFBQTtBQ2pDUjtBRG1DUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ2pDWjtBRG9DUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ25DWjtBRHNDUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3BDWjtBRHdDUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDdENaO0FEeUNRO0VBQ0ksZ0JBQUE7QUN2Q1o7QUQwQ1E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3pDWjtBRDJDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDekNoQjtBRDRDWTtFQUNJLGlCQUFBO0FDMUNoQjtBRDZDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQ2hCO0FEOENZO0VBQ0kseUJBQUE7QUM1Q2hCO0FEK0NZO0VBQ0kseUJBQUE7QUM3Q2hCO0FEZ0RZO0VBQ0kseUJBQUE7QUM5Q2hCO0FEaURZO0VBQ0kseUJBQUE7QUMvQ2hCO0FEa0RZO0VBQ0kseUJBQUE7QUNoRGhCO0FEbURZO0VBQ0kseUJBQUE7QUNqRGhCO0FEb0RZO0VBQ0kseUJBQUE7QUNsRGhCO0FEcURZO0VBQ0kseUJBQUE7QUNuRGhCIiwiZmlsZSI6InNyYy9hcHAvcHJpbnQvcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2Fzczpjb2xvclwiO1xuXG4kZ2VuZXJhbC1iYXNlOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4kYW50aXBob25hbC1iYXNlOiByZ2IoMzgsIDUwLCAyMzcpO1xuJHNvbG8tYmFzZTogcmdiKDE5MywgNDcsIDEzOCk7XG4kc3dlbGwtYmFzZTogcmdiKDIxOSwgODEsIDMyKTtcbiRncmVhdC1iYXNlOiByZ2IoMywgMTk1LCAyMzUpO1xuJGNob2lyLWJhc2U6IHJnYigyMjgsIDIyMCwgMCk7XG4kcG9zaXRpdi1iYXNlOiByZ2IoMTUyLCAxOTMsIDQyKTtcbiRwZWRhbC1iYXNlOiByZ2IoNjIsIDk2LCAxMTEpO1xuXG4kYmFzZS1saWd0aG5lc3M6IDgwJTtcbiRob3Zlci1saWdodG5lc3M6IDY1JTtcbiRhY3RpdmUtbGlnaHRuZXNzOiA1MCU7XG5cbiRpbnB1dC1iZy1jb2xvcjogY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogODUlKTtcbiRpbnB1dC1iZy1jb2xvci1hY3RpdmU6IGNvbG9yLnNjYWxlKCRnZW5lcmFsLWJhc2UsICRsaWdodG5lc3M6IDY1JSk7XG5cblxuLnNlcXVlbmNlLWluZm8ge1xuXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBcbiAgIC5yb3cge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgLml0ZW0ge1xuXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgJi5jYXRhbG9nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYudGl0bGUge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5jb21wb3NlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLm5vdGVzIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTlweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgfVxuICAgICAgIH1cbiAgIH1cbn1cblxuLnNlcXVlbmNlLXRhYmxlIHtcblxuICAgIGZvbnQtc2l6ZTogMTRweDsgXG5cbiAgICAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG5cbiAgICAgICAgJi5oZWFkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jZWxsIHtcblxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgICAgJi5zdGVwIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLnBpc3RvbixcbiAgICAgICAgJi5iYXNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tZWFzdXJlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOC41cHggMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXG4gICAgICAgIH1cblxuICAgICAgICAmLm5vdGVzIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDguNXB4IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waXN0b24tbm9uZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpc3Rvbi1pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgLnBpc3Rvbi1sZXZlbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waXN0b24tZGl2aXNpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGlzdG9uLW51bWJlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmdlbmVyYWwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRnZW5lcmFsLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5hbnRpcGhvbmFsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkYW50aXBob25hbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICYuc29sbyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHNvbG8tYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnN3ZWxsIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkc3dlbGwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmdyZWF0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ3JlYXQtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLmNob2lyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkY2hvaXItYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAmLnBvc2l0aXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRwb3NpdGl2LWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJi5wZWRhbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHBlZGFsLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIiwiLnNlcXVlbmNlLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnNlcXVlbmNlLWluZm8gLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc2VxdWVuY2UtaW5mbyAucm93IC5pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLnNlcXVlbmNlLWluZm8gLnJvdyAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNlcXVlbmNlLWluZm8gLnJvdyAuaXRlbS5jYXRhbG9nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnNlcXVlbmNlLWluZm8gLnJvdyAuaXRlbS50aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5zZXF1ZW5jZS1pbmZvIC5yb3cgLml0ZW0uY29tcG9zZXIge1xuICB3aWR0aDogMTg1cHg7XG59XG4uc2VxdWVuY2UtaW5mbyAucm93IC5pdGVtLm5vdGVzIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnNlcXVlbmNlLWluZm8gLnJvdyAuaXRlbSAubGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uc2VxdWVuY2UtaW5mbyAucm93IC5pdGVtIC50ZXh0IHtcbiAgbWluLWhlaWdodDogMTlweDtcbiAgcGFkZGluZzogMTBweCAwIDRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5zZXF1ZW5jZS10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zZXF1ZW5jZS10YWJsZSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4uc2VxdWVuY2UtdGFibGUgLnJvdy5oZWFkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsLnN0ZXAge1xuICB3aWR0aDogMzBweDtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbC5waXN0b24sIC5zZXF1ZW5jZS10YWJsZSAuY2VsbC5iYXNlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsLm1lYXN1cmUge1xuICB3aWR0aDogMTAwcHg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogOC41cHggMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4uc2VxdWVuY2UtdGFibGUgLmNlbGwubm90ZXMge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDguNXB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24tbm9uZSB7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG59XG4uc2VxdWVuY2UtdGFibGUgLmNlbGwgLnBpc3Rvbi1pbm5lciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24taW5uZXIgLnBpc3Rvbi1sZXZlbCB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24taW5uZXIgLnBpc3Rvbi1kaXZpc2lvbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24taW5uZXIgLnBpc3Rvbi1udW1iZXIge1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbCAucGlzdG9uLWlubmVyLmdlbmVyYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24taW5uZXIuYW50aXBob25hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZmI7XG59XG4uc2VxdWVuY2UtdGFibGUgLmNlbGwgLnBpc3Rvbi1pbm5lci5zb2xvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZDRlODtcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbCAucGlzdG9uLWlubmVyLnN3ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZGNkMjtcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbCAucGlzdG9uLWlubmVyLmdyZWF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVmZTtcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbCAucGlzdG9uLWlubmVyLmNob2lyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRjNztcbn1cbi5zZXF1ZW5jZS10YWJsZSAuY2VsbCAucGlzdG9uLWlubmVyLnBvc2l0aXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWQyO1xufVxuLnNlcXVlbmNlLXRhYmxlIC5jZWxsIC5waXN0b24taW5uZXIucGVkYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlMWU3O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print',
                templateUrl: './print.component.html',
                styleUrls: ['./print.component.scss']
            }]
    }], function () { return [{ type: _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"] }, { type: _services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"] }, { type: _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"] }, { type: _services_pdf_service__WEBPACK_IMPORTED_MODULE_4__["PDFService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sequence-builder/sequence-builder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sequence-builder/sequence-builder.component.ts ***!
  \****************************************************************/
/*! exports provided: SequenceBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceBuilderComponent", function() { return SequenceBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sequence.service */ "./src/app/services/sequence.service.ts");
/* harmony import */ var _services_organ_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organ.service */ "./src/app/services/organ.service.ts");
/* harmony import */ var _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/division-styles.service */ "./src/app/services/division-styles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function SequenceBuilderComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r3);
} }
function SequenceBuilderComponent_div_29_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SequenceBuilderComponent_div_29_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const piston_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.addStep(ctx_r7.memoryLevel, piston_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const piston_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](piston_r6.number);
} }
function SequenceBuilderComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SequenceBuilderComponent_div_29_button_4_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manual_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manual_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.getDivisionStyle(manual_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", manual_r4.pistons);
} }
function SequenceBuilderComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SequenceBuilderComponent_div_34_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.deleteStep(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.getDivisionStyle(ctx_r2.pistons[step_r9.piston].division));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r10 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r9.memoryLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.pistons[step_r9.piston].division);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.pistons[step_r9.piston].number);
} }
class SequenceBuilderComponent {
    constructor(sequenceService, organService, divisionStylesService) {
        this.sequenceService = sequenceService;
        this.organService = organService;
        this.divisionStylesService = divisionStylesService;
        this.memoryLevel = 1;
    }
    ngOnInit() {
        this.sequence = this.sequenceService.sequence;
        this.organ = this.organService.organ;
        this.memoryLevels = this.organService.memoryLevels;
        this.pistons = this.organService.pistons;
    }
    addStep(memoryLevel, piston) {
        this.sequenceService.addStep(memoryLevel, piston);
    }
    deleteStep(step) {
        this.sequenceService.deleteStep(step);
    }
    // Fires when a sequence step is reordered
    drop(event) {
        this.sequenceService.reorderSequence(event.previousIndex, event.currentIndex);
    }
    // Provides conditional CSS classes to enable division colors
    getDivisionStyle(manual) {
        return this.divisionStylesService.getDivisionClass(manual);
    }
}
SequenceBuilderComponent.ɵfac = function SequenceBuilderComponent_Factory(t) { return new (t || SequenceBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"])); };
SequenceBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SequenceBuilderComponent, selectors: [["app-sequence-builder"]], decls: 41, vars: 8, consts: [[1, "sequence-form"], [1, "form-row"], [1, "form-group", "form-catalog"], ["for", "catalog"], ["type", "text", "id", "catalog", "name", "catalog", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-title"], ["for", "title"], ["type", "text", "id", "title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-composer"], ["for", "composer"], ["type", "text", "id", "composer", "name", "composer", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-notes"], ["for", "notes"], ["type", "text", "id", "version", "name", "version", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "flex-container"], [1, "left"], [1, "division", "memory-level"], ["id", "level", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "division", 4, "ngFor", "ngForOf"], [1, "right"], ["cdkDropList", "", 1, "sequence-container", 3, "cdkDropListDropped"], ["cdkDrag", "", "class", "sequence-step", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "action-row"], ["routerLink", "/upload", 1, "action-left"], [1, "action-spacer"], ["routerLink", "/edit", 1, "action-right"], [3, "value"], [1, "division"], [1, "piston-container", 3, "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["cdkDrag", "", 1, "sequence-step", 3, "ngClass"], [1, "step"], [1, "level"], [1, "piston"], [1, "spacer"], [1, "delete", 3, "click"]], template: function SequenceBuilderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Build Sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Catalog no.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceBuilderComponent_Template_input_ngModelChange_8_listener($event) { return ctx.sequence.composition.catalogNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceBuilderComponent_Template_input_ngModelChange_12_listener($event) { return ctx.sequence.composition.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Composer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceBuilderComponent_Template_input_ngModelChange_16_listener($event) { return ctx.sequence.composition.composer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceBuilderComponent_Template_input_ngModelChange_21_listener($event) { return ctx.sequence.version = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Memory Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceBuilderComponent_Template_select_ngModelChange_27_listener($event) { return ctx.memoryLevel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SequenceBuilderComponent_option_28_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SequenceBuilderComponent_div_29_Template, 5, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function SequenceBuilderComponent_Template_div_cdkDropListDropped_33_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SequenceBuilderComponent_div_34_Template, 12, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u2190 Upload File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Edit Sequence \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sequence.composition.catalogNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sequence.composition.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sequence.composition.composer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sequence.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.memoryLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memoryLevels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.organ.manuals);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sequence.steps);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"]], styles: [".sequence-form[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #efefef;\n  border: 0px solid black;\n  font-size: 16px;\n  font-family: \"Montserrat\";\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  background-color: #dadada;\n  outline: none;\n}\n\n.form-group.form-catalog[_ngcontent-%COMP%] {\n  width: 100px;\n  flex-grow: 0;\n}\n\n.form-group.form-title[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n\n.form-group.form-notes[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.left[_ngcontent-%COMP%] {\n  width: 685px;\n  flex-grow: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding-left: 30px;\n  border-left: 1px solid #ddd;\n}\n\n.memory-level[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 10px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #efefef;\n  border: 0px solid black;\n  border-radius: 0px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  outline: none;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n\n.memory-level[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.piston-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: -10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.piston-container.general[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n\n.piston-container.general[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #dadada;\n}\n\n.piston-container.general[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #cbcbcb;\n}\n\n.piston-container.antiphonal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #d4d6fb;\n}\n\n.piston-container.antiphonal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b3b7f9;\n}\n\n.piston-container.antiphonal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #9399f6;\n}\n\n.piston-container.solo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #f4d4e8;\n}\n\n.piston-container.solo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ecb3d7;\n}\n\n.piston-container.solo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #e592c6;\n}\n\n.piston-container.swell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #f8dcd2;\n}\n\n.piston-container.swell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f3c2b0;\n}\n\n.piston-container.swell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #eea78e;\n}\n\n.piston-container.great[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #c9f5fe;\n}\n\n.piston-container.great[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #a1eefe;\n}\n\n.piston-container.great[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #79e6fd;\n}\n\n.piston-container.choir[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fffdc7;\n}\n\n.piston-container.choir[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #fffc9c;\n}\n\n.piston-container.choir[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #fffa72;\n}\n\n.piston-container.positiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #ecf5d2;\n}\n\n.piston-container.positiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #ddeeb0;\n}\n\n.piston-container.positiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #cee68e;\n}\n\n.piston-container.pedal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #d4e1e7;\n}\n\n.piston-container.pedal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #b3cbd5;\n}\n\n.piston-container.pedal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #93b4c3;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 8px;\n  width: 40px;\n  height: 40px;\n  padding-left: 8px;\n  border: 0px solid black;\n  border-radius: 20px;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: \"montserrat\", sans-serif;\n  font-weight: 300;\n  line-height: 40px;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.sequence-container[_ngcontent-%COMP%] {\n  padding-top: 1px;\n}\n\n.sequence-step[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 5px 5px 5px 8px;\n  display: flex;\n  flex-grow: 0;\n  cursor: move;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 25px;\n  text-transform: uppercase;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  width: 22px;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  margin-right: 6px;\n  border: 1px solid black;\n  padding: 0px;\n  line-height: 23px;\n  text-align: center;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .division[_ngcontent-%COMP%] {\n  margin-right: 6px;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .piston[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  border: 1px solid black;\n  border-radius: 12px;\n  line-height: 23px;\n  text-align: center;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.sequence-step[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  width: 16px;\n  margin: -5px;\n  padding: 0 10px;\n  flex-grow: 0;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 35px;\n  text-align: center;\n}\n\n.sequence-step.general[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n}\n\n.sequence-step.general[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #969696;\n}\n\n.sequence-step.antiphonal[_ngcontent-%COMP%] {\n  background-color: #d4d6fb;\n}\n\n.sequence-step.antiphonal[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #2632ed;\n}\n\n.sequence-step.solo[_ngcontent-%COMP%] {\n  background-color: #f4d4e8;\n}\n\n.sequence-step.solo[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #c12f8a;\n}\n\n.sequence-step.swell[_ngcontent-%COMP%] {\n  background-color: #f8dcd2;\n}\n\n.sequence-step.swell[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #db5120;\n}\n\n.sequence-step.great[_ngcontent-%COMP%] {\n  background-color: #c9f5fe;\n}\n\n.sequence-step.great[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #03c3eb;\n}\n\n.sequence-step.choir[_ngcontent-%COMP%] {\n  background-color: #fffdc7;\n}\n\n.sequence-step.choir[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #e4dc00;\n}\n\n.sequence-step.positiv[_ngcontent-%COMP%] {\n  background-color: #ecf5d2;\n}\n\n.sequence-step.positiv[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #98c12a;\n}\n\n.sequence-step.pedal[_ngcontent-%COMP%] {\n  background-color: #d4e1e7;\n}\n\n.sequence-step.pedal[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  color: #3e606f;\n}\n\n.sequence-step.cdk-drag-preview[_ngcontent-%COMP%] {\n  line-height: 35px;\n}\n\n.sequence-step.cdk-drag-preview[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.sequence-step.cdk-drag-preview[_ngcontent-%COMP%]   .piston[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.sequence-step.cdk-drag-preview[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n  opacity: 50%;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%]   .piston[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9zZXF1ZW5jZS1idWlsZGVyL3NlcXVlbmNlLWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlcXVlbmNlLWJ1aWxkZXIvc2VxdWVuY2UtYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDSSxtQkFBQTtBQ25CSjs7QURzQkE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNuQko7O0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNuQko7O0FEcUJJO0VBQ0ksZUFBQTtBQ25CUjs7QURzQkk7RUFDSSxrQkFBQTtFQUVBLGVBQUE7QUNyQlI7O0FEeUJJO0VBRUksYUFBQTtFQUNBLHlCQWpDUztFQWtDVCx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3hCUjs7QUQ0Qkk7RUFDSSx5QkF4Q2dCO0VBeUNoQixhQUFBO0FDMUJSOztBRDZCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDM0JSOztBRDZCSTtFQUNJLFlBQUE7QUMzQlI7O0FEOEJJO0VBQ0ksWUFBQTtBQzVCUjs7QURrQ0E7RUFDSSxhQUFBO0FDL0JKOztBRGtDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDL0JKOztBRG1DQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDakNKOztBRHdDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLHlCQXZGUztFQXdGVCx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBR0EsOEpBQ0k7RUFHSixtSEFDSTtFQUdKLDRDQUNJO0VBR0osNEJBQUE7QUNoRFI7O0FEa0RRO0VBQ0ksYUFBQTtBQ2hEWjs7QURxREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDbERKOztBRG9ESTtFQUNJLHlCQUFBO0FDbERSOztBRHFESTtFQUNJLHlCQUFBO0FDbkRSOztBRHNESTtFQUNJLHlCQUFBO0FDcERSOztBRHVESTtFQUNJLHlCQUFBO0FDckRSOztBRHdESTtFQUNJLHlCQUFBO0FDdERSOztBRHlESTtFQUNJLHlCQUFBO0FDdkRSOztBRDBESTtFQUNJLHlCQUFBO0FDeERSOztBRDJESTtFQUNJLHlCQUFBO0FDekRSOztBRDRESTtFQUNJLHlCQUFBO0FDMURSOztBRDZESTtFQUNJLHlCQUFBO0FDM0RSOztBRDhESTtFQUNJLHlCQUFBO0FDNURSOztBRCtESTtFQUNJLHlCQUFBO0FDN0RSOztBRGdFSTtFQUNJLHlCQUFBO0FDOURSOztBRGlFSTtFQUNJLHlCQUFBO0FDL0RSOztBRGtFSTtFQUNJLHlCQUFBO0FDaEVSOztBRG1FSTtFQUNJLHlCQUFBO0FDakVSOztBRG9FSTtFQUNJLHlCQUFBO0FDbEVSOztBRHFFSTtFQUNJLHlCQUFBO0FDbkVSOztBRHNFSTtFQUNJLHlCQUFBO0FDcEVSOztBRHVFSTtFQUNJLHlCQUFBO0FDckVSOztBRHdFSTtFQUNJLHlCQUFBO0FDdEVSOztBRHlFSTtFQUNJLHlCQUFBO0FDdkVSOztBRDBFSTtFQUNJLHlCQUFBO0FDeEVSOztBRDJFSTtFQUNJLHlCQUFBO0FDekVSOztBRDZFQTtFQUVJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzRUo7O0FEOEVBO0VBQ0ksYUFBQTtBQzNFSjs7QURnRkE7RUFDSSxnQkFBQTtBQzdFSjs7QURnRkE7RUFFSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDOUVKOztBRGdGSTtFQUNJLFdBQUE7QUM5RVI7O0FEa0ZJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoRlI7O0FEbUZJO0VBQ0ksaUJBQUE7QUNqRlI7O0FEb0ZJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2xGUjs7QURzRkk7RUFDSSxZQUFBO0FDcEZSOztBRHVGSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3JGUjs7QUR3Rkk7RUFDSSx5QkFBQTtBQ3RGUjs7QUR3RlE7RUFDSSxjQWhVRztBQzBPZjs7QUQwRkk7RUFDSSx5QkFBQTtBQ3hGUjs7QUQwRlE7RUFDSSxjQXZVTTtBQytPbEI7O0FENEZJO0VBQ0kseUJBQUE7QUMxRlI7O0FENEZRO0VBQ0ksY0E5VUE7QUNvUFo7O0FEOEZJO0VBQ0kseUJBQUE7QUM1RlI7O0FEOEZRO0VBQ0ksY0FyVkM7QUN5UGI7O0FEZ0dJO0VBQ0kseUJBQUE7QUM5RlI7O0FEZ0dRO0VBQ0ksY0E1VkM7QUM4UGI7O0FEa0dJO0VBQ0kseUJBQUE7QUNoR1I7O0FEa0dRO0VBQ0ksY0FuV0M7QUNtUWI7O0FEb0dJO0VBQ0kseUJBQUE7QUNsR1I7O0FEb0dRO0VBQ0ksY0ExV0c7QUN3UWY7O0FEc0dJO0VBQ0kseUJBQUE7QUNwR1I7O0FEc0dRO0VBQ0ksY0FqWEM7QUM2UWI7O0FEd0dJO0VBQ0ksaUJBQUE7QUN0R1I7O0FEd0dRO0VBQ0ksZUFBQTtBQ3RHWjs7QUR5R1E7RUFDSSxlQUFBO0FDdkdaOztBRDBHUTtFQUNJLGlCQUFBO0FDeEdaOztBRDZHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQzFHSjs7QUQ0R0k7RUFDSSw2QkFBQTtBQzFHUjs7QUQ2R0k7RUFDSSw2QkFBQTtBQzNHUjs7QUQ4R0k7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FDNUdSIiwiZmlsZSI6InNyYy9hcHAvc2VxdWVuY2UtYnVpbGRlci9zZXF1ZW5jZS1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6Y29sb3JcIjtcblxuJGdlbmVyYWwtYmFzZTogcmdiKDE1MCwgMTUwLCAxNTApO1xuJGFudGlwaG9uYWwtYmFzZTogcmdiKDM4LCA1MCwgMjM3KTtcbiRzb2xvLWJhc2U6IHJnYigxOTMsIDQ3LCAxMzgpO1xuJHN3ZWxsLWJhc2U6IHJnYigyMTksIDgxLCAzMik7XG4kZ3JlYXQtYmFzZTogcmdiKDMsIDE5NSwgMjM1KTtcbiRjaG9pci1iYXNlOiByZ2IoMjI4LCAyMjAsIDApO1xuJHBvc2l0aXYtYmFzZTogcmdiKDE1MiwgMTkzLCA0Mik7XG4kcGVkYWwtYmFzZTogcmdiKDYyLCA5NiwgMTExKTtcblxuJGJhc2UtbGlndGhuZXNzOiA4MCU7XG4kaG92ZXItbGlnaHRuZXNzOiA2NSU7XG4kYWN0aXZlLWxpZ2h0bmVzczogNTAlO1xuXG4kaW5wdXQtYmctY29sb3I6IGNvbG9yLnNjYWxlKCRnZW5lcmFsLWJhc2UsICRsaWdodG5lc3M6IDg1JSk7XG4kaW5wdXQtYmctY29sb3ItYWN0aXZlOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiA2NSUpO1xuXG4vLyBDb250YWluZXIgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uc2VxdWVuY2UtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctY29sb3I7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcblxuICAgIH1cblxuICAgIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctY29sb3ItYWN0aXZlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICYuZm9ybS1jYXRhbG9nIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgfVxuICAgICYuZm9ybS10aXRsZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICB9XG5cbiAgICAmLmZvcm0tbm90ZXMge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxufVxuXG5cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGVmdCB7XG4gICAgd2lkdGg6IDY4NXB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBcbn1cblxuLnJpZ2h0IHtcbiAgICBcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cblxuLy8gUGlzdG9uIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5tZW1vcnktbGV2ZWwge1xuXG4gICAgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctY29sb3I7XG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgIC8vIGh0dHBzOi8vY29kZXBlbi5pby92a2pnci9wZW4vVllNZVhwXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxuICAgICAgICAgICAgY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxuICAgICAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxuICAgICAgICAgICAgY2FsYygxMDAlIC0gMi41ZW0pIDAuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XG4gICAgICAgICAgICA1cHggNXB4LFxuICAgICAgICAgICAgNXB4IDVweCxcbiAgICAgICAgICAgIDFweCAxLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuICAgICAgICBvcHRpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfSAgXG4gICAgfVxufVxuXG4ucGlzdG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAmLmdlbmVyYWwgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICB9XG5cbiAgICAmLmdlbmVyYWwgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogJGhvdmVyLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5nZW5lcmFsIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiAkYWN0aXZlLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5hbnRpcGhvbmFsIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRhbnRpcGhvbmFsLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgfVxuXG4gICAgJi5hbnRpcGhvbmFsIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRhbnRpcGhvbmFsLWJhc2UsICRsaWdodG5lc3M6ICRob3Zlci1saWdodG5lc3MpO1xuICAgIH1cblxuICAgICYuYW50aXBob25hbCBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGFudGlwaG9uYWwtYmFzZSwgJGxpZ2h0bmVzczogJGFjdGl2ZS1saWdodG5lc3MpO1xuICAgIH1cblxuICAgICYuc29sbyBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkc29sby1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuICAgIH1cblxuICAgICYuc29sbyBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkc29sby1iYXNlLCAkbGlnaHRuZXNzOiAkaG92ZXItbGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICAmLnNvbG8gYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRzb2xvLWJhc2UsICRsaWdodG5lc3M6ICRhY3RpdmUtbGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICAmLnN3ZWxsIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRzd2VsbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuICAgIH1cblxuICAgICYuc3dlbGwgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHN3ZWxsLWJhc2UsICRsaWdodG5lc3M6ICRob3Zlci1saWdodG5lc3MpO1xuICAgIH1cblxuICAgICYuc3dlbGwgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRzd2VsbC1iYXNlLCAkbGlnaHRuZXNzOiAkYWN0aXZlLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5ncmVhdCBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ3JlYXQtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICB9XG5cbiAgICAmLmdyZWF0IGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRncmVhdC1iYXNlLCAkbGlnaHRuZXNzOiAkaG92ZXItbGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICAmLmdyZWF0IGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ3JlYXQtYmFzZSwgJGxpZ2h0bmVzczogJGFjdGl2ZS1saWdodG5lc3MpO1xuICAgIH1cblxuICAgICYuY2hvaXIgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGNob2lyLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgfVxuXG4gICAgJi5jaG9pciBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkY2hvaXItYmFzZSwgJGxpZ2h0bmVzczogJGhvdmVyLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5jaG9pciBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGNob2lyLWJhc2UsICRsaWdodG5lc3M6ICRhY3RpdmUtbGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICAmLnBvc2l0aXYgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHBvc2l0aXYtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICB9XG5cbiAgICAmLnBvc2l0aXYgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHBvc2l0aXYtYmFzZSwgJGxpZ2h0bmVzczogJGhvdmVyLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5wb3NpdGl2IGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkcG9zaXRpdi1iYXNlLCAkbGlnaHRuZXNzOiAkYWN0aXZlLWxpZ2h0bmVzcyk7XG4gICAgfVxuXG4gICAgJi5wZWRhbCBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkcGVkYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICB9XG5cbiAgICAmLnBlZGFsIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRwZWRhbC1iYXNlLCAkbGlnaHRuZXNzOiAkaG92ZXItbGlnaHRuZXNzKTtcbiAgICB9XG5cbiAgICAmLnBlZGFsIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkcGVkYWwtYmFzZSwgJGxpZ2h0bmVzczogJGFjdGl2ZS1saWdodG5lc3MpO1xuICAgIH1cbn1cblxuYnV0dG9uIHtcbiAgICBcbiAgICBtYXJnaW46IDhweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7IFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7ICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8vIFNlcXVlbmNlIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLnNlcXVlbmNlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlcXVlbmNlLXN0ZXAge1xuICAgIFxuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIC5zdGVwIHtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5sZXZlbCB7XG4gICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5kaXZpc2lvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cblxuICAgIC5waXN0b24ge1xuICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICBcbiAgICB9XG5cbiAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgbWFyZ2luOiAtNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmLmdlbmVyYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgY29sb3I6ICRnZW5lcmFsLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFudGlwaG9uYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkYW50aXBob25hbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgY29sb3I6ICRhbnRpcGhvbmFsLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNvbG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkc29sby1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgY29sb3I6ICRzb2xvLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3ZWxsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHN3ZWxsLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHN3ZWxsLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmdyZWF0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGdyZWF0LWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZWF0LWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNob2lyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGNob2lyLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNob2lyLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnBvc2l0aXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkcG9zaXRpdi1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgY29sb3I6ICRwb3NpdGl2LWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnBlZGFsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHBlZGFsLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG5cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBjb2xvcjogJHBlZGFsLWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNkay1kcmFnLXByZXZpZXcge1xuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcblxuICAgICAgICAubGV2ZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBpc3RvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVsZXRlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogNTAlO1xuXG4gICAgLmxldmVsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLnBpc3RvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIiwiLnNlcXVlbmNlLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLWdyb3VwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5mb3JtLWdyb3VwIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tZ3JvdXAuZm9ybS1jYXRhbG9nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmbGV4LWdyb3c6IDA7XG59XG4uZm9ybS1ncm91cC5mb3JtLXRpdGxlIHtcbiAgZmxleC1ncm93OiAyO1xufVxuLmZvcm0tZ3JvdXAuZm9ybS1ub3RlcyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxlZnQge1xuICB3aWR0aDogNjg1cHg7XG4gIGZsZXgtZ3JvdzogMDtcbn1cblxuLnJpZ2h0IHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cblxuLm1lbW9yeS1sZXZlbCBzZWxlY3Qge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubWVtb3J5LWxldmVsIHNlbGVjdCBvcHRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucGlzdG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5waXN0b24tY29udGFpbmVyLmdlbmVyYWwgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbn1cbi5waXN0b24tY29udGFpbmVyLmdlbmVyYWwgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTtcbn1cbi5waXN0b24tY29udGFpbmVyLmdlbmVyYWwgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNiY2I7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5hbnRpcGhvbmFsIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQ2ZmI7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5hbnRpcGhvbmFsIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2I3Zjk7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5hbnRpcGhvbmFsIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM5OWY2O1xufVxuLnBpc3Rvbi1jb250YWluZXIuc29sbyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRkNGU4O1xufVxuLnBpc3Rvbi1jb250YWluZXIuc29sbyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNiM2Q3O1xufVxuLnBpc3Rvbi1jb250YWluZXIuc29sbyBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OTJjNjtcbn1cbi5waXN0b24tY29udGFpbmVyLnN3ZWxsIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGRjZDI7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5zd2VsbCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNjMmIwO1xufVxuLnBpc3Rvbi1jb250YWluZXIuc3dlbGwgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWE3OGU7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5ncmVhdCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmNWZlO1xufVxuLnBpc3Rvbi1jb250YWluZXIuZ3JlYXQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExZWVmZTtcbn1cbi5waXN0b24tY29udGFpbmVyLmdyZWF0IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzllNmZkO1xufVxuLnBpc3Rvbi1jb250YWluZXIuY2hvaXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRjNztcbn1cbi5waXN0b24tY29udGFpbmVyLmNob2lyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZjOWM7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5jaG9pciBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmE3Mjtcbn1cbi5waXN0b24tY29udGFpbmVyLnBvc2l0aXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjVkMjtcbn1cbi5waXN0b24tY29udGFpbmVyLnBvc2l0aXYgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZWViMDtcbn1cbi5waXN0b24tY29udGFpbmVyLnBvc2l0aXYgYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWU2OGU7XG59XG4ucGlzdG9uLWNvbnRhaW5lci5wZWRhbCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlMWU3O1xufVxuLnBpc3Rvbi1jb250YWluZXIucGVkYWwgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzY2JkNTtcbn1cbi5waXN0b24tY29udGFpbmVyLnBlZGFsIGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNiNGMzO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDhweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VxdWVuY2UtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLnNlcXVlbmNlLXN0ZXAge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDA7XG4gIGN1cnNvcjogbW92ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZXF1ZW5jZS1zdGVwIC5zdGVwIHtcbiAgd2lkdGg6IDIycHg7XG59XG4uc2VxdWVuY2Utc3RlcCAubGV2ZWwge1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXF1ZW5jZS1zdGVwIC5kaXZpc2lvbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLnNlcXVlbmNlLXN0ZXAgLnBpc3RvbiB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlcXVlbmNlLXN0ZXAgLnNwYWNlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5zZXF1ZW5jZS1zdGVwIC5kZWxldGUge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXF1ZW5jZS1zdGVwLmdlbmVyYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xufVxuLnNlcXVlbmNlLXN0ZXAuZ2VuZXJhbCAuZGVsZXRlIHtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG4uc2VxdWVuY2Utc3RlcC5hbnRpcGhvbmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDZmYjtcbn1cbi5zZXF1ZW5jZS1zdGVwLmFudGlwaG9uYWwgLmRlbGV0ZSB7XG4gIGNvbG9yOiAjMjYzMmVkO1xufVxuLnNlcXVlbmNlLXN0ZXAuc29sbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGQ0ZTg7XG59XG4uc2VxdWVuY2Utc3RlcC5zb2xvIC5kZWxldGUge1xuICBjb2xvcjogI2MxMmY4YTtcbn1cbi5zZXF1ZW5jZS1zdGVwLnN3ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZGNkMjtcbn1cbi5zZXF1ZW5jZS1zdGVwLnN3ZWxsIC5kZWxldGUge1xuICBjb2xvcjogI2RiNTEyMDtcbn1cbi5zZXF1ZW5jZS1zdGVwLmdyZWF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVmZTtcbn1cbi5zZXF1ZW5jZS1zdGVwLmdyZWF0IC5kZWxldGUge1xuICBjb2xvcjogIzAzYzNlYjtcbn1cbi5zZXF1ZW5jZS1zdGVwLmNob2lyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRjNztcbn1cbi5zZXF1ZW5jZS1zdGVwLmNob2lyIC5kZWxldGUge1xuICBjb2xvcjogI2U0ZGMwMDtcbn1cbi5zZXF1ZW5jZS1zdGVwLnBvc2l0aXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWQyO1xufVxuLnNlcXVlbmNlLXN0ZXAucG9zaXRpdiAuZGVsZXRlIHtcbiAgY29sb3I6ICM5OGMxMmE7XG59XG4uc2VxdWVuY2Utc3RlcC5wZWRhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGUxZTc7XG59XG4uc2VxdWVuY2Utc3RlcC5wZWRhbCAuZGVsZXRlIHtcbiAgY29sb3I6ICMzZTYwNmY7XG59XG4uc2VxdWVuY2Utc3RlcC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4uc2VxdWVuY2Utc3RlcC5jZGstZHJhZy1wcmV2aWV3IC5sZXZlbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZXF1ZW5jZS1zdGVwLmNkay1kcmFnLXByZXZpZXcgLnBpc3RvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZXF1ZW5jZS1zdGVwLmNkay1kcmFnLXByZXZpZXcgLmRlbGV0ZSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDUwJTtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciAubGV2ZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5jZGstZHJhZy1wbGFjZWhvbGRlciAucGlzdG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uY2RrLWRyYWctcGxhY2Vob2xkZXIgLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SequenceBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sequence-builder',
                templateUrl: './sequence-builder.component.html',
                styleUrls: ['./sequence-builder.component.scss']
            }]
    }], function () { return [{ type: _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"] }, { type: _services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"] }, { type: _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sequence-editor/sequence-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sequence-editor/sequence-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: SequenceEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceEditorComponent", function() { return SequenceEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sequence.service */ "./src/app/services/sequence.service.ts");
/* harmony import */ var _services_organ_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/organ.service */ "./src/app/services/organ.service.ts");
/* harmony import */ var _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/division-styles.service */ "./src/app/services/division-styles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function SequenceEditorComponent_div_3_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r19);
} }
function SequenceEditorComponent_div_3_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", p_r20.division, " ", p_r20.number, "");
} }
function SequenceEditorComponent_div_3_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", i_r22 + 1, ": Level ", step_r21.memoryLevel, ", ", ctx_r18.pistons[step_r21.piston].division, " ", ctx_r18.pistons[step_r21.piston].number, "");
} }
function SequenceEditorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Memory Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceEditorComponent_div_3_Template_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const step_r14 = ctx.$implicit; return step_r14.memoryLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SequenceEditorComponent_div_3_option_12_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Piston");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceEditorComponent_div_3_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const step_r14 = ctx.$implicit; return step_r14.piston = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SequenceEditorComponent_div_3_option_17_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Based on");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceEditorComponent_div_3_Template_select_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const step_r14 = ctx.$implicit; return step_r14.base = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SequenceEditorComponent_div_3_option_24_Template, 2, 5, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Measure(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceEditorComponent_div_3_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const step_r14 = ctx.$implicit; return step_r14.measure = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SequenceEditorComponent_div_3_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const step_r14 = ctx.$implicit; return step_r14.notes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.getDivisionStyle(ctx_r13.pistons[step_r14.piston].division));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r14.memoryLevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.memoryLevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r14.piston);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.pistons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r14.base);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.sequence.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r14.measure)("id", "measure" + i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", step_r14.notes)("id", "notes" + i_r15);
} }
class SequenceEditorComponent {
    constructor(sequenceService, organService, divisionStylesService) {
        this.sequenceService = sequenceService;
        this.organService = organService;
        this.divisionStylesService = divisionStylesService;
        this.memoryLevels = [];
        this.pistons = [];
    }
    ngOnInit() {
        this.organ = this.organService.organ;
        this.pistons = this.organService.pistons;
        this.memoryLevels = this.organService.memoryLevels;
        this.sequence = this.sequenceService.sequence;
    }
    getDivisionStyle(manual) {
        return this.divisionStylesService.getDivisionClass(manual);
    }
}
SequenceEditorComponent.ɵfac = function SequenceEditorComponent_Factory(t) { return new (t || SequenceEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"])); };
SequenceEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SequenceEditorComponent, selectors: [["app-sequence-editor"]], decls: 10, vars: 1, consts: [["class", "step", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "action-row"], ["routerLink", "/build", 1, "action-left"], [1, "action-spacer"], ["routerLink", "/print", 1, "action-right"], [1, "step", 3, "ngClass"], [1, "step-number"], [1, "text"], [1, "number"], [1, "editor"], [1, "form-row"], [1, "form-group", "form-memory"], ["for", "level"], ["id", "level", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "form-piston"], ["for", "piston"], ["id", "piston", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-base"], ["for", "base"], ["id", "base", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "form-group", "form-measure"], ["for", "measure"], ["type", "text", "name", "measure", 1, "form-control", 3, "ngModel", "id", "ngModelChange"], [1, "form-group", "notes"], ["for", "notes"], ["type", "text", "name", "notes", 1, "form-control", 3, "ngModel", "id", "ngModelChange"], [3, "value"]], template: function SequenceEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SequenceEditorComponent_div_3_Template, 34, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2190 Build Sequence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Review and Print \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sequence.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]], styles: [".step[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  padding: 0px;\n  display: flex;\n}\n.step.general[_ngcontent-%COMP%] {\n  border: 1px solid #eaeaea;\n}\n.step.general[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  color: #969696;\n  background-color: #eaeaea;\n}\n.step.antiphonal[_ngcontent-%COMP%] {\n  border: 1px solid #d4d6fb;\n}\n.step.antiphonal[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #d4d6fb;\n  color: #2632ed;\n}\n.step.solo[_ngcontent-%COMP%] {\n  border: 1px solid #f4d4e8;\n}\n.step.solo[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #f4d4e8;\n  color: #c12f8a;\n}\n.step.swell[_ngcontent-%COMP%] {\n  border: 1px solid #f8dcd2;\n}\n.step.swell[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #f8dcd2;\n  color: #db5120;\n}\n.step.great[_ngcontent-%COMP%] {\n  border: 1px solid #c9f5fe;\n}\n.step.great[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #c9f5fe;\n  color: #03c3eb;\n}\n.step.choir[_ngcontent-%COMP%] {\n  border: 1px solid #fffdc7;\n}\n.step.choir[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #fffdc7;\n  color: #e4dc00;\n}\n.step.positiv[_ngcontent-%COMP%] {\n  border: 1px solid #ecf5d2;\n}\n.step.positiv[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #ecf5d2;\n  color: #98c12a;\n}\n.step.pedal[_ngcontent-%COMP%] {\n  border: 1px solid #d4e1e7;\n}\n.step.pedal[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  background-color: #d4e1e7;\n  color: #3e606f;\n}\n.step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  flex-grow: 0;\n  padding: 10px;\n  background-color: #c12f8a;\n  text-align: center;\n}\n.step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.step[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.step[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 30px;\n}\n.step[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n.step[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.step[_ngcontent-%COMP%]   .form-group.form-memory[_ngcontent-%COMP%] {\n  width: 85px;\n}\n.step[_ngcontent-%COMP%]   .form-group.form-piston[_ngcontent-%COMP%] {\n  width: 175px;\n}\n.step[_ngcontent-%COMP%]   .form-group.form-base[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.step[_ngcontent-%COMP%]   .form-group.form-measure[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.step[_ngcontent-%COMP%]   .form-group.notes[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 7px;\n  background-color: #efefef;\n  border: 0px solid black;\n  font-size: 14px;\n  font-family: \"Montserrat\";\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  background-color: #dadada;\n  outline: none;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 7px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #efefef;\n  border: 0px solid black;\n  border-radius: 0px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  outline: none;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n  background-position: calc(100% - 18px) calc(1em + 0px), calc(100% - 13px) calc(1em + 0px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n.step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ccmlhbi9Ecm9wYm94L01vbnRyZS9tb250cmUvc3JjL2FwcC9zZXF1ZW5jZS1lZGl0b3Ivc2VxdWVuY2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZXF1ZW5jZS1lZGl0b3Ivc2VxdWVuY2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2pCSjtBRG1CSTtFQUNJLHlCQUFBO0FDakJSO0FEbUJRO0VBQ0ksY0F6Qkc7RUEwQkgseUJBQUE7QUNqQlo7QURxQkk7RUFDSSx5QkFBQTtBQ25CUjtBRHFCUTtFQUNJLHlCQUFBO0VBQ0EsY0FsQ007QUNlbEI7QUR1Qkk7RUFDSSx5QkFBQTtBQ3JCUjtBRHVCUTtFQUNJLHlCQUFBO0VBQ0EsY0ExQ0E7QUNxQlo7QUR5Qkk7RUFDSSx5QkFBQTtBQ3ZCUjtBRHlCUTtFQUNJLHlCQUFBO0VBQ0EsY0FsREM7QUMyQmI7QUQyQkk7RUFDSSx5QkFBQTtBQ3pCUjtBRDJCUTtFQUNJLHlCQUFBO0VBQ0EsY0ExREM7QUNpQ2I7QUQ2Qkk7RUFDSSx5QkFBQTtBQzNCUjtBRDZCUTtFQUNJLHlCQUFBO0VBQ0EsY0FsRUM7QUN1Q2I7QUQrQkk7RUFDSSx5QkFBQTtBQzdCUjtBRCtCUTtFQUNJLHlCQUFBO0VBQ0EsY0ExRUc7QUM2Q2Y7QURpQ0k7RUFDSSx5QkFBQTtBQy9CUjtBRGlDUTtFQUNJLHlCQUFBO0VBQ0EsY0FsRkM7QUNtRGI7QURtQ0k7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQW5HSTtFQW9HSixrQkFBQTtBQ2xDUjtBRG9DUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ2xDWjtBRHFDUTtFQUNJLGVBQUE7QUNuQ1o7QUR1Q0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ3JDUjtBRHdDSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ3RDUjtBRHdDUTtFQUNJLGdCQUFBO0FDdENaO0FEMENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUN4Q1I7QUQwQ1E7RUFDSSxlQUFBO0FDeENaO0FEMkNRO0VBQ0ksV0FBQTtBQ3pDWjtBRDRDUTtFQUNJLFlBQUE7QUMxQ1o7QUQ0Q1E7RUFDSSxZQUFBO0FDMUNaO0FENkNRO0VBQ0ksWUFBQTtBQzNDWjtBRCtDUTtFQUNJLFlBQUE7QUM3Q1o7QURnRFE7RUFDSSxrQkFBQTtFQUVBLGVBQUE7QUMvQ1o7QURtRFE7RUFFSSxZQUFBO0VBQ0EseUJBMUpLO0VBMkpMLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDbERaO0FEc0RRO0VBQ0kseUJBaktZO0VBa0taLGFBQUE7QUNwRFo7QUR1RFE7RUFFSSxZQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EseUJBMUtLO0VBMktMLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFHQSw4SkFDSTtFQUdKLG1IQUNJO0VBR0osNENBQ0k7RUFHSiw0QkFBQTtBQ2pFWjtBRG1FWTtFQUNJLGFBQUE7QUNqRWhCIiwiZmlsZSI6InNyYy9hcHAvc2VxdWVuY2UtZWRpdG9yL3NlcXVlbmNlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOmNvbG9yXCI7XG5cbiRnZW5lcmFsLWJhc2U6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiRhbnRpcGhvbmFsLWJhc2U6IHJnYigzOCwgNTAsIDIzNyk7XG4kc29sby1iYXNlOiByZ2IoMTkzLCA0NywgMTM4KTtcbiRzd2VsbC1iYXNlOiByZ2IoMjE5LCA4MSwgMzIpO1xuJGdyZWF0LWJhc2U6IHJnYigzLCAxOTUsIDIzNSk7XG4kY2hvaXItYmFzZTogcmdiKDIyOCwgMjIwLCAwKTtcbiRwb3NpdGl2LWJhc2U6IHJnYigxNTIsIDE5MywgNDIpO1xuJHBlZGFsLWJhc2U6IHJnYig2MiwgOTYsIDExMSk7XG5cbiRiYXNlLWxpZ3RobmVzczogODAlO1xuJGhvdmVyLWxpZ2h0bmVzczogNjUlO1xuJGFjdGl2ZS1saWdodG5lc3M6IDUwJTtcblxuJGlucHV0LWJnLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiA4NSUpO1xuJGlucHV0LWJnLWNvbG9yLWFjdGl2ZTogY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogNjUlKTtcblxuLnN0ZXAge1xuICAgIG1hcmdpbjogMzBweCAwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJi5nZW5lcmFsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY29sb3Iuc2NhbGUoJGdlbmVyYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcblxuICAgICAgICAuc3RlcC1udW1iZXIge1xuICAgICAgICAgICAgY29sb3I6ICRnZW5lcmFsLWJhc2U7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkZ2VuZXJhbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hbnRpcGhvbmFsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY29sb3Iuc2NhbGUoJGFudGlwaG9uYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcblxuICAgICAgICAuc3RlcC1udW1iZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGFudGlwaG9uYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiAkYW50aXBob25hbC1iYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zb2xvIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY29sb3Iuc2NhbGUoJHNvbG8tYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcblxuICAgICAgICAuc3RlcC1udW1iZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHNvbG8tYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiAkc29sby1iYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zd2VsbCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLnNjYWxlKCRzd2VsbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5zdGVwLW51bWJlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkc3dlbGwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiAkc3dlbGwtYmFzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZ3JlYXQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci5zY2FsZSgkZ3JlYXQtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcblxuICAgICAgICAuc3RlcC1udW1iZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJGdyZWF0LWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG4gICAgICAgICAgICBjb2xvcjogJGdyZWF0LWJhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNob2lyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY29sb3Iuc2NhbGUoJGNob2lyLWJhc2UsICRsaWdodG5lc3M6ICRiYXNlLWxpZ3RobmVzcyk7XG5cbiAgICAgICAgLnN0ZXAtbnVtYmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLnNjYWxlKCRjaG9pci1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuICAgICAgICAgICAgY29sb3I6ICRjaG9pci1iYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5wb3NpdGl2IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY29sb3Iuc2NhbGUoJHBvc2l0aXYtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcblxuICAgICAgICAuc3RlcC1udW1iZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3Iuc2NhbGUoJHBvc2l0aXYtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiAkcG9zaXRpdi1iYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5wZWRhbCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLnNjYWxlKCRwZWRhbC1iYXNlLCAkbGlnaHRuZXNzOiAkYmFzZS1saWd0aG5lc3MpO1xuXG4gICAgICAgIC5zdGVwLW51bWJlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5zY2FsZSgkcGVkYWwtYmFzZSwgJGxpZ2h0bmVzczogJGJhc2UtbGlndGhuZXNzKTtcbiAgICAgICAgICAgIGNvbG9yOiAkcGVkYWwtYmFzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdGVwLW51bWJlciB7XG4gICAgICAgIFxuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzb2xvLWJhc2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5lZGl0b3Ige1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgfVxuXG4gICAgLmZvcm0tcm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZm9ybS1tZW1vcnkge1xuICAgICAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvcm0tcGlzdG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICAgICAgfVxuICAgICAgICAmLmZvcm0tYmFzZSB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvcm0tbWVhc3VyZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuXG4gICAgICAgICYubm90ZXMge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZy1jb2xvci1hY3RpdmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtYmctY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL3ZramdyL3Blbi9WWU1lWHBcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcbiAgICAgICAgICAgICAgICBjYWxjKDEwMCUgLSAxOHB4KSBjYWxjKDFlbSArIDBweCksXG4gICAgICAgICAgICAgICAgY2FsYygxMDAlIC0gMTNweCkgY2FsYygxZW0gKyAwcHgpLFxuICAgICAgICAgICAgICAgIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTpcbiAgICAgICAgICAgICAgICA1cHggNXB4LFxuICAgICAgICAgICAgICAgIDVweCA1cHgsXG4gICAgICAgICAgICAgICAgMXB4IDEuNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBcbiAgICAgICAgICAgIG9wdGlvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxufSIsIi5zdGVwIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zdGVwLmdlbmVyYWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuLnN0ZXAuZ2VuZXJhbCAuc3RlcC1udW1iZXIge1xuICBjb2xvcjogIzk2OTY5NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbn1cbi5zdGVwLmFudGlwaG9uYWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmZiO1xufVxuLnN0ZXAuYW50aXBob25hbCAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNmZiO1xuICBjb2xvcjogIzI2MzJlZDtcbn1cbi5zdGVwLnNvbG8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjRkNGU4O1xufVxuLnN0ZXAuc29sbyAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRkNGU4O1xuICBjb2xvcjogI2MxMmY4YTtcbn1cbi5zdGVwLnN3ZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZGNkMjtcbn1cbi5zdGVwLnN3ZWxsIC5zdGVwLW51bWJlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGRjZDI7XG4gIGNvbG9yOiAjZGI1MTIwO1xufVxuLnN0ZXAuZ3JlYXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzlmNWZlO1xufVxuLnN0ZXAuZ3JlYXQgLnN0ZXAtbnVtYmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVmZTtcbiAgY29sb3I6ICMwM2MzZWI7XG59XG4uc3RlcC5jaG9pciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZkYzc7XG59XG4uc3RlcC5jaG9pciAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGM3O1xuICBjb2xvcjogI2U0ZGMwMDtcbn1cbi5zdGVwLnBvc2l0aXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNmNWQyO1xufVxuLnN0ZXAucG9zaXRpdiAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWQyO1xuICBjb2xvcjogIzk4YzEyYTtcbn1cbi5zdGVwLnBlZGFsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZTFlNztcbn1cbi5zdGVwLnBlZGFsIC5zdGVwLW51bWJlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGUxZTc7XG4gIGNvbG9yOiAjM2U2MDZmO1xufVxuLnN0ZXAgLnN0ZXAtbnVtYmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzEyZjhhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RlcCAuc3RlcC1udW1iZXIgLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc3RlcCAuc3RlcC1udW1iZXIgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5zdGVwIC5lZGl0b3Ige1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uc3RlcCAuZm9ybS1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnN0ZXAgLmZvcm0tcm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3RlcCAuZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAuZm9ybS1tZW1vcnkge1xuICB3aWR0aDogODVweDtcbn1cbi5zdGVwIC5mb3JtLWdyb3VwLmZvcm0tcGlzdG9uIHtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAuZm9ybS1iYXNlIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAuZm9ybS1tZWFzdXJlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAubm90ZXMge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc3RlcCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuLnN0ZXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3RlcCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICBwYWRkaW5nOiA3cHg7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMThweCkgY2FsYygxZW0gKyAwcHgpLCBjYWxjKDEwMCUgLSAxM3B4KSBjYWxjKDFlbSArIDBweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uc3RlcCAuZm9ybS1ncm91cCBzZWxlY3Qgb3B0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SequenceEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sequence-editor',
                templateUrl: './sequence-editor.component.html',
                styleUrls: ['./sequence-editor.component.scss']
            }]
    }], function () { return [{ type: _services_sequence_service__WEBPACK_IMPORTED_MODULE_1__["SequenceService"] }, { type: _services_organ_service__WEBPACK_IMPORTED_MODULE_2__["OrganService"] }, { type: _services_division_styles_service__WEBPACK_IMPORTED_MODULE_3__["DivisionStylesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/division-styles.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/division-styles.service.ts ***!
  \*****************************************************/
/*! exports provided: DivisionStylesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionStylesService", function() { return DivisionStylesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DivisionStylesService {
    // This service provides a simple function for applying conditional styles (colors)
    // for different division of the organ
    constructor() {
    }
    getDivisionClass(manual) {
        let style = "";
        switch (manual) {
            case "General":
                style = "general";
                break;
            case "Antiphonal":
                style = "antiphonal";
                break;
            case "Orchestral":
                style = "antiphonal";
                break;
            case "Solo/Bombarde":
                style = "solo";
                break;
            case "Solo":
                style = "solo";
                break;
            case "Swell":
                style = "swell";
                break;
            case "Great":
                style = "great";
                break;
            case "Choir":
                style = "choir";
                break;
            case "Positiv":
                style = "positiv";
                break;
            case "Pedal":
                style = "pedal";
                break;
        }
        let styleObj = {};
        styleObj[style] = true;
        return styleObj;
    }
}
DivisionStylesService.ɵfac = function DivisionStylesService_Factory(t) { return new (t || DivisionStylesService)(); };
DivisionStylesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DivisionStylesService, factory: DivisionStylesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivisionStylesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);




class FileService {
    constructor() {
        this._fileLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._fileName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.fileLoaded = this._fileLoaded.asObservable();
        this.fileName = this._fileName.asObservable();
        this.data = null;
    }
    loadFile(file) {
        this._file = file;
        let reader = new FileReader();
        reader.onload = (event) => {
            // Necessary to circumvent Typescript errors
            let e = event.target;
            let result = e.result;
            let data = new Uint8Array(result);
            let book = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](data, { type: 'array' });
            let sheetName = book.SheetNames[0];
            let sheet = book.Sheets[sheetName];
            this.data = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(sheet, { raw: true, header: 1 });
            // ** Eventually, there should be some check to make sure the file is a Virtuoso file before proceeding
            this._fileLoaded.next(true);
            this._fileName.next(this._file.name);
        };
        reader.readAsArrayBuffer(this._file);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/organ.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/organ.service.ts ***!
  \*******************************************/
/*! exports provided: OrganService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganService", function() { return OrganService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_tabernacle_organ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/tabernacle-organ */ "./src/app/models/tabernacle-organ.ts");



class OrganService {
    constructor() {
        // Eventually need to re-work to allow for multiple organs
        this.organ = _models_tabernacle_organ__WEBPACK_IMPORTED_MODULE_1__["TabernacleOrgan"];
        this.memoryLevels = [];
        this.manuals = [];
        this.pistons = [];
        // Populate memory levels array
        for (let i = 1; i < this.organ.memoryLevels + 1; i++) {
            this.memoryLevels.push(i);
        }
        // Populate manuals array
        for (let manual of this.organ.manuals) {
            this.manuals.push(manual);
        }
        // Populate pistons array
        for (let manual of this.organ.manuals) {
            for (let piston of manual.pistons) {
                this.pistons.push({ id: piston.id, division: piston.division, number: piston.number });
            }
        }
    }
}
OrganService.ɵfac = function OrganService_Factory(t) { return new (t || OrganService)(); };
OrganService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrganService, factory: OrganService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/pdf.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pdf.service.ts ***!
  \*****************************************/
/*! exports provided: PDFService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFService", function() { return PDFService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_tabernacle_organ_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tabernacle-organ-layout */ "./src/app/models/tabernacle-organ-layout.ts");
/* harmony import */ var _sequence_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequence.service */ "./src/app/services/sequence.service.ts");
/* harmony import */ var _organ_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organ.service */ "./src/app/services/organ.service.ts");






class PDFService {
    constructor(sequenceService, organService) {
        this.sequenceService = sequenceService;
        this.organService = organService;
        this.organLayout = new _models_tabernacle_organ_layout__WEBPACK_IMPORTED_MODULE_2__["TabernacleOrganLayout"]();
        this.sequence = this.sequenceService.sequence;
        this.organ = this.organService.organ;
        this.pistons = this.organService.pistons;
    }
    PDF() {
        const testing = false;
        const font = "Helvetica";
        const r = this.organLayout.drawknobRadius;
        let page = 1;
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__({
            format: "letter",
            orientation: "landscape",
            unit: "pt"
        });
        for (let step of this.sequence.steps) {
            // Draw margins and drawknob columns in test mode
            if (testing) {
                pdf.setDrawColor("0.8");
                // Draw margins
                pdf.line(0, 36, 792, 36); // Top
                pdf.line(0, 576, 792, 576); // Bottom
                pdf.line(36, 0, 36, 612); // Left
                pdf.line(756, 0, 756, 612); // Right
                // Center line
                pdf.setDrawColor(0, 0, 255);
                pdf.line(396, 0, 396, 612);
                // Stop columns
                pdf.setDrawColor(255, 0, 0);
                for (let column of this.organLayout.columns) {
                    pdf.line(column, 0, column, 612);
                }
            }
            let baseline = 48;
            // Draw title
            pdf.setFontSize(18);
            pdf.setFont(font, "bold");
            let titleString = "";
            if (this.sequence.composition.catalogNo !== "") {
                titleString += "#" + this.sequence.composition.catalogNo + " - ";
            }
            titleString += this.sequence.composition.title;
            pdf.text(titleString.toUpperCase(), 396, baseline, { align: "center" });
            // Draw subtitles
            pdf.setFontSize(14);
            pdf.setFont(font, "normal");
            baseline += 16;
            if (this.sequence.version !== "") {
                pdf.text(this.sequence.version, 396, baseline, { align: "center" });
                baseline += 16;
                pdf.text(this.sequence.composition.composer, 396, baseline, { align: "center" });
            }
            else {
                pdf.text(this.sequence.composition.composer, 396, baseline, { align: "center" });
            }
            // Draw organ indicator
            pdf.setLineWidth(1);
            pdf.rect(36, 30, 72, 24, "S");
            pdf.setFont(font, "bold");
            pdf.setFontSize(10);
            let organString;
            if (this.organ.venue === "Tabernacle") {
                organString = "TAB";
            }
            else if (this.organ.venue === "Conference Center") {
                organString = "CC";
            }
            pdf.text(organString, 72, 46, { align: "center" });
            // Draw step number 
            pdf.rect(684, 30, 72, 24, "S");
            pdf.setFont(font, "normal");
            let pageString = "Step " + page + " of " + this.sequence.steps.length;
            pdf.text(pageString, 720, 46, { align: "center" });
            // Draw text fields
            baseline = 120;
            const tfColumns = [36, 263, 283, 509, 529, 756]; // 10" / 3 with 20 point gutters
            const tfRowHeight = 32;
            const tfRows = [baseline, baseline + tfRowHeight];
            const tfLabelOffset = -18;
            const tfTextOffset = -5;
            pdf.setLineWidth(1);
            pdf.setDrawColor(1);
            pdf.line(tfColumns[0], tfRows[0], tfColumns[1], tfRows[0]);
            pdf.line(tfColumns[2], tfRows[0], tfColumns[3], tfRows[0]);
            pdf.line(tfColumns[4], tfRows[0], tfColumns[5], tfRows[0]);
            pdf.line(tfColumns[0], tfRows[1], tfColumns[5], tfRows[1]);
            // Text field labels
            pdf.setFont(font, "bold");
            pdf.setFontSize(5);
            pdf.text("PISTON", tfColumns[0], tfRows[0] + tfLabelOffset);
            pdf.text("BASED ON", tfColumns[2], tfRows[0] + tfLabelOffset);
            pdf.text("MEASURE(S)", tfColumns[4], tfRows[0] + tfLabelOffset);
            pdf.text("NOTES", tfColumns[0], tfRows[1] + tfLabelOffset);
            // Text field text
            pdf.setFont(font, "normal");
            pdf.setFontSize(11);
            let pistonString = "Level " + step.memoryLevel + ": " + this.pistons[step.piston].division + " " + this.pistons[step.piston].number;
            pdf.text(pistonString, tfColumns[0], tfRows[0] + tfTextOffset);
            let baseString = "(None)";
            if (step.base !== -1) {
                let baseStep = this.sequence.steps[step.base];
                let basePiston = this.pistons[baseStep.piston];
                baseString = "Level " + baseStep.memoryLevel + ": " + basePiston.division + " " + basePiston.number + " (Step " + (step.base + 1) + ")";
            }
            pdf.text(baseString, tfColumns[2], tfRows[0] + tfTextOffset);
            pdf.text(step.measure, tfColumns[4], tfRows[0] + tfTextOffset);
            pdf.text(step.notes, tfColumns[0], tfRows[1] + tfTextOffset);
            pdf.setDrawColor(0, 0, 0);
            pdf.setLineWidth(1);
            pdf.setFontSize(this.organLayout.drawknobFontSize);
            pdf.setFont(font, "bold");
            for (let stop of this.organ.stops) {
                const x = this.organLayout.columns[stop.column];
                const y = this.organLayout.rows[stop.row];
                const lh = this.organLayout.drawknobFontSize;
                let offset;
                if (stop.shortPitchDesignation.indexOf("\'") !== -1) {
                    offset = this.organLayout.drawknobPitchOffset;
                }
                else {
                    offset = 0;
                }
                pdf.circle(x, y, r, "S");
                pdf.text(stop.shortName, x, y, { align: "center" });
                pdf.text(stop.shortPitchDesignation, (x + offset), (y + lh), { align: "center" });
            }
            for (let divider of this.organLayout.dividers) {
                pdf.line(divider.x, divider.y1, divider.x, divider.y2);
            }
            pdf.setFontSize(8);
            for (let label of this.organLayout.labels) {
                pdf.text(label.label, label.x, label.y, { align: "center" });
            }
            page = page + 1;
            pdf.addPage("letter", "landscape");
        } // End For step of sequence.steps
        pdf.deletePage(page); // Delete extra page from end of loop
        pdf.save("montre.pdf");
    }
    draw() {
        const testing = false;
        const drawknobFont = "Helvetica";
        const r = this.organLayout.drawknobRadius;
        //const tf = this.organLayout.textFields;
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__({
            format: "letter",
            orientation: "landscape",
            unit: "pt"
        });
        // Draw margins and drawknob columns in test mode
        if (testing) {
            pdf.setDrawColor("0.8");
            // Draw margins
            pdf.line(0, 36, 792, 36); // Top
            pdf.line(0, 576, 792, 576); // Bottom
            pdf.line(36, 0, 36, 612); // Left
            pdf.line(756, 0, 756, 612); // Right
            // Center line
            pdf.setDrawColor(0, 0, 255);
            pdf.line(396, 0, 396, 612);
            // Stop columns
            pdf.setDrawColor(255, 0, 0);
            for (let column of this.organLayout.columns) {
                pdf.line(column, 0, column, 612);
            }
        }
        let baseline = 48;
        // Draw title
        pdf.setFontSize(18);
        pdf.setFont("Helvetica", "bold");
        let titleString = "";
        if (this.sequence.composition.catalogNo !== "") {
            titleString += "#" + this.sequence.composition.catalogNo + " - ";
        }
        titleString += this.sequence.composition.title;
        pdf.text(titleString.toUpperCase(), 396, baseline, { align: "center" });
        // Draw subtitles
        pdf.setFontSize(14);
        pdf.setFont("Helvetica", "normal");
        baseline += 16;
        if (this.sequence.version !== "") {
            pdf.text(this.sequence.version, 396, baseline, { align: "center" });
            baseline += 16;
            pdf.text(this.sequence.composition.composer, 396, baseline, { align: "center" });
        }
        else {
            pdf.text(this.sequence.composition.composer, 396, baseline, { align: "center" });
        }
        // Draw organ indicator
        pdf.setLineWidth(1);
        pdf.rect(36, 30, 72, 24, "S");
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(10);
        pdf.text("TAB", 72, 46, { align: "center" });
        // Draw step number 
        pdf.rect(684, 30, 72, 24, "S");
        pdf.setFont("Helvetica", "normal");
        pdf.text("Step 12 of 27", 720, 46, { align: "center" });
        // Draw text fields
        baseline = 120;
        const tfColumns = [36, 263, 283, 509, 529, 756]; // 10" / 3 with 20 point gutters
        const tfRowHeight = 32;
        const tfRows = [baseline, baseline + tfRowHeight];
        const tfLabelOffset = -18;
        const tfTextOffset = -5;
        pdf.setLineWidth(1);
        pdf.setDrawColor(1);
        pdf.line(tfColumns[0], tfRows[0], tfColumns[1], tfRows[0]);
        pdf.line(tfColumns[2], tfRows[0], tfColumns[3], tfRows[0]);
        pdf.line(tfColumns[4], tfRows[0], tfColumns[5], tfRows[0]);
        pdf.line(tfColumns[0], tfRows[1], tfColumns[5], tfRows[1]);
        // Text field labels
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(5);
        pdf.text("PISTON", tfColumns[0], tfRows[0] + tfLabelOffset);
        pdf.text("BASED ON", tfColumns[2], tfRows[0] + tfLabelOffset);
        pdf.text("MEASURE(S)", tfColumns[4], tfRows[0] + tfLabelOffset);
        pdf.text("NOTES", tfColumns[0], tfRows[1] + tfLabelOffset);
        // Text field text
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(11);
        pdf.text("Level 60: General 3", tfColumns[0], tfRows[0] + tfTextOffset);
        pdf.text("Level 60: General 2 (Step 2)", tfColumns[2], tfRows[0] + tfTextOffset);
        pdf.text("mm. 1, 45, 60, 120", tfColumns[4], tfRows[0] + tfTextOffset);
        pdf.text("Standard general 9 plus Rauschfeife.", tfColumns[0], tfRows[1] + tfTextOffset);
        pdf.setDrawColor(0, 0, 0);
        pdf.setLineWidth(1);
        pdf.setDrawColor(0, 0, 0);
        pdf.setLineWidth(1);
        pdf.setFontSize(this.organLayout.drawknobFontSize);
        pdf.setFont(drawknobFont, "bold");
        for (let stop of this.organ.stops) {
            const x = this.organLayout.columns[stop.column];
            const y = this.organLayout.rows[stop.row];
            const lh = this.organLayout.drawknobFontSize;
            let offset;
            if (stop.shortPitchDesignation.indexOf("\'") !== -1) {
                offset = this.organLayout.drawknobPitchOffset;
            }
            else {
                offset = 0;
            }
            pdf.circle(x, y, r, "S");
            pdf.text(stop.shortName, x, y, { align: "center" });
            pdf.text(stop.shortPitchDesignation, (x + offset), (y + lh), { align: "center" });
        }
        for (let divider of this.organLayout.dividers) {
            pdf.line(divider.x, divider.y1, divider.x, divider.y2);
        }
        pdf.setFontSize(8);
        for (let label of this.organLayout.labels) {
            pdf.text(label.label, label.x, label.y, { align: "center" });
        }
        pdf.save("montre.pdf");
    }
}
PDFService.ɵfac = function PDFService_Factory(t) { return new (t || PDFService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_sequence_service__WEBPACK_IMPORTED_MODULE_3__["SequenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_organ_service__WEBPACK_IMPORTED_MODULE_4__["OrganService"])); };
PDFService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PDFService, factory: PDFService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PDFService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _sequence_service__WEBPACK_IMPORTED_MODULE_3__["SequenceService"] }, { type: _organ_service__WEBPACK_IMPORTED_MODULE_4__["OrganService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sequence.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sequence.service.ts ***!
  \**********************************************/
/*! exports provided: SequenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceService", function() { return SequenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _models_sequence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/sequence */ "./src/app/models/sequence.ts");




class SequenceService {
    //public sequence: Sequence = this.mockData;
    constructor() {
        // Used for working on other components with having to enter a sequence on every reload
        //public mockData: Sequence = { "composition": { "title": "Praise, My Soul, the King of Heaven", "composer": "arr. Wilberg", "catalogNo": "963" }, "version": "Organ w/ Orchestra", "organ": "", "steps": [ { "memoryLevel": 1, "piston": 0, "base": -1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 1, "base": 0, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 2, "base": 1, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 3, "base": 2, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 35, "base": 3, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 45, "base": 4, "notes": "", "measure": "" }, { "memoryLevel": 1, "piston": 66, "base": 5, "notes": "", "measure": "" } ] };
        this.sequence = new _models_sequence__WEBPACK_IMPORTED_MODULE_2__["Sequence"]();
    }
    addStep(memoryLevel, piston) {
        let base;
        if (this.sequence.steps.length === 0) {
            base = -1;
        }
        else {
            base = this.sequence.steps.length - 1;
        }
        this.sequence.steps.push({
            memoryLevel: memoryLevel,
            piston: piston,
            base: base,
            notes: "",
            measure: ""
        });
    }
    deleteStep(index) {
        let arr = this.sequence.steps.splice(index, 1);
    }
    reorderSequence(previousIndex, currentIndex) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.sequence.steps, previousIndex, currentIndex);
    }
}
SequenceService.ɵfac = function SequenceService_Factory(t) { return new (t || SequenceService)(); };
SequenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SequenceService, factory: SequenceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SequenceService, [{
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

module.exports = __webpack_require__(/*! /Users/Brian/Dropbox/Montre/montre/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map