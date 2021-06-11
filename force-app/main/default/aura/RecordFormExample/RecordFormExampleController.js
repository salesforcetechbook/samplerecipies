({
	handleSubmit : function(component, event, helper) {
         event.preventDefault(); 
		const fields = event.getParam('fields');
        fields.Industry = 'Engineering'; // modify a field
        component.find('myrecfrom').submit(fields);
	},
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Account Updated",
            "message": "Account Record is updated successfully."
        });
    }
})