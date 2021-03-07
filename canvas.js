window.onload = function(){
    var elemento = document.getElementById('lienzo');
    if (elemento && elemento.getContext) {
        var lienzo = elemento.getContext('2d');
        if (lienzo) {
            
        lienzo.shadowColor="rgba(0,0,0,0.5)";
        lienzo.fillStyle="#990000";
        lienzo.shadowOffsetX=4;
        lienzo.shadowOffsetY=4;
        lienzo.shadowBlur=5;
        lienzo.font="bold 40px verdana, sans-serif";
        lienzo.fillText("Casino", 110,40);
        lienzo.font="italic 20px verdana, sans-serif";
        lienzo.fillText("Games", 150,100);
        lienzo.beginPath();
        lienzo.moveTo(50,10);
        lienzo.lineTo(250,100);
        lienzo.lineTo(200,50);
        lienzo.lineTo(120,100);
        lienzo.closePath();
        lienzo.stroke();
        }
    }
    else{
    }
}