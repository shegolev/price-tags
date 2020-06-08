import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
import { HttpService} from './service/http.service';
import { FilterService} from './service/filter.sevice';

@Component({
    selector: 'tsennik-app',
    templateUrl: '../templates/main.html',
    styleUrls: ['../style/style.css', '../style/font-awesome.min.css'],
    providers: [HttpService, FilterService]
})
export class AppComponent implements OnInit, OnChanges  {

    items: any[];
    today = this.httpService.today;
    modalOpen = false;
    productOnEdit = {};
    prodType = 'smartphone';
    filtered: any[];

    constructor(private httpService: HttpService,
                private filterService : FilterService){}

    ngOnChanges(changes){

    }

    ngOnInit(){
         this.httpService.getData().subscribe(data => {
             this.items = data['list'];
             this.filteredBy();
        });
    }
    addProduct(prod){
        this.openModal();
        let itemsArray = this.items;
        let currentProdIndex = itemsArray.map(item => item.title).indexOf(prod.title);

        if(currentProdIndex !== -1) {
            this.items[currentProdIndex] = prod;
        } else {
            this.items.push(prod);
        }

        this.httpService.updateList(this.items);
        this.filteredBy();
        this.httpService.postData();
    }
    changeProductType(type){
        this.prodType = type;
        this.filteredBy();
    }
    openModal(){
        this.modalOpen = !this.modalOpen;
    }
    setClass(byCash, oldprice) {
       if(byCash > 0 || byCash == 0 && oldprice == 0) {
           return 'colorBlack'
       }
    }
    create(){
        this.productOnEdit = {};
        this.openModal();
    }
    edit(product){
        this.prodType = product.type;
        this.productOnEdit = product;
        this.openModal();
    }

    copy(product){
        let copied = new CopiedProduct(product);
        this.items.push(copied)
        this.filteredBy();
    }
    delete(product){

        let prodIndex = this.items.map(item => item.title).indexOf(product.title);
        this.items.splice(prodIndex, 1);
        this.httpService.updateList(this.items);
        this.filteredBy();
        this.httpService.postData();
    }
    filteredBy(){
        this.filtered = this.filterService.getFilter(this.prodType, this.items);
    }
}

function CopiedProduct(data){
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

