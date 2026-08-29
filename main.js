// Layout Shell (Masthead and Footer remain constant)
const shellHTML = `
  <header class="masthead">
    <h1 class="masthead-title">VASMER <span class="text-red">20</span><span class="text-green">66</span></h1>
    <div class="masthead-sub">
      <span>Vol. III — One Cambria, Under the Sun</span>
      <span>Official Campaign Dossier</span>
      <span>Cambrian Bloc / DGC</span>
    </div>
    <nav class="nav-container">
      <div class="nav-links">
        <a href="#home" class="nav-link" data-target="home">Front Page</a>
        <a href="#record" class="nav-link" data-target="record">Track Record</a>
        <a href="#platform" class="nav-link" data-target="platform">Platform</a>
        <a href="#events" class="nav-link" data-target="events">Schedule</a>
        <a href="#about" class="nav-link" data-target="about">Dossier</a>
      </div>
      <div style="display: flex; gap: 1rem; align-items: center;">
        <button id="theme-toggle" class="theme-toggle">Day Shift</button>
        <a href="#join" class="btn-primary nav-link" data-target="join" style="text-decoration: none; display: inline-block;">Volunteer</a>
      </div>
    </nav>
  </header>
  
  <main id="page-content" class="page-container"></main>
  
  <footer>
    <div>Authorized by the Cambrian Bloc.</div>
  </footer>
`;

