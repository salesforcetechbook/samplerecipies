import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.retrieveAccounts';

export default class DragComponent extends LightningElement {
    @wire(getAccounts) accounts;
    handleDragStart(event){
        console.log('hi'+event.target.dataset.item);
        event.dataTransfer.setData("account_id", event.target.dataset.item);
    }
}