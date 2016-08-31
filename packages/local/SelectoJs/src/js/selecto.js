function useSelecto(keyList, dataLength, localDataKey) {

	var cnt=0;

	var data=[];
	while(cnt< dataLength) {
		cnt++;
		var map={};
		keyList.forEach(function(item, index, array) {
			if(item[1]==='string') {
				map[item[0]]=item[0]+'Data'+cnt;
			}
			else if(item[1]==='number') {
				map[item[0]]=cnt;
			}
			else if(item[1].substring(0, 4)==='date') {
				map[item[0]]=cnt;
			}
			else if(item[1].substring(0, 6)==='period') {
				map[item[0]]=cnt;
			}
		});
		data.push(map);
	}

	if(localDataKey) setStaticValue(localDataKey, data);

	return data;
}

function setStaticValue(key, data) {

	var value;
	if(Array.isArray(data) ? value=JSON.stringify(data) : value=data); 

	localStorage.setItem(key, value);

}

function clearLocalStorage(item) {
	if(item ? localStorage.removeItem(item) : localStorage.clear());
}