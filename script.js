/* ==========================================================================
   Sneha's 21st Birthday Website - Interactive Logic
   ========================================================================== */

/**
 * 1. CONFIGURATION DATA (Easily editable arrays)
 */

// Friendship counter start date: November 23, 2024
const FRIENDSHIP_START_DATE = new Date('2024-11-23T00:00:00');

// Photo & Video Gallery Data (Featuring all 34 real photos & video clips of Sneha)
const PHOTO_GALLERY_DATA = [
  {
    id: 1,
    src: 'images/Snapchat-796127091.mp4',
    type: 'video',
    caption: 'Bestie Memory Clip #1 🎥',
    date: 'Nov 2024',
    description: 'A hilarious video moment captured together!'
  },
  {
    id: 2,
    src: 'images/Screenshot_20260916-030625_Gallery.jpg.jpeg',
    type: 'image',
    caption: 'Shopping Spree & Unfiltered Smiles 🛍️',
    date: 'Nov 2024',
    description: 'Shopping runs together where laughing at outfits and endless talks are the best part of the day.'
  },
  {
    id: 3,
    src: 'images/Snapchat-76341864.mp4',
    type: 'video',
    caption: 'Iconic Memory Clip #2 🎬',
    date: 'Dec 2024',
    description: 'Capturing real smiles and iconic video moments.'
  },
  {
    id: 4,
    src: 'images/Screenshot_20260916-030632_Gallery.jpg.jpeg',
    type: 'image',
    caption: 'Stairway Candids & Bestie Vibes 💫',
    date: 'Dec 2024',
    description: 'Casual candid moments hanging out together near the stairs.'
  },
  {
    id: 5,
    src: 'images/Snapchat-896013406.mp4',
    type: 'video',
    caption: 'Unfiltered Laughter Clip #3 ✨',
    date: 'Jan 2025',
    description: 'Late night laughs and golden video clips.'
  },
  {
    id: 6,
    src: 'images/Screenshot_20260916-030638_Gallery.jpg.jpeg',
    type: 'image',
    caption: 'The Bandana & Glasses Selfie 🕶️',
    date: 'Jan 2025',
    description: 'Matching energy, goofy expressions, and the best memories.'
  },
  {
    id: 7,
    src: 'images/Snapchat-337688623.mp4',
    type: 'video',
    caption: 'Special Memory Clip #4 🥂',
    date: 'Feb 2025',
    description: 'Unfiltered laughter and special video moments captured on camera.'
  },
  {
    id: 8,
    src: 'images/Screenshot_20260916-030830_Gallery.jpg.jpeg',
    type: 'image',
    caption: 'Streamers, Colors & Good Energy 🎉',
    date: 'Feb 2025',
    description: 'Surrounded by vibrant colors and joy — bringing warmth into every room Sneha enters.'
  },
  {
    id: 9,
    src: 'images/Snapchat-1220821405.mp4',
    type: 'video',
    caption: 'Fun Moment Clip #5 🌟',
    date: 'Spring 2025',
    description: 'Special memories recorded together.'
  },
  {
    id: 10,
    src: 'images/Snapchat-1179557186.jpg.jpeg',
    type: 'image',
    caption: 'Snapchat Memory 👻',
    date: 'Snapchat Special',
    description: 'Iconic Snapchat memory of Sneha.'
  },
  {
    id: 11,
    src: 'images/Snapchat-129297130.mp4',
    type: 'video',
    caption: 'Iconic Video Clip #6 💖',
    date: 'Summer 2025',
    description: 'Unforgettable adventures and happy times.'
  },
  {
    id: 12,
    src: 'images/20250823_143929.jpg',
    type: 'image',
    caption: 'Golden Memory Moment 🌸',
    date: 'Aug 2025',
    description: 'Beautiful smiles and unforgettable days.'
  },
  {
    id: 13,
    src: 'images/Screenshot_20250825-001746_Instagram.jpg',
    type: 'image',
    caption: 'Sneha Story Memory 📱',
    date: 'Aug 2025',
    description: 'Special story post memory.'
  },
  {
    id: 14,
    src: 'images/IMG-20251015-WA0055.jpg',
    type: 'image',
    caption: 'Sneha Memory 💕',
    date: 'Oct 2025',
    description: 'Precious times captured on camera.'
  },
  {
    id: 15,
    src: 'images/IMG-20251015-WA0065.jpg',
    type: 'image',
    caption: 'Sneha Memory ✨',
    date: 'Oct 2025',
    description: 'Laughter, joy, and good times.'
  },
  {
    id: 16,
    src: 'images/IMG-20251015-WA0075.jpg',
    type: 'image',
    caption: 'Sneha Memory 🌟',
    date: 'Oct 2025',
    description: 'Capturing memories together.'
  },
  {
    id: 17,
    src: 'images/IMG-20251015-WA0083.jpg',
    type: 'image',
    caption: 'Sneha Memory 💫',
    date: 'Oct 2025',
    description: 'Sneha being iconically real.'
  },
  {
    id: 18,
    src: 'images/IMG-20251015-WA0087.jpg',
    type: 'image',
    caption: 'Sneha Memory 💖',
    date: 'Oct 2025',
    description: 'Sweet moments shared with best friends.'
  },
  {
    id: 19,
    src: 'images/IMG-20260426-WA0180.jpg',
    type: 'image',
    caption: 'Sneha Memory 🌺',
    date: 'Apr 2026',
    description: 'Unforgettable smiles and sunshine.'
  },
  {
    id: 20,
    src: 'images/IMG-20260728-WA0091.jpg',
    type: 'image',
    caption: 'Sneha Memory 🥂',
    date: 'Jul 2026',
    description: 'Cheers to great times and endless laughs.'
  },
  {
    id: 21,
    src: 'images/IMG-20260728-WA0129.jpg',
    type: 'image',
    caption: 'Sneha Memory ✨',
    date: 'Jul 2026',
    description: 'Special times with Sneha.'
  },
  {
    id: 22,
    src: 'images/IMG-20260728-WA0130.jpg',
    type: 'image',
    caption: 'Sneha Memory 🎂',
    date: 'Jul 2026',
    description: '21 years of being amazing.'
  },
  {
    id: 23,
    src: 'images/IMG-20260728-WA0131.jpg',
    type: 'image',
    caption: 'Sneha Memory 🌟',
    date: 'Jul 2026',
    description: 'More beautiful candid moments.'
  },
  {
    id: 24,
    src: 'images/IMG-20260728-WA0169.jpg',
    type: 'image',
    caption: 'Sneha Memory 💕',
    date: 'Jul 2026',
    description: 'Unfiltered joy and pure friendship.'
  },
  {
    id: 25,
    src: 'images/IMG-20260728-WA0171.jpg',
    type: 'image',
    caption: 'Sneha Memory 🌸',
    date: 'Jul 2026',
    description: 'Always keeping things real.'
  },
  {
    id: 26,
    src: 'images/IMG-20260728-WA0180.jpg',
    type: 'image',
    caption: 'Sneha Memory ✨',
    date: 'Jul 2026',
    description: 'Shining bright as always.'
  },
  {
    id: 27,
    src: 'images/IMG-20260802-WA0025.jpg',
    type: 'image',
    caption: 'Sneha Memory 💖',
    date: 'Aug 2026',
    description: 'Unforgettable days and late night talks.'
  },
  {
    id: 28,
    src: 'images/IMG-20260802-WA0027.jpg',
    type: 'image',
    caption: 'Sneha Memory 🌺',
    date: 'Aug 2026',
    description: 'Fun times captured forever.'
  },
  {
    id: 29,
    src: 'images/IMG-20260807-WA0065.jpg',
    type: 'image',
    caption: 'Sneha Memory 🥂',
    date: 'Aug 2026',
    description: 'Celebrating 21 years of Sneha!'
  }
  ,
  { id: 30, src: 'images/IMG-20260802-WA0025.jpg', type: 'image', caption: 'IMG-20260802-WA0025', date: 'Aug 2026', description: '' },
  { id: 31, src: 'images/IMG-20260728-WA0146.jpg', type: 'image', caption: 'IMG-20260728-WA0146', date: 'Jul 2026', description: '' },
  { id: 32, src: 'images/IMG-20260728-WA0149.jpg', type: 'image', caption: 'IMG-20260728-WA0149', date: 'Jul 2026', description: '' },
  { id: 33, src: 'images/IMG-20260728-WA0156.jpg', type: 'image', caption: 'IMG-20260728-WA0156', date: 'Jul 2026', description: '' },
  { id: 34, src: 'images/sneha1.jpg', type: 'image', caption: 'Sneha 1', date: '2026', description: '' },
  { id: 35, src: 'images/sneha2.jpg', type: 'image', caption: 'Sneha 2', date: '2026', description: '' },
  { id: 36, src: 'images/sneha3.jpg', type: 'image', caption: 'Sneha 3', date: '2026', description: '' },
  { id: 37, src: 'images/sneha4.jpg', type: 'image', caption: 'Sneha 4', date: '2026', description: '' },
  { id: 38, src: 'images/Snapchat-236767838.mp4', type: 'video', caption: 'Snapchat 236767838', date: '2026', description: '' },
  { id: 39, src: 'images/VID-20260728-WA0163.mp4', type: 'video', caption: 'VID 20260728 WA0163', date: '2026', description: '' },
  { id: 40, src: 'images/VID-20260728-WA0184.mp4', type: 'video', caption: 'VID 20260728 WA0184', date: '2026', description: '' },
  { id: 41, src: 'images/VID-20260803-WA0002.mp4', type: 'video', caption: 'VID 20260803 WA0002', date: '2026', description: '' }
];


