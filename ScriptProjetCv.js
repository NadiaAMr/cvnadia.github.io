var defile;// l'element a deplacer 
var psinit = 330; // position horizontale de depart 
var pscrnt = psinit;
function texteDefile() {
   if (!defile) defile = document.getElementById('defile');
   if (defile) {
      if (pscrnt < (- defile.offsetWidth)) {
         pscrnt = psinit;
      } else {
         pscrnt += -1.5; // pixel par deplacement 
      }
      defile.style.left = pscrnt + "px";
   }
}
setInterval("texteDefile()", 80); // delai de deplacement 
