import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContctController.getContactList';
export default class ContactListComp extends LightningElement {
    @wire(getContactList) contacts;
}