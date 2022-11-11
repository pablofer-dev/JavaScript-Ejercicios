document.body.style.backgroundColor = "#2c3845ec";
var CALENDAR = null;

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
        let date = moment(eventos[j].start, 'YYYY-MM-DD');
        let date2 = moment(eventos[j].end, 'YYYY-MM-DD');
        let newRowE = tbodyRefEvent.insertRow(-1);
        let newCellE0 = newRowE.insertCell();
        let newCellE2 = newRowE.insertCell();
        let newCellE3 = newRowE.insertCell();
        let newCellE4 = newRowE.insertCell();
        newCellE0.appendChild(document.createTextNode(eventos[j].id));
        newCellE2.appendChild(document.createTextNode(eventos[j].title));
        newCellE3.appendChild(document.createTextNode(date.format('DD-MM-YYYY')));
        newCellE4.appendChild(document.createTextNode(date2.format('DD-MM-YYYY')));
        newCellE0.className = "table" + parImpar(j);
        newCellE2.className = "table" + parImpar(j);
        newCellE3.className = "table" + parImpar(j);
        newCellE4.className = "table" + parImpar(j);
    }
}

function table() {
    try {
        tbodyRef.innerHTML = "";
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
let evento1 = new Evento(new Array("4907191J", "50833192A"), "LIMPIAR PC", dateParser("10", "11", "2022"), dateParser("13", "11", "2022"));
let evento2 = new Evento(new Array("59473736B"), "PASTA TÉRMICA", dateParser("09", "11", "2022"), dateParser("15", "11", "2022"));
let evento3 = new Evento(new Array("4907191J", "59473736B"), "CAMBIAR PLACA BASE", dateParser("28", "11", "2022"), dateParser("1", "12", "2022"));
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
            getPersonasStorage()
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
            });
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
            document.body.style.backgroundColor = "#2c3845ec";
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
var arrayEventosActualizarFullCalendar = [];
function eventAdd() {
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
    document.body.style.backgroundColor = "#4d4d4d";
    document.getElementById('selectOptions3').innerHTML = "";
    document.getElementById("myTable2").style.display = "block";
    document.getElementById("myTable").style.filter = "brightness(40%)";
    document.getElementById("myTable").style.filter = "grayscale(60%)";
    if (arrayEventosActualizarFullCalendar != "") {
        let date = moment(arrayEventosActualizarFullCalendar[0], 'MM-DD-YYYY');
        date = date.format('YYYY-MM-DD');
        document.getElementById("dateSEvent").value = date;

        let date2 = moment(arrayEventosActualizarFullCalendar[1], 'MM-DD-YYYY');
        date2.subtract(1, 'd');
        date2 = date2.format('YYYY-MM-DD');
        document.getElementById("dateEEvent").value = date2;
    }
    let select = document.getElementById('selectOptions3');
    for (let i = 0; i < arrayPersonas.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = arrayPersonas[i].dni;
        select.appendChild(opt);
    }
}


document.getElementById("actualizarUser").addEventListener('click', actualizarUsuario);

function dateParser(mes, dia, anio) {
    let fecha = new Date(` ${dia},${mes},${anio}`);
    var date = moment(fecha, 'YYYY-MM-DD');
    return date.format('YYYY-MM-DD');
}

