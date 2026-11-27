import React from 'react';
import {Language, VisualConceptType} from '../types';

interface VisualConceptDiagramProps {
  type: VisualConceptType;
  lang: Language;
}

export const VisualConceptDiagram: React.FC<VisualConceptDiagramProps> = ({type, lang}) => {
  const isAr = lang === 'ar';

  switch (type) {
    case 'html-anatomy':
      return (
        <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-4" dir="ltr">
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-base sm:text-xl">
            <span className="px-3 py-2 rounded-xl bg-violet-600/30 border border-violet-400 text-violet-200">&lt;p&gt;</span>
            <span className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-600 text-white">Hello Web!</span>
            <span className="px-3 py-2 rounded-xl bg-cyan-600/30 border border-cyan-400 text-cyan-200">&lt;/p&gt;</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="p-2 rounded-lg bg-slate-800/80">{isAr ? 'وسم البداية' : 'Opening Tag'}</div>
            <div className="p-2 rounded-lg bg-slate-800/80">{isAr ? 'المحتوى المرئي' : 'Content'}</div>
            <div className="p-2 rounded-lg bg-slate-800/80">{isAr ? 'وسم الإغلاق (/)' : 'Closing Tag (/)'}</div>
          </div>
        </div>
      );

    case 'doc-structure':
      return (
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3" dir="ltr">
          <div className="text-xs font-mono text-violet-700 font-semibold">&lt;!DOCTYPE html&gt;</div>
          <div className="p-3 rounded-xl border border-blue-300 bg-blue-50/70 space-y-2">
            <div className="text-xs font-mono font-bold text-blue-800">&lt;html&gt;</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="font-mono text-xs font-semibold text-amber-700">&lt;head&gt;</div>
                <p className="mt-1 text-xs text-slate-600" dir={isAr ? 'rtl' : 'ltr'}>
                  {isAr ? 'عنوان التبويب والترميز (غير مرئي في الصفحة)' : 'Tab title & metadata (hidden from canvas)'}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-emerald-200">
                <div className="font-mono text-xs font-semibold text-emerald-700">&lt;body&gt;</div>
                <p className="mt-1 text-xs text-slate-600" dir={isAr ? 'rtl' : 'ltr'}>
                  {isAr ? 'كل النصوص والصور الظاهرة للزائر' : 'All visible headings, text & images'}
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case 'headings-scale':
      return (
        <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2.5">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
            <span className="text-2xl font-extrabold text-violet-700">{isAr ? 'عنوان رئيسي H1' : 'Main Title H1'}</span>
            <code className="text-xs text-slate-500" dir="ltr">&lt;h1&gt;</code>
          </div>
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
            <span className="text-xl font-bold text-blue-700">{isAr ? 'عنوان قسم H2' : 'Section Heading H2'}</span>
            <code className="text-xs text-slate-500" dir="ltr">&lt;h2&gt;</code>
          </div>
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
            <span className="text-base font-semibold text-cyan-700">{isAr ? 'عنوان فرعي H3' : 'Subheading H3'}</span>
            <code className="text-xs text-slate-500" dir="ltr">&lt;h3&gt;</code>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-slate-600">{isAr ? 'فقرة نصية عادية للقراءة' : 'Readable body paragraph text'}</span>
            <code className="text-xs text-slate-500" dir="ltr">&lt;p&gt;</code>
          </div>
        </div>
      );

    case 'links-images':
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
            <div className="font-mono text-xs text-blue-800" dir="ltr">&lt;a href="..."&gt;</div>
            <div className="text-sm text-slate-700">
              {isAr ? 'عنصر تفاعلي ينقلك إلى عنوان جديد' : 'Clickable hyperlink pointing to a URL'}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2">
            <div className="font-mono text-xs text-cyan-800" dir="ltr">&lt;img src="..." alt="..." /&gt;</div>
            <div className="text-sm text-slate-700">
              {isAr ? 'وسم مفرد يعرض صورة مع نص بديل' : 'Void element displaying image + alt description'}
            </div>
          </div>
        </div>
      );

    case 'lists-tree':
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200">
            <div className="font-mono text-xs font-bold text-violet-800 mb-2" dir="ltr">&lt;ul&gt; (Bullets)</div>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
            <div className="font-mono text-xs font-bold text-orange-800 mb-2" dir="ltr">&lt;ol&gt; (1, 2, 3)</div>
            <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
              <li>{isAr ? 'اقرأ الدرس' : 'Read lesson'}</li>
              <li>{isAr ? 'طبّق الكود' : 'Run code'}</li>
            </ol>
          </div>
        </div>
      );

    case 'table-grid':
      return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-3 bg-violet-700 text-white text-xs font-semibold p-2.5 text-center" dir="ltr">
            <span>&lt;th&gt; Col 1</span>
            <span>&lt;th&gt; Col 2</span>
            <span>&lt;th&gt; Col 3</span>
          </div>
          <div className="grid grid-cols-3 text-xs text-slate-700 p-2.5 text-center border-b border-slate-100" dir="ltr">
            <span>&lt;td&gt; A1</span>
            <span>&lt;td&gt; A2</span>
            <span>&lt;td&gt; A3</span>
          </div>
          <div className="grid grid-cols-3 text-xs text-slate-700 p-2.5 text-center bg-slate-50" dir="ltr">
            <span>&lt;td&gt; B1</span>
            <span>&lt;td&gt; B2</span>
            <span>&lt;td&gt; B3</span>
          </div>
        </div>
      );

    case 'form-controls':
      return (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-violet-100 text-violet-900 font-mono" dir="ltr">
              &lt;label for="email"&gt;
            </span>
            <span className="text-slate-500 font-bold">↔</span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-100 text-blue-900 font-mono" dir="ltr">
              &lt;input id="email" type="email"&gt;
            </span>
          </div>
          <p className="text-xs text-slate-600">
            {isAr
              ? 'الربط بين for و id يجعل النقر على التسمية يركّز الحقل مباشرة.'
              : 'Matching for and id connects the label click directly to the input field.'}
          </p>
        </div>
      );

    case 'semantic-layout':
    case 'personal-page-wireframe':
    case 'portfolio-architecture':
      return (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono" dir="ltr">
          <div className="p-2.5 rounded-lg bg-violet-100 text-violet-900 text-center font-semibold">&lt;header&gt; + &lt;nav&gt;</div>
          <div className="p-3 rounded-lg bg-white border border-blue-200 space-y-2">
            <div className="text-blue-800 font-semibold text-center">&lt;main&gt;</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded bg-cyan-50 border border-cyan-200 text-cyan-900 text-center">&lt;section&gt; / &lt;article&gt;</div>
              <div className="p-2 rounded bg-cyan-50 border border-cyan-200 text-cyan-900 text-center">&lt;section&gt; / Grid</div>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-slate-200 text-slate-800 text-center font-semibold">&lt;footer&gt;</div>
        </div>
      );

    case 'buttons-details':
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-200 space-y-1.5">
            <div className="font-mono text-xs font-bold text-violet-800" dir="ltr">&lt;button&gt;</div>
            <div className="text-xs text-slate-700">{isAr ? 'لتنفيذ إجراء فوري في الصفحة' : 'Triggers an interactive action'}</div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
            <div className="font-mono text-xs font-bold text-emerald-800" dir="ltr">&lt;details&gt; + &lt;summary&gt;</div>
            <div className="text-xs text-slate-700">{isAr ? 'قائمة تفتح وتغلق تلقائياً' : 'Native expandable FAQ panel'}</div>
          </div>
        </div>
      );

    case 'css-rule-anatomy':
      return (
        <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-3" dir="ltr">
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm sm:text-base">
            <span className="px-2.5 py-1.5 rounded-lg bg-violet-600/40 border border-violet-400">h1</span>
            <span className="text-slate-400">{'{'}</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-cyan-600/30 border border-cyan-400">color</span>
            <span className="text-slate-300">:</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-amber-500/30 border border-amber-400">#2563eb</span>
            <span className="text-slate-300">;</span>
            <span className="text-slate-400">{'}'}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300" dir={isAr ? 'rtl' : 'ltr'}>
            <div>{isAr ? 'المحدّد (Selector)' : 'Selector'}</div>
            <div>{isAr ? 'الخاصية (Property)' : 'Property'}</div>
            <div>{isAr ? 'القيمة (Value)' : 'Value'}</div>
          </div>
        </div>
      );

    case 'color-palette':
      return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" dir="ltr">
          <div className="p-3 rounded-xl bg-[#6D28D9] text-white text-xs font-mono">
            <div className="font-bold">#6D28D9</div>
            <div className="opacity-90 mt-1">Purple</div>
          </div>
          <div className="p-3 rounded-xl bg-[#2563EB] text-white text-xs font-mono">
            <div className="font-bold">#2563EB</div>
            <div className="opacity-90 mt-1">Electric Blue</div>
          </div>
          <div className="p-3 rounded-xl bg-[#06B6D4] text-slate-950 text-xs font-mono">
            <div className="font-bold">#06B6D4</div>
            <div className="opacity-90 mt-1">Cyan</div>
          </div>
          <div className="p-3 rounded-xl bg-[#F97316] text-white text-xs font-mono">
            <div className="font-bold">#F97316</div>
            <div className="opacity-90 mt-1">Orange</div>
          </div>
        </div>
      );

    case 'typography-scale':
      return (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
          <div className="text-xl font-bold text-slate-900">
            {isAr ? 'font-size: 24px · font-weight: 700' : 'font-size: 24px · font-weight: 700'}
          </div>
          <div className="text-sm leading-7 text-slate-600">
            {isAr
              ? 'ارتفاع السطر line-height: 1.6 يترك فراغاً مريحاً بين الأسطر أثناء القراءة.'
              : 'line-height: 1.6 gives body lines calm vertical rhythm.'}
          </div>
        </div>
      );

    case 'spacing-margin-padding':
    case 'box-model':
      return (
        <div className="p-4 rounded-2xl bg-orange-50 border border-dashed border-orange-400 text-center text-xs" dir="ltr">
          <div className="text-orange-800 font-semibold mb-2">Margin ({isAr ? 'خارجي' : 'Outer'})</div>
          <div className="p-3 rounded-xl bg-slate-800 text-white">
            <div className="text-slate-300 mb-2">Border</div>
            <div className="p-3 rounded-lg bg-cyan-500/20 border border-cyan-300">
              <div className="text-cyan-200 mb-2">Padding ({isAr ? 'داخلي' : 'Inner'})</div>
              <div className="p-3 rounded bg-violet-600 text-white font-semibold">Content</div>
            </div>
          </div>
        </div>
      );

    case 'borders-shadows':
      return (
        <div className="grid sm:grid-cols-2 gap-4 p-2">
          <div className="p-4 bg-white border border-slate-400 text-xs text-center text-slate-600">
            {isAr ? 'بدون انحناء أو ظل (0px)' : 'Sharp corners (radius: 0)'}
          </div>
          <div className="p-4 bg-white border border-violet-200 rounded-2xl shadow-lg shadow-violet-500/15 text-xs text-center font-semibold text-violet-900">
            border-radius: 16px + box-shadow
          </div>
        </div>
      );

    case 'flexbox-axes':
      return (
        <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3" dir="ltr">
          <div className="text-xs text-cyan-300 font-mono">display: flex; justify-content: space-between;</div>
          <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-800 border border-slate-700">
            <div className="px-4 py-2 rounded-lg bg-violet-600 text-xs font-semibold">Item 1</div>
            <div className="px-4 py-2 rounded-lg bg-blue-600 text-xs font-semibold">Item 2</div>
            <div className="px-4 py-2 rounded-lg bg-cyan-600 text-xs font-semibold">Item 3</div>
          </div>
        </div>
      );

    case 'css-grid-tracks':
      return (
        <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3" dir="ltr">
          <div className="text-xs text-cyan-300 font-mono">display: grid; grid-template-columns: repeat(3, 1fr);</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg bg-blue-600/80 text-center text-xs font-semibold">1fr</div>
            <div className="p-3 rounded-lg bg-blue-600/80 text-center text-xs font-semibold">1fr</div>
            <div className="p-3 rounded-lg bg-blue-600/80 text-center text-xs font-semibold">1fr</div>
          </div>
        </div>
      );

    case 'responsive-breakpoints':
      return (
        <div className="grid sm:grid-cols-2 gap-3" dir="ltr">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-semibold text-slate-700">Phone (&lt; 600px): 1 Column</div>
            <div className="h-5 rounded bg-violet-500/80" />
            <div className="h-5 rounded bg-violet-400/80" />
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="text-xs font-semibold text-slate-700">@media (min-width: 600px): 2 Columns</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-11 rounded bg-blue-500/80" />
              <div className="h-11 rounded bg-cyan-500/80" />
            </div>
          </div>
        </div>
      );
  }
};
