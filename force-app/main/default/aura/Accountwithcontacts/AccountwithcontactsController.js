({
    retrieveAccountList : function(component, event, helper) {     

        var action = component.get("c.retrieveAccounts");        
        action.setCallback(this, function(data) {
            component.set("v.Accounts", data.getReturnValue());
        });
        $A.enqueueAction(action);

    }
})