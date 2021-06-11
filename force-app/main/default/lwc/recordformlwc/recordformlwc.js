import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import OPPNAME from '@salesforce/schema/Opportunity.Name';
import STAGENAME from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE from '@salesforce/schema/Opportunity.CloseDate';
export default class Recordformlwc extends NavigationMixin(LightningElement) {
    fields = [OPPNAME, STAGENAME, CLOSEDATE];
    handleSuccess(event){        
        const evt = new ShowToastEvent({
            title: "Opportunity created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Opportunity',
                actionName: 'view'
            },
        });
    }

}