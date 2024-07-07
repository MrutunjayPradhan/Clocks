var second=0;
var minute=0;
var hour =0;


setInterval(
    ()=>{
        var d= new Date();
        second = d.getSeconds();
        minute= d.getMinutes();
        hour =d.getHours()*30+Math.round(minute/2);
        document.getElementById("sec").style.transform = "rotate("+second*6+"deg)";
        document.getElementById("min").style.transform = "rotate("+minute*6+"deg)";
        document.getElementById("hr").style.transform = "rotate("+hour+"deg)";
    },1000
)