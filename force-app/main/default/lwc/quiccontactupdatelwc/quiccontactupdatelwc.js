import { LightningElement,api,wire,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { getRecord,getFieldValue} from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
const FIELDS = ['Contact.Name', 'Contact.Phone'];
export default class Quiccontactupdatelwc extends LightningElement {
    @api recordId;
    contact;
    lastname;
    firstname;   
    @wire(getRecord,{ recordId: '$recordId', fields:FIELDS}) 
     retrieveContact({ error, data }){
        this.contact = data;
        this.firstname = this.contact.fields.Name.value;
        this.lastname = this.contact.fields.Phone.value; 
        alert(JSON.stringify(data));
    }
    

    handlefnameChange(event){
        this.firstname = event.target.value;
    }
    handlelnameChange(event){
        this.lastname = event.target.value;
    }


    updateContact() {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[FIRSTNAME_FIELD.fieldApiName] = this.firstname;
        fields[LASTNAME_FIELD.fieldApiName] = this.lastname;
        const recordInput = { fields };
        updateRecord(recordInput)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact updated',
                        variant: 'success'
                    })
                );                
                eval("$A.get('e.force:refreshView').fire();");
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });


    }


}