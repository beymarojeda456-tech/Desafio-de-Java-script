const ejerciciosPorArea = {
    astronomia: [
        { id: 'astronomia-1', titulo: 'Astro 1: Clasificación Brillo Estelar' },
        { id: 'astronomia-2', titulo: 'Astro 2: Promedio de Distancias' },
        { id: 'astronomia-3', titulo: 'Astro 3: Contar Cráteres (> 50km)' },
        { id: 'astronomia-4', titulo: 'Astro 4: Identificar Cuerpo Celeste' },
        { id: 'astronomia-5', titulo: 'Astro 5: Registro de Niveles de Luz' },
    ],
    medioambiente: [
        { id: 'medioambiente-1', titulo: 'Medio Amb. 1: Clasificación AQI' },
        { id: 'medioambiente-2', titulo: 'Medio Amb. 2: Promedio de Ruido' },
        { id: 'medioambiente-3', titulo: 'Medio Amb. 3: Contar Focos de Calor' },
        { id: 'medioambiente-4', titulo: 'Medio Amb. 4: Tipo de Residuo' },
        { id: 'medioambiente-5', titulo: 'Medio Amb. 5: Monitoreo de Río' },
    ],
    salud: [
        { id: 'salud-1', titulo: 'Salud 1: Clasificación Presión' },
        { id: 'salud-2', titulo: 'Salud 2: Promedio de Temperatura' },
        { id: 'salud-3', titulo: 'Salud 3: Contar Pacientes con Fiebre' },
        { id: 'salud-4', titulo: 'Salud 4: Clasificación de TRIAGE' },
        { id: 'salud-5', titulo: 'Salud 5: Repetir Mediciones SpO2' },
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    cargarFormulariosBase();
    activarNavegacionSubmenu();
});

function mostrarSubmenu(area) {
    const submenu = document.getElementById('submenu-ejercicios');
    submenu.innerHTML = ''; 
    submenu.style.display = 'flex'; 

    document.getElementById('seccion-inicio').classList.remove('ejercicio-activo');
    document.querySelectorAll('.ejercicio-contenedor').forEach(section => {
        section.classList.remove('ejercicio-activo');
    });

    ejerciciosPorArea[area].forEach(ej => {
        const button = document.createElement('button');
        button.textContent = ej.titulo;
        button.setAttribute('data-target', ej.id);
        button.classList.add(`${area}-btn`); 
        submenu.appendChild(button);
    });
}

function activarNavegacionSubmenu() {
    document.getElementById('submenu-ejercicios').addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const targetId = e.target.getAttribute('data-target');
            
            document.querySelectorAll('.ejercicio-contenedor').forEach(section => {
                section.classList.remove('ejercicio-activo');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('ejercicio-activo');
            }
        }
    });
}

