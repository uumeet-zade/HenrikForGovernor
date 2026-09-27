// Layout Shell (Masthead and Footer remain constant)
const shellHTML = `
  <header class="masthead">
    <h1 class="masthead-title"><a href="#home" style="text-decoration: none; color: inherit;">VASMER <span class="text-red">20</span><span class="text-green">66</span></a></h1>
    <div class="masthead-sub">
      <span data-i18n="shell_sub1">Vol. III — One Cambria, Under the Sun</span>
      <span data-i18n="shell_sub2">Official Campaign Dossier</span>
      <span data-i18n="shell_sub3">Cambrian Bloc / DGC</span>
    </div>
    <nav class="nav-container">
      <div class="nav-links">
        <a href="#home" class="nav-link" data-target="home" id="nav-home">Front Page</a>
        <a href="#record" class="nav-link" data-target="record" id="nav-record">Track Record</a>
        <a href="#platform" class="nav-link" data-target="platform" id="nav-platform">Platform</a>
        <a href="#events" class="nav-link" data-target="events" id="nav-events">Schedule</a>
        <a href="#about" class="nav-link" data-target="about" id="nav-about">Dossier</a>
      </div>
      <div style="display: flex; gap: 2rem; align-items: center;">
        <select id="lang-select" class="theme-toggle" style="appearance: none; -webkit-appearance: none; padding-right: 1.5rem; text-align: center; outline: none; background-image: url('data:image/svg+xml;utf8,<svg fill=%22currentColor%22 height=%2224%22 viewBox=%220 0 24 24%22 width=%2224%22 xmlns=%22http://www.w3.org/2000/svg%22><path d=%22M7 10l5 5 5-5z%22/></svg>'); background-repeat: no-repeat; background-position-x: 95%; background-position-y: 50%;">
          <option value="alanian">ALN</option>
          <option value="alcamerian">ALC</option>
          <option value="gallic">GAL</option>
        </select>
        <button id="theme-toggle" class="theme-toggle">Day Shift</button>
        <a href="#join" class="btn-primary nav-link" id="nav-volunteer" data-target="join" style="text-decoration: none; display: inline-block;">Volunteer</a>
      </div>
    </nav>
  </header>
  
  <main id="page-content" class="page-container"></main>
  
  <footer>
    <div data-i18n="shell_footer">Authorized by the Cambrian Bloc.</div>
  </footer>
`;

