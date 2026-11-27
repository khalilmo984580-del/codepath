import {Lesson} from '../types';

export const MODULE_4_LESSONS: Lesson[] = [
  {
    id: 16,
    slug: 'the-css-box-model',
    moduleId: 4,
    title: {
      ar: 'نموذج الصندوق في CSS (Box Model)',
      en: 'The CSS box model',
    },
    summary: {
      ar: 'افهم كيف يحسب المتصفح حجم كل عنصر من Content و Padding و Border و Margin وأهمية box-sizing.',
      en: 'Understand how browsers calculate element dimensions from Content, Padding, Border, and Margin.',
    },
    durationMinutes: 15,
    xpReward: 100,
    tier: 'free',
    objectives: {
      ar: [
        'التعرّف على الطبقات الأربع لنموذج الصندوق بالترتيب من الداخل للخارج.',
        'معرفة لماذا يوسّع padding الحجم الافتراضي للعناصر.',
        'استخدام box-sizing: border-box لتثبيت المقاسات بدقة.',
      ],
      en: [
        'Identify the four Box Model layers from inside out.',
        'See how padding and border affect total rendered width.',
        'Use box-sizing: border-box for predictable sizing.',
      ],
    },
    explanation: {
      ar: [
        'يرى المتصفح كل عنصر في HTML على هيئة صندوق مستطيل يتكون من أربع طبقات متتالية من الداخل إلى الخارج: المحتوى (Content)، ثم الحشو (Padding)، ثم الإطار (Border)، وأخيراً الهامش الخارجي (Margin).',
        'افتراضياً، إذا حددت width: 300px وأضفت padding: 20px، يصبح العرض الفعلي 340px مما قد يربك تخطيطك!',
        'الحل الاحترافي الذي يضعه كل مطوّر في بداية ملف CSS هو: box-sizing: border-box;. عندئذٍ يشمل العرض (300px) كلاً من المحتوى والحشو والحدود دون تمدّد مفاجئ.',
      ],
      en: [
        'Browsers treat every HTML element as a rectangular box made of four nested layers: Content in the center, surrounded by Padding, wrapped by Border, and spaced from neighbors by Margin.',
        'By default (content-box), if you set width: 300px and padding: 20px, the box actually becomes 340px wide!',
        'Professional stylesheets include box-sizing: border-box; so that width and height already include padding and borders—keeping layouts predictable.',
      ],
    },
    glossary: [
      {term: 'box-sizing: border-box', meaning: {ar: 'يجعل العرض المحدد شاملاً للحشو والحدود.', en: 'Includes padding and border inside the declared width.'}},
    ],
    visualType: 'box-model',
    visualCaption: {
      ar: 'الطبقات الأربع لنموذج الصندوق: Margin ثم Border ثم Padding ثم Content.',
      en: 'Four concentric layers: Margin, Border, Padding, and Content.',
    },
    exampleTitle: {
      ar: 'مقارنة ثابتة العرض مع border-box',
      en: 'Predictable box width with border-box',
    },
    exampleHtml: `<div class="measured-box">
  Total width stays exactly 260px including padding and border!
</div>`,
    exampleCss: `.measured-box {
  box-sizing: border-box;
  width: 260px;
  padding: 20px;
  border: 4px solid #6d28d9;
  margin: 12px auto;
  background: #f5f3ff;
  border-radius: 12px;
}`,
    exercise: {
      prompt: {
        ar: 'اضبط الصندوق .panel بحيث يستخدم box-sizing: border-box مع width و padding و border.',
        en: 'Configure .panel with box-sizing: border-box, width, padding, and a border.',
      },
      hint: {
        ar: 'أضف box-sizing: border-box; و width: 280px; داخل .panel.',
        en: 'Add box-sizing: border-box; and width: 280px; to .panel.',
      },
      starterHtml: `<div class="panel">Predictable Box Sizing</div>`,
      starterCss: `.panel {
  /* Add box-sizing, width, padding, and border */
  background: #e0f2fe;
}`,
      expectedHtml: `<div class="panel">Predictable Box Sizing</div>`,
      expectedCss: `.panel {
  box-sizing: border-box;
  width: 280px;
  padding: 20px;
  border: 2px solid #0284c7;
  background: #e0f2fe;
}`,
      rules: [
        {type: 'css-pattern', target: 'box-sizing\\s*:\\s*border-box', description: {ar: 'استخدام box-sizing: border-box', en: 'Applies box-sizing: border-box'}},
        {type: 'css-pattern', target: 'width\\s*:', description: {ar: 'تحديد عرض width', en: 'Sets width'}},
        {type: 'css-pattern', target: 'padding\\s*:', description: {ar: 'إضافة padding', en: 'Sets padding'}},
        {type: 'css-pattern', target: 'border\\s*:', description: {ar: 'إضافة border', en: 'Sets border'}},
      ],
    },
    quiz: [
      {
        id: 'l16-q1',
        type: 'mcq',
        question: {ar: 'ما الترتيب الصحيح لطبقات نموذج الصندوق من الداخل إلى الخارج؟', en: 'What is the correct Box Model order from inside out?'},
        options: {
          ar: ['Content → Padding → Border → Margin', 'Margin → Border → Padding → Content', 'Border → Content → Margin → Padding', 'Padding → Content → Margin → Border'],
          en: ['Content → Padding → Border → Margin', 'Margin → Border → Padding → Content', 'Border → Content → Margin → Padding', 'Padding → Content → Margin → Border'],
        },
        correctIndex: 0,
        explanation: {ar: 'المحتوى في المركز، يليه الحشو ثم الحد ثم الهامش الخارجي.', en: 'Content sits inside, wrapped by padding, border, and margin.'},
      },
      {
        id: 'l16-q2',
        type: 'tf',
        question: {ar: 'القيمة box-sizing: border-box تمنع تمدد عرض العنصر عند إضافة padding.', en: 'box-sizing: border-box prevents padding from expanding declared element width.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح تماماً، وهذا يجعل الحسابات الهندسية دقيقة.', en: 'True! Width stays locked to the value you specified.'},
      },
      {
        id: 'l16-q3',
        type: 'mcq',
        question: {ar: 'أي طبقة في نموذج الصندوق تكون شفافة وتفصل العنصر عن غيره؟', en: 'Which Box Model layer is transparent space separating neighboring boxes?'},
        options: {ar: ['Margin', 'Border', 'Content', 'Background'], en: ['Margin', 'Border', 'Content', 'Background']},
        correctIndex: 0,
        explanation: {ar: 'Margin هو الفراغ الخارجي الشفاف.', en: 'Margin is always transparent outer spacing.'},
      },
    ],
  },
  {
    id: 17,
    slug: 'flexbox-fundamentals',
    moduleId: 4,
    title: {
      ar: 'أساسيات Flexbox',
      en: 'Flexbox fundamentals',
    },
    summary: {
      ar: 'رتّب العناصر في صفوف أو أعمدة مرنة بمحاذاة دقيقة عبر display: flex و justify-content و align-items.',
      en: 'Align elements cleanly in flexible rows or columns using display: flex, justify-content, and align-items.',
    },
    durationMinutes: 18,
    xpReward: 110,
    tier: 'free',
    objectives: {
      ar: [
        'تحويل أي حاوية إلى حاوية مرنة بـ display: flex.',
        'محاذاة العناصر على المحور الرئيسي عبر justify-content.',
        'محاذاة العناصر عمودياً عبر align-items وإضافة فجوة gap.',
      ],
      en: [
        'Turn any parent container into a flex layout with display: flex.',
        'Distribute items along the main axis with justify-content.',
        'Center or align items vertically using align-items and gap.',
      ],
    },
    explanation: {
      ar: [
        'في HTML العادية، تتكدس العناصر فوق بعضها عمودياً. لوضع البطاقات أو أزرار القائمة بجانب بعضها أفقياً بمرونة، نستخدم Flexbox!',
        'كل ما تحتاجه هو تطبيق display: flex; على العنصر الأب (الحاوية)، فتصطف الأبناء فوراً في صف واحد. ثم نضيف gap: 12px لوضع فراغ منتظم بينها.',
        'للتحكم بالتوزيع الأفقي نستخدم justify-content (مثل center للتوسيط أو space-between لتوزيع المسافات)، وللمحاذاة العمودية نستخدم align-items: center.',
      ],
      en: [
        'By default, block elements stack vertically. Flexbox lets you lay items out in a clean horizontal row (or column) with effortless alignment.',
        'Apply display: flex; on the parent container and its direct children line up automatically. Add gap: 12px; for consistent spacing between them.',
        'Use justify-content (like space-between or center) along the main horizontal axis, and align-items: center along the vertical cross axis.',
      ],
    },
    glossary: [
      {term: 'justify-content', meaning: {ar: 'توزيع ومحاذاة العناصر على المحور الرئيسي.', en: 'Distributes items along the main axis.'}},
      {term: 'align-items', meaning: {ar: 'محاذاة العناصر على المحور العمودي المتقاطع.', en: 'Aligns items along the cross axis.'}},
    ],
    visualType: 'flexbox-axes',
    visualCaption: {
      ar: 'المحور الرئيسي justify-content والمحور المتقاطع align-items داخل حاوية Flex.',
      en: 'Main axis (justify-content) and cross axis (align-items) in a Flex container.',
    },
    exampleTitle: {
      ar: 'شريط علوي متزن باستخدام Flexbox',
      en: 'Balanced top bar with Flexbox',
    },
    exampleHtml: `<div class="toolbar">
  <strong>CodePath</strong>
  <div class="actions">
    <a href="#paths">Paths</a>
    <a href="#play">Playground</a>
  </div>
</div>`,
    exampleCss: `.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: #0f172a;
  color: #ffffff;
  border-radius: 12px;
}
.actions {
  display: flex;
  gap: 14px;
}
.actions a { color: #38bdf8; text-decoration: none; }`,
    exercise: {
      prompt: {
        ar: 'رتّب البطاقات الثلاث داخل .row باستخدام display: flex و justify-content و gap.',
        en: 'Arrange the three items inside .row using display: flex, justify-content, and gap.',
      },
      hint: {
        ar: 'أضف display: flex; justify-content: center; gap: 12px; إلى .row.',
        en: 'Add display: flex; justify-content: center; gap: 12px; inside .row.',
      },
      starterHtml: `<div class="row">
  <div class="pill">HTML</div>
  <div class="pill">CSS</div>
  <div class="pill">Flex</div>
</div>`,
      starterCss: `.row {
  /* Make this a flex row with gap and justify-content */
}
.pill {
  padding: 12px 18px;
  background: #6d28d9;
  color: white;
  border-radius: 10px;
}`,
      expectedHtml: `<div class="row">
  <div class="pill">HTML</div>
  <div class="pill">CSS</div>
  <div class="pill">Flex</div>
</div>`,
      expectedCss: `.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.pill {
  padding: 12px 18px;
  background: #6d28d9;
  color: white;
  border-radius: 10px;
}`,
      rules: [
        {type: 'css-pattern', target: 'display\\s*:\\s*flex', description: {ar: 'تفعيل display: flex', en: 'Applies display: flex'}},
        {type: 'css-pattern', target: 'justify-content\\s*:', description: {ar: 'استخدام justify-content', en: 'Uses justify-content'}},
        {type: 'css-pattern', target: 'gap\\s*:', description: {ar: 'إضافة gap بين العناصر', en: 'Adds gap spacing'}},
      ],
    },
    quiz: [
      {
        id: 'l17-q1',
        type: 'mcq',
        question: {ar: 'أين نكتب display: flex؛ عند تصميم صف من البطاقات؟', en: 'Where do you place display: flex; when arranging a row of cards?'},
        options: {ar: ['على العنصر الأب (الحاوية)', 'على آخر بطاقة فقط', 'داخل وسم <title>', 'على النصوص فقط'], en: ['On the parent container', 'Only on the last card', 'Inside <title>', 'Only on text nodes']},
        correctIndex: 0,
        explanation: {ar: 'display: flex يُطبق على الحاوية الأب لتنظيم أبنائها.', en: 'Flexbox works by turning the parent element into a flex container.'},
      },
      {
        id: 'l17-q2',
        type: 'mcq',
        question: {ar: 'أي قيمة لـ justify-content تضع أقصى مسافة ممكنة بين العنصر الأول والأخير؟', en: 'Which justify-content value pushes items to opposite edges?'},
        options: {ar: ['space-between', 'center', 'flex-start', 'stretch'], en: ['space-between', 'center', 'flex-start', 'stretch']},
        correctIndex: 0,
        explanation: {ar: 'space-between تضع العنصر الأول في البداية والأخير في النهاية.', en: 'space-between distributes remaining space between items.'},
      },
      {
        id: 'l17-q3',
        type: 'tf',
        question: {ar: 'خاصية gap تضيف مسافات متساوية بين عناصر Flex دون الحاجة لهوامش معقدة.', en: 'The gap property adds consistent spacing between flex items.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، gap أسهل وأنظف طريقة للمسافات بين العناصر.', en: 'True — gap handles inter-item spacing cleanly.'},
      },
    ],
  },
  {
    id: 18,
    slug: 'css-grid-fundamentals',
    moduleId: 4,
    title: {
      ar: 'أساسيات CSS Grid',
      en: 'CSS Grid fundamentals',
    },
    summary: {
      ar: 'صمّم شبكات ثنائية الأبعاد من صفوف وأعمدة متساوية عبر display: grid و grid-template-columns و fr.',
      en: 'Build two-dimensional column and row layouts using display: grid, grid-template-columns, and fr units.',
    },
    durationMinutes: 18,
    xpReward: 110,
    tier: 'free',
    objectives: {
      ar: [
        'التفريق بين Flexbox (بعد واحد) و CSS Grid (صفوف وأعمدة معاً).',
        'تعريف الأعمدة باستخدام grid-template-columns: repeat(3, 1fr).',
        'استخدام وحدة 1fr لتقسيم المساحة المتبقية بالتساوي.',
      ],
      en: [
        'Understand when to pick CSS Grid (2D rows + columns) vs Flexbox (1D).',
        'Define equal columns with grid-template-columns: repeat(3, 1fr).',
        'Use the fr fractional unit and gap.',
      ],
    },
    explanation: {
      ar: [
        'بينما يتألق Flexbox في صف واحد أو عمود واحد، تأتي شبكة CSS Grid لتنظيم الصفوف والأعمدة معاً في وقت واحد مثل لوحات العرض والمعارض.',
        'نبدأ بكتابة display: grid; على الحاوية، ثم نحدد عدد الأعمدة وعرضها عبر grid-template-columns. فمثلاً: grid-template-columns: 1fr 1fr; تصنع عمودين متساويين.',
        'وحدة fr تعني Fraction (جزء متساوٍ من المساحة المتاحة). ولاختصار التكرار نكتب repeat(3, 1fr) للحصول على 3 أعمدة متطابقة العرض فوراً!',
      ],
      en: [
        'While Flexbox excels along one axis, CSS Grid controls both columns and rows at the same time—ideal for dashboards, photo galleries, and feature grids.',
        'Start with display: grid; on the container, then define columns with grid-template-columns. Writing 1fr 1fr creates two equal columns.',
        'The fr unit stands for a fraction of available space. Use repeat(3, 1fr) as a crisp shorthand for three equal-width columns.',
      ],
    },
    glossary: [
      {term: '1fr', meaning: {ar: 'وحدة مرنة تمثل حصة واحدة متساوية من المساحة المتاحة.', en: 'Fractional unit representing one equal share of free space.'}},
      {term: 'grid-template-columns', meaning: {ar: 'خاصية تحدد عدد الأعمدة وعرض كل عمود.', en: 'Defines the number and sizing of grid columns.'}},
    ],
    visualType: 'css-grid-tracks',
    visualCaption: {
      ar: 'تقسيم المساحة إلى أعمدة متساوية repeat(3, 1fr) مع فجوة gap.',
      en: 'Dividing a grid into 3 equal tracks with repeat(3, 1fr) and gap.',
    },
    exampleTitle: {
      ar: 'معرض بطاقات من عمودين بـ CSS Grid',
      en: 'Two-column feature grid in CSS Grid',
    },
    exampleHtml: `<section class="grid-demo">
  <div class="tile">1. Semantic HTML</div>
  <div class="tile">2. Color & Type</div>
  <div class="tile">3. Flexbox</div>
  <div class="tile">4. CSS Grid</div>
</section>`,
    exampleCss: `.grid-demo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.tile {
  background: #ecfeff;
  border: 1px solid #67e8f9;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
}`,
    exercise: {
      prompt: {
        ar: 'حوّل .grid-box إلى شبكة من 3 أعمدة متساوية باستخدام display: grid و grid-template-columns و gap.',
        en: 'Turn .grid-box into a 3-column layout using display: grid, grid-template-columns, and gap.',
      },
      hint: {
        ar: 'استخدم grid-template-columns: repeat(3, 1fr);.',
        en: 'Write grid-template-columns: repeat(3, 1fr); inside .grid-box.',
      },
      starterHtml: `<div class="grid-box">
  <div class="cell">A</div>
  <div class="cell">B</div>
  <div class="cell">C</div>
</div>`,
      starterCss: `.grid-box {
  /* Add display: grid, grid-template-columns, and gap */
}
.cell {
  background: #dbeafe;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}`,
      expectedHtml: `<div class="grid-box">
  <div class="cell">A</div>
  <div class="cell">B</div>
  <div class="cell">C</div>
</div>`,
      expectedCss: `.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.cell {
  background: #dbeafe;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
}`,
      rules: [
        {type: 'css-pattern', target: 'display\\s*:\\s*grid', description: {ar: 'تفعيل display: grid', en: 'Applies display: grid'}},
        {type: 'css-pattern', target: 'grid-template-columns\\s*:', description: {ar: 'تحديد الأعمدة بـ grid-template-columns', en: 'Defines grid-template-columns'}},
        {type: 'css-pattern', target: 'gap\\s*:', description: {ar: 'تحديد الفجوة gap', en: 'Sets gap spacing'}},
      ],
    },
    quiz: [
      {
        id: 'l18-q1',
        type: 'mcq',
        question: {ar: 'ماذا تعني وحدة 1fr في CSS Grid؟', en: 'What does 1fr stand for in CSS Grid?'},
        options: {ar: ['جزء واحد من المساحة المتاحة', 'إطار ثابت 100px', 'درجة تدوير', 'نسبة شفافية'], en: ['One fraction of available space', 'Fixed 100px frame', 'Rotation angle', 'Opacity level']},
        correctIndex: 0,
        explanation: {ar: 'fr اختصار Fraction وتوزع المساحة بمرونة.', en: 'fr stands for fractional unit of remaining space.'},
      },
      {
        id: 'l18-q2',
        type: 'tf',
        question: {ar: 'الكتابة repeat(3, 1fr) تنشئ ثلاثة أعمدة متساوية العرض.', en: 'repeat(3, 1fr) creates three equal-width columns.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، وهي أسرع وأنظف من تكرار 1fr ثلاث مرات.', en: 'True! repeat(3, 1fr) is shorthand for 1fr 1fr 1fr.'},
      },
      {
        id: 'l18-q3',
        type: 'mcq',
        question: {ar: 'أي خاصية تحدد أعمدة الشبكة؟', en: 'Which property defines the columns of a CSS Grid?'},
        options: {ar: ['grid-template-columns', 'flex-direction', 'justify-content', 'column-border'], en: ['grid-template-columns', 'flex-direction', 'justify-content', 'column-border']},
        correctIndex: 0,
        explanation: {ar: 'grid-template-columns تحدد عدد وعرض الأعمدة.', en: 'grid-template-columns defines column tracks.'},
      },
    ],
  },
  {
    id: 19,
    slug: 'responsive-design-for-mobile-phones',
    moduleId: 4,
    title: {
      ar: 'التصميم المتجاوب للهواتف المحمولة',
      en: 'Responsive design for mobile phones',
    },
    summary: {
      ar: 'اجعل مواقعك تبدو رائعة على الهواتف والأجهزة اللوحية والحواسيب عبر @media و max-width.',
      en: 'Make websites look great on phones, tablets, and desktops using @media queries and fluid sizing.',
    },
    durationMinutes: 18,
    xpReward: 110,
    tier: 'free',
    objectives: {
      ar: [
        'فهم منهجية التصميم للجوال أولاً (Mobile-First).',
        'استخدام استعلامات الوسائط @media (min-width: 768px) لتعديل التخطيط على الشاشات الكبيرة.',
        'منع التمرير الأفقي باستخدام max-width: 100% على الصور والحاويات.',
      ],
      en: [
        'Apply the Mobile-First design approach.',
        'Adapt column counts with @media (min-width: 768px) queries.',
        'Prevent horizontal overflow using fluid max-width: 100%.',
      ],
    },
    explanation: {
      ar: [
        'يتصفح معظم المستخدمين الويب من هواتفهم الذكية أولاً. التصميم المتجاوب (Responsive Design) يعني أن تتكيّف صفحتك بذكاء مع أي حجم شاشة: عمود واحد مريح على الهاتف، وعمودان أو ثلاثة على الشاشات العريضة.',
        'نبدأ في أسلوب Mobile-First بكتابة التنسيق الأساسي المناسب للهاتف، ثم نضيف قاعدة @media (min-width: 600px) لتوسيع الشبكة عندما يتوفر عرض أكبر.',
        'ولكي لا تخرج الصور أو الصناديق خارج شاشة الهاتف أبداً، نستخدم max-width: 100% بدلاً من عرض ثابت كبير.',
      ],
      en: [
        'Most learners browse the web on phones first. Responsive design ensures one stylesheet adapts smoothly: a single comfortable column on phones, expanding to multi-column layouts on wider screens.',
        'With Mobile-First CSS, your base styles target narrow phone viewports, and @media (min-width: 600px) rules layer on extra columns when screen space grows.',
        'Also set max-width: 100% on images and containers so content never overflows horizontally on small screens.',
      ],
    },
    glossary: [
      {term: '@media', meaning: {ar: 'قاعدة CSS تطبق التنسيقات عند تحقق شرط حجم الشاشة.', en: 'CSS rule applying styles conditionally based on viewport width.'}},
      {term: 'Mobile-First', meaning: {ar: 'التصميم للهاتف أولاً ثم التوسع للشاشات الأكبر.', en: 'Writing base styles for phones first, then scaling up.'}},
    ],
    visualType: 'responsive-breakpoints',
    visualCaption: {
      ar: 'تكيّف الشبكة من عمود واحد على الهاتف إلى عمودين فوق نقطة التوقف @media.',
      en: 'Grid adapting from 1 column on phones to 2 columns above the @media breakpoint.',
    },
    exampleTitle: {
      ar: 'شبكة متجاوبة للهواتف أولاً',
      en: 'Mobile-first responsive layout',
    },
    exampleHtml: `<div class="cards">
  <div class="card">Mobile Ready</div>
  <div class="card">Tablet & Desktop</div>
</div>`,
    exampleCss: `.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 520px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}
.card {
  padding: 18px;
  background: #ede9fe;
  border-radius: 12px;
}`,
    exercise: {
      prompt: {
        ar: 'اكتب قاعدة متجاوبة تبدأ بـ .layout كعمود واحد، ثم أضف @media (min-width: 500px) لتصبح عمودين، مع max-width: 100% على .wrapper.',
        en: 'Start .layout as a 1-column grid, then add a @media (min-width: 500px) query switching it to 2 columns, and give .wrapper max-width: 100%.',
      },
      hint: {
        ar: 'تذكّر كتابة @media (min-width: 500px) { .layout { grid-template-columns: 1fr 1fr; } }.',
        en: 'Inside @media (min-width: 500px) { ... }, update .layout to 2 columns.',
      },
      starterHtml: `<div class="wrapper">
  <div class="layout">
    <div class="box">Left</div>
    <div class="box">Right</div>
  </div>
</div>`,
      starterCss: `.wrapper {
  /* Set max-width: 100% */
}
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
/* Add @media query below */
.box { background: #e0f2fe; padding: 14px; border-radius: 8px; }`,
      expectedHtml: `<div class="wrapper">
  <div class="layout">
    <div class="box">Left</div>
    <div class="box">Right</div>
  </div>
</div>`,
      expectedCss: `.wrapper {
  max-width: 100%;
}
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
@media (min-width: 500px) {
  .layout {
    grid-template-columns: 1fr 1fr;
  }
}
.box { background: #e0f2fe; padding: 14px; border-radius: 8px; }`,
      rules: [
        {type: 'css-pattern', target: 'max-width\\s*:', description: {ar: 'استخدام max-width لمنع تجاوز الشاشة', en: 'Uses max-width for fluid sizing'}},
        {type: 'css-pattern', target: '@media\\s*\\(', description: {ar: 'إضافة استعلام @media متجاوب', en: 'Includes an @media query'}},
      ],
    },
    quiz: [
      {
        id: 'l19-q1',
        type: 'mcq',
        question: {ar: 'ما ميزة قاعدة @media في CSS؟', en: 'What do @media queries allow in CSS?'},
        options: {
          ar: ['تطبيق تنسيقات مختلفة حسب عرض الشاشة', 'تشفير كلمات المرور', 'إضافة صور جديدة إلى HTML', 'حفظ البيانات في السحابة'],
          en: ['Applying different styles based on screen width', 'Encrypting passwords', 'Inserting new HTML images', 'Saving cloud data'],
        },
        correctIndex: 0,
        explanation: {ar: '@media تسمح بتكييف التخطيط مع الشاشات الصغيرة والكبيرة.', en: '@media adapts styles to different viewport dimensions.'},
      },
      {
        id: 'l19-q2',
        type: 'tf',
        question: {ar: 'استخدام max-width: 100% على الصور يمنع خروجها خارج شاشة الهاتف.', en: 'Setting max-width: 100% on images prevents them from overflowing mobile screens.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، يجعل الصور تتقلص بمرونة مع الشاشة الضيقة.', en: 'True! Fluid max-width prevents horizontal overflow.'},
      },
      {
        id: 'l19-q3',
        type: 'mcq',
        question: {ar: 'في نهج Mobile-First، بأي تصميم نبدأ كتابة CSS؟', en: 'In Mobile-First CSS, which screen size do base styles target?'},
        options: {ar: ['الهواتف الصغيرة أولاً', 'شاشات التلفاز أولاً', 'الطابعات فقط', 'الأجهزة اللوحية فقط'], en: ['Small mobile screens first', 'Large TVs first', 'Printers only', 'Tablets only']},
        correctIndex: 0,
        explanation: {ar: 'نبدأ بتصميم الهاتف ثم نوسع عبر min-width.', en: 'Base styles serve phones first, then min-width scales up.'},
      },
    ],
  },
  {
    id: 20,
    slug: 'build-a-complete-responsive-personal-website',
    moduleId: 4,
    title: {
      ar: 'المشروع النهائي: موقع شخصي متجاوب متكامل',
      en: 'Build a complete responsive personal website',
    },
    summary: {
      ar: 'اجمع كل ما تعلمته في HTML و CSS لبناء موقع شخصي متكامل يعمل بجمال على الجوال والحاسوب.',
      en: 'Combine every HTML & CSS skill from all 4 modules into a complete responsive personal portfolio page.',
    },
    durationMinutes: 25,
    xpReward: 150,
    tier: 'free',
    objectives: {
      ar: [
        'بناء صفحة شخصية كاملة بـ header و nav و main و footer.',
        'تصميم شريط تنقل بـ Flexbox وشبكة مشاريع بـ CSS Grid.',
        'إضافة استعلام @media يجعل المشاريع تتجاوب مع شاشات الهاتف.',
      ],
      en: [
        'Build a full semantic portfolio with header, nav, main, and footer.',
        'Style navigation with Flexbox and a projects showcase with CSS Grid.',
        'Add @media responsiveness so cards stack on mobile and expand on desktop.',
      ],
    },
    explanation: {
      ar: [
        'وصلت إلى الدرس العشرين والأخير في مسار أساسيات الويب! في هذا المشروع الختامي ستبني موقعاً شخصياً كاملاً يجمع بين البنية الدلالية النظيفة في HTML والتصميم العصري المتجاوب في CSS.',
        'يتكوّن الموقع من: رأس متجاوب يستخدم Flexbox، وبطاقة تعريفية بألوان متباينة، وشبكة مشاريع تستخدم CSS Grid مع استعلام @media يتحول من عمود واحد على الجوال إلى عمودين على الشاشة الأكبر، وتذييل بسيط.',
        'بعد إتمام هذا المشروع، جرّب تعديل النصوص والألوان في المختبر التفاعلي لتصنع نسختك الخاصة وتشاركها مع أصدقائك!',
      ],
      en: [
        'Welcome to Lesson 20—your capstone project! You are ready to combine semantic HTML, color contrast, typography, box model precision, Flexbox, CSS Grid, and responsive media queries into one polished personal site.',
        'Your site includes a Flexbox top bar, a clean hero introduction, a CSS Grid project showcase that adapts from 1 column on mobile to 2 columns via @media, and a tidy footer.',
        'Feel free to customize the name, bio, and color palette in the Coding Playground afterward to make it uniquely yours!',
      ],
    },
    glossary: [
      {term: 'Capstone / المشروع الختامي', meaning: {ar: 'مشروع يجمع كل المهارات السابقة في تطبيق عملي واحد.', en: 'Final project uniting all learned skills in one cohesive build.'}},
    ],
    visualType: 'portfolio-architecture',
    visualCaption: {
      ar: 'معمارية الموقع الختامي: شريط Flexbox، بطاقة الترحيب، شبكة مشاريع Grid متجاوبة، وتذييل.',
      en: 'Capstone architecture: Flexbox navbar, intro card, responsive Grid showcase, and footer.',
    },
    exampleTitle: {
      ar: 'موقع شخصي متجاوب متكامل',
      en: 'Complete responsive portfolio page',
    },
    exampleHtml: `<header class="topbar">
  <strong>Sara Dev</strong>
  <nav><a href="#projects">Projects</a> · <a href="#contact">Contact</a></nav>
</header>
<main class="container">
  <section class="intro">
    <h1>Hi, I am Sara!</h1>
    <p>I build clean, accessible websites using HTML5 & CSS3.</p>
  </section>
  <section id="projects" class="projects">
    <article class="card"><h3>Bio Page</h3><p>Semantic HTML5 structure.</p></article>
    <article class="card"><h3>Grid Gallery</h3><p>Responsive 2-column CSS Grid.</p></article>
  </section>
</main>
<footer id="contact"><p>Built with CodePath · 2026</p></footer>`,
    exampleCss: `* { box-sizing: border-box; }
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: #0f172a;
  color: #ffffff;
  border-radius: 12px;
}
.topbar a { color: #38bdf8; text-decoration: none; }
.intro {
  margin: 16px 0;
  padding: 20px;
  background: linear-gradient(135deg, #ede9fe, #e0f2fe);
  border-radius: 14px;
}
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 500px) {
  .projects { grid-template-columns: 1fr 1fr; }
}
.card {
  padding: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
}
footer { margin-top: 18px; text-align: center; color: #64748b; font-size: 13px; }`,
    exercise: {
      prompt: {
        ar: 'أكمل الموقع النهائي بحيث يضم: <header> و <nav>، وقسم <main> فيه شبكتان على الأقل داخل .projects، مع استخدام display: flex و display: grid و @media في CSS.',
        en: 'Complete the capstone site with <header>, <nav>, <main>, at least 2 project cards inside .projects, and CSS using display: flex, display: grid, and @media.',
      },
      hint: {
        ar: 'أضف البطاقة الثانية داخل .projects وفعّل display: grid مع @media في CSS.',
        en: 'Add a second card inside .projects and configure display: grid + @media in CSS.',
      },
      starterHtml: `<header class="top">
  <strong>My Portfolio</strong>
  <nav><a href="#work">Work</a></nav>
</header>
<main>
  <h1>Welcome to My Site</h1>
  <section id="work" class="projects">
    <article class="card"><h3>Project 1</h3><p>HTML Page</p></article>
    <!-- Add Project 2 card -->
  </section>
</main>
<footer><p>Made by me</p></footer>`,
      starterCss: `.top {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #0f172a;
  color: white;
}
.projects {
  /* Add display: grid and gap */
}
/* Add @media rule for 2 columns */
.card { border: 1px solid #cbd5e1; padding: 14px; border-radius: 12px; }`,
      expectedHtml: `<header class="top">
  <strong>My Portfolio</strong>
  <nav><a href="#work">Work</a></nav>
</header>
<main>
  <h1>Welcome to My Site</h1>
  <section id="work" class="projects">
    <article class="card"><h3>Project 1</h3><p>HTML Page</p></article>
    <article class="card"><h3>Project 2</h3><p>CSS Grid Layout</p></article>
  </section>
</main>
<footer><p>Made by me</p></footer>`,
      expectedCss: `.top {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #0f172a;
  color: white;
}
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
@media (min-width: 500px) {
  .projects { grid-template-columns: 1fr 1fr; }
}
.card { border: 1px solid #cbd5e1; padding: 14px; border-radius: 12px; }`,
      rules: [
        {type: 'html-selector', target: 'header nav', description: {ar: 'شريط <nav> داخل <header>', en: '<nav> inside <header>'}},
        {type: 'html-selector', target: 'main .projects .card:nth-of-type(2)', description: {ar: 'بطاقتا مشاريع داخل .projects', en: 'At least 2 cards inside .projects'}},
        {type: 'html-selector', target: 'footer', description: {ar: 'تذييل <footer> في أسفل الصفحة', en: 'Includes <footer>'}},
        {type: 'css-pattern', target: 'display\\s*:\\s*flex', description: {ar: 'استخدام display: flex', en: 'Uses display: flex'}},
        {type: 'css-pattern', target: 'display\\s*:\\s*grid', description: {ar: 'استخدام display: grid', en: 'Uses display: grid'}},
        {type: 'css-pattern', target: '@media\\s*\\(', description: {ar: 'استخدام استعلام @media متجاوب', en: 'Includes @media responsiveness'}},
      ],
    },
    quiz: [
      {
        id: 'l20-q1',
        type: 'mcq',
        question: {ar: 'أي تقنية أنسب لتنسيق شريط تنقل أفقي في أعلى الموقع؟', en: 'Which CSS layout tool is best suited for a single-row top navigation bar?'},
        options: {ar: ['Flexbox', '<table>', '<br>', 'box-shadow'], en: ['Flexbox', '<table>', '<br>', 'box-shadow']},
        correctIndex: 0,
        explanation: {ar: 'Flexbox مثالي لتوزيع عناصر شريط التنقل على محور واحد.', en: 'Flexbox excels at aligning single-row navigation items.'},
      },
      {
        id: 'l20-q2',
        type: 'tf',
        question: {ar: 'الجمع بين Semantic HTML و CSS المتجاوب يجعل الموقع أفضل للهواتف وقارئات الشاشة.', en: 'Combining semantic HTML with responsive CSS improves mobile usability and accessibility.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح! البنية الدلالية والتصميم المتجاوب يكملان بعضهما.', en: 'True — structure and adaptive presentation work hand in hand.'},
      },
      {
        id: 'l20-q3',
        type: 'mcq',
        question: {ar: 'أين يمكنك تجريب مشاريع HTML و CSS الخاصة بك بحرية داخل CodePath؟', en: 'Where can you freely experiment with your own HTML & CSS ideas inside CodePath?'},
        options: {ar: ['مختبر الأكواد التفاعلي (Playground)', 'إعدادات المتصفح فقط', 'الاختبار النظري فقط', 'تعديل النظام'], en: ['Coding Playground', 'Browser settings only', 'Theory quiz only', 'OS kernel']},
        correctIndex: 0,
        explanation: {ar: 'مختبر الأكواد التفاعلي يمنحك محرراً ومعاينة مباشرة وآمنة دائماً.', en: 'The Interactive Coding Playground gives you a live isolated preview.'},
      },
    ],
  },
];
