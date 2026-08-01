// ==========================================
// Theme Management Foundation
// ==========================================
const initTheme = () => {
  // Always force the Combat State (Dark Mode)
  document.documentElement.setAttribute('data-theme', 'dark');
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
    'intro.headline': '<span class="hover-cyan">NO PARTY.</span><br><span class="hover-yellow">NO HANDLERS.</span><br><span class="hover-magenta">JUST CAMBRIA.</span>',
    'intro.subtext': 'Henrik Vasmer. Independent representation for all of Cambria.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (born 4 March 2018) is an Independent Caprican politician from Alto, a port town in southern Cambria. Rejecting the trade that defined his family in favour of academia, he earned a PhD in Rhetoric and Persuasion Culture. Now, he brings decades of local, academic, and practical experience to the forefront to fight for Cambria\'s coastal and working communities.',

    'platform.title': 'THE PLATFORM',
    'platform.maritime.title': 'Enforcement & Referrals',
    'platform.maritime.desc': 'Using the governor\'s enforcement referral authority to challenge monopolistic mergers and protect local freight contracts.',
    'platform.education.title': 'Statutory Appointments',
    'platform.education.desc': 'Filling regional anti-monopoly and freight timetabling boards with actual workers and local stakeholders.',
    'platform.reform.title': 'Administrative Reallocation',
    'platform.reform.desc': 'Auditing and restaffing provincial offices to eliminate permit backlogs and actively support small businesses.',

    'events.marquee': 'ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ON THE GROUND &nbsp; / &nbsp; ',
    'event.alto.title': 'Alto Harbor Visit',
    'event.alto.loc': 'Main Docks, Alto',
    'event.alto.date': 'SEP 15',
    'event.union.title': 'Union Hall Address',
    'event.union.loc': 'Freight District, Cambria',
    'event.union.date': 'OCT 02',
    'event.permit.title': 'Permit Office Audit',
    'event.permit.loc': 'District Office, Cambria',
    'event.permit.date': 'OCT 18',

    'problem.title': 'WHO ACTUALLY RUNS IT',
    'problem.monopoly': 'THE HONEST ANSWER',
    'problem.desc1': 'Cambria suffers from a severe lack of enforcement. When a single buyer dictates prices on the docks or a merger threatens freight lines, the crisis is an immediate failure of executive action. A governor sits in Cambria. Right now, regional board seats are filled by whoever is convenient for the national parties. This leaves our anti-monopoly enforcement toothless and our administrative offices painfully understaffed.',
    'problem.desc2': 'I am Henrik Vasmer, and I am here to offer you the truth. A legislator writes the tool. A governor decides whether it gets picked up. The power to enforce the law depends entirely on the person holding the office. I will use the governor\'s enforcement referral authority to scrutinize monopolies. I will fill Cambria\'s regional boards with people who know the docks and the soil. I will reallocate the administrative budget to clear the permitting backlog. That is the actual job.',

    'voices.title': 'THE VOICES OF CAMBRIA',
    'voices.quote1': '"That is the first honest thing a politician has said to me in this harbor in a decade. Walk me through it."',
    'voices.author1': 'Alto Harbor Cooperative Treasurer',
    'voices.quote2': '"Most candidates want credit for passing the law. You are asking for credit for using it."',
    'voices.author2': 'Osric Bellamy, Dockworkers\' Union Chairman',

    'timeline.title': 'THE RECORD',
    'timeline.item1': 'Born to a family of fishermen in Alto Port. Learned the cost of a broken system on the docks.',
    'timeline.item2': 'Rejected the trade to understand the system. Earned a PhD in Rhetoric and Persuasion Culture.',
    'timeline.item3': 'Served on the Alto Local Council. Fought for contract floor protections for local workers.',
    'timeline.item4': 'Independent Run for Governor. Fighting the monopolies to reclaim Cambria for the working class.',
    'timeline.item5': 'Elected Governor of Cambria with a historic 73.63% of the vote. A crushing defeat for the conservative establishment and a clear mandate from the people to take back our region.',

    'ultimatum.title': 'THE TIME IS NOW',
    'ultimatum.btn': 'JOIN THE FIGHT',
    'ultimatum.download_docx': 'LINK TO THE CAMPAIGNING MATERIAL (docx)',

    'footer.poster': '[ CAMPAIGN POSTER ASSET HERE ]',
    'footer.title': 'STAY IN THE FIGHT',
    'footer.desc': 'Sign up for deployment orders and campaign updates.',
    'footer.email.placeholder': 'EMAIL ADDRESS',
    'footer.subscribe': 'SUBMIT',
    'footer.legal': 'PAID FOR BY HENRIK VASMER HIMSELF. WE NEED YOUR VOTE, NOT YOUR MONEY.',

    'modal.date.loc': 'Date | Location'
  },
  es: {
    'intro.headline': '<span class="hover-cyan">SIN PARTIDO.</span><br><span class="hover-yellow">SIN GESTORES.</span><br><span class="hover-magenta">SÓLO CAMBRIA.</span>',
    'intro.subtext': 'Henrik Vasmer. Representación independiente para la Costa Sur.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (nacido el 4 de marzo de 2018) es un político capricano independiente de Alto, una ciudad portuaria en el sur de Cambria. Rechazando el oficio que definía a su familia en favor de la academia, obtuvo un doctorado en Retórica y Cultura de la Persuasión. Ahora, pone décadas de experiencia local, académica y práctica al frente para luchar por las comunidades costeras y trabajadoras de Cambria.',

    'platform.title': 'LA PLATAFORMA',
    'platform.maritime.title': 'Aplicación y Remisiones',
    'platform.maritime.desc': 'Uso de la autoridad de remisión de aplicación del gobernador para desafiar fusiones monopolísticas y proteger los contratos de carga locales.',
    'platform.education.title': 'Nombramientos Estatutarios',
    'platform.education.desc': 'Llenar las juntas regionales antimonopolio y de horarios de carga con trabajadores reales y partes interesadas locales.',
    'platform.reform.title': 'Reasignación Administrativa',
    'platform.reform.desc': 'Auditar y dotar de nuevo personal a las oficinas provinciales para eliminar los atrasos de permisos y apoyar activamente a las pequeñas empresas.',

    'events.marquee': 'SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; ',
    'event.alto.title': 'Visita al Puerto de Alto',
    'event.alto.loc': 'Muelles Principales, Alto',
    'event.alto.date': 'SEP 15',
    'event.union.title': 'Discurso en el Sindicato',
    'event.union.loc': 'Distrito de Carga, Cambria',
    'event.union.date': 'OCT 02',
    'event.permit.title': 'Auditoría a la Oficina de Permisos',
    'event.permit.loc': 'Oficina de Distrito, Cambria',
    'event.permit.date': 'OCT 18',

    'problem.title': 'QUIÉN GOBIERNA REALMENTE',
    'problem.monopoly': 'LA RESPUESTA HONESTA',
    'problem.desc1': 'Cambria sufre de una grave falta de aplicación de la ley. Cuando un comprador único dicta los precios en los muelles o una fusión amenaza las líneas de carga, la crisis es un fracaso inmediato de la acción ejecutiva. Un gobernador se sienta en Cambria. En este momento, los puestos de las juntas regionales son ocupados por quien sea conveniente para los partidos nacionales. Esto deja nuestra aplicación antimonopolio sin efecto y nuestras oficinas administrativas dolorosamente faltas de personal.',
    'problem.desc2': 'Soy Henrik Vasmer, y estoy aquí para ofrecerles la verdad. Un legislador escribe la herramienta. Un gobernador decide si se utiliza. El poder de hacer cumplir la ley depende enteramente de la persona que ocupa el cargo. Utilizaré la autoridad de remisión de aplicación del gobernador para escrutar los monopolios. Llenaré las juntas regionales de Cambria con personas que conocen los muelles y la tierra. Reasignaré el presupuesto administrativo para despejar el atraso de permisos. Ese es el verdadero trabajo.',

    'voices.title': 'LAS VOCES DE CAMBRIA',
    'voices.quote1': '"Esa es la primera cosa honesta que un político me ha dicho en este puerto en una década. Explícamelo."',
    'voices.author1': 'Tesorera de la Cooperativa del Puerto de Alto',
    'voices.quote2': '"La mayoría de los candidatos quieren crédito por aprobar la ley. Tú estás pidiendo crédito por usarla."',
    'voices.author2': 'Osric Bellamy, Presidente del Sindicato de Trabajadores Portuarios',

    'timeline.title': 'EL HISTORIAL',
    'timeline.item1': 'Nacido en una familia de pescadores en el Puerto de Alto. Aprendió el costo de un sistema roto en los muelles.',
    'timeline.item2': 'Rechazó el oficio para entender el sistema. Obtuvo un Doctorado en Retórica y Cultura de la Persuasión.',
    'timeline.item3': 'Sirvió en el Consejo Local de Alto. Luchó por protecciones de contratos base para los trabajadores locales.',
    'timeline.item4': 'Candidatura Independiente a Gobernador. Luchando contra los monopolios para reclamar Cambria para la clase trabajadora.',
    'timeline.item5': 'Elegido Gobernador de Cambria con un histórico 73.63% de los votos. Una derrota aplastante para el establishment conservador y un mandato claro del pueblo para recuperar nuestra región.',

    'ultimatum.title': 'EL MOMENTO ES AHORA',
    'ultimatum.btn': 'ÚNETE A LA LUCHA',
    'ultimatum.download_docx': 'ENLACE AL MATERIAL DE CAMPAÑA (docx)',

    'footer.poster': '[ RECURSO DE CARTEL DE CAMPAÑA AQUÍ ]',
    'footer.title': 'MANTENTE EN LA LUCHA',
    'footer.desc': 'Regístrate para órdenes de despliegue y actualizaciones de la campaña.',
    'footer.email.placeholder': 'DIRECCIÓN DE CORREO',
    'footer.subscribe': 'ENVIAR',
    'footer.legal': 'PAGADO POR EL PROPIO HENRIK VASMER. NECESITAMOS TU VOTO, NO TU DINERO.',

    'modal.date.loc': 'Fecha | Ubicación'
  },
  fr: {
    'intro.headline': '<span class="hover-cyan">SANS PARTI.</span><br><span class="hover-yellow">SANS INTERMÉDIAIRES.</span><br><span class="hover-magenta">JUSTE CAMBRIA.</span>',
    'intro.subtext': 'Henrik Vasmer. Représentation indépendante pour la Côte Sud.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (né le 4 mars 2018) est un homme politique caprican indépendant originaire d\'Alto, une ville portuaire du sud de Cambria. Rejetant le métier de sa famille au profit du monde universitaire, il a obtenu un doctorat en Rhétorique et Culture de la Persuasion. Aujourd\'hui, il met des décennies d\'expérience locale, universitaire et pratique au premier plan pour défendre les communautés côtières et ouvrières de Cambria.',

    'platform.title': 'LE PROGRAMME',
    'platform.maritime.title': 'Application et Renvois',
    'platform.maritime.desc': 'Utilisation de l\'autorité de renvoi d\'application du gouverneur pour contester les fusions monopolistiques et protéger les contrats de fret locaux.',
    'platform.education.title': 'Nominations Statutaires',
    'platform.education.desc': 'Remplir les conseils régionaux anti-monopoles et de planification du fret avec de vrais travailleurs et des acteurs locaux.',
    'platform.reform.title': 'Réallocation Administrative',
    'platform.reform.desc': 'Auditer et repourvoir en personnel les bureaux provinciaux pour éliminer les retards de permis et soutenir activement les petites entreprises.',

    'events.marquee': 'SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; SUR LE TERRAIN &nbsp; / &nbsp; ',
    'event.alto.title': 'Visite au Port d\'Alto',
    'event.alto.loc': 'Quais Principaux, Alto',
    'event.alto.date': 'SEP 15',
    'event.union.title': 'Discours au Syndicat',
    'event.union.loc': 'Quartier du Fret, Cambria',
    'event.union.date': 'OCT 02',
    'event.permit.title': 'Audit du Bureau des Permis',
    'event.permit.loc': 'Bureau de District, Cambria',
    'event.permit.date': 'OCT 18',

    'problem.title': 'QUI GOUVERNE VRAIMENT',
    'problem.monopoly': 'LA RÉPONSE HONNÊTE',
    'problem.desc1': 'Cambria souffre d\'un grave manque d\'application de la loi. Lorsqu\'un acheteur unique dicte les prix sur les quais ou qu\'une fusion menace les lignes de fret, la crise est un échec immédiat de l\'action exécutive. Un gouverneur siège à Cambria. En ce moment, les sièges des conseils régionaux sont occupés par quiconque arrange les partis nationaux. Cela laisse notre application anti-monopole sans effet et nos bureaux administratifs cruellement en manque de personnel.',
    'problem.desc2': 'Je suis Henrik Vasmer, et je suis ici pour vous offrir la vérité. Un législateur écrit l\'outil. Un gouverneur décide s\'il est utilisé. Le pouvoir de faire appliquer la loi dépend entièrement de la personne qui occupe le poste. J\'utiliserai l\'autorité de renvoi d\'application du gouverneur pour examiner les monopoles. Je remplirai les conseils régionaux de Cambria avec des personnes qui connaissent les quais et la terre. Je réaffecterai le budget administratif pour résorber le retard des permis. C\'est là le véritable travail.',

    'voices.title': 'LES VOIX DE CAMBRIA',
    'voices.quote1': '"C\'est la première chose honnête qu\'un politicien m\'ait dite dans ce port depuis une décennie. Expliquez-moi."',
    'voices.author1': 'Trésorière de la Coopérative du Port d\'Alto',
    'voices.quote2': '"La plupart des candidats veulent s\'attribuer le mérite d\'avoir fait passer la loi. Vous demandez le mérite de l\'utiliser."',
    'voices.author2': 'Osric Bellamy, Président du Syndicat des Travailleurs Portuaires',

    'timeline.title': 'LE BILAN',
    'timeline.item1': 'Né dans une famille de pêcheurs au Port d\'Alto. A appris le coût d\'un système brisé sur les quais.',
    'timeline.item2': 'A rejeté le métier pour comprendre le système. A obtenu un Doctorat en Rhétorique et Culture de la Persuasion.',
    'timeline.item3': 'A siégé au Conseil Local d\'Alto. S\'est battu pour des protections de contrats planchers pour les travailleurs locaux.',
    'timeline.item4': 'Candidature Indépendante au poste de Gouverneur. Lutte contre les monopoles pour récupérer Cambria pour la classe ouvrière.',
    'timeline.item5': 'Élu Gouverneur de Cambria avec un score historique de 73.63% des voix. Une défaite écrasante pour l\'establishment conservateur et un mandat clair du peuple pour reprendre notre région.',

    'ultimatum.title': 'LE MOMENT EST VENU',
    'ultimatum.btn': 'REJOIGNEZ LE COMBAT',
    'ultimatum.download_docx': 'LIEN VERS LE MATÉRIEL DE CAMPAGNE (docx)',

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

      // Extract already-translated text from the clicked DOM element
      const titleText = row.querySelector('h4').textContent;
      const dateText = row.querySelector('.event-date').textContent;
      const locText = row.querySelector('p').textContent;

      if (eventId && typeof eventsData !== 'undefined' && eventsData[eventId]) {
        const data = eventsData[eventId];

        modalTitle.textContent = titleText;
        modalMeta.textContent = `${dateText} | ${locText}`;
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

  // Platform Card Tick Logic
  const platformCards = document.querySelectorAll('.platform-card');
  platformCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-ticked');
    });
  });
});
