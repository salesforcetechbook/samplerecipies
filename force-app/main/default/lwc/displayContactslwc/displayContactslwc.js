import { LightningElement,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContctController.getContactList';
export default class DisplayContactslwc extends LightningElement {
    contactList;

    @wire(getContactList) contacts;

    @wire(getContactList) retrieveContacts({error,data}){
        if(data){
            this.contactList = data;
            this.errormessage = undefined;
        }
        else if(error){
            this.contactList = undefined;
            this.errormessage = error;
        }

    }
}   