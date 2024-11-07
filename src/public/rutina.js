var actual=new Date();
function mostrarCalendario(year,month)
{
    var now=new Date(year,month-1,1);
    var last=new Date(year,month,0);
    var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
    var ultimoDiaMes=last.getDate();
    var dia=0;
    var resultado="<tr bgcolor='silver'>";
    var diaActual=0;
    console.log(ultimoDiaMes);
    var last_cell=primerDiaSemana+ultimoDiaMes;
    // hacemos un bucle hasta 42 
    //de  6 columnas y de 7 días
    for(var i=1;i<=42;i++)
    {
        if(i==primerDiaSemana)
        {
            // determinamos en que día empieza
            dia=1;
        }
        if(i<primerDiaSemana || i>=last_cell)
        {
            // celda vacía
            resultado+="<td>&nbsp;</td>";
        }else{
            // mostramos el día
            if(dia==actual.getDate() && month==actual.getMonth()+1 &&
 year==actual.getFullYear())
                resultado+="<td class='hoy'>"+dia+"</td>";
            else
                resultado+="<td>"+dia+"</td>";
            dia++;
        }
        if(i%7==0)
        {
            if(dia>ultimoDiaMes)
                break;
            resultado+="</tr><tr>\n";
        }
    }
    resultado+="</tr>";

var meses=Array("Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
 "Diciembre");

    // Calculamos el siguiente mes y año
    nextMonth=month+1;
    nextYear=year;

    if(month+1>12)
    {
        nextMonth=1;
        nextYear=year+1;
    }

    // Calculamos el anterior mes y año
    prevMonth=month-1;
    prevYear=year;

    if(month-1<1)
    {
        prevMonth=12;
        prevYear=year-1;
    }

document.getElementById("calendar").getElementsByTagName("caption")
[0].innerHTML="<div>"+meses
[month-1]+" / "+year+"</div>
<div>
<a onclick='mostrarCalendario("+prevYear+","+prevMonth+")'>&lt;</a>
<a onclick='mostrarCalendario("+nextYear+","+nextMonth+")'>&gt;</a>
</div>";
document.getElementById("calendar").getElementsByTagName("tbody")
[0].innerHTML=resultado;
}

mostrarCalendario(actual.getFullYear(),actual.getMonth()+1);
// Función para alternar el menú de perfil
function toggleProfileMenu() {
    const menu = document.getElementById("profile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Cerrar el menú cuando se haga clic fuera de él
window.addEventListener('click', function(event) {
    const menu = document.getElementById("profile-menu");
    const profileIcon = document.getElementById("profile-icon");
    if (!profileIcon.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});