function cargarFormulariosBase() {
    document.getElementById('astronomia-1').innerHTML = `
        <h2>1. Clasificación de Brillo Estelar</h2>
        <p>Ingresa la magnitud aparente para clasificar el brillo de la estrella.</p>
        <label for="magnitud-astro">Magnitud Aparente:</label>
        <input type="number" id="magnitud-astro" step="0.1" placeholder="-5.0 a 6.0" required>
        <button type="button" onclick="clasificarBrillo()">Clasificar</button>
        <div id="resultado-astro-1" class="resultado"></div>
        <div id="plus-astro-1" class="plus"></div>
    `;

    document.getElementById('astronomia-2').innerHTML = `
        <h2>2. Registrar Distancias de Planetas</h2>
        <label for="num-distancias-astro">¿Cuántas distancias registrará?</label>
        <input type="number" id="num-distancias-astro" min="1" value="3" required>
        <button type="button" onclick="generarInputsAstro2()">Comenzar Registro</button>
        <div id="inputs-astro-2"></div>
        <button type="button" onclick="calcularPromedioAstro2()" style="margin-top: 10px;">Calcular Promedio</button>
        <div id="resultado-astro-2" class="resultado"></div>
        <div id="plus-astro-2" class="plus"></div>
    `;

    document.getElementById('astronomia-3').innerHTML = `
        <h2>3. Contar Cráteres Lunares Grandes</h2>
        <p>Ingresa diámetros de cráteres (km). Ingresa 0 para terminar.</p>
        <label for="diametro-crater">Diámetro (km):</label>
        <input type="number" id="diametro-crater" min="0" required>
        <button type="button" onclick="registrarCraterAstro3()">Registrar Cráter</button>
        <button type="button" onclick="finalizarConteoAstro3()">Finalizar Conteo</button>
        <div id="lista-crateres-astro-3" style="margin-top: 10px;">Cráteres registrados: 0</div>
        <div id="resultado-astro-3" class="resultado"></div>
        <div id="plus-astro-3" class="plus"></div>
    `;

    document.getElementById('astronomia-4').innerHTML = `
        <h2>4. Identificar Cuerpo Celeste</h2>
        <p>Selecciona el código del cuerpo celeste.</p>
        <select id="codigo-celeste" onchange="identificarCuerpoAstro4()">
            <option value="">-- Selecciona un código --</option>
            <option value="1">1: Estrella</option>
            <option value="2">2: Planeta</option>
            <option value="3">3: Cometa</option>
            <option value="4">4: Asteroide</option>
            <option value="5">5: Galaxia</option>
        </select>
        <div id="resultado-astro-4" class="resultado" style="margin-top: 15px;"></div>
        <div id="plus-astro-4" class="plus"></div>
        <img id="imagen-celeste" src="" alt="Cuerpo Celeste" style="max-width: 150px; margin-top: 10px; display: none;">
    `;

    document.getElementById('astronomia-5').innerHTML = `
        <h2>5. Registro de Niveles de Luz (Lux)</h2>
        <p>Ingresa valores de luz. Detente al ingresar 'no' en el campo.</p>
        <label for="nivel-lux">Nivel de Luz (lux):</label>
        <input type="text" id="nivel-lux" placeholder="Ej: 50.5 o 'no'">
        <button type="button" onclick="registrarLuxAstro5()">Registrar</button>
        <div id="lista-lux-astro-5" style="margin-top: 10px;">Registros: 0</div>
        <div id="alerta-lux-astro-5" class="alerta" style="display: none;"></div>
        <button type="button" onclick="finalizarRegistroAstro5()" style="margin-top: 10px;">Finalizar y Calcular Mediana</button>
        <div id="resultado-astro-5" class="resultado"></div>
        <div id="plus-astro-5" class="plus"></div>
    `;

    document.getElementById('medioambiente-1').innerHTML = `
        <h2>1. Clasificación de Calidad del Aire (AQI)</h2>
        <p>Ingresa el valor AQI para obtener su clasificación y recomendación.</p>
        <label for="aqi-ambiente">Valor AQI (0-500):</label>
        <input type="number" id="aqi-ambiente" min="0" max="500" required>
        <button type="button" onclick="clasificarAQI()">Clasificar AQI</button>
        <div id="resultado-ambiente-1" class="resultado"></div>
        <div id="plus-ambiente-1" class="plus"></div>
    `;

    document.getElementById('medioambiente-2').innerHTML = `
        <h2>2. Registrar Niveles de Ruido Ambiental</h2>
        <label for="num-mediciones-amb">¿Cuántas mediciones registrará?</label>
        <input type="number" id="num-mediciones-amb" min="1" value="3" required>
        <button type="button" onclick="generarInputsAmb2()">Comenzar Registro</button>
        <div id="inputs-ambiente-2"></div>
        <button type="button" onclick="calcularPromedioAmb2()" style="margin-top: 10px;">Calcular Promedio y Clasificar</button>
        <div id="resultado-ambiente-2" class="resultado"></div>
        <div id="plus-ambiente-2" class="plus"></div>
    `;

    document.getElementById('medioambiente-3').innerHTML = `
        <h2>3. Contar Focos de Calor</h2>
        <p>Ingresa temperaturas (ºC). Ingresa 0 para terminar. (Foco de calor si > 45ºC)</p>
        <label for="temperatura-foco">Temperatura (ºC):</label>
        <input type="number" id="temperatura-foco" min="0" required>
        <button type="button" onclick="registrarFocoAmb3()">Registrar Temperatura</button>
        <button type="button" onclick="finalizarConteoAmb3()">Finalizar Conteo</button>
        <div id="lista-focos-ambiente-3" style="margin-top: 10px;">Temperaturas registradas: 0</div>
        <div id="resultado-ambiente-3" class="resultado"></div>
        <div id="plus-ambiente-3" class="plus"></div>
    `;

    document.getElementById('medioambiente-4').innerHTML = `
        <h2>4. Clasificación del Tipo de Residuo</h2>
        <p>Selecciona el código del residuo.</p>
        <select id="codigo-residuo" onchange="clasificarResiduoAmb4()">
            <option value="">-- Selecciona un código --</option>
            <option value="1">1: Orgánico</option>
            <option value="2">2: Plástico</option>
            <option value="3">3: Papel/Cartón</option>
            <option value="4">4: Vidrio</option>
        </select>
        <div id="resultado-ambiente-4" class="resultado" style="margin-top: 15px;"></div>
        <div id="plus-ambiente-4" class="plus"></div>
    `;

    document.getElementById('medioambiente-5').innerHTML = `
        <h2>5. Monitoreo de Niveles del Río</h2>
        <p>Ingresa niveles del río (m). Detente al ingresar 'no' en el campo. (Alerta si > 3m)</p>
        <label for="nivel-rio">Nivel del Río (m):</label>
        <input type="text" id="nivel-rio" placeholder="Ej: 2.8 o 'no'">
        <button type="button" onclick="registrarNivelRioAmb5()">Registrar</button>
        <div id="lista-rio-ambiente-5" style="margin-top: 10px;">Registros: 0</div>
        <div id="alerta-rio-ambiente-5" class="alerta" style="display: none;"></div>
        <label for="promedio-historico">Promedio Histórico (m) para Plus:</label>
        <input type="number" id="promedio-historico" step="0.1" value="1.5" placeholder="1.5">
        <button type="button" onclick="finalizarRegistroAmb5()" style="margin-top: 10px;">Finalizar y Calcular Desviación</button>
        <div id="resultado-ambiente-5" class="resultado"></div>
        <div id="plus-ambiente-5" class="plus"></div>
    `;

    document.getElementById('salud-1').innerHTML = `
        <h2>1. Clasificación de Presión Arterial</h2>
        <p>Ingresa la presión sistólica y diastólica.</p>
        <label for="sistolica-salud">Presión Sistólica (mmHg):</label>
        <input type="number" id="sistolica-salud" required>
        <label for="diastolica-salud">Presión Diastólica (mmHg):</label>
        <input type="number" id="diastolica-salud" required>
        <button type="button" onclick="clasificarPresion()">Clasificar Presión</button>
        <div id="resultado-salud-1" class="resultado"></div>
        <div id="plus-salud-1" class="plus"></div>
    `;

    document.getElementById('salud-2').innerHTML = `
        <h2>2. Registrar Temperatura de Pacientes</h2>
        <label for="num-pacientes-salud">¿Cuántos pacientes registrará?</label>
        <input type="number" id="num-pacientes-salud" min="1" value="3" required>
        <button type="button" onclick="generarInputsSalud2()">Comenzar Registro</button>
        <div id="inputs-salud-2"></div>
        <button type="button" onclick="calcularPromedioSalud2()" style="margin-top: 10px;">Calcular Promedio y Moda</button>
        <div id="resultado-salud-2" class="resultado"></div>
        <div id="plus-salud-2" class="plus"></div>
    `;

    document.getElementById('salud-3').innerHTML = `
        <h2>3. Contar Pacientes con Fiebre</h2>
        <p>Ingresa temperaturas (ºC). Ingresa 0 para terminar. (Fiebre si ≥ 38ºC)</p>
        <label for="temperatura-fiebre">Temperatura (ºC):</label>
        <input type="number" id="temperatura-fiebre" min="0" required>
        <button type="button" onclick="registrarFiebreSalud3()">Registrar Temperatura</button>
        <button type="button" onclick="finalizarConteoSalud3()">Finalizar Conteo</button>
        <div id="lista-fiebre-salud-3" style="margin-top: 10px;">Temperaturas registradas: 0</div>
        <div id="alerta-alta-temp-salud-3" class="alerta" style="display: none;"></div>
        <div id="resultado-salud-3" class="resultado"></div>
        <div id="plus-salud-3" class="plus"></div>
    `;

    document.getElementById('salud-4').innerHTML = `
        <h2>4. Clasificación de TRIAGE</h2>
        <p>Ingresa el código de 1 a 4.</p>
        <select id="codigo-triage" onchange="clasificarTriageSalud4()">
            <option value="">-- Selecciona un código --</option>
            <option value="1">1: Rojo</option>
            <option value="2">2: Amarillo</option>
            <option value="3">3: Verde</option>
            <option value="4">4: Azul</option>
        </select>
        <div id="resultado-salud-4" class="resultado" style="margin-top: 15px; font-size: 1.5em; font-weight: bold;"></div>
        <div id="plus-salud-4" class="plus"></div>
    `;

    document.getElementById('salud-5').innerHTML = `
        <h2>5. Monitoreo de Saturación SpO2</h2>
        <p>Ingresa valores de saturación (%). Detente al ingresar 'no' en el campo.</p>
        <label for="saturacion-spo2">Saturación SpO2 (%):</label>
        <input type="text" id="saturacion-spo2" placeholder="Ej: 95 o 'no'">
        <button type="button" onclick="registrarSaturacionSalud5()">Registrar</button>
        <div id="lista-spo2-salud-5" style="margin-top: 10px;">Registros: 0</div>
        <div id="alerta-hipoxia-salud-5" class="alerta" style="display: none;"></div>
        <div id="resultado-salud-5" class="resultado" style="margin-top: 10px;"></div>
    `;
}

