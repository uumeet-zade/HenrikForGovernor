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
    'intro.subtext': 'Henrik Vasmer. Independent representation for all of Cambria.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (born 4 March 2018) is an Independent Caprican politician from Alto, a port town in southern Cambria. Rejecting the trade that defined his family in favour of academia, he earned a PhD in Rhetoric and Persuasion Culture. Now, he brings decades of local, academic, and practical experience to the forefront to fight for Cambria\'s coastal and working communities.',
    
    'platform.title': 'THE PLATFORM',
    'platform.maritime.title': 'Anti-Monopoly Enforcement',
    'platform.maritime.desc': 'Targeting single-buyer dominance in our ports and freight lines. Applying strict antitrust scrutiny to corporate monopolies that dictate prices to working-class suppliers.',
    'platform.education.title': 'Co-op Reformation',
    'platform.education.desc': 'Providing bonding and freight-sharing assistance to keep existing rural co-ops standing, while offering logistics support to rebuild collapsed fishing co-ops along the coast.',
    'platform.reform.title': 'Contract Floor Protections',
    'platform.reform.desc': 'Establishing sector-wide minimum price floors for catch and grain contracts. Ensuring that the absence of a second buyer can never be used to drive working-class profits into the ground.',
    
    'events.marquee': 'ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ',
    'event.alto.title': 'Alto Port Rally',
    'event.alto.loc': 'Main Docks, Alto, Cambria',
    'event.townhall.title': 'Town Hall Debate',
    'event.townhall.loc': 'University of Cambria Civic Center',
    
    'problem.title': 'THE PROBLEM',
    'problem.monopoly': 'Monopoly Grip & Tax Evasion',
    'problem.desc1': 'Right now, a single corporate buyer controls the docks and the freight lines. They dictate the prices you get for your labor. Meanwhile, the conservative establishment protects them: <strong>0% Federal Tax on Luxury Goods</strong> and <strong>0% Wealth Tax</strong>.',
    'problem.desc2': 'They are ramping up taxes on small businesses, independent workers, and the middle class, actively punishing Cambria while shielding the elite.',
    
    'voices.title': 'THE VOICES OF CAMBRIA',
    'voices.quote1': '"I\'ve worked these docks for 30 years. Halvent sets the price, and we starve. Henrik is the only one who actually read their contract and told them \'no\'."',
    'voices.author1': '- Joren, Alto Port Fisherman',
    'voices.quote2': '"Without the co-op, we\'d be selling grain at a loss. Henrik helped us rebuild it. He doesn\'t just talk, he dismantles the system holding us back."',
    'voices.author2': '- Runa Sabel, Rensk Hollow Grain Co-op',
    
    'timeline.title': 'THE RECORD',
    'timeline.item1': 'Born to a family of fishermen in Alto Port. Learned the cost of a broken system on the docks.',
    'timeline.item2': 'Rejected the trade to understand the system. Earned a PhD in Rhetoric and Persuasion Culture.',
    'timeline.item3': 'Served on the Alto Local Council. Fought for contract floor protections for local workers.',
    'timeline.item4': 'Independent Run for Governor. Fighting the monopolies to reclaim Cambria for the working class.',
    
    'ultimatum.btn': 'JOIN THE FIGHT',
    
    'footer.poster': '[ CAMPAIGN POSTER ASSET HERE ]',
    'footer.title': 'STAY IN THE FIGHT',
    'footer.desc': 'Sign up for deployment orders and campaign updates.',
    'footer.email.placeholder': 'EMAIL ADDRESS',
    'footer.subscribe': 'SUBMIT',
    'footer.legal': 'PAID FOR BY HENRIK VASMER HIMSELF. WE NEED YOUR VOTE, NOT YOUR MONEY.',
    
    'modal.date.loc': 'Date | Location'
  },
  es: {
    'intro.headline': 'SIN PARTIDO.<br>SIN GESTORES.<br>SÓLO CAMBRIA.',
    'intro.subtext': 'Henrik Vasmer. Representación independiente para la Costa Sur.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (nacido el 4 de marzo de 2018) es un político capricano independiente de Alto, una ciudad portuaria en el sur de Cambria. Rechazando el oficio que definía a su familia en favor de la academia, obtuvo un doctorado en Retórica y Cultura de la Persuasión. Ahora, pone décadas de experiencia local, académica y práctica al frente para luchar por las comunidades costeras y trabajadoras de Cambria.',
    
    'platform.title': 'LA PLATAFORMA',
    'platform.maritime.title': 'Aplicación Antimonopolio',
    'platform.maritime.desc': 'Atacar el dominio de un solo comprador en nuestros puertos y líneas de transporte. Aplicar un estricto escrutinio antimonopolio a los monopolios corporativos que dictan los precios a los proveedores de la clase trabajadora.',
    'platform.education.title': 'Reforma de Cooperativas',
    'platform.education.desc': 'Proporcionar asistencia en logística y transporte compartido para mantener en pie las cooperativas rurales existentes, al mismo tiempo que se reconstruyen las cooperativas pesqueras colapsadas en la costa.',
    'platform.reform.title': 'Protecciones de Contratos Base',
    'platform.reform.desc': 'Establecer precios mínimos sectoriales para contratos de pesca y grano. Garantizar que la ausencia de un segundo comprador nunca pueda utilizarse para hundir las ganancias de la clase trabajadora.',
    
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
    'platform.maritime.title': 'Application de la Loi Antimonopole',
    'platform.maritime.desc': 'Cibler la domination de l\'acheteur unique dans nos ports et lignes de fret. Appliquer un contrôle antimonopole strict aux monopoles d\'entreprise qui dictent les prix aux fournisseurs de la classe ouvrière.',
    'platform.education.title': 'Réforme des Coopératives',
    'platform.education.desc': 'Fournir une aide au transport partagé et à la logistique pour maintenir les coopératives rurales existantes, tout en soutenant la reconstruction des coopératives de pêche effondrées le long de la côte.',
    'platform.reform.title': 'Protections des Contrats Planchers',
    'platform.reform.desc': 'Établir des prix planchers sectoriels pour les contrats de pêche et de céréales. S\'assurer que l\'absence d\'un deuxième acheteur ne puisse jamais être utilisée pour anéantir les bénéfices de la classe ouvrière.',
    
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
        
        // Privacy Override: Do not show actual campaign event data yet
        modalBody.innerHTML = "<h3 style='color: var(--color-red); margin-bottom: 1rem;'>[ CAMPAIGN EVENT DETAILS CLASSIFIED ]</h3><p>For privacy and strategic purposes, the full details of this event are temporarily withheld.</p><p>Deployment orders and full debriefing will be made public shortly.</p>";
        
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
