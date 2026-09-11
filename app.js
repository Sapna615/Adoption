const pets = [
  {
    name:'Buddy',
    breed:'Labrador Retriever',
    species:'Dog',
    age:2,
    stage:'Young',
    gender:'Male',
    size:'Large',
    location:'Ludhiana',
    energy:'High',
    emoji:'🐶',
    personality:'Friendly, playful and eager to learn.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Luna',
    breed:'Domestic Shorthair',
    species:'Cat',
    age:3,
    stage:'Adult',
    gender:'Female',
    size:'Small',
    location:'Chandigarh',
    energy:'Medium',
    emoji:'🐱',
    personality:'Calm, affectionate and curious.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Milo',
    breed:'Indie',
    species:'Dog',
    age:1,
    stage:'Young',
    gender:'Male',
    size:'Medium',
    location:'Delhi',
    energy:'High',
    emoji:'🐕',
    personality:'Energetic, social and adaptable.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Coco',
    breed:'Persian Mix',
    species:'Cat',
    age:6,
    stage:'Senior',
    gender:'Female',
    size:'Small',
    location:'Amritsar',
    energy:'Low',
    emoji:'😺',
    personality:'Gentle and relaxed, happiest in a quiet home.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Rocky',
    breed:'Beagle',
    species:'Dog',
    age:4,
    stage:'Adult',
    gender:'Male',
    size:'Medium',
    location:'Jaipur',
    energy:'High',
    emoji:'🐶',
    personality:'Curious, cheerful and active.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Nala',
    breed:'Indie Cat',
    species:'Cat',
    age:2,
    stage:'Young',
    gender:'Female',
    size:'Small',
    location:'Mohali',
    energy:'Medium',
    emoji:'🐱',
    personality:'Playful and people-friendly.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Simba',
    breed:'Indie',
    species:'Dog',
    age:7,
    stage:'Senior',
    gender:'Male',
    size:'Large',
    location:'Patiala',
    energy:'Low',
    emoji:'🦮',
    personality:'Steady, loyal and enjoys a calm routine.',
    health:'Routine care should be verified with the adoption center.'
  },
  {
    name:'Daisy',
    breed:'Indie Cat',
    species:'Cat',
    age:1,
    stage:'Young',
    gender:'Female',
    size:'Small',
    location:'Jalandhar',
    energy:'High',
    emoji:'🐈',
    personality:'Bright, playful and curious.',
    health:'Routine care should be verified with the adoption center.'
  }
];

/* FAVORITES */

const favKey = 'pethaven-favorites';

let favorites = JSON.parse(
  localStorage.getItem(favKey) || '[]'
);

/* HELPERS */

function $(s){
  return document.querySelector(s);
}

function $$(s){
  return [...document.querySelectorAll(s)];
}

/* MOBILE NAVIGATION */

function nav(){

  const menu = $('.menu');
  const links = $('.links');

  if(menu && links){

    menu.onclick = () =>
      links.classList.toggle('mobile-open');

  }

}

nav();

/* PET CARD */

function petCard(p){

  return `
    <article class="pet-card">

      <div class="pet-img">
        ${p.emoji}
      </div>

      <div class="pet-info">

        <div class="card-top">

          <span class="pet-status">
            Available
          </span>

          <button
            class="fav ${favorites.includes(p.name) ? 'active' : ''}"
            data-fav="${p.name}"
          >
            ${favorites.includes(p.name) ? '♥' : '♡'}
          </button>

        </div>

        <h3>
          ${p.name}
        </h3>

        <div class="pet-meta">
          ${p.breed} • ${p.age} yr${p.age > 1 ? 's' : ''} • ${p.gender}
        </div>

        <div class="pet-meta">
          📍 ${p.location} • ${p.size}
        </div>

        <button
          class="small-btn"
          data-detail="${p.name}"
        >
          View profile →
        </button>

      </div>

    </article>
  `;
}

/* PET ACTIONS */

function bindPetActions(){

  $$('[data-fav]').forEach(b => {

    b.onclick = () => {

      const n = b.dataset.fav;

      favorites = favorites.includes(n)
        ? favorites.filter(x => x !== n)
        : [...favorites, n];

      localStorage.setItem(
        favKey,
        JSON.stringify(favorites)
      );

      renderPets();

    };

  });

  $$('[data-detail]').forEach(b => {

    b.onclick = () =>
      openPet(b.dataset.detail);

  });

}

/* RENDER PETS */

