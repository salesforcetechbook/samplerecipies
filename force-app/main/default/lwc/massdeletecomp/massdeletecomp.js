import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/ContctController.getContactList';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import deleteSelectedContacts from '@salesforce/apex/ContctController.deleteSelectedContacts';
const columns = [
    {label: 'First Name', fieldName: 'FirstName', type: 'text'},
    {label: 'Last Name', fieldName: 'LastName', type: 'text'},    
];
export default class Massdeletecomp extends LightningElement {
    error;
    columns = columns;
    @wire(getContactList) contacts;
    selectedIdList=[];
    getSelectedName(event) { 
        this.selectedIdList = [];
        const selectedRows = event.detail.selectedRows;
        for (let i = 0; i < selectedRows.length; i++){                      
            this.selectedIdList.push(selectedRows[i].Id);
        }
    }
    deleteselectedRecords(){
        if(this.selectedIdList){    
            
            deleteSelectedContacts({contactIdList:this.selectedIdList})
            .then(result => {               
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: result,
                        variant: 'success'
                    })
                );
                  //for clearing selected row indexs 
                this.template.querySelector('lightning-datatable').selectedRows = [];
                return refreshApex(this.contacts); 
            }).catch(error => {
                this.error = error;
            });


        }
    }

}