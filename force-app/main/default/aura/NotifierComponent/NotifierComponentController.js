({
	fireComponentEvent : function(component, event, helper) {
		var cmpEvent = component.getEvent("cmpEvent");
        cmpEvent.setParams({"message" : "I am your child"});  
        cmpEvent.fire();
	}
})