function renderPets(){

  const grid = $('#petGrid');

  if(!grid) return;

  const q =
    ($('#search')?.value || '').toLowerCase();

  const sp =
    $('#species')?.value || 'all';

  const age =
    $('#age')?.value || 'all';

  const gender =
    $('#gender')?.value || 'all';

  const size =
    $('#size')?.value || 'all';

  const loc =
    $('#location')?.value || 'all';

  const onlyFav =
    $('#showFavorites')?.dataset.active === 'true';

  const filtered = pets.filter(p =>

    (!q ||
      `${p.name} ${p.breed} ${p.location}`
        .toLowerCase()
        .includes(q)
    )

    &&

    (sp === 'all' || p.species === sp)

    &&

    (age === 'all' || p.stage === age)

    &&

    (gender === 'all' || p.gender === gender)

    &&

    (size === 'all' || p.size === size)

    &&

    (loc === 'all' || p.location === loc)

    &&

    (!onlyFav || favorites.includes(p.name))

  );

  grid.innerHTML =
    filtered.map(petCard).join('');

  if($('#empty')){
    $('#empty').hidden =
      filtered.length > 0;
  }

  if($('#petCount')){

    $('#petCount').textContent =
      `${filtered.length} pet${filtered.length === 1 ? '' : 's'} found`;

  }

  bindPetActions();

}

/* PET PAGE EVENTS */

if($('#petGrid')){

  [
    'search',
    'species',
    'age',
    'gender',
    'size',
    'location'
  ].forEach(id => {

    $('#'+id)?.addEventListener(
      'input',
      renderPets
    );

  });

  $('#showFavorites')?.addEventListener(
    'click',
    () => {

      const b = $('#showFavorites');

      const active =
        b.dataset.active === 'true';

      b.dataset.active =
        String(!active);

      b.textContent =
        active
          ? '♥ My favorites'
          : '♥ Showing favorites';

      renderPets();

    }
  );

  renderPets();

}

/* MODALS */

function modal(m){

  m?.classList.add('show');

}

function closeModals(){

  $$('.modal').forEach(
    m => m.classList.remove('show')
  );

}

$$('.close').forEach(
  b => b.onclick = closeModals
);

$$('.modal').forEach(
  m => {

    m.addEventListener(
      'click',
      e => {

        if(e.target === m){
          m.classList.remove('show');
        }

      }
    );

  }
);

/* PET PROFILE */

function openPet(name){

  const p =
    pets.find(x => x.name === name);

  if(!p) return;

  const box =
    $('#petDetail');

  if(!box) return;

  box.innerHTML = `

    <div class="detail-hero">

      <div class="detail-pet">
        ${p.emoji}
      </div>

      <div>

        <span class="pet-status">
          Available
        </span>

        <h2>
          ${p.name}
        </h2>

        <p>
          ${p.breed} • ${p.age} years •
          ${p.gender} • ${p.location}
        </p>

      </div>

    </div>

    <div class="detail-grid">

      <div>
        <b>Personality</b>
        <p>${p.personality}</p>
      </div>

      <div>
        <b>Energy</b>
        <p>${p.energy}</p>
      </div>

      <div>
        <b>Size</b>
        <p>${p.size}</p>
      </div>

      <div>
        <b>Health</b>
        <p>${p.health}</p>
      </div>

    </div>

    <div class="detail-actions">

      <button
        class="btn primary"
        id="applyPet"
      >
        Request a meet & greet →
      </button>

      <button
        class="btn secondary"
        id="favoritePet"
      >
        ${
          favorites.includes(p.name)
            ? '♥ Saved'
            : '♡ Save favorite'
        }
      </button>

    </div>

  `;

  modal($('#petModal'));

  $('#favoritePet').onclick = () => {

    favorites =
      favorites.includes(p.name)
        ? favorites.filter(x => x !== p.name)
        : [...favorites, p.name];

    localStorage.setItem(
      favKey,
      JSON.stringify(favorites)
    );

    openPet(p.name);
    renderPets();

  };

  $('#applyPet').onclick = () => {

    closeModals();

    openApplication(p.name);

  };

}

/* APPLICATION */

function openApplication(name){

  const m =
    $('#applicationModal');

  if(!m) return;

  $('#applicationTitle').textContent =
    `Apply to meet ${name}`;

  modal(m);

}

