// Components for the portfolio site

const { useState, useEffect, useRef, useCallback } = React;

// ─── Placeholder tile ─────────────────────────────────────
function Placeholder({ tone, label, sub, w, h }){
  // tone is hex; build a lighter background and darker ink from it
  const bg = tone || '#ece7dc';
  return (
    <div className="ph" style={{
      aspectRatio: `${w} / ${h}`,
      '--ph-bg': bg,
      '--ph-ink': 'rgba(0,0,0,0.5)',
      backgroundColor: bg,
    }}>
      <div>
        <div className="ph-key">{label}</div>
        {sub && <span className="ph-sub">{sub}</span>}
      </div>
    </div>
  );
}

// ─── Tile (image OR video) ────────────────────────────────
function Tile({ item, category, onOpen }){
  const isVideo = item.kind === 'video';
  return (
    <figure className={`tile ${isVideo ? 'video' : ''}`} style={item.maxWidth ? {maxWidth: item.maxWidth} : undefined} onClick={() => onOpen(item, category)}>
      <div className="tile-inner">
        {(item.thumb || (!isVideo && item.src))
          ? <img src={item.thumb || item.src} alt={item.t} loading="lazy" />
          : <Placeholder tone={item.tone} label={item.t} sub={isVideo ? '▶ video' : 'illustration'} w={item.w} h={item.h} />}
        {isVideo && (
          <div className="play-icon">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        )}
        <figcaption className="tile-meta">
          <div className="t">{item.t}</div>
          <div className="c">{item.jp}</div>
        </figcaption>
      </div>
    </figure>
  );
}

