import {Lesson} from '../types';

export const MODULE_3_LESSONS: Lesson[] = [
  {
    id: 11,
    slug: 'what-is-css',
    moduleId: 3,
    title: {
      ar: 'ما هي لغة CSS؟',
      en: 'What is CSS?',
    },
    summary: {
      ar: 'اكتشف كيف تتحكم لغة CSS في مظهر الصفحات باستخدام المحددات (Selectors) والخصائص والقيم.',
      en: 'Discover how CSS styles webpages using selectors, properties, and values.',
    },
    durationMinutes: 10,
    xpReward: 70,
    tier: 'free',
    objectives: {
      ar: [
        'فهم العلاقة بين HTML (البنية) و CSS (المظهر).',
        'قراءة قاعدة CSS مكونة من محدد وخاصية وقيمة.',
        'استخدام محدد الوسم (h1) ومحدد الصنف (.card) لتنسيق العناصر.',
      ],
      en: [
        'Understand how CSS pairs with HTML to control presentation.',
        'Read a CSS rule made of selector, property, and value.',
        'Target elements using tag selectors (h1) and class selectors (.card).',
      ],
    },
    explanation: {
      ar: [
        'لغة CSS (اختصار لـ Cascading Style Sheets) هي اللغة المسؤولة عن تحويل صفحة HTML البيضاء البسيطة إلى تصميم جذاب بألوان متناسقة وخطوط مريحة وتخطيط منظم.',
        'تتكون كل قاعدة CSS من ثلاثة أجزاء: المحدّد (Selector) الذي يختار العنصر مثل h1 أو .card، والخاصية (Property) مثل color، والقيمة (Value) مثل #2563eb.',
        'نضع الخصائص داخل قوسين معقوفين { }، ونفصل بين الخاصية والقيمة بنقطتين (:)، وننهي كل سطر بفاصلة منقوطة (;). نسيان الفاصلة المنقوطة سبب شائع لتوقف التنسيق.',
      ],
      en: [
        'CSS (Cascading Style Sheets) transforms plain HTML documents into visually appealing interfaces with color, typography, spacing, and layout.',
        'Every CSS rule has three parts: a Selector (which HTML elements to style, like h1 or .card), a Property (what aspect to change, like color), and a Value (like #2563eb).',
        'Properties sit inside curly braces { }. Always separate property and value with a colon (:) and end every declaration with a semicolon (;).',
      ],
    },
    glossary: [
      {term: 'Selector / المحدّد', meaning: {ar: 'الجزء الذي يحدد عنصر HTML المراد تلوينه أو تنسيقه.', en: 'Pattern targeting which HTML elements receive styles.'}},
      {term: 'Class (.name)', meaning: {ar: 'صنف قابل لإعادة الاستخدام يبدأ بنقطة في CSS.', en: 'Reusable style hook prefixed with a dot in CSS.'}},
    ],
    visualType: 'css-rule-anatomy',
    visualCaption: {
      ar: 'تشريح قاعدة CSS: المحدّد، القوسان، الخاصية، القيمة، والفاصلة المنقوطة.',
      en: 'CSS rule anatomy: selector, braces, property, value, and semicolon.',
    },
    exampleTitle: {
      ar: 'تنسيق عنوان وفقرة باستخدام CSS',
      en: 'Styling headings and class elements in CSS',
    },
    exampleHtml: `<h1 class="hero-title">Hello CSS!</h1>
<p class="lead">One CSS rule can style many elements at once.</p>`,
    exampleCss: `.hero-title {
  color: #6d28d9;
  font-size: 28px;
}
.lead {
  color: #475569;
}`,
    exercise: {
      prompt: {
        ar: 'نسّق العنوان h1 بلون مفضل باستخدام color، ونسّق الصنف .highlight في CSS بتغيير لونه أو حجم خطه.',
        en: 'Style the h1 element with a color property, and add a .highlight rule in CSS setting color or font-size.',
      },
      hint: {
        ar: 'تذكر وضع النقطة قبل اسم الصنف في CSS مثل .highlight { ... }.',
        en: 'Prefix class selectors with a dot in CSS: .highlight { ... }.',
      },
      starterHtml: `<h1>Welcome to CSS</h1>
<p class="highlight">Cascading Style Sheets bring pages to life.</p>`,
      starterCss: `h1 {
  /* Add color here */
}
/* Add .highlight rule below */
`,
      expectedHtml: `<h1>Welcome to CSS</h1>
<p class="highlight">Cascading Style Sheets bring pages to life.</p>`,
      expectedCss: `h1 {
  color: #2563eb;
}
.highlight {
  color: #6d28d9;
  font-size: 18px;
}`,
      rules: [
        {type: 'css-pattern', target: 'h1\\s*\\{[^}]*color\\s*:', description: {ar: 'تحديد color للعنوان h1', en: 'Sets color on h1'}},
        {type: 'css-pattern', target: '\\.highlight\\s*\\{', description: {ar: 'إضافة قاعدة للصنف .highlight', en: 'Defines a .highlight CSS rule'}},
      ],
    },
    quiz: [
      {
        id: 'l11-q1',
        type: 'mcq',
        question: {ar: 'ما العلامة التي نبدأ بها محدد الصنف (Class) في CSS؟', en: 'Which symbol prefixes a class selector in CSS?'},
        options: {ar: ['النقطة (.)', 'علامة الشباك (#)', 'علامة النجمة (*)', 'الشرطة (/)'], en: ['Dot (.)', 'Hash (#)', 'Asterisk (*)', 'Slash (/)']},
        correctIndex: 0,
        explanation: {ar: 'محدد الصنف يبدأ بنقطة مثل .card بينما # للمعرف id.', en: 'Class selectors start with a dot (e.g. .card).'},
      },
      {
        id: 'l11-q2',
        type: 'tf',
        question: {ar: 'يجب إنهاء كل تصريح خاصية في CSS بفاصلة منقوطة (;).', en: 'Each CSS property declaration should end with a semicolon (;).'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح! الفاصلة المنقوطة تفصل بين الخصائص وتمنع الأخطاء.', en: 'True! Semicolons separate declarations cleanly.'},
      },
      {
        id: 'l11-q3',
        type: 'mcq',
        question: {ar: 'في القاعدة p { color: blue; } ما هي الخاصية؟', en: 'In the rule p { color: blue; }, what is "color"?'},
        options: {ar: ['الخاصية (Property)', 'المحدّد (Selector)', 'القيمة (Value)', 'الوسم (Tag)'], en: ['Property', 'Selector', 'Value', 'HTML tag']},
        correctIndex: 0,
        explanation: {ar: 'p هو المحدّد، color هي الخاصية، و blue هي القيمة.', en: 'p is the selector, color is the property, and blue is the value.'},
      },
    ],
  },
  {
    id: 12,
    slug: 'colors-and-backgrounds',
    moduleId: 3,
    title: {
      ar: 'الألوان والخلفيات',
      en: 'Colors and backgrounds',
    },
    summary: {
      ar: 'تعلّم كتابة الألوان بالأسماء ورموز HEX، وتنسيق الخلفيات والتدرجات مع الحفاظ على تباين مريح للعين.',
      en: 'Use color names, HEX codes, background-color, and subtle gradients while maintaining readable contrast.',
    },
    durationMinutes: 12,
    xpReward: 80,
    tier: 'free',
    objectives: {
      ar: [
        'التفريق بين color (لون النص) و background-color (لون الخلفية).',
        'استخدام رموز HEX مثل #6d28d9 و #0f172a.',
        'إضافة تدرج لوني خفيف باستخدام linear-gradient مع تباين واضح.',
      ],
      en: [
        'Distinguish color (text) from background-color (surface).',
        'Write hexadecimal colors such as #6d28d9 and #f8fafc.',
        'Create smooth gradients with linear-gradient and strong text contrast.',
      ],
    },
    explanation: {
      ar: [
        'تمنح الألوان شخصيّةً للموقع، لكنها تحتاج إلى توازن ووضوح. في CSS نستخدم خاصية color لتلوين النص، و background-color لتلوين خلفية العنصر.',
        'يمكن كتابة الألوان بأسماء بسيطة مثل navy، أو بدقة احترافية باستخدام رموز HEX المكونة من علامة # وستة أحرف وأرقام مثل #2563eb (الأزرق الكهربائي) أو #f8fafc (أبيض ناعم).',
        'كما يمكنك صناعة خلفية متدرجة عبر background: linear-gradient(135deg, #6d28d9, #2563eb). تذكّر دائماً: النص الفاتح على خلفية داكنة أو الداكن على خلفية فاتحة يضمنان سهولة القراءة.',
      ],
      en: [
        'Color sets mood and hierarchy. In CSS, color changes text foreground color, while background-color paints the surface behind it.',
        'You can write named colors like slateblue, or exact HEX codes starting with # (for example #2563eb for electric blue or #0f172a for deep navy).',
        'To blend colors smoothly, use background: linear-gradient(135deg, #6d28d9, #2563eb). Always verify strong contrast between text and background.',
      ],
    },
    glossary: [
      {term: 'HEX Code', meaning: {ar: 'تمثيل رقمي للون يبدأ بـ # مثل #06b6d4.', en: 'Six-digit hexadecimal color notation starting with #.'}},
      {term: 'Contrast / التباين', meaning: {ar: 'فرق السطوع بين النص والخلفية لضمان سهولة القراءة.', en: 'Luminance difference between text and background for legibility.'}},
    ],
    visualType: 'color-palette',
    visualCaption: {
      ar: 'مقارنة رموز الألوان ودرجات التباين المقروءة بين النص والخلفية.',
      en: 'Color swatch HEX values paired with high-contrast text combinations.',
    },
    exampleTitle: {
      ar: 'بطاقة بتدرج لوني وتباين واضح',
      en: 'High-contrast gradient banner card',
    },
    exampleHtml: `<section class="banner">
  <h2>Learn Color Balance</h2>
  <p>White text stays crisp on deep purple and blue backgrounds.</p>
</section>`,
    exampleCss: `.banner {
  background: linear-gradient(135deg, #6d28d9, #2563eb);
  color: #ffffff;
  padding: 24px;
  border-radius: 16px;
}`,
    exercise: {
      prompt: {
        ar: 'غيّر خلفية البطاقة .box باستخدام background-color (أو background) واجعل لون النص color متبايناً وواضحاً.',
        en: 'Style .box with a background-color (or background) and a contrasting text color.',
      },
      hint: {
        ar: 'جرب خلفية داكنة #0f172a مع نص فاتح #f8fafc.',
        en: 'Try a dark background like #0f172a with light text #f8fafc.',
      },
      starterHtml: `<div class="box">
  <h2>Color Contrast Lab</h2>
  <p>Make sure this text is easy to read!</p>
</div>`,
      starterCss: `.box {
  padding: 20px;
  border-radius: 12px;
  /* Add background-color and color */
}`,
      expectedHtml: `<div class="box">
  <h2>Color Contrast Lab</h2>
  <p>Make sure this text is easy to read!</p>
</div>`,
      expectedCss: `.box {
  padding: 20px;
  border-radius: 12px;
  background-color: #0f172a;
  color: #f8fafc;
}`,
      rules: [
        {type: 'css-pattern', target: 'background(-color)?\\s*:', description: {ar: 'ضبط background-color أو background', en: 'Sets background-color or background'}},
        {type: 'css-pattern', target: '(^|[^-])color\\s*:', description: {ar: 'ضبط لون النص color', en: 'Sets text color'}},
      ],
    },
    quiz: [
      {
        id: 'l12-q1',
        type: 'mcq',
        question: {ar: 'أي خاصية تغيّر لون النص نفسه؟', en: 'Which property changes the color of text?'},
        options: {ar: ['color', 'background-color', 'font-color', 'text-bg'], en: ['color', 'background-color', 'font-color', 'text-bg']},
        correctIndex: 0,
        explanation: {ar: 'خاصية color تتحكم بلون النص، ولا توجد خاصية اسمها font-color.', en: 'The color property controls text foreground color.'},
      },
      {
        id: 'l12-q2',
        type: 'tf',
        question: {ar: 'رمز اللون HEX يبدأ دائماً بعلامة الشباك #.', en: 'HEX color codes always start with a # symbol.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح، مثل #ffffff للأبيض و #000000 للأسود.', en: 'True, e.g. #ffffff or #6d28d9.'},
      },
      {
        id: 'l12-q3',
        type: 'mcq',
        question: {ar: 'لماذا نهتم بالتباين بين لون النص والخلفية؟', en: 'Why does contrast between text and background matter?'},
        options: {
          ar: ['ليكون النص واضحاً ومقروءاً لجميع المستخدمين', 'لزيادة حجم الملف', 'لإخفاء العناوين', 'لتشغيل الفيديو'],
          en: ['So text stays readable and accessible for everyone', 'To make files larger', 'To hide headings', 'To play audio'],
        },
        correctIndex: 0,
        explanation: {ar: 'التباين الجيد يريح العين ويدعم إمكانية الوصول.', en: 'Strong contrast improves readability and accessibility.'},
      },
    ],
  },
  {
    id: 13,
    slug: 'fonts-and-text-styling',
    moduleId: 3,
    title: {
      ar: 'الخطوط وتنسيق النصوص',
      en: 'Fonts and text styling',
    },
    summary: {
      ar: 'تحكّم في نوع الخط وحجمه وسماكته وارتفاع السطر ومحاذاة النص لإخراج مقروء واحترافي.',
      en: 'Control font-family, font-size, font-weight, line-height, and text-align for readable typography.',
    },
    durationMinutes: 12,
    xpReward: 80,
    tier: 'free',
    objectives: {
      ar: [
        'اختيار عائلة خطوط واضحة عبر font-family.',
        'ضبط المقاسات عبر font-size وتباعد الأسطر بـ line-height.',
        'التحكم في سماكة الخط font-weight ومحاذاة النص text-align.',
      ],
      en: [
        'Specify fallback font stacks with font-family.',
        'Improve readability using font-size and line-height.',
        'Adjust font-weight and text-align cleanly.',
      ],
    },
    explanation: {
      ar: [
        'يشكل النص نحو 80% من محتوى الويب، لذا فإن تنسيق الخطوط يصنع الفارق الأكبر في جودة أي صفحة. خاصية font-family تسمح لك بتحديد نوع الخط مع وضع خط بديل مثل sans-serif في النهاية.',
        'خاصية font-size تحدد حجم الحروف (مثل 16px للفقرات العادية و 28px للعناوين). ولجعل القراءة مريحة للعين، أضف line-height: 1.6 لتوسيع المسافة بين الأسطر.',
        'لإبراز العناوين استخدم font-weight: 700، ويمكنك توسيط العنوان عبر text-align: center بينما تترك الفقرات الطويلة بمحاذاة طبيعية.',
      ],
      en: [
        'Text makes up most of the web, so thoughtful typography dramatically elevates your design. Use font-family with a generic fallback like sans-serif.',
        'Use font-size (such as 16px for body text and 28px for titles) and set line-height: 1.6 so lines have breathing room.',
        'Control boldness with font-weight (400 normal, 700 bold) and alignment with text-align (left, right, or center).',
      ],
    },
    glossary: [
      {term: 'line-height', meaning: {ar: 'المسافة الرأسية بين أسطر الفقرة الواحدة.', en: 'Vertical spacing between lines of text.'}},
      {term: 'font-weight', meaning: {ar: 'سماكة الحروف من الخفيف (400) إلى العريض (700).', en: 'Thickness of font characters (400 regular, 700 bold).'}},
    ],
    visualType: 'typography-scale',
    visualCaption: {
      ar: 'تأثير font-size و font-weight و line-height على وضوح القراءة.',
      en: 'How font-size, font-weight, and line-height shape visual clarity.',
    },
    exampleTitle: {
      ar: 'مقال منسّق بتوازن خطي مريح',
      en: 'Balanced article typography example',
    },
    exampleHtml: `<article class="story">
  <h1>Readable Typography</h1>
  <p>Giving text comfortable size and generous line-height keeps readers focused without eye strain.</p>
</article>`,
    exampleCss: `.story {
  font-family: system-ui, sans-serif;
}
.story h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
}
.story p {
  font-size: 16px;
  line-height: 1.7;
  color: #475569;
}`,
    exercise: {
      prompt: {
        ar: 'نسّق الفقرة p بوضع font-size و line-height: 1.6، ووسّط العنوان h1 عبر text-align: center.',
        en: 'Style the p element with font-size and line-height, and center the h1 with text-align: center.',
      },
      hint: {
        ar: 'استخدم قيماً مثل font-size: 16px; و line-height: 1.6;.',
        en: 'Try font-size: 16px; and line-height: 1.6; inside p { ... }.',
      },
      starterHtml: `<h1>Typography Practice</h1>
<p>Good spacing between lines makes every paragraph feel calm and easy to read.</p>`,
      starterCss: `h1 {
  /* Center align */
}
p {
  /* Set font-size and line-height */
}`,
      expectedHtml: `<h1>Typography Practice</h1>
<p>Good spacing between lines makes every paragraph feel calm and easy to read.</p>`,
      expectedCss: `h1 {
  text-align: center;
  font-weight: 700;
}
p {
  font-size: 16px;
  line-height: 1.6;
}`,
      rules: [
        {type: 'css-pattern', target: 'text-align\\s*:\\s*center', description: {ar: 'توسيط النص بـ text-align: center', en: 'Applies text-align: center'}},
        {type: 'css-pattern', target: 'font-size\\s*:', description: {ar: 'تحديد حجم الخط font-size', en: 'Sets font-size'}},
        {type: 'css-pattern', target: 'line-height\\s*:', description: {ar: 'تحديد ارتفاع السطر line-height', en: 'Sets line-height'}},
      ],
    },
    quiz: [
      {
        id: 'l13-q1',
        type: 'mcq',
        question: {ar: 'ما الخاصية المسؤولة عن توسيع المسافة بين أسطر الفقرة؟', en: 'Which CSS property increases vertical space between lines of text?'},
        options: {ar: ['line-height', 'font-weight', 'text-align', 'color'], en: ['line-height', 'font-weight', 'text-align', 'color']},
        correctIndex: 0,
        explanation: {ar: 'line-height تضبط المسافة العمودية بين كل سطر والذي يليه.', en: 'line-height controls vertical spacing between lines.'},
      },
      {
        id: 'l13-q2',
        type: 'tf',
        question: {ar: 'القيمة 700 في font-weight تجعل النص عريضاً (Bold).', en: 'A font-weight value of 700 makes text bold.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح، 400 عادي و 700 عريض.', en: 'True — 400 is normal and 700 is bold.'},
      },
      {
        id: 'l13-q3',
        type: 'mcq',
        question: {ar: 'أي قيمة لـ text-align تضع العنوان في منتصف السطر؟', en: 'Which value of text-align centers text horizontally?'},
        options: {ar: ['center', 'middle', 'justify', 'top'], en: ['center', 'middle', 'justify', 'top']},
        correctIndex: 0,
        explanation: {ar: 'القيمة الصحيحة هي center (وليس middle).', en: 'Use text-align: center (not middle).'},
      },
    ],
  },
  {
    id: 14,
    slug: 'margins-and-padding',
    moduleId: 3,
    title: {
      ar: 'الهوامش والحشو (Margins & Padding)',
      en: 'Margins and padding',
    },
    summary: {
      ar: 'أتقن التفريق بين المسافة الداخلية (padding) والمسافة الخارجية (margin) لتمنح عناصر الصفحة متنفساً.',
      en: 'Master the difference between inner breathing room (padding) and outer spacing (margin).',
    },
    durationMinutes: 14,
    xpReward: 90,
    tier: 'free',
    objectives: {
      ar: [
        'التفريق بدقة بين padding داخل العنصر و margin خارج العنصر.',
        'استخدام الاختصارات مثل padding: 16px 24px (رأسياً وأفقياً).',
        'توسيط صندوق محدد العرض باستخدام margin: 0 auto.',
      ],
      en: [
        'Distinguish inner padding from outer margin visually.',
        'Use shorthand values like padding: 16px 24px.',
        'Center fixed-width blocks horizontally with margin: 0 auto.',
      ],
    },
    explanation: {
      ar: [
        'الفرق بين margin و padding من أهم مفاهيم CSS. تخيّل لوحة فنية داخل إطار: المسافة بين اللوحة والإطار هي padding (حشو داخلي)، والمسافة بين الإطار واللوحة المجاورة على الحائط هي margin (هامش خارجي).',
        'زيادة padding توسّع مساحة الخلفية حول النص لكي لا يلتصق بحواف البطاقة. أما زيادة margin فتدفع العناصر المجاورة بعيداً دون تغيير حجم البطاقة نفسها.',
        'حيلة شهيرة جداً: إذا كان لدى البطاقة عرض محدد مثل max-width: 400px، فإن كتابة margin: 0 auto توّسطها تماماً في منتصف الشاشة!',
      ],
      en: [
        'Imagine a framed painting on a wall: the space between the artwork and its frame border is padding (inside), while the space separating that frame from another painting on the wall is margin (outside).',
        'Adding padding expands the clickable, colored area inside a card or button. Adding margin pushes neighboring elements away.',
        'Classic CSS trick: whenever a block has a max-width, setting margin: 0 auto centers it horizontally on the page.',
      ],
    },
    glossary: [
      {term: 'padding', meaning: {ar: 'المسافة الداخلية بين المحتوى وحدود العنصر.', en: 'Inner space between content and the element border.'}},
      {term: 'margin', meaning: {ar: 'المسافة الخارجية الفاصلة بين العنصر وجيرانه.', en: 'Outer space separating an element from neighbors.'}},
    ],
    visualType: 'spacing-margin-padding',
    visualCaption: {
      ar: 'توضيح padding بالداخل حول النص و margin بالخارج بين البطاقتين.',
      en: 'Padding creates inner cushion; margin separates adjacent cards outside.',
    },
    exampleTitle: {
      ar: 'بطاقتان بمسافات داخلية وخارجية متزنة',
      en: 'Two cards with balanced padding and margin',
    },
    exampleHtml: `<div class="panel">First Card with breathing room</div>
<div class="panel">Second Card separated by margin</div>`,
    exampleCss: `.panel {
  max-width: 360px;
  margin: 14px auto;
  padding: 18px 22px;
  background: #eff6ff;
  border: 1px solid #93c5fd;
  border-radius: 12px;
}`,
    exercise: {
      prompt: {
        ar: 'أضف لبطاقات .card حشواً داخلياً padding وهامشاً خارجياً margin للفصل بين البطاقتين.',
        en: 'Give .card elements inner padding and outer margin so they breathe and stay separated.',
      },
      hint: {
        ar: 'اكتب padding: 16px; و margin-bottom: 16px; أو margin: 16px auto;.',
        en: 'Add padding: 16px; and margin: 16px auto; inside .card.',
      },
      starterHtml: `<div class="card">Card One</div>
<div class="card">Card Two</div>`,
      starterCss: `.card {
  background: #ede9fe;
  border: 1px solid #c4b5fd;
  /* Add padding and margin */
}`,
      expectedHtml: `<div class="card">Card One</div>
<div class="card">Card Two</div>`,
      expectedCss: `.card {
  background: #ede9fe;
  border: 1px solid #c4b5fd;
  padding: 18px;
  margin: 14px 0;
}`,
      rules: [
        {type: 'css-pattern', target: 'padding\\s*:', description: {ar: 'إضافة مسافة داخلية padding', en: 'Sets inner padding'}},
        {type: 'css-pattern', target: 'margin(-bottom|-top)?\\s*:', description: {ar: 'إضافة هامش خارجي margin', en: 'Sets outer margin'}},
      ],
    },
    quiz: [
      {
        id: 'l14-q1',
        type: 'mcq',
        question: {ar: 'أي خاصية تبعد النص عن حافة الزر الداخلية؟', en: 'Which property adds space inside a button between text and border?'},
        options: {ar: ['padding', 'margin', 'border', 'display'], en: ['padding', 'margin', 'border', 'display']},
        correctIndex: 0,
        explanation: {ar: 'padding هي المسافة الداخلية داخل الحدود.', en: 'padding creates space inside the element border.'},
      },
      {
        id: 'l14-q2',
        type: 'tf',
        question: {ar: 'خاصية margin تضيف مساحة خارج حدود العنصر لتباعده عن العناصر الأخرى.', en: 'margin creates space outside an element’s border.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح تماماً.', en: 'True! margin controls outer spacing.'},
      },
      {
        id: 'l14-q3',
        type: 'mcq',
        question: {ar: 'ماذا تفعل القيمة margin: 0 auto; لعنصر له عرض محدد؟', en: 'What does margin: 0 auto; do to a block element with a width?'},
        options: {ar: ['توسّطه أفقياً في الصفحة', 'تحذف خلفيته', 'تجعل الخط مائلاً', 'تكبّر ارتفاعه'], en: ['Centers it horizontally', 'Removes background', 'Italicizes text', 'Doubles height']},
        correctIndex: 0,
        explanation: {ar: 'auto توزع الهامشين الأيمن والأيسر بالتساوي فيتوسط العنصر.', en: 'auto splits left/right space equally to center the box.'},
      },
    ],
  },
  {
    id: 15,
    slug: 'borders-shadows-and-rounded-corners',
    moduleId: 3,
    title: {
      ar: 'الحدود والظلال والزوايا الدائرية',
      en: 'Borders, shadows and rounded corners',
    },
    summary: {
      ar: 'اصنع بطاقات حديثة وجذابة باستخدام border و border-radius و box-shadow.',
      en: 'Craft modern UI cards using border, border-radius, and soft box-shadow elevation.',
    },
    durationMinutes: 14,
    xpReward: 90,
    tier: 'free',
    objectives: {
      ar: [
        'رسم حدود بألوان وسماكات متنوعة عبر border.',
        'تنعيم زوايا البطاقات والأزرار عبر border-radius.',
        'إضافة ظل ناعم يرفع البطاقة عن الخلفية بـ box-shadow.',
      ],
      en: [
        'Style crisp borders with width, style, and color.',
        'Soften corners using border-radius (from subtle cards to circles).',
        'Apply subtle depth using box-shadow without harsh dark edges.',
      ],
    },
    explanation: {
      ar: [
        'البطاقات (Cards) هي حجر الأساس في الواجهات الحديثة. لتصميم بطاقة أنيقة، ابدأ بخاصية border: 1px solid #e2e8f0 حيث تحدد السماكة (1px) والنمط (solid) واللون.',
        'لإزالة الزوايا الحادة وإضفاء مظهر ودود، نستخدم border-radius: 16px. وإذا طبّقت border-radius: 50% على مربع متساوي العرض والارتفاع، تحصل على دائرة مثالية لصورة الملف الشخصي!',
        'أخيراً، خاصية box-shadow تضيف ظلاً خفيفاً مثل box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08). القيمتان الأوليان للإزاحة، والثالثة للضبابية (Blur)، والأخيرة لون شفاف هادئ.',
      ],
      en: [
        'Modern interfaces rely heavily on cards. Start with a hairline border: 1px solid #e2e8f0—combining thickness, style (solid, dashed), and color.',
        'Soften sharp corners with border-radius: 16px. Setting border-radius: 50% on a square turns it into a crisp circle for avatars.',
        'Add gentle elevation with box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08). Soft, low-opacity shadows look much cleaner than heavy black shadows.',
      ],
    },
    glossary: [
      {term: 'border-radius', meaning: {ar: 'درجة انحناء زوايا العنصر.', en: 'Controls how rounded an element’s corners appear.'}},
      {term: 'box-shadow', meaning: {ar: 'ظل ناعم يبرز العنصر فوق الخلفية.', en: 'Adds drop shadow depth behind a box.'}},
    ],
    visualType: 'borders-shadows',
    visualCaption: {
      ar: 'مقارنة بين صندوق حاد الزوايا وبطاقة حديثة بحدود وزوايا دائرية وظل ناعم.',
      en: 'Comparing sharp edges versus rounded border-radius and soft box-shadow.',
    },
    exampleTitle: {
      ar: 'بطاقة منتج أو درس بظل ناعم',
      en: 'Elevated card with rounded corners',
    },
    exampleHtml: `<article class="feature-card">
  <h3>Clean Card Design</h3>
  <p>Subtle hairline border + 16px radius + soft shadow.</p>
</article>`,
    exampleCss: `.feature-card {
  max-width: 320px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}`,
    exercise: {
      prompt: {
        ar: 'صمّم البطاقة .badge-box بإضافة border و border-radius و box-shadow في CSS.',
        en: 'Style .badge-box with a border, rounded border-radius, and a box-shadow.',
      },
      hint: {
        ar: 'جرب border: 1px solid #cbd5e1; border-radius: 16px; box-shadow: 0 6px 18px rgba(0,0,0,0.08);',
        en: 'Add border, border-radius, and box-shadow rules inside .badge-box.',
      },
      starterHtml: `<div class="badge-box">
  <h3>Achievement Unlocked</h3>
  <p>CSS Stylist</p>
</div>`,
      starterCss: `.badge-box {
  padding: 20px;
  background: #ffffff;
  /* Add border, border-radius, and box-shadow */
}`,
      expectedHtml: `<div class="badge-box">
  <h3>Achievement Unlocked</h3>
  <p>CSS Stylist</p>
</div>`,
      expectedCss: `.badge-box {
  padding: 20px;
  background: #ffffff;
  border: 1px solid #c4b5fd;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(109, 40, 217, 0.12);
}`,
      rules: [
        {type: 'css-pattern', target: 'border\\s*:', description: {ar: 'إضافة حد border', en: 'Defines a border'}},
        {type: 'css-pattern', target: 'border-radius\\s*:', description: {ar: 'إضافة زوايا دائرية border-radius', en: 'Sets border-radius'}},
        {type: 'css-pattern', target: 'box-shadow\\s*:', description: {ar: 'إضافة ظل box-shadow', en: 'Applies box-shadow'}},
      ],
    },
    quiz: [
      {
        id: 'l15-q1',
        type: 'mcq',
        question: {ar: 'أي قيمة لـ border-radius تحوّل المربع المتساوي إلى دائرة؟', en: 'Which border-radius value turns a square into a circle?'},
        options: {ar: ['50%', '4px', '0px', '100deg'], en: ['50%', '4px', '0px', '100deg']},
        correctIndex: 0,
        explanation: {ar: 'border-radius: 50% يجعل الزوايا دائرية بالكامل على مربع.', en: '50% rounds all four corners into a full circle on a square.'},
      },
      {
        id: 'l15-q2',
        type: 'tf',
        question: {ar: 'تحتاج خاصية border إلى سماكة ونمط ولون مثل 1px solid #ccc.', en: 'A border shorthand typically specifies width, style, and color.'},
        options: {ar: ['صح', 'خطأ'], en: ['True', 'False']},
        correctIndex: 0,
        explanation: {ar: 'صحيح، وإذا غاب النمط (مثل solid) فلن يظهر الحد.', en: 'True! Without a border style like solid, no border draws.'},
      },
      {
        id: 'l15-q3',
        type: 'mcq',
        question: {ar: 'ما الخاصية المستخدمة لإضافة ظل خلف البطاقة؟', en: 'Which property adds a drop shadow behind a card?'},
        options: {ar: ['box-shadow', 'text-shadow', 'border-shadow', 'card-depth'], en: ['box-shadow', 'text-shadow', 'border-shadow', 'card-depth']},
        correctIndex: 0,
        explanation: {ar: 'box-shadow مخصصة لظل الصناديق والبطاقات.', en: 'box-shadow applies shadows to box containers.'},
      },
    ],
  },
];
