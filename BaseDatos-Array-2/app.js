document.body.style.backgroundColor = "#5BB9B8";
class Evento {
    constructor(id, title, start, end) {
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = end;
    }
}
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
function eventsPrint(dni) {
    eventsPrintTitle = new Array();
    eventos.forEach(elemento => {
        elemento.id.forEach(element => {
            if (element == dni) {
                eventsPrintTitle.push(elemento.title);
            }
        });
    });
    return eventsPrintTitle;
}
let persona1 = new persona("Pablo", "Fernández", "López", 21, "4907191J");
let persona2 = new persona("Rafa", "Carrasco", "Perez", 32, "50833192A");
let persona3 = new persona("Dani", "Marquez", "Tolosa", 24, "59473736B");
var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
var tbodyRefEvent = document.getElementById('myTable2').getElementsByTagName('tbody')[0];
var arrayPersonas = new Array(persona1, persona2, persona3);
function tableEvents() {
    tbodyRefEvent.innerHTML = "";
    for (let j = 0; j < eventos.length; j++) {
        let newRowE = tbodyRefEvent.insertRow(-1);
        let newCellE0 = newRowE.insertCell();
        let newCellE2 = newRowE.insertCell();
        let newCellE3 = newRowE.insertCell();
        let newCellE4 = newRowE.insertCell();
        newCellE0.appendChild(document.createTextNode(eventos[j].id));
        newCellE2.appendChild(document.createTextNode(eventos[j].title));
        newCellE3.appendChild(document.createTextNode(eventos[j].start));
        newCellE4.appendChild(document.createTextNode(eventos[j].end));
        newCellE0.className = "table" + parImpar(j);
        newCellE2.className = "table" + parImpar(j);
        newCellE3.className = "table" + parImpar(j);
        newCellE4.className = "table" + parImpar(j);
    }
}

