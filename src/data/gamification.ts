import {BadgeDefinition, ChallengeItem, FutureFeatureItem, Language} from '../types';

export interface LevelInfo {
  key: 'beginner' | 'intermediate' | 'advanced';
  minXp: number;
  nextXp: number | null;
  progressPercent: number;
}

export function getLevelInfo(xp: number): LevelInfo {
  if (xp < 500) {
    return {
      key: 'beginner',
      minXp: 0,
      nextXp: 500,
      progressPercent: Math.min(100, Math.round((xp / 500) * 100)),
    };
  }
  if (xp < 1200) {
    return {
      key: 'intermediate',
      minXp: 500,
      nextXp: 1200,
      progressPercent: Math.min(100, Math.round(((xp - 500) / 700) * 100)),
    };
  }
  return {
    key: 'advanced',
    minXp: 1200,
    nextXp: null,
    progressPercent: 100,
  };
}

export const BADGES: BadgeDefinition[] = [
  {
    id: 'first-step',
    title: {ar: 'الخطوة الأولى', en: 'First Step'},
    description: {
      ar: 'إتمام الدرس الأول في مسار تطوير الويب.',
      en: 'Complete your very first lesson.',
    },
    iconName: 'sparkles',
    colorClass: 'bg-violet-600 text-white',
    conditionLabel: {ar: 'إتمام درس 1', en: 'Complete 1 lesson'},
  },
  {
    id: 'html-explorer',
    title: {ar: 'مستكشف HTML', en: 'HTML Explorer'},
    description: {
      ar: 'إكمال جميع دروس الوحدة الأولى في أساسيات HTML.',
      en: 'Finish all 5 lessons in Module 1.',
    },
    iconName: 'code',
    colorClass: 'bg-blue-600 text-white',
    conditionLabel: {ar: 'إتمام الدروس 1–5', en: 'Complete Lessons 1–5'},
  },
  {
    id: 'structure-builder',
    title: {ar: 'بنّاء الصفحات', en: 'Page Architect'},
    description: {
      ar: 'إتمام الوحدة الثانية وبناء صفحتك الشخصية الأولى.',
      en: 'Complete Module 2 and build your personal HTML page.',
    },
    iconName: 'layers',
    colorClass: 'bg-cyan-600 text-white',
    conditionLabel: {ar: 'إتمام الدروس 6–10', en: 'Complete Lessons 6–10'},
  },
  {
    id: 'css-stylist',
    title: {ar: 'مصمّم الأنماط', en: 'CSS Stylist'},
    description: {
      ar: 'إتقان الألوان والخطوط والمسافات في الوحدة الثالثة.',
      en: 'Complete Module 3 CSS Fundamentals.',
    },
    iconName: 'palette',
    colorClass: 'bg-orange-500 text-white',
    conditionLabel: {ar: 'إتمام الدروس 11–15', en: 'Complete Lessons 11–15'},
  },
  {
    id: 'responsive-pro',
    title: {ar: 'محترف التجاوب', en: 'Responsive Pro'},
    description: {
      ar: 'إكمال جميع الدروس الـ 20 في مسار HTML و CSS.',
      en: 'Complete all 20 lessons in the HTML & CSS path.',
    },
    iconName: 'smartphone',
    colorClass: 'bg-emerald-600 text-white',
    conditionLabel: {ar: 'إتمام 20 درساً', en: 'Complete 20 lessons'},
  },
  {
    id: 'quiz-whiz',
    title: {ar: 'نجم الاختبارات', en: 'Quiz Whiz'},
    description: {
      ar: 'اجتياز 5 اختبارات دروس بدرجة كاملة.',
      en: 'Pass 5 lesson quizzes with a full score.',
    },
    iconName: 'check',
    colorClass: 'bg-indigo-600 text-white',
    conditionLabel: {ar: 'اجتياز 5 اختبارات', en: 'Pass 5 quizzes'},
  },
  {
    id: 'challenge-solver',
    title: {ar: 'قاهر التحديات', en: 'Challenge Solver'},
    description: {
      ar: 'حل تحدٍّ برمجي عملي واحد على الأقل بنجاح.',
      en: 'Solve at least 1 practical coding challenge.',
    },
    iconName: 'trophy',
    colorClass: 'bg-amber-500 text-white',
    conditionLabel: {ar: 'حل تحدٍّ عملي', en: 'Solve 1 challenge'},
  },
  {
    id: 'streak-starter',
    title: {ar: 'مواظب على التعلّم', en: 'Streak Starter'},
    description: {
      ar: 'تحقيق سلسلة تعلّم لمدة 3 أيام متتالية.',
      en: 'Maintain a 3-day learning streak.',
    },
    iconName: 'flame',
    colorClass: 'bg-rose-600 text-white',
    conditionLabel: {ar: 'سلسلة 3 أيام', en: '3-day streak'},
  },
];

