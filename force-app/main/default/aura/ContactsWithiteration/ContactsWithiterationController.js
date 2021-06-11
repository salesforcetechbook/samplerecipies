({
    retrieveContactList : function(component, event, helper) {
        var action = component.get("c.retrieveContacts");
        /*action.setParams({
            recordId: component.get("v.recordId")
        });*/
        action.setCallback(this, function(data) {
            component.set("v.Contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);

    }
})