let craterData = []; 
let luxData = []; 
let temperaturaDataAmb = []; 
let nivelRioData = []; 
let temperaturaDataSalud = []; 
let saturacionData = [];

function clasificarBrillo() {
    const magnitud = parseFloat(document.getElementById('magnitud-astro').value);
    const resultadoDiv = document.getElementById('resultado-astro-1');
    const plusDiv = document.getElementById('plus-astro-1');
    let clasificacion = "";
    let rango = "";

    if (isNaN(magnitud)) {
        resultadoDiv.innerHTML = '<span class="alerta">Por favor, ingresa un número.</span>';
        plusDiv.textContent = '';
        return;
    }

    if (magnitud <= 0) {
        clasificacion = 'Extremadamente brillante';
        rango = 'Magnitud ≤ 0';
    } else if (magnitud <= 1.5) {
        clasificacion = 'Muy brillante';
        rango = '0 < Magnitud ≤ 1.5';
    } else if (magnitud <= 4.5) {
        clasificacion = 'Brillante';
        rango = '1.5 < Magnitud ≤ 4.5';
    } else if (magnitud <= 6.0) {
        clasificacion = 'Débil';
        rango = '4.5 < Magnitud ≤ 6.0';
    } else {
        clasificacion = 'No visible (a simple vista)';
        rango = 'Magnitud > 6.0';
    }

    resultadoDiv.textContent = `Clasificación: ${clasificacion}`;
    plusDiv.textContent = `Plus: El rango de magnitud que define esta categoría es: ${rango}`;
}

