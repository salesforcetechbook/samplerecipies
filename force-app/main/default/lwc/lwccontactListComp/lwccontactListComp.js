
import { LightningElement,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContctController.getContactList';
export default class LwccontactListComp extends LightningElement {
    @wire(getContactList) contacts;
    sendidtoAura(event){
        event.preventDefault();
        const contactDeleteEvent = new CustomEvent('selectedcontact',{detail:{contactid:event.target.dataset.contid}}); 
        this.dispatchEvent(contactDeleteEvent);   
    }
}