

// // function sdt() {
// // 	document.getElementById('tooltip1').style.display="none";
// // }

// //  function hoten() {
// // 	document.getElementById('tooltip').style.display="none";
// //  }

// var a = document.getElementById("name").value;
// var phone = document.getElementById('sdt').value;
// function ho_ten(){
// 	if(document.getElementById("name").value!=null){
// 		document.getElementById('tooltip').style.display="none"
// 	}
// 	else {
// 		document.getElementById('tooltip').style.display="inherit"
// 	}
// }

function button(){
	if(check()==1){
		alert('Tên nhập chưa đúng')
	}
	else
	if(document.getElementById('name').value!=''&&document.getElementById('phone').value!='')
	alert('Gửi thông tin thành công');
}

function check(){
	var ho_ten = new String();
	var i=0;
	var check_name=0;
	while(i<=(document.getElementById('name').value).length){
		ho_ten[i]=document.getElementById('name').value[i];
		i++;
	}
	for(i=0;i<=(document.getElementById('name').value).length;i++){
		if(ho_ten[i]=="0"||ho_ten[i]=="1"||ho_ten[i]=="2"||ho_ten[i]=="3"||ho_ten[i]=="4"||ho_ten[i]=="5"||ho_ten[i]=="6"||ho_ten[i]=="7"||ho_ten[i]=="8"||ho_ten[i]=="9"){
			check_name=1;
			break;
		}
	}
	return check_name;
}