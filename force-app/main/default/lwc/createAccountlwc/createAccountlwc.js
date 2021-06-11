import { LightningElement,track } from 'lwc';
import createAccountRecord from '@salesforce/apex/AccountCreationController.createAccount'; 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
export default class CreateAccountlwc extends LightningElement {
    error;   
    @track accountRecord = {
        [ACCOUNT_NAME.fieldApiName]:'',
        [ACCOUNT_INDUSTRY.fieldApiName]:'',
        [ACCOUNT_PHONE.fieldApiName]:'',
        [ACCOUNT_TYPE.fieldApiName]:''
    };
    handleNameChange(event){
        console.log('accout Record with Handle Change with change:'+JSON.stringify(this.accountRecord));
        this.accountRecord.Name = event.target.value;
    }
    handleTypeChange(event){
        console.log('accout Record with Handle Change with change:'+JSON.stringify(this.accountRecord));
        this.accountRecord.Type = event.target.value;
    }
    handleIndustryChange(event){
        this.accountRecord.Industry = event.target.value;
    }
    handlePhoneChange(event){
        this.accountRecord.Phone = event.target.value;
    }
    createAccountRec(){
        createAccountRecord({accountRec:this.accountRecord})
        .then(result=>{
                this.accountRecord = {};
                window.console.log('Result:::'+result.Id);
                const toastEvent = new ShowToastEvent({
                    title: 'Success!',
                    message: 'Account Created Successfully!!',
                    variant: 'success'
                });
                this.dispatchEvent(toastEvent);
                winow.console.log('Result::'+JSON.stringify(result));
        })
        .catch(error=>{
            this.error = error.message;
        });


    }
}