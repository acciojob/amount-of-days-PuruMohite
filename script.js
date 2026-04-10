//your JS code here. If required.
function daysOfAYear(year){
	if(year%4){
		if(year%100){
			if(year%400){
				return 366;
			}
			else{
				return 365;
			}
		}else{
			return 366;
		}
	}else{
		return 365;
	}
}


