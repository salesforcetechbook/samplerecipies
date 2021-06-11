import { LightningElement,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
export default class Accountrecordcreationlwc extends LightningElement {
    selectedIndustry;
    phone;
    name;
    accountId;
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: INDUSTRY_FIELD
    }) industryValues;
    handleNameChange(event) {       
        this.name = event.target.value;
    }
    handlephoneChange(event){
        this.phone = event.target.value;
    }
    handleindustryChange(event){
        this.selectedIndustry = event.target.value;
    }
    createAccount(){
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[INDUSTRY_FIELD.fieldApiName] = this.selectedIndustry;
        fields[ACCOUNT_PHONE.fieldApiName] = this.phone;
        const recordInput =  { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
        .then(account =>{
            console.log('-->'+JSON.stringify(account));
            this.accountId = account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created'+ this.accountId,
                    variant: 'success',
                }),
            );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });

    }
}