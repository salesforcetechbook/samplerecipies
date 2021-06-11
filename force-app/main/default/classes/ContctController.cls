public with sharing class ContctController {
    public ContctController() {

    }
    @AuraEnabled    
    public static List<Contact> retrieveContacts(){
        List<Contact> contactList = [select id,firstName,lastName,leadsource,Phone from Contact];
        return contactList;
    }


    @AuraEnabled(cacheable=true)  
    public static List<Contact> retrieveContacts(String accountId){
        List<Contact> contactList = [select id,firstName,lastName,leadsource,Phone from Contact         
                                     where AccountId = : accountId];
        return contactList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, FirstName,LastName, Title, Phone, Email
            FROM Contact   
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactRecords(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, LastName 
            FROM Contact 
            WHERE LastName LIKE :key 

            LIMIT 10];
    }
   
    @AuraEnabled
    public static string deleteSelectedContacts(List<String> contactIdList){       
        List<Contact> contactList = new List<Contact>();
        contactList = [select id from Contact where id in:contactIdList];
        if(contactList!=null && contactList.size()>0){
            try{
                delete contactList;
                return 'Contacts deleted successfully';
            }
            catch(Exception e){
                return e.getMessage();
            }  
        }
        else{
                return 'No Contacts Found';
        }        
    }

}