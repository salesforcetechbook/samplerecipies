({
	handleComponentEvent : function(component, event, helper) {
		var message1 = event.getParam("message");
        component.set("v.messageFromEvent", message1);
	}
})