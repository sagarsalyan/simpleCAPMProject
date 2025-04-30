sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.TeacherDetail", {
        onInit:function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
            this.oRouter.getRoute("TeacherListView").attachPatternMatched(this._onPatternMatched, this);
			this.oRouter.getRoute("TeacherDetailView").attachPatternMatched(this._onPatternMatched, this);
        },

        _onPatternMatched: function(oEvent){
            var sTeacherId = oEvent.getParameter("arguments").id;
            this.getView().bindElement({
				path: `/TeacherSet(${sTeacherId})`
			});
        },
        onAddTeacherSubject: function(oEvent){
            debugger;
            var oBinding = this.getView().byId("idTableSubject").getTable().getBinding("items");
            oBinding.create({}, false);
        },
        onAddTeacherBatch: function(oEvent){
            debugger;
            var oBinding = this.getView().byId("idTableBatch").getTable().getBinding("items");
            oBinding.create({}, false);
        },

        onTeacherSubjectEditToggled: function(oEvent){
            debugger
        },

        onSaveTeacher: function(oEvent){
            this.getView().getModel().submitChanges();
        }
    });
});