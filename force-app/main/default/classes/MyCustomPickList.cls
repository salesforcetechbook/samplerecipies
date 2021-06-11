global class MyCustomPickList extends VisualEditor.DynamicPickList{
    
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Account', 'Account');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {       
        VisualEditor.DynamicPickListRows  pickListRows = new VisualEditor.DynamicPickListRows();
        Map<String,Schema.SObjectType> sobjectTypeMap = new Map<String,Schema.SObjectType>();
        sobjectTypeMap = schema.getGlobalDescribe();
        for(String objectname:sobjectTypeMap.keyset()){
            if(sobjectTypeMap.get(objectname).getDescribe().isQueryable() 
            && sobjectTypeMap.get(objectname).getDescribe().fields.getMap().containsKey('name')){
                String objectLabel = sobjectTypeMap.get(objectname).getDescribe().getLabel();
                String objectAPIName = sobjectTypeMap.get(objectname).getDescribe().getName();
                VisualEditor.DataRow objRow = new VisualEditor.DataRow(objectLabel,objectAPIName);
                pickListRows.addRow(objRow);
            }        
        }
        return pickListRows;
    }
}