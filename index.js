



function alertDebugg() {
    alert('WORK');
}

function writetext() {
   var text = document.getElementById('text').value;
   var recup_name = localStorage.getItem('nom');
   var text_format = document.createTextNode(recup_name+':'+text);

   var newparagraphe = document.createElement('p');

   newparagraphe.appendChild(text_format);

   document.getElementById('convers').appendChild(newparagraphe);

}

function writelocal() {
    var nom = document.getElementById('cookiename').value;
     
   document.cookie ='name='+nom;

}