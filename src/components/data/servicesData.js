import {
  faStethoscope,
  faBaby,
  faSyringe,
  faHeartbeat,
  faVial,
  faLungs,
  faXRay,
  faBone,
  faUserMd,
  faDumbbell,
  faBrain,
  faHandsHelping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

// 🔹 Imágenes (asegúrate de que las rutas sean correctas según tu estructura)
import medicinaGeneralImage from '../assets/medicinageneral.png';
import cardiologiaImage from '../assets/cardiologia.jpg';
import ecografiaImage from '../assets/ecografia.jpg';
import ginecologiaImage from '../assets/ginecologia.jpg';
import laboratorioImage from '../assets/laboratorio.jpg';
import medicinaInternaImage from '../assets/medicinainterna.jpg';
import nutricionImage from '../assets/nutricionydieta.jpg';
import pediatriaImage from '../assets/pediatria.jpg';
import radiologiaImage from '../assets/radiologia.jpg';
import psicologiaImage from '../assets/psicologia.jpg';
// import terapiafisicaImage from '../assets/tepariafisica.jpg
// import atencionDomiciliariaImage from '../assets/atenciondomiciliaria.jpg';
import vacunacionImage from '../assets/vacunacion.jpg';
// import controlSignosImage from '../assets/controlsignos.jpg';
import ortopediaImage from '../assets/ortopedia.jpg';
import fonoaudiologiaImage from '../assets/fonoaudiologia.jpg';
import terapiaOcupacionalImage from '../assets/terapiaocupacional.jpg';
// import './ServiceDetail.css';

const servicesData = {
  consultas: [
    {
      name: "Medicina General",
      description:
        "La medicina general es la atención médica primaria y preventiva de un paciente, realizada por un médico de cabecera que trata un amplio abanico de enfermedades comunes, desde infecciones hasta enfermedades crónicas, y actúa como primer punto de contacto en el sistema de salud.",
      benefits: ["Chequeos generales", "Prevención de enfermedades", "Diagnóstico rápido y preciso"],
      icon: faStethoscope,
      image: medicinaGeneralImage,
    },
    {
      name: "Internista",
      description:
        "Una consulta especializada por internista es una visita médica para el manejo integral de enfermedades no quirúrgicas en adultos, abordando problemas crónicos como diabetes, hipertensión y enfermedades cardíacas.",
      benefits: ["Atención integral", "Diagnóstico preciso", "Manejo de enfermedades crónicas"],
      icon: faUserMd,
      image: medicinaInternaImage,
    },
    {
      name: "Pediatría",
      description:
        "La pediatría se enfoca en la salud, desarrollo y tratamiento de enfermedades en bebés, niños y adolescentes, desde el cuidado preventivo hasta el manejo de condiciones complejas.",
      benefits: ["Control de crecimiento y desarrollo", "Vacunación", "Atención de enfermedades infantiles"],
      icon: faBaby,
      image: pediatriaImage,
    },
    {
      name: "Ginecología y Obstetricia",
      description:
        "La ginecología y obstetricia cuida la salud integral de la mujer, desde la salud reproductiva hasta la atención del embarazo, parto y posparto.",
      benefits: ["Control prenatal", "Exámenes ginecológicos", "Asesoría en planificación familiar"],
      icon: faHeart,
      image: ginecologiaImage,
    },
    {
      name: "Ortopedia",
      description:
        "La ortopedia trata lesiones y enfermedades del sistema musculoesquelético: huesos, articulaciones, músculos y tendones.",
      benefits: ["Recuperación funcional", "Alivio del dolor musculoesquelético", "Rehabilitación de lesiones"],
      icon: faBone,
      image: ortopediaImage,
    },
    {
      name: "Cardiología",
      description:
        "La cardiología se dedica al diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio.",
      benefits: ["Electrocardiograma", "Holter 24h", "Monitoreo de presión arterial"],
      icon: faHeartbeat,
      image: cardiologiaImage,
    },
    {
      name: "Nutrición y Dieta",
      description:
        "Planes personalizados para mejorar el bienestar, controlar el peso y manejar condiciones médicas como diabetes o hipertensión.",
      benefits: ["Planes personalizados", "Control de peso", "Manejo de enfermedades"],
      icon: faDumbbell,
      image: nutricionImage,
    },
  ],
  diagnosticos: [
    {
      name: "Laboratorio Clínico",
      description:
        "Análisis de muestras biológicas (sangre, orina, tejidos) para diagnóstico, prevención y seguimiento de enfermedades.",
      benefits: ["Resultados rápidos", "Alta precisión", "Servicio a domicilio"],
      icon: faVial,
      image: laboratorioImage,
    },
    {
      name: "Ecografía",
      description:
        "Estudio diagnóstico con ultrasonido, seguro y sin radiación, que muestra estructuras internas del cuerpo en tiempo real.",
      benefits: ["Evaluación fetal", "Imágenes abdominales", "Estudios de tejido blando"],
      icon: faLungs,
      image: ecografiaImage,
    },
    {
      name: "Radiología",
      description:
        "Diagnóstico por imágenes mediante rayos X, ultrasonido o resonancia magnética para detectar fracturas, lesiones o enfermedades internas.",
      benefits: ["Rayos X digitales", "Baja radiación", "Alta resolución"],
      icon: faXRay,
      image: radiologiaImage,
    },
  ],
  terapias: [
    {
      name: "Terapia Física",
      description:
        "La fisioterapia mejora y restaura la movilidad del cuerpo mediante ejercicios terapéuticos y técnicas físicas especializadas.",
      benefits: ["Rehabilitación post-quirúrgica", "Manejo del dolor crónico", "Recuperación deportiva"],
      icon: faDumbbell,
      // image: terapiafisicaImage,
    },
    {
      name: "Terapia Ocupacional",
      description:
        "Ayuda a las personas a mejorar su autonomía y participar plenamente en sus actividades diarias.",
      benefits: ["Mejora de autonomía", "Adaptación de entornos", "Actividades terapéuticas"],
      icon: faBrain,
      image: terapiaOcupacionalImage,
    },
    {
      name: "Fonoaudiología",
      description:
        "Prevención, diagnóstico y tratamiento de trastornos de comunicación, lenguaje, voz, audición y deglución.",
      benefits: ["Rehabilitación del habla", "Terapia de lenguaje", "Evaluación auditiva"],
      icon: faHandsHelping,
      image: fonoaudiologiaImage,
    },
    {
      name: "Psicología",
      description:
        "Apoyo emocional y mental para manejar el estrés, la ansiedad, la depresión y otros desafíos de la vida.",
      benefits: ["Manejo del estrés y ansiedad", "Terapia individual y familiar", "Apoyo psicológico integral"],
      icon: faBrain,
      image: psicologiaImage,
    },
  ],
  enfermeria: [
    {
      name: "Atención Domiciliaria",
      description:
        "Asistencia médica y de enfermería en el hogar para pacientes que no pueden desplazarse.",
      benefits: ["Aplicación de medicamentos", "Curaciones", "Control de signos vitales"],
      icon: faUserMd,
      // image: atencionDomiciliariaImage,
    },
    {
      name: "Vacunación",
      description:
        "Servicio de vacunación para todas las edades, con personal calificado y protocolos de seguridad.",
      benefits: ["Prevención de enfermedades", "Atención profesional", "Comodidad en el hogar"],
      icon: faSyringe,
      image: vacunacionImage,
    },
    {
      name: "Control de signos vitales",
      description:
        "Monitoreo de presión arterial, frecuencia cardíaca, temperatura y saturación de oxígeno.",
      benefits: ["Seguimiento de enfermedades crónicas", "Reportes detallados", "Alerta temprana de emergencias"],
      icon: faHeartbeat,
      // image: controlSignosImage,
    },
  ],
};

export default servicesData;
