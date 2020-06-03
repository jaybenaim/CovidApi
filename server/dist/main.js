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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/master-detail/master-detail.module */ "./src/app/app-shell/master-detail/master-detail.module.ts")).then(function (module) { return module.MasterDetailModule; }); }
    },
    {
        path: 'grid',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/grid/grid.module */ "./src/app/app-shell/grid/grid.module.ts")).then(function (module) { return module.GridModule; }); }
    },
    {
        path: 'list',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./app-shell/list/list.module */ "./src/app/app-shell/list/list.module.ts")).then(function (module) { return module.ListModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app-shell/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 0, consts: [[1, "footer"], [1, "container-fluid"], [1, "row", "justify-content-around"], [1, "col-8", "col-md-5"], [1, "title"], [1, "description"], [1, "col-2"], [1, "list-unstyled"], ["href", "/", "title", "Example Link", "aria-label", "Example Link", 1, "footerlink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CovidApi");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This is placeholder text. Your web app description goes here. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Example Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  background-color: #1d1d1d;\r\n  padding-top: 2rem;\r\n  padding-bottom: 4rem;\r\n}\r\n  \r\n.title[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n  \r\n.description[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n  \r\n.footerlink[_ngcontent-%COMP%], .footerlink[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mb290ZXJsaW5rLFxyXG4uZm9vdGVybGluazpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuICBcclxuIl19 */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/grid/grid-item/grid-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/grid/grid-item/grid-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var GridItemComponent = /** @class */ (function () {
    function GridItemComponent() {
    }
    GridItemComponent.prototype.ngOnInit = function () { };
    GridItemComponent.ɵfac = function GridItemComponent_Factory(t) { return new (t || GridItemComponent)(); };
    GridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridItemComponent, selectors: [["app-grid-item"]], inputs: { key: "key", gridItem: "gridItem" }, decls: 6, vars: 2, consts: [["src", "../../../assets/GreyBox.svg", "alt", "Default Grey Box", 1, "mb-3"]], template: function GridItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gridItem.shortDescription);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9ncmlkL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
    return GridItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-item',
                templateUrl: './grid-item.component.html',
                styleUrls: ['./grid-item.component.css']
            }]
    }], function () { return []; }, { key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-shell/grid/grid-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/grid/grid-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GridRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoutingModule", function() { return GridRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "./src/app/app-shell/grid/grid.component.ts");





var routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
    }
];
var GridRoutingModule = /** @class */ (function () {
    function GridRoutingModule() {
    }
    GridRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridRoutingModule });
    GridRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridRoutingModule_Factory(t) { return new (t || GridRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return GridRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _grid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.service */ "./src/app/app-shell/grid/grid.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "./src/app/app-shell/grid/grid-item/grid-item.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.component */ "./src/app/shared/warning-message/warning-message.component.ts");









function GridComponent_app_grid_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grid-item", 6);
} if (rf & 2) {
    var gridItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridItem", gridItem_r2);
} }
function GridComponent_app_warning_message_8_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-warning-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("warningMessageOpen", function GridComponent_app_warning_message_8_Template_app_warning_message_warningMessageOpen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleWarningClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.warningMessageText);
} }
var GridComponent = /** @class */ (function () {
    function GridComponent(gridService) {
        this.gridService = gridService;
        this.greyBoxUrl = "../../../assets/GreyBox.svg";
        this.warningMessageText = "";
        this.warningMessageOpen = false;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gridItems$ = this.gridService.getGridItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.warningMessageText = "Request to get grid text failed: " + error;
            _this.warningMessageOpen = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    GridComponent.prototype.handleWarningClose = function (open) {
        this.warningMessageOpen = open;
        this.warningMessageText = "";
    };
    GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"])); };
    GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 9, vars: 4, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"], [1, "row", "justify-content-around", "text-center", "pb-5"], ["class", "col-4 p-5", 3, "gridItem", 4, "ngFor", "ngForOf"], [3, "text", "warningMessageOpen", 4, "ngIf"], [1, "col-4", "p-5", 3, "gridItem"], [3, "text", "warningMessageOpen"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GridComponent_app_grid_item_6_Template, 1, 1, "app-grid-item", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GridComponent_app_warning_message_8_Template, 1, 1, "app-warning-message", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.gridItems$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMessageOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_5__["GridItemComponent"], _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__["WarningMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".header[_ngcontent-%COMP%] {\r\n    background-color: #cecece;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2dyaWQvZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvZ3JpZC9ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xyXG4gIH1cclxuICBcclxuIl19 */"] });
    return GridComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-grid",
                templateUrl: "./grid.component.html",
                styleUrls: ["./grid.component.css"],
            }]
    }], function () { return [{ type: _grid_service__WEBPACK_IMPORTED_MODULE_1__["GridService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/grid/grid.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/grid/grid.module.ts ***!
  \***********************************************/
/*! exports provided: GridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ "./src/app/app-shell/grid/grid.component.ts");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/app-shell/grid/grid-routing.module.ts");
/* harmony import */ var _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-item/grid-item.component */ "./src/app/app-shell/grid/grid-item/grid-item.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");







var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GridModule });
    GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GridModule_Factory(t) { return new (t || GridModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]
            ]] });
    return GridModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, { declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
        _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], _grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_4__["GridItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_5__["WarningMessageModule"],
                    _grid_routing_module__WEBPACK_IMPORTED_MODULE_3__["GridRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/grid/grid.service.ts":
/*!************************************************!*\
  !*** ./src/app/app-shell/grid/grid.service.ts ***!
  \************************************************/
/*! exports provided: GridService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridService", function() { return GridService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var GridService = /** @class */ (function () {
    function GridService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.grid;
    }
    // see https://angular.io/guide/http#getting-error-details
    GridService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    GridService.prototype.getGridItems = function () {
        return this.http
            .get(this.listUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    GridService.ɵfac = function GridService_Factory(t) { return new (t || GridService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    GridService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GridService, factory: GridService.ɵfac, providedIn: 'root' });
    return GridService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/list/form/form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/list/form/form.component.ts ***!
  \*******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






function FormComponent_ngb_alert_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Input must be at least 1 character long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_ngb_alert_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_ngb_alert_3_div_1_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.content.errors.required);
} }
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.inputText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.listForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    Object.defineProperty(FormComponent.prototype, "content", {
        get: function () {
            return this.listForm.get('content');
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function () {
        this.inputText.emit(this.listForm.get('content').value);
        this.listForm.reset();
    };
    FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], outputs: { inputText: "inputText" }, decls: 7, vars: 3, consts: [[1, "input-group", "my-3", 3, "formGroup", "ngSubmit"], [1, "col-11"], ["id", "content", "placeholder", "Add text here...", "aria-label", "Add text here...", "title", "Add text here...", "formControlName", "content", "required", "", 1, "form-control"], ["type", "danger", 4, "ngIf"], [1, "input-group-btn", "col-1"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "danger"], [4, "ngIf"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormComponent_ngb_alert_3_Template, 2, 1, "ngb-alert", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.listForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content.invalid && ctx.content.dirty);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.listForm.invalid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], styles: [".col-11[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL2xpc3QvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNoZWxsL2xpc3QvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTExe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn0iXX0= */"] });
    return FormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return []; }, { inputText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-shell/list/list-item/list-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/list/list-item/list-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListItemComponent.prototype.ngOnInit = function () { };
    ListItemComponent.prototype.deleteItemFn = function () {
        this.deleteItem.emit(this._id);
    };
    ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(); };
    ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { _id: "_id", listItem: "listItem" }, outputs: { deleteItem: "deleteItem" }, decls: 8, vars: 1, consts: [[1, "row"], [1, "col-11"], [1, "mt-3"], [1, "col-1"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", "title", "Close", 1, "close", "py-2", 3, "click"], ["aria-hidden", "true"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemComponent_Template_button_click_5_listener() { return ctx.deleteItemFn(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listItem.text);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9saXN0L2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
    return ListItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-item',
                templateUrl: './list-item.component.html',
                styleUrls: ['./list-item.component.css']
            }]
    }], function () { return []; }, { _id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-shell/list/list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-shell/list/list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ "./src/app/app-shell/list/list.component.ts");





