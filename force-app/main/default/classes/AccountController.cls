public with sharing class AccountController {  
    public String accountId{get;set;}
    public Account actObj{get;set;}
    public AccountController() {
        actObj = new Account();
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> retrieveAccounts(){
        List<Account> accountList = [select id,name,type from Account limit 20];
        return accountList; 
    }
    @AuraEnabled
    public static List<Account> createAccounts(List<Account> accountList){
        insert accountList;
        return accountList;
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName){
        List<Account> accountList = new List<Account>();
        if(actName!=''){
            String accountName = '%' + actName + '%';
            accountList = [select id,name from Account where name like:accountName];
            return accountList;  
        }
        return accountList;              
    }

    @AuraEnabled  
    public static List<Account> getAccounts(){
        List<Account> accountList = new List<Account>();
        accountList = [select id,name,Type,Industry from Account   order by createdDate Desc limit 5];
        return accountList;
    }


    public pageReference retrieveAccountDetail(){
        if(accountId!=null){
             actObj = [select id,name,type,industry from Account where id=:accountId];
            
        }       
		return null;        
    }    
}