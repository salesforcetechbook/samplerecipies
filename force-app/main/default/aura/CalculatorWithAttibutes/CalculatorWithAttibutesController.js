({
	add2Numbers : function(component, event, helper) {
		var fnumber = Number(component.get("v.fstNumber"));
        var snumber = Number(component.get("v.secNumber"));
        component.set("v.resultVal",(fnumber+snumber));        
        var eventObj = $A.get("e.c:AppEvent");
        eventObj.setParams({"resultInt":(fnumber+snumber)});
        eventObj.fire();      
        
	},
    calculate2Numbers : function(component, event, helper) {
        var fnumber = Number(component.get("v.fstNumber"));
        var snumber = Number(component.get("v.secNumber"));
		var action = component.get("c.addtwonumbers");
        action.setParams({"fnumber1":fnumber,"snumber1":snumber});
        action.setCallback(this,function(response){            
            component.set("v.resultVal",response.getReturnValue());
            
        });
        $A.enqueueAction(action);        
    }
})