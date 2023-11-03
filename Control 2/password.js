function GeneratorPassword() {
    //Extraemos id de las opciones
    const replace=document.getElementById('replace');
    const long=document.getElementById('long').value;
    const high=document.getElementById('high').checked;
    const low=document.getElementById('low').checked;
    const number=document.getElementById('number').checked;
    const stre=document.getElementById('stre').checked;

    //mesajes de error    
    if (!(mayus || minus || num || caract)) {
        alert("Debe seleccionar algunas de las opciones para generar la contraseña.");
        return;
    }
    //No pude usar el metodo random :(
    const password="8JD9nl!+,'"
    
    //Reemplazar en html
    const txt=`
                <h4>Contraseña generada: ${password}  </h4>`

    replace.outerHTML=txt;

     

}

//Opciones de elección para contraseña.
const mayus="QWERTYUIOPASDFGHJKLÑZXCVBNM";
const minus= mayus.toLowerCase();
const num="123456789";
const caract="!¡¿?*+~´¨}][-:.,;^{/" ;