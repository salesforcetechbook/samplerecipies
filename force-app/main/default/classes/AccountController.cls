public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> retrieveAccounts(){
        List<Account> accountList = [select id,name from Account limit 20];
        return accountList; 
    }
}