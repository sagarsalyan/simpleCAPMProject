sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.BatchDetail", {
        onInit:function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
            this.oRouter.getRoute("BatchListView").attachPatternMatched(this._onPatternMatched, this);
			this.oRouter.getRoute("BatchDetailView").attachPatternMatched(this._onPatternMatched, this);
        },

        _onPatternMatched: function(oEvent){
            var sBatchId = oEvent.getParameter("arguments").id;
            this.getView().bindElement({
				path: `/BatchSet(${sBatchId})`
			});
        },

        onSaveBatch: function(oEvent){
            this.getView().getModel().submitChanges();
        }
    });
});