import {PlaygroundTemplate} from '../types';

export const PLAYGROUND_TEMPLATES: PlaygroundTemplate[] = [
  {
    id: 'welcome-card',
    title: {ar: 'بطاقة ترحيب بسيطة', en: 'Simple Welcome Card'},
    description: {
      ar: 'مثال أساسي يجمع العناوين والفقرات والزر المنسّق بـ CSS.',
      en: 'Beginner starter combining headings, paragraph, and a styled button.',
    },
    html: `<main class="welcome-card">
  <h1>Hello, Web World!</h1>
  <p>This is my first styled webpage built in the CodePath Playground.</p>
  <a href="#learn" class="cta-btn">Keep Exploring</a>
</main>`,
    css: `.welcome-card {
  max-width: 460px;
  margin: 24px auto;
  padding: 28px;
  background: linear-gradient(135deg, #ede9fe, #e0f2fe);
  border-radius: 20px;
  border: 1px solid #c4b5fd;
  text-align: center;
}
.welcome-card h1 {
  margin: 0 0 12px;
  color: #4c1d95;
  font-size: 26px;
}
.welcome-card p {
  margin: 0 0 20px;
  color: #334155;
}
.cta-btn {
  display: inline-block;
  padding: 10px 22px;
  background: #6d28d9;
  color: #ffffff;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
}`,
  },
  {
    id: 'flex-gallery',
    title: {ar: 'بطاقات مرنة بـ Flexbox', en: 'Flexbox Card Row'},
    description: {
      ar: 'صف من ثلاث بطاقات تتوزع بمرونة وتتجاوب مع العرض.',
      en: 'Three feature cards aligned with Flexbox and flex-wrap.',
    },
    html: `<section class="deck">
  <article class="item">
    <h2>HTML</h2>
    <p>Defines structure and meaning on the page.</p>
  </article>
  <article class="item">
    <h2>CSS</h2>
    <p>Controls colors, fonts, spacing, and layout.</p>
  </article>
  <article class="item">
    <h2>Practice</h2>
    <p>Experiment freely and learn by building.</p>
  </article>
</section>`,
    css: `.deck {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.item {
  flex: 1 1 180px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
}
.item h2 {
  margin: 0 0 8px;
  color: #2563eb;
  font-size: 18px;
}
.item p {
  margin: 0;
  color: #475569;
  font-size: 14px;
}`,
  },
  {
    id: 'student-schedule',
    title: {ar: 'جدول المذاكرة الأسبوعي', en: 'Study Schedule Table'},
    description: {
      ar: 'نموذج جدول HTML منسّق بألوان هادئة وحدود واضحة.',
      en: 'Clean HTML table with zebra rows and crisp borders.',
    },
    html: `<h2>Weekly Coding Plan</h2>
<table class="plan">
  <thead>
    <tr>
      <th>Day</th>
      <th>Topic</th>
      <th>Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sunday</td>
      <td>HTML Tags & Headings</td>
      <td>20 min</td>
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>Colors & Box Model</td>
      <td>25 min</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td>Flexbox Practice</td>
      <td>30 min</td>
    </tr>
  </tbody>
</table>`,
    css: `h2 {
  color: #0f172a;
  margin-bottom: 12px;
}
.plan {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #cbd5e1;
}
.plan th, .plan td {
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}
.plan th {
  background: #1e293b;
  color: #f8fafc;
  font-size: 13px;
}
.plan tbody tr:nth-child(even) {
  background: #f8fafc;
}`,
  },
  {
    id: 'contact-form',
    title: {ar: 'نموذج تواصل مرتب', en: 'Clean Contact Form'},
    description: {
      ar: 'حقول إدخال مع تسميات label وزر إرسال مصمم بـ CSS.',
      en: 'Accessible HTML form with labels, inputs, and a styled button.',
    },
    html: `<form class="contact-box">
  <h2>Send a Message</h2>
  <label for="name">Your Name</label>
  <input id="name" type="text" placeholder="Noura Ahmad" />

  <label for="email">Email Address</label>
  <input id="email" type="email" placeholder="noura@example.com" />

  <label for="msg">Message</label>
  <textarea id="msg" rows="3" placeholder="I love learning CSS!"></textarea>

  <button type="button">Submit Message</button>
</form>`,
    css: `.contact-box {
  max-width: 380px;
  margin: 0 auto;
  padding: 22px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
}
.contact-box h2 {
  margin: 0 0 16px;
  font-size: 20px;
  color: #0f172a;
}
.contact-box label {
  display: block;
  margin: 12px 0 6px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
}
.contact-box input,
.contact-box textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
}
.contact-box button {
  margin-top: 16px;
  width: 100%;
  padding: 11px;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}`,
  },
];