$('#applicationForm')?.addEventListener(
  'submit',
  e => {

    e.preventDefault();

    const pet =
      $('#applicationTitle')
        .textContent
        .replace(
          'Apply to meet ',
          ''
        );

    localStorage.setItem(
      'pethaven-last-application',
      JSON.stringify({

        pet,

        name:
          $('#appName').value,

        email:
          $('#appEmail').value,

        city:
          $('#appCity').value,

        date:
          new Date().toISOString()

      })
    );

    $('#applicationContent').innerHTML = `

      <div class="success">

        <div>✓</div>

        <h2>
          Application saved
        </h2>

        <p>
          Your demo application for
          <b>${pet}</b>
          has been recorded in this browser.
          No real shelter submission was made.
        </p>

        <a
          class="btn primary"
          href="/journey.html"
        >
          Continue my journey →
        </a>

      </div>

    `;

  }
);

/* LOST & FOUND */

const reports = [

  {
    type:'lost',
    pet:'Bruno',
    species:'Dog',
    location:'Ludhiana',
    date:'10 Sep',
    emoji:'🐕',
    text:'Brown-and-white dog, medium size. Last seen near a residential area.'
  },

  {
    type:'found',
    pet:'Unknown cat',
    species:'Cat',
    location:'Chandigarh',
    date:'8 Sep',
    emoji:'🐈',
    text:'Friendly grey cat found near a neighborhood park.'
  },

  {
    type:'lost',
    pet:'Mimi',
    species:'Cat',
    location:'Amritsar',
    date:'6 Sep',
    emoji:'🐱',
    text:'Small white-and-orange cat. Distinct orange patch near one ear.'
  },

  {
    type:'found',
    pet:'Unknown dog',
    species:'Dog',
    location:'Delhi',
    date:'4 Sep',
    emoji:'🐶',
    text:'Young black dog found wandering near a market.'
  }

];

function renderReports(type='all'){

  const g =
    $('#reportGrid');

  if(!g) return;

  g.innerHTML =
    reports
      .filter(
        r => type === 'all' || r.type === type
      )
      .map(
        r => `

        <article class="report-card">

          <div class="report-img">
            ${r.emoji}
          </div>

          <span class="report-type ${r.type}">
            ${r.type}
          </span>

          <h3>
            ${r.pet}
          </h3>

          <p>
            ${r.species} • 📍 ${r.location}
          </p>

          <small>
            Reported ${r.date}
          </small>

          <p>
            ${r.text}
          </p>

        </article>

      `
      )
      .join('');

}

if($('#reportGrid')){

  renderReports();

  $$('[data-report]').forEach(
    b => {

      b.onclick = () => {

        $$('[data-report]')
          .forEach(
            x => x.classList.remove('active')
          );

        b.classList.add('active');

        renderReports(
          b.dataset.report
        );

      };

    }
  );

  $('#reportBtn')?.addEventListener(
    'click',
    () => modal($('#reportModal'))
  );

  $('#reportForm')?.addEventListener(
    'submit',
    e => {

      e.preventDefault();

      $('#reportModal')
        .classList
        .remove('show');

      alert(
        'Demo report saved locally. It was not published to a real rescue database.'
      );

    }
  );

}

/* ADOPTION CENTERS */

const centers = [

  [
    'Ludhiana',
    'PetHaven Community Center',
    'Adoption support, meet-and-greet guidance',
    'Example listing',
    '10:00 AM–6:00 PM'
  ],

  [
    'Chandigarh',
    'City Animal Support Center',
    'Adoption and welfare information',
    'Example listing',
    '9:00 AM–5:00 PM'
  ],

  [
    'Delhi',
    'Urban Pet Rescue Hub',
    'Adoption support and animal welfare',
    'Example listing',
    '10:00 AM–7:00 PM'
  ],

  [
    'Amritsar',
    'Amritsar Animal Care Point',
    'Pet adoption and care guidance',
    'Example listing',
    '10:00 AM–6:00 PM'
  ]

];

function openCenter(i){

  const x =
    centers[i];

  const c =
    $('#centerContent');

  if(!c) return;

  c.innerHTML = `

    <span class="kicker">
      ADOPTION CENTER
    </span>

    <div class="center-detail-icon">
      📍
    </div>

    <h2>
      ${x[1]}
    </h2>

    <p class="center-city">
      ${x[0]}
    </p>

    <div class="detail-grid">

      <div>
        <b>Services</b>
        <p>${x[2]}</p>
      </div>

      <div>
        <b>Hours</b>
        <p>${x[4]}</p>
      </div>

      <div>
        <b>Listing status</b>
        <p>Example portfolio listing</p>
      </div>

      <div>
        <b>Before visiting</b>
        <p>
          Verify current services, hours and contact
          details directly with the organization.
        </p>
      </div>

    </div>

    <div class="detail-actions">

      <button
        class="btn primary"
        onclick="document.getElementById('centerModal').classList.remove('show')"
      >
        Close profile
      </button>

    </div>

  `;

  modal($('#centerModal'));

}

