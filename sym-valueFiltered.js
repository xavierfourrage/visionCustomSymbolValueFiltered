(function (PV) {
    'use strict';

    function symbolVis() { }
    PV.deriveVisualizationFromBase(symbolVis);

    var def = {
        typeName: 'valueFiltered',
        visObjectType: symbolVis ,
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        iconUrl: 'scripts/app/editor/symbols/ext/icons/valueFiltered.svg',
        getDefaultConfig: function () {
         
            return {
               
                DataShape: 'value',
                ValueScale:'false',
                ValueScaleSetting:{
                   MinType:1,
                   MinValue:0,
                   MaxValue:360,
                   MaxType:1
                },
                Height: 90,
                Width:90,  
                LabelColor: 'grey', 
                ValueColor: 'white',             
                textAlign:"left",	
				textSize: "large",  
                ShowTimestamp: true,
				ShowLabel: true,				
				ShowValue: true,         
            };
        },

        configOptions: function() {
            return [
                {
                title: 'Format Symbol',
                mode: 'format'
                }
                ];
        }            
    }
    
 symbolVis.prototype.init=function(scope,element){

    // var visible=true;

    scope.Value='';
    scope.Timestamp = '';
    scope.Label= '';
    scope.Units = '';
    // scope.visible=visible;


    this.onDataUpdate= dataUpdate;
    this.onConfigChange=configChanged;
    this.onResize=resize;

    function checkInputValue(data){
        if(data!='No Data') {
            return data
        }
        else {
            // visible=false;
            return
        }
    }

    function dataUpdate(data){
        if(!data){
            return;
        }
        scope.Value = checkInputValue(data.Value);
        scope.Timestamp = data.Time;

        if (data.Label!==undefined){
            scope.Label=data.Label

        }
        if (data.Units!==undefined){
            scope.Units=data.Units;
        }
        else {
            scope.Units='';
        }

    }
    function configChanged(newConfig,oldConfig){

    }
    function resize(height, width){

    }
 }
    PV.symbolCatalog.register(def);


   })(window.PIVisualization);
   