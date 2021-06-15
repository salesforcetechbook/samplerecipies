import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import PHONE from '@salesforce/schema/Account.Phone';
export default class DropComponent extends LightningElement {
    fields = [NAME_FIELD, INDUSTRY, PHONE];
    accountId;
    dropElelment(event){
        console.log('hi value'+event.dataTransfer.getData("account_id"));
        this.accountId = event.dataTransfer.getData("account_id");
        this.message='';
    }
    allowDrop(event){
        event.preventDefault();
    }
}