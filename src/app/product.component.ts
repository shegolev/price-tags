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
        public os: string = '',
        public present: string = '',
        public other: string = '',
        public byCash: number = 0,
        public oldprice: number = 0,
        public price: number = 0,
        public active: boolean = true,
        public type: string = ''
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
        "assets/img/processor_kirin.png"
    ];
    listIsHidden:boolean = true;
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
        this.product = val;
    }
    create(){
        this.product = new Product();
        this.product.type = this.productType;
    }
    save(){
        this.productFormChange.emit(this.product);
    }
    removeOption(index){
        this.product.options.splice(index, 1);
    }
    addOptionImage(img){
        let option = {
            icon:img,
            name:''
        };
        this.product.options.push(option);
        this.listIsHidden = !this.listIsHidden;
    }

    setClass(byCash, oldprice) {
        if(byCash > 0 || byCash == 0 && oldprice == 0) {
            return 'colorBlack'
        }
    }
    @Output() productFormChange = new EventEmitter<any>();
}
