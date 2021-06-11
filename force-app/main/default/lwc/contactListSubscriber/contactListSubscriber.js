import { LightningElement,wire,api,track} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners} from 'c/pubsub';
import findContactByAccountId from '@salesforce/apex/ContctController.retrieveContacts';
const columns = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName'},
    { label: 'Email', fieldName: 'Email', type: 'email' },    
];
export default class ContactListSubscriber extends LightningElement {
    accountId;
    contactList;
    message;
    columns = columns;
    @wire(CurrentPageReference) pageRef;
    @wire(findContactByAccountId,{accountId:'$accountId'}) 
        contacts({error,data}){
            if(data){               
                if(data.length>0){
                    this.contactList = data;
                    this.message = undefined;
                }
                else{
                    this.message = 'No Records Found';
                    this.contactList = undefined;
                }
            }
            
        }

    connectedCallback() {
        console.log('hello balaji remoaved');
        registerListener('messagesend', this.handlemessagesend, this);
    }
    handlemessagesend(publisherMessage) {      
        this.accountId = publisherMessage;
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}