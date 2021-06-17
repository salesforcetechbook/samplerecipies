import { LightningElement } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class SubscriberMessage extends LightningElement {
    context = createMessageContext();
    subscription = null;
    receivedMessage = '';
    accountId;
    objectApiName='Account';
    fields = [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
    }
    unsubscribeMC() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.accountId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }

    disconnectedCallback() {
        releaseMessageContext(this.context);
    }
}   