sap.ui.define([
    "com/teachersdatabase/teachersdatabase/controller/BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("com.teachersdatabase.teachersdatabase.controller.SubjectDetail", {
        onInit:function() {
            var oOwnerComponent = this.getOwnerComponent();

			this.oRouter = oOwnerComponent.getRouter();
            this.oRouter.getRoute("SubjectListView").attachPatternMatched(this._onPatternMatched, this);
			this.oRouter.getRoute("SubjectDetailView").attachPatternMatched(this._onPatternMatched, this);
        },

        _onPatternMatched: function(oEvent){
            var sSubjectId = oEvent.getParameter("arguments").id;
            this.getView().bindElement({
				path: `/SubjectSet(${sSubjectId})`
			});
        },

        onSaveSubject: function(oEvent){
            this.getView().getModel().submitChanges();
        }
    });
});