function generarInputsAstro2() {
    const num = parseInt(document.getElementById('num-distancias-astro').value);
    const container = document.getElementById('inputs-astro-2');
    container.innerHTML = '';
    
    if (isNaN(num) || num < 1) {
        container.innerHTML = '<span class="alerta">Ingresa un número válido de distancias.</span>';
        return;
    }

    for (let i = 0; i < num; i++) {
        container.innerHTML += `
            <label for="distancia-${i}">Distancia ${i + 1} (millones de km):</label>
            <input type="number" id="distancia-${i}" class="distancia-input" step="0.1" required>
        `;
    }
}

function calcularPromedioAstro2() {
    const inputs = document.querySelectorAll('#inputs-astro-2 .distancia-input');
    const resultadoDiv = document.getElementById('resultado-astro-2');
    const plusDiv = document.getElementById('plus-astro-2');
    let total = 0;
    let distancias = [];

    if (inputs.length === 0) {
        resultadoDiv.textContent = 'Genera los campos de distancia primero.';
        plusDiv.textContent = '';
        return;
    }

    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
            total += valor;
            distancias.push(valor);
        }
    });

    if (distancias.length === 0) {
        resultadoDiv.textContent = 'No se ingresaron distancias válidas.';
        plusDiv.textContent = '';
        return;
    }

    const promedio = total / distancias.length;
    const maximo = Math.max(...distancias); 

    resultadoDiv.textContent = `Promedio de distancias: ${promedio.toFixed(2)} millones de km`;
    plusDiv.textContent = `Plus (Identificar la más lejana): La distancia más grande registrada fue: ${maximo.toFixed(2)} millones de km.`;
}

function registrarCraterAstro3() {
    const input = document.getElementById('diametro-crater');
    const diametro = parseFloat(input.value);

    if (diametro === 0) {
        finalizarConteoAstro3();
        return;
    }
    
    if (isNaN(diametro) || diametro < 0) {
        document.getElementById('resultado-astro-3').innerHTML = '<span class="alerta">Ingresa un diámetro válido.</span>';
        return;
    }

    craterData.push(diametro);
    input.value = '';
    document.getElementById('lista-crateres-astro-3').textContent = `Cráteres registrados: ${craterData.length}`;
}

function finalizarConteoAstro3() {
    const resultadoDiv = document.getElementById('resultado-astro-3');
    const plusDiv = document.getElementById('plus-astro-3');
    let grandes = 0;
    const total = craterData.length;

    let i = 0;
    while (i < total) { 
        if (craterData[i] > 50) {
            grandes++;
        }
        i++;
    }

    if (total === 0) {
        resultadoDiv.textContent = 'No se registraron diámetros.';
        plusDiv.textContent = '';
        return;
    }

    const porcentajeGrandes = ((grandes / total) * 100).toFixed(1); 

    resultadoDiv.textContent = `Total de cráteres registrados: ${total}. Cráteres que superan los 50 km: ${grandes}.`;
    plusDiv.textContent = `Plus (Calcular porcentaje): El ${porcentajeGrandes}% de los cráteres registrados son grandes.`;

    craterData = [];
}

function identificarCuerpoAstro4() {
    const codigo = document.getElementById('codigo-celeste').value;
    const resultadoDiv = document.getElementById('resultado-astro-4');
    const imgElement = document.getElementById('imagen-celeste');
    let nombre = "";
    let imagenSrc = "";

    switch (codigo) {
        case '1':
            nombre = 'Estrella';
            imagenSrc = 'img/astronomia/estrella.jpg';
            break;
        case '2':
            nombre = 'Planeta';
            imagenSrc = 'img/astronomia/planeta.jpg';
            break;
        case '3':
            nombre = 'Cometa';
            imagenSrc = 'img/astronomia/cometa.jpg';
            break;
        case '4':
            nombre = 'Asteroide';
            imagenSrc = 'img/astronomia/asteroide.jpg';
            break;
        case '5':
            nombre = 'Galaxia';
            imagenSrc = 'img/astronomia/galaxia.jpg';
            break;
        default:
            nombre = 'Código no válido. Selecciona 1-5.';
            imagenSrc = '';
    }

    resultadoDiv.textContent = `Cuerpo Celeste: ${nombre}`;

    if (imagenSrc) {
        imgElement.src = imagenSrc;
        imgElement.style.display = 'block';
        document.getElementById('plus-astro-4').textContent = `Plus: Imagen representativa de un(a) ${nombre}.`;
    } else {
        imgElement.style.display = 'none';
        document.getElementById('plus-astro-4').textContent = '';
    }
}