function table() {
    try {
        for (let i = 0; i < arrayPersonas.length; i++) {
            let newRow = tbodyRef.insertRow(-1);
            let newCell0 = newRow.insertCell();
            let newCell2 = newRow.insertCell();
            let newCell3 = newRow.insertCell();
            let newCell4 = newRow.insertCell();
            let newCell5 = newRow.insertCell();
            let newCell7 = newRow.insertCell();
            let newCell6 = newRow.insertCell();
            newCell0.appendChild(document.createTextNode(arrayPersonas[i].nombrePersona));
            newCell2.appendChild(document.createTextNode(arrayPersonas[i].apellidoPersona));
            newCell3.appendChild(document.createTextNode(arrayPersonas[i].apellidoPersona2));
            newCell4.appendChild(document.createTextNode(arrayPersonas[i].edadPersona));
            newCell5.appendChild(document.createTextNode(arrayPersonas[i].dniPersona));
            newCell7.appendChild(document.createTextNode(eventsPrint(arrayPersonas[i].dniPersona)));
            newCell0.className = "table" + parImpar(i);
            newCell2.className = "table" + parImpar(i);
            newCell3.className = "table" + parImpar(i);
            newCell4.className = "table" + parImpar(i);
            newCell5.className = "table" + parImpar(i);
            newCell7.className = "table" + parImpar(i);
            newCell6.className = "color2"
            newCell6.insertAdjacentHTML(
                "beforeend",
                "<input onclick='updateUsuario(this.name)' type='button' class='button btn btn-secondary boton' value='Editar' id='botonDisable' name= " + arrayPersonas[i].dniPersona + ">",
            );
            newCell6.insertAdjacentHTML(
                "beforeend",
                "<input onclick='eliminarUsuario(this.name)' type='button' class='button btn btn-danger boton' value='Eliminar' id='botonDisable' name= " + arrayPersonas[i].dniPersona + ">",
            );
        }
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
function parImpar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let evento1 = new Evento(new Array("4907191J", "50833192A"), "LIMPIAR PC", dateParser("04", "01", "2021"), dateParser("07", "03", "2021"));
let evento2 = new Evento(new Array("59473736B"), "PASTA TÉRMICA", dateParser("06", "04", "2021"), dateParser("07", "01", "2021"));
let evento3 = new Evento(new Array("4907191J", "59473736B"), "CAMBIAR PLACA BASE", dateParser("1", "04", "2021"), dateParser("1", "09", "2021"));
var eventos = new Array(evento1, evento2, evento3);

function actualizarOptionsEvents() {
    document.getElementById('selectOptions').innerHTML = "";
    select = document.getElementById('selectOptions');
    for (let i = 0; i < eventos.length; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = eventos[i].title;
        select.appendChild(opt);
    }
}
function limpiarTable() {
    try {
        tbodyRef.innerHTML = "";
    } catch (error) {
        swal("ERROR", error, "error");
    }
}
function comprobacionDni(dni2) {
    for (let i = 0; i < arrayPersonas.length; i++) {
        if (dni2 == arrayPersonas[i].dni) {
            return true;
        }
    }
    return false;
}
function insertUsuario() {
    try {
        if (document.getElementById('dni').value != "" && document.getElementById('nombre').value != "" && comprobacionDni(document.getElementById('dni').value) != true) {
            let persona1 = new persona(document.getElementById('nombre').value, document.getElementById('apellido').value, document.getElementById('apellido2').value, document.getElementById('edad').value, document.getElementById('dni').value);
            if ($('#selectOptions').select2('data') != "") {
                d = $('#selectOptions').select2('data');
                for (let i = 0; i < d.length; i++) {
                    eventos[d[i].id].id.push(document.getElementById('dni').value);
                }
            }
            arrayPersonas.push(persona1);

            swal("Insertado " + document.getElementById('nombre').value, "Se ha insertado con exito", "success");
            document.getElementById('dni').value = "";
            document.getElementById('nombre').value = "";
            document.getElementById('apellido2').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('edad').value = "";
            $('#selectOptions').val(null).trigger('change');
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
            eventos.forEach(element => {
                let filteredArray = element.id.filter(function (e) { return e !== x })
                element.id = filteredArray;
            });
            arrayPersonas.forEach(element => {
                if (element.dniPersona == x) {
                    arrayPersonas = arrayPersonas.filter(person => person.dni != x);
                }
            }); console.log(eventos);
            swal("Eliminado " + "DNI: " + x, "Se ha eliminado con exito", "success");
        }
        else {
            swal("ERROR", "No se puede eliminar el usuario", "error");
        }
        limpiarTable();
        table();
    } catch (error) {
        swal("ERROR", "No se puede eliminar", "error");
    }
}


var x = "";
function xSet(x) {
    this.x = x;
}
var eventsUser = new Array();
var eventsUserAll = new Array();
function updateUsuario(x) {
    try {
        document.body.style.backgroundColor = "#4d4d4d";
        document.getElementById("myTable").style.filter = "brightness(40%)";
        document.getElementById("myTable").style.filter = "grayscale(60%)";
        document.getElementById("nombre").disabled = true;
        document.getElementById("apellido").disabled = true;
        document.getElementById("apellido2").disabled = true;
        document.getElementById("edad").disabled = true;
        document.getElementById("dni").disabled = true;
        document.getElementById("selectOptions").disabled = true;

        var elems = document.querySelectorAll('[id^="botonDisable"]');
        for (var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
        eventsUser = [];
        eventsUserAll = [];
        let select = document.getElementById('selectOptions2');
        select.innerHTML = "";
        this.xSet(x);
        let personaUpdate = arrayPersonas.filter(person => person.dni == x);
        document.getElementById("updateUsuario").style.display = "block";
        nombreTabla = document.getElementsByName('nombreUpdate')[0].value = personaUpdate[0].nombre;
        apellidoTabla = document.getElementsByName('apellidoUpdate')[0].value = personaUpdate[0].apellido;
        apellido2Tabla = document.getElementsByName('apellido2Update')[0].value = personaUpdate[0].apellido2;
        edadTabla = document.getElementsByName('edadUpdate')[0].value = personaUpdate[0].edad;
        dniTabla = document.getElementsByName('dniUpdate')[0].value = personaUpdate[0].dni;
        for (let i = 0; i < eventsPrint(x).length; i++) {
            let opt = document.createElement('option');
            opt.setAttribute("selected", true);
            opt.innerHTML = eventsPrint(x)[i];
            eventsUser.push(eventsPrint(x)[i]);
            select.appendChild(opt);
        }
        for (let j = 0; j < eventos.length; j++) {
            eventsUserAll.push(eventos[j].title);
        }
        const similar = (arr, values) => arr.filter(x => !values.includes(x));
        const similar2 = similar(eventsUserAll, eventsUser);
        similar2.forEach(element => {
            var opt2 = document.createElement('option');
            opt2.innerHTML = element;
            select.appendChild(opt2);
        });

    } catch (error) {
        swal("ERROR", "No se puede actualizar", "error");
    }
}
var actualizarEvents = new Array();
function actualizarUsuario() {
    try {
        actualizarEvents = [];
        if (document.getElementById("nombreUpdate").value != "") {
            let nombre = document.getElementById("nombreUpdate").value;
            let apellido = document.getElementById("apellidoUpdate").value;
            let apellido2 = document.getElementById("apellido2Update").value;
            let edad = document.getElementById("edadUpdate").value;
            let dni = document.getElementById("dniUpdate").value;
            arrayPersonas = arrayPersonas.filter(person => person.dni != x);
            let persona2 = new persona(nombre, apellido, apellido2, edad, dni);
            arrayPersonas.push(persona2);
            $("#selectOptions2").select2('data').forEach(element => {
                actualizarEvents.push(element.text);
            });

            /* Eliminar select2 a dni */
            eventos.forEach(element => {
                let filteredArray = element.id.filter(function (e) { return e !== x })
                element.id = filteredArray;
            });
            /* Añadir eventos*/
            for (let j = 0; j < eventos.length; j++) {
                for (let i = 0; i < actualizarEvents.length; i++) {
                    if (actualizarEvents[i] == eventos[j].title) {
                        eventos[j].id.push(x)
                    }
                }
            }
            document.getElementById("updateUsuario").style.display = "none";
            document.getElementById("myTable").style.filter = "brightness(100%)";
            document.getElementById("myTable").style.filter = "grayscale(0%)";
            document.getElementById("nombre").disabled = false;
            document.getElementById("apellido").disabled = false;
            document.getElementById("apellido2").disabled = false;
            document.getElementById("edad").disabled = false;
            document.getElementById("dni").disabled = false;
            document.getElementById("selectOptions").disabled = false;

            var elems = document.querySelectorAll('[id^="botonDisable"]');
            for (var i = 0; i < elems.length; i++) {
                elems[i].disabled = false;
            }
            document.body.style.backgroundColor = "#5BB9B8";
            limpiarTable();
            table();
            swal("Actualizado " + nombre, "Se ha actualizado con exito", "success");
        }
        if (document.getElementById("nombreUpdate").value == "") {
            swal("ERROR", "No se puede actualizar sino tiene nombre", "error");
        }
    } catch (error) {
        swal("ERROR", "error");
    }
}
actualizarOptionsEvents();

document.getElementById("eventoAñadir").addEventListener('click', () => {
    document.body.style.backgroundColor = "#4d4d4d";
    document.getElementById('selectOptions3').innerHTML = "";
    document.getElementById("myTable2").style.display = "block";
    document.getElementById("myTable").style.filter = "brightness(40%)";
    document.getElementById("myTable").style.filter = "grayscale(60%)";
    let select = document.getElementById('selectOptions3');
    for (let i = 0; i < arrayPersonas.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = arrayPersonas[i].dni;
        select.appendChild(opt);
    }
});

document.getElementById("actualizarUser").addEventListener('click', actualizarUsuario);

function dateParser(dia, mes, anio) {
    let fecha = new Date(`${dia} ${mes} ${anio}`);
    let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return date = (`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} ${mesAnio[fecha.getMonth()]} ${fecha.getFullYear()}`);
}
document.getElementById("insertEvent").addEventListener('click', () => {
    try {
        let date = document.getElementById("dateSEvent").value;
        let date2 = document.getElementById("dateEEvent").value;
        if (document.getElementById("titleEvent").value != "" && date != '' && date2 != '') {
            flag = false;
            let anioS = date.slice(0, 4);
            let mesS = date.slice(5, 7);
            let diaS = date.slice(8, 10);
            let dateStart = dateParser(anioS, mesS, diaS);
            let anioE = date2.slice(0, 4);
            let mesE = date2.slice(5, 7);
            let diaE = date2.slice(8, 10);
            let dateEnd = dateParser(anioE, mesE, diaE);
            if (Date.parse(dateEnd) < Date.parse(dateStart)) {
                swal("ERROR", "La fecha final es menor a la inicial", "error");
            }
            else {
                let eventosInsert = [];
                $("#selectOptions3").select2('data').forEach(element => {
                    eventosInsert.push(element.text);
                });
                for (let i = 0; i < eventos.length; i++) {
                    if (eventos[i].title == document.getElementById("titleEvent").value) {
                        flag = true;
                        break;
                    }
                }

                if (flag == false) {
                    eventos.push(new Evento(eventosInsert, document.getElementById("titleEvent").value, dateStart, dateEnd));
                    actualizarOptionsEvents()
                    tableEvents()
                }
                else if (flag == true) {
                    swal("ERROR", "Este evento ya existe", "error");
                }
            }

        } else {
            swal("ERROR", "Tienes campos obligatorios vacios", "error");
        }

    } catch (error) {
        console.log(error);
    }
});
table();
tableEvents();
function closeMenu() {

    document.getElementById("updateUsuario").style.display = "none";
    document.getElementById("myTable2").style.display = "none";
    document.getElementById("myTable").style.filter = "brightness(100%)";
    document.getElementById("myTable").style.filter = "grayscale(0%)";
    document.getElementById("nombre").disabled = false;
    document.getElementById("apellido").disabled = false;
    document.getElementById("apellido2").disabled = false;
    document.getElementById("edad").disabled = false;
    document.getElementById("dni").disabled = false;
    document.getElementById("selectOptions").disabled = false;
    var elems = document.querySelectorAll('[id^="botonDisable"]');
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
    document.body.style.backgroundColor = "#5BB9B8";
    limpiarTable();
    table();
}

$(document).ready(function () {
    $(".country").select2({
        placeholder: "Selecciona evento",
        allowClear: true,
        dropdownCssClass: "Montserrat"
    });
});
$(document).ready(function () {
    $(".country2").select2({
        placeholder: "Selecciona evento",
        allowClear: true,
        dropdownCssClass: "Montserrat"
    });
});
$(document).ready(function () {
    $(".country3").select2({
        placeholder: "Seleccionar dni",
        allowClear: true,
        dropdownCssClass: "Montserrat"
    });
});