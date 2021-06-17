import { LightningElement,track,api } from 'lwc';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class PlatformEventExample extends LightningElement {
    channelName = '/event/TestEvent__e';
    isSubscribeDisabled = false;
    isUnsubscribeDisabled = !this.isSubscribeDisabled;
    subscription = {};
    @api accountName='Balaji';
    // Tracks changes to channelName text field
    handleChannelName(event) {
        this.channelName = event.target.value;
    }
     // Initializes the component
     connectedCallback() {       
        // Register error listener       
        this.registerErrorListener();     
        this.handleSubscribe(); 
    }

     // Handles subscribe button click
     handleSubscribe() {
                 // Callback invoked whenever a new event message is received
        

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, this.messageCallback).then(response => {
            // Response contains the subscription information on subscribe call
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
            this.toggleSubscribeButton(true);
        });
    }
     // Handles unsubscribe button click
     handleUnsubscribe() {
        this.toggleSubscribeButton(false);

        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }


    toggleSubscribeButton(enableSubscribe) {
        this.isSubscribeDisabled = enableSubscribe;
        this.isUnsubscribeDisabled = !enableSubscribe;
    }

    messageCallback  = (response) => {
        console.log('New message received : ', JSON.stringify(response));
        //this.payload = JSON.stringify(response);
        this.accountName = response.data.payload.RecordChange__c;
        const toastEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Account '+this.accountName+'Created Successfully!!',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
      
        // Response contains the payload of the new message received
    }
    /*messageCallback(response) {
        console.log('New message received: ', JSON.stringify(response));
        console.log('Account Name21');
        console.log('Account Name',response.data.payload.RecordChange__c);
        var ctrName = response.data.payload.RecordChange__c;
        this.accountName = ctrName;
        console.log('-----'+ this.accountName);
        alert(this.accountName);
     
        // Response contains the payload of the new message received
    }*/
}