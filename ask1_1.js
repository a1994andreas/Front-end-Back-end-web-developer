var integer = 1;
function myFunction(){
	if(integer%2==0){
		document.getElementById("image_id").style.width= "320px";
		document.getElementById("image_id").style.height= "220px";
	}else{
		document.getElementById("image_id").style.width= "300px";
		document.getElementById("image_id").style.height= "200px";
	}
	integer++;
}