function renderCenters(){

  const g =
    $('#centerGrid');

  if(!g) return;

  const q =
    ($('#centerSearch')?.value || '')
      .toLowerCase();

  const c =
    $('#centerCity')?.value || 'all';

  g.innerHTML =

    centers
      .map(
        (x,i) => ({
          x,
          i
        })
      )

      .filter(
        o =>
          (c === 'all' || o.x[0] === c)
          &&
          (
            !q ||
            o.x
              .join(' ')
              .toLowerCase()
              .includes(q)
          )
      )

      .map(
        o => `

        <article class="center-card">

          <div class="center-icon">
            📍
          </div>

          <span>
            ${o.x[0]}
          </span>

          <h3>
            ${o.x[1]}
          </h3>

          <p>
            ${o.x[2]}
          </p>

          <small>
            ${o.x[3]}.
            Verify current services and
            hours directly before visiting.
          </small>

          <button
            class="small-btn"
            data-center="${o.i}"
          >
            View center →
          </button>

        </article>

      `
      )
      .join('');

  $$('[data-center]').forEach(
    b =>
      b.onclick =
        () => openCenter(
          +b.dataset.center
        )
  );

}

if($('#centerGrid')){

  $('#centerSearch').oninput =
    renderCenters;

  $('#centerCity').onchange =
    renderCenters;

  renderCenters();

}

/* PET CARE GUIDES */

const guides = [

  [
    '🐶',
    'Dog care',
    'Feeding, exercise, grooming and positive training routines.',
    [
      'Set a predictable feeding and exercise routine.',
      'Use reward-based training and short, consistent sessions.',
      'Provide fresh water, safe enrichment and regular grooming.'
    ]
  ],

  [
    '🐱',
    'Cat care',
    'Nutrition, litter hygiene, enrichment and safe indoor spaces.',
    [
      'Keep food, water and litter areas clean and predictable.',
      'Offer scratching, climbing and play opportunities.',
      'Provide quiet resting spaces and monitor changes in behavior.'
    ]
  ],

  [
    '🏠',
    'First week',
    'Set up a quiet space, establish routine and allow adjustment time.',
    [
      'Prepare food, water, bedding and a calm resting area before arrival.',
      'Let the pet explore gradually instead of overwhelming them.',
      'Keep routines consistent while the pet settles in.'
    ]
  ],

  [
    '🩺',
    'Vet planning',
    'Plan routine veterinary care and know when professional advice is needed.',
    [
      'Choose a veterinary service before you need urgent care.',
      'Keep records of vaccinations, treatments and important history.',
      'For illness or injury, seek professional veterinary advice.'
    ]
  ],

  [
    '🧼',
    'Grooming',
    'Build gentle grooming into the routine based on the pet’s coat and needs.',
    [
      'Introduce grooming slowly and reward calm behavior.',
      'Use tools appropriate for the animal and coat.',
      'Ask a professional groomer or veterinarian about special needs.'
    ]
  ],

  [
    '🎓',
    'Training',
    'Use consistency, patience and reward-based learning.',
    [
      'Keep training sessions short and positive.',
      'Reward desired behavior immediately and consistently.',
      'Avoid punishment and seek qualified help for difficult behavior.'
    ]
  ]

];

function openGuide(i){

  const g =
    guides[i];

  const c =
    $('#guideContent');

  if(!c) return;

  c.innerHTML = `

    <div class="guide-detail-icon">
      ${g[0]}
    </div>

    <span class="kicker">
      PET CARE GUIDE
    </span>

    <h2>
      ${g[1]}
    </h2>

    <p class="guide-lead">
      ${g[2]}
    </p>

    <ul class="guide-points">

      ${
        g[3]
          .map(
            x => `<li>✓ ${x}</li>`
          )
          .join('')
      }

    </ul>

    <div class="emergency-note">

      <b>
        Note:
      </b>

      This is general educational guidance.
      Individual care needs can vary; consult a
      qualified veterinarian or trainer when appropriate.

    </div>

  `;

  modal($('#guideModal'));

}

if($('#guideGrid')){

  $('#guideGrid').innerHTML =

    guides
      .map(
        (g,i) => `

        <article class="guide-card">

          <div>
            ${g[0]}
          </div>

          <h3>
            ${g[1]}
          </h3>

          <p>
            ${g[2]}
          </p>

          <button
            class="small-btn"
            data-guide="${i}"
          >
            Read guide →
          </button>

        </article>

      `
      )
      .join('');

  $$('[data-guide]').forEach(
    b =>
      b.onclick =
        () => openGuide(
          +b.dataset.guide
        )
  );

}