function calcularMediana(arr) {
    if (arr.length === 0) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    }
    return (sorted[mid - 1] + sorted[mid]) / 2;
}

function registrarLuxAstro5() {
    const input = document.getElementById('nivel-lux');
    const valor = input.value.trim().toLowerCase();

    if (valor === 'no') {
        finalizarRegistroAstro5();
        return;
    }

    const lux = parseFloat(valor);
    if (isNaN(lux) || lux < 0) {
        document.getElementById('resultado-astro-5').innerHTML = '<span class="alerta">Ingresa un valor numérico o "no".</span>';
        return;
    }

    let mostrarNocheProfunda = false;
    luxData.push(lux);

    if (lux < 5) {
        mostrarNocheProfunda = true;
    }

    const alertaDiv = document.getElementById('alerta-lux-astro-5');
    alertaDiv.textContent = mostrarNocheProfunda ? 'ALERTA: Noche Profunda (< 5 lux)' : '';
    alertaDiv.style.display = mostrarNocheProfunda ? 'block' : 'none';

    document.getElementById('lista-lux-astro-5').textContent = `Registros: ${luxData.length}`;
    input.value = '';
}

function finalizarRegistroAstro5() {
    const resultadoDiv = document.getElementById('resultado-astro-5');
    const plusDiv = document.getElementById('plus-astro-5');

    if (luxData.length === 0) {
        resultadoDiv.textContent = 'No se registraron niveles de luz.';
        plusDiv.textContent = '';
        return;
    }

    const mediana = calcularMediana(luxData); 

    resultadoDiv.textContent = `Registro finalizado. Total de mediciones: ${luxData.length}`;
    plusDiv.textContent = `Plus (Mediana): La mediana de los niveles de luz registrados es: ${mediana.toFixed(2)} lux.`;

    luxData = [];
    document.getElementById('lista-lux-astro-5').textContent = 'Registros: 0';
    document.getElementById('alerta-lux-astro-5').style.display = 'none';
}

function clasificarAQI() {
    const aqi = parseInt(document.getElementById('aqi-ambiente').value);
    const resultadoDiv = document.getElementById('resultado-ambiente-1');
    const plusDiv = document.getElementById('plus-ambiente-1');
    let clasificacion = "";
    let color = "";
    let recomendacion = "";

    if (isNaN(aqi) || aqi < 0 || aqi > 500) {
        resultadoDiv.innerHTML = '<span class="alerta">Ingresa un valor AQI válido (0-500).</span>';
        plusDiv.textContent = '';
        return;
    }

    if (aqi <= 50) {
        clasificacion = 'Bueno';
        color = 'green';
        recomendacion = 'Apto para actividades al aire libre.';
    } else if (aqi <= 100) {
        clasificacion = 'Moderado';
        color = 'gold';
        recomendacion = 'Personas sensibles deben considerar limitar el tiempo al aire libre.';
    } else if (aqi <= 150) {
        clasificacion = 'Dañino para grupos sensibles';
        color = 'orange';
        recomendacion = 'Niños y ancianos deben evitar el esfuerzo prolongado.';
    } else {
        clasificacion = 'Muy Dañino';
        color = 'red';
        recomendacion = 'Evitar el ejercicio al exterior y usar mascarilla.';
    }

    resultadoDiv.innerHTML = `
        Clasificación: <span style="background-color: ${color}; color: white; padding: 5px; border-radius: 3px;">
            ${clasificacion}
        </span>
    `;
    plusDiv.textContent = `Plus (Recomendación de actividad): ${recomendacion}`;
}

function generarInputsAmb2() {
    const num = parseInt(document.getElementById('num-mediciones-amb').value);
    const container = document.getElementById('inputs-ambiente-2');
    container.innerHTML = '';
    
    if (isNaN(num) || num < 1) {
        container.innerHTML = '<span class="alerta">Ingresa un número válido.</span>';
        return;
    }

    for (let i = 0; i < num; i++) {
        container.innerHTML += `
            <label for="db-${i}">Nivel de Ruido ${i + 1} (dB):</label>
            <input type="number" id="db-${i}" class="db-input" step="0.1" required>
        `;
    }
}

function calcularPromedioAmb2() {
    const inputs = document.querySelectorAll('#inputs-ambiente-2 .db-input');
    const resultadoDiv = document.getElementById('resultado-ambiente-2');
    const plusDiv = document.getElementById('plus-ambiente-2');
    let total = 0;
    let mediciones = [];

    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
            total += valor;
            mediciones.push(valor);
        }
    });

    if (mediciones.length === 0) {
        resultadoDiv.textContent = 'No se ingresaron mediciones válidas.';
        plusDiv.textContent = '';
        return;
    }

    const promedio = total / mediciones.length;
    let clasificacionAcustica = ''; 

    if (promedio < 60) {
        clasificacionAcustica = 'Zona Tranquila (Niveles Bajos)';
    } else if (promedio <= 75) {
        clasificacionAcustica = 'Zona Moderada (Riesgo bajo)';
    } else {
        clasificacionAcustica = 'Zona Ruidosa (Riesgo alto de contaminación auditiva)';
    }

    resultadoDiv.textContent = `Promedio de Ruido: ${promedio.toFixed(1)} dB`;
    plusDiv.textContent = `Plus (Clasificación Acústica): ${clasificacionAcustica}`;
}

