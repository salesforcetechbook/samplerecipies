({
	 handleSaveRecord: function(component, event, helper) {
         component.find("recordEditor").saveRecord($A.getCallback(function(saveResult){
             if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){
                  console.log("Save completed successfully.");
                 component.find('notifLib').showToast({
                    "variant": "success",
                    "title": " Contact Created",
                    "message": "Contact Record is Created successfully."
                });
             }
             else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } 
             else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' +
                           JSON.stringify(saveResult.error));
            } 
            else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
         }));
	}
})