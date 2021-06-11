import { LightningElement } from 'lwc';

export default class Parentcompev extends LightningElement {
    message='Parent message';
    hanldMessage(event){
        this.message = event.detail;
    }
}