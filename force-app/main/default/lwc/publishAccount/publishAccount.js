import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import getAccounts from '@salesforce/apex/AccountController.retrieveAccounts';
export default class PublishAccount extends LightningElement {
    @wire(getAccounts) accounts;
    @wire(CurrentPageReference) pageRef;
    publishMessage(event){
        event.preventDefault();   
        fireEvent(this.pageRef,'messagesend',event.target.dataset.accountid);
    }
}