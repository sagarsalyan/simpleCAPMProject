sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController",
    "sap/f/library"
], (Controller, fioriLibrary) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.TeachersList", {
        onInit: function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
        },

        onSelectTeacher: function(oEvent){
            debugger
            this.oRouter.navTo("TeacherDetailView", {
                id: oEvent.getParameters().listItem.getBindingContext().getObject().teacherid,
                layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded
            });
        },

        onAddTeacher: function(oEvent){
            debugger;
            var oBinding = this.getView().byId("idTeacherList").getTable().getBinding("items");
            oBinding.create({}, false);
        },
    });
});