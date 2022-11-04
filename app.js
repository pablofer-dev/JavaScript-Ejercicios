function dateParser(dia, mes, anio, hora) {
    let fecha = new Date(`${dia} ${mes} ${anio} ${hora}`);

    let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    let mesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} ${mesAnio[fecha.getMonth()]} ${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
dateParser("OCTUBRE", "06", "2021", "02:23:43")

/* Jueves 3 Noviembre 2022 20:00:00 */