 function moja(){
 window.alert("Ovaj sajt je van nase juresdikcije"); }

 
 function prosiri(name, trigger)
 {   
    var Zelj = document.getElementById(name);
    var uradi = document.getElementById(trigger);
    var tekst = document.createTextNode( `aswfnqas wofhasha whawo udhfjawf 
    sfasfasf fasdfasfe gfraeg resgres 
    afaewfaewf faefaew fawefaewf ewfaewfwafe
    feaew fawef awefa wefawe braebhraege
    `);
    
if(uradi.textContent == "Proširi"){
  
  Zelj.append(tekst);
  
    uradi.textContent ="Smanji"; }
    else if(uradi.textContent == "Smanji"){
     console.log("tu sam brate");
     Zelj.childNodes[Zelj.childNodes.length - 1].remove();
      uradi.textContent = "Proširi";
    }
    else console.log("nesto je trulo u tvom kodu");
    
}