function registrarFocoAmb3() {
    const input = document.getElementById('temperatura-foco');
    const temp = parseFloat(input.value);

    if (temp === 0) {
        finalizarConteoAmb3();
        return;
    }
    
    if (isNaN(temp) || temp < 0) {
        document.getElementById('resultado-ambiente-3').innerHTML = '<span class="alerta">Ingresa una temperatura válida.</span>';
        return;
    }

    temperaturaDataAmb.push(temp);
    input.value = '';
    document.getElementById('lista-focos-ambiente-3').textContent = `Temperaturas registradas: ${temperaturaDataAmb.length}`;
}

function finalizarConteoAmb3() {
    const resultadoDiv = document.getElementById('resultado-ambiente-3');
    const plusDiv = document.getElementById('plus-ambiente-3');
    let focos = 0;
    const total = temperaturaDataAmb.length;
    let maxima = 0; 

    let i = 0;
    while (i < total) { 
        if (temperaturaDataAmb[i] > 45) {
            focos++;
        }
        if (temperaturaDataAmb[i] > maxima) {
            maxima = temperaturaDataAmb[i]; 
        }
        i++;
    }

    if (total === 0) {
        resultadoDiv.textContent = 'No se registraron temperaturas.';
        plusDiv.textContent = '';
        return;
    }

    resultadoDiv.textContent = `Total de mediciones: ${total}. Focos de calor (> 45°C): ${focos}.`;
    plusDiv.textContent = `Plus (Mostrar la Máxima): La temperatura máxima registrada fue: ${maxima.toFixed(1)}°C.`;

    temperaturaDataAmb = [];
}

function clasificarResiduoAmb4() {
    const codigo = document.getElementById('codigo-residuo').value;
    const resultadoDiv = document.getElementById('resultado-ambiente-4');
    const plusDiv = document.getElementById('plus-ambiente-4');
    let tipo = "";
    let separador = "";

    switch (codigo) {
        case '1':
            tipo = 'Orgánico';
            separador = 'Contenedor **Marrón**. Destinado a restos de comida y jardinería.';
            break;
        case '2':
            tipo = 'Plástico';
            separador = 'Contenedor **Amarillo**. Destinado a envases, botellas y bolsas plásticas.';
            break;
        case '3':
            tipo = 'Papel/Cartón';
            separador = 'Contenedor **Azul**. Destinado a periódicos, cajas y folletos.';
            break;
        case '4':
            tipo = 'Vidrio';
            separador = 'Contenedor **Verde**. Destinado a botellas, frascos y tarros de vidrio.';
            break;
        default:
            tipo = 'Residuo no clasificado. Selecciona 1-4.';
            separador = '';
    }

    resultadoDiv.textContent = `Tipo de Residuo: ${tipo}`;
    
    plusDiv.innerHTML = `Plus (Separador de Residuos): Se debe depositar en el ${separador}`;
}

function registrarNivelRioAmb5() {
    const input = document.getElementById('nivel-rio');
    const valor = input.value.trim().toLowerCase();
    const alertaDiv = document.getElementById('alerta-rio-ambiente-5');

    if (valor === 'no') {
        finalizarRegistroAmb5();
        return;
    }

    const nivel = parseFloat(valor);
    if (isNaN(nivel) || nivel < 0) {
        document.getElementById('resultado-ambiente-5').innerHTML = '<span class="alerta">Ingresa un valor numérico o "no".</span>';
        return;
    }

    nivelRioData.push(nivel);
    
    if (nivel > 3) {
        alertaDiv.textContent = '¡ALERTA DE CRECIDA! Nivel superior a 3 metros.';
        alertaDiv.style.display = 'block';
    } else {
        alertaDiv.style.display = 'none';
    }

    document.getElementById('lista-rio-ambiente-5').textContent = `Registros: ${nivelRioData.length}`;
    input.value = '';
}

function finalizarRegistroAmb5() {
    const resultadoDiv = document.getElementById('resultado-ambiente-5');
    const plusDiv = document.getElementById('plus-ambiente-5');
    const promedioHistorico = parseFloat(document.getElementById('promedio-historico').value);

    if (nivelRioData.length === 0) {
        resultadoDiv.textContent = 'No se registraron niveles.';
        plusDiv.textContent = '';
        return;
    }

    const ultimoNivel = nivelRioData[nivelRioData.length - 1];
    let desviacion = 0;
    let mensajeDesviacion = ''; 

    if (!isNaN(promedioHistorico)) {
        desviacion = ultimoNivel - promedioHistorico;
        mensajeDesviacion = `La desviación del último registro (${ultimoNivel.toFixed(2)}m) respecto al promedio histórico (${promedioHistorico.toFixed(2)}m) es de ${desviacion.toFixed(2)}m.`;
        if (desviacion > 0) {
            mensajeDesviacion += ' (¡Nivel actual superior al promedio!)';
        } else if (desviacion < 0) {
            mensajeDesviacion += ' (Nivel actual inferior al promedio)';
        }
    } else {
        mensajeDesviacion = 'Promedio histórico no válido para calcular la desviación.';
    }

    resultadoDiv.textContent = `Registro finalizado. Total de mediciones: ${nivelRioData.length}. Último nivel: ${ultimoNivel.toFixed(2)}m.`;
    plusDiv.textContent = `Plus (Desviación Histórica): ${mensajeDesviacion}`;

    nivelRioData = [];
    document.getElementById('lista-rio-ambiente-5').textContent = 'Registros: 0';
    document.getElementById('alerta-rio-ambiente-5').style.display = 'none';
}

