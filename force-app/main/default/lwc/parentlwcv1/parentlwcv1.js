import { LightningElement } from 'lwc';

export default class Parentlwcv1 extends LightningElement {
    messagefromparent;
    handlechange(event){
        this.messagefromparent = event.target.value;       
    }
}