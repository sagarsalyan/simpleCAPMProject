sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController",
    "sap/f/library"
], (Controller, fioriLibrary) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.SubjectsList", {
        onInit: function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
        },

        onSelectSubject: function(oEvent){
            debugger
            this.oRouter.navTo("SubjectDetailView", {
                id: oEvent.getParameters().listItem.getBindingContext().getObject().subjectid,
                layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded
            });
        },

        onAddSubject: function(oEvent){
            debugger;
            var oBinding = this.getView().byId("idSubjectList").getTable().getBinding("items");
            oBinding.create({}, false);
        }
    });
});