// Page Contents
const pages = {
  home: `
    <div class="newspaper-grid">
      <!-- Left/Main Column: Lead Story -->
      <article class="lead-story">
        <h2 class="headline massive"><span data-i18n="home_lead_headline">A BETTER CAMBRIA <br/><span class="text-red">IS POSSIBLE.</span></span></h2>
        <img src="./henrik.jpg" alt="Henrik Vasmer Rally" class="styled-img" style="aspect-ratio: 16/9; object-fit: cover; object-position: 100% center;">
        <div class="dossier-columns-2">
          <p class="excerpt"><span data-i18n="home_lead_excerpt"><strong>Henrik Vasmer for Governor.</strong> Chairman of the Cambrian Bloc and Senior Counsel to the Democratic Greens of Caprica. Rooted in empirical evidence, empathetic governance, and environmental stewardship.</span></p>
          <p><span data-i18n="home_lead_p1">The time for incremental change has passed. We are facing a structural crisis, where corporate consolidation and Caprican federal overreach threaten Cambria's working class and our environment alike.</span></p>
          <p><span data-i18n="home_lead_p2">As Governor of Cambria, Henrik Vasmer proved that a different path is possible. He proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is about permanently cementing the power of the people against the monopolies.</span></p>
        </div>
      </article>

      <!-- Right Column: Secondary Articles & Actions -->
      <aside class="sidebar-stories">
        <article class="secondary-story">
          <h3 class="headline text-red"><span data-i18n="home_sec_1_title">The Working Class Mandate</span></h3>
          <p><span data-i18n="home_sec_1_p">As Governor of Cambria, Henrik Vasmer proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is about permanently cementing the power of the people against the monopolies.</span></p>
        </article>
        
        <article class="secondary-story">
          <h3 class="headline text-green"><span data-i18n="home_sec_2_title">Endorse the Campaign</span></h3>
          <p><span data-i18n="home_sec_2_p">Sign up to receive official campaign dispatches and rally schedules directly to your terminal.</span></p>
          <input type="email" data-i18n-placeholder="home_email" placeholder="Email Address..." />
          <button class="btn-primary-alt" style="width: 100%;"><span data-i18n="home_sec_2_btn">Endorse</span></button>
        </article>
      </aside>

      <!-- Bottom Row: Minor Articles (Teasing other pages) -->
      <div class="bottom-fold">
        <article class="minor-story">
          <h4 class="headline"><span data-i18n="home_bot_1_title">Promises Kept</span></h4>
          <p><span data-i18n="home_bot_1_p">A comprehensive record of delivery for the working people of Cambria.</span></p>
          <a href="#record" class="read-more"><span data-i18n="home_bot_1_link">View Track Record &rarr;</span></a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-red"><span data-i18n="home_bot_2_title">On the Ground</span></h4>
          <p><span data-i18n="home_bot_2_p">Join Henrik Vasmer on the campaign trail. View upcoming townhalls and bloc assemblies.</span></p>
          <a href="#events" class="read-more"><span data-i18n="home_bot_2_link">View Schedule &rarr;</span></a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-green"><span data-i18n="home_bot_3_title">The Cambrian Future</span></h4>
          <p><span data-i18n="home_bot_3_p">Upcoming structural plans for the region. A working-class vision for the next four years.</span></p>
          <a href="#platform" class="read-more"><span data-i18n="home_bot_3_link">Read Platform &rarr;</span></a>
        </article>
      </div>

    </div>
  `,
  platform: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 1rem;"><span data-i18n="plat_title">The Cambrian Future: Our Platform</span></h2>
    <div class="platform-grid">
      <div class="platform-red platform-nuclear" data-index="01" style="grid-column: 1 / -1;">
        <h3 class="text-red"><span data-i18n="plat_0_h">The Lothar Collins Nuclear Facility Act</span></h3>
        <p><span data-i18n="plat_0_p">We will establish a regional nuclear generating facility in northern Cambria, creating the Collins Nuclear Authority to oversee its construction and operation. Financed through a private-partnership structure with strict cost accountability, this facility will ensure Cambria's energy independence and permanently reduce our reliance on federal and inter-regional power transfers.</span></p>
      </div>
      <div class="platform-red" data-index="02">
        <h3 class="text-red"><span data-i18n="plat_1_h">Municipal Energy Sovereignty & Community Co-ops</span></h3>
        <p><span data-i18n="plat_1_p">We will utilize Cambria’s regional economic development powers to directly fund, license, and establish community-owned renewable microgrids and municipal energy cooperatives. By bypassing centralized national corporate grids, we will guarantee cheap, reliable, and clean power managed entirely by local Cambrian communities.</span></p>
      </div>
      <div class="platform-green" data-index="03">
        <h3 class="text-green"><span data-i18n="plat_2_h">Cambrian Land Value Taxation (LVT) & Municipal Wealth Retention</span></h3>
        <p><span data-i18n="plat_2_p">We will exercise our devolved regional taxation authority to transition Cambria's property tax system to a Land Value Tax (LVT), penalizing speculative land-hoarding. This shift will lower the tax burden on productive homeowners and small businesses while ensuring all generated land revenues remain directly within Cambrian municipalities to fund local services.</span></p>
      </div>
      <div class="platform-green" data-index="04">
        <h3 class="text-green"><span data-i18n="plat_3_h">Cooperative Procurement & Small Business Preference</span></h3>
        <p><span data-i18n="plat_3_p">We will reform the regional procurement framework to legally mandate that Cambrian government contracts prioritize local worker-owned cooperatives and independent small businesses. By locking out multinational conglomerates from local public tenders, we keep taxpayer money circulating within the regional economy to support Cambrian workers.</span></p>
      </div>
      <div class="platform-red" data-index="05">
        <h3 class="text-red"><span data-i18n="plat_4_h">Cambrian Regional Transit & Freight Integration</span></h3>
        <p><span data-i18n="plat_4_p">We will fund the expansion and electrification of the Cambrian regional rail network and municipal transit systems, facilitating seamless green transit across the region. Additionally, we will support regional transport and agricultural cooperatives with local logistics hubs to ensure efficient, low-emission distribution of Cambrian goods.</span></p>
      </div>
      <div class="platform-red" data-index="06">
        <h3 class="text-red"><span data-i18n="plat_5_h">Regional Ecological Stewardship & Coastal Preservation</span></h3>
        <p><span data-i18n="plat_5_p">We will implement strict regional environmental planning and zoning laws to protect Cambria’s fragile coastlines, forests, and fisheries from corporate exploitation and speculative development. This local stewardship will guarantee that Cambria’s natural beauty and resources are preserved for future generations without relying on slow, top-down federal agencies.</span></p>
      </div>
      <div class="platform-green" data-index="07">
        <h3 class="text-green"><span data-i18n="plat_6_h">Regional Open Ledger & Public Procurement Transparency</span></h3>
        <p><span data-i18n="plat_6_p">We will establish a comprehensive, mandatory lobbying register for all regional officials and transition Cambria's public finances to a transparent, real-time open ledger. Every single regional government expenditure and procurement contract will be publicly trackable to ensure complete accountability and eliminate backroom corporate deals.</span></p>
      </div>
    </div>
  `,
  record: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 1rem;"><span data-i18n="record_title">Promises Kept: A Record of Delivery</span></h2>
    <p style="font-weight: 800; font-size: 1.2rem; text-transform: uppercase; color: var(--dgc-red); margin-bottom: 3rem; letter-spacing: 1px;"><span data-i18n="record_subtitle">[ Interactive Record: Click any module to verify ]</span></p>
    <div class="promise-grid">
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-green"><span data-i18n="record_1_title">Southern Water Corridor</span></h3>
        <p><span data-i18n="record_1_p">We established the 1,350km pipeline between Cambria, Mezata, and Costa Blanca. No Cambrian community will ever face drought alone again, and we retain full sovereignty over our water infrastructure.</span></p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-red"><span data-i18n="record_2_title">Anti-Monopoly Action</span></h3>
        <p><span data-i18n="record_2_p">Created the Regional Anti-Monopoly Commission to aggressively block predatory freight contracts and protect our independent supply chains from corporate consolidation.</span></p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-green"><span data-i18n="record_3_title">Civil Defense & Sovereignty</span></h3>
        <p><span data-i18n="record_3_p">Established the Office of Civil Defense, ensuring community safety through firearms liberalization, local armories, and the strict defense of our regional autonomy.</span></p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-red"><span data-i18n="record_4_title">Cambria Foundations Act</span></h3>
        <p><span data-i18n="record_4_p">Delivered direct tax relief for developers building cooperative family housing and small business premises using local labor, funded entirely from regional revenue.</span></p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-green"><span data-i18n="record_5_title">Deepening Southern Trade</span></h3>
        <p><span data-i18n="record_5_p">Expanding the Joint Water Authority model into our coastal trade and freight corridors, empowering local markets while regulating monopolistic practices.</span></p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone"><span data-i18n="record_stamp">Click to Stamp</span></div>
        <h3 class="headline text-red"><span data-i18n="record_6_title">Defending Our Mandate</span></h3>
        <p><span data-i18n="record_6_p">A decisive warning to the conservative establishment fighting our reforms in the courts. Cambria is not going back. We build for the next century.</span></p>
      </div>
    </div>
  `,
  events: `
    <h2 style="border-bottom: 8px solid var(--dgc-red); padding-bottom: 1rem; margin-bottom: 3rem;"><span data-i18n="events_title">Official Schedule</span></h2>
    <table class="event-table">
      <tr>
        <th><span data-i18n="events_1_date">SEP 12</span></th>
        <td>
          <h4><span data-i18n="events_1_h">Alto Harbor Townhall</span></h4>
          <p><span data-i18n="events_1_p">Join Henrik Vasmer and DGC Leader Adriana Flash for a working-class townhall at the historic Alto docks.</span></p>
        </td>
        <td style="text-align: right;"><button class="btn-primary"><span data-i18n="events_1_btn">READ</span></button></td>
      </tr>
      <tr>
        <th><span data-i18n="events_2_date">SEP 18</span></th>
        <td>
          <h4><span data-i18n="events_2_h">DGC Policy Summit</span></h4>
          <p><span data-i18n="events_2_p">Discussing the structural implementation of the new Land Value Tax system with regional economists.</span></p>
        </td>
        <td style="text-align: right;"><button class="btn-primary-alt"><span data-i18n="events_2_btn">READ</span></button></td>
      </tr>
      <tr>
        <th><span data-i18n="events_3_date">OCT 04</span></th>
        <td>
          <h4><span data-i18n="events_3_h">Cambrian Bloc Assembly</span></h4>
          <p><span data-i18n="events_3_p">The annual gathering of the Foundationalist and Homestead wings of the Bloc.</span></p>
        </td>
        <td style="text-align: right;"><button class="btn-primary"><span data-i18n="events_3_btn">READ</span></button></td>
      </tr>
    </table>
  `,
  about: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 3rem;"><span data-i18n="about_title">Candidate Dossier</span></h2>
    <div class="split-grid">
      <div>
        <img src="./henrik2.png" alt="Henrik Vasmer" class="styled-img">
      </div>
      <div>
        <h3 class="text-red" style="margin-bottom: 1.5rem;"><span data-i18n="about_h">Tested Leadership</span></h3>
        <p><span data-i18n="about_p1">As Chairman of the <strong>Cambrian Bloc</strong> and Senior Counsel for the Democratic Greens of Caprica, Henrik Vasmer represents the bridging of working-class labor movements with national eco-liberal policy.</span></p>
        <p><span data-i18n="about_p2">At a time of profound regional transition, the governor's office is not an entry-level position. While our opponent is a first-time candidate asking for on-the-job training, Henrik brings decades of rigorous, tested experience in governance and institutional reform.</span></p>
        <p><span data-i18n="about_p3">Born in Alto to a fishing family, his approach is empirical and decisive. He combines a deep understanding of abstract policy with the practical expertise to pull the levers of regional power and deliver concrete results for working people.</span></p>
        <p><span data-i18n="about_p4">No handlers. No learning curve.</span></p>
      </div>
    </div>
  `,
  join: `
    <h2 style="border-bottom: 8px solid var(--dgc-red); padding-bottom: 1rem; margin-bottom: 3rem;"><span data-i18n="join_title">Join the Campaign</span></h2>
    <div class="split-grid">
      <div>
        <h3 class="headline text-red" style="font-size: 3rem; line-height: 1; margin-bottom: 2rem;"><span data-i18n="join_h">GET INVOLVED TODAY.</span></h3>
        <p style="font-size: 1.4rem; font-weight: 700; line-height: 1.4;"><span data-i18n="join_p1">Our campaign is proudly powered by everyday working families across Cambria. Together, we can build a stronger, fairer region for everyone.</span></p>
        <p><span data-i18n="join_p2">Whether your focus is on strengthening local labor or protecting our shared environment, there is a place for you in this movement. Your time and energy are essential to winning this election.</span></p>
        <p><span data-i18n="join_p3">Sign up below to receive regular campaign updates, invitations to local townhalls, and opportunities to volunteer in your community.</span></p>
      </div>
      <form id="join-form" style="background: var(--bg-color); border: 4px solid var(--border-color); padding: 3rem; box-shadow: 8px 8px 0px var(--border-color);">
        <h3 style="margin-bottom: 2rem;"><span data-i18n="join_form_title">Volunteer Sign-Up</span></h3>
        
        <div id="join-error" style="color: var(--dgc-red); font-weight: 700; margin-bottom: 1.5rem; display: none; font-family: var(--font-headline);"></div>
        
        <input type="text" id="join-name" data-i18n-placeholder="join_form_name" placeholder="Full Name *" required />
        <input type="email" id="join-email" data-i18n-placeholder="join_form_email" placeholder="Email Address *" required />
        <input type="text" id="join-affiliation" data-i18n-placeholder="join_form_affil" placeholder="Union / Local Affiliation (Optional)" />
        
        <p style="margin-bottom: 1rem; font-weight: 700; font-family: var(--font-headline);"><span data-i18n="join_form_interest">I am most interested in:</span></p>
        <label class="checkbox-group" style="margin-bottom: 1rem;">
          <input type="checkbox" name="interest" value="bloc" />
          <span><span data-i18n="join_form_bloc"><strong>The Cambrian Bloc</strong> (Labor & Community Co-ops)</span></span>
        </label>
        <label class="checkbox-group">
          <input type="checkbox" name="interest" value="greens" />
          <span><span data-i18n="join_form_greens"><strong>Democratic Greens</strong> (Ecological Preservation)</span></span>
        </label>
        
        <hr style="border: none; border-bottom: 2px dashed var(--border-color); margin: 2rem 0;" />
        
        <label class="checkbox-group">
          <input type="checkbox" id="join-pledge" required />
          <span><span data-i18n="join_form_pledge">Yes, I want to volunteer and support Henrik Vasmer for Governor of Cambria! *</span></span>
        </label>
        
        <button type="submit" id="join-submit" class="btn-primary-alt" style="width: 100%;"><span data-i18n="join_form_btn">Sign Up</span></button>
      </form>
    </div>
  `
};

// Initialization
document.querySelector('#app').innerHTML = shellHTML;

// Router Logic
function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const contentDiv = document.getElementById('page-content');
  
  if (pages[hash]) {
    contentDiv.innerHTML = pages[hash];
  } else {
    contentDiv.innerHTML = pages.home;
  }
  
  // Update active nav link
  document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.target === hash) {
      link.classList.add('active');
    }
  });
}

// Language Selection Logic
const i18n = {
  alanian: {
    nav_home: "Front Page",
    nav_record: "Track Record",
    nav_platform: "Platform",
    nav_events: "Schedule",
    nav_about: "Dossier",
    join_btn: "Volunteer",
    home_lead_headline: `A BETTER CAMBRIA <br/><span class="text-red">IS POSSIBLE.</span>`,
    home_lead_excerpt: `<strong>Henrik Vasmer for Governor.</strong> Chairman of the Cambrian Bloc and Senior Counsel to the Democratic Greens of Caprica. Rooted in empirical evidence, empathetic governance, and environmental stewardship.`,
    home_lead_p1: `The time for incremental change has passed. We are facing a structural crisis, where corporate consolidation and Caprican federal overreach threaten Cambria's working class and our environment alike.`,
    home_lead_p2: `As Governor of Cambria, Henrik Vasmer proved that a different path is possible. He proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is about permanently cementing the power of the people against the monopolies.`,
    home_sec_1_title: `The Working Class Mandate`,
    home_sec_1_p: `As Governor of Cambria, Henrik Vasmer proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is about permanently cementing the power of the people against the monopolies.`,
    home_sec_2_title: `Endorse the Campaign`,
    home_sec_2_p: `Sign up to receive official campaign dispatches and rally schedules directly to your terminal.`,
    home_sec_2_btn: `Endorse`,
    home_bot_1_title: `Promises Kept`,
    home_bot_1_p: `A comprehensive record of delivery for the working people of Cambria.`,
    home_bot_1_link: `View Track Record &rarr;`,
    home_bot_2_title: `On the Ground`,
    home_bot_2_p: `Join Henrik Vasmer on the campaign trail. View upcoming townhalls and bloc assemblies.`,
    home_bot_2_link: `View Schedule &rarr;`,
    home_bot_3_title: `The Cambrian Future`,
    home_bot_3_p: `Upcoming structural plans for the region. A working-class vision for the next four years.`,
    home_bot_3_link: `Read Platform &rarr;`,
    record_title: `Promises Kept: A Record of Delivery`,
    record_subtitle: `[ Interactive Record: Click any module to verify ]`,
    record_stamp: `Click to Stamp`,
    record_delivered: `DELIVERED`,
    record_1_title: `Southern Water Corridor`,
    record_1_p: `We established the 1,350km pipeline between Cambria, Mezata, and Costa Blanca. No Cambrian community will ever face drought alone again, and we retain full sovereignty over our water infrastructure.`,
    record_2_title: `Anti-Monopoly Action`,
    record_2_p: `Created the Regional Anti-Monopoly Commission to aggressively block predatory freight contracts and protect our independent supply chains from corporate consolidation.`,
    record_3_title: `Civil Defense & Sovereignty`,
    record_3_p: `Established the Office of Civil Defense, ensuring community safety through firearms liberalization, local armories, and the strict defense of our regional autonomy.`,
    record_4_title: `Cambria Foundations Act`,
    record_4_p: `Delivered direct tax relief for developers building cooperative family housing and small business premises using local labor, funded entirely from regional revenue.`,
    record_5_title: `Deepening Southern Trade`,
    record_5_p: `Expanding the Joint Water Authority model into our coastal trade and freight corridors, empowering local markets while regulating monopolistic practices.`,
    record_6_title: `Defending Our Mandate`,
    record_6_p: `A decisive warning to the conservative establishment fighting our reforms in the courts. Cambria is not going back. We build for the next century.`,
    plat_title: `The Cambrian Future: Our Platform`,
    plat_0_h: `The Lothar Collins Nuclear Facility Act`,
    plat_0_p: `We will establish a regional nuclear generating facility in northern Cambria, creating the Collins Nuclear Authority to oversee its construction and operation. Financed through a private-partnership structure with strict cost accountability, this facility will ensure Cambria's energy independence and permanently reduce our reliance on federal and inter-regional power transfers.`,
    plat_1_h: `Municipal Energy Sovereignty & Community Co-ops`,
    plat_1_p: `We will utilize Cambria’s regional economic development powers to directly fund, license, and establish community-owned renewable microgrids and municipal energy cooperatives. By bypassing centralized national corporate grids, we will guarantee cheap, reliable, and clean power managed entirely by local Cambrian communities.`,
    plat_2_h: `Cambrian Land Value Taxation (LVT) & Municipal Wealth Retention`,
    plat_2_p: `We will exercise our devolved regional taxation authority to transition Cambria's property tax system to a Land Value Tax (LVT), penalizing speculative land-hoarding. This shift will lower the tax burden on productive homeowners and small businesses while ensuring all generated land revenues remain directly within Cambrian municipalities to fund local services.`,
    plat_3_h: `Cooperative Procurement & Small Business Preference`,
    plat_3_p: `We will reform the regional procurement framework to legally mandate that Cambrian government contracts prioritize local worker-owned cooperatives and independent small businesses. By locking out multinational conglomerates from local public tenders, we keep taxpayer money circulating within the regional economy to support Cambrian workers.`,
    plat_4_h: `Cambrian Regional Transit & Freight Integration`,
    plat_4_p: `We will fund the expansion and electrification of the Cambrian regional rail network and municipal transit systems, facilitating seamless green transit across the region. Additionally, we will support regional transport and agricultural cooperatives with local logistics hubs to ensure efficient, low-emission distribution of Cambrian goods.`,
    plat_5_h: `Regional Ecological Stewardship & Coastal Preservation`,
    plat_5_p: `We will implement strict regional environmental planning and zoning laws to protect Cambria’s fragile coastlines, forests, and fisheries from corporate exploitation and speculative development. This local stewardship will guarantee that Cambria’s natural beauty and resources are preserved for future generations without relying on slow, top-down federal agencies.`,
    plat_6_h: `Regional Open Ledger & Public Procurement Transparency`,
    plat_6_p: `We will establish a comprehensive, mandatory lobbying register for all regional officials and transition Cambria's public finances to a transparent, real-time open ledger. Every single regional government expenditure and procurement contract will be publicly trackable to ensure complete accountability and eliminate backroom corporate deals.`,
    events_title: `Official Schedule`,
    events_1_date: `SEP 12`,
    events_1_h: `Alto Harbor Townhall`,
    events_1_p: `Join Henrik Vasmer and DGC Leader Adriana Flash for a working-class townhall at the historic Alto docks.`,
    events_1_btn: `READ`,
    events_2_date: `SEP 18`,
    events_2_h: `DGC Policy Summit`,
    events_2_p: `Discussing the structural implementation of the new Land Value Tax system with regional economists.`,
    events_2_btn: `READ`,
    events_3_date: `OCT 04`,
    events_3_h: `Cambrian Bloc Assembly`,
    events_3_p: `The annual gathering of the Foundationalist and Homestead wings of the Bloc.`,
    events_3_btn: `READ`,
    about_title: `Candidate Dossier`,
    about_h: `Tested Leadership`,
    about_p1: `As Chairman of the <strong>Cambrian Bloc</strong> and Senior Counsel for the Democratic Greens of Caprica, Henrik Vasmer represents the bridging of working-class labor movements with national eco-liberal policy.`,
    about_p2: `At a time of profound regional transition, the governor's office is not an entry-level position. While our opponent is a first-time candidate asking for on-the-job training, Henrik brings decades of rigorous, tested experience in governance and institutional reform.`,
    about_p3: `Born in Alto to a fishing family, his approach is empirical and decisive. He combines a deep understanding of abstract policy with the practical expertise to pull the levers of regional power and deliver concrete results for working people.`,
    about_p4: `No handlers. No learning curve.`,
    join_title: `Join the Campaign`,
    join_h: `GET INVOLVED TODAY.`,
    join_p1: `Our campaign is proudly powered by everyday working families across Cambria. Together, we can build a stronger, fairer region for everyone.`,
    join_p2: `Whether your focus is on strengthening local labor or protecting our shared environment, there is a place for you in this movement. Your time and energy are essential to winning this election.`,
    join_p3: `Sign up below to receive regular campaign updates, invitations to local townhalls, and opportunities to volunteer in your community.`,
    join_form_title: `Volunteer Sign-Up`,
    join_form_name: `Full Name *`,
    join_form_email: `Email Address *`,
    join_form_affil: `Union / Local Affiliation (Optional)`,
    join_form_interest: `I am most interested in:`,
    join_form_bloc: `<strong>The Cambrian Bloc</strong> (Labor & Community Co-ops)`,
    join_form_greens: `<strong>Democratic Greens</strong> (Ecological Preservation)`,
    join_form_pledge: `Yes, I want to volunteer and support Henrik Vasmer for Governor of Cambria! *`,
    join_form_btn: `Sign Up`,
    shell_sub1: `Vol. III — One Cambria, Under the Sun`,
    shell_sub2: `Official Campaign Dossier`,
    shell_sub3: `Cambrian Bloc / DGC`,
    shell_footer: `Authorized by the Cambrian Bloc.`,
    theme_day: `Day Shift`,
    theme_night: `Night Shift`,
    home_email: `Email Address...`
  },
  alcamerian: {
    nav_home: "Página Principal",
    nav_record: "Historial",
    nav_platform: "Plataforma",
    nav_events: "Horario",
    nav_about: "Dossier",
    join_btn: "Voluntario",
    home_lead_headline: `UNA CAMBRIA MEJOR <br/><span class="text-red">ES POSIBLE.</span>`,
    home_lead_excerpt: `<strong>Henrik Vasmer para Gobernador.</strong> Presidente del Bloque Cámbrico y Asesor Principal de los Verdes Democráticos de Caprica. Arraigado en la evidencia empírica, la gobernanza empática y la administración ambiental.`,
    home_lead_p1: `El tiempo para el cambio incremental ha pasado. Nos enfrentamos a una crisis estructural, donde la consolidación corporativa y la extralimitación federal de Caprica amenazan a la clase trabajadora de Cambria y a nuestro medio ambiente por igual.`,
    home_lead_p2: `Como Gobernador de Cambria, Henrik Vasmer demostró que un camino diferente es posible. Demostró que cuando la gente trabajadora toma el control de las instituciones que los gobiernan, entregan resultados sin precedentes. Esta campaña trata sobre cimentar permanentemente el poder del pueblo contra los monopolios.`,
    home_sec_1_title: `El Mandato de la Clase Trabajadora`,
    home_sec_1_p: `Como Gobernador de Cambria, Henrik Vasmer demostró que cuando la gente trabajadora toma el control de las instituciones que los gobiernan, entregan resultados sin precedentes. Esta campaña trata sobre cimentar permanentemente el poder del pueblo contra los monopolios.`,
    home_sec_2_title: `Respalda la Campaña`,
    home_sec_2_p: `Inscríbete para recibir despachos oficiales de campaña y horarios de mítines directamente en tu terminal.`,
    home_sec_2_btn: `Respaldar`,
    home_bot_1_title: `Promesas Cumplidas`,
    home_bot_1_p: `Un historial completo de entrega para la gente trabajadora de Cambria.`,
    home_bot_1_link: `Ver Historial &rarr;`,
    home_bot_2_title: `En el Terreno`,
    home_bot_2_p: `Únete a Henrik Vasmer en la ruta de campaña. Ver próximos ayuntamientos y asambleas del bloque.`,
    home_bot_2_link: `Ver Calendario &rarr;`,
    home_bot_3_title: `El Futuro Cámbrico`,
    home_bot_3_p: `Próximos planes estructurales para la región. Una visión de clase trabajadora para los próximos cuatro años.`,
    home_bot_3_link: `Leer Plataforma &rarr;`,
    record_title: `Promesas Cumplidas: Un Historial de Entrega`,
    record_subtitle: `[ Historial Interactivo: Haz clic en cualquier módulo para verificar ]`,
    record_stamp: `Clic para Sellar`,
    record_delivered: `CUMPLIDO`,
    record_1_title: `Corredor de Agua del Sur`,
    record_1_p: `Establecimos el acueducto de 1.350 km entre Cambria, Mezata y Costa Blanca. Ninguna comunidad cámbrica volverá a enfrentar sequía sola, y mantenemos plena soberanía sobre nuestra infraestructura hídrica.`,
    record_2_title: `Acción Antimonopolio`,
    record_2_p: `Creamos la Comisión Regional Antimonopolio para bloquear agresivamente los contratos de flete depredadores y proteger nuestras cadenas de suministro independientes de la consolidación corporativa.`,
    record_3_title: `Defensa Civil y Soberanía`,
    record_3_p: `Establecimos la Oficina de Defensa Civil, garantizando la seguridad comunitaria a través de la liberalización de armas, armerías locales y la defensa estricta de nuestra autonomía regional.`,
    record_4_title: `Ley de Fundaciones de Cambria`,
    record_4_p: `Entregamos alivio fiscal directo para los desarrolladores que construyen viviendas familiares cooperativas y locales para pequeñas empresas utilizando mano de obra local, financiados completamente con ingresos regionales.`,
    record_5_title: `Profundización del Comercio del Sur`,
    record_5_p: `Expandimos el modelo de la Autoridad Conjunta del Agua en nuestros corredores costeros de comercio y flete, empoderando a los mercados locales mientras regulamos las prácticas monopolísticas.`,
    record_6_title: `Defendiendo Nuestro Mandato`,
    record_6_p: `Una advertencia decisiva a la clase dirigente conservadora que lucha contra nuestras reformas en los tribunales. Cambria no dará marcha atrás. Construimos para el próximo siglo.`,
    plat_title: `El Futuro Cámbrico: Nuestra Plataforma`,
    plat_0_h: `La Ley de Instalaciones Nucleares Lothar Collins`,
    plat_0_p: `Estableceremos una instalación de generación nuclear regional en el norte de Cambria, creando la Autoridad Nuclear Collins para supervisar su construcción y operación. Financiada a través de una estructura de asociación privada con estricta responsabilidad de costos, esta instalación garantizará la independencia energética de Cambria y reducirá permanentemente nuestra dependencia de las transferencias de energía federales e interregionales.`,
    plat_1_h: `Soberanía Energética Municipal y Cooperativas Comunitarias`,
    plat_1_p: `Utilizaremos los poderes de desarrollo económico regional de Cambria para financiar, autorizar y establecer directamente microrredes renovables de propiedad comunitaria y cooperativas energéticas municipales. Al eludir las redes corporativas nacionales centralizadas, garantizaremos energía barata, confiable y limpia administrada en su totalidad por las comunidades locales de Cambria.`,
    plat_2_h: `Impuestos sobre el Valor de la Tierra (LVT) Cámbrica y Retención de la Riqueza Municipal`,
    plat_2_p: `Ejerceremos nuestra autoridad tributaria regional descentralizada para la transición del sistema de impuestos sobre la propiedad de Cambria a un Impuesto sobre el Valor de la Tierra (LVT), penalizando el acaparamiento especulativo de tierras. Este cambio reducirá la carga fiscal sobre los propietarios de viviendas productivas y las pequeñas empresas, al tiempo que garantizará que todos los ingresos territoriales generados permanezcan directamente en los municipios de Cambria para financiar los servicios locales.`,
    plat_3_h: `Adquisiciones Cooperativas y Preferencia para Pequeñas Empresas`,
    plat_3_p: `Reformaremos el marco regional de adquisiciones para ordenar legalmente que los contratos gubernamentales de Cambria prioricen las cooperativas locales de trabajadores y las pequeñas empresas independientes. Al excluir a los conglomerados multinacionales de las licitaciones públicas locales, mantenemos el dinero de los contribuyentes circulando dentro de la economía regional para apoyar a los trabajadores cámbricos.`,
    plat_4_h: `Integración de Tránsito Regional y Flete Cámbrico`,
    plat_4_p: `Financiaremos la expansión y electrificación de la red ferroviaria regional de Cambria y los sistemas de tránsito municipal, facilitando un tránsito verde sin interrupciones en toda la región. Además, apoyaremos el transporte regional y las cooperativas agrícolas con centros logísticos locales para garantizar una distribución eficiente y de bajas emisiones de los bienes cámbricos.`,
    plat_5_h: `Gestión Ecológica Regional y Preservación Costera`,
    plat_5_p: `Implementaremos estrictas leyes de planificación y zonificación ambiental regional para proteger las frágiles costas, bosques y pesquerías de Cambria de la explotación corporativa y el desarrollo especulativo. Esta gestión local garantizará que la belleza natural y los recursos de Cambria se preserven para las generaciones futuras sin depender de agencias federales lentas y descendentes.`,
    plat_6_h: `Libro Mayor Abierto Regional y Transparencia en las Adquisiciones Públicas`,
    plat_6_p: `Estableceremos un registro de cabildeo integral y obligatorio para todos los funcionarios regionales y haremos la transición de las finanzas públicas de Cambria a un libro mayor abierto transparente y en tiempo real. Cada gasto del gobierno regional y contrato de adquisiciones será públicamente rastreable para asegurar una responsabilidad completa y eliminar los tratos corporativos encubiertos.`,
    events_title: `Calendario Oficial`,
    events_1_date: `12 SEP`,
    events_1_h: `Asamblea Popular en el Puerto de Alto`,
    events_1_p: `Únete a Henrik Vasmer y a la líder del DGC, Adriana Flash, para una asamblea de la clase trabajadora en los históricos muelles de Alto.`,
    events_1_btn: `LEER`,
    events_2_date: `18 SEP`,
    events_2_h: `Cumbre de Política del DGC`,
    events_2_p: `Discutiendo la implementación estructural del nuevo sistema de Impuestos sobre el Valor de la Tierra con economistas regionales.`,
    events_2_btn: `LEER`,
    events_3_date: `04 OCT`,
    events_3_h: `Asamblea del Bloque Cámbrico`,
    events_3_p: `La reunión anual de las alas Fundacionalista y Heredad del Bloque.`,
    events_3_btn: `LEER`,
    about_title: `Dossier del Candidato`,
    about_h: `Liderazgo Probado`,
    about_p1: `Como Presidente del <strong>Bloque Cámbrico</strong> y Asesor Principal de los Verdes Democráticos de Caprica, Henrik Vasmer representa el puente entre los movimientos laborales de la clase trabajadora y la política ecoliberal nacional.`,
    about_p2: `En un momento de profunda transición regional, la oficina del gobernador no es un puesto de nivel de entrada. Mientras que nuestro oponente es un candidato por primera vez que pide capacitación en el trabajo, Henrik aporta décadas de experiencia rigurosa y probada en gobernanza y reforma institucional.`,
    about_p3: `Nacido en Alto en una familia de pescadores, su enfoque es empírico y decisivo. Combina una profunda comprensión de la política abstracta con la experiencia práctica para mover las palancas del poder regional y ofrecer resultados concretos a los trabajadores.`,
    about_p4: `Sin intermediarios. Sin curva de aprendizaje.`,
    join_title: `Únete a la Campaña`,
    join_h: `INVOLÚCRATE HOY.`,
    join_p1: `Nuestra campaña está impulsada con orgullo por las familias trabajadoras comunes de Cambria. Juntos, podemos construir una región más fuerte y justa para todos.`,
    join_p2: `Ya sea que tu enfoque sea fortalecer el trabajo local o proteger nuestro medio ambiente compartido, hay un lugar para ti en este movimiento. Tu tiempo y energía son esenciales para ganar esta elección.`,
    join_p3: `Regístrate a continuación para recibir actualizaciones periódicas de la campaña, invitaciones a asambleas locales y oportunidades para ser voluntario en tu comunidad.`,
    join_form_title: `Inscripción de Voluntarios`,
    join_form_name: `Nombre Completo *`,
    join_form_email: `Correo Electrónico *`,
    join_form_affil: `Afiliación Sindical / Local (Opcional)`,
    join_form_interest: `Estoy más interesado en:`,
    join_form_bloc: `<strong>El Bloque Cámbrico</strong> (Trabajo y Cooperativas Comunitarias)`,
    join_form_greens: `<strong>Verdes Democráticos</strong> (Preservación Ecológica)`,
    join_form_pledge: `Sí, ¡quiero ser voluntario y apoyar a Henrik Vasmer para Gobernador de Cambria! *`,
    join_form_btn: `Inscribirse`,
    shell_sub1: `Vol. III — Una Cambria, Bajo el Sol`,
    shell_sub2: `Dossier Oficial de Campaña`,
    shell_sub3: `Bloque Cámbrico / DGC`,
    shell_footer: `Autorizado por el Bloque Cámbrico.`,
    theme_day: `Turno de Día`,
    theme_night: `Turno de Noche`,
    home_email: `Correo Electrónico...`
  },
  gallic: {
    nav_home: "Page d'Accueil",
    nav_record: "Bilan",
    nav_platform: "Plateforme",
    nav_events: "Calendrier",
    nav_about: "Dossier",
    join_btn: "Bénévole",
    home_lead_headline: `UNE MEILLEURE CAMBRIA <br/><span class="text-red">EST POSSIBLE.</span>`,
    home_lead_excerpt: `<strong>Henrik Vasmer pour Gouverneur.</strong> Président du Bloc Cambrien et Conseiller Principal des Verts Démocratiques de Caprica. Enraciné dans des preuves empiriques, une gouvernance empathique et la gestion environnementale.`,
    home_lead_p1: `Le temps du changement incrémental est révolu. Nous sommes confrontés à une crise structurelle, où la consolidation corporative et l'ingérence fédérale de Caprica menacent la classe ouvrière de Cambria et notre environnement.`,
    home_lead_p2: `En tant que Gouverneur de Cambria, Henrik Vasmer a prouvé qu'une voie différente est possible. Il a prouvé que lorsque les travailleurs prennent le contrôle des institutions qui les gouvernent, ils obtiennent des résultats sans précédent. Cette campagne vise à cimenter définitivement le pouvoir du peuple contre les monopoles.`,
    home_sec_1_title: `Le Mandat de la Classe Ouvrière`,
    home_sec_1_p: `En tant que Gouverneur de Cambria, Henrik Vasmer a prouvé que lorsque les travailleurs prennent le contrôle des institutions qui les gouvernent, ils obtiennent des résultats sans précédent. Cette campagne vise à cimenter définitivement le pouvoir du peuple contre les monopoles.`,
    home_sec_2_title: `Soutenez la Campagne`,
    home_sec_2_p: `Inscrivez-vous pour recevoir les dépêches officielles de la campagne et les horaires des rassemblements directement sur votre terminal.`,
    home_sec_2_btn: `Soutenir`,
    home_bot_1_title: `Promesses Tenues`,
    home_bot_1_p: `Un bilan complet des réalisations pour les travailleurs de Cambria.`,
    home_bot_1_link: `Voir le Bilan &rarr;`,
    home_bot_2_title: `Sur le Terrain`,
    home_bot_2_p: `Rejoignez Henrik Vasmer sur le terrain de la campagne. Voir les prochaines réunions publiques et assemblées du bloc.`,
    home_bot_2_link: `Voir le Calendrier &rarr;`,
    home_bot_3_title: `L'Avenir Cambrien`,
    home_bot_3_p: `Prochains plans structurels pour la région. Une vision de la classe ouvrière pour les quatre prochaines années.`,
    home_bot_3_link: `Lire la Plateforme &rarr;`,
    record_title: `Promesses Tenues : Un Bilan de Réalisations`,
    record_subtitle: `[ Bilan Interactif : Cliquez sur n'importe quel module pour vérifier ]`,
    record_stamp: `Cliquez pour Tamponner`,
    record_delivered: `ACCOMPLI`,
    record_1_title: `Corridor d'Eau du Sud`,
    record_1_p: `Nous avons établi l'aqueduc de 1 350 km entre Cambria, Mezata et Costa Blanca. Aucune communauté cambrienne ne fera plus jamais face à la sécheresse seule, et nous conservons l'entière souveraineté sur notre infrastructure hydraulique.`,
    record_2_title: `Action Anti-Monopole`,
    record_2_p: `Création de la Commission Régionale Anti-Monopole pour bloquer agressivement les contrats de fret prédateurs et protéger nos chaînes d'approvisionnement indépendantes de la consolidation corporative.`,
    record_3_title: `Défense Civile et Souveraineté`,
    record_3_p: `Création du Bureau de la Défense Civile, assurant la sécurité communautaire par la libéralisation des armes à feu, des armureries locales et la stricte défense de notre autonomie régionale.`,
    record_4_title: `Loi sur les Fondations de Cambria`,
    record_4_p: `Fourniture d'un allégement fiscal direct pour les promoteurs construisant des logements familiaux coopératifs et des locaux pour petites entreprises utilisant une main-d'œuvre locale, entièrement financés par les revenus régionaux.`,
    record_5_title: `Approfondissement du Commerce du Sud`,
    record_5_p: `Expansion du modèle de l'Autorité Conjointe de l'Eau dans nos corridors commerciaux et de fret côtiers, renforçant les marchés locaux tout en réglementant les pratiques monopolistiques.`,
    record_6_title: `Défendre Notre Mandat`,
    record_6_p: `Un avertissement décisif à l'establishment conservateur qui combat nos réformes devant les tribunaux. Cambria ne reculera pas. Nous construisons pour le siècle prochain.`,
    plat_title: `L'Avenir Cambrien : Notre Plateforme`,
    plat_0_h: `La Loi sur l'Installation Nucléaire Lothar Collins`,
    plat_0_p: `Nous établirons une installation de production nucléaire régionale dans le nord de Cambria, en créant l'Autorité Nucléaire Collins pour superviser sa construction et son exploitation. Financée par une structure de partenariat privé avec une stricte responsabilité des coûts, cette installation garantira l'indépendance énergétique de Cambria et réduira définitivement notre dépendance aux transferts d'énergie fédéraux et interrégionaux.`,
    plat_1_h: `Souveraineté Énergétique Municipale et Coopératives Communautaires`,
    plat_1_p: `Nous utiliserons les pouvoirs de développement économique régional de Cambria pour financer, autoriser et établir directement des micro-réseaux renouvelables appartenant à la communauté et des coopératives énergétiques municipales. En contournant les réseaux d'entreprise nationaux centralisés, nous garantirons une électricité bon marché, fiable et propre entièrement gérée par les communautés cambriennes locales.`,
    plat_2_h: `Taxation de la Valeur Foncière (LVT) Cambrienne et Rétention de la Richesse Municipale`,
    plat_2_p: `Nous exercerons notre autorité fiscale régionale décentralisée pour faire la transition du système d'impôt foncier de Cambria vers un Impôt sur la Valeur Foncière (LVT), pénalisant la thésaurisation foncière spéculative. Ce changement réduira la charge fiscale pesant sur les propriétaires productifs et les petites entreprises tout en garantissant que toutes les recettes foncières générées restent directement dans les municipalités de Cambria pour financer les services locaux.`,
    plat_3_h: `Marchés Publics Coopératifs et Préférence pour les Petites Entreprises`,
    plat_3_p: `Nous réformerons le cadre régional des marchés publics pour rendre légalement obligatoire que les contrats gouvernementaux de Cambria accordent la priorité aux coopératives locales appartenant aux travailleurs et aux petites entreprises indépendantes. En excluant les conglomérats multinationaux des appels d'offres publics locaux, nous maintenons l'argent des contribuables en circulation dans l'économie régionale pour soutenir les travailleurs cambriens.`,
    plat_4_h: `Intégration du Transport Régional et du Fret Cambrien`,
    plat_4_p: `Nous financerons l'expansion et l'électrification du réseau ferroviaire régional de Cambria et des systèmes de transport municipal, facilitant un transport vert fluide à travers la région. De plus, nous soutiendrons le transport régional et les coopératives agricoles avec des centres logistiques locaux pour assurer une distribution efficace et à faibles émissions des biens cambriens.`,
    plat_5_h: `Gestion Écologique Régionale et Préservation Côtière`,
    plat_5_p: `Nous mettrons en œuvre des lois de planification et de zonage environnemental régionales strictes pour protéger les côtes fragiles, les forêts et les pêcheries de Cambria de l'exploitation corporative et le développement spéculatif. Cette gestion locale garantira que la beauté naturelle et les ressources de Cambria seront préservées pour les générations futures sans dépendre d'agences fédérales lentes et centralisées.`,
    plat_6_h: `Grand Livre Ouvert Régional et Transparence des Marchés Publics`,
    plat_6_p: `Nous établirons un registre de lobbying complet et obligatoire pour tous les responsables régionaux et ferons la transition des finances publiques de Cambria vers un grand livre ouvert transparent en temps réel. Chaque dépense du gouvernement régional et chaque contrat de marché public seront publiquement traçables pour assurer une responsabilité totale et éliminer les accords corporatifs en coulisses.`,
    events_title: `Calendrier Officiel`,
    events_1_date: `12 SEP`,
    events_1_h: `Assemblée Publique au Port d'Alto`,
    events_1_p: `Rejoignez Henrik Vasmer et la dirigeante du DGC, Adriana Flash, pour une assemblée de la classe ouvrière aux quais historiques d'Alto.`,
    events_1_btn: `LIRE`,
    events_2_date: `18 SEP`,
    events_2_h: `Sommet Politique du DGC`,
    events_2_p: `Discussion de la mise en œuvre structurelle du nouveau système d'Impôt sur la Valeur Foncière avec des économistes régionaux.`,
    events_2_btn: `LIRE`,
    events_3_date: `04 OCT`,
    events_3_h: `Assemblée du Bloc Cambrien`,
    events_3_p: `Le rassemblement annuel des ailes Fondamentaliste et Propriété du Bloc.`,
    events_3_btn: `LIRE`,
    about_title: `Dossier du Candidat`,
    about_h: `Un Leadership Éprouvé`,
    about_p1: `En tant que Président du <strong>Bloc Cambrien</strong> et Conseiller Principal des Verts Démocratiques de Caprica, Henrik Vasmer représente le rapprochement entre les mouvements ouvriers et la politique éco-libérale nationale.`,
    about_p2: `À une époque de profonde transition régionale, le poste de gouverneur n'est pas un poste de débutant. Alors que notre adversaire est un candidat novice qui demande une formation sur le tas, Henrik apporte des décennies d'expérience rigoureuse et éprouvée en matière de gouvernance et de réforme institutionnelle.`,
    about_p3: `Né à Alto dans une famille de pêcheurs, son approche est empirique et décisive. Il associe une compréhension profonde de la politique abstraite à l'expertise pratique pour tirer les leviers du pouvoir régional et obtenir des résultats concrets pour les travailleurs.`,
    about_p4: `Pas d'intermédiaires. Pas de courbe d'apprentissage.`,
    join_title: `Rejoignez la Campagne`,
    join_h: `IMPLIQUEZ-VOUS AUJOURD'HUI.`,
    join_p1: `Notre campagne est fièrement propulsée par les familles ouvrières ordinaires à travers Cambria. Ensemble, nous pouvons construire une région plus forte et plus juste pour tous.`,
    join_p2: `Que votre objectif soit de renforcer le travail local ou de protéger notre environnement partagé, il y a une place pour vous dans ce mouvement. Votre temps et votre énergie sont essentiels pour remporter cette élection.`,
    join_p3: `Inscrivez-vous ci-dessous pour recevoir des mises à jour régulières de la campagne, des invitations aux assemblées locales et des opportunités de bénévolat dans votre communauté.`,
    join_form_title: `Inscription des Bénévoles`,
    join_form_name: `Nom Complet *`,
    join_form_email: `Adresse Email *`,
    join_form_affil: `Syndicat / Affiliation Locale (Facultatif)`,
    join_form_interest: `Je suis le plus intéressé par :`,
    join_form_bloc: `<strong>Le Bloc Cambrien</strong> (Travail & Coopératives Communautaires)`,
    join_form_greens: `<strong>Verts Démocratiques</strong> (Préservation Écologique)`,
    join_form_pledge: `Oui, je veux être bénévole et soutenir Henrik Vasmer pour le poste de Gouverneur de Cambria ! *`,
    join_form_btn: `S'inscrire`,
    shell_sub1: `Vol. III — Une Cambria, Sous le Soleil`,
    shell_sub2: `Dossier Officiel de Campagne`,
    shell_sub3: `Bloc Cambrien / DGC`,
    shell_footer: `Autorisé par le Bloc Cambrien.`,
    theme_day: `Équipe de Jour`,
    theme_night: `Équipe de Nuit`,
    home_email: `Adresse Email...`
  }
};