var routes = [
    {
        path: '',
        component: _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListRoutingModule });
    ListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListRoutingModule_Factory(t) { return new (t || ListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ListRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-shell/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.service */ "./src/app/app-shell/list/list.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/app-shell/list/form/form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/app-shell/list/list-item/list-item.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.component */ "./src/app/shared/warning-message/warning-message.component.ts");









function ListComponent_app_list_item_7_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteItem", function ListComponent_app_list_item_7_Template_app_list_item_deleteItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var listItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listItem", listItem_r2)("_id", listItem_r2._id);
} }
function ListComponent_app_warning_message_9_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-warning-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("warningMessageOpen", function ListComponent_app_warning_message_9_Template_app_warning_message_warningMessageOpen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.handleWarningClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r1.warningMessageText);
} }
var ListComponent = /** @class */ (function () {
    function ListComponent(listService) {
        this.listService = listService;
        this.listItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.warningMessageText = '';
        this.warningMessageOpen = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.listItems$ = this.dataSource.asObservable();
        this.loadItems();
    };
    ListComponent.prototype.loadItems = function () {
        var _this = this;
        this.listService.getListItems().subscribe(function (listItem) { return _this.dataSource.next(listItem); }, function (error) { return _this.handleError("Request to get list items failed: " + error); });
    };
    ListComponent.prototype.addItem = function (inputText) {
        var _this = this;
        this.listService.addListItem(inputText).subscribe(function () { return _this.loadItems(); }, function (error) { return _this.handleError("Request to add item failed: " + error); });
    };
    ListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.listService.deleteListItem(id).subscribe(function () { return _this.loadItems(); }, function (error) { return _this.handleError("Request to delete item failed: " + error); });
    };
    ListComponent.prototype.handleWarningClose = function (open) {
        this.warningMessageOpen = open;
        this.warningMessageText = '';
    };
    ListComponent.prototype.handleError = function (warningMessageText) {
        this.warningMessageOpen = true;
        this.warningMessageText = warningMessageText;
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 10, vars: 4, consts: [["id", "mainContent", 1, "container"], [1, "row", "justify-content-center", "py-5"], [1, "row"], [1, "col-12", "p-0"], [3, "inputText"], ["class", "col-12 mb-3 border", 3, "listItem", "_id", "deleteItem", 4, "ngFor", "ngForOf"], [3, "text", "warningMessageOpen", 4, "ngIf"], [1, "col-12", "mb-3", "border", 3, "listItem", "_id", "deleteItem"], [3, "text", "warningMessageOpen"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputText", function ListComponent_Template_app_form_inputText_6_listener($event) { return ctx.addItem($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_app_list_item_7_Template, 1, 2, "app-list-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_app_warning_message_9_Template, 1, 1, "app-warning-message", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.listItems$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMessageOpen);
        } }, directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ListItemComponent"], _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_6__["WarningMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
    return ListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/list/list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-shell/list/list.module.ts ***!
  \***********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.component */ "./src/app/app-shell/list/list.component.ts");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/app-shell/list/list-routing.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/app-shell/list/form/form.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/app-shell/list/list-item/list-item.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");










