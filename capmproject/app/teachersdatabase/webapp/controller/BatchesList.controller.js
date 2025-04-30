sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController",
    "sap/f/library"
], (Controller, fioriLibrary) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.BatchesList", {
        onInit: function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
        },

        onSelectBatch: function(oEvent){
            debugger
            this.oRouter.navTo("BatchDetailView", {
                id: oEvent.getParameters().listItem.getBindingContext().getObject().batchid,
                layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded
            });
        },

        onAddBatch: function(oEvent){
            debugger;
            var oBinding = this.getView().byId("idBatchList").getTable().getBinding("items");
            oBinding.create({}, false);
        }
    });
});