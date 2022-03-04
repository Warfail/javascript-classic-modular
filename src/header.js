var tableHeaders = ['NAMA','EMAIL','TELEPON'] 

	function createNewTableHeader(headerTitle){
		const temp = document.createElement('th');
		temp.appendChild(document.createTextNode(headerTitle));
		return temp
	}

	function addHeader() {
		var tableHeaderPlaceHolder = document.getElementById('table-header-place-holder');
		tableHeaders.forEach(header=>{
			tableHeaderPlaceHolder.appendChild(createNewTableHeader(header));		
		})	
	}

	document.addEventListener("DOMContentLoaded", function(event) { 
		addHeader();
	});


    export default tableHeaders;