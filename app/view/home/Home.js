Ext.define('GwGravity.view.home.Home', {
	extend: 'Ext.container.Container',
	xtype: 'home',
	// controller: '',
	// viewModel: {

	// },

	layout: 'fit',

	initComponent: function() {
		var me=this;

		Ext.apply(this, {
			items: [
				{
					xtype: 'container',
					margin: 1,
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					items: [
						{
							xtype: 'container',
							flex: .5,
							layout: {
								type: 'hbox',
								align:'stretch'
							},
							defaults:{
								margin: 3
							},
							items: [
								{
									xtype: 'panel',
									frame: true,
									title: 'NOTICE',
									flex: .4,
									header: {
										items: [
											{
												xtype: 'button',
												text: 'more'
											}
										]
									}
								},
								{
									xtype: 'panel',
									frame: true,
									title: 'NEWS',
									flex: .6,
									header: {
										items: [
											{
												xtype: 'button',
												text: 'more'
											}
										]
									}
								}
							]
						},
						{
							xtype: 'container',
							flex: .5,
							layout: {
								type: 'hbox',
								align:'stretch'
							},
							defaults:{
								margin: 3
							},
							items: [
								{
									xtype: 'panel',
									frame: true,
									title: 'TASKS',
									flex: .4,
									header: {
										items: [
											{
												xtype: 'button',
												text: 'more'
											}
										]
									}
								},
								{
									xtype: 'panel',
									frame: true,
									title: 'MAIL',
									flex: .6,
									header: {
										items: [
											{
												xtype: 'button',
												text: 'more'
											}
										]
									}
								}
							]
						}
					]
					
				}
			]
		});

		me.callParent(arguments);
	}

});