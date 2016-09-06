/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GwGravity.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'GwGravity.view.main.MainController',
        'GwGravity.view.main.MainModel',
        'GwGravity.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me=this;
        Ext.apply(this, {
            items: [
                {
                    xtype: 'tabpanel',
                    reference: 'navTab',
                    ui: 'navigation',
                    flex: 1,
                    tabBarHeaderPosition: 1,
                    titleRotation: 0,
                    tabRotation: 0,
                    monitorResize: true,
                    header: {
                        layout: {
                            align: 'stretchmax'
                        },
                        title: {
                            bind: {
                                text: '{name}'
                            },
                            flex: 0
                        },
                        items: [
                            {
                                xtype: 'button',
                                iconCls: 'x-fa fa-bars',
                                listeners: {
                                    afterrender: 'setNavButton'
                                }
                            }
                        ]
                    },

                    tabBar: {
                        flex: 1,
                        layout: {
                            align: 'stretch',
                            overflowHandler: 'scroller'
                        }
                    },

                    responsiveConfig: {
                        tall: {
                            headerPosition: 'top'
                        },
                        wide: {
                            headerPosition: 'top'
                        }
                    },
                    defaults: {
                        bodyPadding: 10,
                        monitorResize: true,
                        layout: 'fit',
                        scrollable: true,
                        tabConfig: {
                            plugins: 'responsive',
                            responsiveConfig: {
                                wide: {
                                    iconAlign: 'left',
                                    textAlign: 'left'
                                },
                                tall: {
                                    iconAlign: 'top',
                                    textAlign: 'center'
                                }
                            }
                        }
                    },
                    listeners: {
                        render: 'setNavTab'
                    }
                },
                // {
                //     xtype: 'panel',
                //     frame: true,
                //     flex: .2
                // }
            ]
        });
        me.callParent(arguments);
    }
});
