import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({providedIn: 'root'})
export class HttpService{

    private allData: any[] = [];
    public today = new Date();

    constructor(private http: HttpClient){
        this.getData().subscribe(data => {
            this.allData = data['list'];
        });
    }

    getData(){
        return this.http.get('data/list.json');
    }
    updateList(arr){

        this.allData = arr;
        return this.allData;

    }
    getQR(url){

    }
    postData() {
        const data = this.allData;
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-urlencoded');

       this.http.post('./data/saveFile.php', JSON.stringify({"list":this.allData}), {
            headers : headers
        }).subscribe(res => {
            console.log('post result %o', res);

        });

    }

}