// 8 Editable Envelope Messages (Containing exact requested birthday text)
const ENVELOPE_MESSAGES = [
  {
    id: 1,
    badge: 'Note 01',
    seal: '💖',
    title: 'The Day We Met',
    text: "I don't know how to explain it, but the day I met you just felt different. Like I knew you'd stick around. Glad I was right."
  },
  {
    id: 2,
    badge: 'Note 02',
    seal: '🌟',
    title: 'Since Nov 2024',
    text: "It's kind of wild that it's only been since November 2024. Feels like you've been my person way longer than that."
  },
  {
    id: 3,
    badge: 'Note 03',
    seal: '🎂',
    title: 'Turning 21',
    text: "Turning 21 is a big deal, but honestly? The bigger deal is that you're the same kind, real person you were the day I met you. Don't ever change that."
  },
  {
    id: 4,
    badge: 'Note 04',
    seal: '✨',
    title: 'Never For Granted',
    text: "I don't say this enough, but I don't take you for granted. Not even a little. Happy birthday, Sneha."
  },
  {
    id: 5,
    badge: 'Note 05',
    seal: '💬',
    title: 'The 2 AM "Same"',
    text: "You have this way of making hard days feel lighter just by texting back \"same\" or sending a meme at 2am. I notice it. I'm thankful for it."
  },
  {
    id: 6,
    badge: 'Note 06',
    seal: '🤝',
    title: 'My Person Every Time',
    text: "If I ever need someone to tell me the truth, laugh at my dumb jokes, or just sit in silence with me — it's you. Every time."
  },
  {
    id: 7,
    badge: 'Note 07',
    seal: '💌',
    title: 'Writing It Out',
    text: "I'm not great at saying mushy stuff out loud, so I'm writing it instead: you matter to me more than you probably realize."
  },
  {
    id: 8,
    badge: 'Note 08',
    seal: '👑',
    title: 'Best Friend Forever',
    text: "Here's to another year of you being you — messy, kind, funny, real. I'm lucky I get to call you my best friend. Happy 21st."
  }
];

