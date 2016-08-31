Ext.define('SelectoJs.view.selectomain.SelectoMain', {
	extend: 'Ext.panel.Panel',

	xtype: 'selectomain',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent: function() {
		var me=this;

		Ext.apply(this, {
			items: [
				{
					xtype: 'form',
					itemId: 'selectoForm',
					flex: 1,
					layout: {
						type: 'vbox',
						align: 'stretch'
					},
					defaults: {
						margin: 5
					},
					items: [
						{
							xtype: 'hiddenfield',
							itemId: 'checkedField'
						},
						{
							xtype: 'hiddenfield',
							itemId: 'convertedField'
						},
						{
							xtype: 'textfield',
							itemId: 'dataNameField',
							emptyText: 'Data name that save to localStorage',
							fieldLabel: 'Data name'
						},
						{
							xtype: 'container',
							layout: {
								type: 'hbox',
								align: 'stretch'
							},
							items: [
								{
									xtype: 'textarea',
									itemId: 'keyArea',
									emptyText: 'key/type & key/type & ...\nType ex) string, number, date(Y/m/d h:i:s), period(Ymd~Ymd)',
									fieldLabel: 'Key/Type',
									enableKeyEvents: true,
									flex: 1,
									listeners: {
										keyup: function(area) {
											var checkedValue=me.down('#checkedField').getValue();
											if(checkedValue!==area.getValue().trim()) {
												me.down('#checkButton').setText('Check');
												me.down('#checkButton').setDisabled(false);
												me.down('#previewButton').setDisabled(true);

											}
										}
									}
								},
								{
									xtype: 'button',
									itemId: 'checkButton',
									width: 80,
									text: 'Check',
									listeners: {
										click: function(button) {
											var keyArea=me.down('#keyArea');
											var keys=keyArea.getValue().split('&');
											var keyList=[];
											if(keys.length) {
												for(var i in keys) {
													var key=keys[i].trim().split('/');
													if(typeof key[0]==='string' && typeof key[1]==='string') {
														var type=key[1].trim().toLowerCase();
														if('string'===key[1].trim().toLowerCase() || 'number'===key[1].trim().toLowerCase()) {
															keyList.push([
																key[0].trim(), 
																key[1].trim().toLowerCase()
															]);	
														}	
													}
												}
												if(keyList.length===keys.length) {
													button.setText('OK');
													button.setDisabled(true);
													me.down('#previewButton').setDisabled(false);
													me.down('#checkedField').setValue(keyArea.getValue().trim());
													me.down('#convertedField').setValue(JSON.stringify(keyList));
												}
											}
										}
									}		
								},
								{
									xtype: 'button',
									itemId: 'infoButton',
									text: 'i',
									menu: {
										items: [
											{
												xtype: 'panel',
												width: 400,
												padding: 15,
												html: '1. string<p>2. number<p>3. date(dType)<br>※dType<br>- ie. Y/m/d, Y/m/d H:i:s<br>- <b>/</b>, <b>:</b> is EDITABLE'
													+'<p>4. period(pType)<br>※pType<br>- ie. Y/m/d~<br>- <b>/</b>, <b>~</b> is EDITABLE'
											}
										]
									}
								}
							]
						},		
						{
							xtype: 'numberfield',
							itemId: 'dataLengthField',
							emptyText: 'Items of data',
							fieldLabel: 'Item numbers',
							minValue: 1,
							maxValue: 100,
							value: 10,
							allowDecimals: false,
							emptyText: 'min: 1 / max: 100'
						},
						{
							xtype: 'toolbar',
							items: [
								{
									xtype: 'tbfill'
								},
								{
									xtype: 'button',
									itemId: 'previewButton',
									text: 'Preview',
									disabled: true,
									listeners: {
										click: function() {
											var value=me.down('#convertedField').getValue();
											var keyList=Ext.JSON.decode(value);
											var dataLength=me.down('#dataLengthField').getValue();
											
											var data=useSelecto(keyList, dataLength, null);
											var modifiedValue='[\n';
											data.forEach(function(item, index, array) {
												if(index!==array.length-1) {
													modifiedValue+='	'+JSON.stringify(item)+',\n';
												}
												else {
													modifiedValue+='	'+JSON.stringify(item)+'\n]';
												}
											});
											
											me.down('#previewArea').setValue(modifiedValue);
											me.down('#editButton').setDisabled(false);
											me.down('#saveButton').setDisabled(false);
										}
									}
								},
								{
									xtype: 'button',
									itemId: 'editButton',
									text: 'Edit',
									disabled: true,
									listeners: {
										click: function(button) {
											me.down('#previewArea').setEditable(true);
										}
									}
								},
								{
									xtype: 'button',
									itemId: 'saveButton',
									text: 'Save',
									disabled: true,
									listeners: {
										click: function(button) {
											var data=me.down('#previewArea').getValue();

											try {
												var arrayData=Ext.JSON.decode(data);
												var dataName=me.down('#dataNameField').getValue().trim();
												var orgKeys=Object.keys(localStorage);

												if(orgKeys.indexOf(dataName)===0 || !dataName.length) {
													me.down('#dataNameField').setValue(null);
													me.down('#dataNameField').focus();
													return;
												}
												
												if(Array.isArray(arrayData) && dataName.length) {
													setStaticValue(dataName, arrayData);
													
													me.down('#storageSet').add({
														xtype: 'button',
														text: dataName,
														value: localStorage.getItem(dataName)
													});	

													me.down('#storageSet').setTitle('Local Storage('+localStorage.length+')');
													me.down('#storageSet').expand();

													me.down('#checkButton').setConfig({
														disabled: false,
														text: 'Check'
													});
													me.down('#previewButton').setDisabled(true);
													me.down('#editButton').setDisabled(true);
													
													button.setDisabled(true);
													
													me.down('#selectoForm').reset();
													
												}
											}
											catch(err) {
												Ext.Msg.alert('ERROR', err);
											} 
										}
									}
								}
							]
						},
						{
							xtype: 'panel',
							layout: 'fit',
							height: 300,
							flex: 1,
							items: [
								{
									xtype: 'textarea',
									itemId: 'previewArea',
									frame: true,
									padding: 10,
									editable: false
								}
							]
						}
					]
				},
				{
					xtype: 'fieldset',
					itemId: 'storageSet',
					title: 'Local Storage('+localStorage.length+')',
					collapsible: true,
					//collapsed: true,
					flex: 1,
					listeners: {
						render: function(v) {
							var keys=Object.keys(localStorage);
							for(var i in keys) {
								v.add({
									xtype: 'button',
									text: keys[i],
									value: localStorage.getItem(keys[i]) 
								});
							}
						}
					}
				},
				{
					xtype: 'toolbar',
					items:[
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'button',
							text: 'Clear',
							listeners: {
								click: function(btn) {
									localStorage.clear();
									me.down("#storageSet").removeAll();
								}
							}
						}
					]
				}

			]
		});

		me.callParent(arguments);

	}

});

