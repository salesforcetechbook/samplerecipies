import { LightningElement } from 'lwc';

export default class Parentlwc extends LightningElement {
    messagefromparent;
    handlechange(event){
        this.messagefromparent = event.target.value;
        this.template.querySelector('c-child-complwc').acceptMessage(event.target.value);
    }
}