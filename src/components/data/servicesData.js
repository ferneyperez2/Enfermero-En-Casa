// src/components/data/servicesData.js

// Importa los iconos de Font Awesome
import {
  faStethoscope,
  faBaby,
  faSyringe,
  faHeartbeat,
  faVial,
  faLungs,
  faXRay,
  faFileMedicalAlt,
  faBone,
  faUserMd,
  faDumbbell,
  faBrain,
  faHandsHelping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

// IMPORTACIONES DE IMÁGENES:
// La ruta es ../../assets/ porque sube dos niveles:
// 1. Desde 'data' hasta 'components' (..).
// 2. Desde 'components' hasta 'src' (..).
// 3. Entra a la carpeta 'assets'.
import medicinaGeneralImage from '../../assets/medicinageneral.png';
import cardiologiaImage from '../../assets/cardiologia.jpg';
import ecografiaImage from '../../assets/ecografia.jpg';
import ginecologiaImage from '../../assets/ginecologia.jpg';
import laboratorioImage from '../../assets/laboratorio.jpg';
import medicinaInternaImage from '../../assets/medicinainterna.png';
import nutricionImage from '../../assets/nutricion-y-dieta.jpg';
import pediatriaImage from '../../assets/pediatria.jpg';
import radiologiaImage from '../../assets/radiografia.jpg';
import psicologiaImage from '../../assets/psicologia.jpg';

const servicesData = {
  consultas: [
    {
      name: "Medicina General",
      description: "La medicina general es la atención médica primaria y preventiva de un paciente, realizada por un médico de cabecera que trata un amplio abanico de enfermedades comunes, desde infecciones hasta enfermedades crónicas, y actúa como primer punto de contacto en el sistema de salud. Este profesional no se especializa en un área concreta, sino que se enfoca en la salud integral del paciente, realiza diagnósticos, prescribe tratamientos sencillos, gestiona patologías crónicas y deriva a especialistas cuando es necesario. ",
      benefits: ["Chequeos generales", "Prevención de enfermedades", "Diagnóstico rápido y preciso"],
      icon: faStethoscope,
      image: medicinaGeneralImage
    },
    {
      name: "Internista",
      description: "Una consulta especializada por internista es una visita médica para el manejo integral de enfermedades no quirúrgicas en adultos, ya que los internistas son médicos especializados en el cuidado de adultos que abordan problemas de salud complejos y crónicos como diabetes, hipertensión, enfermedades cardíacas, pulmonares y renales.",
      video: "https://www.youtube.com/embed/z-2_02o5aG8",
      benefits: ["Atención integral", "Diagnóstico preciso","Manejo de enfermedades crónicas"],
      icon: faUserMd,
      image: medicinaInternaImage
    },
    {
      name: "Pediatría",
      description: "La pediatría es la rama de la medicina que se enfoca en la salud, el desarrollo y el tratamiento de enfermedades en bebés, niños y adolescentes, abarcando desde el cuidado preventivo hasta el manejo de condiciones complejas. Los pediatras no solo diagnostican y tratan enfermedades, sino que también proporcionan orientación sobre nutrición, desarrollo emocional, vacunación y crianza, con el fin de asegurar un crecimiento saludable integral del niño",
      video: "https://www.youtube.com/embed/z-2_02o5aG8",
      benefits: ["Control de crecimiento y desarrollo", "Vacunación", "Atención de enfermedades infantiles"],
      icon: faBaby,
      image: pediatriaImage
    },
    {
      name: "Ginecología y Obstetricia",
      description: "La ginecología y obstetricia (o ginecoobstetricia) es una especialidad médica que se dedica al cuidado integral de la salud de la mujer, abarcando desde la salud reproductiva y ginecológica (órganos, útero, ovarios, etc.) hasta la atención del embarazo, parto y posparto. Los profesionales, llamados ginecólogos obstetras o ginecobstetras, abordan enfermedades y condiciones de los órganos reproductores femeninos y se encargan del manejo de las mujeres embarazadas y los cuidados durante el nacimiento. ",
      video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
      benefits: ["Control prenatal", "Exámenes ginecológicos de rutina", "Asesoría en planificación familiar"],
      icon: faHeart,
      image: ginecologiaImage
    },
    {name: "Ortopedia",
      description: "La ortopedia es la especialidad médica que se encarga del diagnóstico, tratamiento y rehabilitación de lesiones y enfermedades del sistema musculoesquelético, que incluye los huesos, articulaciones, músculos, tendones y ligamentos. Los médicos especialistas en ortopedia, llamados ortopedistas, tratan afecciones de todas las edades, desde deformidades congénitas en niños hasta artrosis en adultos mayores, y pueden especializarse en diversas áreas como la columna, mano, rodilla, pie, pediatría o medicina deportiva. ",
      video: "https://www.youtube.com/embed/6yN-QkL3d_A",
      benefits: ["Recuperación de la movilidad y funcionalidad","Alivio del dolor en huesos, articulaciones y músculos.traumáticas"],
      icon: faBone
    },
    {
      name: "Cardiología",
      description: "La cardiología es la rama de la medicina dedicada al estudio, diagnóstico, tratamiento y prevención de las enfermedades del corazón y el sistema circulatorio. Esta especialidad abarca afecciones como enfermedades coronarias, insuficiencia cardíaca, arritmias e hipertensión arterial, y aunque no incluye la cirugía (realizada por el cirujano cardiovascular), puede derivar al paciente a esta para intervenciones necesarias. ",
      benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de la presión arterial"],
      icon: faHeartbeat,
      image: cardiologiaImage
    },
    {
      name: "Nutrición y Dieta",
      description: "La nutrición es un pilar fundamental para la salud. Nuestros especialistas te ayudan a crear planes de alimentación personalizados para mejorar tu bienestar, controlar tu peso, y manejar condiciones médicas específicas como diabetes o hipertensión. ",
      benefits: ["Planes personalizados", "Control de peso", "Manejo de enfermedades"],
      icon: faDumbbell,
      image: nutricionImage
    },
  ],
  diagnosticos: [
    {
      name: "Laboratorio Clínico",
      description: "Un laboratorio clínico es una instalación médica dedicada al análisis de muestras biológicas (como sangre, orina y tejidos) para ayudar en el diagnóstico, seguimiento y prevención de enfermedades, así como en la evaluación de la salud general. Utiliza tecnología avanzada y profesionales especializados para detectar biomarcadores, células anormales o microorganismos, proporcionando a los médicos información precisa y oportuna para tomar decisiones clínicas. ",
      video: "https://www.youtube.com/embed/Uo9pEwJ3M_M",
      benefits: ["Resultados rápidos", "Alta precisión en los análisis", "Servicio a domicilio"],
      icon: faVial,
      image: laboratorioImage
    },
    {
      name: "Ecografía",
      description: "Una ecografía es una prueba diagnóstica que utiliza ondas sonoras de alta frecuencia (ultrasonidos) para crear imágenes en tiempo real de los órganos, tejidos y estructuras internas del cuerpo. Un técnico aplica un gel sobre la piel y mueve un transductor que envía y recibe ondas sonoras, las cuales rebotan y forman una imagen digital en un monitor. Es un procedimiento seguro, indoloro y sin exposición a radiación, ampliamente utilizado en el embarazo y para examinar diversas partes del cuerpo, como el abdomen, el corazón y la pelvis. ",
      video: "https://www.youtube.com/embed/V6XW58bN60w",
      benefits: ["Evaluación fetal", "Imágenes abdominales", "Estudios de tejido blando"],
      icon: faLungs,
      image: ecografiaImage
    },
    {
      name: "Radiología",
      description: "La radiología es la especialidad médica que usa diversas tecnologías, como los rayos X, las ondas de sonido o los campos magnéticos, para generar imágenes del interior del cuerpo con fines de diagnóstico, pronóstico y tratamiento de enfermedades. Esta especialidad se divide en radiología diagnóstica, que se enfoca en las imágenes, y radiología intervencionista, que utiliza dichas imágenes para guiar procedimientos terapéuticos mínimamente invasivos",
      video: "https://www.youtube.com/embed/z8g-Yn70oBw",
      benefits: ["Rayos X digitales", "Baja radiación", "Diagnóstico de fracturas y lesiones"],
      icon: faXRay,
      image: radiologiaImage
    },
  ],
  terapias: [
    {
      name: "Terapia Física",
      description: "La terapia física, también llamada fisioterapia, es una especialidad de las ciencias de la salud que se enfoca en mejorar, restaurar y prevenir la capacidad física del cuerpo humano mediante ejercicios terapéuticos y técnicas físicas como masajes, calor, frío, o agentes eléctricos. Su objetivo es aliviar el dolor, fortalecer músculos y articulaciones, y mejorar la movilidad para aumentar la independencia funcional y la calidad de vida de las personas afectadas por lesiones, enfermedades o condiciones genéticas. ",
      video: "https://www.youtube.com/embed/7r-uE1tKkUo",
      benefits: ["Rehabilitación post-quirúrgica", "Manejo del dolor crónico", "Recuperación de lesiones deportivas"],
      icon: faDumbbell
    },
    {
      name: "Terapia Ocupacional",
      description: "La terapia ocupacional (TO) es una disciplina de la salud que ayuda a personas de todas las edades a realizar las actividades de su vida diaria (ocupaciones) para promover su salud, bienestar y participación. Utiliza actividades terapéuticas para mejorar la independencia en el cuidado personal, el trabajo, el estudio y el ocio, adaptando tareas o el entorno para aumentar la calidad de vida. ",
      video: "https://www.youtube.com/embed/6iY5nE-uG0Q",
      benefits: ["Mejora de la autonomía", "Adaptación de entornos", "Actividades terapéuticas"],
      icon: faBrain
    },
    {
      name: "Fonoaudiología",
      description: "La fonoaudiología es una disciplina de la salud que se enfoca en la prevención, evaluación, diagnóstico y tratamiento de los trastornos relacionados con la comunicación humana, abarcando el lenguaje, el habla, la voz, la audición y la deglución en personas de todas las edades. Los fonoaudiólogos trabajan para mejorar la calidad de vida de individuos y comunidades al rehabilitar o fomentar habilidades comunicativas, así como también abordan problemas de motricidad orofacial y audición, utilizando terapias y tecnología especializada. ",
      video: "https://www.youtube.com/embed/n3vL3i7_9dI",
      benefits: ["Rehabilitación del habla", "Terapia de lenguaje", "Evaluación auditiva"],
      icon: faHandsHelping
    },
    {
      name: "Psicología",
      description: "Nuestros psicólogos ofrecen apoyo emocional y mental, ayudando a los pacientes a manejar el estrés, la ansiedad, la depresión y otros desafíos de la vida. Te brindamos herramientas para mejorar tu bienestar emocional y tu calidad de vida. ",
      benefits: ["Manejo del estrés y la ansiedad", "Terapia individual y familiar", "Apoyo en crisis"],
      icon: faBrain,
      image: psicologiaImage
    }
  ],
  enfermeria: [
    {
      name: "Atención Domiciliaria",
      description: "La atención domiciliaria es un servicio que brinda asistencia médica, psicosocial y de enfermería en el hogar de personas que no pueden desplazarse a un centro de salud. Este tipo de atención incluye servicios como cuidado personal, asistencia en tareas domésticas y apoyo profesional (médico, psicólogo, trabajador social) para el paciente y su familia, con el objetivo de prevenir hospitalizaciones y promover la autonomía. ",
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