// Simple DOM Translation (No scaling/locking)
function simpleTranslateDOM() {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;
  const currentLang = langSelect.value;
  
  // Also tag navbar elements that lack data-i18n in raw HTML
  const translatableIds = [
    { id: 'nav-home', key: 'nav_home' },
    { id: 'nav-record', key: 'nav_record' },
    { id: 'nav-platform', key: 'nav_platform' },
    { id: 'nav-events', key: 'nav_events' },
    { id: 'nav-about', key: 'nav_about' },
    { id: 'nav-volunteer', key: 'join_btn' }
  ];
  translatableIds.forEach(item => {
    const el = document.getElementById(item.id);
    if (el && !el.hasAttribute('data-i18n')) {
      el.setAttribute('data-i18n', item.key);
    }
  });

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.placeholder = i18n[currentLang][key];
    }
  });
}

// Attach Event Listeners
window.addEventListener('hashchange', () => {
  handleRoute();
  simpleTranslateDOM(); // re-translate newly rendered content
});

// Trigger on load
handleRoute();
setTimeout(simpleTranslateDOM, 0); // ensure lang-select is parsed

document.addEventListener('change', (e) => {
  if (e.target && e.target.id === 'lang-select') {
    simpleTranslateDOM();
  }
});

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(shift) {
  if (shift === 'night') {
    document.body.classList.add('night-shift');
    themeToggleBtn.setAttribute('data-i18n', 'theme_day');
    localStorage.setItem('dgc-theme', 'night');
  } else {
    document.body.classList.remove('night-shift');
    themeToggleBtn.setAttribute('data-i18n', 'theme_night');
    localStorage.setItem('dgc-theme', 'day');
  }
  if (typeof simpleTranslateDOM === 'function') simpleTranslateDOM();
}

