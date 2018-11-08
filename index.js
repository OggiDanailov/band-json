(function(){
	var wrapper = document.createElement('div')
	// wrapper.style.border = '3px solid orange';
	wrapper.style.margin = "0 auto";
	wrapper.style.width = '100%';
	wrapper.style.display = 'grid';
	wrapper.style.gridTemplateColumns = "1fr 1fr";
	wrapper.style.gridGap = "5px";
	wrapper.style.backgroundColor = 'beige'
	wrapper.classList.add('wrapper')
	document.body.appendChild(wrapper)
})()

$.ajax({
	url: "https://raw.githubusercontent.com/OggiDanailov/band-json/master/bands.json"
}).then(function(response){
	ajaxInfo(response)
})

var wrapper = document.querySelector(".wrapper")

function ajaxInfo(argument){
	var data = JSON.parse(argument)
	console.log(data)
	for(let i = 0; i<data.bands.length;i++){
		var box = document.createElement('div')
			box.style.width = '100%'
			// box.style.border = '1px solid green'
			wrapper.appendChild(box)

		var img = document.createElement("div")
			img.style.width = "300px";
			img.style.height = "300px";
			img.style.border = "1px solid ";
			img.style.margin = '20px auto';
			img.style.padding = '5px'
			img.style.backgroundImage = "url(" + data.bands[i].url + ")";
			img.style.backgroundSize = "100% 100%"
			box.appendChild(img);

		var bandName = document.createElement('div')
			bandName.style.width = '200px';
			bandName.style.height = '20px';
			bandName.style.border = '1px solid'
			bandName.style.margin = "10px auto";
			bandName.style.padding = '5px'
			bandName.style.backgroundColor = 'salmon'
			bandName.innerHTML = data.bands[i].name;
			box.appendChild(bandName)

		var names = document.createElement('div')
			names.style.width = '200px'
			names.style.border = "1px solid"
			names.style.margin = "10px auto"
			names.style.padding = '5px'
			names.style.backgroundColor = 'teal'
			names.innerHTML = Object.values(data.names[i])
			box.appendChild(names)

		var text = document.createElement("div")
			text.style.width = '95%'
			text.style.margin = "10px auto"
			text.style.padding = '5px'
			text.style.border = '1px solid'
			text.innerHTML = data.bands[i].text;
			box.appendChild(text)
	}
}

