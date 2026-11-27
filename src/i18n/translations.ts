import {Language} from '../types';

export interface TranslationStrings {
  brand: string;
  tagline: string;
  nav: {
    home: string;
    paths: string;
    myLearning: string;
    playground: string;
    challenges: string;
    profile: string;
    aiTutor: string;
  };
  actions: {
    switchLang: string;
    continueLearning: string;
    startLearning: string;
    openPlayground: string;
    runCode: string;
    resetCode: string;
    copyCode: string;
    copied: string;
    loadExample: string;
    checkExercise: string;
    showExpected: string;
    hideExpected: string;
    submitAnswer: string;
    retryQuiz: string;
    nextQuestion: string;
    completeLesson: string;
    lessonCompleted: string;
    prevLesson: string;
    nextLesson: string;
    bookmark: string;
    bookmarked: string;
    openInPlayground: string;
    askTutor: string;
    saveName: string;
    resetProgress: string;
    confirmReset: string;
    cancel: string;
    close: string;
    installApp: string;
    installIOS: string;
    saveVideoUrl: string;
    removeVideoUrl: string;
    tryChallenge: string;
    checkChallenge: string;
    viewSolution: string;
    hideSolution: string;
    backToPaths: string;
  };
  home: {
    welcomeNew: string;
    welcomeReturning: string;
    heroSubtitle: string;
    levelLabel: string;
    streakLabel: string;
    daysUnit: string;
    xpLabel: string;
    progressLabel: string;
    lessonsCompletedOf: string;
    recommendedTitle: string;
    recommendedSubtitle: string;
    dailyChallengeTitle: string;
    badgesTitle: string;
    badgesSubtitle: string;
    learningPathTitle: string;
    newStudentNote: string;
    freeAccessTag: string;
  };
  levels: {
    beginner: string;
    intermediate: string;
    advanced: string;
    nextLevelAt: string;
  };
  paths: {
    title: string;
    subtitle: string;
    modulesTitle: string;
    lessonsLabel: string;
    hoursLabel: string;
    allModules: string;
    freeLabel: string;
    futureTitle: string;
    futureSubtitle: string;
    comingSoon: string;
    allCurrentFree: string;
  };
  myLearning: {
    title: string;
    subtitle: string;
    inProgressTab: string;
    completedTab: string;
    savedTab: string;
    emptyCompleted: string;
    emptySaved: string;
    startFirstLesson: string;
    statsSummary: string;
  };
  lesson: {
    modulePrefix: string;
    lessonPrefix: string;
    minutesUnit: string;
    xpUnit: string;
    objectivesTitle: string;
    explanationTitle: string;
    glossaryTitle: string;
    visualTitle: string;
    codeExampleTitle: string;
    videoTitle: string;
    videoPlaceholderTitle: string;
    videoPlaceholderDesc: string;
    videoUrlLabel: string;
    videoUrlPlaceholder: string;
    videoInvalidError: string;
    exerciseTitle: string;
    exerciseHintLabel: string;
    expectedPreviewTitle: string;
    yourPreviewTitle: string;
    exercisePassed: string;
    exerciseNeedsWork: string;
    quizTitle: string;
    quizProgress: string;
    quizCorrect: string;
    quizIncorrect: string;
    quizScoreTitle: string;
    quizAllPassed: string;
    quizNeedsRetry: string;
    completeRequirementHint: string;
    celebrationTitle: string;
    celebrationDesc: string;
  };
  playground: {
    title: string;
    subtitle: string;
    htmlTab: string;
    cssTab: string;
    previewTitle: string;
    templatesLabel: string;
    selectTemplate: string;
    sandboxNotice: string;
    scriptBlockedWarning: string;
    syntaxWarningPrefix: string;
    unclosedTagWarning: string;
    cssBraceWarning: string;
    autoUpdated: string;
  };
  challenges: {
    title: string;
    subtitle: string;
    dailyBadge: string;
    solvedLabel: string;
    unsolvedLabel: string;
    difficultyBeginner: string;
    difficultyIntermediate: string;
    requirementsTitle: string;
    passedBanner: string;
    failedBanner: string;
  };
  profile: {
    title: string;
    subtitle: string;
    studentNameLabel: string;
    namePlaceholder: string;
    languageLabel: string;
    currentLevelLabel: string;
    totalXpLabel: string;
    completedLessonsLabel: string;
    streakLabel: string;
    badgesSectionTitle: string;
    historySectionTitle: string;
    emptyHistory: string;
    dangerZoneTitle: string;
    resetWarningTitle: string;
    resetWarningDesc: string;
    savedToast: string;
  };
  tutor: {
    title: string;
    subtitle: string;
    noticeTitle: string;
    noticeBody: string;
    quickPromptsLabel: string;
    quickPrompts: string[];
    inputPlaceholder: string;
    sendButton: string;
    offlineTipsTitle: string;
    offlineTips: {
      title: string;
      body: string;
    }[];
  };
  pwa: {
    offlineBanner: string;
    iosModalTitle: string;
    iosStep1: string;
    iosStep2: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  ar: {
    brand: 'CodePath',
    tagline: 'تعلّم البرمجة. ابنِ مستقبلك.',
    nav: {
      home: 'الرئيسية',
      paths: 'المسارات',
      myLearning: 'تعلّمي',
      playground: 'المحرر',
      challenges: 'التحديات',
      profile: 'حسابي',
      aiTutor: 'المعلم الذكي',
    },
    actions: {
      switchLang: 'English',
      continueLearning: 'ابدأ رحلتك الآن',
      startLearning: 'ابدأ الدرس',
      openPlayground: 'افتح المحرر',
      runCode: 'تشغيل الكود',
      resetCode: 'إعادة ضبط',
      copyCode: 'نسخ',
      copied: 'تم النسخ',
      loadExample: 'تحميل قالب مثال',
      checkExercise: 'تحقق من الحل',
      showExpected: 'عرض النتيجة المتوقعة',
      hideExpected: 'إخفاء النتيجة المتوقعة',
      submitAnswer: 'تأكيد الإجابة',
      retryQuiz: 'إعادة المحاولة',
      nextQuestion: 'السؤال التالي',
      completeLesson: 'إتمام الدرس واستلام النقاط',
      lessonCompleted: 'تم إتمام الدرس',
      prevLesson: 'الدرس السابق',
      nextLesson: 'الدرس التالي',
      bookmark: 'حفظ الدرس',
      bookmarked: 'محفوظ',
      openInPlayground: 'جرّب في المحرر',
      askTutor: 'اسأل المعلم',
      saveName: 'حفظ الاسم',
      resetProgress: 'مسح التقدّم المحلي',
      confirmReset: 'نعم، امسح كل التقدّم',
      cancel: 'إلغاء',
      close: 'إغلاق',
      installApp: 'تثبيت التطبيق',
      installIOS: 'تثبيت على iOS',
      saveVideoUrl: 'ربط رابط فيديو',
      removeVideoUrl: 'إزالة الرابط',
      tryChallenge: 'ابدأ التحدي',
      checkChallenge: 'فحص الحل',
      viewSolution: 'عرض الحل النموذجي',
      hideSolution: 'إخفاء الحل',
      backToPaths: 'العودة للمسارات',
    },
    home: {
      welcomeNew: 'مرحباً بك في CodePath',
      welcomeReturning: 'أهلاً بعودتك،',
      heroSubtitle: 'تعلّم أساسيات HTML و CSS خطوة بخطوة مع أمثلة تفاعلية وتطبيق عملي مباشر.',
      levelLabel: 'المستوى الحالي',
      streakLabel: 'سلسلة التعلّم',
      daysUnit: 'أيام',
      xpLabel: 'مجموع النقاط',
      progressLabel: 'التقدّم الكلي',
      lessonsCompletedOf: 'درساً مكتملاً من أصل',
      recommendedTitle: 'دروس مقترحة للبداية',
      recommendedSubtitle: 'ابدأ بالدرس الأول وتدرّج بثبات نحو بناء صفحتك الأولى',
      dailyChallengeTitle: 'تحدي اليوم البرمجي',
      badgesTitle: 'شارات الإنجاز',
      badgesSubtitle: 'اجمع الشارات عند إكمال الدروس والاختبارات والتحديات العملية',
      learningPathTitle: 'المسار التعليمي المتاح',
      newStudentNote: 'طالب جديد — ابدأ الدرس الأول لتحصل على أول 50 نقطة XP',
      freeAccessTag: 'مجاني بالكامل · 20 درساً عملياً',
    },
    levels: {
      beginner: 'مبتدئ',
      intermediate: 'متوسط',
      advanced: 'متقدّم',
      nextLevelAt: 'المستوى التالي عند',
    },
    paths: {
      title: 'مسارات التعلّم',
      subtitle: 'منهج منظّم يأخذك من الصفر إلى تصميم صفحات ويب متجاوبة باللغة العربية والإنجليزية.',
      modulesTitle: 'وحدات المسار',
      lessonsLabel: 'درساً',
      hoursLabel: 'ساعات تقديرية',
      allModules: 'جميع الوحدات',
      freeLabel: 'مجاني',
      futureTitle: 'مسارات ومزايا قادمة مستقبلاً',
      futureSubtitle: 'خططنا التوسعية للمستقبل — جميع دروس HTML و CSS الحالية متاحة مجاناً للجميع.',
      comingSoon: 'قريباً في إصدار قادم',
      allCurrentFree: 'متاح مجاناً الآن',
    },
    myLearning: {
      title: 'مساحة تعلّمي',
      subtitle: 'تابع تقدمك في الدروس، راجع الدروس المحفوظة، وعد إلى آخر نقطة توقفت عندها.',
      inProgressTab: 'الدروس المتاحة',
      completedTab: 'المكتملة',
      savedTab: 'المحفوظة',
      emptyCompleted: 'لم تكمل أي درس بعد. ابدأ الدرس الأول من المسار وستظهر دروسك المكتملة هنا.',
      emptySaved: 'لا توجد دروس محفوظة حالياً. يمكنك حفظ أي درس من صفحته للرجوع إليه بسرعة.',
      startFirstLesson: 'الانتقال إلى المسار التعليمي',
      statsSummary: 'ملخص رحلتك التعليمية',
    },
    lesson: {
      modulePrefix: 'الوحدة',
      lessonPrefix: 'الدرس',
      minutesUnit: 'دقيقة',
      xpUnit: 'نقطة XP',
      objectivesTitle: 'ماذا ستتعلّم في هذا الدرس؟',
      explanationTitle: 'الشرح المبسط',
      glossaryTitle: 'مصطلحات مهمة',
      visualTitle: 'الشرح البصري التفاعلي',
      codeExampleTitle: 'مثال عملي بالكود',
      videoTitle: 'قسم الفيديو التعليمي (اختياري)',
      videoPlaceholderTitle: 'لا يوجد فيديو مُعد مسبقاً لهذا الدرس',
      videoPlaceholderDesc:
        'الدرس المكتوب والأمثلة التفاعلية كاملة وتغنيك عن الفيديو. يمكن إضافة رابط فيديو تعليمي مرخّص لاحقاً بصيغة MP4 أو رابط تعليمي موثوق.',
      videoUrlLabel: 'إضافة رابط فيديو تعليمي محلياً (اختياري)',
      videoUrlPlaceholder: 'https://example.com/lesson-video.mp4',
      videoInvalidError: 'يرجى إدخال رابط يبدأ بـ https:// صالح لفيديو مباشر.',
      exerciseTitle: 'التمرين العملي التفاعلي',
      exerciseHintLabel: 'تلميح:',
      expectedPreviewTitle: 'النتيجة المتوقعة',
      yourPreviewTitle: 'معاينة كودك',
      exercisePassed: 'ممتاز! حقق كودك جميع متطلبات التمرين بنجاح.',
      exerciseNeedsWork: 'تحقّق من العناصر المطلوبة أدناه ثم اضغط تشغيل وفحص الحل.',
      quizTitle: 'اختبر فهمك',
      quizProgress: 'السؤال',
      quizCorrect: 'إجابة صحيحة! أحسنت.',
      quizIncorrect: 'إجابة غير دقيقة. راجع التوضيح وحاول مجدداً.',
      quizScoreTitle: 'نتيجة الاختبار',
      quizAllPassed: 'رائع! أتممت جميع الأسئلة بنجاح.',
      quizNeedsRetry: 'يمكنك إعادة الاختبار لتحسين نتيجتك وتثبيت المعلومة.',
      completeRequirementHint: 'أكمل التمرين أو الاختبار لتثبيت الدرس، أو اضغط لإتمام الدرس الآن.',
      celebrationTitle: 'تهانينا! تم إتمام الدرس بنجاح',
      celebrationDesc: 'حصلت على نقاط الخبرة وتم تحديث تقدمك المحلي.',
    },
    playground: {
      title: 'مختبر الأكواد التفاعلي',
      subtitle: 'اكتب HTML و CSS وشاهد النتيجة فوراً داخل بيئة معاينة معزولة وآمنة.',
      htmlTab: 'محرر HTML',
      cssTab: 'محرر CSS',
      previewTitle: 'المعاينة المباشرة المعزولة',
      templatesLabel: 'قوالب جاهزة للمبتدئين',
      selectTemplate: 'اختر قالباً جاهزاً',
      sandboxNotice: 'تعمل المعاينة داخل إطار معزول مخصص لـ HTML و CSS فقط لضمان الأمان.',
      scriptBlockedWarning:
        'تنبيه أمان: تم تجاهل وسوم JavaScript أو أحداث التصفح لأن المختبر مخصص لتعلّم HTML و CSS فقط.',
      syntaxWarningPrefix: 'ملاحظة فنية:',
      unclosedTagWarning: 'يبدو أن هناك وسماً غير مغلق مثل',
      cssBraceWarning: 'عدد أقواس CSS المفتوحة { لا يطابق الأقواس المغلقة }.',
      autoUpdated: 'حدّث المعاينة بزر تشغيل الكود',
    },
    challenges: {
      title: 'التحديات البرمجية',
      subtitle: 'طبّق ما تعلمته في تحديات سريعة واكسب نقاط XP إضافية.',
      dailyBadge: 'تحدي اليوم',
      solvedLabel: 'مكتمل',
      unsolvedLabel: 'جاهز للتحدي',
      difficultyBeginner: 'مبتدئ',
      difficultyIntermediate: 'متوسط',
      requirementsTitle: 'متطلبات النجاح',
      passedBanner: 'أحسنت! نجحت في التحدي وأضيفت النقاط إلى رصيدك.',
      failedBanner: 'بعض المتطلبات لم تتحقق بعد. راجع القائمة وجرّب مرة أخرى.',
    },
    profile: {
      title: 'الملف الشخصي والإعدادات',
      subtitle: 'إدارة اسمك، لغة الواجهة، سجل إنجازاتك، وحفظ التقدّم محلياً على جهازك.',
      studentNameLabel: 'اسم المتعلّم',
      namePlaceholder: 'أدخل اسمك هنا',
      languageLabel: 'لغة التطبيق والاتجاه',
      currentLevelLabel: 'المستوى',
      totalXpLabel: 'نقاط XP',
      completedLessonsLabel: 'الدروس المكتملة',
      streakLabel: 'سلسلة الأيام',
      badgesSectionTitle: 'الأوسمة والشارات',
      historySectionTitle: 'سجل التعلّم الأخير',
      emptyHistory: 'لا يوجد نشاط مسجّل بعد. عند إكمال الدروس أو التحديات سيظهر سجلّك هنا.',
      dangerZoneTitle: 'إدارة البيانات المحلية',
      resetWarningTitle: 'تأكيد مسح التقدّم المحلي',
      resetWarningDesc:
        'سيتم حذف جميع النقاط والدروس المكتملة والشارات المحفوظة على هذا المتصفح فقط. لا يمكن التراجع عن هذا الإجراء.',
      savedToast: 'تم حفظ التغييرات بنجاح.',
    },
    tutor: {
      title: 'المعلم الذكي (قيد الإعداد)',
      subtitle: 'واجهة مساعدة المبتدئين لفهم HTML و CSS',
      noticeTitle: 'تنبيه مهم حول حالة المعلم الذكي',
      noticeBody:
        'في هذا الإصدار الأولي، المعلم التفاعلي غير متصل بخدمة ذكاء اصطناعي خارجية لضمان عمل التطبيق مجاناً وبدون مفاتيح API. سيتم تفعيل الردود الذكية المخصصة في إصدار مستقبلي.',
      quickPromptsLabel: 'أسئلة شائعة ستدعمها الخدمة مستقبلاً:',
      quickPrompts: [
        'اشرح لي هذا المفهوم بأسلوب أبسط',
        'أعطني تلميحاً للتمرين العملي',
        'ما سبب عدم ظهور التنسيق في CSS؟',
        'اقترح لي تمريناً إضافياً للتدريب',
      ],
      inputPlaceholder: 'اكتب سؤالك حول HTML أو CSS...',
      sendButton: 'إرسال',
      offlineTipsTitle: 'نصائح سريعة متاحة الآن دون إنترنت',
      offlineTips: [
        {
          title: 'لماذا لا يظهر عنصر HTML كما أتوقع؟',
          body: 'تأكّد من كتابة وسم الفتح ووسم الإغلاق مثل <p>...</p> وأنك لم تنسَ علامة > في نهاية الوسم.',
        },
        {
          title: 'لماذا لا يعمل تنسيق CSS؟',
          body: 'تحقّق من نقطتين رئيسيتين: وجود النقطتين (:) بين الخاصية والقيمة، والفاصلة المنقوطة (;) في نهاية كل سطر.',
        },
        {
          title: 'الفرق بين margin و padding',
          body: 'استخدم padding للمسافة الداخلية داخل البطاقة، و margin للمسافة الخارجية التي تفصل البطاقة عن جيرانها.',
        },
      ],
    },
    pwa: {
      offlineBanner: 'أنت تعمل الآن دون اتصال — الدروس المحمّلة وتقدّمك المحلي متاحان.',
      iosModalTitle: 'تثبيت CodePath على iPhone / iPad',
      iosStep1: '1. اضغط على زر المشاركة (Share) في شريط سفاري السفلي.',
      iosStep2: '2. مرّر للأسفل واختر "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).',
    },
  },
  en: {
    brand: 'CodePath',
    tagline: 'Learn to Code. Build Your Future.',
    nav: {
      home: 'Home',
      paths: 'Paths',
      myLearning: 'My Learning',
      playground: 'Playground',
      challenges: 'Challenges',
      profile: 'Profile',
      aiTutor: 'AI Tutor',
    },
    actions: {
      switchLang: 'العربية',
      continueLearning: 'Start Your Path',
      startLearning: 'Start Lesson',
      openPlayground: 'Open Playground',
      runCode: 'Run Code',
      resetCode: 'Reset',
      copyCode: 'Copy',
      copied: 'Copied',
      loadExample: 'Load Template',
      checkExercise: 'Check Exercise',
      showExpected: 'Show Expected Result',
      hideExpected: 'Hide Expected Result',
      submitAnswer: 'Submit Answer',
      retryQuiz: 'Try Again',
      nextQuestion: 'Next Question',
      completeLesson: 'Complete Lesson & Claim XP',
      lessonCompleted: 'Lesson Completed',
      prevLesson: 'Previous Lesson',
      nextLesson: 'Next Lesson',
      bookmark: 'Save Lesson',
      bookmarked: 'Saved',
      openInPlayground: 'Open in Playground',
      askTutor: 'Ask Tutor',
      saveName: 'Save Name',
      resetProgress: 'Reset Local Progress',
      confirmReset: 'Yes, Reset All Progress',
      cancel: 'Cancel',
      close: 'Close',
      installApp: 'Install App',
      installIOS: 'Install on iOS',
      saveVideoUrl: 'Attach Video URL',
      removeVideoUrl: 'Remove Video',
      tryChallenge: 'Solve Challenge',
      checkChallenge: 'Check Solution',
      viewSolution: 'Show Sample Solution',
      hideSolution: 'Hide Solution',
      backToPaths: 'Back to Paths',
    },
    home: {
      welcomeNew: 'Welcome to CodePath',
      welcomeReturning: 'Welcome back,',
      heroSubtitle:
        'Master HTML and CSS fundamentals step by step with visual diagrams, interactive quizzes, and a live sandboxed code editor.',
      levelLabel: 'Current Level',
      streakLabel: 'Learning Streak',
      daysUnit: 'days',
      xpLabel: 'Total XP',
      progressLabel: 'Overall Progress',
      lessonsCompletedOf: 'lessons completed out of',
      recommendedTitle: 'Recommended Lessons to Start',
      recommendedSubtitle: 'Begin with Lesson 1 and build real web pages one concept at a time',
      dailyChallengeTitle: 'Daily Coding Challenge',
      badgesTitle: 'Achievement Badges',
      badgesSubtitle: 'Earn badges by completing lessons, quizzes, and coding challenges',
      learningPathTitle: 'Featured Learning Path',
      newStudentNote: 'New Learner — Complete Lesson 1 to earn your first 50 XP',
      freeAccessTag: '100% Free Access · 20 Hands-On Lessons',
    },
    levels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      nextLevelAt: 'Next level at',
    },
    paths: {
      title: 'Learning Paths',
      subtitle: 'Structured beginner-friendly curriculum taking you from zero to responsive web pages.',
      modulesTitle: 'Course Modules',
      lessonsLabel: 'lessons',
      hoursLabel: 'est. hours',
      allModules: 'All Modules',
      freeLabel: 'Free',
      futureTitle: 'Upcoming Paths & Premium Resources',
      futureSubtitle: 'Future roadmap — all 20 HTML & CSS lessons in this release are completely free.',
      comingSoon: 'Planned for future release',
      allCurrentFree: 'Free Forever',
    },
    myLearning: {
      title: 'My Learning',
      subtitle: 'Track your completed lessons, jump back into saved topics, and monitor your growth.',
      inProgressTab: 'Available Lessons',
      completedTab: 'Completed',
      savedTab: 'Saved',
      emptyCompleted: 'You have not completed any lessons yet. Start Lesson 1 to see your achievements here.',
      emptySaved: 'No saved lessons yet. Bookmark any lesson while reading to find it quickly here.',
      startFirstLesson: 'Browse Learning Path',
      statsSummary: 'Your Learning Summary',
    },
    lesson: {
      modulePrefix: 'Module',
      lessonPrefix: 'Lesson',
      minutesUnit: 'min',
      xpUnit: 'XP',
      objectivesTitle: 'Learning Objectives',
      explanationTitle: 'Clear Explanation',
      glossaryTitle: 'Key Terms Explained',
      visualTitle: 'Visual Concept Breakdown',
      codeExampleTitle: 'Original Code Example',
      videoTitle: 'Video Learning Section (Optional)',
      videoPlaceholderTitle: 'No pre-configured video for this lesson yet',
      videoPlaceholderDesc:
        'This written lesson, visual diagram, and interactive coding exercise are complete on their own. You can optionally link a licensed MP4 video URL below.',
      videoUrlLabel: 'Attach a licensed video URL locally (optional)',
      videoUrlPlaceholder: 'https://example.com/lesson-video.mp4',
      videoInvalidError: 'Please enter a valid https:// video URL.',
      exerciseTitle: 'Interactive Coding Exercise',
      exerciseHintLabel: 'Hint:',
      expectedPreviewTitle: 'Expected Result',
      yourPreviewTitle: 'Your Live Preview',
      exercisePassed: 'Great work! Your code passes every check for this exercise.',
      exerciseNeedsWork: 'Review the checklist items below, edit your code, and click Check Exercise.',
      quizTitle: 'Lesson Quiz',
      quizProgress: 'Question',
      quizCorrect: 'Correct! Well done.',
      quizIncorrect: 'Not quite. Read the explanation below and try again.',
      quizScoreTitle: 'Quiz Summary',
      quizAllPassed: 'Awesome! You answered every question correctly.',
      quizNeedsRetry: 'Review any missed questions and retry anytime.',
      completeRequirementHint: 'Finish the exercise or quiz, or mark this lesson complete whenever ready.',
      celebrationTitle: 'Lesson Completed!',
      celebrationDesc: 'XP points were added to your local profile.',
    },
    playground: {
      title: 'Interactive Coding Playground',
      subtitle: 'Write HTML and CSS and preview your webpage live inside a secure sandboxed frame.',
      htmlTab: 'HTML Editor',
      cssTab: 'CSS Editor',
      previewTitle: 'Isolated Live Preview',
      templatesLabel: 'Beginner Templates',
      selectTemplate: 'Choose a starter template',
      sandboxNotice: 'Code runs inside a restricted HTML/CSS-only sandbox with JavaScript disabled.',
      scriptBlockedWarning:
        'Security notice: JavaScript tags and inline event handlers were stripped because this playground supports HTML and CSS only.',
      syntaxWarningPrefix: 'Syntax check:',
      unclosedTagWarning: 'Possible unclosed HTML tag detected near',
      cssBraceWarning: 'Mismatched curly braces { } detected in your CSS.',
      autoUpdated: 'Click Run Code to refresh preview',
    },
    challenges: {
      title: 'Coding Challenges',
      subtitle: 'Apply your HTML and CSS skills in focused practical tasks to earn bonus XP.',
      dailyBadge: 'Daily Challenge',
      solvedLabel: 'Completed',
      unsolvedLabel: 'Open Challenge',
      difficultyBeginner: 'Beginner',
      difficultyIntermediate: 'Intermediate',
      requirementsTitle: 'Verification Checklist',
      passedBanner: 'Challenge solved! Bonus XP has been added to your progress.',
      failedBanner: 'Some requirements are still missing. Adjust your code and test again.',
    },
    profile: {
      title: 'Profile & Settings',
      subtitle: 'Customize your display name, switch language, inspect earned badges, and manage local storage.',
      studentNameLabel: 'Display Name',
      namePlaceholder: 'Enter your name',
      languageLabel: 'Interface Language & Direction',
      currentLevelLabel: 'Level',
      totalXpLabel: 'Total XP',
      completedLessonsLabel: 'Completed Lessons',
      streakLabel: 'Day Streak',
      badgesSectionTitle: 'Earned & Upcoming Badges',
      historySectionTitle: 'Recent Learning History',
      emptyHistory: 'No learning activity recorded yet. Complete a lesson or challenge to build your history.',
      dangerZoneTitle: 'Local Storage Management',
      resetWarningTitle: 'Confirm Local Progress Reset',
      resetWarningDesc:
        'This will clear your XP, completed lessons, badges, and learning history stored in this browser. This action cannot be undone.',
      savedToast: 'Settings saved locally.',
    },
    tutor: {
      title: 'AI Tutor Preview',
      subtitle: 'Guided HTML & CSS Help Interface',
      noticeTitle: 'Service Status: Future Integration',
      noticeBody:
        'In this initial offline-ready release, live AI responses are not connected because no external AI API service is configured on the client. Automated interactive tutoring will be enabled in a future version.',
      quickPromptsLabel: 'Planned Tutor Capabilities:',
      quickPrompts: [
        'Explain this concept more simply',
        'Give me a hint for the exercise',
        'Why is my CSS rule not applying?',
        'Suggest an extra practice task',
      ],
      inputPlaceholder: 'Ask a question about HTML or CSS...',
      sendButton: 'Send',
      offlineTipsTitle: 'Built-in Quick Reference Tips (Available Offline)',
      offlineTips: [
        {
          title: 'Why is an HTML element displaying strangely?',
          body: 'Double-check that every opening tag like <p> has a matching closing tag </p> and angle brackets < > are closed.',
        },
        {
          title: 'Why is my CSS property ignored?',
          body: 'Verify you used a colon (:) between property and value, and ended the line with a semicolon (;).',
        },
        {
          title: 'Margin vs Padding',
          body: 'Padding creates breathing room inside an element border; margin creates outer space between neighboring elements.',
        },
      ],
    },
    pwa: {
      offlineBanner: 'Offline Mode — Previously loaded lessons and local progress remain available.',
      iosModalTitle: 'Install CodePath on iPhone / iPad',
      iosStep1: '1. Tap the Share icon in the Safari toolbar.',
      iosStep2: '2. Scroll down and tap "Add to Home Screen".',
    },
  },
};
