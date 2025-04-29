sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/teachersdatabase/teachersdatabase/model/models",
    "sap/ui/model/json/JSONModel",
     "sap/f/library"
], (UIComponent, models, JSONModel, fioriLibrary) => {
    "use strict";

    return UIComponent.extend("com.teachersdatabase.teachersdatabase.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // set model for flexible column layout
            var oModel = new JSONModel();
			this.setModel(oModel, "flexibleColModel");

            var oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
        },

        _onBeforeRouteMatched: function(oEvent) {
			var oModel = this.getModel("flexibleColModel"),
				sLayout = oEvent.getParameters().arguments.layout;

			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}

			oModel.setProperty("/layout", sLayout);
		}
    });
});