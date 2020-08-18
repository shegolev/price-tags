import { Input, Component, Output, EventEmitter, OnInit} from '@angular/core';
import { HttpService} from './service/http.service';
import { FilterService} from './service/filter.sevice';



export class Product{

    constructor(
        public title: string = '',
        public qrcode: string = '',
        public options: any[] = [],
        public display: string = '',
        public chipset: string = '',
        public ram: string = '',
        public video: string = '',
        public battery: string = '',
        public functions: string = '',
        public os: string = '',
        public present: string = '',
        public other: string = '',
        public preorder: boolean = false,
        public byCash: number = 0,
        public oldprice: number = 0,
        public price: number = 0,
        public active: boolean = true,
        public type: string = '',
        public qntPrice: number = 1,
        public multiprice : any[] = [],
        public ownOptions :boolean = false,
        public portativeOptions : any[] = []
    ){}

}

@Component({
    selector: 'create-tsennik-app',
    templateUrl: '../templates/createProduct.html',
    styleUrls: ['../style/style.css', '../style/font-awesome.min.css'],
    providers: [HttpService, FilterService]
})

export class ProductComponent {
    constructor(private httpService: HttpService,
                private filterService : FilterService){}

    today = this.httpService.today;
    product: Product = new Product();
    activeElement = '';
    imagesArray = [
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
    listIsHidden:boolean = true;
    ownOptions:boolean = false;

    @Input() editProduct;
    @Input() productType;


    ngOnChanges(){

        if(this.editProduct.title){
            this.edit(this.editProduct)
        } else {
            this.create();
        }
    }

    openImages (){
        this.listIsHidden = !this.listIsHidden
    }
    edit(val){
        this.product.title = val.title ? val.title : '';
        this.product.qrcode = val.qrcode ? val.qrcode : '';
        this.product.options = val.options ? val.options : [];
        this.product.display = val.display ? val.display : '';
        this.product.chipset = val.chipset ? val.chipset : '';
        this.product.ram = val.ram ? val.ram : '';
        this.product.video = val.video ? val.video : '';
        this.product.battery = val.battery ? val.battery : '';
        this.product.functions = val.functions ? val.functions : '';
        this.product.os = val.os ? val.os : '';
        this.product.present = val.present ? val.present : '';
        this.product.other = val.other ? val.other : '';
        this.product.preorder = val.preorder ? val.preorder : '';
        this.product.byCash = val.byCash ? val.byCash : '';
        this.product.oldprice = val.oldprice ? val.oldprice : '';
        this.product.price = val.price ? val.price : '';
        this.product.active = val.active ? val.active : '';
        this.product.type = val.type ? val.type : '';
        this.product.qntPrice = val.qntPrice ? val.qntPrice : '';
        this.product.multiprice  = val.multiprice ? val.multiprice : [];
        this.product.ownOptions  = val.ownOptions ? val.ownOptions : false;
        this.product.portativeOptions  = val.portativeOptions ? val.portativeOptions : [];
    }
    create(){
        this.product = new Product();
        this.product.type = this.productType;
    }
    save(){
        this.productFormChange.emit(this.product);
    }

    setOwnOptions() {
        this.ownOptions = !this.ownOptions;
    }
    addOptionImage(img){
        let option = {
            icon:img,
            name:''
        };
        this.product.options.push(option);
        this.listIsHidden = !this.listIsHidden;
    }

    addMultiPrice() {
        let priseItem = {
            title: '',
            price:0
        }
        this.product.multiprice.push(priseItem);
    }
    addNewOwnOption() {

        const newoption = {
                title:'',
                text:''
        };
        this.product.portativeOptions.push(newoption)
    }

    remove(index, array){
        array.splice(index, 1)
    }

    setClass(byCash, oldprice) {
        if(byCash > 0 || byCash == 0 && oldprice == 0) {
            return 'colorBlack'
        }
    }

    setActiveElement(element){
        switch (element){
            case 'title': return this.activeElement == 'title' ? this.activeElement = '' : this.activeElement = 'title';
            case 'options': return this.activeElement == 'options' ? this.activeElement = '' : this.activeElement = 'options';
            case 'info': return this.activeElement == 'info' ? this.activeElement = '' : this.activeElement = 'info';
            case 'price': return this.activeElement == 'price' ? this.activeElement = '' : this.activeElement = 'price';
            default : ''
        }
    }
    @Output() productFormChange = new EventEmitter<any>();
}
