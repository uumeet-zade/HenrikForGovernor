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
    'nav.problem': 'THE FIGHT',
    'nav.platform': 'THE PLATFORM',
    'nav.record': 'THE RECORD',
    'intro.headline': '<span class="hover-cyan">PROMISES KEPT.</span><br><span class="hover-yellow">THE FIGHT CONTINUES.</span><br><span class="hover-red">FINISH WHAT WE STARTED.</span>',
    'intro.subtext': 'Governor Henrik Vasmer. The independent voice for all of Cambria. Re-election 2062.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (born 4 March 2018) is an Independent Caprican politician from Alto, a port town in southern Cambria. He rejected the trade that defined his family and earned a PhD in Rhetoric and Persuasion Culture. He brings decades of local, academic, and practical experience to the forefront to fight for Cambria\'s coastal and working communities.',

    'platform.promises_title': 'PROMISES KEPT',
    'platform.slogan': 'HENRIK ALWAYS KEEPS HIS WORD.',
    'platform.maritime.title': 'Enforcement & Referrals',
    'platform.maritime.desc': 'Using the governor\'s enforcement referral authority to challenge monopolistic mergers and protect local freight contracts.',
    'platform.education.title': 'Statutory Appointments',
    'platform.education.desc': 'Filling regional anti-monopoly and freight timetabling boards with actual workers and local stakeholders.',
    'platform.reform.title': 'Administrative Reallocation',
    'platform.reform.desc': 'Auditing and restaffing provincial offices to eliminate permit backlogs and actively support small businesses.',

    'platform.cmc.title': 'CMC Pipeline Act',
    'platform.cmc.desc': 'Establishing a jointly-owned Southern Water Corridor with Mezata and Costa Blanca to secure regional water independence.',
    'platform.firearms.title': 'Civil Defense & Firearms Act',
    'platform.firearms.desc': 'Establishing the Office of Civil Defense and enacting licensing reforms to ensure our rural and coastal communities have the means to protect themselves in an emergency.',
    'platform.foundations.title': 'Cambria Foundations Act',
    'platform.foundations.desc': 'MORE HOUSES, MORE BUSINESSES, LOWER PRICES. Enacting strategic tax relief to incentivize developers to build family housing and small business premises using local labor. This relief is drawn exclusively from regional revenue.',

    'platform2.title': 'THE 2062 PLATFORM',
    'platform2.item1.title': 'I. Finish the Southern Water Corridor',
    'platform2.item1.desc': 'The CMC Pipeline Act is passed. Now it gets built. I will see the joint pipeline with Mezata and Costa Blanca completed, hub by hub, so that no Cambrian community faces a drought season on its own ever again. This is the permanent end of a crisis that has defined this region for a generation.',
    'platform2.item2.title': 'II. Deepen Southern Cooperation',
    'platform2.item2.desc': 'The Joint Water Authority proved that Cambria, Mezata, and Costa Blanca can govern shared resources together, as equals, and retain full sovereignty. I will expand that model of cooperation (shared infrastructure, shared investment, shared authority) into freight corridors and coastal trade, so the south grows stronger by working together.',
    'platform2.item3.title': 'III. Grow What We Protected',
    'platform2.item3.desc': 'We stopped the monopolies from strangling small business. Now we build. Expanded support for independent fishing fleets and cooperative housing, continued investment in rural health access, and a Cambria where a family business can compete against consolidated capital and win.',
    'platform2.item4.title': 'IV. Finish What We Started',
    'platform2.item4.desc': 'Every commission we seated, every office we reformed, every board we handed back to workers and stakeholders is under attack. The establishment wants it undone the moment we look away. A 75% mandate is a decisive warning. It tells the conservative establishment and every entrenched interest still fighting these reforms in the courts and in the Legislature: Cambria is not going back.',

    'marquee.hero': '/// THE MANDATE /// 2062 /// THE MANDATE /// 2062 /// THE MANDATE ///',
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
    'problem.desc1': 'When we took office, the establishment told us that reforming the docks, the pipelines, and the administrative state was impossible. They were wrong. But the monopolies haven\'t surrendered. They have retreated to the courts and the backrooms of the Legislature, waiting for us to lose our resolve.',
    'problem.desc2': 'In 2060, you delivered a historic 73.63% mandate to break the monopolies. We\'ve kept our promises and passed landmark reforms, but the establishment still fights us at every turn. A 75% mandate permanently secures our progress and proves that Cambria belongs exclusively to its people.',

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
    'timeline.item6': 'Promises Kept. Passed the CMC Pipeline Act, Civil Defense Act, Cambria Foundations Act, and dismantled regional monopolies in a single year.',
    'timeline.item7': 'The Re-election Campaign. Fighting for a 75% mandate to finish what we started.',

    'ultimatum.title': 'THE TIME IS NOW',
    'ultimatum.btn': 'JOIN THE FIGHT',
    'ultimatum.download_docx': 'LINK TO THE CAMPAIGNING MATERIAL (docx)',

    'footer.slogan': 'Cambria is not going back.',
    'footer.poster': '[ CAMPAIGN POSTER ASSET HERE ]',
    'footer.title': 'STAY IN THE FIGHT',
    'footer.desc': 'Sign up for deployment orders and campaign updates.',
    'footer.email.placeholder': 'EMAIL ADDRESS',
    'footer.subscribe': 'SUBMIT',
    'footer.legal': 'PAID FOR BY HENRIK VASMER HIMSELF. KEEP YOUR MONEY. WE ONLY NEED YOUR VOTE.',

    'modal.date.loc': 'Date | Location'
  },
  es: {
    'nav.problem': 'LA LUCHA',
    'nav.platform': 'LA PLATAFORMA',
    'nav.record': 'EL REGISTRO',
    'intro.headline': '<span class="hover-cyan">PROMESAS CUMPLIDAS.</span><br><span class="hover-yellow">LA LUCHA CONTINÚA.</span><br><span class="hover-red">TERMINEMOS EL TRABAJO.</span>',
    'intro.subtext': 'Gobernador Henrik Vasmer. La voz independiente de toda Cambria. Reelección 2062.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (nacido el 4 de marzo de 2018) es un político capricano independiente de Alto, una ciudad portuaria en el sur de Cambria. Rechazó el oficio que definía a su familia y obtuvo un doctorado en Retórica y Cultura de la Persuasión. Aporta décadas de experiencia local, académica y práctica a la vanguardia para luchar por las comunidades costeras y trabajadoras de Cambria.',

    'platform.promises_title': 'PROMESAS CUMPLIDAS',
    'platform.slogan': 'HENRIK SIEMPRE CUMPLE SU PALABRA.',
    'platform.maritime.title': 'Aplicación y Remisiones',
    'platform.maritime.desc': 'Uso de la autoridad de remisión de aplicación del gobernador para desafiar fusiones monopolísticas y proteger los contratos de carga locales.',
    'platform.education.title': 'Nombramientos Estatutarios',
    'platform.education.desc': 'Llenar las juntas regionales antimonopolio y de horarios de carga con trabajadores reales y partes interesadas locales.',
    'platform.reform.title': 'Reasignación Administrativa',
    'platform.reform.desc': 'Auditando y dotando de personal a las oficinas provinciales para eliminar los retrasos en los permisos y apoyar activamente a las pequeñas empresas.',

    'platform.cmc.title': 'Ley del Oleoducto CMC',
    'platform.cmc.desc': 'Estableciendo un Corredor de Agua del Sur de propiedad conjunta con Mezata y Costa Blanca para asegurar la independencia hídrica regional.',
    'platform.firearms.title': 'Ley de Defensa Civil y Armas de Fuego',
    'platform.firearms.desc': 'Establecer la Oficina de Defensa Civil y promulgar reformas de licencias para asegurar que nuestras comunidades rurales y costeras tengan los medios para protegerse en una emergencia.',
    'platform.foundations.title': 'Ley de Fundaciones de Cambria',
    'platform.foundations.desc': 'MÁS CASAS, MÁS NEGOCIOS, PRECIOS MÁS BAJOS. Promulgando desgravaciones fiscales estratégicas para incentivar a los desarrolladores a construir viviendas familiares y locales para pequeñas empresas utilizando mano de obra local. Este alivio se extrae exclusivamente de los ingresos regionales.',

    'platform2.title': 'LA PLATAFORMA 2062',
    'platform2.item1.title': 'I. Terminar el Corredor de Agua del Sur',
    'platform2.item1.desc': 'La Ley del Oleoducto CMC ha sido aprobada. Ahora se construye. Me aseguraré de que el oleoducto conjunto con Mezata y Costa Blanca se complete, centro por centro, para que ninguna comunidad cambriana vuelva a enfrentar una temporada de sequía sola. Este es el fin permanente de una crisis que ha definido esta región por una generación.',
    'platform2.item2.title': 'II. Profundizar la Cooperación del Sur',
    'platform2.item2.desc': 'La Autoridad Conjunta de Agua demostró que Cambria, Mezata y Costa Blanca pueden gobernar recursos compartidos juntos, como iguales, y mantener plena soberanía. Expandiré ese modelo de cooperación (infraestructura compartida, inversión compartida, autoridad compartida) hacia los corredores de carga y comercio costero, para que el sur crezca más fuerte trabajando juntos.',
    'platform2.item3.title': 'III. Crecer lo que Protegimos',
    'platform2.item3.desc': 'Detuvimos a los monopolios para que no asfixiaran a las pequeñas empresas. Ahora construimos. Mayor apoyo para flotas pesqueras independientes y viviendas cooperativas, inversión continua en acceso a salud rural, y una Cambria donde un negocio familiar pueda competir contra el capital consolidado y ganar.',
    'platform2.item4.title': 'IV. Terminar lo que Empezamos',
    'platform2.item4.desc': 'Cada comisión que sentamos, cada oficina que reformamos, cada junta que devolvimos a los trabajadores y las partes interesadas está bajo ataque. El establishment quiere deshacerlo en el momento en que miramos a otro lado. Un mandato del 75% es una advertencia decisiva. Le dice al establishment conservador y a todos los intereses arraigados que todavía luchan contra estas reformas en los tribunales y en la Legislatura: Cambria no volverá atrás.',

    'marquee.hero': '/// EL MANDATO /// 2062 /// EL MANDATO /// 2062 /// EL MANDATO ///',
    'events.marquee': 'SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; SOBRE EL TERRENO &nbsp; / &nbsp; ',
    'event.alto.title': 'Visita al Puerto de Alto',
    'event.alto.loc': 'Muelles Principales, Alto',
    'event.alto.date': 'SEP 15',
    'event.union.title': 'Discurso en el Sindicato',
    'event.union.loc': 'Distrito de Carga, Cambria',
    'event.union.date': 'OCT 02',
    'event.permit.title': 'Foro de Reasignación de Permisos',
    'event.permit.loc': 'Oficina de Distrito, Cambria',
    'event.permit.date': 'OCT 18',

    'problem.title': 'QUIÉN LO MANEJA REALMENTE',
    'problem.monopoly': 'LA RESPUESTA HONESTA',
    'problem.desc1': 'Cuando asumimos el cargo, el establishment nos dijo que reformar los muelles, los oleoductos y el estado administrativo era imposible. Se equivocaron. Pero los monopolios no se han rendido. Simplemente se han retirado a los tribunales y a las trastiendas de la Legislatura, esperando a que perdamos nuestra determinación.',
    'problem.desc2': 'En 2060, ustedes entregaron un mandato histórico del 73.63% para romper los monopolios. Hemos cumplido nuestras promesas y aprobado reformas históricas, pero el establishment todavía nos combate en cada oportunidad. Un mandato del 75% asegura permanentemente nuestro progreso y demuestra que Cambria pertenece exclusivamente a su pueblo.',

    'voices.title': 'LAS VOCES DE CAMBRIA',
    'voices.quote1': '"Esa es la primera cosa honesta que un político me ha dicho en este puerto en una década. Explícamelo."',
    'voices.author1': 'Tesorera de la Cooperativa del Puerto de Alto',
    'voices.quote2': '"La mayoría de los candidatos quieren crédito por aprobar la ley. Tú estás pidiendo crédito por usarla."',
    'voices.author2': 'Osric Bellamy, Presidente del Sindicato de Trabajadores Portuarios',

    'timeline.title': 'EL REGISTRO',
    'timeline.item1': 'Nacido en una familia de pescadores en el Puerto de Alto. Aprendió el costo de un sistema roto en los muelles.',
    'timeline.item2': 'Rechazó el oficio para entender el sistema. Obtuvo un Doctorado en Retórica y Cultura de la Persuasión.',
    'timeline.item3': 'Sirvió en el Consejo Local de Alto. Luchó por protecciones de contratos base para los trabajadores locales.',
    'timeline.item4': 'Candidatura Independiente a Gobernador. Luchando contra los monopolios para reclamar Cambria para la clase trabajadora.',
    'timeline.item5': 'Elegido Gobernador de Cambria con un histórico 73.63% de los votos. Una derrota aplastante para el establishment conservador y un mandato claro del pueblo para recuperar nuestra región.',
    'timeline.item6': 'Promesas Cumplidas. Aprobó la Ley del Oleoducto CMC, la Ley de Defensa Civil, la Ley de Fundaciones de Cambria, y desmanteló los monopolios regionales en un solo año.',
    'timeline.item7': 'La Campaña de Reelección. Luchando por un mandato del 75% para terminar lo que empezamos.',

    'ultimatum.title': 'EL MOMENTO ES AHORA',
    'ultimatum.btn': 'ÚNETE A LA LUCHA',
    'ultimatum.download_docx': 'ENLACE AL MATERIAL DE CAMPAÑA (docx)',

    'footer.slogan': 'Cambria no da marcha atrás.',
    'footer.poster': '[ RECURSO DE CARTEL DE CAMPAÑA AQUÍ ]',
    'footer.title': 'MANTENTE EN LA LUCHA',
    'footer.desc': 'Regístrate para órdenes de despliegue y actualizaciones de la campaña.',
    'footer.email.placeholder': 'DIRECCIÓN DE CORREO',
    'footer.subscribe': 'ENVIAR',
    'footer.legal': 'PAGADO POR EL PROPIO HENRIK VASMER. QUÉDATE CON TU DINERO. SOLO NECESITAMOS TU VOTO.',

    'modal.date.loc': 'Fecha | Ubicación'
  },
  fr: {
    'nav.problem': 'LE COMBAT',
    'nav.platform': 'LA PLATEFORME',
    'nav.record': 'LE DOSSIER',
    'intro.headline': '<span class="hover-cyan">PROMESSES TENUES.</span><br><span class="hover-yellow">LE COMBAT CONTINUE.</span><br><span class="hover-red">ACHEVONS LE TRAVAIL.</span>',
    'intro.subtext': 'Gouverneur Henrik Vasmer. La voix indépendante de toute la Cambria. Réélection 2062.',
    'intro.bio': '<strong>Henrik Vasmer</strong> (né le 4 mars 2018) est un politicien indépendant de Caprica originaire d\'Alto, une ville portuaire du sud de la Cambria. Il a rejeté le métier qui définissait sa famille et a obtenu un doctorat en rhétorique et culture de la persuasion. Il met ses décennies d\'expérience locale, universitaire et pratique au premier plan pour lutter pour les communautés côtières et ouvrières de Cambria.',

    'platform.promises_title': 'PROMESSES TENUES',
    'platform.slogan': 'HENRIK TIENT TOUJOURS PAROLE.',
    'platform.maritime.title': 'Application et Renvois',
    'platform.maritime.desc': 'Utilisation de l\'autorité de renvoi d\'application du gouverneur pour contester les fusions monopolistiques et protéger les contrats de fret locaux.',
    'platform.education.title': 'Nominations Statutaires',
    'platform.education.desc': 'Remplir les conseils régionaux anti-monopoles et de planification du fret avec de vrais travailleurs et des acteurs locaux.',
    'platform.reform.title': 'Réaffectation Administrative',
    'platform.reform.desc': 'Auditer et réaffecter le personnel des bureaux provinciaux pour éliminer les retards de permis et soutenir activement les petites entreprises.',

    'platform.cmc.title': 'Loi sur le Pipeline CMC',
    'platform.cmc.desc': 'Établissement d\'un Corridor d\'Eau du Sud détenu conjointement avec Mezata et Costa Blanca pour garantir l\'indépendance hydrique régionale.',
    'platform.firearms.title': 'Loi sur la Défense Civile et les Armes à Feu',
    'platform.firearms.desc': 'Établir le Bureau de la Défense Civile et promulguer des réformes des licences pour s\'assurer que nos communautés rurales et côtières ont les moyens de se protéger en cas d\'urgence.',
    'platform.foundations.title': 'Loi sur les Fondations de Cambria',
    'platform.foundations.desc': 'PLUS DE MAISONS, PLUS D\'ENTREPRISES, DES PRIX PLUS BAS. Promulgation d\'allégements fiscaux stratégiques pour inciter les promoteurs à construire des logements familiaux et des locaux pour petites entreprises en utilisant la main-d\'œuvre locale. Cet allégement est tiré exclusivement des revenus régionaux.',

    'platform2.title': 'LA PLATEFORME 2062',
    'platform2.item1.title': 'I. Achever le Corridor d\'Eau du Sud',
    'platform2.item1.desc': 'La loi sur le pipeline CMC est adoptée. Maintenant, il faut la construire. Je veillerai à ce que le pipeline commun avec Mezata et Costa Blanca soit achevé, pôle par pôle, afin qu\'aucune communauté cambrienne ne soit plus jamais confrontée seule à une saison de sécheresse. C\'est la fin définitive d\'une crise qui a défini cette région depuis une génération.',
    'platform2.item2.title': 'II. Approfondir la Coopération du Sud',
    'platform2.item2.desc': 'L\'Autorité Conjointe de l\'Eau a prouvé que Cambria, Mezata et Costa Blanca peuvent gouverner ensemble des ressources partagées, d\'égal à égal, et conserver leur pleine souveraineté. J\'étendrai ce modèle de coopération (infrastructures partagées, investissements partagés, autorité partagée) aux corridors de fret et au commerce côtier, afin que le sud se renforce en travaillant ensemble.',
    'platform2.item3.title': 'III. Faire Croître ce que Nous Avons Protégé',
    'platform2.item3.desc': 'Nous avons empêché les monopoles d\'étouffer les petites entreprises. Maintenant, nous construisons. Un soutien accru aux flottes de pêche indépendantes et au logement coopératif, des investissements continus dans l\'accès à la santé en milieu rural, et une Cambria où une entreprise familiale peut rivaliser avec le capital consolidé et gagner.',
    'platform2.item4.title': 'IV. Finir ce que Nous Avons Commencé',
    'platform2.item4.desc': 'Chaque commission que nous avons siégée, chaque bureau que nous avons réformé, chaque conseil que nous avons rendu aux travailleurs et aux parties prenantes est menacée. L\'establishment veut tout défaire dès que nous détournons le regard. Un mandat de 75 % est un avertissement décisif. Il dit à l\'establishment conservateur et à tous les intérêts bien ancrés qui combattent encore ces réformes devant les tribunaux et à l\'Assemblée : Cambria ne reculera pas.',

    'marquee.hero': '/// LE MANDAT /// 2062 /// LE MANDAT /// 2062 /// LE MANDAT ///',
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

    'problem.title': 'QUI DIRIGE RÉELLEMENT',
    'problem.monopoly': 'LA RÉPONSE HONNÊTE',
    'problem.desc1': 'Lorsque nous avons pris nos fonctions, l\'establishment nous a dit que réformer les quais, les pipelines et l\'état administratif était impossible. Ils avaient tort. Mais les monopoles ne se sont pas rendus. Ils se sont simplement repliés devant les tribunaux et dans les arrière-salles de l\'Assemblée, attendant que nous perdions notre détermination.',
    'problem.desc2': 'En 2060, vous avez délivré un mandat historique de 73,63 % pour briser les monopoles. Nous avons tenu nos promesses et adopté des réformes historiques, mais l\'establishment nous combat toujours à chaque instant. Un mandat de 75 % garantit définitivement nos progrès et prouve que Cambria appartient exclusivement à son peuple.',

    'voices.title': 'LES VOIX DE CAMBRIA',
    'voices.quote1': '"C\'est la première chose honnête qu\'un politicien m\'ait dite dans ce port depuis une décennie. Expliquez-moi."',
    'voices.author1': 'Trésorière de la Coopérative du Port d\'Alto',
    'voices.quote2': '"La plupart des candidats veulent s\'attribuer le mérite d\'avoir fait passer la loi. Vous demandez le mérite de l\'utiliser."',
    'voices.author2': 'Osric Bellamy, Président du Syndicat des Travailleurs Portuaires',

    'timeline.title': 'LE BILAN',
    'timeline.item1': 'Né dans une famille de pêcheurs à Alto Port. A appris le coût d\'un système défaillant sur les quais.',
    'timeline.item2': 'A rejeté le métier pour comprendre le système. A obtenu un doctorat en rhétorique et culture de la persuasion.',
    'timeline.item3': 'A siégé au Conseil Local d\'Alto. S\'est battu pour des protections de plancher de contrat pour les travailleurs locaux.',
    'timeline.item4': 'Course Indépendante pour le poste de Gouverneur. Lutte contre les monopoles pour reconquérir la Cambria pour la classe ouvrière.',
    'timeline.item5': 'Élu Gouverneur de Cambria avec un score historique de 73.63% des voix. Une défaite écrasante pour l\'establishment conservateur et un mandat clair du peuple pour reprendre notre région.',
    'timeline.item6': 'Promesses Tenues. A adopté la loi sur le pipeline CMC, la loi sur la défense civile, la loi sur les fondations de Cambria, et a démantelé les monopoles régionaux en une seule année.',
    'timeline.item7': 'La Campagne de Réélection. Lutter pour un mandat de 75 % afin de terminer ce que nous avons commencé.',

    'ultimatum.title': 'LE MOMENT EST VENU',
    'ultimatum.btn': 'REJOIGNEZ LE COMBAT',
    'ultimatum.download_docx': 'LIEN VERS LE MATÉRIEL DE CAMPAGNE (docx)',

    'footer.slogan': 'Cambria ne reculera pas.',
    'footer.poster': '[ RESSOURCE DE L\'AFFICHE DE CAMPAGNE ICI ]',
    'footer.title': 'RESTEZ DANS LE COMBAT',
    'footer.desc': 'Inscrivez-vous pour les ordres de déploiement et les mises à jour de la campagne.',
    'footer.email.placeholder': 'ADRESSE E-MAIL',
    'footer.subscribe': 'SOUMETTRE',
    'footer.legal': 'PAYÉ PAR HENRIK VASMER LUI-MÊME. GARDEZ VOTRE ARGENT. NOUS N\'AVONS BESOIN QUE DE VOTRE VOTE.',

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
  const eventModal = document.getElementById('event-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta = document.getElementById('modal-meta');
  const modalBody = document.getElementById('modal-body');
  const eventCloseBtn = eventModal ? eventModal.querySelector('.modal-close') : null;

  // Open modal on event click
  document.querySelectorAll('.event-row').forEach(row => {
    row.addEventListener('click', () => {
      const eventId = row.getAttribute('data-event-id');

      // Extract already-translated text from the clicked DOM element
      const titleText = row.querySelector('h4').textContent;
      const dateText = row.querySelector('.event-date').textContent;
      const locText = row.querySelector('p').textContent;

      if (eventId && typeof eventsData !== 'undefined' && eventsData[eventId] && eventModal) {
        const data = eventsData[eventId];

        if (modalTitle) modalTitle.textContent = titleText;
        if (modalMeta) modalMeta.textContent = `${dateText} | ${locText}`;
        
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const contentBlock = data[lang] ? data[lang].content : (data.en ? data.en.content : data.content);
        if (modalBody) modalBody.innerHTML = contentBlock;

        eventModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  const closeEventModal = () => {
    if (eventModal) {
      eventModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (eventCloseBtn) eventCloseBtn.addEventListener('click', closeEventModal);
  if (eventModal) {
    eventModal.addEventListener('click', (e) => {
      if (e.target === eventModal) closeEventModal();
    });
  }

  // Image Modal Logic for Posters
  const imageModal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const imageCloseBtn = imageModal ? imageModal.querySelector('.modal-close') : null;

  document.querySelectorAll('.campaign-poster').forEach(poster => {
    poster.addEventListener('click', () => {
      if (imageModal && modalImage) {
        modalImage.src = poster.src;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeImageModal = () => {
    if (imageModal) {
      imageModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (imageCloseBtn) imageCloseBtn.addEventListener('click', closeImageModal);
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) closeImageModal();
    });
  }

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
  const footerForm = document.getElementById('footer-form');
  if (footerForm && submitBtn && emailInput) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email) return; // Basic validation

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
    if (card.querySelector('.giant-tick')) {
      card.addEventListener('mouseenter', () => {
        card.classList.add('is-ticked');
      });
    }
  });
});
