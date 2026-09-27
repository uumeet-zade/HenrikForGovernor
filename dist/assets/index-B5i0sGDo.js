(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const c={en:{nav_brand:"DALGAARD 2070",nav_record:"Track Record",nav_platform:"Platform",nav_events:"Events",nav_about:"Dossier",nav_join:"Volunteer",home_hero:"BACK<br/>THE BLOC",home_sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",home_p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",home_p2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",home_btn_primary:"Endorse",home_btn_secondary:"Read Platform",plat_title:"The Cambrian Mandate",plat_0_h:"Alto Light Rail Network",plat_0_p:"We will establish a comprehensive East-West and North-South Light Rail system intersecting at Alto Central, connecting key hubs like the Legislature, Stadiums, and Airport.",plat_1_h:"Alto-Gryphon High-Speed Link",plat_1_p:"We will build a new high-speed rail corridor connecting Cambria's two largest cities via Battle Mountain. We will aggressively lower bus fares region-wide to guarantee transit equity.",plat_2_h:"Mass Public Housing",plat_2_p:"We will construct vast corridors of public housing concentrated precisely where working people need them most: near railway stations, tram termini, and universities.",plat_3_h:"Publicly Funded Supermarkets",plat_3_p:"To combat food deserts and price gouging, we will establish publicly-owned and operated supermarkets in low-income zones to guarantee access to basic essentials for all Cambrians.",plat_4_h:"Wealth Redistribution",plat_4_p:"We will enact a strict pied-à-terre tax on non-resident, part-time homeowners hoarding properties worth over 3.25 million, redirecting that capital directly into public works and pothole repair.",plat_5_h:"Civilian Safety & Education",plat_5_p:"We will establish a dedicated Safety Department to handle community issues so police can focus purely on serious crimes. We will simultaneously surge investment into public schools and youth sports clubs.",record_title:"Completed Mandates",record_0_h:"The Lothar Collins Nuclear Facility Act",record_0_p:"We will establish a regional nuclear generating facility in northern Cambria, creating the Collins Nuclear Authority to oversee its construction and operation. Financed through a private-partnership structure with strict cost accountability, this facility will ensure Cambria's energy independence and permanently reduce our reliance on federal and inter-regional power transfers.",record_1_h:"Municipal Energy Sovereignty & Community Co-ops",record_1_p:"We will utilize Cambria’s regional economic development powers to directly fund, license, and establish community-owned renewable microgrids and municipal energy cooperatives. By bypassing centralized national corporate grids, we will guarantee cheap, reliable, and clean power managed entirely by local Cambrian communities.",record_2_h:"Cambrian Land Value Taxation & Wealth Retention",record_2_p:"We will exercise our devolved regional taxation authority to transition Cambria's property tax system to a Land Value Tax (LVT), penalizing speculative land-hoarding. This shift will lower the tax burden on productive homeowners and small businesses while ensuring all generated land revenues remain directly within Cambrian municipalities to fund local services.",record_3_h:"Cooperative Procurement & Small Business Preference",record_3_p:"We will reform the regional procurement framework to legally mandate that Cambrian government contracts prioritize local worker-owned cooperatives and independent small businesses. By locking out multinational conglomerates from local public tenders, we keep taxpayer money circulating within the regional economy to support Cambrian workers.",record_4_h:"Cambrian Regional Transit & Freight Integration",record_4_p:"We will fund the expansion and electrification of the Cambrian regional rail network and municipal transit systems, facilitating seamless green transit across the region. Additionally, we will support regional transport and agricultural cooperatives with local logistics hubs to ensure efficient, low-emission distribution of Cambrian goods.",record_5_h:"Regional Ecological Stewardship & Coastal Preservation",record_5_p:"We will implement strict regional environmental planning and zoning laws to protect Cambria’s fragile coastlines, forests, and fisheries from corporate exploitation and speculative development. This local stewardship will guarantee that Cambria’s natural beauty and resources are preserved for future generations without relying on slow, top-down federal agencies.",record_6_h:"Regional Open Ledger & Public Procurement Transparency",record_6_p:"We will establish a comprehensive, mandatory lobbying register for all regional officials and transition Cambria's public finances to a transparent, real-time open ledger. Every single regional government expenditure and procurement contract will be publicly trackable to ensure complete accountability and eliminate backroom corporate deals.",events_title:"Official Schedule",events_1_date:"SEP 12",events_1_h:"Alto, Cambrian Legislature",events_1_p:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",events_2_date:"SEP 18",events_2_h:"Gryphon, Town Hall",events_2_p:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",events_3_date:"OCT 05",events_3_h:"Battle Mountain, Railway Station",events_3_p:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",about_title:"Candidate Dossier",about_h:"Consectetur Adipiscing",about_p1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",about_p2:"Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",about_p3:"Per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",about_p4:"In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.",join_title:"Get Involved Today",join_sub:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",join_p:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",join_name:"Full Name",join_email:"Email Address",join_affil:"Union / Local Affiliation",join_btn:"Sign Up"}};let p="en";const m=`
  <div class="watermark-scatter" style="top: 15%; left: -2%; transform: rotate(-90deg);">DALGAARD</div>
  <div class="watermark-scatter" style="top: 10%; right: 5%;">CAMBRIA</div>
  <div class="watermark-scatter" style="top: 35%; left: 20%;">BLOC</div>
  <div class="watermark-scatter" style="top: 50%; right: -2%; transform: rotate(90deg);">2070</div>
  <div class="watermark-scatter" style="top: 65%; left: 5%;">CAMBRIA</div>
  <div class="watermark-scatter" style="top: 80%; right: 15%;">DALGAARD</div>
  <div class="watermark-scatter" style="bottom: 5%; left: 30%;">BLOC</div>
  <div class="watermark-scatter" style="top: 20%; left: 45%; font-size: 8vw;">2070</div>
  <nav class="nav-container">
    <div class="nav-brand" onclick="navigate('home')"><span data-i18n="nav_brand">DALGAARD 2070</span></div>
    <div class="nav-links">
      <a href="#record" class="nav-link" data-page="record"><span data-i18n="nav_record">Track Record</span></a>
      <a href="#platform" class="nav-link" data-page="platform"><span data-i18n="nav_platform">Platform</span></a>
      <a href="#events" class="nav-link" data-page="events"><span data-i18n="nav_events">Events</span></a>
      <a href="#about" class="nav-link" data-page="about"><span data-i18n="nav_about">Dossier</span></a>
      <a href="#join" class="nav-link"><span data-i18n="nav_join">Volunteer</span></a>
    </div>
  </nav>
  <main id="page-content" class="page-container"></main>
`,r={home:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <h1 class="title-massive"><span data-i18n="home_hero">BACK<br/>THE BLOC</span></h1>
      
      <div class="flex-split" style="margin-top: 4rem;">
        <div style="flex: 1; max-width: 600px;">
          <span class="micro text-green" style="display: block; margin-bottom: 2rem;">// 2070 CAMPAIGN</span>
          <h3 style="font-size: 2rem; margin-bottom: 2rem;"><span data-i18n="home_sub">Lorem ipsum dolor sit amet...</span></h3>
          <p style="font-size: 1.25rem; margin-bottom: 1.5rem;"><span data-i18n="home_p1">Lorem ipsum dolor sit amet...</span></p>
          <p style="font-size: 1.25rem; margin-bottom: 3rem;"><span data-i18n="home_p2">Duis aute irure dolor in reprehenderit...</span></p>
          <a href="#join" class="btn-primary" style="margin-right: 1rem;"><span data-i18n="home_btn_primary">Endorse</span></a>
          <a href="#platform" class="btn-primary" style="background: transparent; color: var(--color-black);"><span data-i18n="home_btn_secondary">Read Platform</span></a>
        </div>
        <div style="flex: 1; display: flex; justify-content: flex-end;">
          <div class="img-container">
            <img src="https://i.redd.it/webklw2desif1.jpeg" class="editorial-img" />
          </div>
        </div>
      </div>
    </div>
  `,record:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <span class="micro text-green" style="display: block; margin-bottom: 1rem;">// PRIOR VICTORIES</span>
      <h2 class="title-section"><span data-i18n="record_title">Completed Mandates</span></h2>
      
      <div class="manifesto-list">
        <!-- 0 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="01"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_0_h">The Lothar Collins Nuclear Facility Act</span></h3>
            <p><span data-i18n="record_0_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 1 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="02"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_1_h">Municipal Energy Sovereignty</span></h3>
            <p><span data-i18n="record_1_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 2 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="03"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_2_h">Land Value Taxation</span></h3>
            <p><span data-i18n="record_2_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 3 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="04"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_3_h">Cooperative Procurement</span></h3>
            <p><span data-i18n="record_3_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 4 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="05"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_4_h">Transit Integration</span></h3>
            <p><span data-i18n="record_4_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 5 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="06"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_5_h">Ecological Stewardship</span></h3>
            <p><span data-i18n="record_5_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
        <!-- 6 -->
        <div class="manifesto-row record-row">
          <div class="manifesto-num record-num" data-num="07"></div>
          <div class="manifesto-content">
            <h3><span data-i18n="record_6_h">Open Ledger</span></h3>
            <p><span data-i18n="record_6_p">...</span></p>
            <span class="micro record-stamp">COMPLETE</span>
          </div>
        </div>
      </div>
    </div>
  `,platform:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <span class="micro text-green" style="display: block; margin-bottom: 1rem;">// THE MANDATE</span>
      <h2 class="title-section"><span data-i18n="plat_title">Lorem Ipsum Dolor</span></h2>
      
      <div class="manifesto-list">
        <div class="manifesto-row">
          <div class="manifesto-num">01</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_0_h">Alto Light Rail Network</span></h3>
            <p><span data-i18n="plat_0_p">We will establish a comprehensive...</span></p>
          </div>
        </div>
        <div class="manifesto-row">
          <div class="manifesto-num">02</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_1_h">Alto-Gryphon High-Speed Link</span></h3>
            <p><span data-i18n="plat_1_p">We will build a new high-speed rail...</span></p>
          </div>
        </div>
        <div class="manifesto-row">
          <div class="manifesto-num">03</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_2_h">Mass Public Housing</span></h3>
            <p><span data-i18n="plat_2_p">We will construct vast corridors...</span></p>
          </div>
        </div>
        <div class="manifesto-row">
          <div class="manifesto-num">04</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_3_h">Publicly Funded Supermarkets</span></h3>
            <p><span data-i18n="plat_3_p">To combat food deserts...</span></p>
          </div>
        </div>
        <div class="manifesto-row">
          <div class="manifesto-num">05</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_4_h">Wealth Redistribution</span></h3>
            <p><span data-i18n="plat_4_p">We will enact a strict pied-à-terre tax...</span></p>
          </div>
        </div>
        <div class="manifesto-row">
          <div class="manifesto-num">06</div>
          <div class="manifesto-content">
            <h3><span data-i18n="plat_5_h">Civilian Safety & Education</span></h3>
            <p><span data-i18n="plat_5_p">We will establish a dedicated Safety...</span></p>
          </div>
        </div>
      </div>
    </div>
  `,events:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <span class="micro" style="display: block; margin-bottom: 1rem;">// SCHEDULE</span>
      <h2 class="title-section"><span data-i18n="events_title">Official Schedule</span></h2>
      
      <div style="margin-top: 4rem;">
        <div class="flex-split" style="border-top: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-green); border: none;"><span data-i18n="events_1_date">SEP 12</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_1_h">Lorem Ipsum Townhall</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_1_p">Sed do eiusmod tempor...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
        <div class="flex-split" style="border-top: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-red); border: none;"><span data-i18n="events_2_date">SEP 18</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_2_h">Dolor Sit Summit</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_2_p">Ut enim ad minim veniam...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
        <div class="flex-split" style="border-top: 2px solid var(--color-black); border-bottom: 2px solid var(--color-black); padding: 3rem 0; align-items: center;">
          <h3 class="title-section" style="margin: 0; color: var(--color-black); border: none;"><span data-i18n="events_3_date">OCT 05</span></h3>
          <div style="flex: 1;">
            <h3 style="font-size: 2.5rem; margin-bottom: 1rem;"><span data-i18n="events_3_h">Aliquam Consequat</span></h3>
            <p style="font-size: 1.5rem;"><span data-i18n="events_3_p">Duis aute irure dolor in...</span></p>
          </div>
          <button class="btn-primary">RSVP</button>
        </div>
      </div>
    </div>
  `,about:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <div class="flex-split reverse">
        <div style="flex: 1;">
          <span class="micro" style="display: block; margin-bottom: 1rem;">// DOSSIER</span>
          <h2 class="title-section" style="margin-bottom: 2rem;"><span data-i18n="about_title">Candidate Dossier</span></h2>
          <h3 style="font-size: 2.5rem; margin-bottom: 2rem;"><span data-i18n="about_h">Consectetur Adipiscing</span></h3>
          <p style="font-size: 1.5rem; margin-bottom: 2rem;"><span data-i18n="about_p1">Lorem ipsum dolor sit amet...</span></p>
          <p style="font-size: 1.5rem; margin-bottom: 2rem;"><span data-i18n="about_p2">Duis sagittis ipsum...</span></p>
          <p style="font-size: 1.5rem; margin-bottom: 4rem;"><span data-i18n="about_p3">Per conubia nostra...</span></p>
          <span class="micro text-red" style="font-size: 1rem;"><span data-i18n="about_p4">In scelerisque sem at dolor.</span></span>
        </div>
        <div style="flex: 1;">
          <div class="img-container" style="margin-left: auto;">
            <img src="https://images.gamebanana.com/img/ss/mods/6289207c195c9.jpg" class="editorial-img" />
          </div>
        </div>
      </div>
    </div>
  `,join:`
    <div class="section-wrapper" style="padding-top: 10rem;">
      <div class="flex-split">
        <div style="flex: 1; padding-right: 4rem;">
          <h2 class="title-massive" style="font-size: clamp(4rem, 8vw, 8rem); margin-bottom: 2rem; line-height: 0.9;"><span data-i18n="join_title">Get Involved Today</span></h2>
          <p style="font-size: 2rem; font-weight: 800; margin-bottom: 2rem; color: var(--color-green);"><span data-i18n="join_sub">Lorem ipsum dolor sit amet...</span></p>
          <p style="font-size: 1.5rem;"><span data-i18n="join_p">Sed do eiusmod tempor...</span></p>
        </div>
        <div style="flex: 1;">
          <div style="background: #FFF; padding: 4rem; border: 1px solid var(--color-black);">
            <form id="join-form">
              <input type="text" class="form-input" data-i18n-placeholder="join_name" placeholder="Full Name *" required />
              <input type="email" class="form-input" data-i18n-placeholder="join_email" placeholder="Email Address *" required />
              <input type="text" class="form-input" data-i18n-placeholder="join_affil" placeholder="Union / Local Affiliation" />
              <button type="submit" class="btn-primary" style="width: 100%; margin-top: 2rem;"><span data-i18n="join_btn">Sign Up</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `};function l(){document.getElementById("app").innerHTML=m,window.addEventListener("hashchange",d),window.location.hash?d():window.location.hash="#home"}function d(){let e=window.location.hash.substring(1)||"home";r[e]||(e="home"),document.getElementById("page-content").innerHTML=r[e],document.querySelectorAll(".nav-link").forEach(t=>{t.classList.toggle("active",t.dataset.page===e)}),v(),e==="record"&&u(),window.scrollTo(0,0)}function u(){document.querySelectorAll(".record-row").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("checked-off")})})}function v(){const e=c[p];e&&(document.querySelectorAll("[data-i18n]").forEach(t=>{const n=t.getAttribute("data-i18n");e[n]&&(t.innerHTML=e[n])}),document.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{const n=t.getAttribute("data-i18n-placeholder");e[n]&&t.setAttribute("placeholder",e[n])}))}window.navigate=e=>{window.location.hash="#"+e};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();