// ─── Section ──────────────────────────────────────────────
function Section({ section, onOpen }){
  return (
    <section className="section fade-in" id={section.id}>
      <header className="sec-head">
        <span className="num">— {section.num}</span>
        <h2 className="title">{section.title} <em>{section.titleEm}</em></h2>
        <span className="jp">{section.jp}</span>
      </header>
      <p className="sec-desc">{section.desc}</p>
      <div className={`masonry cols-${section.cols}`} style={section.center ? {display:'flex', justifyContent:'center'} : undefined}>
        {section.items.map(it => (
          <Tile key={it.id} item={it} category={section.title} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

// ─── Lightbox ─────────────────────────────────────────────
function Lightbox({ entry, onClose, onPrev, onNext, index, total }){
  useEffect(() => {
    if (!entry) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [entry, onClose, onPrev, onNext]);

  const open = !!entry;
  const item = entry?.item;
  const isVideo = item?.kind === 'video';

  return (
    <div className={`lb ${open ? 'open' : ''}`} onClick={onClose}>
      {open && (
        <>
          <button className="lb-nav prev" onClick={(e)=>{e.stopPropagation(); onPrev();}} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <button className="lb-nav next" onClick={(e)=>{e.stopPropagation(); onNext();}} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 6l6 6-6 6"/></svg>
          </button>
          <div className="lb-inner" onClick={(e)=>e.stopPropagation()}>
            <button className="lb-close" onClick={onClose}>Close ×</button>
            <div className="lb-img-wrap">
              {isVideo
                ? (item.src
                    ? (item.src.includes('youtube.com')
                        ? <iframe src={item.src} allowFullScreen allow="autoplay; encrypted-media" />
                        : <video src={item.src} controls autoPlay style={{width:'min(960px,92vw)', aspectRatio:'16/9'}} />)
                    : <Placeholder tone={item.tone} label={item.t} sub="▶ video placeholder" w={1600} h={900} />)
                : (item.src
                    ? <img src={item.src} alt={item.t} />
                    : <Placeholder tone={item.tone} label={item.t} sub="full-size placeholder" w={item.w} h={item.h} />)
              }
            </div>
            <div className="lb-cap">
              <div>{item.t}</div>
              <span className="jp">{item.jp} — {entry.category}</span>
            </div>
          </div>
          <div className="lb-counter">{index + 1} / {total}</div>
        </>
      )}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────
function Nav({ active }){
  const links = [
    { href:'#home', label:'Home' },
    { href:'#about', label:'About' },
    { href:'#portfolio', label:'Portfolio' },
    { href:'#contact', label:'Contact' },
    { href:'https://www.otimusya24.com/', label:'Blog', external: true },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <span className="name">Kaneko Ryo</span>
          <span className="role">Illustrator</span>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'active' : ''} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}>{l.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────
function Hero(){
  return (
    <section className="hero fade-in" id="home">
      <div className="eyebrow">Portfolio · 2026</div>
      <h1>Kaneko <em>Ryo</em></h1>
      <div className="tag">
        食・キャラクター・Live2D を中心に活動するイラストレーター。<br/>
        Illustrator focused on food, characters and Live2D rigging.
      </div>
      <div className="scroll-cue">Scroll</div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────
function About(){
  return (
    <section className="about fade-in" id="about">
      <div className="about-inner">
        <div>
          <img src="https://res.cloudinary.com/dsljwhlrb/image/upload/v1778282958/profile.jpg" alt="portrait" style={{width:'100%', height:'auto'}} />
        </div>
        <div>
          <h2>About <em>me</em></h2>
          <div className="h2-jp">プロフィール</div>
          <p>
            イラストレーター・Live2Dデザイナー。<br/>
            食べ物・キャラクター・Vtuberモデルを中心に制作活動を行っています。
            「見たら欲望が沸いた・・・！」と思って頂けるような熱量のあるイラストを目指して、
            日々スケッチと観察を重ねています。
          </p>
          <p>
            An illustrator and Live2D rigger working across food illustration,
            original characters, and Vtuber model production. Always aiming for
            artwork that makes you hungry the moment you see it.
          </p>
          <dl className="info-list">
            <div className="info-row"><dt>拠点</dt><dd>日本</dd></div>
            <div className="info-row"><dt>使用ツール</dt><dd>CLIP STUDIO PAINT · Live2D</dd></div>
            <div className="info-row"><dt>依頼実績</dt><dd>Vtuber事務所・カフェ・個人クリエイター</dd></div>
            <div className="info-row"><dt>受付中</dt><dd>ご依頼・コラボレーション</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────
function Contact(){
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.target);
    const res = await fetch('https://formspree.io/f/mlgzpwnn', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      setSent(true);
    } else {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
    setSending(false);
  }

  return (
    <section className="contact fade-in" id="contact">
      <div className="eyebrow">Get in touch</div>
      <h2>Let's <em>work together</em></h2>
      <p className="lead">
        ご依頼・お仕事のご相談はこちらから。<br/>
        For commission inquiries, please use the form below.
      </p>
      {sent ? (
        <div style={{padding:'48px 0', fontFamily:'var(--serif)', fontSize:24, fontStyle:'italic'}}>
          Thank you. — ありがとうございます。
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="form-row">
              <label>Name <span className="jp">お名前</span></label>
              <input type="text" name="name" required />
            </div>
            <div className="form-row">
              <label>Email <span className="jp">メール</span></label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <label>Project type <span className="jp">ご依頼内容</span></label>
            <select name="project_type">
              <option>Food illustration / 料理イラスト</option>
              <option>Character illustration / キャラクター</option>
              <option>Live2D model / Live2Dモデル</option>
              <option>LINE stamp / LINEスタンプ</option>
              <option>Other / その他</option>
            </select>
          </div>
          <div className="form-row">
            <label>Budget <span className="jp">ご予算</span></label>
            <input type="text" name="budget" placeholder="例：10,000円〜" />
          </div>
          <div className="form-row">
            <label>Message <span className="jp">メッセージ</span></label>
            <textarea name="message" required></textarea>
          </div>
          <button className="submit" type="submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send —'}
          </button>
        </form>
      )}
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────
function Footer(){
  return (
    <footer>
      <div className="socials">
        <a href="https://x.com/otimusya_24" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5.3-6.9L3.6 22H.6l8-9.2L0 2h7l4.8 6.3L18 2zm-1 18h1.7L7 4H5.2L17 20z"/></svg>
        </a>
        <a href="https://www.pixiv.net/users/37292946" target="_blank" rel="noopener noreferrer" aria-label="Pixiv">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4h6.5a4.5 4.5 0 010 9H11v7H9V4zm2 2v5h4.5a2.5 2.5 0 000-5H11z"/></svg>
        </a>
        <a href="http://youtube.com/@kaneko_ryo" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 00-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 001 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5A3 3 0 003.1 18.6C5 19 12 19 12 19s7 0 8.9-.4A3 3 0 0023 16.5c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
        </a>
        <a href="https://otimusya24.com/" target="_blank" rel="noopener noreferrer" aria-label="Blog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 4h16v16H4V4zm0 6h16M10 4v16"/></svg>
        </a>
      </div>
      <div className="copy">© 2026 Kaneko Ryo · All Illustrations Reserved</div>
    </footer>
  );
}

Object.assign(window, { Tile, Section, Lightbox, Nav, Hero, About, Contact, Footer, Placeholder });
