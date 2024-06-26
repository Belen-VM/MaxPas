console.log(cajas);
let todasTarjetas = [];
for (let i = 0; i < cajas.length; i++) {
  const caja = cajas[i];
  console.log(caja);
  todasTarjetas = [...todasTarjetas, ...caja.tarjetas];
  console.log({ todasTarjetas });
}

function fillData(elementID, data){

  console.log({elementID, data});
  const targetSelect = document.getElementById(elementID);
  console.log({targetSelect});
  for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const element= document.createElement("option");
      element.textContent = "Tarjeta " + item.numero;
      console.log({item});
      element.value=  item.numero;
      targetSelect.appendChild(element);
  }
}

fillData("cargar-tarjeta", todasTarjetas);
fillData("hd-tarjeta", todasTarjetas);


function Form() {}

function cargarMonto() {
  const numeroTarjeta = document.getElementById("cargar-tarjeta").value;
  const montoTarjeta = document.getElementById("cargar-monto").value;
  const cargarMontoTarjetasResultado = document.getElementById(
    "cargarMontoTarjetasResultado"
  );
  cargarMontoTarjetasResultado.classList.remove("resultados-on");
  console.log({ numeroTarjeta, montoTarjeta });
  let tarjetaSelecionada = todasTarjetas.filter((tarjeta) => {
    console.log({ tarjeta });

    return numeroTarjeta == tarjeta.numero;
  });

  console.log({ tarjetaSelecionada });
  tarjetaSelecionada[0].saldoAnterior = tarjetaSelecionada[0].montoCarga;
  tarjetaSelecionada[0].montoCarga =
    +montoTarjeta + tarjetaSelecionada[0].saldoAnterior;
  console.log({ tarjetaSelecionada });
  cargarMontoTarjetasResultado.textContent =
    "💲El nuevo saldo es: " + tarjetaSelecionada[0].montoCarga + "🫰";

  setTimeout(() => {
    cargarMontoTarjetasResultado.classList.add("resultados-on");
  }, 0);
}

function actualizarResultadoCargarMonto() {
    const numeroTarjeta=document.getElementById("cargar-tarjeta").value;
    console.log({numeroTarjeta});

    let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
        console.log({tarjeta, numeroTarjeta});
        return numeroTarjeta == tarjeta.numero;
    }); 
    const feedbackBox = document.getElementById("cargarMontoTarjetasResultado");
    feedbackBox.classList.remove("resultados-on");

    feedbackBox.textContent =
    "💲El saldo actual es: " + tarjetaSelecionada.montoCarga + "🫰";


    setTimeout(() => {
        feedbackBox.classList.add("resultados-on");
    }, 0);
}

function habilitarTarjetaPago(){
    const numeroTarjeta=document.getElementById("hd-tarjeta").value;
    console.log({numeroTarjeta});

    let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
        console.log({ tarjeta });
        
        return numeroTarjeta == tarjeta.numero;
      });
      tarjetaSelecionada.estado="habilitada";
      console.log({tarjetaSelecionada});

      actualizarFeedbackEmoji(tarjetaSelecionada);
}

function inhabilitarTarjetaPago(){
    const numeroTarjeta=document.getElementById("hd-tarjeta").value;
    console.log({numeroTarjeta});

    let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
        console.log({tarjeta, numeroTarjeta});
        return numeroTarjeta == tarjeta.numero;
    }); 

    tarjetaSelecionada.estado="inhabilitada";
    
    actualizarFeedbackEmoji(tarjetaSelecionada);
}
function actualizarFeedbackEmoji(tarjetaSelecionada) {

    const feedbackBox = document.getElementById("feedback");
    feedbackBox.classList.remove("resultados-on");
    

    if (tarjetaSelecionada.estado == "inhabilitada") {
        feedbackBox.textContent = "👎";
    } else {
        feedbackBox.textContent = "👍";
    }

    setTimeout(() => {
        feedbackBox.classList.add("resultados-on");
    }, 0);
}

function actualizarFeedbackTarjeta(){
    const numeroTarjeta=document.getElementById("hd-tarjeta").value;
    console.log({numeroTarjeta});

    let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
        console.log({tarjeta, numeroTarjeta});
        return numeroTarjeta == tarjeta.numero;
    }); 

    actualizarFeedbackEmoji(tarjetaSelecionada);

}





