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
        this.items = this.httpService.updateList(prod, this.items);
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
    filteredBy(){
        this.filtered = this.filterService.getFilter(this.prodType, this.items);
    }
}

