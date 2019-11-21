class SortingFactory {
    constructor(type,data){
        this.create = (type,data)
        switch(type){
            case 'selection':
                return new Selection(data)
                break;
            case ''
        }
    }
    
 

}//sorting factory

class Selection {
    
}