document.getElementById("insertEvent").addEventListener('click', () => {
    try {
        let dateS = document.getElementById("dateSEvent").value;
        let dateE = document.getElementById("dateEEvent").value;

        if (document.getElementById("titleEvent").value != "" && dateS != '' && dateE != '') {
            flag = false;
            let date = moment(dateS, 'YYYY-MM-DD');
            let date2 = moment(dateE, 'YYYY-MM-DD');
            let dateStart = date.format('YYYY-MM-DD');
            let dateEnd = date2.format('YYYY-MM-DD');
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
                if (arrayEventosActualizarFullCalendar != "") {

                }
                if (flag == false) {
                    eventos.push(new Evento(eventosInsert, document.getElementById("titleEvent").value, dateStart, dateEnd))
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
        closeMenu()
        actualizarOptionsEvents()
        tableEvents();
        table();
    } catch (error) {
        console.log(error);
    }
});

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
    document.body.style.backgroundColor = "#2c3845ec";
    limpiarTable();
    table();
}
/* Calendario quitar table */
document.getElementById('calendario').addEventListener('click', () => {
    document.getElementById('myTable').style.display = "none";
    document.getElementById('fullcalendar').style.display = "inherit";
    if (CALENDAR) CALENDAR.render();
})
function removeEvent(evento) {
    eventos = eventos.filter(eventofil => eventofil.title != evento);
    actualizarOptionsEvents()
    tableEvents();
    table();
}

/* Promesa para esperar en fullCalendar cuando haga click en el event Listener */
function waitListener() {
    return new Promise(function (resolve, reject) {
        var listener = event => {
            if (arrayEventosActualizarFullCalendar != "") {
                arrayEventosActualizarFullCalendar.push($("#selectOptions3").select2('data'));
                arrayEventosActualizarFullCalendar.push(document.getElementById("titleEvent").value);
                document.getElementById("dateSEvent").value = "";
                document.getElementById("dateEEvent").value = "";
                document.getElementById("titleEvent").value = "";
                resolve(event);
            }
        };
        document.getElementById("insertEvent").addEventListener('click', listener);
    });
}

function moreInfo(params) {
    arrayIDEventos = params.split(",");
    console.log(arrayIDEventos);
    var moreInfo = "";
    for (let p = 0; p < arrayPersonas.length; p++) {
        for (let g = 0; g < arrayIDEventos.length; g++) {
            if (arrayPersonas[p].dni == arrayIDEventos[g]) {
                moreInfo = moreInfo + 'Dni: <strong>' + arrayPersonas[p].dni + ' </strong><br>'
                moreInfo = moreInfo + 'Edad:  <strong>' + arrayPersonas[p].edad + ' </strong><br><br>'
                eventos.forEach(element => {
                    element.id.forEach(element2 => {
                        if (element2 == arrayIDEventos[g]) {
                            moreInfo = moreInfo + 'Evento:  <strong>' + element.title + ' </strong><br> ' 
                            moreInfo = moreInfo + '<strong>'+ element.start + '   -   ' + element.end + ' </strong><br><br> ' 
                            Swal.fire(arrayPersonas[p].nombre + " " + arrayPersonas[p].apellido + " " + arrayPersonas[p].apellido2, moreInfo)
                        }
                    });
                });
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    CALENDAR = new FullCalendar.Calendar(calendarEl, {
        height: 550,
        locale: 'es',
        themeSystem: 'bootstrap5',
        headerToolbar: {
            right: 'timeGridMes,timeGridSemana,timeGridLista,myCustomButton',
            center: 'title',
            left: 'prev,next today'
        },
        initialView: "dayGridMonth",
        navLinks: true,
        selectable: true,
        customButtons: {
            myCustomButton: {
                text: 'Ver Tabla',
                click: function () {
                    document.getElementById('myTable').style.display = "inherit";
                    document.getElementById('fullcalendar').style.display = "none";
                }
            }
        },
        views: {
            timeGridMes: {
                type: 'dayGridMonth',
                buttonText: 'Mes',
                titleFormat: { month: 'short', day: 'numeric' }
            },

            timeGridSemana: {
                type: 'dayGridWeek',
                buttonText: 'Semana',
                titleFormat: { month: 'short', day: 'numeric' }
            },
            timeGridLista: {
                type: 'listWeek',
                buttonText: 'Lista'

            }
        },
        eventContent: function (arg) {
            let HTML = arg.event.title;
            let eventosArray = arg.event.id.split(',');
            HTML += "<ol>";
            for (let k = 0; k < eventos.length; k++) {
                if (arg.event.title == eventos[k].title) {
                    for (let j = 0; j < arrayPersonas.length; j++) {
                        for (let e = 0; e < eventosArray.length; e++) {
                            if (arrayPersonas[j].dni == eventosArray[e]) {
                                let dni = arrayPersonas[j].dni
                                HTML += "<li>" + arrayPersonas[j].nombre + "<i class='bi bi-file-earmark fs-5 mx-2' onclick='moreInfo(this.id)'id= " + dni + "></i> <i class='bi bi-trash2 fs-5' onclick='delete()'></i>" + "</li>";
                            }
                        }

                    }
                }
            }
            HTML += "</ol>";
            HTML += `${arg.event.startStr} - ${arg.event.endStr}`;
            return { html: HTML }
        }
    });
    for (let j = 0; j < eventos.length; j++) {
        CALENDAR.addEvent({
            title: eventos[j].title,
            id: eventos[j].id,
            start: eventos[j].start,
            end: eventos[j].end
        });
    }

});

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
function getPersonasStorage() {
    var personasStorage = localStorage.setItem('Personas', JSON.stringify(arrayPersonas));
    var getPersonasStorage = localStorage.getItem('Personas');
    console.log('Personas: ', JSON.parse(getPersonasStorage));
}
function getEventosStorage() {
    var eventosStorage = localStorage.setItem('Eventos', JSON.stringify(eventos));
    var getEventosStorage = localStorage.getItem('Eventos');
    console.log('Eventos: ', JSON.parse(getEventosStorage));
}

table();
tableEvents();