function clasificarPresion() {
    const sistolica = parseInt(document.getElementById('sistolica-salud').value);
    const diastolica = parseInt(document.getElementById('diastolica-salud').value);
    const resultadoDiv = document.getElementById('resultado-salud-1');
    const plusDiv = document.getElementById('plus-salud-1');
    let clasificacion = "";

    if (isNaN(sistolica) || isNaN(diastolica) || sistolica <= 0 || diastolica <= 0) {
        resultadoDiv.innerHTML = '<span class="alerta">Ingresa valores de presión válidos.</span>';
        plusDiv.textContent = '';
        return;
    }

    if (sistolica < 120 && diastolica < 80) {
        clasificacion = 'Normal';
    } else if ((sistolica >= 120 && sistolica < 130) && diastolica < 80) {
        clasificacion = 'Elevada';
    } else if ((sistolica >= 130 && sistolica < 140) || (diastolica >= 80 && diastolica < 90)) {
        clasificacion = 'Hipertensión Arterial (HTA) grado 1';
    } else {
        clasificacion = 'Hipertensión Arterial (HTA) grado 2';
    }

    resultadoDiv.textContent = `Clasificación de Presión: ${clasificacion}`;
    
    plusDiv.innerHTML = `
        <p><strong>Plus: Calculadora de Pulso</strong></p>
        <label for="pulso-salud">Frecuencia de Pulso (lpm):</label>
        <input type="number" id="pulso-salud" min="10" max="250">
        <button type="button" onclick="validarPulso()">Validar Pulso</button>
        <div id="resultado-pulso-salud" class="resultado"></div>
    `;
}

function validarPulso() {
    const pulso = parseInt(document.getElementById('pulso-salud').value);
    const pulsoDiv = document.getElementById('resultado-pulso-salud');
    let estado = '';

    if (isNaN(pulso) || pulso <= 0) {
        pulsoDiv.innerHTML = '<span class="alerta">Ingrese un pulso válido.</span>';
        return;
    }

    if (pulso >= 60 && pulso <= 100) {
        estado = '<span style="color: green;">Normal (Rango de 60-100 lpm)</span>';
    } else if (pulso < 60) {
        estado = '<span class="alerta">Bradicardia (Bajo)</span>';
    } else {
        estado = '<span class="alerta">Taquicardia (Alto)</span>';
    }

    pulsoDiv.innerHTML = `Pulso registrado: ${pulso} lpm. Estado: ${estado}`;
}

function calcularModa(arr) {
    if (arr.length === 0) return 'N/A';
    const counts = {};
    let maxCount = 0;
    let moda = [];

    arr.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
        if (counts[val] > maxCount) {
            maxCount = counts[val];
        }
    });

    for (const val in counts) {
        if (counts[val] === maxCount) {
            moda.push(parseFloat(val));
        }
    }
    
    if (moda.length === arr.length) return 'No hay moda (todos únicos)';
    return moda.join(', ');
}

function generarInputsSalud2() {
    const num = parseInt(document.getElementById('num-pacientes-salud').value);
    const container = document.getElementById('inputs-salud-2');
    container.innerHTML = '';
    
    if (isNaN(num) || num < 1) {
        container.innerHTML = '<span class="alerta">Ingresa un número válido de pacientes.</span>';
        return;
    }

    for (let i = 0; i < num; i++) {
        container.innerHTML += `
            <label for="temp-paciente-${i}">Temperatura Paciente ${i + 1} (°C):</label>
            <input type="number" id="temp-paciente-${i}" class="temp-input" step="0.1" required>
        `;
    }
}

function calcularPromedioSalud2() {
    const inputs = document.querySelectorAll('#inputs-salud-2 .temp-input');
    const resultadoDiv = document.getElementById('resultado-salud-2');
    const plusDiv = document.getElementById('plus-salud-2');
    let total = 0;
    let temperaturas = [];

    inputs.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
            total += valor;
            temperaturas.push(valor);
        }
    });

    if (temperaturas.length === 0) {
        resultadoDiv.textContent = 'No se ingresaron temperaturas válidas.';
        plusDiv.textContent = '';
        return;
    }

    const promedio = total / temperaturas.length;
    const moda = calcularModa(temperaturas); 

    resultadoDiv.textContent = `Promedio de Temperatura: ${promedio.toFixed(1)}°C`;
    plusDiv.textContent = `Plus (Mostrar la Moda): La temperatura que se repite más es: ${moda}`;
}

