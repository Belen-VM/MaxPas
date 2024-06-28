function fillDataTarjeta(elementID, data) {
  console.log({ elementID, data });
  const targetSelect = document.getElementById(elementID);
  console.log({ targetSelect });
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const element = document.createElement("option");
    element.textContent = "Tarjeta " + item.numero;
    console.log({ item });
    element.value = item.numero;
    targetSelect.appendChild(element);
  }
}

function cargarMonto() {
  const numeroTarjeta = document.getElementById("cargar-tarjeta").value;
  const montoTarjeta = document.getElementById("cargar-monto").value;
  const cargarMontoTarjetasResultado = document.getElementById(
    "cargarMontoTarjetasResultado"
  );
  if (!numeroTarjeta) {
    AnimateFeedbackBox("cargarMontoTarjetasResultado", "Elige una tarjeta");
    return;
  }
  if (!montoTarjeta || montoTarjeta <= 0) {
    AnimateFeedbackBox(
      "cargarMontoTarjetasResultado",
      "Agregue un monto válido"
    );
    return;
  }

  cargarMontoTarjetasResultado.classList.remove("resultados-on");

  console.log({ numeroTarjeta, montoTarjeta });

  //
  // const valorCargado=cargarMonto(numeroTarjeta);
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
  const numeroTarjeta = document.getElementById("cargar-tarjeta").value;
  console.log({ numeroTarjeta });

  let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
    console.log({ tarjeta, numeroTarjeta });
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

function habilitarTarjetaPago() {
  const numeroTarjeta = document.getElementById("hd-tarjeta").value;
  console.log({ numeroTarjeta });

  if (!numeroTarjeta) {
    AnimateFeedbackBox("ClausulaDeGuardiaHD", "Elige una tarjeta");
    return;
  }

  let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
    console.log({ tarjeta });

    return numeroTarjeta == tarjeta.numero;
  });
  tarjetaSelecionada.estado = 1;
  console.log({ tarjetaSelecionada });

  actualizarFeedbackEmoji(tarjetaSelecionada);
}

function inhabilitarTarjetaPago() {
  const numeroTarjeta = document.getElementById("hd-tarjeta").value;
  console.log({ numeroTarjeta });

  if (!numeroTarjeta) {
    AnimateFeedbackBox("ClausulaDeGuardiaHD", "Elige una tarjeta");
    return;
  }

  let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
    console.log({ tarjeta, numeroTarjeta });
    return numeroTarjeta == tarjeta.numero;
  });

  tarjetaSelecionada.estado = 0;

  actualizarFeedbackEmoji(tarjetaSelecionada);
}

function actualizarFeedbackEmoji(tarjetaSelecionada) {
  const feedbackBox = document.getElementById("feedback");
  feedbackBox.classList.remove("resultados-on");

  if (tarjetaSelecionada.estado == 0) {
    feedbackBox.textContent = "👎";
  } else {
    feedbackBox.textContent = "👍";
  }

  setTimeout(() => {
    feedbackBox.classList.add("resultados-on");
  }, 0);
}

function actualizarFeedbackTarjeta() {
  const numeroTarjeta = document.getElementById("hd-tarjeta").value;
  console.log({ numeroTarjeta });
  ClearFeedbackBoxes();

  let tarjetaSelecionada = todasTarjetas.find((tarjeta) => {
    console.log({ tarjeta, numeroTarjeta });
    return numeroTarjeta == tarjeta.numero;
  });

  actualizarFeedbackEmoji(tarjetaSelecionada);
}

function ContarTarjetas() {
  const numeroCaja = document.getElementById("cantidadT-caja-select").value;
  const cajaHD = document.getElementById("HD").value;
  console.log({ cajaHD });

  if (!numeroCaja) {
    AnimateFeedbackBox("resultadoCantidadCaja", "Elige una caja");
    return;
  }

  let cajaSeleccionada = cajas.find((caja) => {
    console.log({ caja });
    return numeroCaja == caja.numero;
  });
  let conteo = cajaSeleccionada.tarjetas.filter((tarjeta) => {
    return +cajaHD == tarjeta.estado;
  }).length;

  let statusEmoji = " habilitadas 👍";

  if (cajaHD == 0) {
    statusEmoji = " deshabilitadas👎";
  }

  AnimateFeedbackBox(
    "resultadoCantidadCaja",
    "La cantidad de tarjetas " + statusEmoji + " de pago es: " + conteo
  );
  console.log({ conteo });
  console.log({ cajaSeleccionada });
}

function CalcTarjetasHabilitadasFecha() {
  const fechaIni = document.getElementById("fecha-inicio").value;
  const fechaFin = document.getElementById("fecha-fin").value;
  console.log({ fechaIni, fechaFin });
  let ini = new Date(fechaIni);
  let fin = new Date(fechaFin);

  let tarjetasHabilitadas = todasTarjetas.filter((tarjeta) => {
    return tarjeta.estado == 1;
  });

  let TarjetasHRangoFecha = tarjetasHabilitadas.filter((tarjeta) => {
    let tarjetaFecha = new Date(tarjeta.fecha);
    return ini <= tarjetaFecha && tarjetaFecha <= fin;
  });

  console.log({ TarjetasHRangoFecha });

  AnimateFeedbackBox(
    "resultadoTHFecha",
    "La cantidad de tarjetas habilitadas entre esta fecha es: " +
      TarjetasHRangoFecha.length
  );
}

function CalcMTTarjetasSaldosAnteriores() {
  const cajaSelect = document.getElementById(
    "consultar-MTotalTSaldosAnteriores"
  ).value;
  console.log({ cajaSelect });
  if (!cajaSelect) {
    AnimateFeedbackBox("resultadoMTTarjetasSaldoAnteriores", "Elige una caja");
    return;
  }

  let cajaSeleccionada = cajas.find((caja) => {
    return cajaSelect == caja.numero;
  });
  console.log({ cajaSeleccionada });

  let tarjetasCaja = cajaSeleccionada.tarjetas;
  console.log({ tarjetasCaja });

  let sumar = tarjetasCaja.reduce((acumulador, tarjetaActual) => {
    return acumulador + tarjetaActual.saldoAnterior;
  }, 0);

  AnimateFeedbackBox(
    "resultadoMTTarjetasSaldoAnteriores",
    "El monto total de saldos anteriores de las tarjetas de la caja " +
      cajaSeleccionada.numero +
      " es: " +
      sumar
  );
}