// Initial theme load
const savedTheme = localStorage.getItem('dgc-theme') || 'day';
applyTheme(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('night-shift') ? 'night' : 'day';
  applyTheme(currentTheme === 'night' ? 'day' : 'night');
});

// Sound Effect Synthesizer for the Stamp (Mechanical "Ka-Chunk")
// Sound Effect: Tough, Deep Mechanical "Ka-Chunk"
function playStampSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const now = ctx.currentTime;
  
  // --- 1. THE SLIDE (Spring sliding down) ---
  const slideNoise = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
  const slideData = slideNoise.getChannelData(0);
  for (let i = 0; i < slideData.length; i++) slideData[i] = Math.random() * 2 - 1;
  const slideSrc = ctx.createBufferSource();
  slideSrc.buffer = slideNoise;
  const slideFilter = ctx.createBiquadFilter();
  slideFilter.type = 'highpass';
  slideFilter.frequency.value = 3000; // Sharp metal scrape
  const slideGain = ctx.createGain();
  slideGain.gain.setValueAtTime(0.08, now); // Reduced from 0.2
  slideGain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
  slideSrc.connect(slideFilter).connect(slideGain).connect(ctx.destination);
  slideSrc.start(now);
  
  // --- 2. THE THUD (Heavy, tough bass impact) ---
  const impactTime = now + 0.05; // 50ms delay for the Ka-Chunk!
  
  const thudOsc = ctx.createOscillator();
  thudOsc.type = 'sine';
  const thudGain = ctx.createGain();
  thudOsc.frequency.setValueAtTime(120, impactTime);
  thudOsc.frequency.exponentialRampToValueAtTime(30, impactTime + 0.1);
  thudGain.gain.setValueAtTime(0.5, impactTime); // Reduced from 1.2
  thudGain.gain.exponentialRampToValueAtTime(0.01, impactTime + 0.15);
  thudOsc.connect(thudGain).connect(ctx.destination);
  thudOsc.start(impactTime);
  thudOsc.stop(impactTime + 0.15);
  
  // --- 3. THE CRUNCH (The physical paper/metal hit) ---
  const crunchNoise = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
  const crunchData = crunchNoise.getChannelData(0);
  for (let i = 0; i < crunchData.length; i++) crunchData[i] = Math.random() * 2 - 1;
  const crunchSrc = ctx.createBufferSource();
  crunchSrc.buffer = crunchNoise;
  const crunchFilter = ctx.createBiquadFilter();
  crunchFilter.type = 'lowpass';
  crunchFilter.frequency.value = 800; // Deep, muffled crunch
  const crunchGain = ctx.createGain();
  crunchGain.gain.setValueAtTime(0.25, impactTime); // Reduced from 0.6
  crunchGain.gain.exponentialRampToValueAtTime(0.01, impactTime + 0.1);
  crunchSrc.connect(crunchFilter).connect(crunchGain).connect(ctx.destination);
  crunchSrc.start(impactTime);
}

