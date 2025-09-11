// // src/components/data/servicesData.js

// // Importa los iconos que usarás.
// // Debes tener la biblioteca Font Awesome instalada en tu proyecto.
// // npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
// import {
//   faStethoscope,
//   faBaby,
//   faSyringe,
//   faHeartbeat,
//   faVial,
//   faLungs,
//   faXRay,
//   faFileMedicalAlt,
//   faBone,
//   faUserMd,
//   faDumbbell,
//   faBrain,
//   faHandsHelping,
//   faHeart,
// } from '@fortawesome/free-solid-svg-icons';


// const servicesData = {
//   consultas: [
//     {
//       name: "Medicina General",
//       description: "Atención médica integral para la prevención, diagnóstico y tratamiento de enfermedades comunes.",
//       video: "https://www.youtube.com/embed/n3vL3i7_9dI",
//       benefits: ["Chequeos generales", "Prevención de enfermedades", "Diagnóstico rápido y preciso"],
//       icon: faStethoscope
//     },
//     {
//       name: "Pediatría",
//       description: "Atención especializada en el cuidado y desarrollo integral de los niños, desde recién nacidos hasta la adolescencia.",
//       video: "https://www.youtube.com/embed/z-2_02o5aG8",
//       benefits: ["Control de crecimiento y desarrollo", "Vacunación", "Atención de enfermedades infantiles"],
//       icon: faBaby
//     },
//     {
//       name: "Ginecología y Obstetricia",
//       description: "Seguimiento completo de la salud reproductiva y el embarazo con especialistas calificados.",
//       video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
//       benefits: ["Control prenatal", "Exámenes ginecológicos de rutina", "Asesoría en planificación familiar"],
//       icon: faHeart
//     },
//     {
//       name: "Cardiología",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },

//     // medicina interna
//         {
//       name: "Medicina Interna",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },

//     // ortopedia
//         {
//       name: "Cardiología",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },
//     // cirugia general
//         {
//       name: "Cirugía General",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },
//     // neuroPlogia
//             {
//       name: "Cirugía General",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },

//     // nutricion dietetica

//            {
//       name: "Nutricion Dietica ",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },

//     //Psicologia
//               {
//       name: "psicologia ",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },
// //  fonoaudiologia
//               {
//       name: "Fonoaudiologia ",
//       description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
//       icon: faHeartbeat
//     },

//   ],
//   diagnosticos: [
//     {
//       name: "Laboratorio Clínico",
//       description: "Pruebas de sangre, orina y otros análisis para apoyar el diagnóstico médico.",
//       video: "https://www.youtube.com/embed/Uo9pEwJ3M_M",
//       benefits: ["Resultados rápidos", "Alta precisión en los análisis", "Servicio a domicilio"],
//       icon: faVial
//     },
//     {
//       name: "Ecografía",
//       description: "Estudios de imagen de alta resolución para un diagnóstico certero de órganos internos.",
//       video: "https://www.youtube.com/embed/V6XW58bN60w",
//       benefits: ["Evaluación fetal", "Imágenes abdominales", "Estudios de tejido blando"],
//       icon: faLungs
//     },
//     {
//       name: "Radiología",
//       description: "Rayos X y estudios por imagen para un diagnóstico oportuno y seguro.",
//       video: "https://www.youtube.com/embed/z8g-Yn70oBw",
//       benefits: ["Rayos X digitales", "Baja radiación", "Diagnóstico de fracturas y lesiones"],
//       icon: faXRay
//     },
//   ],
//   terapias: [
//     {
//       name: "Terapia Física",
//       description: "Servicios de rehabilitación y terapias físicas para recuperar la movilidad y reducir el dolor.",
//       video: "https://www.youtube.com/embed/7r-uE1tKkUo",
//       benefits: ["Rehabilitación post-quirúrgica", "Manejo del dolor crónico", "Recuperación de lesiones deportivas"],
//       icon: faDumbbell
//     },
//     {
//       name: "Terapia Ocupacional",
//       description: "Ayudamos a los pacientes a desarrollar o recuperar habilidades necesarias para su vida diaria.",
//       video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
//       benefits: ["Mejora de la autonomía", "Adaptación de entornos", "Actividades terapéuticas"],
//       icon: faBrain
//     },
//     {
//       name: "Fonoaudiología",
//       description: "Diagnóstico y tratamiento de trastornos de la comunicación, habla y audición.",
//       video: "https://www.youtube.com/embed/n3vL3i7_9dI",
//       benefits: ["Rehabilitación del habla", "Terapia de lenguaje", "Evaluación auditiva"],
//       icon: faHandsHelping
//     },
//   ],
//   enfermeria: [
//     {
//       name: "Atención Domiciliaria",
//       description: "Cuidado de enfermería profesional y personalizado en la comodidad de tu hogar.",
//       video: "https://www.youtube.com/embed/z-2_02o5aG8",
//       benefits: ["Aplicación de medicamentos", "Curaciones", "Control de signos vitales"],
//       icon: faUserMd
//     },
//     {
//       name: "Vacunación",
//       description: "Servicio de vacunación para niños y adultos a domicilio, con todos los protocolos de seguridad.",
//       video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
//       benefits: ["Prevención de enfermedades", "Personal calificado", "Sin necesidad de salir de casa"],
//       icon: faSyringe
//     },
//     {
//       name: "Control de signos vitales",
//       description: "Monitoreo constante de presión arterial, frecuencia cardiaca, temperatura y saturación de oxígeno.",
//       video: "https://www.youtube.com/embed/6yN-QkL3d_A",
//       benefits: ["Seguimiento de enfermedades crónicas", "Reporte detallado", "Alerta de emergencias"],
//       icon: faHeartbeat
//     }
//   ]
// };