// Titles for the Playful Title Generator
const SNEHA_TITLES = [
  '👑 The Queen of 2 AM "Same" Texts',
  '✨ Master of Unfiltered Truth & Dumb Jokes',
  '💖 Chief Vibe Officer Since Nov 23, 2024',
  '🌸 The Unofficial CEO of Being Real',
  '🎂 21 & Unstoppably Iconic',
  '☕ Official Late-Night Meme Curator',
  '🌟 The Heart of Every Silent Laugh',
  '🏆 Legendary Best Friend & Truth Teller'
];

/**
 * 2. INITIALIZATION ON DOM LOAD
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeroEnvelope();
  initFriendshipCounter();
  renderGalleryGrid();
  renderEnvelopeNotes();
  initCandleInteraction();
  initTitleGenerator();
  initAmbientCanvas();
  initAudioPlayer();
  initLightbox();
  initSlideshow();
});

/**
 * 3. HERO ENVELOPE OPENING LOGIC
 */
function initHeroEnvelope() {
  const introEnvelope = document.getElementById('intro-envelope');
  const waxSealBtn = document.getElementById('wax-seal-btn');
  const openCardBtn = document.getElementById('open-card-btn');
  const mainContent = document.getElementById('main-content');

  function openEnvelope() {
    introEnvelope.classList.add('opened');
    setTimeout(() => {
      mainContent.classList.remove('hidden-initially');
      document.getElementById('friendship-counter-section').scrollIntoView({ behavior: 'smooth' });
    }, 600);
  }

  if (waxSealBtn) waxSealBtn.addEventListener('click', openEnvelope);
  if (openCardBtn) openCardBtn.addEventListener('click', openEnvelope);
}

