({
	
	handleSubmit : function(component, event, helper) {
         event.preventDefault(); 
		const fields = event.getParam('fields');
        fields.AccountId = component.get("v.recordId"); // modify a field
        component.find('myrecfrom').submit(fields);
	},
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Contact Created",
            "message": "Contact Record is updated successfully."
        });
    }
})