export const CHALLENGES: ChallengeItem[] = [
  {
    id: 'daily-profile-card',
    isDaily: true,
    title: {
      ar: 'تحدي اليوم: بطاقة مطوّر أنيقة',
      en: 'Daily Challenge: Clean Developer Card',
    },
    description: {
      ar: 'أنشئ بطاقة تعريفية تحتوي على عنصر article بداخله عنوان h2 وفقرة p ورابط a، مع إضافة خلفية وزوايا دائرية ومسافة داخلية في CSS.',
      en: 'Create a profile card using an <article> element containing an <h2>, a <p>, and an <a> link, styled with background, padding, and border-radius in CSS.',
    },
    difficulty: 'beginner',
    xpReward: 75,
    starterHtml: `<article class="card">
  <h2>Sami Al-Mansoor</h2>
  <!-- Add a short bio paragraph and portfolio link below -->
  
</article>`,
    starterCss: `.card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  /* Add padding and border-radius */
  
}`,
    solutionHtml: `<article class="card">
  <h2>Sami Al-Mansoor</h2>
  <p>Learning HTML & CSS to build accessible websites.</p>
  <a href="#projects">View Projects</a>
</article>`,
    solutionCss: `.card {
  max-width: 340px;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 24px;
  border-radius: 16px;
}
.card a {
  display: inline-block;
  margin-top: 12px;
  color: #2563eb;
  font-weight: 600;
}`,
    rules: [
      {
        type: 'html-selector',
        target: 'article',
        description: {ar: 'استخدام وسم <article>', en: 'Includes an <article> container'},
      },
      {
        type: 'html-selector',
        target: 'article h2',
        description: {ar: 'عنوان <h2> داخل البطاقة', en: 'Includes an <h2> heading inside <article>'},
      },
      {
        type: 'html-selector',
        target: 'article p',
        description: {ar: 'فقرة <p> تعريفية داخل البطاقة', en: 'Includes a <p> bio inside <article>'},
      },
      {
        type: 'html-attr',
        target: 'article a',
        attr: 'href',
        description: {ar: 'رابط <a> يحتوي على سمة href', en: 'Includes an <a> link with href'},
      },
      {
        type: 'css-pattern',
        target: 'padding\\s*:',
        description: {ar: 'إضافة مسافة داخلية padding في CSS', en: 'Sets padding in CSS'},
      },
      {
        type: 'css-pattern',
        target: 'border-radius\\s*:',
        description: {ar: 'إضافة زوايا دائرية border-radius في CSS', en: 'Sets border-radius in CSS'},
      },
    ],
  },
  {
    id: 'flexbox-navbar',
    title: {
      ar: 'شريط تنقّل مرن باستخدام Flexbox',
      en: 'Responsive Flexbox Navigation Bar',
    },
    description: {
      ar: 'صمّم شريط تنقّل <nav> يحتوي على 3 روابط <a> على الأقل، واستخدم display: flex مع justify-content في CSS.',
      en: 'Build a <nav> bar with at least 3 <a> links, aligned horizontally using display: flex and justify-content.',
    },
    difficulty: 'intermediate',
    xpReward: 100,
    starterHtml: `<nav class="navbar">
  <span class="logo">CodePath</span>
  <div class="links">
    <a href="#home">Home</a>
    <!-- Add 2 more links -->
  </div>
</nav>`,
    starterCss: `.navbar {
  background: #0f172a;
  color: #ffffff;
  padding: 14px 20px;
  /* Use display: flex and justify-content */
}
.navbar a {
  color: #38bdf8;
  text-decoration: none;
}`,
    solutionHtml: `<nav class="navbar">
  <span class="logo">CodePath</span>
  <div class="links">
    <a href="#home">Home</a>
    <a href="#lessons">Lessons</a>
    <a href="#contact">Contact</a>
  </div>
</nav>`,
    solutionCss: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f172a;
  color: #ffffff;
  padding: 14px 20px;
  border-radius: 12px;
}
.links {
  display: flex;
  gap: 16px;
}
.navbar a {
  color: #38bdf8;
  text-decoration: none;
}`,
    rules: [
      {
        type: 'html-selector',
        target: 'nav',
        description: {ar: 'استخدام وسم <nav>', en: 'Uses semantic <nav> element'},
      },
      {
        type: 'html-selector',
        target: 'nav a:nth-of-type(3)',
        description: {ar: 'وجود 3 روابط <a> داخل الشريط', en: 'Contains at least 3 <a> links'},
      },
      {
        type: 'css-pattern',
        target: 'display\\s*:\\s*flex',
        description: {ar: 'تفعيل display: flex في CSS', en: 'Applies display: flex'},
      },
      {
        type: 'css-pattern',
        target: 'justify-content\\s*:',
        description: {ar: 'ضبط المحاذاة باستخدام justify-content', en: 'Configures justify-content'},
      },
    ],
  },
  {
    id: 'pricing-grid',
    title: {
      ar: 'شبكة ميزات من 3 أعمدة بـ CSS Grid',
      en: '3-Column Feature Grid with CSS Grid',
    },
    description: {
      ar: 'أنشئ قسماً يحتوي على 3 بطاقات ميزات ورتّبها باستخدام display: grid و grid-template-columns.',
      en: 'Create a section with 3 feature cards arranged using display: grid and grid-template-columns.',
    },
    difficulty: 'intermediate',
    xpReward: 120,
    starterHtml: `<section class="features">
  <div class="box">Fast</div>
  <div class="box">Clean</div>
  <!-- Add the 3rd box -->
</section>`,
    starterCss: `.features {
  /* Add display: grid, grid-template-columns, and gap */
}
.box {
  background: #ede9fe;
  color: #4c1d95;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}`,
    solutionHtml: `<section class="features">
  <div class="box">Fast</div>
  <div class="box">Clean</div>
  <div class="box">Responsive</div>
</section>`,
    solutionCss: `.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.box {
  background: #ede9fe;
  color: #4c1d95;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}`,
    rules: [
      {
        type: 'html-selector',
        target: 'section .box:nth-of-type(3)',
        description: {ar: 'وجود 3 عناصر بداخل الشبكة', en: 'Contains 3 grid item boxes'},
      },
      {
        type: 'css-pattern',
        target: 'display\\s*:\\s*grid',
        description: {ar: 'تفعيل display: grid', en: 'Uses display: grid'},
      },
      {
        type: 'css-pattern',
        target: 'grid-template-columns\\s*:',
        description: {ar: 'تحديد الأعمدة عبر grid-template-columns', en: 'Defines grid-template-columns'},
      },
      {
        type: 'css-pattern',
        target: 'gap\\s*:',
        description: {ar: 'إضافة فراغ بين العناصر بـ gap', en: 'Sets gap spacing between items'},
      },
    ],
  },
];

