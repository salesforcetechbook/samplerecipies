public with sharing class WrapperController {
    public class Employeecls{
        @AuraEnabled        
        public String name{get;set;}  
        @AuraEnabled
        public String employeeNumber{get;set;}
    }
    @AuraEnabled 
    public static  List<Employeecls> getAllEmployees(){
        List<Employeecls> employeeList = new List<Employeecls>();
        for(integer i=0;i<20;i++){
            Employeecls empObj = new Employeecls();
            empObj.name = 'Employee-'+i;
            empObj.employeeNumber = 'Emp No:'+i;
            employeeList.add(empObj);
        }        
        return employeeList;
    }

}