/**
 * 4. LIVE FRIENDSHIP COUNTER LOGIC
 */
function initFriendshipCounter() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');

  function updateCounter() {
    const now = new Date();
    const diffTime = Math.max(0, now - FRIENDSHIP_START_DATE);

    const secondsTotal = Math.floor(diffTime / 1000);
    const days = Math.floor(secondsTotal / (3600 * 24));
    const hours = Math.floor((secondsTotal % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

/**
 * 5. PHOTO GALLERY & 3D TILT ENGINE
 */
function renderGalleryGrid() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  PHOTO_GALLERY_DATA.forEach((photo) => {
    const card = document.createElement('div');
    const isVideo = photo.type === 'video';
    card.className = `photo-card ${isVideo ? 'is-video' : 'is-photo'}`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View ${photo.type}: ${photo.caption}`);

    const mediaHtml = isVideo
      ? `<video src="${photo.src}" autoplay loop muted playsinline></video><div class="video-badge">▶ VIDEO</div>`
      : `<img src="${photo.src}" alt="${photo.caption}" loading="lazy">`;

    card.innerHTML = `
      <div class="photo-img-container">
        ${mediaHtml}
        <div class="photo-tile-overlay">
          <div class="photo-caption">${photo.caption}</div>
          <span class="photo-date-badge">${photo.date}</span>
        </div>
      </div>
    `;

    // 3D Tilt Effect on MouseMove
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    // Lightbox click handler
    card.addEventListener('click', () => openLightbox(photo));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(photo);
      }
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * 6. ENVELOPE NOTES RENDERER
 */
function renderEnvelopeNotes() {
  const notesGrid = document.getElementById('notes-grid');
  if (!notesGrid) return;

  notesGrid.innerHTML = '';

  ENVELOPE_MESSAGES.forEach((note) => {
    const card = document.createElement('div');
    card.className = 'note-envelope-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    card.innerHTML = `
      <span class="note-badge">${note.badge}</span>
      <div class="note-envelope-seal">${note.seal}</div>
      <div class="note-title-text">${note.title}</div>
      <p class="note-click-hint">Click envelope to read 💌</p>

      <div class="note-content-revealed">
        <div class="note-body-text">${note.text}</div>
        <button class="note-close-btn" aria-label="Close note">Close Note ✕</button>
      </div>
    `;

    // Toggle card state
    function toggleNote(e) {
      if (e.target.classList.contains('note-close-btn')) {
        e.stopPropagation();
        card.classList.remove('open');
        card.setAttribute('aria-expanded', 'false');
        return;
      }
      card.classList.toggle('open');
      const isOpen = card.classList.contains('open');
      card.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    card.addEventListener('click', toggleNote);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('open');
      }
    });

    notesGrid.appendChild(card);
  });
}

/**
 * 7. INTERACTIVE CANDLE & HEART CONFETTI WISH
 */
let isFlameLit = true;

function initCandleInteraction() {
  const flame = document.getElementById('candle-flame');
  const blowBtn = document.getElementById('blow-candle-btn');
  const blowBtnText = document.getElementById('blow-btn-text');
  const wishBanner = document.getElementById('wish-banner');
  const smokeParticles = document.getElementById('smoke-particles');

  function toggleFlame() {
    if (isFlameLit) {
      // Extinguish Flame
      flame.classList.add('extinguished');
      smokeParticles.classList.add('active');
      wishBanner.classList.remove('hidden');
      if (blowBtnText) blowBtnText.textContent = 'Relight Candle 🕯️';
      isFlameLit = false;

      // Play Sound & Confetti
      playChimeSound();
      triggerHeartConfettiBurst();

      setTimeout(() => {
        smokeParticles.classList.remove('active');
      }, 1500);
    } else {
      // Relight Flame
      flame.classList.remove('extinguished');
      wishBanner.classList.add('hidden');
      if (blowBtnText) blowBtnText.textContent = 'Extinguish Flame & Wish 🕯️';
      isFlameLit = true;
    }
  }

  if (flame) flame.addEventListener('click', toggleFlame);
  if (blowBtn) blowBtn.addEventListener('click', toggleFlame);
}

/**
 * 8. PLAYFUL TITLE GENERATOR
 */
function initTitleGenerator() {
  const generateBtn = document.getElementById('generate-title-btn');
  const titleTextEl = document.getElementById('generated-title-text');
  if (!generateBtn || !titleTextEl) return;

  let isSpinning = false;

  generateBtn.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;

    let counter = 0;
    const spinInterval = setInterval(() => {
      const randomTemp = SNEHA_TITLES[Math.floor(Math.random() * SNEHA_TITLES.length)];
      titleTextEl.textContent = randomTemp;
      counter++;

      if (counter > 12) {
        clearInterval(spinInterval);
        const finalTitle = SNEHA_TITLES[Math.floor(Math.random() * SNEHA_TITLES.length)];
        titleTextEl.textContent = finalTitle;
        isSpinning = false;
        triggerSparkleBurstAround(titleTextEl);
      }
    }, 80);
  });
}

function triggerSparkleBurstAround(element) {
  element.style.transform = 'scale(1.1)';
  element.style.transition = 'transform 0.2s ease';
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 200);
}

/**
 * 9. LIGHTBOX MODAL HANDLER
 */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const backdrop = document.getElementById('lightbox-backdrop');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const dateEl = document.getElementById('lightbox-date');
  const descEl = document.getElementById('lightbox-desc');

  window.openLightbox = function (photo) {
    if (!modal) return;
    const imgWrapper = modal.querySelector('.lightbox-img-wrapper');
    if (imgWrapper) {
      if (photo.type === 'video') {
        imgWrapper.innerHTML = `<video id="lightbox-img" src="${photo.src}" controls autoplay style="width:100%; max-height:450px;"></video>`;
      } else {
        imgWrapper.innerHTML = `<img id="lightbox-img" src="${photo.src}" alt="${photo.caption}">`;
      }
    }
    titleEl.textContent = photo.caption;
    dateEl.textContent = photo.date;
    descEl.textContent = photo.description;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * 10. AMBIENT FLOATING HEARTS & SPARKLES CANVAS
 */
let heartCanvas, ctx;
let particles = [];

function initAmbientCanvas() {
  heartCanvas = document.getElementById('ambient-canvas');
  if (!heartCanvas) return;
  ctx = heartCanvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Spawn initial heart particles
  for (let i = 0; i < 25; i++) {
    particles.push(createParticle());
  }

  requestAnimationFrame(renderCanvas);
}

function resizeCanvas() {
  if (!heartCanvas) return;
  heartCanvas.width = window.innerWidth;
  heartCanvas.height = window.innerHeight;
}

function createParticle() {
  return {
    x: Math.random() * heartCanvas.width,
    y: heartCanvas.height + Math.random() * 100,
    size: Math.random() * 14 + 10,
    speedY: Math.random() * 1.2 + 0.6,
    speedX: (Math.random() - 0.5) * 0.6,
    opacity: Math.random() * 0.5 + 0.3,
    color: Math.random() > 0.3 ? '#FFB6C1' : '#D4AF37'
  };
}

function renderCanvas() {
  ctx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);

  particles.forEach((p, index) => {
    p.y -= p.speedY;
    p.x += Math.sin(p.y / 30) * p.speedX;

    if (p.y < -50) {
      particles[index] = createParticle();
    }

    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = p.color;
    ctx.font = `${p.size}px serif`;
    ctx.fillText('💖', p.x, p.y);
    ctx.restore();
  });

  requestAnimationFrame(renderCanvas);
}

/**
 * 11. SCREEN-WIDE HEART CONFETTI BURST
 */
function triggerHeartConfettiBurst() {
  const burstCount = 60;
  const burstParticles = [];

  for (let i = 0; i < burstCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 10 + 4;
    burstParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 18 + 12,
      opacity: 1,
      symbol: ['💖', '✨', '🌸', '👑', '🎉'][Math.floor(Math.random() * 5)]
    });
  }

  function animateBurst() {
    ctx.save();
    let stillActive = false;

    burstParticles.forEach((bp) => {
      if (bp.opacity <= 0) return;

      bp.x += bp.vx;
      bp.y += bp.vy;
      bp.vy += 0.2; // gravity
      bp.opacity -= 0.015;

      if (bp.opacity > 0) stillActive = true;

      ctx.globalAlpha = Math.max(0, bp.opacity);
      ctx.font = `${bp.size}px serif`;
      ctx.fillText(bp.symbol, bp.x, bp.y);
    });

    ctx.restore();

    if (stillActive) {
      requestAnimationFrame(animateBurst);
    }
  }

  animateBurst();
}

/**
 * 12. WEB AUDIO SYNTHESIZER (Celebration Melody & Chimes)
 */
let audioCtx;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playChimeSound() {
  try {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.6);
    });
  } catch (err) {
    console.log('Audio playback prevented or unsupported');
  }
}

let isMusicPlaying = false;
let userPausedMusic = false;
let customAudioTrack = null;

function initAudioPlayer() {
  const musicBtn = document.getElementById('music-toggle-btn');
  const musicIcon = document.getElementById('music-icon');
  const musicText = musicBtn ? musicBtn.querySelector('.music-text') : null;

  customAudioTrack = document.getElementById('bg-music-audio') || new Audio('images/aud.mpeg');
  customAudioTrack.loop = true;
  customAudioTrack.volume = 1.0;

  // Fallback loop: if 'loop' attribute fails, restart on ended
  customAudioTrack.addEventListener('ended', () => {
    if (!userPausedMusic) {
      customAudioTrack.currentTime = 0;
      customAudioTrack.play().catch(() => {});
    }
  });

  function setPlayingUI() {
    isMusicPlaying = true;
    if (musicBtn) musicBtn.classList.add('playing');
    if (musicIcon) musicIcon.textContent = '⏸️';
    if (musicText) musicText.textContent = 'Pause Birthday Tune';
  }

  function setPausedUI() {
    isMusicPlaying = false;
    if (musicBtn) musicBtn.classList.remove('playing');
    if (musicIcon) musicIcon.textContent = '🎵';
    if (musicText) musicText.textContent = 'Play Birthday Tune';
  }

  function startContinuousMusic() {
    if (isMusicPlaying || userPausedMusic) return;
    customAudioTrack.play().then(() => {
      setPlayingUI();
    }).catch(() => {
      // Browser autoplay blocked — will retry on next gesture
    });
  }

  // 1. Attempt continuous playback immediately on page load
  startContinuousMusic();

  // 2. Retry on every possible user gesture until it works
  const enableEvents = ['pointerdown', 'touchstart', 'click', 'keydown', 'scroll', 'mousemove'];
  function handleGesture() {
    if (!isMusicPlaying && !userPausedMusic) {
      customAudioTrack.play().then(() => {
        setPlayingUI();
        // Once playing, remove all listeners
        enableEvents.forEach(evt => document.removeEventListener(evt, handleGesture));
      }).catch(() => {});
    } else {
      enableEvents.forEach(evt => document.removeEventListener(evt, handleGesture));
    }
  }
  enableEvents.forEach(evt => document.addEventListener(evt, handleGesture));

  // 3. Also trigger on the Open Card button (guaranteed user click)
  const openCardBtn = document.getElementById('open-card-btn');
  const waxSealBtn = document.getElementById('wax-seal-btn');
  if (openCardBtn) openCardBtn.addEventListener('click', startContinuousMusic);
  if (waxSealBtn) waxSealBtn.addEventListener('click', startContinuousMusic);

  // 4. Resume playback when user returns to the tab
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !userPausedMusic && customAudioTrack.paused) {
      customAudioTrack.play().then(() => setPlayingUI()).catch(() => {});
    }
  });

  // 5. Toggle button (pause/play) — also launches/closes slideshow
  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!isMusicPlaying) {
        userPausedMusic = false;
        customAudioTrack.play().then(() => {
          setPlayingUI();
          // Launch slideshow when music starts
          if (typeof openSlideshow === 'function') openSlideshow();
        });
      } else {
        userPausedMusic = true;
        customAudioTrack.pause();
        setPausedUI();
        // Close slideshow when music pauses
        if (typeof closeSlideshow === 'function') closeSlideshow();
      }
    });
  }
}

/**
 * 14. CINEMATIC FULLSCREEN SLIDESHOW
 */
let slideshowActive = false;
let slideshowIndex = 0;
let slideshowTimer = null;
let slideshowProgressTimer = null;
let slideshowData = [];

function initSlideshow() {
  const overlay = document.getElementById('slideshow-overlay');
  const closeBtn = document.getElementById('slideshow-close-btn');
  const prevBtn = document.getElementById('slideshow-prev');
  const nextBtn = document.getElementById('slideshow-next');

  if (!overlay) return;

  if (closeBtn) closeBtn.addEventListener('click', closeSlideshow);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateSlideshow(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateSlideshow(1));

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (!slideshowActive) return;
    if (e.key === 'Escape') closeSlideshow();
    if (e.key === 'ArrowLeft') navigateSlideshow(-1);
    if (e.key === 'ArrowRight') navigateSlideshow(1);
  });
}

// Shuffle utility
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

window.openSlideshow = function () {
  const overlay = document.getElementById('slideshow-overlay');
  if (!overlay || slideshowActive) return;

  // Build shuffled slideshow data from gallery
  slideshowData = shuffleArray(PHOTO_GALLERY_DATA);
  slideshowIndex = 0;
  slideshowActive = true;

  // Update total count
  const totalEl = document.getElementById('slideshow-total');
  if (totalEl) totalEl.textContent = slideshowData.length;

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  showSlide(slideshowIndex);
};

window.closeSlideshow = function () {
  const overlay = document.getElementById('slideshow-overlay');
  if (!overlay) return;

  slideshowActive = false;
  clearTimeout(slideshowTimer);
  clearInterval(slideshowProgressTimer);

  // Stop any playing videos in the stage
  const stage = document.getElementById('slideshow-stage');
  if (stage) {
    const vids = stage.querySelectorAll('video');
    vids.forEach(v => { v.pause(); v.src = ''; });
    stage.innerHTML = '';
  }

  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

function navigateSlideshow(direction) {
  if (!slideshowActive || slideshowData.length === 0) return;

  clearTimeout(slideshowTimer);
  clearInterval(slideshowProgressTimer);

  // Stop current video if playing
  const stage = document.getElementById('slideshow-stage');
  if (stage) {
    const vids = stage.querySelectorAll('video');
    vids.forEach(v => { v.pause(); });
  }

  slideshowIndex += direction;
  if (slideshowIndex >= slideshowData.length) slideshowIndex = 0;
  if (slideshowIndex < 0) slideshowIndex = slideshowData.length - 1;

  showSlide(slideshowIndex);
}

function showSlide(index) {
  const stage = document.getElementById('slideshow-stage');
  const captionEl = document.getElementById('slideshow-caption');
  const dateEl = document.getElementById('slideshow-date');
  const currentEl = document.getElementById('slideshow-current');
  const progressBar = document.getElementById('slideshow-progress-bar');

  if (!stage || !slideshowData[index]) return;

  const item = slideshowData[index];
  const isVideo = item.type === 'video';

  // Update counter
  if (currentEl) currentEl.textContent = index + 1;

  // Update caption
  if (captionEl) captionEl.textContent = item.caption;
  if (dateEl) dateEl.textContent = item.date;

  // Clear stage
  stage.innerHTML = '';

  if (isVideo) {
    const video = document.createElement('video');
    video.src = item.src;
    video.autoplay = true;
    video.muted = true; // Muted since birthday tune is playing
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    stage.appendChild(video);

    // Reset progress bar
    if (progressBar) progressBar.style.width = '0%';

    // Wait for video metadata to get duration, then auto-advance after it ends
    video.addEventListener('loadedmetadata', () => {
      const duration = video.duration * 1000; // ms

      // Animate progress bar over video duration
      let elapsed = 0;
      const progressStep = 100;
      clearInterval(slideshowProgressTimer);
      slideshowProgressTimer = setInterval(() => {
        elapsed += progressStep;
        const pct = Math.min((elapsed / duration) * 100, 100);
        if (progressBar) progressBar.style.width = pct + '%';
      }, progressStep);

      slideshowTimer = setTimeout(() => {
        clearInterval(slideshowProgressTimer);
        if (slideshowActive) navigateSlideshow(1);
      }, duration + 300);
    });

    // Fallback if metadata doesn't load — advance after 8s
    video.addEventListener('error', () => {
      slideshowTimer = setTimeout(() => {
        if (slideshowActive) navigateSlideshow(1);
      }, 2000);
    });

  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption;
    stage.appendChild(img);

    // Auto-advance photos after 4.5 seconds
    const photoDuration = 4500;

    // Animate progress bar
    let elapsed = 0;
    const progressStep = 50;
    if (progressBar) progressBar.style.width = '0%';
    clearInterval(slideshowProgressTimer);
    slideshowProgressTimer = setInterval(() => {
      elapsed += progressStep;
      const pct = Math.min((elapsed / photoDuration) * 100, 100);
      if (progressBar) progressBar.style.width = pct + '%';
    }, progressStep);

    slideshowTimer = setTimeout(() => {
      clearInterval(slideshowProgressTimer);
      if (slideshowActive) navigateSlideshow(1);
    }, photoDuration);
  }
}
