function aktczas(){
    var data=new Date()
    var formatter=new Intl.DateTimeFormat('pl',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    var polska_data=formatter.format(data);
    var sec=data.getSeconds();
    var mins=data.getMinutes();
    var godz=data.getHours();
    if(sec<10)
        sec='0'+sec
    if(mins<10)
        mins='0'+mins
    if(godz<10)
        godz='0'+godz
    document.getElementById('aktualnyczas').innerHTML="Aktualna data i czas: "+polska_data+" "+godz+":"+mins+":"+sec;
    setTimeout("aktczas()", 1000);
}
function datostatniej(){
    const datas = document.lastModified;
    document.getElementById('datostat').innerHTML="Data ostatniej modyfikacji strony: "+datas;
}
var zmienna=0;
var tablica=new Array("zdjecie1.png","zdjecie2.png")
function slider(){
    zmienna++
    if (zmienna=tablica.length)
    zmienna=0;
    document.getElementById("slider").src=tablica[zmienna]
    setTimeout("slider()",2000)
}
document.addEventListener('DOMContentLoaded', function() {
  aktczas();
  datostatniej();
  slider();
});
