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
    'event.alto.date': 'SEP 15',
    'event.townhall.date': 'OCT 02',
    
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
    
    'ultimatum.title': 'THE TIME IS NOW',
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
    'event.alto.date': 'SEP 15',
    'event.townhall.date': 'OCT 02',
    
    'problem.title': 'EL PROBLEMA',
    'problem.monopoly': 'Control Monopolístico y Evasión Fiscal',
    'problem.desc1': 'Ahora mismo, un único comprador corporativo controla los muelles y las líneas de transporte. Ellos dictan los precios que obtienes por tu trabajo. Mientras tanto, el sistema conservador los protege: <strong>0% de Impuesto Federal a los Bienes de Lujo</strong> y <strong>0% de Impuesto sobre el Patrimonio</strong>.',
    'problem.desc2': 'Están aumentando los impuestos a las pequeñas empresas, a los trabajadores independientes y a la clase media, castigando activamente a Cambria mientras protegen a la élite.',
    
    'voices.title': 'LAS VOCES DE CAMBRIA',
    'voices.quote1': '"He trabajado en estos muelles durante 30 años. Halvent fija el precio y nosotros nos morimos de hambre. Henrik es el único que realmente leyó su contrato y les dijo \'no\'."',
    'voices.author1': '- Joren, Pescador del Puerto de Alto',
    'voices.quote2': '"Sin la cooperativa, estaríamos vendiendo grano a pérdida. Henrik nos ayudó a reconstruirla. Él no solo habla, él desmantela el sistema que nos detiene."',
    'voices.author2': '- Runa Sabel, Cooperativa de Granos de Rensk Hollow',
    
    'timeline.title': 'EL HISTORIAL',
    'timeline.item1': 'Nacido en una familia de pescadores en el Puerto de Alto. Aprendió el costo de un sistema roto en los muelles.',
    'timeline.item2': 'Rechazó el oficio para entender el sistema. Obtuvo un Doctorado en Retórica y Cultura de la Persuasión.',
    'timeline.item3': 'Sirvió en el Consejo Local de Alto. Luchó por protecciones de contratos base para los trabajadores locales.',
    'timeline.item4': 'Candidatura Independiente a Gobernador. Luchando contra los monopolios para reclamar Cambria para la clase trabajadora.',
    
    'ultimatum.title': 'EL MOMENTO ES AHORA',
    'ultimatum.btn': 'ÚNETE A LA LUCHA',
    
    'footer.poster': '[ RECURSO DE CARTEL DE CAMPAÑA AQUÍ ]',
    'footer.title': 'MANTENTE EN LA LUCHA',
    'footer.desc': 'Regístrate para órdenes de despliegue y actualizaciones de la campaña.',
    'footer.email.placeholder': 'DIRECCIÓN DE CORREO',
    'footer.subscribe': 'ENVIAR',
    'footer.legal': 'PAGADO POR EL PROPIO HENRIK VASMER. NECESITAMOS TU VOTO, NO TU DINERO.',
    
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
    'event.alto.date': 'SEP 15',
    'event.townhall.date': 'OCT 02',
    
    'problem.title': 'LE PROBLÈME',
    'problem.monopoly': 'Emprise Monopolistique et Évasion Fiscale',
    'problem.desc1': 'En ce moment, un seul acheteur corporatif contrôle les quais et les lignes de fret. Ils dictent les prix que vous obtenez pour votre travail. Pendant ce temps, l\'establishment conservateur les protège : <strong>0% d\'Impôt Fédéral sur les Biens de Luxe</strong> et <strong>0% d\'Impôt sur la Fortune</strong>.',
    'problem.desc2': 'Ils augmentent les impôts sur les petites entreprises, les travailleurs indépendants et la classe moyenne, punissant activement Cambria tout en protégeant l\'élite.',
    
    'voices.title': 'LES VOIX DE CAMBRIA',
    'voices.quote1': '"J\'ai travaillé sur ces quais pendant 30 ans. Halvent fixe les prix, et nous mourons de faim. Henrik est le seul à avoir vraiment lu leur contrat et à leur avoir dit \'non\'."',
    'voices.author1': '- Joren, Pêcheur du Port d\'Alto',
    'voices.quote2': '"Sans la coopérative, nous vendrions le grain à perte. Henrik nous a aidés à la reconstruire. Il ne fait pas que parler, il démantèle le système qui nous retient."',
    'voices.author2': '- Runa Sabel, Coopérative Céréalière de Rensk Hollow',
    
    'timeline.title': 'LE BILAN',
    'timeline.item1': 'Né dans une famille de pêcheurs au Port d\'Alto. A appris le coût d\'un système brisé sur les quais.',
    'timeline.item2': 'A rejeté le métier pour comprendre le système. A obtenu un Doctorat en Rhétorique et Culture de la Persuasion.',
    'timeline.item3': 'A siégé au Conseil Local d\'Alto. S\'est battu pour des protections de contrats planchers pour les travailleurs locaux.',
    'timeline.item4': 'Candidature Indépendante au poste de Gouverneur. Lutte contre les monopoles pour récupérer Cambria pour la classe ouvrière.',
    
    'ultimatum.title': 'LE MOMENT EST VENU',
    'ultimatum.btn': 'REJOIGNEZ LE COMBAT',
    
    'footer.poster': '[ RESSOURCE DE L\'AFFICHE DE CAMPAGNE ICI ]',
    'footer.title': 'RESTEZ DANS LE COMBAT',
    'footer.desc': 'Inscrivez-vous pour les ordres de déploiement et les mises à jour de la campagne.',
    'footer.email.placeholder': 'ADRESSE E-MAIL',
    'footer.subscribe': 'SOUMETTRE',
    'footer.legal': 'PAYÉ PAR HENRIK VASMER LUI-MÊME. NOUS AVONS BESOIN DE VOTRE VOTE, PAS DE VOTRE ARGENT.',
    
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

  // Find all elements with data-i18n-placeholder and update their placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
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

  // Simulated Form Submissions
  const btnJoin = document.getElementById('btn-join-fight');
  const submitBtn = document.getElementById('footer-submit-btn');
  const emailInput = document.getElementById('footer-email-input');

  // "Join the Fight" auto-scrolls to the footer form
  if (btnJoin) {
    btnJoin.addEventListener('click', () => {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => emailInput.focus(), 500); // Focus the input after scrolling
    });
  }

  // Footer Email Submission simulation
  if (submitBtn && emailInput) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) return; // Basic validation

      // Combat State: Loading
      submitBtn.textContent = 'TRANSMITTING...';
      submitBtn.style.backgroundColor = 'var(--color-black)';
      submitBtn.style.color = 'var(--color-yellow)';
      submitBtn.style.pointerEvents = 'none'; // Prevent double clicking
      
      // Simulate network request
      setTimeout(() => {
        // Combat State: Success
        submitBtn.textContent = 'ORDERS RECEIVED';
        submitBtn.style.backgroundColor = 'var(--color-cyan)';
        submitBtn.style.color = 'var(--color-black)';
        emailInput.value = '';

        // Reset to resting state after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = translations[currentLang]['footer.subscribe'] || 'SUBMIT';
          submitBtn.style = ''; // Clear inline styles
          submitBtn.style.pointerEvents = 'all';
        }, 3000);
      }, 1500);
    });
  }
});
