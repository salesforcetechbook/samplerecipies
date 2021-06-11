({
	add2Numbers : function(component, event, helper) {
		var firstNumber = Number(component.find("fnumber").get("v.value"));
        var secNumber = Number(component.find("snumber").get("v.value"));
        component.find("res").set("v.value",(firstNumber+secNumber));        
	}
})