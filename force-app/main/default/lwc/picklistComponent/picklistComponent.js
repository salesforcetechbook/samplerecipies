import { LightningElement,wire} from 'lwc';
import getProfiles from '@salesforce/apex/PicklistHelper.getProfiles';
export default class PicklistComponent extends LightningElement {
    profileOptionsList =[];
    selectedProfile;
    selectedValue;
    error;
    /*Static Values*/
    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
    @wire(getProfiles) 
        retrieveProfiles({error,data}){
            if(data){
                let tempArray = [];
              for(let key in data){              
                    console.log(key+'-->'+data[key]);               
                    tempArray.push({label:data[key],value:key});
               }
               this.profileOptionsList = tempArray;
                console.log('profiles Information:'+JSON.stringify(this.profileOptionsList));
            }
            else if (error) {               
                this.error = error;
            }

        }

    handleProfileChange(event){        
        this.selectedProfile = event.target.value;
        //this.template.querySelector("[data-id='selectId']").value = this.selectedProfile;
        this.template.querySelector('select.selectProfileList').value=this.selectedProfile;        
    }
     /* Process  values  on change*/
     handleChange(event) {
        this.selectedValue = event.detail.value;
    }  
}