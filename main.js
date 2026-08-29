// Layout Shell (Masthead and Footer remain constant)
const shellHTML = `
  <header class="masthead">
    <h1 class="masthead-title">VASMER <span class="text-red">20</span><span class="text-green">66</span></h1>
    <div class="masthead-sub">
      <span>Vol. IV — The Working Class Mandate</span>
      <span>Official Campaign Dossier</span>
      <span>Cambrian Bloc / DGC</span>
    </div>
    <nav class="nav-container">
      <div class="nav-links">
        <a href="#home" class="nav-link" data-target="home">Front Page</a>
        <a href="#platform" class="nav-link" data-target="platform">Platform</a>
        <a href="#events" class="nav-link" data-target="events">Schedule</a>
        <a href="#about" class="nav-link" data-target="about">Dossier</a>
      </div>
      <div style="display: flex; gap: 1rem;">
        <button id="theme-toggle" class="theme-toggle">Day Shift</button>
        <button class="btn-primary">Join the Bloc</button>
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
          <a href="#platform" class="read-more">Read Platform &rarr;</a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-red">On the Ground</h4>
          <p>Join Henrik Vasmer on the campaign trail. View upcoming townhalls and bloc assemblies.</p>
          <a href="#events" class="read-more">View Schedule &rarr;</a>
        </article>
        <article class="minor-story">
          <h4 class="headline text-green">The Cambrian Future</h4>
          <p>Upcoming structural plans for the region. Awaiting official campaign dispatch.</p>
          <a href="#" class="read-more">Awaiting Transmission &rarr;</a>
        </article>
      </div>

    </div>
  `,
  platform: `
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
    <div class="dossier-columns-2">
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

// Sound Effect Synthesizer for the Stamp
function playStampSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  
  // 1. The mechanical "spring/clunk"
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'square'; // Harsher, mechanical tone
  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  
  osc.frequency.setValueAtTime(300, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.05);
  
  oscGain.gain.setValueAtTime(0.15, ctx.currentTime); // Much quieter
  oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
  
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.05);
  
  // 2. The paper "slap" (Filtered white noise)
  const bufferSize = ctx.sampleRate * 0.05; // 50ms short transient
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 800; // Woody/plastic range
  filter.Q.value = 1;
  
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.3, ctx.currentTime); // Lower volume
  noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
  
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  
  noise.start(ctx.currentTime);
}

// Promises Kept Click Stamp
document.addEventListener('click', (e) => {
  const card = e.target.closest('.promise-card');
  if (card && !card.querySelector('.kept-stamp')) {
    const stamp = document.createElement('div');
    stamp.className = 'kept-stamp';
    stamp.innerHTML = 'DELIVERED';
    card.appendChild(stamp);
    playStampSound();
    
    // Imperative Web Animations API guarantees it fires immediately
    stamp.animate([
      { opacity: 0, transform: 'scale(5) rotate(-35deg)' },
      { opacity: 1, offset: 0.3 },
      { transform: 'scale(0.85) rotate(-10deg)', offset: 0.7 },
      { transform: 'scale(1) rotate(-10deg)', opacity: 1 }
    ], {
      duration: 400,
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      fill: 'forwards'
    });
    
    // Hide the affordance box
    const zone = card.querySelector('.stamp-zone');
    if (zone) zone.style.display = 'none';
  }
});
