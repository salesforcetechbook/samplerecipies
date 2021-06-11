import { LightningElement } from 'lwc';

export default class Childev extends LightningElement {
    handleClick(event){
        const messageEvent = new CustomEvent('childmessage', { detail: 'Hi,i came from child' });
         // Dispatches the event.
         this.dispatchEvent(messageEvent);
    }
}