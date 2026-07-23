// ==========================================
// Theme Management Foundation
// ==========================================
const initTheme = () => {
  // Check for saved theme preference, otherwise use system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
};

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};


// ==========================================
// i18n Translation Foundation
// ==========================================
const translations = {
  en: {
    'intro.headline': 'NO PARTY.<br>NO HANDLERS.<br>JUST CAMBRIA.',
    'intro.subtext': 'Henrik Vasmer. Independent representation for the Southern Coast.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (born 4 March 2018) is an Independent Caprican politician from Alto, a port town in southern Cambria. Rejecting the trade that defined his family in favour of academia, he earned a PhD in Rhetoric and Persuasion Culture. Now, he brings decades of local, academic, and practical experience to the forefront to fight for Cambria\'s coastal and working communities.',
    
    'platform.title': 'THE PLATFORM',
    'platform.maritime.title': 'Maritime & Labor',
    'platform.maritime.desc': 'Protecting our coastal industries and fishermen. Ensuring fair wages and safe conditions across all ports in southern Cambria.',
    'platform.education.title': 'Education & Economy',
    'platform.education.desc': 'Bringing high-level academia and practical economic reform to the working class. Investing in local schools and vocational training.',
    'platform.reform.title': 'Reform & Persuasion',
    'platform.reform.desc': 'Using structural persuasion and rhetorical power to dismantle bureaucratic hurdles and establish direct democratic accountability.',
    
    'events.marquee': 'ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ',
    'event.alto.title': 'Alto Port Rally',
    'event.alto.loc': 'Main Docks, Alto, Cambria',
    'event.townhall.title': 'Town Hall Debate',
    'event.townhall.loc': 'University of Cambria Civic Center',
    
    'ultimatum.btn': 'JOIN THE FIGHT',
    
    'modal.date.loc': 'Date | Location'
  },
  es: {
    'intro.headline': 'SIN PARTIDO.<br>SIN GESTORES.<br>SÓLO CAMBRIA.',
    'intro.subtext': 'Henrik Vasmer. Representación independiente para la Costa Sur.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (nacido el 4 de marzo de 2018) es un político capricano independiente de Alto, una ciudad portuaria en el sur de Cambria. Rechazando el oficio que definía a su familia en favor de la academia, obtuvo un doctorado en Retórica y Cultura de la Persuasión. Ahora, pone décadas de experiencia local, académica y práctica al frente para luchar por las comunidades costeras y trabajadoras de Cambria.',
    
    'platform.title': 'LA PLATAFORMA',
    'platform.maritime.title': 'Marítimo y Laboral',
    'platform.maritime.desc': 'Proteger nuestras industrias costeras y a los pescadores. Garantizar salarios justos y condiciones seguras en todos los puertos del sur de Cambria.',
    'platform.education.title': 'Educación y Economía',
    'platform.education.desc': 'Llevar el alto nivel académico y la reforma económica práctica a la clase trabajadora. Invertir en escuelas locales y formación profesional.',
    'platform.reform.title': 'Reforma y Persuasión',
    'platform.reform.desc': 'Uso de la persuasión estructural y el poder retórico para desmantelar los obstáculos burocráticos y establecer una responsabilidad democrática directa.',
    
    'events.marquee': 'SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; ',
    'event.alto.title': 'Mitin en el Puerto de Alto',
    'event.alto.loc': 'Muelles Principales, Alto, Cambria',
    'event.townhall.title': 'Debate Abierto',
    'event.townhall.loc': 'Centro Cívico de la Universidad de Cambria',
    
    'ultimatum.btn': 'ÚNETE A LA LUCHA',
    
    'modal.date.loc': 'Fecha | Ubicación'
  },
  fr: {
    'intro.headline': 'SANS PARTI.<br>SANS INTERMÉDIAIRES.<br>JUSTE CAMBRIA.',
    'intro.subtext': 'Henrik Vasmer. Représentation indépendante pour la Côte Sud.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (né le 4 mars 2018) est un homme politique caprican indépendant originaire d\'Alto, une ville portuaire du sud de Cambria. Rejetant le métier de sa famille au profit du monde universitaire, il a obtenu un doctorat en Rhétorique et Culture de la Persuasion. Aujourd\'hui, il met des décennies d\'expérience locale, universitaire et pratique au premier plan pour défendre les communautés côtières et ouvrières de Cambria.',
    
    'platform.title': 'LE PROGRAMME',
    'platform.maritime.title': 'Maritime et Travail',
    'platform.maritime.desc': 'Protéger nos industries côtiennes et nos pêcheurs. Garantir des salaires équitables et des conditions sûres dans tous les ports du sud de Cambria.',
    'platform.education.title': 'Éducation et Économie',
    'platform.education.desc': 'Apporter un enseignement universitaire de haut niveau et des réformes économiques pratiques à la classe ouvrière. Investir dans les écoles locales et la formation professionnelle.',
    'platform.reform.title': 'Réforme et Persuasion',
    'platform.reform.desc': 'Utiliser la persuasion structurelle et le pouvoir rhétorique pour démanteler les obstacles bureaucratiques et établir une responsabilité démocratique directe.',
    
    'events.marquee': 'SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; ',
    'event.alto.title': 'Rassemblement au Port d\'Alto',
    'event.alto.loc': 'Quais Principaux, Alto, Cambria',
    'event.townhall.title': 'Débat Public',
    'event.townhall.loc': 'Centre Civique de l\'Université de Cambria',
    
    'ultimatum.btn': 'REJOIGNEZ LE COMBAT',
    
    'modal.date.loc': 'Date | Emplacement'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

const setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  document.documentElement.setAttribute('lang', lang);
  
  // Find all elements with data-i18n attribute and update their content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};


// ==========================================
// Initialization & Event Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setLanguage(currentLang);
  
  // Language selectors
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Event Modal Logic
  const modal = document.getElementById('event-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');

  // Open modal on event click
  document.querySelectorAll('.event-row').forEach(row => {
    row.addEventListener('click', () => {
      const eventId = row.getAttribute('data-event-id');
      if (eventId && typeof eventsData !== 'undefined' && eventsData[eventId]) {
        const data = eventsData[eventId];
        modalTitle.textContent = data.title;
        modalMeta.textContent = `${data.date} | ${data.location}`;
        modalBody.innerHTML = data.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
