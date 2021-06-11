public with sharing class PicklistHelper {
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getProfiles(){
        Map<String,String> profileMap = new Map<String,String>();
        for(Profile profileObj:[select id,name from Profile limit 10]){
            profileMap.put(profileObj.Id,profileObj.Name);
        }
        return profileMap;
    }
}