// Importante: Asegúrate de tener un entorno de ejecución de JavaScript para ejecutar este código.

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  function generateRandomMedications() {
    const medications = ["Aspirina", "Ibuprofeno", "Paracetamol", "Metformina", "Losartan", "Simvastatina", "Amlodipino", "Ventolin"];
    const numMedications = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
    return medications.slice(0, numMedications);
  }
  
  function generateRandomControl(patientName, city) {
    const estadosEnfermedad = ["grave", "estable", "saludable"];
    const fechaControl = generateRandomDate(new Date(1985, 0, 1), new Date());
    const peso = Math.random() * (100 - 50) + 50;
    const cantidadExamenes = Math.floor(Math.random() * 10) + 1;
    const medicamentos = generateRandomMedications();
    const nombreMedico = "Dr. " + patientName.split(" ")[1];
    
    return {
      "nombre": patientName,
      "Estado de la enfermedad": estadosEnfermedad[Math.floor(Math.random() * estadosEnfermedad.length)],
      "fecha control": fechaControl.toISOString(),
      "peso": peso.toFixed(1),
      "cantidad examenes": cantidadExamenes,
      "medicamentos prescritos": medicamentos,
      "nombre medico": nombreMedico,
      "ciudad medico": city
    };
  }
  
  const pacientes = [
    {"nombre": "John", "ciudad": "Arica"},
    {"nombre": "Jane", "ciudad": "Putre"},
    {"nombre": "Michael", "ciudad": "Punta Arenas"},
    {"nombre": "Emily", "ciudad": "Puerto Natales"},
    {"nombre": "Daniel", "ciudad": "Coyhaique"},
    {"nombre": "Olivia", "ciudad": "Puerto Aysén"},
    {"nombre": "David", "ciudad": "Arica"},
    {"nombre": "Sophia", "ciudad": "Putre"},
    {"nombre": "Joseph", "ciudad": "Punta Arenas"},
    {"nombre": "Mia", "ciudad": "Puerto Natales"},
    {"nombre": "Christopher", "ciudad": "Coyhaique"},
    {"nombre": "Ava", "ciudad": "Puerto Aysén"},
    {"nombre": "Andrew", "ciudad": "Arica"},
    {"nombre": "Isabella", "ciudad": "Putre"},
    {"nombre": "Ethan", "ciudad": "Punta Arenas"},
    {"nombre": "Charlotte", "ciudad": "Puerto Natales"},
    {"nombre": "Alexander", "ciudad": "Coyhaique"},
    {"nombre": "Amelia", "ciudad": "Puerto Aysén"},
    {"nombre": "James", "ciudad": "Arica"},
    {"nombre": "Abigail", "ciudad": "Putre"},
    {"nombre": "Benjamin", "ciudad": "Punta Arenas"},
    {"nombre": "Harper", "ciudad": "Puerto Natales"},
    {"nombre": "Daniel", "ciudad": "Coyhaique"},
    {"nombre": "Ava", "ciudad": "Puerto Aysén"},
    {"nombre": "Andrew", "ciudad": "Arica"},
    {"nombre": "Isabella", "ciudad": "Putre"},
    {"nombre": "Ethan", "ciudad": "Punta Arenas"},
    {"nombre": "Charlotte", "ciudad": "Puerto Natales"},
    {"nombre": "Alexander", "ciudad": "Coyhaique"},
    {"nombre": "Amelia", "ciudad": "Puerto Aysén"},
    {"nombre": "James", "ciudad": "Arica"},
    {"nombre": "Abigail", "ciudad": "Putre"},
    {"nombre": "Benjamin", "ciudad": "Punta Arenas"},
    {"nombre": "Harper", "ciudad": "Puerto Natales"},
    {"nombre": "Daniel", "ciudad": "Coyhaique"},
    {"nombre": "Ava", "ciudad": "Puerto Aysén"},
    {"nombre": "Andrew", "ciudad": "Arica"},
    {"nombre": "Isabella", "ciudad": "Putre"},
    {"nombre": "Ethan", "ciudad": "Punta Arenas"},
    {"nombre": "Charlotte", "ciudad": "Puerto Natales"},
    {"nombre": "Alexander", "ciudad": "Coyhaique"},
    {"nombre": "Amelia", "ciudad": "Puerto Aysén"},
    {"nombre": "James", "ciudad": "Arica"},
    {"nombre": "Abigail", "ciudad": "Putre"},
    {"nombre": "Benjamin", "ciudad": "Punta Arenas"},
    {"nombre": "Harper", "ciudad": "Puerto Natales"},
    {"nombre": "Daniel", "ciudad": "Coyhaique"},
    {"nombre": "John", "ciudad": "Arica"},
    {"nombre": "Jane", "ciudad": "Putre"},
    {"nombre": "Michael", "ciudad": "Punta Arenas"},
    {"nombre": "Emily", "ciudad": "Puerto Natales"},
    {"nombre": "Daniel", "ciudad": "Coyhaique"},
    {"nombre": "Olivia", "ciudad": "Puerto Aysén"},
      {"nombre": "David", "ciudad": "Arica"},
      {"nombre": "Sophia", "ciudad": "Putre"},
      {"nombre": "Joseph", "ciudad": "Punta Arenas"},
      {"nombre": "Mia", "ciudad": "Puerto Natales"},
      {"nombre": "Christopher", "ciudad": "Coyhaique"},
      {"nombre": "Ava", "ciudad": "Puerto Aysén"},
      {"nombre": "Andrew", "ciudad": "Arica"},
      {"nombre": "Isabella", "ciudad": "Putre"},
      {"nombre": "Ethan", "ciudad": "Punta Arenas"},
      {"nombre": "Charlotte", "ciudad": "Puerto Natales"},
      {"nombre": "Alexander", "ciudad": "Coyhaique"},
      {"nombre": "Amelia", "ciudad": "Puerto Aysén"},
      {"nombre": "James", "ciudad": "Arica"},
      {"nombre": "Abigail", "ciudad": "Putre"},
      {"nombre": "Benjamin", "ciudad": "Punta Arenas"},
      {"nombre": "Harper", "ciudad": "Puerto Natales"},
      {"nombre": "Daniel", "ciudad": "Coyhaique"}];
  const controles = [];


  pacientes.forEach(paciente => {
    controles.push(generateRandomControl(paciente.nombre, paciente.ciudad));
  });
  
  console.log(JSON.stringify(controles, null, 2));
  