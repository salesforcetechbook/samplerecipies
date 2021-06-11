import { LightningElement,api, wire} from 'lwc';
import getRecords from '@salesforce/apex/Utilitycls.getRecords';
export default class DesignProperties1 extends LightningElement {
    @api objectName;
    recordsList=[];
    sobjectName;
    @wire(getRecords,{objName:'$sobjectName'}) records;
    get recordsname(){
        if(this.objectName){ 
            this.sobjectName = this.objectName;          
            return this.objectName+' Records';
        }
    }
}