var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_service_1 = require('./service/http.service');
var filter_sevice_1 = require('./service/filter.sevice');
var AppComponent = (function () {
    function AppComponent(httpService, filterService) {
        this.httpService = httpService;
        this.filterService = filterService;
        this.today = this.httpService.today;
        this.modalOpen = false;
        this.productOnEdit = {};
        this.prodType = 'smartphone';
    }
    AppComponent.prototype.ngOnChanges = function (changes) {
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) {
            _this.items = data['list'];
            _this.filteredBy();
        });
    };
    AppComponent.prototype.addProduct = function (prod) {
        this.openModal();
        var itemsArray = this.items;
        var currentProdIndex = itemsArray.map(function (item) { return item.title; }).indexOf(prod.title);
        if (currentProdIndex !== -1) {
            this.items[currentProdIndex] = prod;
        }
        else {
            this.items.push(prod);
        }
        this.httpService.updateList(this.items);
        this.filteredBy();
        this.httpService.postData();
    };
    AppComponent.prototype.changeProductType = function (type) {
        this.prodType = type;
        this.filteredBy();
    };
    AppComponent.prototype.openModal = function () {
        this.modalOpen = !this.modalOpen;
    };
    AppComponent.prototype.setClass = function (byCash, oldprice) {
        if (byCash > 0 || byCash == 0 && oldprice == 0) {
            return 'colorBlack';
        }
    };
    AppComponent.prototype.create = function () {
        this.productOnEdit = {};
        this.openModal();
    };
    AppComponent.prototype.edit = function (product) {
        this.prodType = product.type;
        this.productOnEdit = product;
        this.openModal();
    };
    AppComponent.prototype.copy = function (product) {
        var copied = new CopiedProduct(product);
        this.items.push(copied);
        this.filteredBy();
    };
    AppComponent.prototype.delete = function (product) {
        var prodIndex = this.items.map(function (item) { return item.title; }).indexOf(product.title);
        this.items.splice(prodIndex, 1);
        this.httpService.updateList(this.items);
        this.filteredBy();
        this.httpService.postData();
    };
    AppComponent.prototype.filteredBy = function () {
        this.filtered = this.filterService.getFilter(this.prodType, this.items);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'tsennik-app',
            templateUrl: '../templates/main.html',
            styleUrls: ['../style/style.css', '../style/font-awesome.min.css'],
            providers: [http_service_1.HttpService, filter_sevice_1.FilterService]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
function CopiedProduct(data) {
    this.title = data.title ? data.title + ' copy' : '';
    this.qrcode = data.qrcode ? data.qrcode : '';
    this.options = data.options ? data.options : '';
    this.display = data.display ? data.display : '';
    this.chipset = data.chipset ? data.chipset : '';
    this.ram = data.ram ? data.ram : '';
    this.video = data.video ? data.video : '';
    this.battery = data.battery ? data.battery : '';
    this.functions = data.functions ? data.functions : '';
    this.os = data.os ? data.os : '';
    this.present = data.present ? data.present : '';
    this.other = data.other ? data.other : '';
    this.preorder = data.preorder ? data.preorder : '';
    this.byCash = data.byCash ? data.byCash : '';
    this.oldprice = data.oldprice ? data.oldprice : '';
    this.price = data.price ? data.price : '';
    this.active = data.active ? data.active : '';
    this.type = data.type ? data.type : '';
}
//# sourceMappingURL=app.component.js.map