/* ADOPTION JOURNEY CHECKLIST */

const checklist = [

  'Choose a suitable pet and review its needs',

  'Prepare a safe sleeping/rest area',

  'Arrange food and clean water supplies',

  'Plan routine veterinary care',

  'Plan daily exercise and enrichment',

  'Budget for recurring and unexpected costs',

  'Check household agreement and housing rules',

  'Prepare an emergency contact plan'

];

function renderChecklist(){

  const g =
    $('#checklist');

  if(!g) return;

  const saved =
    JSON.parse(
      localStorage.getItem(
        'pethaven-checklist'
      ) || '[]'
    );

  g.innerHTML =

    checklist
      .map(
        (x,i) => `

        <label class="check-item">

          <input
            type="checkbox"
            data-check="${i}"
            ${saved.includes(i) ? 'checked' : ''}
          >

          <span>
            ${x}
          </span>

        </label>

      `
      )
      .join('');

  $$('[data-check]').forEach(
    c => {

      c.onchange = () => {

        const s =
          $$('[data-check]')
            .filter(
              x => x.checked
            )
            .map(
              x => +x.dataset.check
            );

        localStorage.setItem(
          'pethaven-checklist',
          JSON.stringify(s)
        );

        updateProgress();

      };

    }
  );

  updateProgress();

}

function updateProgress(){

  const all =
    $$('[data-check]');

  const done =
    all.filter(
      x => x.checked
    ).length;

  const pct =
    all.length
      ? Math.round(
          done / all.length * 100
        )
      : 0;

  if($('#progressBar')){
    $('#progressBar')
      .style
      .width =
      pct + '%';
  }

  if($('#progressTitle')){

    $('#progressTitle')
      .textContent =
      `${pct}% ready`;

  }

}

renderChecklist();

/* MATCH SYSTEM */

$('#matchBtn')?.addEventListener(
  'click',
  () => {

    const sp =
      $('#matchSpecies').value;

    const act =
      $('#activity').value;

    const time =
      $('#time').value;

    const home =
      $('#homeType').value;

    let ranked =

      pets

        .filter(
          p =>
            sp === 'all' ||
            p.species === sp
        )

        .map(
          p => {

            let score = 55;

            if(p.energy === act){
              score += 15;
            }

            if(
              (act === 'High' &&
               p.energy === 'High')

              ||

              (act === 'Low' &&
               p.energy === 'Low')
            ){
              score += 10;
            }

            if(
              time === '4+ hours' &&
              p.energy !== 'Low'
            ){
              score += 8;
            }

            if(
              home === 'Apartment' &&
              p.size === 'Small'
            ){
              score += 10;
            }

            if(
              home === 'House with yard' &&
              p.species === 'Dog'
            ){
              score += 8;
            }

            return {
              ...p,
              score:Math.min(
                98,
                score
              )
            };

          }
        )

        .sort(
          (a,b) =>
            b.score - a.score
        )

        .slice(0,3);

    $('#matchResult').innerHTML =

      ranked

        .map(
          p => `

          <article class="match-card">

            <div class="match-pet">
              ${p.emoji}
            </div>

            <div>

              <span class="match-score">
                ${p.score}% match
              </span>

              <h3>
                ${p.name}
              </h3>

              <p>
                ${p.breed} • ${p.location}
              </p>

              <p>
                ${p.personality}
              </p>

              <a
                class="small-btn"
                href="/adopt.html"
              >
                View all pets →
              </a>

            </div>

          </article>

        `
        )
        .join('');

  }
);

/* DARK MODE */

if(
  localStorage.getItem(
    'pethaven-theme'
  ) === 'dark'
){

  document.body.classList.add(
    'dark'
  );

}

const themeButton =
  document.createElement('button');

themeButton.className =
  'theme-toggle';

themeButton.textContent =
  document.body.classList.contains('dark')
    ? '☀'
    : '◐';

themeButton.title =
  'Toggle dark mode';

document.body.appendChild(
  themeButton
);

themeButton.onclick = () => {

  document.body.classList.toggle(
    'dark'
  );

  localStorage.setItem(
    'pethaven-theme',
    document.body.classList.contains('dark')
      ? 'dark'
      : 'light'
  );

  themeButton.textContent =
    document.body.classList.contains('dark')
      ? '☀'
      : '◐';

};