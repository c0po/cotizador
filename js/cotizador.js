tipoEquipo()
function tipoEquipo (){
    //debugger
    // Funcion de seleccion de equipo a cotizar.
    let equipo = prompt("Que tipo de equipo desea cotizar? 1 - pc de escritorio / 2 - Notebook / 3 - Celular / 4 - Tablet")
    switch (equipo){
        case "1":
        alert("has seleccionado pc")
        problemasPc()
        break;
        case "2":
        alert("has seleccionado notebook")
        problemasPc()
        break;
        case "3":
        alert("has seleccionado celular")
        problemasMobile()
        break;
        case "4":
        alert("has seleccionado tablet")
        problemasMobile()
        break;
        default:
        alert("Ningun dispositivo seleccionado")
    }
}
//Funcion de problemas para computadoras.
function problemasPc(){
    let eleccion = prompt("selecciona la falla que da el dispositivo. 1 - lentitud / 2 - no se ve la pantalla pero se escucha que enciende / 3 - No enciende y se escuchan pitidos. / 4 - No funciona el teclado / 5 - Me gustaria actualizarla. 6 - otro")
    switch (eleccion){
        case "1":
            alert("La lentitud de un equipo informatico puede ser por muchas causas, dentro de las primeras puede ser que el almacenamiento del mismo se encuentre saturado o en mal estado, una escaza memoria Ram o un sistema antiguo con demasiados archivos basura.")
            alert("Debido a que la causa de este problema es muy variada y que este programa da estimativos a los que luego un tecnico debe validar el costo de esta reparacion comprende un precio de entre 50 USD y 100 USD.")
            break;
        case "2":
            alert("Por norma general este problema es grave, puede ser desde un cable a un procesador de video en mal estado.")
            alert("Esta reparacion puede comprender un costo de entre 10 USD y 140 USD.")
            break;   
        case "3":
            alert("Si el equipo emite pitidos pero no se muestra informacion alguna en pantalla, puede ser entre muchos problemas a la rotura de la memoria RAM del equipo o suciedad en ella.")
            alert("Aunque las fallas de este tipo siempre pueden ser mucho mas graves suponiendo que sea solo la memoria esta tendria un costo de entre unos 25 USD o 50 USD")
            break;
        case "4":
            alert("Este es un problema que se da muy seguidamente en equipos portatiles, muchas veces se da por suciedad, liquidos o por que no, has tecleado mucho!")
            alert("EL coste de esta reparacion comprende el rango de entre 10 USD y 50 USD")
            break;
        case "5":
            alert("Una actualizacion puede ser de software o hardware aunque muy a menudo estas van de la mano ya que las ultimas versiones de windows requieren una potencia minima que no todos los equipos disponen.")
            alert("El coste de esta reparacion comprende el rango de entre 15 USD y 80 USD ")
            break;
        case "6":
            alert("Tu error no se encuentra en la lista? Un reto! comunicate para realizarle una cotizacion exacta y ver que problema tendremos que solucionar!")
        break;
        default:
        console.warn("No se ingreso el problema correctamente.")
    }
    //saludo de despedida.
    saludo()
}
//Funcion de problemas de dispositivos moviles.
function problemasMobile(){
   
    let eleccion = prompt("Selecciona la falla que da el dispositivo. 1 - Pantalla rota / 2 - Bateria / 3 - Conector de carga / 4 - Carcaza / 5 - Audio / 6 - lentitud / 7 - no enciende.")
    switch (eleccion){
        case "1":
            alert("Pantalla rota? que mal, por fortuna esta deberia ser una reparacion sencilla y el rango de precio comprende desde 25 USD hasta 100 USD")
            break;
        case "2":
            alert("La bateria te dura muy poco? esta es una reparacion sencilla y el rango de precio comprende entre 10 USD y 80 USD")
            break;
        case "3":
            alert("Si el equipo hace falso contacto y no es el cable se trata de un problema tipico de desgaste en el puerto de carga. la reparacion comprende el rango de 10 USD Y 70 USD")
            break;
        case "4":
            alert("Se te rompio el cristal trasero? el precio de la reparacion comprende el rango de entre 100 USD y 250 USD")
            break;
        case "5":
            alert("Su equipo suena muy bajo? este no tendria por que ser un problema grave, la reparacion de esta falla comprende el rango de entre 10 USD Y 50 USD")
            break;
        case "6":
            alert("Que estres generan los cuelgues repentinos no? por norma general este problema se da por un almacenamiento interno saturado o porque el equipo ya tiene mucho tiempo de uso. la reparacion de este problema no tiene costo! siempre y cuando sea solo eso ;)")
            break;
        case "7":
            alert("Si el equipo dejo de encender puede ser por diversos motivos, desde humedad interna hasta algo tan trivial como que el cargador que utilizamos no esta funcionando bien y no tiene carga! el costo minimo de esta reparacion pueden ser solo 5 USD")
            break;
        default:
        console.warn("Error en el valor ingresado.")
    }
    saludo()
}
saludo => alert("Recuerda que este no es un presupuesto real, para saber exactamente el precio de la reparacion debe revisarla un tecnico. No dudes en traernos el equipo! estara en las mejores manos.");