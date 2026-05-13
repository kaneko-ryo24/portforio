// Main App

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "white",
  "displayFont": "Cormorant Garamond",
  "bodyFont": "Inter",
  "accent": "#1a1a1a",
  "gridGutter": 14
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  'Cormorant Garamond': "'Cormorant Garamond', 'Shippori Mincho', 'Noto Serif JP', serif",
  'Playfair Display':   "'Playfair Display', 'Shippori Mincho', 'Noto Serif JP', serif",
  'Fraunces':           "'Fraunces', 'Shippori Mincho', 'Noto Serif JP', serif",
  'EB Garamond':        "'EB Garamond', 'Shippori Mincho', 'Noto Serif JP', serif",
  'Shippori Mincho':    "'Shippori Mincho', 'Noto Serif JP', serif",
};
const BODY_FONTS = {
  'Inter':            "'Inter', 'Zen Kaku Gothic New', 'Noto Sans JP', system-ui, sans-serif",
  'Work Sans':        "'Work Sans', 'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif",
  'Manrope':          "'Manrope', 'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif",
  'Zen Kaku Gothic':  "'Zen Kaku Gothic New', 'Noto Sans JP', sans-serif",
};

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [entry, setEntry] = useState(null);
  const [active, setActive] = useState('home');
  const flatList = useRef([]);

  // build flat list for prev/next nav inside lightbox
  useEffect(() => {
    const list = [];
    PORTFOLIO.forEach(s => s.items.forEach(it => list.push({ item: it, category: s.title })));
    flatList.current = list;
  }, []);

  // theme class
  useEffect(() => {
    document.body.className = `theme-${t.theme}`;
  }, [t.theme]);

  // font swaps via root vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--serif', FONT_PAIRS[t.displayFont] || FONT_PAIRS['Cormorant Garamond']);
    r.style.setProperty('--sans',  BODY_FONTS[t.bodyFont]   || BODY_FONTS['Inter']);
    r.style.setProperty('--gutter', `${t.gridGutter}px`);
  }, [t.displayFont, t.bodyFont, t.gridGutter]);

  // load extra google fonts dynamically
  useEffect(() => {
    const families = [
      'Playfair+Display:ital,wght@0,400;0,500;1,400',
      'Fraunces:ital,wght@0,300;0,400;1,300',
      'EB+Garamond:ital,wght@0,400;1,400',
      'Work+Sans:wght@300;400;500',
      'Manrope:wght@300;400;500',
    ];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?${families.map(f => `family=${f}`).join('&')}&display=swap`;
    document.head.appendChild(link);
  }, []);

  // accent color via tweak
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent || '#1a1a1a');
  }, [t.accent, t.theme]);

  // scroll spy
  useEffect(() => {
    const sections = ['home','about','portfolio','contact'];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = 'home';
      for (const id of sections){
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openLightbox = useCallback((item, category) => {
    setEntry({ item, category });
  }, []);
  const closeLightbox = useCallback(() => setEntry(null), []);
  const navigateLightbox = useCallback((dir) => {
    if (!entry) return;
    const list = flatList.current;
    const i = list.findIndex(e => e.item.id === entry.item.id);
    if (i < 0) return;
    const next = (i + dir + list.length) % list.length;
    setEntry(list[next]);
  }, [entry]);

  const currentIndex = entry ? flatList.current.findIndex(e => e.item.id === entry.item.id) : -1;

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav active={active} />
      <Hero />
      <About />
      <main id="portfolio">
        {PORTFOLIO.map(sec => (
          <Section key={sec.id} section={sec} onOpen={openLightbox} />
        ))}
      </main>
      <Contact />
      <Footer />

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          position: 'fixed', bottom: '32px', right: '32px', zIndex: 150,
          width: '44px', height: '44px',
          background: 'var(--ink)', color: 'var(--bg)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.8, transition: 'opacity .2s',
        }} aria-label="トップへ戻る"
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0.8}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6"/></svg>
        </button>
      )}

      <Lightbox
        entry={entry}
        onClose={closeLightbox}
        onPrev={() => navigateLightbox(-1)}
        onNext={() => navigateLightbox(1)}
        index={currentIndex}
        total={flatList.current.length}
      />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={t.theme}
          options={['white','cream','dark']}
          onChange={(v)=>setTweak('theme', v)} />
        <TweakColor label="Accent" value={t.accent}
          options={['#1a1a1a', '#c64a3a', '#4a5d8a', '#6b7d5a']}
          onChange={(v)=>setTweak('accent', v)} />

        <TweakSection label="Typography" />
        <TweakSelect label="Display" value={t.displayFont}
          options={Object.keys(FONT_PAIRS)}
          onChange={(v)=>setTweak('displayFont', v)} />
        <TweakSelect label="Body" value={t.bodyFont}
          options={Object.keys(BODY_FONTS)}
          onChange={(v)=>setTweak('bodyFont', v)} />

        <TweakSection label="Layout" />
        <TweakSlider label="Grid gap" value={t.gridGutter}
          min={4} max={32} unit="px"
          onChange={(v)=>setTweak('gridGutter', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
