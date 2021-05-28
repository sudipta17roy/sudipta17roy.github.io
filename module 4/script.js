var checks=new Array();
checks[0]="Yellow";
checks[1]="Jogendra";
checks[2]="Jenu";
checks[3]="jully";
checks[4]="parrot";
checks[5]="fish";
checks[6]="lovely";
checks[7]="pammi";
checks[8]="lukus";
checks[9]="jolly";
checks[10]="Dear";


for (var v = 0; v < checks.length; v++) {
	if(checks[v].charAt(0)==='J'|| checks[v].charAt(0)==='j'){
        console.log("Goodbye "+ checks[v])
	}
	else{
		console.log("Hello "+ checks[v])
	}
}