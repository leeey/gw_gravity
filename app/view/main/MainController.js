/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GwGravity.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    init: function() {

        var me=this;
        var navTab=me.lookupReference("navTab");
        var navButton=navTab.getHeader().items[0];
        Ext.Ajax.request({
            url: 'resources/json/navigation.json',
            success: function(response) {
                var data=Ext.JSON.decode(response.responseText);
                var navList=[{title: "탭1"}];
                navTab.add(data);      
            }
        });
    }
});
