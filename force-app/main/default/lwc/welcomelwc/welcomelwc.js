import { LightningElement } from 'lwc';

export default class Welcomelwc extends LightningElement {
    welcomemessage='Welcome to World of LWC';

    handleChange(event){
        this.welcomemessage = event.target.value;
    }


}