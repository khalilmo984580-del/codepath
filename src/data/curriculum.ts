import {LearningPath, Lesson} from '../types';
import {MODULE_1_LESSONS} from './lessonsModule1';
import {MODULE_2_LESSONS} from './lessonsModule2';
import {MODULE_3_LESSONS} from './lessonsModule3';
import {MODULE_4_LESSONS} from './lessonsModule4';

export const HTML_CSS_PATH: LearningPath = {
  id: 'html-css-zero-to-dev',
  title: {
    ar: 'HTML و CSS — من الصفر إلى مطوّر ويب',
    en: 'HTML & CSS — From Zero to Web Developer',
  },
  subtitle: {
    ar: 'مسار عملي شامل من 20 درساً تفاعلياً في 4 وحدات متدرّجة',
    en: '20 hands-on interactive lessons across 4 structured modules',
  },
  description: {
    ar: 'ابدأ رحلتك في عالم الويب دون أي خبرة مسبقة. ستتعلّم بناء صفحات منظمة بـ HTML5، وتنسيقها بألوان وخطوط ومسافات احترافية، ثم تصميم تخطيطات متجاوبة للهواتف باستخدام Flexbox و CSS Grid.',
    en: 'Start from absolute zero with zero prerequisites. Learn semantic HTML5 structure, modern styling with colors and typography, and build responsive mobile-ready layouts with Flexbox and CSS Grid.',
  },
  tier: 'free',
  estimatedHours: 5,
  lessonsCount: 20,
  levelLabel: {
    ar: 'مبتدئ كامل',
    en: 'Complete Beginner',
  },
  coverImage: '/src/assets/images/path_html_css_cover_1795740796457.jpg',
  modules: [
    {
      id: 1,
      title: {ar: 'الوحدة 1: أساسيات HTML', en: 'Module 1: HTML Fundamentals'},
      description: {
        ar: 'مفهوم البرمجة، المستند الأول، العناوين، الروابط والصور، والقوائم.',
        en: 'Programming concepts, first document, headings, links & images, and lists.',
      },
      accentColor: 'violet',
    },
    {
      id: 2,
      title: {ar: 'الوحدة 2: HTML المتوسّطة', en: 'Module 2: HTML Intermediate'},
      description: {
        ar: 'الجداول، النماذج وحقول الإدخال، الوسوم الدلالية، الأزرار، وبناء صفحة شخصية.',
        en: 'Tables, forms & inputs, semantic landmarks, interactive elements, and personal page.',
      },
      accentColor: 'blue',
    },
    {
      id: 3,
      title: {ar: 'الوحدة 3: أساسيات CSS', en: 'Module 3: CSS Fundamentals'},
      description: {
        ar: 'قواعد CSS، الألوان والخلفيات، الخطوط، الهوامش والحشو، والحدود والظلال.',
        en: 'CSS rules, colors & contrast, typography, margins & padding, borders & shadows.',
      },
      accentColor: 'cyan',
    },
    {
      id: 4,
      title: {ar: 'الوحدة 4: التخطيط والمشاريع', en: 'Module 4: CSS Layout and Projects'},
      description: {
        ar: 'نموذج الصندوق، Flexbox، CSS Grid، التصميم المتجاوب، والمشروع الختامي.',
        en: 'Box model, Flexbox, CSS Grid, mobile responsiveness, and capstone portfolio.',
      },
      accentColor: 'orange',
    },
  ],
};

export const LESSONS: Lesson[] = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
];

export function getLessonById(id: number): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
