sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.App", {
        onInit: function(oEvent) {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
        },
        onViewChange: function(oEvent){
            debugger;
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            if (sSelectedKey === "T"){
                this.oRouter.navTo("TeacherListView");
            }else if (sSelectedKey === "S"){
                this.oRouter.navTo("SubjectListView");
            }else if (sSelectedKey === "B"){
                this.oRouter.navTo("BatchListView");
            }
        },
        onAppRefresh:function(oEvent){
            this.getView().getModel().refresh();
        }
    });
});