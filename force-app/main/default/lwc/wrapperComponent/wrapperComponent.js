import { LightningElement } from 'lwc';
import getAllEmployees from '@salesforce/apex/WrapperController.getAllEmployees';
export default class WrapperComponent extends LightningElement {
    employeeList;  
    ishowMessage=false;  

    connectedCallback() {   
        this.retrieveEmployees();
    }
    retrieveEmployees(){
        getAllEmployees()
        .then((result) => {                           
            this.error = undefined;                
            if(result.length == 0){
                this.ishowMessage = false;                   
                this.employeeList = result; 
            }            
            else{
                this.ishowMessage = true;                   
                this.employeeList = result; 
            }       
        })
        .catch((error) => {
            this.error = error;                
        });

    }
}