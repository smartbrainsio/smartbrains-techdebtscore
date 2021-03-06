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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chart {\n    max-width: 450px;\n    margin: 35px auto;\n}\n#historychart {\n    max-width: 650px;\n    margin: 35px auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnQge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiAzNXB4IGF1dG87XG59XG4jaGlzdG9yeWNoYXJ0IHtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIG1hcmdpbjogMzVweCBhdXRvO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\"class=\"container\">\n  <h1>\n    {{title}}\n  </h1>\n  <div class=\"container\">\n    <p>Score History Message: <span>{{data['scoreHistoryData']}}</span></p>\n    <p>Current Score Message: <span>{{data['currentScoreData']}}</span></p>\n    <p>Score Features: <span>{{data['iModelAllFeatures']}}</span></p>\n  </div>\n\n  <!--The content below is only a placeholder and can be replaced.-->\n  <div class=\"container\" style=\"width: 100%;\">\n    <div style=\"width: 50%; height: 100px; float: left;\"> \n\n      <div id=\"historychart\">\n        <apx-chart\n          [series]=\"historyChartOptions.series\"\n          [chart]=\"historyChartOptions.chart\"\n          [xaxis]=\"historyChartOptions.xaxis\"\n          [title]=\"historyChartOptions.title\"\n        ></apx-chart>\n      </div>\n\n    </div>\n    <div style=\"margin-left: 50%; height: 100px;\"> \n\n      <div id=\"chart\">\n        <apx-chart\n          [series]=\"chartOptions.series\"\n          [chart]=\"chartOptions.chart\"\n          [xaxis]=\"chartOptions.xaxis\"\n          [title]=\"chartOptions.title\"\n        ></apx-chart>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'Tech Debt Score';
        this.data = {};
        //Get the data
        http.get('/feature/dashboard').subscribe(function (data) { return _this.data = data; });
        console.log('This Data: ' + this.data);
        console.log('This Data ZERO: ' + this.data[0]);
        console.log('This Data JSON: ' + JSON.stringify(this.data));
        this.chartOptions = {
            series: [
                {
                    name: "Current Score",
                    data: [89, 90, 94, 98, 87, 89, 75, 91]
                }
            ],
            chart: {
                height: 350,
                type: "radar"
            },
            title: {
                text: "Current Score"
            },
            xaxis: {
                categories: [
                    this.data['features'][0]['name'],
                    this.data['features'][1]['name'],
                    this.data['features'][2]['name'],
                    this.data['features'][3]['name'],
                    this.data['features'][4]['name'],
                    this.data['features'][5]['name'],
                    this.data['features'][6]['name'],
                    this.data['features'][7]['name']
                    /*
                    "Code Style & Formatting",
                    "Modularity & Coupling",
                    "Test Coverage & Automation",
                    "CI/CD & Changes",
                    "EOSL & Lifecycle",
                    "Documentation",
                    "Homogenity of Tech Stack",
                    "Architectural Complexity"
                    */
                ]
            }
        };
        this.historyChartOptions = {
            series: [
                {
                    name: "Code Style & Formatting",
                    data: [41, 37, 100, 94, 89]
                },
                {
                    name: "Modularity & Coupling",
                    data: [33, 52, 90, 90, 90]
                },
                {
                    name: "Test Coverage & Automation",
                    data: [11, 9, 78, 78, 94]
                },
                {
                    name: "CI/CD & Changes",
                    data: [5, 8, 6, 88, 98]
                },
                {
                    name: "EOSL & Lifecycle",
                    data: [19, 32, 25, 87, 87]
                },
                {
                    name: "Documentation",
                    data: [19, 32, 25, 89, 89]
                },
                {
                    name: "Homogenity of Tech Stack",
                    data: [19, 32, 25, 75, 75]
                },
                {
                    name: "Architectural Complexity",
                    data: [19, 32, 25, 23, 91]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            stroke: {
                width: 1,
                colors: ["#fff"]
            },
            title: {
                text: "Score History"
            },
            xaxis: {
                categories: [2016, 2017, 2019, 2020, 2021],
                labels: {
                    formatter: function (val) {
                        return val + "";
                    }
                }
            },
            yaxis: {
                title: {
                    text: undefined
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "";
                    }
                }
            },
            fill: {
                opacity: 1
            },
            legend: {
                position: "top",
                horizontalAlign: "left",
                offsetX: 40
            }
        };
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("chart"),
        __metadata("design:type", ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], AppComponent.prototype, "chart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("historychart"),
        __metadata("design:type", ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"])
    ], AppComponent.prototype, "historychart", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/jhurff/projects/jhurff/smartbrains/tools/smartbrains-techdebtscore/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map