// export default servicesData;

// src/components/data/servicesData.js

// Importa los iconos que usarás.
// Asegúrate de tener instalada la biblioteca Font Awesome:
// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
import {
  faStethoscope,
  faBaby,
  faSyringe,
  faHeartbeat,
  faVial,
  faLungs,
  faXRay,
  faUserMd,
  faDumbbell,
  faBrain,
  faHandsHelping,
  faHeart,
  faBone,
  faScrewdriverWrench,
  faAppleWhole,
  faCut
} from '@fortawesome/free-solid-svg-icons';

const servicesData = {
  consultas: [
    {
      name: "Medicina General",
      description: "Atención médica integral para la prevención, diagnóstico y tratamiento de enfermedades comunes.",
      video: "https://www.youtube.com/embed/n3vL3i7_9dI",
      benefits: ["Chequeos generales", "Prevención de enfermedades", "Diagnóstico rápido y preciso"],
      icon: faStethoscope
    },
    {
      name: "Pediatría",
      description: "Atención especializada en el cuidado y desarrollo integral de los niños, desde recién nacidos hasta la adolescencia.",
      video: "https://www.youtube.com/embed/z-2_02o5aG8",
      benefits: ["Control de crecimiento y desarrollo", "Vacunación", "Atención de enfermedades infantiles"],
      icon: faBaby
    },
    {
      name: "Ginecología y Obstetricia",
      description: "Seguimiento completo de la salud reproductiva y el embarazo con especialistas calificados.",
      video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
      benefits: ["Control prenatal", "Exámenes ginecológicos de rutina", "Asesoría en planificación familiar"],
      icon: faHeart
    },
    {
      name: "Cardiología",
      description: "Evaluación y tratamiento de enfermedades cardiovasculares con equipos modernos.",
      video: "https://www.youtube.com/embed/6yN-QkL3d_A",
      benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
      icon: faHeartbeat
    },
    {
      name: "Nutrición y Dietética",
      description: "Planes de alimentación personalizados para mejorar la salud, controlar el peso y prevenir enfermedades.",
      video: "https://www.youtube.com/embed/jB40R5s-c-I",
      benefits: ["Evaluación nutricional", "Planes personalizados", "Control de peso"],
      icon: faAppleWhole
    },
    {
      name: "Psicología",
      description: "Apoyo y terapia para el manejo de la salud mental, estrés, ansiedad y otros trastornos emocionales.",
      video: "https://www.youtube.com/embed/p1u4_2V99Gk",
      benefits: ["Terapia individual", "Manejo del estrés", "Apoyo emocional"],
      icon: faBrain
    },
  ],
  diagnosticos: [
    {
      name: "Laboratorio Clínico",
      description: "Pruebas de sangre, orina y otros análisis para apoyar el diagnóstico médico.",
      video: "https://www.youtube.com/embed/Uo9pEwJ3M_M",
      benefits: ["Resultados rápidos", "Alta precisión en los análisis", "Servicio a domicilio"],
      icon: faVial
    },
    {
      name: "Ecografía",
      description: "Estudios de imagen de alta resolución para un diagnóstico certero de órganos internos.",
      video: "https://www.youtube.com/embed/V6XW58bN60w",
      benefits: ["Evaluación fetal", "Imágenes abdominales", "Estudios de tejido blando"],
      icon: faLungs
    },
    {
      name: "Radiología",
      description: "Rayos X y estudios por imagen para un diagnóstico oportuno y seguro.",
      video: "https://www.youtube.com/embed/z8g-Yn70oBw",
      benefits: ["Rayos X digitales", "Baja radiación", "Diagnóstico de fracturas y lesiones"],
      icon: faXRay
    },
  ],
  complejidad: [
    {
      name: "Medicina Interna",
      description: "Atención especializada en enfermedades complejas y crónicas en adultos, con un enfoque integral.",
      video: "https://www.youtube.com/embed/lKq41n2nE9w",
      benefits: ["Diagnóstico especializado", "Manejo de enfermedades crónicas", "Seguimiento constante"],
      icon: faUserMd
    },
    {
      name: "Ortopedia y Traumatología",
      description: "Tratamiento de lesiones y enfermedades del sistema musculoesquelético con especialistas.",
      video: "https://www.youtube.com/embed/Rk46B_JqS_0",
      benefits: ["Fracturas y esguinces", "Lesiones deportivas", "Dolor articular y de columna"],
      icon: faBone
    },
    {
      name: "Cirugía General",
      description: "Procedimientos quirúrgicos de mediana complejidad para diferentes patologías.",
      video: "https://www.youtube.com/embed/Jc4E-R6q8XU",
      benefits: ["Cirugía ambulatoria", "Atención especializada", "Recuperación asistida"],
      icon: faScrewdriverWrench
    },
    {
      name: "Neurología",
      description: "Diagnóstico y tratamiento de trastornos del sistema nervioso, como migrañas, epilepsia y demencia.",
      video: "https://www.youtube.com/embed/kYV_16jF2Bw",
      benefits: ["Evaluación neurológica", "Manejo de enfermedades crónicas", "Estudios cerebrales"],
      icon: faBrain
    },
  ],
  terapias: [
    {
      name: "Terapia Física",
      description: "Servicios de rehabilitación y terapias físicas para recuperar la movilidad y reducir el dolor.",
      video: "https://www.youtube.com/embed/7r-uE1tKkUo",
      benefits: ["Rehabilitación post-quirúrgica", "Manejo del dolor crónico", "Recuperación de lesiones deportivas"],
      icon: faDumbbell
    },
    {
      name: "Terapia Ocupacional",
      description: "Ayudamos a los pacientes a desarrollar o recuperar habilidades necesarias para su vida diaria.",
      video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
      benefits: ["Mejora de la autonomía", "Adaptación de entornos", "Actividades terapéuticas"],
      icon: faHandsHelping
    },
    {
      name: "Fonoaudiología",
      description: "Diagnóstico y tratamiento de trastornos de la comunicación, habla y audición.",
      video: "https://www.youtube.com/embed/n3vL3i7_9dI",
      benefits: ["Rehabilitación del habla", "Terapia de lenguaje", "Evaluación auditiva"],
      icon: faHandsHelping
    },
  ],
  enfermeria: [
    {
      name: "Atención Domiciliaria",
      description: "Cuidado de enfermería profesional y personalizado en la comodidad de tu hogar.",
      video: "https://www.youtube.com/embed/z-2_02o5aG8",
      benefits: ["Aplicación de medicamentos", "Curaciones", "Control de signos vitales"],
      icon: faUserMd
    },
    {
      name: "Vacunación",
      description: "Servicio de vacunación para niños y adultos a domicilio, con todos los protocolos de seguridad.",
      video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
      benefits: ["Prevención de enfermedades", "Personal calificado", "Sin necesidad de salir de casa"],
      icon: faSyringe
    },
    {
      name: "Control de signos vitales",
      description: "Monitoreo constante de presión arterial, frecuencia cardiaca, temperatura y saturación de oxígeno.",
      video: "https://www.youtube.com/embed/6yN-QkL3d_A",
      benefits: ["Seguimiento de enfermedades crónicas", "Reporte detallado", "Alerta de emergencias"],
      icon: faHeartbeat
    }
  ]
};

export default servicesData;