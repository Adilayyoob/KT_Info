var member =34;
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("GET","https://adilayyoob.github.io/json-test/data.json");
    ourRequest.onload = function() {
	    var ourData = JSON.parse(ourRequest.responseText);
	    ourFamily(ourData);
}
ourRequest.send();


function ourFamily(d) {
	// body...
//printind names
/*document.getElementById("namePrintbtn").addEventListener("click", function(){
 	var text = "";
		for (var i = 0; i < 34; i++) {
            text += "This is " + d[i].name + "<br>";
			console.log("This is " + d[i].name + "\n");
			}
		document.getElementById("birthdayPerson").innerHTML= text;
});*/

//printing birthday
document.getElementById("birthdayWishbtn").addEventListener("click", function(){
	var today = new Date();
	var t_month = today.getMonth()+1;
	var t_day = today.getDate();
	var text = "";
	var flag=0;
    for (var i = 0; i < member; i++) {
    	if( t_month == d[i].DateOfBirth[1] && t_day == d[i].DateOfBirth[2]){
    		text += "HAPPY BIRTHDAY " + d[i].name + "<br>";
    		console.log("HAPPY BIRTHDAY " + d[i].name + "<br>");
    		flag=1;
    	}
    }
    if(flag != 1){
    	document.getElementById("birthdayPerson").innerHTML="SORRY NO BIRTHDAY TODAY";
    }
    else{
    document.getElementById("birthdayPerson").innerHTML= text;
}
document.getElementById("birthdayWishbtn").style.display= "none";
});

//age finder
function age(x) {
	for (var i = 0; i < member; i++) {
		if(d[i].rollNo === x){
			var s_year = d[i].DateOfBirth[0];
	        var s_month = d[i].DateOfBirth[1];
	        var s_day = d[i].DateOfBirth[2];
		}
	}
    var birtdate = new Date(s_year,s_month,s_day);
	var diff_ms = Date.now()-birtdate.getTime();
	var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

//info passing
document.getElementById("rollNo").innerHTML="ROLL NUMBER: "+d[0].rollNo;
document.getElementById("name").innerHTML="NAME: "+d[0].name;
document.getElementById("age").innerHTML="AGE: "+age(d[0].rollNo);
document.getElementById("p_no").innerHTML="PHONE NUMBER: "+d[0].phoneNumber;
document.getElementById("email").innerHTML="EMAIL ADDRESS: "+d[0].email;
document.getElementById("address").innerHTML="ADDRESS: "+d[0].address;
document.getElementById("mName").innerHTML="MOTHER NAME: "+d[0].mName;
document.getElementById("fName").innerHTML="FATHER NAME: "+d[0].fName;
document.getElementById("sName").innerHTML="SPOUSE NAME: "+d[0].spouseName;
document.getElementById("image_place").src="images/0.jpg";

var c=1;

document.getElementById("right").addEventListener("click", function(){
	for (var i = 1; i < member; i++) {
		document.getElementById("rollNo").innerHTML="ROLL NUMBER: "+d[c].rollNo;
        document.getElementById("name").innerHTML="NAME: "+d[c].name;
		document.getElementById("age").innerHTML="AGE: "+age(d[c].rollNo);
		document.getElementById("p_no").innerHTML="PHONE NUMBER: "+d[c].phoneNumber;
		document.getElementById("email").innerHTML="EMAIL ADDRESS: "+d[c].email;
		document.getElementById("address").innerHTML="ADDRESS: "+d[c].address;
		document.getElementById("mName").innerHTML="MOTHER NAME: "+d[c].mName;
		document.getElementById("fName").innerHTML="FATHER NAME: "+d[c].fName;
		document.getElementById("sName").innerHTML="SPOUSE NAME: "+d[c].spouseName;
		document.getElementById("image_place").src="images/"+c+".jpg";
		c=c+1;
		break;
		
	}
});
document.getElementById("left").addEventListener("click", function(){
	for (var i = 1; i < member; i++) {
		c=c-1;
		document.getElementById("rollNo").innerHTML="ROLL NUMBER: "+d[c].rollNo;
        document.getElementById("name").innerHTML="NAME: "+d[c].name;
		document.getElementById("age").innerHTML="AGE: "+age(d[c].rollNo);
		document.getElementById("p_no").innerHTML="PHONE NUMBER: "+d[c].phoneNumber;
		document.getElementById("email").innerHTML="EMAIL ADDRESS: "+d[c].email;
		document.getElementById("address").innerHTML="ADDRESS: "+d[c].address;
		document.getElementById("mName").innerHTML="MOTHER NAME: "+d[c].mName;
		document.getElementById("fName").innerHTML="FATHER NAME: "+d[c].fName;
		document.getElementById("sName").innerHTML="SPOUSE NAME: "+d[c].spouseName;
		document.getElementById("image_place").src="images/"+c+".jpg";
		if(c===0){
			c=1;
		}
		break;
	}
});

//search
document.getElementById("search_rollbtn").addEventListener("click", function(){
	var flag=0;
	var rollno = Number(document.getElementById("search_roll").value);
	console.log(rollno);
	for (var i = 1; i < member; i++) {
		if(rollno===d[i].rollNo)
		{
			c = rollno;
			document.getElementById("rollNo").innerHTML="ROLL NUMBER: "+d[i].rollNo;
	        document.getElementById("name").innerHTML="NAME: "+d[i].name;
			document.getElementById("age").innerHTML="AGE: "+age(d[i].rollNo);
			document.getElementById("p_no").innerHTML="PHONE NUMBER: "+d[i].phoneNumber;
			document.getElementById("email").innerHTML="EMAIL ADDRESS: "+d[i].email;
			document.getElementById("address").innerHTML="ADDRESS: "+d[i].address;
			document.getElementById("mName").innerHTML="MOTHER NAME: "+d[i].mName;
			document.getElementById("fName").innerHTML="FATHER NAME: "+d[i].fName;
			document.getElementById("sName").innerHTML="SPOUSE NAME: "+d[i].spouseName;
			document.getElementById("image_place").src="images/"+i+".jpg";
			flag=1;
			break;

		}
	}
	if(flag != 1)
	{
	alert("Not Found!");
    }
});

};