// Page Contents
const pages = {
  home: `
    <div class="newspaper-grid">
      <!-- Left/Main Column: Lead Story -->
      <article class="lead-story">
        <h2 class="headline massive">A BETTER CAMBRIA <br/><span class="text-red">IS POSSIBLE.</span></h2>
        <img src="https://placehold.co/900x420/000000/E60000.png?text=VASMER+RALLY" alt="Henrik Vasmer Rally" class="styled-img">
        <div class="dossier-columns-2">
          <p class="excerpt"><strong>Henrik Vasmer for Governor.</strong> Chairman of the Cambrian Bloc and Senior Counsel to the Democratic Greens of Caprica. Rooted in empirical evidence, empathetic governance, and environmental stewardship.</p>
          <p>The time for incremental change has passed. We are facing a structural crisis, where corporate consolidation and Caprican federal overreach threaten Cambria's working class and our environment alike.</p>
          <p>As Governor of Cambria, Henrik Vasmer proved that a different path is possible. He proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is not merely about re-election; it is about permanently cementing the power of the people against the monopolies.</p>
        </div>
      </article>

      <!-- Right Column: Secondary Articles & Actions -->
      <aside class="sidebar-stories">
        <article class="secondary-story">
          <h3 class="headline text-red">The Working Class Mandate</h3>
          <p>As Governor of Cambria, Henrik Vasmer proved that when working people take control of the institutions that govern them, they deliver unparalleled results. This campaign is about permanently cementing the power of the people against the monopolies.</p>
        </article>
        
        <article class="secondary-story">
          <h3 class="headline text-green">Endorse the Campaign</h3>
          <p>Sign up to receive official campaign dispatches and rally schedules directly to your terminal.</p>
          <input type="email" placeholder="Email Address..." />
          <button class="btn-primary-alt" style="width: 100%;">Endorse</button>
        </article>
      </aside>

      <!-- Bottom Row: Minor Articles (Teasing other pages) -->
      <div class="bottom-fold">
        <article class="minor-story">
          <h4 class="headline">Promises Kept</h4>
          <p>A comprehensive record of delivery for the working people of Cambria.</p>
          <a href="#record" class="read-more">View Track Record &rarr;</a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-red">On the Ground</h4>
          <p>Join Henrik Vasmer on the campaign trail. View upcoming townhalls and bloc assemblies.</p>
          <a href="#events" class="read-more">View Schedule &rarr;</a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-green">The Cambrian Future</h4>
          <p>Upcoming structural plans for the region. A working-class vision for the next four years.</p>
          <a href="#platform" class="read-more">Read Platform &rarr;</a>
        </article>
      </div>

    </div>
  `,
  platform: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 1rem;">The Cambrian Future: Our Platform</h2>
    <div class="platform-grid">
      <div class="platform-red" data-index="01">
        <h3 class="text-red">Municipal Energy Sovereignty & Community Co-ops</h3>
        <p>We will utilize Cambria’s regional economic development powers to directly fund, license, and establish community-owned renewable microgrids and municipal energy cooperatives. By bypassing centralized national corporate grids, we will guarantee cheap, reliable, and clean power managed entirely by local Cambrian communities.</p>
      </div>
      <div class="platform-green" data-index="02">
        <h3 class="text-green">Cambrian Land Value Taxation (LVT) & Municipal Wealth Retention</h3>
        <p>We will exercise our devolved regional taxation authority to transition Cambria's property tax system to a Land Value Tax (LVT), penalizing speculative land-hoarding. This shift will lower the tax burden on productive homeowners and small businesses while ensuring all generated land revenues remain directly within Cambrian municipalities to fund local services.</p>
      </div>
      <div class="platform-green" data-index="03">
        <h3 class="text-green">Cooperative Procurement & Small Business Preference</h3>
        <p>We will reform the regional procurement framework to legally mandate that Cambrian government contracts prioritize local worker-owned cooperatives and independent small businesses. By locking out multinational conglomerates from local public tenders, we keep taxpayer money circulating within the regional economy to support Cambrian workers.</p>
      </div>
      <div class="platform-red" data-index="04">
        <h3 class="text-red">Cambrian Regional Transit & Freight Integration</h3>
        <p>We will fund the expansion and electrification of the Cambrian regional rail network and municipal transit systems, facilitating seamless green transit across the region. Additionally, we will support regional transport and agricultural cooperatives with local logistics hubs to ensure efficient, low-emission distribution of Cambrian goods.</p>
      </div>
      <div class="platform-red" data-index="05">
        <h3 class="text-red">Regional Ecological Stewardship & Coastal Preservation</h3>
        <p>We will implement strict regional environmental planning and zoning laws to protect Cambria’s fragile coastlines, forests, and fisheries from corporate exploitation and speculative development. This local stewardship will guarantee that Cambria’s natural beauty and resources are preserved for future generations without relying on slow, top-down federal agencies.</p>
      </div>
      <div class="platform-green" data-index="06">
        <h3 class="text-green">Regional Open Ledger & Public Procurement Transparency</h3>
        <p>We will establish a comprehensive, mandatory lobbying register for all regional officials and transition Cambria's public finances to a transparent, real-time open ledger. Every single regional government expenditure and procurement contract will be publicly trackable to ensure complete accountability and eliminate backroom corporate deals.</p>
      </div>
    </div>
  `,
  record: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 1rem;">Promises Kept: A Record of Delivery</h2>
    <p style="font-weight: 800; font-size: 1.2rem; text-transform: uppercase; color: var(--dgc-red); margin-bottom: 3rem; letter-spacing: 1px;">[ Interactive Record: Click any module to verify ]</p>
    <div class="promise-grid">
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-green">Southern Water Corridor</h3>
        <p>We established the 1,350km pipeline between Cambria, Mezata, and Costa Blanca. No Cambrian community will ever face drought alone again, and we retain full sovereignty over our water infrastructure.</p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-red">Anti-Monopoly Action</h3>
        <p>Created the Regional Anti-Monopoly Commission to aggressively block predatory freight contracts and protect our independent supply chains from corporate consolidation.</p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-green">Civil Defense & Sovereignty</h3>
        <p>Established the Office of Civil Defense, ensuring community safety through firearms liberalization, local armories, and the strict defense of our regional autonomy.</p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-red">Cambria Foundations Act</h3>
        <p>Delivered direct tax relief for developers building cooperative family housing and small business premises using local labor, funded entirely from regional revenue.</p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-green">Deepening Southern Trade</h3>
        <p>Expanding the Joint Water Authority model into our coastal trade and freight corridors, empowering local markets while regulating monopolistic practices.</p>
      </div>
      <div class="promise-card">
        <div class="stamp-zone">Click to Stamp</div>
        <h3 class="headline text-red">Defending Our Mandate</h3>
        <p>A decisive warning to the conservative establishment fighting our reforms in the courts. Cambria is not going back. We build for the next century.</p>
      </div>
    </div>
  `,
  events: `
    <h2 style="border-bottom: 8px solid var(--dgc-red); padding-bottom: 1rem; margin-bottom: 3rem;">Official Schedule</h2>
    <table class="event-table">
      <tr>
        <th>SEP 12</th>
        <td>
          <h4>Alto Harbor Townhall</h4>
          <p>Join Henrik Vasmer and DGC Leader Adriana Flash for a working-class townhall at the historic Alto docks.</p>
        </td>
        <td style="text-align: right;"><button class="btn-primary">READ</button></td>
      </tr>
      <tr>
        <th>SEP 18</th>
        <td>
          <h4>DGC Policy Summit</h4>
          <p>Discussing the structural implementation of the new Land Value Tax system with regional economists.</p>
        </td>
        <td style="text-align: right;"><button class="btn-primary-alt">READ</button></td>
      </tr>
      <tr>
        <th>OCT 04</th>
        <td>
          <h4>Cambrian Bloc Assembly</h4>
          <p>The annual gathering of the Foundationalist and Homestead wings of the Bloc.</p>
        </td>
        <td style="text-align: right;"><button class="btn-primary">READ</button></td>
      </tr>
    </table>
  `,
  about: `
    <h2 style="border-bottom: 8px solid var(--dgc-green); padding-bottom: 1rem; margin-bottom: 3rem;">Candidate Dossier</h2>
    <div class="split-grid">
      <div>
        <img src="https://placehold.co/600x400/000000/03753D.png?text=DGC+RALLY" alt="DGC Rally" class="styled-img">
      </div>
      <div>
        <h3 class="text-red">Bridging the Divide</h3>
        <p>As Chairman of the <strong>Cambrian Bloc</strong> and Senior Counsel for the Democratic Greens of Caprica, Henrik Vasmer represents the bridging of working-class labor movements with national eco-liberal policy.</p>
        <p>Born in Alto, his approach to governance is entirely empirical and empathetic. The son of a fishing family, he understands that environmental policy is not an abstraction—it is the direct management of the resources that working families rely on to survive.</p>
        <p>He demands that institutions earn back the trust of the people through decisive, sustainable action. No parties. No handlers. Just the working class mandate.</p>
      </div>
    </div>
  `,
  join: `
    <h2 style="border-bottom: 8px solid var(--dgc-red); padding-bottom: 1rem; margin-bottom: 3rem;">Join the Campaign</h2>
    <div class="split-grid">
      <div>
        <h3 class="headline text-red" style="font-size: 3rem; line-height: 1; margin-bottom: 2rem;">GET INVOLVED TODAY.</h3>
        <p style="font-size: 1.4rem; font-weight: 700; line-height: 1.4;">Our campaign is proudly powered by everyday working families across Cambria, not corporate PACs. Together, we can build a stronger, fairer region for everyone.</p>
        <p>Whether your focus is on strengthening local labor or protecting our shared environment, there is a place for you in this movement. Your time and energy are essential to winning this election.</p>
        <p>Sign up below to receive regular campaign updates, invitations to local townhalls, and opportunities to volunteer in your community.</p>
      </div>
      <form id="join-form" style="background: var(--bg-color); border: 4px solid var(--border-color); padding: 3rem; box-shadow: 8px 8px 0px var(--border-color);">
        <h3 style="margin-bottom: 2rem;">Volunteer Sign-Up</h3>
        
        <div id="join-error" style="color: var(--dgc-red); font-weight: 700; margin-bottom: 1.5rem; display: none; font-family: var(--font-headline);"></div>
        
        <input type="text" id="join-name" placeholder="Full Name *" required />
        <input type="email" id="join-email" placeholder="Email Address *" required />
        <input type="text" id="join-affiliation" placeholder="Union / Local Affiliation (Optional)" />
        
        <p style="margin-bottom: 1rem; font-weight: 700; font-family: var(--font-headline);">I am most interested in:</p>
        <label class="checkbox-group" style="margin-bottom: 1rem;">
          <input type="checkbox" name="interest" value="bloc" />
          <span><strong>The Cambrian Bloc</strong> (Labor & Community Co-ops)</span>
        </label>
        <label class="checkbox-group">
          <input type="checkbox" name="interest" value="greens" />
          <span><strong>Democratic Greens</strong> (Ecological Preservation)</span>
        </label>
        
        <hr style="border: none; border-bottom: 2px dashed var(--border-color); margin: 2rem 0;" />
        
        <label class="checkbox-group">
          <input type="checkbox" id="join-pledge" required />
          <span>Yes, I want to volunteer and support Henrik Vasmer for Governor of Cambria! *</span>
        </label>
        
        <button type="submit" id="join-submit" class="btn-primary-alt" style="width: 100%;">Sign Up</button>
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
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.target === hash) {
      link.classList.add('active');
    }
  });
}

// Listen for hash changes
window.addEventListener('hashchange', handleRoute);
// Trigger on load
handleRoute();

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

function applyTheme(shift) {
  if (shift === 'day') {
    document.body.classList.add('day-shift');
    if(themeToggleBtn) themeToggleBtn.textContent = 'Night Shift';
  } else {
    document.body.classList.remove('day-shift');
    if(themeToggleBtn) themeToggleBtn.textContent = 'Day Shift';
  }
}

const savedTheme = localStorage.getItem('dgc-theme') || 'night';
applyTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const newShift = document.body.classList.contains('day-shift') ? 'night' : 'day';
    applyTheme(newShift);
    localStorage.setItem('dgc-theme', newShift);
  });
}

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
    stamp.innerHTML = 'DELIVERED';
    card.appendChild(stamp);
    
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
