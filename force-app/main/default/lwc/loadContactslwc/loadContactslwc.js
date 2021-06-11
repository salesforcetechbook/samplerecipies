import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContctController.getContactList';
export default class LoadContactslwc extends LightningElement {
    contacts;
    error;
    handleLoad() {
        getContactList()
        .then(result=>{
            this.contacts = result;
        })
        .catch(error=>{
            this.error=error;
        });


    }
}