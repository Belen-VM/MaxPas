function fillDataCaja(elementClass, data) {
  console.log({ elementClass, data });
  const targetItems = document.querySelectorAll(elementClass);
  console.log({ targetItems });
  for (let index = 0; index < targetItems.length; index++) {
    const targetSelect = targetItems[index];

    console.log({ targetSelect });
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const element = document.createElement("option");
      element.textContent = "Caja " + item.numero;
      console.log({ item });
      element.value = item.numero;
      targetSelect.appendChild(element);
    }
  }
}

function CalcPromedioCaja() {
  const cajaSelect = document.getElementById("consultarPromedioCaja").value;
  console.log({ cajaSelect });

  if (!cajaSelect) {
    AnimateFeedbackBox("resultadoMTPromedio", "Elige una caja");
    return;
  }

  let cajaSeleccionada = cajas.find((caja) => {
    return cajaSelect == caja.numero;
  });

  let tarjetasCaja = cajaSeleccionada.tarjetas;

  let sumar = tarjetasCaja.reduce((acumulador, tarjetaActual) => {
    return acumulador + tarjetaActual.saldoAnterior;
  }, 0);

  let promedio = sumar / tarjetasCaja.length;

  AnimateFeedbackBox(
    "resultadoMTPromedio",
    "El monto promedio de saldos anteriores de las tarjetas de la caja " +
      cajaSeleccionada.numero +
      " es: " +
      promedio
  );
}

function CalcMTTarjetasDeshabilitadas() {
  const cajaSelect = document.getElementById("consultar-MTotalTD").value;
  if (!cajaSelect) {
    AnimateFeedbackBox("resultadoMTTarjetasD", "Elige una caja");
    return;
  }

  let cajaSeleccionada = cajas.find((caja) => {
    return cajaSelect == caja.numero;
  });

  let tarjetasDeshabilitadas = cajaSeleccionada.tarjetas.filter((tarjeta) => {
    console.log({ tarjeta });

    return tarjeta.estado == 0;
  });

  let sumar = tarjetasDeshabilitadas.reduce((acumulador, tarjeta) => {
    return acumulador + tarjeta.montoCarga;
  }, 0);

  AnimateFeedbackBox(
    "resultadoMTTarjetasD",
    "El monto total de las tarjetas deshabilitadas de la caja #" +
      cajaSeleccionada.numero +
      " es: " +
      sumar
  );
}

function CalcMTTarjetasHabilitadas() {
  const cajaSelect = document.getElementById("consultar-MTotalTH").value;
  console.log({ cajaSelect });
  if (!cajaSelect) {
    AnimateFeedbackBox("resultadoMTTarjetasH", "Elige una caja");
    return;
  }

  let cajaSeleccionada = cajas.find((caja) => {
    console.log({ caja });
    return cajaSelect == caja.numero;
  });
  console.log({ cajaSeleccionada });
  let tarjetasHabilitadas = cajaSeleccionada.tarjetas.filter((tarjeta) => {
    console.log({ tarjeta });
    return tarjeta.estado == 1;
  });

  console.log({ tarjetasHabilitadas });
  let sumar = tarjetasHabilitadas.reduce((acumulador, tarjeta) => {
    return acumulador + tarjeta.montoCarga;
  }, 0);
  console.log({ sumar });

  AnimateFeedbackBox(
    "resultadoMTTarjetasH",
    "El monto total de las tarjetas habilitadas de la caja #" +
      cajaSeleccionada.numero +
      " es: " +
      sumar
  );
}