function registrarFiebreSalud3() {
    const input = document.getElementById('temperatura-fiebre');
    const temp = parseFloat(input.value);
    const alertaDiv = document.getElementById('alerta-alta-temp-salud-3');

    if (temp === 0) {
        finalizarConteoSalud3();
        return;
    }
    
    if (isNaN(temp) || temp < 0) {
        document.getElementById('resultado-salud-3').innerHTML = '<span class="alerta">Ingresa una temperatura válida.</span>';
        return;
    }

    temperaturaDataSalud.push(temp);
    input.value = '';
    document.getElementById('lista-fiebre-salud-3').textContent = `Temperaturas registradas: ${temperaturaDataSalud.length}`;

    if (temp >= 40.0) {
        alertaDiv.textContent = '¡EMERGENCIA! Temperatura extremadamente alta (≥ 40°C).';
        alertaDiv.style.display = 'block';
    } else {
        alertaDiv.style.display = 'none';
    }
}

function finalizarConteoSalud3() {
    const resultadoDiv = document.getElementById('resultado-salud-3');
    const plusDiv = document.getElementById('plus-salud-3');
    let fiebre = 0;
    const total = temperaturaDataSalud.length;

    let i = 0;
    while (i < total) { 
        if (temperaturaDataSalud[i] >= 38.0) {
            fiebre++;
        }
        i++;
    }

    if (total === 0) {
        resultadoDiv.textContent = 'No se registraron temperaturas.';
        plusDiv.textContent = '';
        return;
    }

    const porcentajeFiebre = ((fiebre / total) * 100).toFixed(1); 
    
    resultadoDiv.textContent = `Total de pacientes registrados: ${total}. Pacientes con fiebre (≥ 38°C): ${fiebre}.`;
    plusDiv.textContent = `Plus: El ${porcentajeFiebre}% de los pacientes registrados tienen fiebre.`;

    temperaturaDataSalud = [];
    document.getElementById('alerta-alta-temp-salud-3').style.display = 'none';
}

function clasificarTriageSalud4() {
    const codigo = document.getElementById('codigo-triage').value;
    const resultadoDiv = document.getElementById('resultado-salud-4');
    const plusDiv = document.getElementById('plus-salud-4');
    let categoria = "";
    let color = "";
    let tiempoEspera = "";

    switch (codigo) {
        case '1':
            categoria = 'ROJO';
            color = 'red';
            tiempoEspera = 'Inmediata (0 minutos)'; 
            break;
        case '2':
            categoria = 'AMARILLO';
            color = 'gold';
            tiempoEspera = 'Hasta 15 minutos'; 
            break;
        case '3':
            categoria = 'VERDE';
            color = 'green';
            tiempoEspera = 'Hasta 60 minutos'; 
            break;
        case '4':
            categoria = 'AZUL';
            color = 'blue';
            tiempoEspera = 'Hasta 120 minutos'; 
            break;
        default:
            categoria = 'Selecciona un código válido (1-4).';
            color = 'black';
            tiempoEspera = 'N/A';
    }

    resultadoDiv.innerHTML = `<span style="color: ${color};">${categoria}</span>`;

    plusDiv.textContent = `Plus (Tiempo Máximo de Espera): ${tiempoEspera}`;
}

function registrarSaturacionSalud5() {
    const input = document.getElementById('saturacion-spo2');
    const valor = input.value.trim().toLowerCase();
    const alertaDiv = document.getElementById('alerta-hipoxia-salud-5');

    if (valor === 'no') {
        finalizarRegistroSalud5();
        return;
    }

    const spo2 = parseFloat(valor);
    if (isNaN(spo2) || spo2 < 0 || spo2 > 100) {
        document.getElementById('resultado-salud-5').innerHTML = '<span class="alerta">Ingresa un valor de 0-100 o "no".</span>';
        return;
    }

    saturacionData.push(spo2);
    
    if (spo2 < 90) {
        alertaDiv.textContent = '¡ALERTA DE HIPOXIA! Saturación menor al 90%.';
        alertaDiv.style.display = 'block';
    } else {
        alertaDiv.style.display = 'none';
    }

    document.getElementById('lista-spo2-salud-5').textContent = `Registros: ${saturacionData.length}`;
    input.value = '';
}

function finalizarRegistroSalud5() {
    const resultadoDiv = document.getElementById('resultado-salud-5');
    
    if (saturacionData.length === 0) {
        resultadoDiv.textContent = 'No se registraron saturaciones.';
        return;
    }

    resultadoDiv.innerHTML = `Registro finalizado. Total de mediciones: ${saturacionData.length}.`;
    
    saturacionData = [];
    document.getElementById('lista-spo2-salud-5').textContent = 'Registros: 0';
    document.getElementById('alerta-hipoxia-salud-5').style.display = 'none';
}