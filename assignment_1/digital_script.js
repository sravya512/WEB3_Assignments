let a=document.getElementById("digital");
function clock(){
        let date=new Date();
        let hrs=date.getHours();
        let mins=date.getMinutes();
        let secs=date.getSeconds();
        let ap="AM";
        if(hrs>12){
            hrs=hrs-12;
            ap="PM";
        }
        if(hrs==0){
            hrs=12;
        }
        hrs=hrs<10?"0"+hrs:hrs;
        mins=mins<10?"0"+mins:mins;
        secs=secs<10?"0"+secs:secs;
        let tym=hrs+":"+mins+":"+secs+" "+ap;
        console.log(tym);
        a.innerHTML=tym;
        let t=setTimeout(function(){clock()},3000);
    }
    clock();