// Promises Kept Click Stamp
document.addEventListener('click', (e) => {
  const card = e.target.closest('.promise-card');
  
  // Only stamp if it hasn't been stamped yet
  if (card && !card.querySelector('.kept-stamp')) {
    const stamp = document.createElement('div');
    stamp.className = 'kept-stamp';
    stamp.innerHTML = '<span data-i18n="record_delivered">DELIVERED</span>';
    card.appendChild(stamp);
    
    // We run the translation function so the injected stamp matches the current language
    simpleTranslateDOM();
    
    // Play the tough, deep synthetic sound once
    playStampSound();
    
    // Animate the stamp dropping in
    stamp.animate([
      { opacity: 0, transform: 'scale(2.5) rotate(-35deg)' },
      { opacity: 1, offset: 0.3 },
      { transform: 'scale(0.85) rotate(-10deg)', offset: 0.7 },
      { transform: 'scale(1) rotate(-10deg)', opacity: 1 }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      fill: 'forwards'
    });
    
    // Hide the affordance box
    const zone = card.querySelector('.stamp-zone');
    if (zone) zone.style.display = 'none';
  }
});

// Form Submission Logic
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'join-form') {
    e.preventDefault(); // Prevent page reload
    
    const form = e.target;
    const name = document.getElementById('join-name').value.trim();
    const email = document.getElementById('join-email').value.trim();
    const pledge = document.getElementById('join-pledge').checked;
    const interests = form.querySelectorAll('input[name="interest"]:checked');
    const errorDiv = document.getElementById('join-error');
    const submitBtn = document.getElementById('join-submit');
    
    // Custom Validation
    if (!name || !email || !pledge) {
      errorDiv.textContent = "Please fill in all required fields and check the volunteer box.";
      errorDiv.style.display = "block";
      return;
    }
    
    if (interests.length === 0) {
      errorDiv.textContent = "Please select at least one organization you are interested in.";
      errorDiv.style.display = "block";
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorDiv.textContent = "Please enter a valid email address.";
      errorDiv.style.display = "block";
      return;
    }
    
    // Hide error if valid
    errorDiv.style.display = "none";
    
    // Simulate Submission
    submitBtn.textContent = "Submitting...";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;
    
    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
          <h3 class="text-green" style="font-size: 2.5rem; margin-bottom: 1rem; font-family: var(--font-masthead);">Welcome to the Campaign</h3>
          <p style="font-size: 1.2rem; margin-bottom: 2rem; font-family: var(--font-headline);">Thank you, ${name}. We've received your sign-up and will be in touch shortly.</p>
          <p style="font-size: 1.4rem; font-family: var(--font-headline);"><strong>Together, we win.</strong></p>
        </div>
      `;
    }, 1200);
  }
});