export const FUTURE_ROADMAP: FutureFeatureItem[] = [
  {
    id: 'future-js-path',
    category: 'path',
    title: {
      ar: 'مسار JavaScript التفاعلي — من الأساسيات للتطبيقات',
      en: 'Interactive JavaScript Path — Logic to Web Apps',
    },
    description: {
      ar: 'مسار متكامل لتعلّم المتغيرات والدوال والتعامل مع عناصر الصفحة DOM وبناء تطبيقات تفاعلية.',
      en: 'Learn variables, functions, events, and DOM manipulation through guided browser projects.',
    },
    tier: 'premium',
    estimatedCount: {ar: '24 درساً · قريباً', en: '24 lessons · Planned'},
  },
  {
    id: 'future-portfolio-projects',
    category: 'project',
    title: {
      ar: 'مشاريع عملية متقدّمة (صفحات هبوط ومتاجر)',
      en: 'Guided Capstone Projects (Landing Pages & Stores)',
    },
    description: {
      ar: 'بناء 6 مشاريع ويب كاملة جاهزة للعرض في ملفك الشخصي مع مراجعة هيكلية مفصّلة.',
      en: 'Build 6 portfolio-ready multi-section web pages with structured design checklists.',
    },
    tier: 'premium',
    estimatedCount: {ar: '6 مشاريع · قريباً', en: '6 projects · Planned'},
  },
  {
    id: 'future-cheatsheets',
    category: 'resource',
    title: {
      ar: 'ملخصات وبطاقات مرجعية قابلة للتحميل (PDF)',
      en: 'Downloadable HTML & CSS Reference Sheets (PDF)',
    },
    description: {
      ar: 'ملفات مرجعية ثنائية اللغة لوسوم HTML وخصائص Flexbox و Grid للطباعة والمراجعة السريعة.',
      en: 'Printable bilingual cheat sheets covering semantic tags, box model, Flexbox, and Grid.',
    },
    tier: 'premium',
    estimatedCount: {ar: 'حزمة مراجع · قريباً', en: 'Resource pack · Planned'},
  },
];

export function formatLocalizedDate(iso: string, lang: Language): string {
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
