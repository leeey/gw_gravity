/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SelectoJs.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'SelectoJs.view.main.MainController',
        'SelectoJs.view.main.MainModel',
        'SelectoJs.view.main.List',

        'SelectoJs.view.selectomain.SelectoMain'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    initComponent: function() {
        var me=this;

        

        Ext.apply(this, {
            items: [
                {
                    xtype: 'gridpanel',
                    title: 'test',
                    forceFit: true,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'open Selecto',
                                    listeners: {
                                        click: function() {
                                            Ext.create({
                                                xtype: 'window',
                                                width: 800,
                                                padding: 15,
                                                layout: 'fit',
                                                autoShow: true,
                                                modal: true,
                                                title: 'Selecto',
                                                items: [
                                                    {
                                                        xtype: 'selectomain'
                                                    }
                                                ]
                                                
                                            });
                                        } 
                                    }
                                }
                            ]
                        }
                    ],
                    columns: {
                        items: [
                            {
                                text: 'ID',
                                dataIndex: 'id'
                            },
                            {
                                text: 'name',
                                dataIndex: 'name'
                            },
                            {
                                text: 'age',
                                dataIndex: 'age'
                            },
                            {
                                text: 'content',
                                dataIndex: 'content'
                            }
                        ]
                    },
                    listeners: {
                        // render: function(v) {
                        //     var keyList=[['id', 'string'], ['name', 'string'], ['age', 'number'], ['content', 'string']];
                        //     var dataLength=10;
                        //     var sessionDataKey='members';

                        //     var data=useSelecto(keyList, dataLength, sessionDataKey);
                        //     var store=Ext.create('Ext.data.Store',{
                        //         fields: [],
                        //         data:data
                        //     });

                        //     v.setStore(store);
                        // }
                    }
                }
            ]
        });

        me.callParent(arguments);
    }

   
});
