import {Lesson} from '../types';

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 1,
    slug: 'what-is-programming-and-html',
    moduleId: 1,
    title: {
      ar: 'ما هي البرمجة وما هي HTML؟',
      en: 'What is programming and what is HTML?',
    },
    summary: {
      ar: 'تعرّف على فكرة كتابة التعليمات للحاسوب، وكيف تشكّل لغة HTML الهيكل الأساسي لكل صفحة ويب تراها.',
      en: 'Discover how computers follow written instructions and how HTML builds the skeleton of every webpage.',
    },
    durationMinutes: 8,
    xpReward: 50,
    tier: 'free',
    objectives: {
      ar: [
        'فهم معنى البرمجة بطريقة مبسطة بعيداً عن التعقيد.',
        'التفريق بين لغة HTML وبقية لغات الويب مثل CSS.',
        'التعرّف على شكل الوسم (Tag) وكيفية قراءة عنصر HTML.',
      ],
      en: [
        'Understand what programming means in simple everyday terms.',
        'Tell the difference between HTML structure and CSS styling.',
        'Recognize HTML opening tags, content, and closing tags.',
      ],
    },
    explanation: {
      ar: [
        'البرمجة ببساطة هي كتابة خطوات واضحة ودقيقة يفهمها الحاسوب وينفّذها بالترتيب. عندما تتصفح أي موقع إلكتروني، فإن متصفح الويب يقرأ ملفات نصية مكتوبة بلغات متخصصة ويحوّلها فوراً إلى عناوين وصور وأزرار.',
        'لغة HTML (اختصار لـ HyperText Markup Language) ليست لغة برمجة معقدة للعمليات الحسابية، بل هي «لغة ترميز» تصف هيكل الصفحة ومكوناتها. تخيّل أن صفحة الويب مثل منزل: لغة HTML هي الجدران والأبواب والغرف، بينما تأتي CSS لاحقاً لتختار الألوان والديكور.',
        'تعتمد HTML على ما يُسمّى بالوسوم (Tags). يُكتب الوسم داخل قوسين زاويّين مثل <p> لبداية الفقرة، وينتهي بوسم إغلاق يحتوي على شرطة مائلة </p>. كل ما بينهما هو المحتوى الذي يظهر للمستخدم.',
      ],
      en: [
        'Programming means writing clear, step-by-step instructions that a computer can follow reliably. Whenever you open a website, your browser reads plain text files and transforms them into headings, text, links, and images.',
        'HTML stands for HyperText Markup Language. Rather than performing math calculations, HTML describes the structure and meaning of content on a webpage. Think of a website like a house: HTML builds the walls, rooms, and doors, while CSS later adds paint and decoration.',
        'HTML works using tags wrapped in angle brackets, such as <p> for a paragraph. Most elements have an opening tag <p>, the readable content in the middle, and a closing tag </p> with a forward slash.',
      ],
    },
    glossary: [
      {
        term: 'HTML',
        meaning: {
          ar: 'لغة ترميز النصوص التشعبية المسؤولة عن بناء هيكل صفحات الويب.',
          en: 'HyperText Markup Language — defines the structure of webpages.',
        },
      },
      {
        term: 'Tag / الوسم',
        meaning: {
          ar: 'كلمة محاطة بقوسين < > تخبر المتصفح بنوع العنصر مثل فقرة أو عنوان.',
          en: 'A keyword inside angle brackets < > telling the browser what an element is.',
        },
      },
      {
        term: 'Element / العنصر',
        meaning: {
          ar: 'الكتلة الكاملة المكونة من وسم البداية والمحتوى ووسم الإغلاق.',
          en: 'The complete unit made of opening tag, content, and closing tag.',
        },
      },
    ],
    visualType: 'html-anatomy',
    visualCaption: {
      ar: 'تشريح عنصر HTML: وسم بداية، محتوى نصي، ووسم إغلاق.',
      en: 'Anatomy of an HTML element: opening tag, content, and closing tag.',
    },
    exampleTitle: {
      ar: 'أول مثال لعنصر HTML بسيط',
      en: 'Your first simple HTML elements',
    },
    exampleHtml: `<h1>Welcome to CodePath</h1>
<p>HTML gives every webpage its clear structure.</p>`,
    exampleCss: `h1 {
  color: #4c1d95;
}
p {
  color: #334155;
  font-size: 16px;
}`,
    exercise: {
      prompt: {
        ar: 'أنشئ عنواناً رئيسياً باستخدام <h1> يرحب بالزائر، وأضف تحته فقرة <p> تصف هدف الصفحة.',
        en: 'Write a main heading using <h1> welcoming the visitor, and add a <p> paragraph underneath describing your page.',
      },
      hint: {
        ar: 'تأكّد من إغلاق الوسمين بـ </h1> و </p>.',
        en: 'Remember to close both tags with </h1> and </p>.',
      },
      starterHtml: `<h1>Hello Learner</h1>
<!-- Write a <p> paragraph below -->
`,
      starterCss: `h1 { color: #2563eb; }`,
      expectedHtml: `<h1>Hello Learner</h1>
<p>I am starting my web development journey today.</p>`,
      expectedCss: `h1 { color: #2563eb; }`,
      rules: [
        {
          type: 'html-selector',
          target: 'h1',
          description: {ar: 'وجود عنصر <h1> في الصفحة', en: 'Includes an <h1> heading'},
        },
        {
          type: 'html-selector',
          target: 'p',
          description: {ar: 'إضافة فقرة <p> تحت العنوان', en: 'Includes a <p> paragraph'},
        },
        {
          type: 'text-present',
          target: '12',
          description: {ar: 'كتابة نص واضح داخل الوسوم', en: 'Contains readable text inside the tags'},
        },
      ],
    },
    quiz: [
      {
        id: 'l1-q1',
        type: 'mcq',
        question: {
          ar: 'ما الوظيفة الأساسية للغة HTML في بناء المواقع؟',
          en: 'What is the primary role of HTML on a website?',
        },
        options: {
          ar: [
            'تحديد هيكل الصفحة وعناصرها الأساسية',
            'إدارة قواعد البيانات السحابية فقط',
            'حماية الخادم من الاختراق',
            'تحرير مقاطع الفيديو',
          ],
          en: [
            'Defining the structure and content elements of the page',
            'Managing cloud databases exclusively',
            'Encrypting server hardware',
            'Editing raw video streams',
          ],
        },
        correctIndex: 0,
        explanation: {
          ar: 'لغة HTML تبني الهيكل الأساسي للمحتوى مثل العناوين والفقرات والروابط.',
          en: 'HTML provides the core structural skeleton for headings, paragraphs, links, and media.',
        },
      },
      {
        id: 'l1-q2',
        type: 'tf',
        question: {
          ar: 'يبدأ وسم الإغلاق في HTML عادةً بشرطة مائلة مثل </p>.',
          en: 'An HTML closing tag typically includes a forward slash like </p>.',
        },
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {
          ar: 'صحيح! الشرطة المائلة (/) تميّز وسم الإغلاق عن وسم الفتح.',
          en: 'True! The forward slash (/) distinguishes the closing tag from the opening tag.',
        },
      },
      {
        id: 'l1-q3',
        type: 'mcq',
        question: {
          ar: 'أيّ من التالي يُعد عنصر HTML مكتوباً بشكل سليم؟',
          en: 'Which of the following is a properly written HTML element?',
        },
        options: {
          ar: [
            '<p>مرحباً بكم</p>',
            '<p>مرحباً بكم<p>',
            '[p]مرحباً بكم[/p]',
            'p: مرحباً بكم',
          ],
          en: [
            '<p>Welcome everyone</p>',
            '<p>Welcome everyone<p>',
            '[p]Welcome everyone[/p]',
            'p: Welcome everyone',
          ],
        },
        correctIndex: 0,
        explanation: {
          ar: 'العنصر الصحيح يبدأ بـ <p> وينتهي بوسم الإغلاق </p>.',
          en: 'A valid paragraph element opens with <p> and closes with </p>.',
        },
      },
    ],
  },
  {
    id: 2,
    slug: 'your-first-html-document',
    moduleId: 1,
    title: {
      ar: 'مستند HTML الأول الخاص بك',
      en: 'Your first HTML document',
    },
    summary: {
      ar: 'تعرّف على الهيكل الرسمي الكامل لملف index.html: DOCTYPE، ووسم html، و head، و body.',
      en: 'Learn the standard anatomy of a complete index.html file: DOCTYPE, html, head, and body.',
    },
    durationMinutes: 10,
    xpReward: 60,
    tier: 'free',
    objectives: {
      ar: [
        'فهم وظيفة <!DOCTYPE html> في أعلى كل ملف.',
        'التمييز بين قسم <head> المخفي وقسم <body> المرئي.',
        'كتابة وسم <title> الذي يظهر في تبويب المتصفح.',
      ],
      en: [
        'Understand why <!DOCTYPE html> sits at the top of every webpage.',
        'Distinguish between metadata inside <head> and visible content inside <body>.',
        'Set a page title with the <title> element.',
      ],
    },
    explanation: {
      ar: [
        'عندما تنشئ ملف صفحة ويب حقيقياً (يُسمى عادةً index.html)، يحتاج المتصفح إلى خريطة ثابتة في البداية. السطر الأول هو <!DOCTYPE html>، وهو إعلان يخبر المتصفح أن الملف يستخدم الإصدار الحديث من HTML (HTML5).',
        'بعده يأتي وسم <html> الذي يضم الصفحة كلها، وينقسم داخله إلى جزأين أساسيين فقط: <head> و <body>.',
        'قسم <head> يحتوي على معلومات خلف الكواليس لا تظهر داخل الصفحة نفسها، مثل عنوان التبويب <title> وترميز الحروف العربية والإنجليزية UTF-8. أما قسم <body> فهو المسرح المرئي الذي يضم كل ما يراه المستخدم ويقرأه.',
      ],
      en: [
        'When creating a real webpage file (commonly named index.html), browsers expect a standard document frame. Line 1 is always <!DOCTYPE html>, telling the browser to use modern HTML5 rules.',
        'Inside the root <html> tag live two main sections: <head> and <body>.',
        'The <head> holds behind-the-scenes information such as the browser tab <title> and character encoding. The <body> contains everything actually rendered on screen for visitors.',
      ],
    },
    glossary: [
      {
        term: '<!DOCTYPE html>',
        meaning: {
          ar: 'إعلان يخبر المتصفح باستخدام معيار HTML5 الحديث.',
          en: 'Declaration instructing the browser to render using modern HTML5.',
        },
      },
      {
        term: '<head>',
        meaning: {
          ar: 'قسم البيانات الوصفية والعنوان وروابط التنسيق.',
          en: 'Section for page metadata, tab title, and stylesheet links.',
        },
      },
      {
        term: '<body>',
        meaning: {
          ar: 'المنطقة التي تحتوي على كل المحتوى الظاهر للمستخدم.',
          en: 'Container for all visible text, images, and interactive elements.',
        },
      },
    ],
    visualType: 'doc-structure',
    visualCaption: {
      ar: 'البنية الشجرية لمستند HTML: قسم head للإعدادات و body للمحتوى المرئي.',
      en: 'HTML document tree: <head> for configuration and <body> for visible content.',
    },
    exampleTitle: {
      ar: 'مستند HTML5 متكامل',
      en: 'A complete HTML5 document',
    },
    exampleHtml: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello from inside the body!</h1>
    <p>Everything here appears on screen.</p>
  </body>
</html>`,
    exampleCss: `body {
  background-color: #f8fafc;
}
h1 {
  color: #2563eb;
}`,
    exercise: {
      prompt: {
        ar: 'أكمل مستند HTML بحيث يحتوي على <head> وبداخله <title>، وقسم <body> وبداخله عنوان <h1> وفقرة <p>.',
        en: 'Complete the HTML document with a <head> containing a <title>, and a <body> containing an <h1> and a <p>.',
      },
      hint: {
        ar: 'ضع <title> داخل <head>، وضع <h1> و <p> داخل <body>.',
        en: 'Place <title> inside <head>, and place <h1> and <p> inside <body>.',
      },
      starterHtml: `<!DOCTYPE html>
<html>
  <head>
    <!-- Add a <title> tag here -->
  </head>
  <body>
    <!-- Add an <h1> and <p> here -->
  </body>
</html>`,
      starterCss: `h1 { color: #6d28d9; }`,
      expectedHtml: `<!DOCTYPE html>
<html>
  <head>
    <title>My Portfolio</title>
  </head>
  <body>
    <h1>My First Document</h1>
    <p>Built cleanly with HTML5 structure.</p>
  </body>
</html>`,
      expectedCss: `h1 { color: #6d28d9; }`,
      rules: [
        {
          type: 'html-selector',
          target: 'head title',
          description: {ar: 'وجود <title> داخل <head>', en: 'Includes <title> inside <head>'},
        },
        {
          type: 'html-selector',
          target: 'body h1',
          description: {ar: 'وجود عنوان <h1> داخل <body>', en: 'Includes <h1> inside <body>'},
        },
        {
          type: 'html-selector',
          target: 'body p',
          description: {ar: 'وجود فقرة <p> داخل <body>', en: 'Includes <p> inside <body>'},
        },
      ],
    },
    quiz: [
      {
        id: 'l2-q1',
        type: 'mcq',
        question: {
          ar: 'أين نضع المحتوى الذي نريد أن يراه الزائر داخل الصفحة؟',
          en: 'Where do you place content that visitors should see on the page?',
        },
        options: {
          ar: ['داخل وسم <body>', 'داخل وسم <head>', 'قبل <!DOCTYPE html>', 'داخل وسم <title>'],
          en: ['Inside <body>', 'Inside <head>', 'Before <!DOCTYPE html>', 'Inside <title>'],
        },
        correctIndex: 0,
        explanation: {
          ar: 'كل النصوص والصور الظاهرة توضع داخل وسم <body>.',
          en: 'All visible elements on the webpage belong inside <body>.',
        },
      },
      {
        id: 'l2-q2',
        type: 'mcq',
        question: {
          ar: 'أين يظهر النص المكتوب داخل وسم <title>؟',
          en: 'Where does the text inside <title> appear?',
        },
        options: {
          ar: [
            'في شريط تبويب المتصفح ونتائج البحث',
            'في أسفل الصفحة كتذييل',
            'داخل الزر الرئيسي',
            'لا يظهر في أي مكان',
          ],
          en: [
            'In the browser tab and search results',
            'At the bottom footer of the page',
            'Inside the main button',
            'Nowhere at all',
          ],
        },
        correctIndex: 0,
        explanation: {
          ar: 'وسم <title> يحدد اسم الصفحة في تبويب المتصفح وعند حفظها في المفضلة.',
          en: 'The <title> tag sets the webpage title shown in browser tabs and bookmarks.',
        },
      },
      {
        id: 'l2-q3',
        type: 'tf',
        question: {
          ar: 'يجب أن يظهر سطر <!DOCTYPE html> في بداية مستند HTML5.',
          en: '<!DOCTYPE html> should appear at the very top of an HTML5 document.',
        },
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {
          ar: 'نعم، هذا السطر يضمن تشغيل المتصفح بالوضع القياسي الحديث.',
          en: 'True — it tells browsers to parse the page in modern standards mode.',
        },
      },
    ],
  },
  {
    id: 3,
    slug: 'headings-and-paragraphs',
    moduleId: 1,
    title: {
      ar: 'العناوين والفقرات',
      en: 'Headings and paragraphs',
    },
    summary: {
      ar: 'تعلّم استخدام مستويات العناوين من h1 إلى h6 وتنسيق النصوص بالفقرات والسطور الفاصلة.',
      en: 'Master the six heading levels (h1–h6), readable paragraphs, and text hierarchy.',
    },
    durationMinutes: 10,
    xpReward: 60,
    tier: 'free',
    objectives: {
      ar: [
        'استخدام العناوين من <h1> (الأهم) حتى <h6> (الأصغر).',
        'فهم قاعدة استخدام <h1> واحد رئيسي في الصفحة لتحسين القراءة ومحركات البحث.',
        'تنظيم النصوص باستخدام <p> ووسوم التأكيد مثل <strong> و <em>.',
      ],
      en: [
        'Use heading levels from <h1> (most important) down to <h6>.',
        'Keep one clear <h1> per page for accessibility and SEO.',
        'Structure prose with <p>, <strong>, and <em>.',
      ],
    },
    explanation: {
      ar: [
        'تماماً مثل الكتب والمقالات، تحتاج صفحات الويب إلى تسلسل واضح للعناوين. توفر HTML ستة مستويات من العناوين: <h1> هو العنوان الأكبر والأهم للصفحة، يليه <h2> للأقسام الرئيسية، و <h3> للعناوين الفرعية، وهكذا حتى <h6>.',
        'نصيحة ذهبية للمبتدئين: لا تختر مستوى العنوان بناءً على حجم الخط فقط، بل بناءً على أهميته الهيكلية. يمكننا لاحقاً تغيير أي حجم خط باستخدام CSS.',
        'لفصل النصوص الطويلة نستخدم وسم الفقرة <p>، حيث يضيف المتصفح مسافة تلقائية بين كل فقرة وأخرى. وإذا أردنا إبراز كلمة مهمة نستخدم <strong> (عريض بمعنى قوي) أو <em> (مائل للتأكيد).',
      ],
      en: [
        'Just like chapters in a book, webpages rely on clear heading hierarchy. HTML gives us six levels: <h1> is the main page title, <h2> introduces major sections, <h3> marks subsections, down to <h6>.',
        'Important rule: choose heading levels for meaning and structure, not just font size—CSS will handle visual sizing later. Keep one primary <h1> per page so screen readers and search engines understand the topic immediately.',
        'Use <p> for paragraphs of text. To highlight key words semantically inside a sentence, wrap them in <strong> (important/bold) or <em> (emphasized/italic).',
      ],
    },
    glossary: [
      {
        term: '<h1> – <h6>',
        meaning: {
          ar: 'ستة مستويات متدرجة للعناوين من الأهم إلى الفرعي.',
          en: 'Six hierarchical heading levels from primary title to minor subheading.',
        },
      },
      {
        term: '<strong>',
        meaning: {
          ar: 'وسم لإبراز كلمة أو عبارة ذات أهمية عالية.',
          en: 'Marks text with strong importance, typically displayed bold.',
        },
      },
    ],
    visualType: 'headings-scale',
    visualCaption: {
      ar: 'التدرج الهرمي للعناوين من h1 الرئيسي إلى h3 الفرعي مع الفقرات.',
      en: 'Visual hierarchy scale from h1 down to h3 alongside paragraph copy.',
    },
    exampleTitle: {
      ar: 'تدرّج مقال تقني بسيط',
      en: 'Structured article with headings and emphasis',
    },
    exampleHtml: `<article>
  <h1>Getting Started with Web Design</h1>
  <p>Good structure makes every page <strong>easy to read</strong>.</p>
  <h2>Why Hierarchy Matters</h2>
  <p>Readers scan headings first before reading <em>full paragraphs</em>.</p>
  <h3>Quick Tip</h3>
  <p>Never skip from h1 straight to h4 without a reason.</p>
</article>`,
    exampleCss: `article {
  max-width: 520px;
}
h1 { color: #1e293b; }
h2 { color: #2563eb; margin-top: 20px; }
h3 { color: #0891b2; }`,
    exercise: {
      prompt: {
        ar: 'اكتب صفحة تعريفية صغيرة تحتوي على عنوان <h1>، وعنوان فرعي <h2>، وفقرتين <p> تحتوي إحداهما على كلمة مميزة بـ <strong>.',
        en: 'Create a mini article containing an <h1>, an <h2> subheading, and two <p> paragraphs with at least one <strong> word.',
      },
      hint: {
        ar: 'استخدم <strong>كلمة مهمة</strong> داخل إحدى الفقرتين.',
        en: 'Wrap an important phrase in <strong>...</strong> inside a paragraph.',
      },
      starterHtml: `<h1>Web Basics</h1>
<!-- Add an h2 and two paragraphs below -->
`,
      starterCss: `h1 { color: #6d28d9; }`,
      expectedHtml: `<h1>Web Basics</h1>
<p>Learning HTML takes <strong>consistent practice</strong>.</p>
<h2>Next Step</h2>
<p>Organize every page with clear subheadings.</p>`,
      expectedCss: `h1 { color: #6d28d9; }`,
      rules: [
        {type: 'html-selector', target: 'h1', description: {ar: 'وجود عنوان <h1>', en: 'Includes an <h1> heading'}},
        {type: 'html-selector', target: 'h2', description: {ar: 'وجود عنوان فرعي <h2>', en: 'Includes an <h2> subheading'}},
        {type: 'html-selector', target: 'p:nth-of-type(2)', description: {ar: 'وجود فقرتين <p> على الأقل', en: 'Includes at least two <p> paragraphs'}},
        {type: 'html-selector', target: 'strong', description: {ar: 'إبراز كلمة باستخدام <strong>', en: 'Highlights a word with <strong>'}},
      ],
    },
    quiz: [
      {
        id: 'l3-q1',
        type: 'mcq',
        question: {
          ar: 'أي وسم يُستخدم للعنوان الرئيسي الأكبر والأهم في الصفحة؟',
          en: 'Which tag represents the highest-level main heading on a page?',
        },
        options: {ar: ['<h1>', '<h6>', '<head>', '<p>'], en: ['<h1>', '<h6>', '<head>', '<p>']},
        correctIndex: 0,
        explanation: {
          ar: '<h1> هو أعلى مستوى في تدرج العناوين.',
          en: '<h1> is the top-level heading in HTML.',
        },
      },
      {
        id: 'l3-q2',
        type: 'tf',
        question: {
          ar: 'الوسم <strong> مخصص فقط لتكبير حجم العناوين الرئيسية.',
          en: 'The <strong> tag is meant to replace <h1> for main page headings.',
        },
        options: {ar: ['خطأ', 'صح'], en: ['False', 'True']},
        correctIndex: 0,
        explanation: {
          ar: 'خطأ! <strong> لإبراز كلمات مهمة داخل الجمل، أما العناوين فلها <h1>–<h6>.',
          en: 'False! <strong> emphasizes inline text inside prose, whereas headings use <h1>–<h6>.',
        },
      },
      {
        id: 'l3-q3',
        type: 'mcq',
        question: {
          ar: 'كم عدد مستويات العناوين القياسية في HTML؟',
          en: 'How many heading levels exist in HTML?',
        },
        options: {ar: ['6 مستويات', '3 مستويات', '4 مستويات', '10 مستويات'], en: ['6 levels', '3 levels', '4 levels', '10 levels']},
        correctIndex: 0,
        explanation: {
          ar: 'توجد 6 مستويات من <h1> إلى <h6>.',
          en: 'HTML defines 6 heading levels from <h1> through <h6>.',
        },
      },
    ],
  },
  {
    id: 4,
    slug: 'links-and-images',
    moduleId: 1,
    title: {
      ar: 'الروابط والصور',
      en: 'Links and images',
    },
    summary: {
      ar: 'تعلّم ربط الصفحات باستخدام وسم <a> وإضافة الصور مع النص البديل alt باستخدام وسم <img>.',
      en: 'Connect webpages with <a> anchor links and embed accessible images with <img> and alt text.',
    },
    durationMinutes: 12,
    xpReward: 70,
    tier: 'free',
    objectives: {
      ar: [
        'فهم مفهوم السمات (Attributes) مثل href و src و alt.',
        'إنشاء روابط نصية صحيحة باستخدام وسم <a>.',
        'إضافة صور آمنة وقابلة للقراءة من قارئات الشاشة عبر سمة alt.',
      ],
      en: [
        'Understand HTML attributes such as href, src, and alt.',
        'Create clickable hyperlinks using the <a> element.',
        'Embed images with <img> and write descriptive alt text.',
      ],
    },
    explanation: {
      ar: [
        'ما الذي يجعل الويب «شبكة» مترابطة؟ الروابط! ننشئ الرابط باستخدام وسم <a> (اختصار Anchor) ونضيف له سمة تُسمّى href تحدد الوجهة التي ينتقل إليها الزائر عند الضغط.',
        'السمة (Attribute) هي معلومة إضافية تُكتب داخل وسم الفتح بهذا الشكل: <a href="https://example.com">زيارة الموقع</a>.',
        'أما الصور فتُضاف بوسم مفرد لا يحتاج إلى وسم إغلاق وهو <img>. يحتاج هذا الوسم إلى سمتين مهمتين: src لتحديد مسار الصورة، و alt لكتابة وصف نصي يظهر إذا تعذّر تحميل الصورة ويساعد ذوي الإعاقة البصرية عبر قارئات الشاشة.',
      ],
      en: [
        'Hyperlinks are what connect documents into the World Wide Web. You create a link with the <a> (anchor) tag and give it an href attribute pointing to the destination URL.',
        'An attribute provides extra configuration inside an opening tag, written as name="value". For example: <a href="https://example.com">Visit Site</a>.',
        'Images use the self-closing <img> tag with two essential attributes: src (the image path or data URI) and alt (a concise description shown if the image cannot load and read aloud by screen readers).',
      ],
    },
    glossary: [
      {
        term: 'href',
        meaning: {
          ar: 'سمة تحدد عنوان الصفحة أو القسم الذي يشير إليه الرابط.',
          en: 'Hypertext Reference attribute specifying the link destination.',
        },
      },
      {
        term: 'alt',
        meaning: {
          ar: 'نص بديل يصف الصورة لإمكانية الوصول وعند فشل التحميل.',
          en: 'Alternative text describing an image for accessibility and fallback.',
        },
      },
    ],
    visualType: 'links-images',
    visualCaption: {
      ar: 'مقارنة بين عنصر الرابط <a href> وعنصر الصورة المفرد <img src alt>.',
      en: 'Comparing the <a href> link element and self-closing <img src alt> element.',
    },
    exampleTitle: {
      ar: 'بطاقة تحتوي على صورة مرسومة ورابط',
      en: 'Card with an inline SVG badge image and link',
    },
    exampleHtml: `<div class="profile">
  <img
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='24' fill='%236d28d9'/%3E%3Ctext x='48' y='58' text-anchor='middle' fill='white' font-size='32' font-family='sans-serif'%3ECP%3C/text%3E%3C/svg%3E"
    alt="CodePath geometric emblem"
  />
  <h2>CodePath Student</h2>
  <p>Explore our <a href="#projects">starter projects</a>.</p>
</div>`,
    exampleCss: `.profile {
  text-align: center;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
}
img {
  border-radius: 20px;
}
a {
  color: #2563eb;
  font-weight: 600;
}`,
    exercise: {
      prompt: {
        ar: 'أضف صورة <img> تحتوي على سمتي src و alt، وأضف رابطاً <a> يحتوي على سمة href.',
        en: 'Add an <img> tag with both src and alt attributes, plus an <a> link with an href attribute.',
      },
      hint: {
        ar: 'يمكنك استخدام قيمة data:image/svg+xml جاهزة أو رابط صورة https، ولا تنسَ alt="وصف الصورة".',
        en: 'Include src="..." and alt="..." on <img>, and href="..." on <a>.',
      },
      starterHtml: `<h2>My Favorite Resource</h2>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' rx='16' fill='%2306b6d4'/%3E%3C/svg%3E" alt="" />
<!-- Add an <a> link below -->
`,
      starterCss: `a { color: #6d28d9; font-weight: 600; }`,
      expectedHtml: `<h2>My Favorite Resource</h2>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' rx='16' fill='%2306b6d4'/%3E%3C/svg%3E" alt="Cyan square icon" />
<p><a href="https://developer.mozilla.org">Learn HTML Docs</a></p>`,
      expectedCss: `a { color: #6d28d9; font-weight: 600; }`,
      rules: [
        {type: 'html-attr', target: 'img', attr: 'src', description: {ar: 'صورة <img> تحتوي على src', en: '<img> has a non-empty src'}},
        {type: 'html-attr', target: 'img', attr: 'alt', description: {ar: 'كتابة نص بديل alt غير فارغ', en: '<img> has descriptive non-empty alt text'}},
        {type: 'html-attr', target: 'a', attr: 'href', description: {ar: 'رابط <a> يحتوي على href', en: '<a> has a non-empty href'}},
      ],
    },
    quiz: [
      {
        id: 'l4-q1',
        type: 'mcq',
        question: {
          ar: 'ما السمة التي تحدد وجهة الرابط في وسم <a>؟',
          en: 'Which attribute specifies the destination URL inside an <a> tag?',
        },
        options: {ar: ['href', 'src', 'alt', 'title'], en: ['href', 'src', 'alt', 'title']},
        correctIndex: 0,
        explanation: {
          ar: 'سمة href تحدد الرابط الوجهة لعنصر <a>.',
          en: 'The href attribute sets the destination of an anchor link.',
        },
      },
      {
        id: 'l4-q2',
        type: 'tf',
        question: {
          ar: 'يحتاج وسم الصورة <img> إلى وسم إغلاق منفصل مثل </img>.',
          en: 'The <img> tag requires a separate closing tag like </img>.',
        },
        options: {ar: ['خطأ', 'صح'], en: ['False', 'True']},
        correctIndex: 0,
        explanation: {
          ar: 'خطأ! <img> عنصر فارغ (Void Element) ولا يحتوي على محتوى نصي داخله.',
          en: 'False! <img> is a void element that closes itself without </img>.',
        },
      },
      {
        id: 'l4-q3',
        type: 'mcq',
        question: {
          ar: 'لماذا نكتب سمة alt داخل كل صورة؟',
          en: 'Why should every informative <img> include an alt attribute?',
        },
        options: {
          ar: [
            'لمساعدة قارئات الشاشة والظهور عند تعذّر تحميل الصورة',
            'لتسريع سرعة الإنترنت في الجهاز',
            'لتغيير لون خلفية الصفحة',
            'لتحويل الصورة إلى فيديو',
          ],
          en: [
            'For screen-reader accessibility and fallback if the image fails to load',
            'To increase Wi-Fi download speed',
            'To change the webpage background color',
            'To convert images into videos',
          ],
        },
        correctIndex: 0,
        explanation: {
          ar: 'النص البديل alt أساسي لإمكانية الوصول وفهم محتوى الصورة.',
          en: 'Alt text ensures screen readers and broken-image fallbacks convey meaning.',
        },
      },
    ],
  },
  {
    id: 5,
    slug: 'lists-and-basic-page-structure',
    moduleId: 1,
    title: {
      ar: 'القوائم وبنية الصفحة الأساسية',
      en: 'Lists and basic page structure',
    },
    summary: {
      ar: 'نظّم الخطوات والنقاط باستخدام القوائم غير المرتبة <ul> والمرتبة <ol> وعناصر <li>.',
      en: 'Organize steps and bullet points cleanly with unordered lists <ul>, ordered lists <ol>, and <li>.',
    },
    durationMinutes: 12,
    xpReward: 70,
    tier: 'free',
    objectives: {
      ar: [
        'التمييز بين القائمة النقطية <ul> والقائمة المرقّمة <ol>.',
        'استخدام عنصر <li> لكل بند داخل القائمة.',
        'الجمع بين العناوين والفقرات والقوائم في صفحة متماسكة.',
      ],
      en: [
        'Choose between bulleted <ul> and numbered <ol> lists.',
        'Place each item inside an <li> element.',
        'Combine headings, paragraphs, and lists into a structured page.',
      ],
    },
    explanation: {
      ar: [
        'عندما تعرض خطوات وصفة أو مهام يومية أو قائمة مهارات، لا تضعها في فقرة واحدة مزدحمة؛ استخدم القوائم! تقدم HTML نوعين أساسيين من القوائم.',
        'القائمة غير المرتبة <ul> (Unordered List) تُظهر نقاطاً بجانب العناصر وتُستخدم عندما لا يهم الترتيب، مثل قائمة المهارات. أما القائمة المرتبة <ol> (Ordered List) فتعرض أرقاماً (1، 2، 3) وتناسب الخطوات المتسلسلة.',
        'في كلا النوعين، يجب أن يكون كل عنصر داخل القائمة ملفوفاً بوسم <li> (List Item). لا تضع نصاً مباشرة داخل <ul> أو <ol> بدون <li>.',
      ],
      en: [
        'Whenever you display steps, ingredients, or features, avoid cramming them into one paragraph—use HTML lists instead.',
        'An unordered list <ul> displays bullet points when order does not matter (such as skills or hobbies). An ordered list <ol> displays numbers (1, 2, 3) when sequence matters (such as recipe steps).',
        'Inside both <ul> and <ol>, every individual item must sit inside an <li> (list item) tag.',
      ],
    },
    glossary: [
      {
        term: '<ul> / <ol>',
        meaning: {
          ar: 'حاوية القائمة غير المرتبة (نقطية) والقائمة المرتبة (مرقّمة).',
          en: 'Container tags for unordered (bulleted) and ordered (numbered) lists.',
        },
      },
      {
        term: '<li>',
        meaning: {
          ar: 'عنصر مفرد داخل القائمة.',
          en: 'Individual list item nested inside <ul> or <ol>.',
        },
      },
    ],
    visualType: 'lists-tree',
    visualCaption: {
      ar: 'مقارنة بنية <ul> النقطية مع <ol> المرقّمة واحتواء كل منهما على عناصر <li>.',
      en: 'Comparing bulleted <ul> and numbered <ol> structures wrapping <li> items.',
    },
    exampleTitle: {
      ar: 'قائمة أهداف وخطوات تعلّم',
      en: 'Study checklist and ordered steps',
    },
    exampleHtml: `<h2>Skills I Am Learning</h2>
<ul>
  <li>HTML Structure</li>
  <li>Readable Typography</li>
  <li>Clean Links</li>
</ul>

<h2>Daily Study Steps</h2>
<ol>
  <li>Read the lesson concept</li>
  <li>Test code in the playground</li>
  <li>Complete the quiz</li>
</ol>`,
    exampleCss: `h2 { color: #4c1d95; margin-top: 16px; }
ul, ol {
  background: #f8fafc;
  padding: 16px 32px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
li { margin-bottom: 6px; }`,
    exercise: {
      prompt: {
        ar: 'أنشئ عنواناً <h2>، ثم قائمة غير مرتبة <ul> تحتوي على 3 عناصر <li> على الأقل، وقائمة مرتبة <ol> بخطوتين <li>.',
        en: 'Create an <h2> heading, an unordered list <ul> with at least 3 <li> items, and an ordered list <ol> with at least 2 <li> steps.',
      },
      hint: {
        ar: 'تأكد من إغلاق كل <li> بـ </li> وإغلاق <ul> و <ol>.',
        en: 'Wrap every item in <li>...</li> inside <ul> and <ol>.',
      },
      starterHtml: `<h2>My Learning Goals</h2>
<ul>
  <li>HTML Basics</li>
  <!-- Add 2 more <li> items -->
</ul>
<!-- Add an <ol> list with 2 steps -->
`,
      starterCss: `li { color: #1e293b; }`,
      expectedHtml: `<h2>My Learning Goals</h2>
<ul>
  <li>HTML Basics</li>
  <li>CSS Styling</li>
  <li>Responsive Layout</li>
</ul>
<ol>
  <li>Practice daily</li>
  <li>Build a small project</li>
</ol>`,
      expectedCss: `li { color: #1e293b; }`,
      rules: [
        {type: 'html-selector', target: 'h2', description: {ar: 'وجود عنوان <h2>', en: 'Includes an <h2> heading'}},
        {type: 'html-selector', target: 'ul li:nth-of-type(3)', description: {ar: 'وجود 3 عناصر <li> داخل <ul>', en: '<ul> has at least 3 <li> items'}},
        {type: 'html-selector', target: 'ol li:nth-of-type(2)', description: {ar: 'وجود عنصرين <li> داخل <ol>', en: '<ol> has at least 2 <li> items'}},
      ],
    },
    quiz: [
      {
        id: 'l5-q1',
        type: 'mcq',
        question: {
          ar: 'أي قائمة نستخدم لعرض خطوات مرقمة بالترتيب (1، 2، 3)؟',
          en: 'Which list tag automatically displays numbered steps (1, 2, 3)?',
        },
        options: {ar: ['<ol>', '<ul>', '<li>', '<dl>'], en: ['<ol>', '<ul>', '<li>', '<dl>']},
        correctIndex: 0,
        explanation: {
          ar: '<ol> تعني Ordered List وتُظهر ترقيماً تسلسلياً.',
          en: '<ol> stands for Ordered List and renders numbers automatically.',
        },
      },
      {
        id: 'l5-q2',
        type: 'tf',
        question: {
          ar: 'يُستخدم الوسم <li> داخل كل من <ul> و <ol>.',
          en: 'The <li> tag is used inside both <ul> and <ol>.',
        },
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {
          ar: 'نعم، <li> يمثل العنصر المفرد في كلا النوعين.',
          en: 'True! Every list item inside either <ul> or <ol> uses <li>.',
        },
      },
      {
        id: 'l5-q3',
        type: 'mcq',
        question: {
          ar: 'ما الوسم الأنسب لقائمة مكونات لا يشترط فيها الترتيب؟',
          en: 'Which tag is best for an unranked list of ingredients?',
        },
        options: {ar: ['<ul>', '<ol>', '<h1>', '<p>'], en: ['<ul>', '<ol>', '<h1>', '<p>']},
        correctIndex: 0,
        explanation: {
          ar: 'القائمة غير المرتبة <ul> مناسبة عندما لا يهم الترتيب الرقمي.',
          en: 'Unordered lists <ul> are ideal when numeric sequence is unnecessary.',
        },
      },
    ],
  },
];
