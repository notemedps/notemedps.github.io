//converting integer value of days to string
function dayToDay(day,rtype){
	var short,long;
	switch(day){
		case 0 : 
		short = "Sun";
		long = "Sunday";
		break;
		case 1 :
		short = "Mon";
		long = "Monday";
		break;
		case 2 :
		short = "Tue";
		long = "Tuesday";
		break;
		case 3 :
		short = "Wed";
		long = "Wednesday";
		break;
		case 4 :
		short = "Thu";
		long = "Thursday";
		break;
		case 5 :
		short = "Fri";
		long = "Friday";
		break;
		case 6 :
		short = "Sat";
		long = "Saturday";
		break;
		default :
		short = "Err";
		long = "Error";
		break;

	}

	if(rtype =="short"){
			return short;
						}
		else{
	return long;
					}


	
}


//changing number wala month to string

function moth(mth){

switch(mth){
case 1:
	mothr = "Jan";
	break;
case 2:
	mothr = "Feb";
	break;
case 3:
	mothr = "Mar";
	break;
case 4:
	mothr = "Apr";
	break;
case 5:
	mothr = "May";
	break;

case 6:
	mothr = "Jun";
	break;
case 7:
	mothr = "Jul";
	break;
case 8:
	mothr = "Aug";
	break;
case 9:
	mothr = "Sep";
	break;
case 10:
	mothr = "Oct";
	break;

case 11:
	mothr = "Nov";
	break;
case 12:
	mothr = "Dec";
	break;
default :
	mothr = "Err";
	break;

}



return mothr;
}


//if you want calender of any date try show_calender(year,month) and use show_calender('','') for current month calender
function show_calender(year,month){

//geetting datas of given date , this  month if not given

if(year!=""  && month!=""){
	var date = new Date(year,month);
}

else if(year!=""){
var date = new Date(year);
}




else{
	var date = new Date();
}

var year_this = date.getFullYear();
var month_this = date.getMonth()+1;
var day_this = date.getDate();

//calculating total number of days in a month
var totalDaysInMonth = function (year,month){
return new Date(year,month,0).getDate();
}

//total days in this month
var totdat = totalDaysInMonth(year_this,month_this);

//getting what day is 1st of month

var mfirst = new Date(year_this,month_this-1,1).getDay();
var mfday = dayToDay(mfirst,"short");




//sketching table of calender

document.write(`<div class = "alert alert-info" style="width:220px;margin:0px;font-size:20px;padding:3px;">`+year_this+` - `+ moth(month_this)+`
</div>


	<table class = "table table-bordered table-responsive table-sm" align="center">

	<tr>
    <th scope="row">Sun</th>
    <th scope="row">Mon</th> 
    <th scope="row">Tue</th>
     <th scope="row">Wed</th>
     <th scope="row">Thu</th>
     <th scope="row">Fri</th>
     <th scope="row" class = "bg-danger" style="color:white;">Sat</th>
  </tr><tr>


`);



//trick part for managing the 1st day of week, giving blank space
for(i = 0;i<mfirst;i++){

	document.write("<td> </td>");
}
//printing from 1st day of month to last with correct position 

for(i=1;i<=totdat;i++){
	
	var newd = new Date(year_this,month_this-1,i).getDay();
		var dayy = dayToDay(newd,"short");

		//saturday is holiday here in nepal
		if(dayy=="Sat"){
			color="red";
		}
		else{
			color="black";		}






	document.write(`<td>  <font color=`+color+`> `+i+`</font> </td>`);

//terminating a week on saturday
	if(dayy=="Sat"){

	document.write(`</tr> <tr>`);
							}



}



document.write(`</tr></table>`);

};


 