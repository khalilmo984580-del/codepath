import {Lesson} from '../types';

export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 6,
    slug: 'html-tables',
    moduleId: 2,
    title: {
      ar: 'الجداول في HTML',
      en: 'Tables',
    },
    summary: {
      ar: 'تعرّف على بناء الجداول المنظمة لعرض البيانات في صفوف وأعمدة باستخدام table و tr و th و td.',
      en: 'Display structured data cleanly in rows and columns using table, tr, th, and td.',
    },
    durationMinutes: 14,
    xpReward: 80,
    tier: 'free',
    objectives: {
      ar: [
        'فهم الفرق بين الصف <tr> وخلية العنوان <th> وخلية البيانات <td>.',
        'تنظيم الجدول إلى رأس <thead> وجسم <tbody>.',
        'تطبيق حدود بسيطة تفصل الخلايا بوضوح.',
      ],
      en: [
        'Differentiate table rows <tr>, header cells <th>, and data cells <td>.',
        'Organize tables cleanly with <thead> and <tbody>.',
        'Style readable table borders and cell padding.',
      ],
    },
    explanation: {
      ar: [
        'تُستخدم الجداول لعرض البيانات الجدولية مثل الجداول الدراسية أو مقارنات الأسعار أو مواعيد الدروس. لا نستخدم الجداول أبداً لتصميم تخطيط الصفحة العام، بل للبيانات فقط.',
        'يبدأ الجدول بوسم <table>، وداخله نبني كل صف أفقي باستخدام <tr> (Table Row). داخل الصف نضع الخلايا: خلايا العناوين تكون <th> (Table Header) وتظهر بخط عريض، بينما خلايا البيانات العادية تستخدم <td> (Table Data).',
        'لتسهيل قراءة الكود وتحسين إمكانية الوصول، نضع صف العناوين داخل <thead>، وصفوف البيانات داخل <tbody>.',
      ],
      en: [
        'HTML tables organize tabular information such as schedules, scoreboards, or feature comparisons. Remember: use tables strictly for data, never for overall page layout.',
        'Every table starts with <table>. Inside, each horizontal row uses <tr> (Table Row). Column headers use <th> (Table Header) while regular data cells use <td> (Table Data).',
        'Wrapping header rows in <thead> and data rows in <tbody> keeps markup clean and helps assistive screen readers announce column titles.',
      ],
    },
    glossary: [
      {term: '<tr>', meaning: {ar: 'صف أفقي داخل الجدول.', en: 'Table Row containing cells.'}},
      {term: '<th> / <td>', meaning: {ar: 'خلية عنوان العمود وخلية البيانات العادية.', en: 'Header cell (bold) and regular data cell.'}},
    ],
    visualType: 'table-grid',
    visualCaption: {
      ar: 'تركيب الجدول: <thead> يحتوي صف العناوين <th> و <tbody> يحتوي صفوف البيانات <td>.',
      en: 'Table anatomy: <thead> holds <th> headers and <tbody> holds <td> rows.',
    },
    exampleTitle: {
      ar: 'جدول مواعيد الجلسات التعليمية',
      en: 'Weekly study session table',
    },
    exampleHtml: `<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Topic</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Module 1</td>
      <td>HTML Basics</td>
      <td>Ready</td>
    </tr>
    <tr>
      <td>Module 2</td>
      <td>Tables & Forms</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`,
    exampleCss: `table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #cbd5e1;
  padding: 10px 12px;
  text-align: left;
}
th {
  background: #ede9fe;
  color: #4c1d95;
}`,
    exercise: {
      prompt: {
        ar: 'أكمل الجدول ليحتوي على صف عناوين <th> في <thead> وصفّي بيانات على الأقل في <tbody>.',
        en: 'Complete the table with header cells <th> inside <thead> and at least two <tr> data rows inside <tbody>.',
      },
      hint: {
        ar: 'تأكد من أن كل صف <tr> في <tbody> يحتوي على خلايا <td> متطابقة في العدد.',
        en: 'Match the number of <td> cells per row to your <th> columns.',
      },
      starterHtml: `<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Structure</td>
    </tr>
    <!-- Add a second row for CSS -->
  </tbody>
</table>`,
      starterCss: `table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #cbd5e1; padding: 8px; }`,
      expectedHtml: `<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Structure</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Styling</td>
    </tr>
  </tbody>
</table>`,
      expectedCss: `table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid #cbd5e1; padding: 8px; }`,
      rules: [
        {type: 'html-selector', target: 'table thead th', description: {ar: 'رأس جدول <thead> مع <th>', en: 'Table has <thead> with <th>'}},
        {type: 'html-selector', target: 'table tbody tr:nth-of-type(2)', description: {ar: 'صفّان من البيانات في <tbody>', en: 'At least 2 data rows in <tbody>'}},
        {type: 'html-selector', target: 'table tbody td', description: {ar: 'استخدام خلايا <td>', en: 'Uses <td> data cells'}},
      ],
    },
    quiz: [
      {
        id: 'l6-q1',
        type: 'mcq',
        question: {ar: 'أي وسم يُستخدم لإنشاء صف جديد داخل الجدول؟', en: 'Which tag creates a horizontal row inside a table?'},
        options: {ar: ['<tr>', '<td>', '<th>', '<row>'], en: ['<tr>', '<td>', '<th>', '<row>']},
        correctIndex: 0,
        explanation: {ar: '<tr> تعني Table Row أي صف الجدول.', en: '<tr> stands for Table Row.'},
      },
      {
        id: 'l6-q2',
        type: 'mcq',
        question: {ar: 'ما الفرق بين <th> و <td>؟', en: 'What is the difference between <th> and <td>?'},
        options: {
          ar: ['<th> لخلايا العناوين و <td> لخلايا البيانات', '<th> للصور فقط', 'لا فرق بينهما أبداً', '<td> للعنوان الرئيسي فقط'],
          en: ['<th> is for header cells; <td> is for regular data cells', '<th> is only for images', 'They are identical', '<td> is only for page titles'],
        },
        correctIndex: 0,
        explanation: {ar: '<th> تميّز عناوين الأعمدة والصفوف، بينما <td> للبيانات.', en: '<th> marks header cells and <td> holds table data.'},
      },
      {
        id: 'l6-q3',
        type: 'tf',
        question: {ar: 'يُفضل استخدام الجداول في HTML لعرض البيانات وليس لتصميم تخطيط الموقع بأكمله.', en: 'HTML tables should be used for tabular data rather than full-page layout.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح، تخطيط الصفحة ننجزه لاحقاً باستخدام Flexbox و CSS Grid.', en: 'True — Flexbox and CSS Grid are built for page layout.'},
      },
    ],
  },
  {
    id: 7,
    slug: 'forms-and-input-fields',
    moduleId: 2,
    title: {
      ar: 'النماذج وحقول الإدخال',
      en: 'Forms and input fields',
    },
    summary: {
      ar: 'تعلّم جمع مدخلات المستخدم بشكل سليم عبر وسم form وحقول input و label و textarea.',
      en: 'Collect user input cleanly with <form>, accessible <label>, <input>, and <textarea> fields.',
    },
    durationMinutes: 15,
    xpReward: 90,
    tier: 'free',
    objectives: {
      ar: [
        'ربط كل حقل إدخال <input> بتسمية <label> واضحة عبر السمتين for و id.',
        'معرفة أنواع الحقول الشائعة مثل text و email و password.',
        'إضافة حقل نصي متعدد الأسطر <textarea> وزر إرسال.',
      ],
      en: [
        'Connect every <input> with a descriptive <label> using for and id.',
        'Use common input types like text, email, and password.',
        'Add multi-line <textarea> fields and a submit button.',
      ],
    },
    explanation: {
      ar: [
        'النماذج (Forms) هي طريقة تواصل الزائر مع الموقع: من تسجيل الدخول إلى إرسال رسالة تواصل. تبدأ دائماً بحاوية <form>.',
        'لجعل النموذج مريحاً وسهل الوصول للجميع، نربط كل حقل بتسمية <label>. عندما يتطابق for="email" في التسمية مع id="email" في الحقل، يستطيع المستخدم الضغط على التسمية نفسها لتنشيط الحقل.',
        'يتغير سلوك وسم <input> حسب سمة type: مثل type="text" للاسم، و type="email" للبريد الإلكتروني مع فحص تلقائي للصيغة، و type="password" لإخفاء كلمة المرور.',
      ],
      en: [
        'Forms let users interact with websites—from search bars to contact forms. Every form wraps its controls inside a <form> element.',
        'Always pair each input with a <label>. Matching label’s for="email" with input’s id="email" helps screen readers and lets users click the label text to focus the field.',
        'The type attribute controls how <input> behaves: text for names, email for email validation, and password to mask sensitive characters.',
      ],
    },
    glossary: [
      {term: '<label>', meaning: {ar: 'وصف نصي مرتبط بحقل الإدخال لتحسين الوضوح وإمكانية الوصول.', en: 'Descriptive caption linked to a form input.'}},
      {term: 'type', meaning: {ar: 'سمة تحدد نوع الحقل مثل نص أو بريد إلكتروني أو كلمة مرور.', en: 'Attribute specifying input kind like text, email, or password.'}},
    ],
    visualType: 'form-controls',
    visualCaption: {
      ar: 'ارتباط التسمية <label for="user"> مع حقل <input id="user"> لسهولة الوصول.',
      en: 'Pairing <label for="user"> with <input id="user"> for accessible focus.',
    },
    exampleTitle: {
      ar: 'نموذج تسجيل بسيط في دورة',
      en: 'Simple course signup form',
    },
    exampleHtml: `<form class="signup">
  <label for="fullname">Full Name</label>
  <input id="fullname" type="text" placeholder="Layla Hassan" />

  <label for="mail">Email</label>
  <input id="mail" type="email" placeholder="layla@example.com" />

  <button type="submit">Join Path</button>
</form>`,
    exampleCss: `.signup {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
input {
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}
button {
  margin-top: 8px;
  padding: 10px;
  background: #6d28d9;
  color: white;
  border: none;
  border-radius: 8px;
}`,
    exercise: {
      prompt: {
        ar: 'ابنِ نموذجاً <form> يحتوي على حقل <input> مرتبط بتسمية <label> عبر for و id، وحقل <textarea> وزر <button>.',
        en: 'Build a <form> with a <label> linked to an <input> via for/id, a <textarea>, and a <button>.',
      },
      hint: {
        ar: 'تأكد من وجود label[for] و input[id] بنفس الاسم.',
        en: 'Ensure your <label> has a for="..." matching the <input> id="...".',
      },
      starterHtml: `<form>
  <label for="username">Name</label>
  <input id="username" type="text" placeholder="Your name" />
  <!-- Add a <textarea> and a <button> -->
</form>`,
      starterCss: `form { display: grid; gap: 10px; max-width: 320px; }`,
      expectedHtml: `<form>
  <label for="username">Name</label>
  <input id="username" type="text" placeholder="Your name" />
  <label for="notes">Feedback</label>
  <textarea id="notes" rows="3" placeholder="Share your thoughts"></textarea>
  <button type="button">Send</button>
</form>`,
      expectedCss: `form { display: grid; gap: 10px; max-width: 320px; }`,
      rules: [
        {type: 'html-selector', target: 'form', description: {ar: 'حاوية <form>', en: 'Contains a <form> element'}},
        {type: 'html-attr', target: 'label', attr: 'for', description: {ar: 'تسمية <label> تحتوي على for', en: '<label> includes for attribute'}},
        {type: 'html-attr', target: 'input', attr: 'id', description: {ar: 'حقل <input> يحتوي على id', en: '<input> includes id attribute'}},
        {type: 'html-selector', target: 'form textarea', description: {ar: 'حقل <textarea> للرسالة', en: 'Includes a <textarea>'}},
        {type: 'html-selector', target: 'form button', description: {ar: 'زر <button> داخل النموذج', en: 'Includes a <button>'}},
      ],
    },
    quiz: [
      {
        id: 'l7-q1',
        type: 'mcq',
        question: {ar: 'كيف نربط وسم <label> بحقل <input> محدد؟', en: 'How do you explicitly link a <label> to an <input>?'},
        options: {
          ar: ['تطابق السمة for مع السمة id', 'استخدام وسم <h1>', 'وضع الحقل داخل <title>', 'استخدام alt'],
          en: ['Match label’s for attribute with input’s id', 'Use an <h1> tag', 'Place input inside <title>', 'Use alt attribute'],
        },
        correctIndex: 0,
        explanation: {ar: 'السمة for في <label> ترتبط مباشرة بالسمة id في <input>.', en: 'Matching for="..." with id="..." links them together.'},
      },
      {
        id: 'l7-q2',
        type: 'mcq',
        question: {ar: 'أي قيمة لـ type تخفي الحروف أثناء كتابة كلمة المرور؟', en: 'Which input type masks characters for passwords?'},
        options: {ar: ['password', 'email', 'hidden', 'text'], en: ['password', 'email', 'hidden', 'text']},
        correctIndex: 0,
        explanation: {ar: 'type="password" يحول الحروف إلى نقاط لحماية الخصوصية.', en: 'type="password" masks characters visually.'},
      },
      {
        id: 'l7-q3',
        type: 'tf',
        question: {ar: 'وسم <textarea> مناسب لكتابة رسالة طويلة من عدة أسطر.', en: '<textarea> is designed for multi-line text input.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، بعكس <input> ذي السطر الواحد، يدعم <textarea> عدة أسطر.', en: 'True — <textarea> supports multi-line user messages.'},
      },
    ],
  },
  {
    id: 8,
    slug: 'semantic-html',
    moduleId: 2,
    title: {
      ar: 'الوسوم الدلالية (Semantic HTML)',
      en: 'Semantic HTML',
    },
    summary: {
      ar: 'تعلّم استخدام header و nav و main و section و article و footer لوصف وظيفة كل جزء من الصفحة.',
      en: 'Describe page meaning clearly using header, nav, main, section, article, and footer.',
    },
    durationMinutes: 12,
    xpReward: 80,
    tier: 'free',
    objectives: {
      ar: [
        'فهم لماذا يُفضّل Semantic HTML على الإفراط في استخدام <div>.',
        'معرفة دور كل من <header>، <nav>، <main>، <article>، و <footer>.',
        'تحسين قابلية الوصول ومحركات البحث في صفحاتك.',
      ],
      en: [
        'Understand why semantic tags beat generic <div> soup.',
        'Use <header>, <nav>, <main>, <article>, and <footer> accurately.',
        'Improve accessibility for screen readers and search engines.',
      ],
    },
    explanation: {
      ar: [
        'يمكنك نظرياً بناء صفحة كاملة باستخدام وسم <div> العام فقط، لكن المتصفح وقارئات الشاشة ومحركات البحث لن تفهم أين القائمة وأين المقال وأين التذييل.',
        'الوسوم الدلالية (Semantic Tags) تمنح كل منطقة اسماً واضحاً يعبر عن دورها: <header> لرأس الصفحة، و <nav> لروابط التنقل، و <main> للمحتوى الأساسي الوحيد، و <article> لمقال أو بطاقة مستقلة، و <footer> لتذييل الصفحة.',
        'استخدام هذه الوسوم يجعل الكود أسهل في الصيانة لك ولفريقك، ويجعل موقعك احترافياً منذ اليوم الأول.',
      ],
      en: [
        'While you could wrap everything in generic <div> boxes, browsers and assistive technologies cannot tell which box is navigation versus the main article.',
        'Semantic HTML gives meaningful names to regions: <header> for top branding, <nav> for navigation links, <main> for the primary content, <article> for standalone posts, and <footer> for bottom info.',
        'Semantic markup makes your code self-documenting, boosts SEO, and helps keyboard and screen-reader users jump straight to content.',
      ],
    },
    glossary: [
      {term: '<main>', meaning: {ar: 'المحتوى الأساسي الفريد في الصفحة.', en: 'Dominant primary content region of the document.'}},
      {term: '<nav>', meaning: {ar: 'منطقة روابط التنقل الرئيسية.', en: 'Section dedicated to navigation links.'}},
    ],
    visualType: 'semantic-layout',
    visualCaption: {
      ar: 'خريطة الصفحة الدلالية: header ثم nav ثم main مع article وأخيراً footer.',
      en: 'Semantic page map: header, nav, main containing article, and footer.',
    },
    exampleTitle: {
      ar: 'صفحة مدونة دلالية متكاملة',
      en: 'Semantic blog page skeleton',
    },
    exampleHtml: `<header>
  <h1>Dev Notes</h1>
  <nav>
    <a href="#articles">Articles</a> · <a href="#about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Why Semantic Tags Win</h2>
    <p>They describe purpose directly inside HTML.</p>
  </article>
</main>
<footer>
  <p>Written by a CodePath learner</p>
</footer>`,
    exampleCss: `header, main, footer {
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 10px;
}
header { background: #ede9fe; }
main { background: #f8fafc; border: 1px solid #e2e8f0; }
footer { background: #f1f5f9; font-size: 13px; }`,
    exercise: {
      prompt: {
        ar: 'حوّل البنية التالية لاستخدام وسوم دلالية حقيقية: <header>، <nav>، <main>، و <footer>.',
        en: 'Build a semantic page skeleton containing <header>, <nav>, <main>, and <footer>.',
      },
      hint: {
        ar: 'ضع الروابط داخل <nav> والمحتوى الرئيسي داخل <main>.',
        en: 'Place links inside <nav> and main page content inside <main>.',
      },
      starterHtml: `<header>
  <h1>My Site</h1>
  <!-- Add <nav> here -->
</header>
<!-- Add <main> and <footer> below -->
`,
      starterCss: `header, main, footer { padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 8px; }`,
      expectedHtml: `<header>
  <h1>My Site</h1>
  <nav><a href="#home">Home</a></nav>
</header>
<main>
  <h2>Welcome</h2>
  <p>Main article goes here.</p>
</main>
<footer>
  <p>Copyright 2026</p>
</footer>`,
      expectedCss: `header, main, footer { padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 8px; }`,
      rules: [
        {type: 'html-selector', target: 'header', description: {ar: 'استخدام <header>', en: 'Uses <header>'}},
        {type: 'html-selector', target: 'nav', description: {ar: 'استخدام <nav>', en: 'Uses <nav>'}},
        {type: 'html-selector', target: 'main', description: {ar: 'استخدام <main>', en: 'Uses <main>'}},
        {type: 'html-selector', target: 'footer', description: {ar: 'استخدام <footer>', en: 'Uses <footer>'}},
      ],
    },
    quiz: [
      {
        id: 'l8-q1',
        type: 'mcq',
        question: {ar: 'أي وسم دلالي يحيط بالمحتوى الرئيسي الوحيد للصفحة؟', en: 'Which semantic tag wraps the unique primary content of a page?'},
        options: {ar: ['<main>', '<nav>', '<footer>', '<span>'], en: ['<main>', '<nav>', '<footer>', '<span>']},
        correctIndex: 0,
        explanation: {ar: '<main> مخصص للمحتوى الأساسي في الصفحة.', en: '<main> identifies the primary content area.'},
      },
      {
        id: 'l8-q2',
        type: 'tf',
        question: {ar: 'استخدام الوسوم الدلالية يساعد قارئات الشاشة على التنقل بسهولة.', en: 'Semantic HTML helps screen readers navigate sections easily.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، تتيح هذه الوسوم التنقل السريع بين المعالم الرئيسية.', en: 'True! Landmarks like <nav> and <main> make navigation accessible.'},
      },
      {
        id: 'l8-q3',
        type: 'mcq',
        question: {ar: 'أين نضع روابط القائمة الرئيسية عادةً؟', en: 'Which element best wraps primary navigation links?'},
        options: {ar: ['<nav>', '<article>', '<footer>', '<aside>'], en: ['<nav>', '<article>', '<footer>', '<aside>']},
        correctIndex: 0,
        explanation: {ar: '<nav> يعبر عن مجموعة روابط التنقل.', en: '<nav> is explicitly designed for navigation links.'},
      },
    ],
  },
  {
    id: 9,
    slug: 'buttons-and-useful-elements',
    moduleId: 2,
    title: {
      ar: 'الأزرار والعناصر المفيدة',
      en: 'Buttons and useful elements',
    },
    summary: {
      ar: 'تعلّم الفرق بين الزر <button> والرابط <a>، واكتشف عناصر رائعة مثل <details> و <hr> و <figure>.',
      en: 'Learn when to use <button> vs <a>, plus handy HTML elements like <details>, <hr>, and <figure>.',
    },
    durationMinutes: 12,
    xpReward: 75,
    tier: 'free',
    objectives: {
      ar: [
        'التمييز بين وظيفة <button> (تنفيذ إجراء) و <a> (الانتقال لصفحة).',
        'إنشاء قائمة قابلة للطي والفتح بدون JavaScript عبر <details> و <summary>.',
        'إضافة خط فاصل <hr> وصندوق صورة بتعليق <figure> و <figcaption>.',
      ],
      en: [
        'Choose <button> for actions and <a> for navigation.',
        'Build an interactive accordion with zero JS using <details> and <summary>.',
        'Use <hr> dividers and <figure>/<figcaption> for captioned media.',
      ],
    },
    explanation: {
      ar: [
        'يخلط كثير من المبتدئين بين <button> و <a>. القاعدة البسيطة هي: إذا كان الضغط ينقلك إلى رابط أو قسم آخر فاستخدم <a>، أما إذا كان ينفّذ إجراءً مثل إرسال نموذج أو فتح قائمة فاستخدم <button>.',
        'تحتوي HTML على عناصر ذكية جاهزة بدون أي كود إضافي! مثلاً، عنصر <details> مع <summary> يصنع سؤالاً قابلاً للفتح والإغلاق عند النقر عليه تلقائياً.',
        'كما يمكنك استخدام <hr> لرسم خط فاصل أنيق بين الموضوعات، و <figure> مع <figcaption> لربط صورة بتعليقها التوضيحي.',
      ],
      en: [
        'Beginners often confuse <button> and <a>. Remember this simple rule: use <a> when clicking navigates to another URL or section, and use <button> when clicking triggers an action like submitting a form.',
        'HTML also ships with built-in interactive widgets! The <details> tag paired with <summary> creates an expandable FAQ accordion right out of the box—no JavaScript required.',
        'Other helpful elements include <hr> for thematic horizontal breaks and <figure> with <figcaption> to attach a caption directly to an illustration.',
      ],
    },
    glossary: [
      {term: '<details>', meaning: {ar: 'حاوية تفاعلية تُظهر وتُخفي المحتوى عند النقر.', en: 'Built-in disclosure widget that toggles open/closed.'}},
      {term: '<figcaption>', meaning: {ar: 'وصف توضيحي يظهر أسفل الصورة داخل <figure>.', en: 'Caption describing media inside a <figure>.'}},
    ],
    visualType: 'buttons-details',
    visualCaption: {
      ar: 'مقارنة <button> التفاعلي مع عنصر <details> القابل للفتح والطي.',
      en: 'Interactive <button> action trigger paired with native <details> accordion.',
    },
    exampleTitle: {
      ar: 'قسم أسئلة شائعة تفاعلي بدون JavaScript',
      en: 'Zero-JS FAQ using <details> and <button>',
    },
    exampleHtml: `<h2>Quick FAQ</h2>
<details open>
  <summary>Do I need JavaScript for this accordion?</summary>
  <p>No! HTML handles open and close states natively.</p>
</details>
<hr />
<button type="button">Save Bookmark</button>`,
    exampleCss: `details {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 12px;
}
summary {
  font-weight: 600;
  cursor: pointer;
}
button {
  padding: 10px 18px;
  background: #0ea5e9;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
}`,
    exercise: {
      prompt: {
        ar: 'أضف عنصر <details> وبداخله <summary> وفقرة إجابة، ثم أضف خطاً فاصلاً <hr> وزر <button>.',
        en: 'Create a <details> element containing a <summary> and <p> answer, followed by an <hr> and a <button>.',
      },
      hint: {
        ar: 'وسم <summary> يجب أن يكون أول عنصر داخل <details>.',
        en: 'Place <summary> as the first child inside <details>.',
      },
      starterHtml: `<details>
  <summary>What is HTML?</summary>
  <!-- Add a <p> answer inside details -->
</details>
<!-- Add <hr> and <button> below -->
`,
      starterCss: `button { padding: 8px 16px; background: #6d28d9; color: #fff; border: none; border-radius: 8px; }`,
      expectedHtml: `<details>
  <summary>What is HTML?</summary>
  <p>HTML builds webpage structure.</p>
</details>
<hr />
<button type="button">Got it!</button>`,
      expectedCss: `button { padding: 8px 16px; background: #6d28d9; color: #fff; border: none; border-radius: 8px; }`,
      rules: [
        {type: 'html-selector', target: 'details summary', description: {ar: 'وجود <summary> داخل <details>', en: '<summary> inside <details>'}},
        {type: 'html-selector', target: 'details p', description: {ar: 'وجود فقرة إجابة داخل <details>', en: '<p> content inside <details>'}},
        {type: 'html-selector', target: 'hr', description: {ar: 'إضافة فاصل <hr>', en: 'Includes an <hr> divider'}},
        {type: 'html-selector', target: 'button', description: {ar: 'إضافة زر <button>', en: 'Includes a <button>'}},
      ],
    },
    quiz: [
      {
        id: 'l9-q1',
        type: 'mcq',
        question: {ar: 'متى نختار <button> بدلاً من <a>؟', en: 'When should you choose <button> instead of <a>?'},
        options: {
          ar: ['عند تنفيذ إجراء مثل إرسال نموذج أو فتح نافذة', 'عند الانتقال إلى موقع خارجي', 'عند كتابة عنوان المقال', 'عند إدراج صورة'],
          en: ['When triggering an action like submitting a form', 'When navigating to another URL', 'When writing a section title', 'When embedding an image'],
        },
        correctIndex: 0,
        explanation: {ar: '<button> مخصص للإجراءات، بينما <a> للتنقل بين الروابط.', en: '<button> triggers actions; <a> navigates to URLs.'},
      },
      {
        id: 'l9-q2',
        type: 'tf',
        question: {ar: 'يوفّر وسم <details> قائمة قابلة للفتح والإغلاق دون الحاجة لـ JavaScript.', en: '<details> provides built-in expand/collapse behavior without JavaScript.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'نعم، يدعم المتصفح فتحه وإغلاقه تلقائياً.', en: 'True! Native HTML handles the toggle state.'},
      },
      {
        id: 'l9-q3',
        type: 'mcq',
        question: {ar: 'ما وظيفة وسم <figcaption>؟', en: 'What does <figcaption> do?'},
        options: {
          ar: ['إضافة تعليق توضيحي لصورة داخل <figure>', 'تلوين خلفية الصفحة', 'إنشاء صف في جدول', 'تعريف عنوان التبويب'],
          en: ['Provides a caption for media inside <figure>', 'Colors the page background', 'Creates a table row', 'Sets the browser tab title'],
        },
        correctIndex: 0,
        explanation: {ar: '<figcaption> يصف الصورة أو الرسم داخل <figure>.', en: '<figcaption> captions the visual content in a <figure>.'},
      },
    ],
  },
  {
    id: 10,
    slug: 'build-your-first-personal-html-page',
    moduleId: 2,
    title: {
      ar: 'مشروع: ابنِ صفحتك الشخصية الأولى بـ HTML',
      en: 'Build your first personal HTML page',
    },
    summary: {
      ar: 'اجمع كل مهارات الوحدتين الأولى والثانية لبناء صفحة شخصية نظيفة ودلالية بالكامل.',
      en: 'Combine everything from Modules 1 & 2 into a complete, well-structured personal bio page.',
    },
    durationMinutes: 20,
    xpReward: 120,
    tier: 'free',
    objectives: {
      ar: [
        'دمج <header> و <nav> و <main> و <footer> في مشروع متكامل.',
        'إضافة نبذة تعريفية، قائمة مهارات <ul>، وروابط تواصل.',
        'ضمان تنظيم الكود وسهولة قراءته.',
      ],
      en: [
        'Combine <header>, <nav>, <main>, and <footer> in one real page.',
        'Add a personal bio, a <ul> skills list, and a contact section.',
        'Verify clean, valid semantic nesting across the whole document.',
      ],
    },
    explanation: {
      ar: [
        'تهانينا على وصولك إلى نهاية قسم HTML! حان الوقت لجمع كل القطع معاً وبناء أول صفحة شخصية حقيقية لك. ستبدو الصفحة نظيفة ومنظمة حتى قبل أن نغوص في جماليات CSS.',
        'ستتضمن صفحتك رأساً <header> يحمل اسمك وشريط تنقل، ومحتوى رئيسياً <main> مقسّماً إلى قسم نبذة عنك وقسم مهاراتك باستخدام قائمة <ul>، وأخيراً تذييلاً <footer> فيه رابط للتواصل.',
        'تذكّر دائماً: البنية القوية في HTML هي السر الذي يجعل تصميم CSS لاحقاً سهلاً ومتجاوباً.',
      ],
      en: [
        'Congratulations on reaching the Module 2 milestone! It is time to bring together headings, lists, links, and semantic landmarks into a real personal webpage.',
        'Your page will feature a <header> with your name and navigation links, a <main> area containing an About section and a <ul> Skills list, and a <footer> with contact info.',
        'Clean HTML structure is the foundation that makes CSS styling effortless in Modules 3 and 4.',
      ],
    },
    glossary: [
      {term: 'Wireframe / المخطط الهيكلي', meaning: {ar: 'تصور مبدئي لترتيب أقسام الصفحة قبل التلوين.', en: 'Structural blueprint showing how page sections stack.'}},
    ],
    visualType: 'personal-page-wireframe',
    visualCaption: {
      ar: 'مخطط الصفحة الشخصية: رأس الصفحة، النبذة والمهارات، والتذييل.',
      en: 'Personal page blueprint: header, bio & skills sections, and footer.',
    },
    exampleTitle: {
      ar: 'نموذج صفحة شخصية جاهزة بـ HTML',
      en: 'Complete personal HTML page reference',
    },
    exampleHtml: `<header>
  <h1>Tariq Al-Ali</h1>
  <nav>
    <a href="#about">About</a> · <a href="#skills">Skills</a>
  </nav>
</header>
<main>
  <section id="about">
    <h2>About Me</h2>
    <p>Future web developer passionate about clean design.</p>
  </section>
  <section id="skills">
    <h2>My Skills</h2>
    <ul>
      <li>Semantic HTML5</li>
      <li>Forms & Tables</li>
    </ul>
  </section>
</main>
<footer>
  <p>Say hello: <a href="#contact">Email Me</a></p>
</footer>`,
    exampleCss: `body { max-width: 560px; margin: 0 auto; }
header { border-bottom: 2px solid #ede9fe; padding-bottom: 12px; }
section { margin-top: 18px; }
footer { margin-top: 24px; color: #64748b; font-size: 14px; }`,
    exercise: {
      prompt: {
        ar: 'ابنِ صفحتك الشخصية بحيث تضم: <header> و <h1>، وقسم <main> يحتوي على <section> وقائمة مهارات <ul> بعنصرين على الأقل، و <footer> فيه رابط <a>.',
        en: 'Build your personal page with a <header> containing <h1>, a <main> with a <section> and a <ul> list (2+ items), and a <footer> containing an <a> link.',
      },
      hint: {
        ar: 'تحقّق من وجود <header> و <main> و <ul> و <footer> و <a>.',
        en: 'Include <header>, <main>, <section>, <ul> with 2 <li> items, and <footer> with <a>.',
      },
      starterHtml: `<header>
  <h1>Your Name</h1>
</header>
<main>
  <section>
    <h2>About Me</h2>
    <p>I am learning web development.</p>
  </section>
  <!-- Add Skills section with <ul> and <footer> below -->
</main>`,
      starterCss: `header { color: #4c1d95; } footer { margin-top: 20px; }`,
      expectedHtml: `<header>
  <h1>Noura Al-Khatib</h1>
</header>
<main>
  <section>
    <h2>About Me</h2>
    <p>Beginner web builder excited to craft useful sites.</p>
  </section>
  <section>
    <h2>Skills</h2>
    <ul>
      <li>HTML5 Structure</li>
      <li>Accessible Forms</li>
    </ul>
  </section>
</main>
<footer>
  <p><a href="#contact">Contact Me</a></p>
</footer>`,
      expectedCss: `header { color: #4c1d95; } footer { margin-top: 20px; }`,
      rules: [
        {type: 'html-selector', target: 'header h1', description: {ar: 'وجود <h1> داخل <header>', en: '<h1> inside <header>'}},
        {type: 'html-selector', target: 'main section', description: {ar: 'قسم <section> داخل <main>', en: '<section> inside <main>'}},
        {type: 'html-selector', target: 'main ul li:nth-of-type(2)', description: {ar: 'قائمة <ul> بعنصرين <li> على الأقل', en: '<ul> with at least 2 <li> items'}},
        {type: 'html-attr', target: 'footer a', attr: 'href', description: {ar: 'رابط <a> داخل <footer>', en: '<a> link inside <footer>'}},
      ],
    },
    quiz: [
      {
        id: 'l10-q1',
        type: 'mcq',
        question: {ar: 'أي ترتيب يمثل البنية المنطقية لصفحة شخصية قياسية؟', en: 'Which order represents a logical personal page structure?'},
        options: {
          ar: ['<header> ثم <main> ثم <footer>', '<footer> ثم <head> ثم <main>', '<nav> خارج <html>', '<title> داخل <footer>'],
          en: ['<header> then <main> then <footer>', '<footer> then <head> then <main>', '<nav> outside <html>', '<title> inside <footer>'],
        },
        correctIndex: 0,
        explanation: {ar: 'الرأس ثم المحتوى الرئيسي ثم التذييل هو الترتيب القياسي الواضح.', en: 'Header, main content, and footer follow natural reading order.'},
      },
      {
        id: 'l10-q2',
        type: 'tf',
        question: {ar: 'يمكن وضع أكثر من <section> داخل وسم <main> لتقسيم الموضوعات.', en: 'You can nest multiple <section> blocks inside <main>.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح تماماً، فكل <section> يجمع موضوعاً مترابطاً.', en: 'True! Multiple thematic <section> elements fit naturally inside <main>.'},
      },
      {
        id: 'l10-q3',
        type: 'mcq',
        question: {ar: 'ما الخطوة التالية الطبيعية بعد إتمام هيكل HTML؟', en: 'What comes naturally after completing clean HTML structure?'},
        options: {
          ar: ['إضافة الألوان والتنسيقات والتخطيط عبر CSS', 'حذف كل الوسوم الدلالية', 'تكرار <h1> عشر مرات', 'إزالة وسم <body>'],
          en: ['Styling colors, typography, and layout with CSS', 'Deleting all semantic tags', 'Repeating <h1> ten times', 'Removing <body>'],
        },
        correctIndex: 0,
        explanation: {ar: 'الآن أصبحت جاهزاً لتعلّم CSS في الوحدة الثالثة!', en: 'With solid HTML in place, CSS brings visual polish in Module 3.'},
      },
    ],
  },
];
