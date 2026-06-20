// Portfolio data — placeholder content based on reference structure.
// Replace `src` URLs once real artwork is uploaded.

const PORTFOLIO = [
  {
    id: 'food',
    num: '01',
    title: 'Food Illustration',
    jp: '料理イラスト',
    desc: '「見たら食欲が沸いた・・・！」と思って頂けるようなイラストを目指して描いております。',
    cols: 3,
    items: [
      { id:'f0', t:'ホロライブ ラオーラ・パンテーラ様 配信用背景', jp:'料理の作画を担当しました', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778363088/haishin-illust.jpg' },
      { id:'f1', t:'季節のお弁当（春）', jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281243/kisetu-obentou-haru.jpg' },
      { id:'f2', t:'季節のお弁当（夏）', jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281243/kisetu-obentou-natsu.jpg' },
      { id:'f3', t:'季節のお弁当（秋）', jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281243/kisetu-obentou-aki.jpg' },
      { id:'f4', t:'季節のお弁当（冬）', jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281243/kisetu-obentou-huyu.jpg' },
      { id:'f5', t:'お茶',               jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました',             src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281243/ocha.jpg' },
      { id:'f6', t:'紅茶',               jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました',             src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281242/tea.jpg' },
      { id:'f7', t:'アイスとお揚げ',     jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました',   src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281242/ice-oage.jpg' },
      { id:'f8', t:'抹茶ロール',           jp:'Vtuberの三七百アメ様からのご依頼で描かせていただきました',         src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778281242/macharoll.jpg' },
      { id:'f9', t:'バレンタインイラスト', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778283791/rozemifanart.webp' },
      { id:'f10', t:'シャンパン',          jp:'真神ふう様からのご依頼で描かせていただきました',          src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778283940/champagne.webp' },
      { id:'f11', t:'カクテル',            jp:'真神ふう様からのご依頼で描かせていただきました',            src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778283939/kakuteru.webp' },
      { id:'f12', t:'カクテル2',           jp:'真神ふう様からのご依頼で描かせていただきました',            src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778283941/kakuteru2.webp' },
      { id:'f13', t:'天丼',   jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653022/tendon_fkvxo9.jpg' },
      { id:'f14', t:'ごはん', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653207/rice_mb700y.jpg' },
      { id:'f15', t:'サンドイッチ', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653208/sandwich_tzpc1j.jpg' },
      { id:'f16', t:'ハンバーガー', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640013/hamburger.jpg' },
      { id:'f17', t:'寿司', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640013/sushi.jpg' },
      { id:'f18', t:'エッグベネディクト', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640012/egg.jpg' },
    ],
  },
  {
    id: 'live2d',
    num: '02',
    title: 'Live2D Work',
    jp: 'Live2D ワーク',
    desc: '綺麗に動くことをモットーに制作しております。',
    cols: 2,
    items: [
      { id:'l1', t:'オリジナルキャラ',   jp:'立ち絵・パーツ分け', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778284413/originalchara.jpg' },
      { id:'l2', kind:'video', t:'オリジナルキャラ',   jp:'モデリング実装', src:'https://www.youtube.com/embed/LZL5OW8XzsQ', thumb:'https://img.youtube.com/vi/LZL5OW8XzsQ/hqdefault.jpg' },
      { id:'l3', t:'種木トウテツ様',     jp:'立ち絵・パーツ分け', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778284415/toutetsusama.jpg' },
      { id:'l4', kind:'video', t:'種木トウテツ様',     jp:'モデリング実装', src:'https://www.youtube.com/embed/efBrXL5sZDc', thumb:'https://img.youtube.com/vi/efBrXL5sZDc/hqdefault.jpg' },
      { id:'l5', t:'テオ・マクベス様',   jp:'立ち絵・パーツ分け', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778284831/teosama.jpg' },
      { id:'l6', kind:'video', t:'テオ・マクベス様',   jp:'モデリング実装', src:'https://www.youtube.com/embed/dKAQOHyat_Q', thumb:'https://img.youtube.com/vi/dKAQOHyat_Q/hqdefault.jpg' },
      { id:'l7', t:'午後野ごぅ様',       jp:'立ち絵・パーツ分け', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778284414/gousama.jpg' },
      { id:'l8', kind:'video', t:'午後野ごぅ様',       jp:'モデリング実装', src:'https://www.youtube.com/embed/sIsIDSL3Jno', thumb:'https://img.youtube.com/vi/sIsIDSL3Jno/hqdefault.jpg' },
    ],
  },
  {
    id: 'sd',
    num: '03',
    title: 'SD Illustration',
    jp: 'デフォルメ・LINEスタンプ',
    desc: 'ご依頼で描かせていただいたイラストや、LINEスタンプのイラストです。',
    cols: 1,
    center: true,
    items: [
      { id:'s0', t:'SDイラスト', jp:'SDイラスト', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778639279/sd-illustration.avif', maxWidth:'50%' },
    ],
  },
  {
    id: 'other',
    num: '04',
    title: 'Other Works',
    jp: 'ファンアート・その他',
    desc: '趣味で描いたファンアートや、コンペに応募したイラストです。',
    cols: 3,
    items: [
      { id:'o1', t:'冬',   jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640013/dog.jpg' },
      { id:'o2', t:'雪だるまと少女', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778654392/snow_qkuns9.webp' },
      { id:'o3', t:'こたつと猫',   jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640014/cat.jpg' },
      { id:'o4', t:'ダンダダンファンアート', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640013/momo.jpg' },
      { id:'o5', t:'無職転生ファンアート', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640013/bunnyeris.jpg' },
      { id:'o6', t:'フリーレンファンアート', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778640014/G6C3NfyasAElwm8_xbkjbt.jpg' },
      { id:'o7', t:'エヴァンゲリオン ファンアート', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653021/18_fzajkc_jm35ln.webp' },
      { id:'o8', t:'AFK アリーナ ファンアート', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653020/13_nyzroe_bgv5tn.webp' },
      { id:'o9', t:'HUION Kamvas16(Gen2)レビューイラスト', jp:'', src:'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778653930/kamvas13_t10s1u.webp' },
    ],
  },
];

window.PORTFOLIO = PORTFOLIO;

const LINK_HUB = {
  profile: {
    name: '兼子 良',
    role: 'Illustrator / Live2D',
    bio: '食べ物・キャラクター・Live2D制作を中心に活動しています。ご依頼や各SNSはこちらからどうぞ。',
    image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1778282958/profile.jpg',
    email: 'otimusya24@gmail.com',
  },
  links: [
    { id: 'blog', title: 'ブログ', desc: 'ガジェットレビューや制作まわりの記事', href: 'https://otimusya24.com/', label: 'Blog', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/blog-kaneko_cs35yz.jpg' },
    { id: 'skeb', title: 'Skeb', desc: 'Commission', href: 'https://skeb.jp/@otimusya_24', label: 'Skeb', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/Skeb_fkrtwe.png' },
    { id: 'vgen', title: 'VGen', desc: 'Commission', href: 'https://vgen.co/kaneko', label: 'VGen', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/Vgen_svwepa.png' },
    { id: 'marshmallow', title: 'マシュマロ', desc: 'questions', href: 'https://t.co/EiW23BEEZW', label: 'Q&A', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/marshmallow_fmujd7.jpg' },
    { id: 'x', title: 'X', desc: '最新のお知らせ・制作ログ', href: 'https://twitter.com/otimusya_24', label: 'X', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/X_gv2xth.avif' },
    { id: 'pixiv', title: 'pixiv', desc: 'イラスト投稿', href: 'https://www.pixiv.net/users/37292946', label: 'Pixiv', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781917993/pixiv_hiuj5o.png' },
    { id: 'youtube', title: 'YouTube', desc: '制作動画やLive2D関連', href: 'https://www.youtube.com/@kaneko_ryo', label: 'YouTube', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781918565/youtube_vc6mxl.png' },
    { id: 'wishlist', title: '欲しいものリスト', desc: 'ご支援いただけると嬉しいです', href: 'https://www.amazon.jp/hz/wishlist/ls/19RI3FM206NJW?ref_=wl_share', label: 'Amazon', image: 'https://res.cloudinary.com/dsljwhlrb/image/upload/v1781918059/amazon_xwgglv.webp' },
  ],
};

window.LINK_HUB = LINK_HUB;
