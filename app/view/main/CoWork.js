Ext.define('GwGravity.view.main.CoWork', {
	extend: 'Ext.panel.Panel',

	xtype: 'co-work',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	header: {
		height: 96,
		padding: 0,
		style: {
			background: 'transparent',
		},
		html: '<img src="/resources/img/earth_icon.png"  align="center" width="100%" height="100px">'
	},

	items: [
		{
			xtype: 'component',
			margin: '5 0 0 0',
			height: 100,
			html: '<button title="Trello" style="width: 100%; height: 100%; cursor: pointer; border-radius: 5px;'
					+'background: white url(/resources/img/trello_icon.png) 0 0 no-repeat;' 
					+'background-size: 70%; background-position: center;"></button>'
		},
		{
			xtype: 'component',
			margin: '5 0 0 0',
			height: 100,
			html: '<button title="Google docs" class="btn" style="width: 100%; height: 100%; cursor: pointer; border-radius: 5px;'
					+' background: white url(/resources/img/google_docs_icon.png) 0 0 no-repeat;'
					+' background-size: 70%; background-position: center;"></button>'
		}

	]


});