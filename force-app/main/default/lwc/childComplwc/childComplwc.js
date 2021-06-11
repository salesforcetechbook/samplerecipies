import { LightningElement,api } from 'lwc';

export default class ChildComplwc extends LightningElement {
    messagefrommethod;
    @api messageText;
    @api acceptMessage(msg){
        this.messagefrommethod = msg;
    }
}