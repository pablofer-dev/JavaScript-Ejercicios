class persona {
    constructor(nombre, apellido, apellido2, edad, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
        this.edad = edad;
        this.dni = dni;
    }
    /* Getters */
    get nombrePersona() {
        return this.nombre;
    }
    get apellidoPersona() {
        return this.apellido;
    }
    get apellidoPersona2() {
        return this.apellido2;
    }
    get edadPersona() {
        return this.edad;
    }
    get dniPersona() {
        return this.dni;
    }
    set nombrePersona(nombrePersona) {
        this.nombre = nombrePersona;
    }
    set apellidoPersona(apellidoPersona) {
        this.apellido = apellidoPersona;
    }
    set apellidoPersona2(apellidoPersona2) {
        this.apellido2 = apellidoPersona2;
    }
    set edadPersona(edadPersona) {
        this.edad = edadPersona;
    }
    set dniPersona(dniPersona) {
        this.dni = dniPersona;
    }
}
let persona1 = new persona("Pablo", "Fernández", "López", 21, "4907191J");
let persona2 = new persona("Rafa", "Carrasco", "Perez", 32, "50833192A");
let persona3 = new persona("Dani", "Marquez", "Tolosa", 24, "59473736B");
var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
var arrayPersonas = new Array(persona1, persona2, persona3);
function table() {
    try {
        for (let i = 0; i < arrayPersonas.length; i++) {
            var newRow = tbodyRef.insertRow(-1);
            var newCell0 = newRow.insertCell();
            var newCell2 = newRow.insertCell();
            var newCell3 = newRow.insertCell();
            var newCell4 = newRow.insertCell();
            var newCell5 = newRow.insertCell();
            var newCell6 = newRow.insertCell();
            newCell0.appendChild(document.createTextNode(arrayPersonas[i].nombrePersona));
            newCell2.appendChild(document.createTextNode(arrayPersonas[i].apellidoPersona));
            newCell3.appendChild(document.createTextNode(arrayPersonas[i].apellidoPersona2));
            newCell4.appendChild(document.createTextNode(arrayPersonas[i].edadPersona));
            newCell5.appendChild(document.createTextNode(arrayPersonas[i].dniPersona));
            newCell6.insertAdjacentHTML(
                "beforeend",
                "<input onclick='updateUsuario(this.name)' type='button' class='button btn btn-secondary boton' value='Editar' name= " + arrayPersonas[i].dniPersona + ">",
            );
            newCell6.insertAdjacentHTML(
                "beforeend",
                "<input onclick='eliminarUsuario(this.name)' type='button' class='button btn btn-danger boton' value='Eliminar' name= " + arrayPersonas[i].dniPersona + ">",
            );
        }
    } catch (error) {
        swal("ERROR", error, "error");
    }
}

function limpiarTable() {
    try {
        tbodyRef.innerHTML = "";
    } catch (error) {
        swal("ERROR", error, "error");
    }
}

function insertUsuario() {
    try {
        if (document.getElementById('dni').value != "" && document.getElementById('nombre').value != "") {
            let persona1 = new persona(document.getElementById('nombre').value, document.getElementById('apellido').value, document.getElementById('apellido2').value, document.getElementById('edad').value, document.getElementById('dni').value);
            arrayPersonas.push(persona1);
            swal("Insertado " + document.getElementById('nombre').value, "Se ha insertado con exito", "success");
        }
        else if (document.getElementById('dni').value == "") {
            swal("ERROR", "No se puede insertar con un dni vacio", "error");
        }
        else if (document.getElementById('nombre').value == "") {
            swal("ERROR", "No se puede insertar con un nombre en vacio", "error");
        }
        else {
            swal("ERROR", "No se puede insertar", "error");
        }
        limpiarTable();
        table();
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
function eliminarUsuario(x) {
    try {
        if (x != "" || x != null) {
            arrayPersonas.forEach(element => {
                if (element.dniPersona == x) {
                    arrayPersonas = arrayPersonas.filter(person => person.dni != x);
                }
            });
            swal("Eliminado " + "DNI: " + x, "Se ha eliminado con exito", "success");
        }
        else {
            swal("ERROR", "No se puede eliminar el usuario", "error");
        }
        limpiarTable();
        table();
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
var x = "";
function xSet(x) {
    this.x = x;
}
function updateUsuario(x) {
    try {
        this.xSet(x);
        let personaUpdate = arrayPersonas.filter(person => person.dni == x);
        document.getElementById("updateUsuario").style.display = "block";
        nombreTabla = document.getElementsByName('nombreUpdate')[0].value = personaUpdate[0].nombre;
        apellidoTabla = document.getElementsByName('apellidoUpdate')[0].value = personaUpdate[0].apellido;
        apellido2Tabla = document.getElementsByName('apellido2Update')[0].value = personaUpdate[0].apellido2;
        edadTabla = document.getElementsByName('edadUpdate')[0].value = personaUpdate[0].edad;
        dniTabla = document.getElementsByName('dniUpdate')[0].value = personaUpdate[0].dni;
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
function actualizarUsuario() {
    try {
        if (document.getElementById("nombreUpdate").value != "") {
            let nombre = document.getElementById("nombreUpdate").value;
            let apellido = document.getElementById("apellidoUpdate").value;
            let apellido2 = document.getElementById("apellido2Update").value;
            let edad = document.getElementById("edadUpdate").value;
            let dni = document.getElementById("dniUpdate").value;
            arrayPersonas = arrayPersonas.filter(person => person.dni != x);
            let persona2 = new persona(nombre, apellido, apellido2, edad, dni);
            arrayPersonas.push(persona2);
            document.getElementById("updateUsuario").style.display = "none";
            limpiarTable();
            table();
            swal("Actualizado " + nombre, "Se ha actualizado con exito", "success");
        }
        if (document.getElementById("nombreUpdate").value == "") {
            swal("ERROR", "No se puede actualizar sino tiene nombre", "error");
        }
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
document.getElementById("actualizarUser").addEventListener('click', actualizarUsuario);
table();