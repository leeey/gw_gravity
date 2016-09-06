/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GwGravity.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    setNavTab: function(tab) {

        Ext.Ajax.request({
            url: 'resources/json/nav-tab.json',
            success: function(response) {
                var data=Ext.JSON.decode(response.responseText);
                tab.add(data);      
            }
            
        });


    },

    setNavButton: function(button) {
        
        Ext.Ajax.request({
            url: 'resources/json/nav-button.json',
            success: function(response) {
                var data=Ext.JSON.decode(response.responseText);
                var menu=Ext.create('Ext.menu.Menu', {
                    items: data
                });
                button.setMenu(menu);
            }
            
        });
    }
});
