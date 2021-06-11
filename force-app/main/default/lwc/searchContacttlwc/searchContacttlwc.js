import { LightningElement,wire } from 'lwc';
import findContacts from '@salesforce/apex/ContctController.findContactRecords';
const DELAY = 300;
export default class SearchContacttlwc extends LightningElement {
    searchKeyfrmJS = '';
    @wire(findContacts, { searchKey: '$searchKeyfrmJS' })
    contacts;
    handleKeyChange(event) {
        window.clearTimeout(this.delayTimeout);
        const searchValue = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKeyfrmJS = searchValue;
        }, DELAY);
    }
}