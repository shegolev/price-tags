var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_service_1 = require('./service/http.service');
var filter_sevice_1 = require('./service/filter.sevice');
var Product = (function () {
    function Product(id, title, qrcode, options, display, chipset, ram, video, battery, functions, os, present, other, preorder, byCash, oldprice, price, active, type, qntPrice, multiprice, ownOptions, portativeOptions) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = ''; }
        if (qrcode === void 0) { qrcode = ''; }
        if (options === void 0) { options = []; }
        if (display === void 0) { display = ''; }
        if (chipset === void 0) { chipset = ''; }
        if (ram === void 0) { ram = ''; }
        if (video === void 0) { video = ''; }
        if (battery === void 0) { battery = ''; }
        if (functions === void 0) { functions = ''; }
        if (os === void 0) { os = ''; }
        if (present === void 0) { present = ''; }
        if (other === void 0) { other = ''; }
        if (preorder === void 0) { preorder = false; }
        if (byCash === void 0) { byCash = 0; }
        if (oldprice === void 0) { oldprice = 0; }
        if (price === void 0) { price = 0; }
        if (active === void 0) { active = true; }
        if (type === void 0) { type = ''; }
        if (qntPrice === void 0) { qntPrice = 1; }
        if (multiprice === void 0) { multiprice = []; }
        if (ownOptions === void 0) { ownOptions = false; }
        if (portativeOptions === void 0) { portativeOptions = []; }
        this.id = id;
        this.title = title;
        this.qrcode = qrcode;
        this.options = options;
        this.display = display;
        this.chipset = chipset;
        this.ram = ram;
        this.video = video;
        this.battery = battery;
        this.functions = functions;
        this.os = os;
        this.present = present;
        this.other = other;
        this.preorder = preorder;
        this.byCash = byCash;
        this.oldprice = oldprice;
        this.price = price;
        this.active = active;
        this.type = type;
        this.qntPrice = qntPrice;
        this.multiprice = multiprice;
        this.ownOptions = ownOptions;
        this.portativeOptions = portativeOptions;
    }
    return Product;
})();
exports.Product = Product;
var ProductComponent = (function () {
    function ProductComponent(httpService, filterService) {
        this.httpService = httpService;
        this.filterService = filterService;
        this.today = this.httpService.today;
        this.product = new Product();
        this.activeElement = '';
        this.imagesArray = [
            "assets/img/camera.png",
            "assets/img/camera2.png",
            "assets/img/phone.png",
            "assets/img/memory.png",
            "assets/img/batt.png",
            "assets/img/modules.png",
            "assets/img/face.png",
            "assets/img/scaner.png",
            "assets/img/premium.png",
            "assets/img/processor_kirin.png",
            "assets/img/emui.png",
            "assets/img/fire.png",
            "assets/img/processor.png",
            "assets/img/sound.png",
            "assets/img/percent.png",
        ];
        this.listIsHidden = true;
        this.ownOptions = false;
        this.productFormChange = new core_1.EventEmitter();
    }
    ProductComponent.prototype.ngOnChanges = function () {
        if (this.editProduct.title) {
            this.edit(this.editProduct);
        }
        else {
            this.create(this.createProduct);
        }
    };
    ProductComponent.prototype.openImages = function () {
        this.listIsHidden = !this.listIsHidden;
    };
    ProductComponent.prototype.edit = function (val) {
        this.product = val;
    };
    ProductComponent.prototype.create = function (newIndex) {
        this.product = new Product();
        this.product.id = newIndex + 1;
        this.product.type = this.productType;
    };
    ProductComponent.prototype.save = function () {
        console.log(this.product);
        this.productFormChange.emit(this.product);
    };
    ProductComponent.prototype.setOwnOptions = function () {
        this.ownOptions = !this.ownOptions;
    };
    ProductComponent.prototype.addOptionImage = function (img) {
        var option = {
            icon: img,
            name: ''
        };
        this.product.options.push(option);
        this.listIsHidden = !this.listIsHidden;
    };
    ProductComponent.prototype.addMultiPrice = function () {
        var priseItem = {
            title: '',
            price: 0
        };
        this.product.multiprice.push(priseItem);
    };
    ProductComponent.prototype.addNewOwnOption = function () {
        var newoption = {
            title: '',
            text: ''
        };
        this.product.portativeOptions.push(newoption);
    };
    ProductComponent.prototype.remove = function (index, array) {
        array.splice(index, 1);
    };
    ProductComponent.prototype.setClass = function (byCash, oldprice) {
        if (byCash > 0 || byCash == 0 && oldprice == 0) {
            return 'colorBlack';
        }
    };
    ProductComponent.prototype.setActiveElement = function (element) {
        switch (element) {
            case 'title': return this.activeElement == 'title' ? this.activeElement = '' : this.activeElement = 'title';
            case 'options': return this.activeElement == 'options' ? this.activeElement = '' : this.activeElement = 'options';
            case 'info': return this.activeElement == 'info' ? this.activeElement = '' : this.activeElement = 'info';
            case 'price': return this.activeElement == 'price' ? this.activeElement = '' : this.activeElement = 'price';
            default: '';
        }
    };
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "editProduct");
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "productType");
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "createProduct");
    __decorate([
        core_1.Output()
    ], ProductComponent.prototype, "productFormChange");
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'create-tsennik-app',
            templateUrl: '../templates/createProduct.html',
            styleUrls: ['../style/style.css', '../style/font-awesome.min.css'],
            providers: [http_service_1.HttpService, filter_sevice_1.FilterService]
        })
    ], ProductComponent);
    return ProductComponent;
})();
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map