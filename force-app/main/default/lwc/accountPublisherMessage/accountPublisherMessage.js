import { LightningElement} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.retrieveAccounts';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
export default class AccountPublisherMessage extends LightningElement {
     context = createMessageContext(); 
     accountList=[];
    connectedCallback(){
        getAccounts()
            .then(result =>{
                console.log('--->'+JSON.stringify(result));
                this.accountList = result;
            })
            .catch(error=>{
                this.accountList = error;
            });

    }
    handleClick(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, SAMPLEMC, message);
    }
    disconnectedCallback() {
            releaseMessageContext(this.context);
    }
}