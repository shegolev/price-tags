var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var HttpService = (function () {
    function HttpService(http) {
        var _this = this;
        this.http = http;
        this.allData = [];
        this.today = new Date();
        this.getData().subscribe(function (data) {
            _this.allData = data['list'];
        });
    }
    HttpService.prototype.getData = function () {
        return this.http.get('data/list.json');
    };
    HttpService.prototype.updateList = function (arr) {
        this.allData = arr;
        return this.allData;
    };
    HttpService.prototype.getQR = function (url) {
    };
    HttpService.prototype.postData = function () {
        var data = this.allData;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/x-www-urlencoded');
        this.http.post('./data/saveFile.php', JSON.stringify({ "list": this.allData }), {
            headers: headers
        }).subscribe(function (res) {
            console.log('post result %o', res);
        });
    };
    HttpService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], HttpService);
    return HttpService;
})();
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map