var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListModule });
    ListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListModule_Factory(t) { return new (t || ListModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_8__["WarningMessageModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListRoutingModule"]
            ]] });
    return ListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListModule, { declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
        _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_8__["WarningMessageModule"],
        _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
                    _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_8__["WarningMessageModule"],
                    _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/list/list.service.ts":
/*!************************************************!*\
  !*** ./src/app/app-shell/list/list.service.ts ***!
  \************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.list;
    }
    // see https://angular.io/guide/http#getting-error-details
    ListService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ListService.prototype.getListItems = function () {
        return this.http
            .get(this.listUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListService.prototype.addListItem = function (inputText) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var body = JSON.stringify({
            text: inputText
        });
        return this.http
            .post(this.listUrl, body, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListService.prototype.deleteListItem = function (id) {
        return this.http
            .delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.list + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListService.ɵfac = function ListService_Factory(t) { return new (t || ListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListService, factory: ListService.ɵfac, providedIn: 'root' });
    return ListService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/detail/detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shell/master-detail/detail/detail.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () { };
    DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
    DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-page"]], inputs: { sampleOrder: "sampleOrder" }, decls: 26, vars: 6, consts: [[1, "row", "heading"], [1, "col"], [1, "ml-3", "mb-4"], [1, "row"], [1, "col-md-8", "col-12", "ml-3", "mb-5", "mt-3"], [1, "title"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ship To");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.status);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.orderDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.shipTo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.orderTotal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sampleOrder.longDescription);
        } }, styles: [".title[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n  background-color: #cecece;\r\n  padding-top: 18em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4uaGVhZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICBwYWRkaW5nLXRvcDogMThlbTtcclxufVxyXG4iXX0= */"] });
    return DetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page',
                templateUrl: './detail.component.html',
                styleUrls: ['./detail.component.css']
            }]
    }], function () { return []; }, { sampleOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MasterDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailRoutingModule", function() { return MasterDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _master_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-detail.component */ "./src/app/app-shell/master-detail/master-detail.component.ts");





var routes = [
    {
        path: '',
        component: _master_detail_component__WEBPACK_IMPORTED_MODULE_2__["MasterDetailComponent"]
    }
];
var MasterDetailRoutingModule = /** @class */ (function () {
    function MasterDetailRoutingModule() {
    }
    MasterDetailRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterDetailRoutingModule });
    MasterDetailRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterDetailRoutingModule_Factory(t) { return new (t || MasterDetailRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MasterDetailRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterDetailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDetailRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: MasterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailComponent", function() { return MasterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _master_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master-detail.service */ "./src/app/app-shell/master-detail/master-detail.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _master_list_master_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./master-list/master-list.component */ "./src/app/app-shell/master-detail/master-list/master-list.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/app-shell/master-detail/detail/detail.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.component */ "./src/app/shared/warning-message/warning-message.component.ts");










function MasterDetailComponent_app_master_list_4_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-master-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MasterDetailComponent_app_master_list_4_Template_app_master_list_itemClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var sampleOrder_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectSampleOrder(sampleOrder_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sampleOrder_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sampleOrder", sampleOrder_r3);
} }
function MasterDetailComponent_app_page_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page", 8);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sampleOrder", ctx_r1.currentSampleOrder);
} }
function MasterDetailComponent_app_warning_message_7_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-warning-message", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("warningMessageOpen", function MasterDetailComponent_app_warning_message_7_Template_app_warning_message_warningMessageOpen_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleWarningClose($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx_r2.warningMessageText);
} }
var MasterDetailComponent = /** @class */ (function () {
    function MasterDetailComponent(masterDetailService) {
        this.masterDetailService = masterDetailService;
        this.greyAvatarUrl = '../../../assets/GreyAvatar.svg';
        this.warningMessageText = '';
        this.warningMessageOpen = false;
    }
    MasterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sampleOrders$ = this.masterDetailService.getMasterDetailItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            _this.warningMessageText = "Request to get master detail text failed: " + error;
            _this.warningMessageOpen = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (listSampleOrders) {
            _this.currentSampleOrder = listSampleOrders[0];
            return listSampleOrders;
        }));
    };
    MasterDetailComponent.prototype.selectSampleOrder = function (sampleOrder) {
        this.currentSampleOrder = sampleOrder;
    };
    MasterDetailComponent.prototype.handleWarningClose = function (open) {
        this.warningMessageOpen = open;
        this.warningMessageText = '';
    };
    MasterDetailComponent.ɵfac = function MasterDetailComponent_Factory(t) { return new (t || MasterDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_master_detail_service__WEBPACK_IMPORTED_MODULE_1__["MasterDetailService"])); };
    MasterDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterDetailComponent, selectors: [["app-master-detail"]], decls: 8, vars: 5, consts: [["id", "mainContent"], [1, "container-fluid"], [1, "row"], [1, "col-2", "p-0", "border-right", "sidebar"], ["class", "list-group list-group-flush border-bottom", 3, "sampleOrder", "itemClick", 4, "ngFor", "ngForOf"], ["class", "col", 3, "sampleOrder", 4, "ngIf"], [3, "text", "warningMessageOpen", 4, "ngIf"], [1, "list-group", "list-group-flush", "border-bottom", 3, "sampleOrder", "itemClick"], [1, "col", 3, "sampleOrder"], [3, "text", "warningMessageOpen"]], template: function MasterDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MasterDetailComponent_app_master_list_4_Template, 1, 1, "app-master-list", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MasterDetailComponent_app_page_6_Template, 1, 1, "app-page", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MasterDetailComponent_app_warning_message_7_Template, 1, 1, "app-warning-message", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx.sampleOrders$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSampleOrder);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warningMessageOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _master_list_master_list_component__WEBPACK_IMPORTED_MODULE_5__["MasterListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _shared_warning_message_warning_message_component__WEBPACK_IMPORTED_MODULE_7__["WarningMessageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".sidebar[_ngcontent-%COMP%] {\r\n  \r\n  min-height: calc(100vh - 160px - 57px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL21hc3Rlci1kZXRhaWwvbWFzdGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQWdEO0VBQ2hELHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tYXN0ZXItZGV0YWlsL21hc3Rlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAvKiBmdWxsIGhlaWdodCAtIGZvb3RlciBoZWlnaHQgLSBuYXZiYXIgaGVpZ2h0ICovXHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4IC0gNTdweCk7XHJcbn1cclxuIl19 */"] });
    return MasterDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-detail',
                templateUrl: './master-detail.component.html',
                styleUrls: ['./master-detail.component.css']
            }]
    }], function () { return [{ type: _master_detail_service__WEBPACK_IMPORTED_MODULE_1__["MasterDetailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: MasterDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailModule", function() { return MasterDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _master_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./master-detail.component */ "./src/app/app-shell/master-detail/master-detail.component.ts");
/* harmony import */ var _master_list_master_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-list/master-list.component */ "./src/app/app-shell/master-detail/master-list/master-list.component.ts");
/* harmony import */ var _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/warning-message/warning-message.module */ "./src/app/shared/warning-message/warning-message.module.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/app-shell/master-detail/detail/detail.component.ts");
/* harmony import */ var _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-detail-routing.module */ "./src/app/app-shell/master-detail/master-detail-routing.module.ts");








var MasterDetailModule = /** @class */ (function () {
    function MasterDetailModule() {
    }
    MasterDetailModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MasterDetailModule });
    MasterDetailModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MasterDetailModule_Factory(t) { return new (t || MasterDetailModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_4__["WarningMessageModule"],
                _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MasterDetailRoutingModule"]
            ]] });
    return MasterDetailModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MasterDetailModule, { declarations: [_master_detail_component__WEBPACK_IMPORTED_MODULE_2__["MasterDetailComponent"], _master_list_master_list_component__WEBPACK_IMPORTED_MODULE_3__["MasterListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_4__["WarningMessageModule"],
        _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MasterDetailRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDetailModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_master_detail_component__WEBPACK_IMPORTED_MODULE_2__["MasterDetailComponent"], _master_list_master_list_component__WEBPACK_IMPORTED_MODULE_3__["MasterListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_warning_message_warning_message_module__WEBPACK_IMPORTED_MODULE_4__["WarningMessageModule"],
                    _master_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["MasterDetailRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/master-detail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-detail.service.ts ***!
  \******************************************************************/
/*! exports provided: MasterDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDetailService", function() { return MasterDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var MasterDetailService = /** @class */ (function () {
    function MasterDetailService(http) {
        this.http = http;
        this.listUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoint.masterdetail;
    }
    // see https://angular.io/guide/http#getting-error-details
    MasterDetailService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    MasterDetailService.prototype.getMasterDetailItems = function () {
        return this.http
            .get(this.listUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    MasterDetailService.ɵfac = function MasterDetailService_Factory(t) { return new (t || MasterDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    MasterDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MasterDetailService, factory: MasterDetailService.ɵfac, providedIn: 'root' });
    return MasterDetailService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-shell/master-detail/master-list/master-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/app-shell/master-detail/master-list/master-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: MasterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterListComponent", function() { return MasterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MasterListComponent = /** @class */ (function () {
    function MasterListComponent() {
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MasterListComponent.prototype.ngOnInit = function () { };
    MasterListComponent.prototype.selectSampleOrder = function () {
        this.itemClick.emit();
    };
    MasterListComponent.ɵfac = function MasterListComponent_Factory(t) { return new (t || MasterListComponent)(); };
    MasterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterListComponent, selectors: [["app-master-list"]], inputs: { sampleOrder: "sampleOrder" }, outputs: { itemClick: "itemClick" }, decls: 3, vars: 2, consts: [["type", "button", 1, "list-group-item", "list-group-item-action", "sidebarText", 3, "click"], ["alt", "Default Grey Avatar", "title", "Default Grey Avatar", "aria-label", "Default Grey Avatar", 1, "mr-3", 3, "src"]], template: function MasterListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterListComponent_Template_button_click_0_listener() { return ctx.selectSampleOrder(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.sampleOrder.imageSrc ? ctx.sampleOrder.imageSrc : "../../../assets/GreyAvatar.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sampleOrder.title, "\n");
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zaGVsbC9tYXN0ZXItZGV0YWlsL21hc3Rlci1saXN0L21hc3Rlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return MasterListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-list',
                templateUrl: './master-list.component.html',
                styleUrls: ['./master-list.component.css']
            }]
    }], function () { return []; }, { sampleOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-shell/nav-bar/nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-shell/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(location) {
        this.location = location;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.skipLinkPath = this.location.path() + "#mainContent";
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 13, vars: 1, consts: [[1, "skipLink"], ["title", "Skip to Main Content", "aria-label", "Skip to Main Content", 3, "href"], [1, "navbar", "navbar-expand-sm", "navbar-light", "border-bottom", "justify-content-between"], ["routerLink", "/", "title", "CovidApi", "aria-label", "CovidApi", 1, "navbar-brand"], [1, "navbar-nav"], ["routerLink", "/", "title", "Master_Detail", "aria-label", "Master_Detail", 1, "nav-item", "nav-link", "active"], ["routerLink", "/grid", "title", "Grid", "aria-label", "Grid", 1, "nav-item", "nav-link", "active"], ["routerLink", "/list", "title", "List", "aria-label", "List", 1, "nav-item", "nav-link", "active"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Skip to Main Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " CovidApi ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Master_Detail ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Grid ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " List ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.skipLinkPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n\r\n.skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNoZWxsL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2hlbGwvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpcExpbmsgYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMDBweDtcclxuICB0b3A6IC0xMDBweDtcclxufVxyXG5cclxuLnNraXBMaW5rIGE6Zm9jdXMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxufVxyXG4iXX0= */"] });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "./src/app/app-shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "./src/app/app-shell/footer/footer.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CovidApi';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        } }, directives: [_app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 160px; \r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  \r\n  \r\n  .btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #025fce !important;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYSxFQUFFLDRDQUE0QztJQUMzRCx5QkFBeUI7RUFDM0I7O0VBRUEsK0JBQStCOztFQUUvQjtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTs7SUFFRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgXHJcbiAgLyogT3ZlcnJpZGUgQm9vdHN0cmFwIFN0eWxpbmcgKi9cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNWZjZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBidXR0b246Zm9jdXMsXHJcbiAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-shell/list/list.module */ "./src/app/app-shell/list/list.module.ts");
/* harmony import */ var _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-shell/grid/grid.module */ "./src/app/app-shell/grid/grid.module.ts");
/* harmony import */ var _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-shell/master-detail/master-detail.module */ "./src/app/app-shell/master-detail/master-detail.module.ts");
/* harmony import */ var _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-shell/nav-bar/nav-bar.component */ "./src/app/app-shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-shell/footer/footer.component */ "./src/app/app-shell/footer/footer.component.ts");
/* harmony import */ var _service_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service.interceptor */ "./src/app/service.interceptor.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_10__["ServiceInterceptor"],
                multi: true
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
                _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_7__["MasterDetailModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
        _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
        _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_7__["MasterDetailModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _app_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _app_shell_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"],
                    _app_shell_grid_grid_module__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                    _app_shell_master_detail_master_detail_module__WEBPACK_IMPORTED_MODULE_7__["MasterDetailModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_10__["ServiceInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/service.interceptor.ts ***!
  \****************************************/
/*! exports provided: ServiceInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInterceptor", function() { return ServiceInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ServiceInterceptor = /** @class */ (function () {
    function ServiceInterceptor() {
    }
    ServiceInterceptor.prototype.intercept = function (req, next) {
        // WTS TODO: You can personalize your http interception (token for login, handle errors, redirections, loggers ...)
        // More information in:
        // https://angular.io/api/common/http/HttpInterceptor
        // https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
        return next.handle(req);
    };
    ServiceInterceptor.ɵfac = function ServiceInterceptor_Factory(t) { return new (t || ServiceInterceptor)(); };
    ServiceInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceInterceptor, factory: ServiceInterceptor.ɵfac, providedIn: 'root' });
    return ServiceInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: WarningMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageComponent", function() { return WarningMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WarningMessageComponent = /** @class */ (function () {
    function WarningMessageComponent() {
        this.open = false;
        this.text = '';
        this.warningMessageOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WarningMessageComponent.prototype.ngOnInit = function () { };
    WarningMessageComponent.prototype.onWarningClose = function () {
        this.text = '';
        this.open = false;
        this.warningMessageOpen.emit(this.open);
    };
    WarningMessageComponent.ɵfac = function WarningMessageComponent_Factory(t) { return new (t || WarningMessageComponent)(); };
    WarningMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WarningMessageComponent, selectors: [["app-warning-message"]], inputs: { text: "text" }, outputs: { warningMessageOpen: "warningMessageOpen" }, decls: 5, vars: 1, consts: [["role", "alert", 1, "alert", "alert-warning", "ml-3", "warningPosition"], ["aria-label", "Close", 1, "close", "ml-2", 3, "click"], ["aria-hidden", "true"]], template: function WarningMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningMessageComponent_Template_button_click_2_listener() { return ctx.onWarningClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.text, "\n");
        } }, styles: [".warningPosition[_ngcontent-%COMP%] {\r\n    position: fixed !important;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dhcm5pbmctbWVzc2FnZS93YXJuaW5nLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93YXJuaW5nLW1lc3NhZ2Uvd2FybmluZy1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FybmluZ1Bvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */"] });
    return WarningMessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-warning-message',
                templateUrl: './warning-message.component.html',
                styleUrls: ['./warning-message.component.css']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], warningMessageOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/warning-message/warning-message.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/warning-message/warning-message.module.ts ***!
  \******************************************************************/
/*! exports provided: WarningMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningMessageModule", function() { return WarningMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _warning_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warning-message.component */ "./src/app/shared/warning-message/warning-message.component.ts");




var WarningMessageModule = /** @class */ (function () {
    function WarningMessageModule() {
    }
    WarningMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WarningMessageModule });
    WarningMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WarningMessageModule_Factory(t) { return new (t || WarningMessageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return WarningMessageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WarningMessageModule, { declarations: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_warning_message_component__WEBPACK_IMPORTED_MODULE_2__["WarningMessageComponent"]]
            }]
    }], null, null); })();


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
/* Features of development mode in Angular include:
 * an additional change detection cycle
 * printing out hints when the HTML sanitizer is stripping content
 * running deep object comparison checks to detect model changes
 */
var environment = {
    production: false,
    endpoint: {
        list: '/api/list',
        grid: '/api/grid',
        masterdetail: '/api/masterdetail',
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jay/projects/covidApi/CovidApi/CovidApi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map