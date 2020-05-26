export class FilterService {
    getFilter(typeName:string, array:any){

        let filtered: string[];
        let pristineArr = array;

        if(typeName != null){
           filtered = pristineArr.filter(item => {
                return item.type.toLowerCase().indexOf(typeName.toLowerCase()) > -1;
            });
            pristineArr = filtered
        }


        return pristineArr
    }
}