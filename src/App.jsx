
import { useState } from "react";
import "./App.css";

const sources = [
  {
    id: "nile",
    name: "نهر النيل",
    emoji: "🌊",
    category: "مياه عذبة",
    color: "blue",
    text: "نهر النيل هو أهم مصادر المياه العذبة في مصر. نستخدم مياهه في الشرب والزراعة والعديد من الأنشطة اليومية. لذلك يجب علينا المحافظة على نظافته وترشيد استهلاك مياهه.",
    fact: "النيل يجري من جنوب مصر إلى شمالها.",
  },
  {
    id: "lake",
    name: "بحيرة ناصر",
    emoji: "💧",
    category: "مياه عذبة",
    color: "blue",
    text: "تقع بحيرة ناصر جنوب مصر خلف السد العالي. وتُخزَّن فيها كميات كبيرة من المياه، مما يساعد على تنظيم الاستفادة من مياه النيل.",
    fact: "تقع بحيرة ناصر خلف السد العالي.",
  },
  {
    id: "ground",
    name: "المياه الجوفية",
    emoji: "🪨",
    category: "مياه تحت سطح الأرض",
    color: "green",
    text: "توجد المياه الجوفية تحت سطح الأرض داخل التربة والصخور. ونستطيع الوصول إليها عن طريق الآبار، وهي مهمة في بعض المناطق الصحراوية.",
    fact: "يجب استخدام المياه الجوفية بحكمة حتى لا تنفد.",
  },
  {
    id: "lakes",
    name: "البحيرات الشمالية",
    emoji: "🦆",
    category: "بحيرات",
    color: "green",
    text: "من البحيرات الشمالية في مصر بحيرة المنزلة وبحيرة البرلس وبحيرة البردويل. وتوفر هذه البيئات أماكن مهمة للأسماك والطيور.",
    fact: "تساعد البحيرات في دعم الثروة السمكية.",
  },
  {
    id: "med",
    name: "البحر المتوسط",
    emoji: "⛵",
    category: "مياه مالحة",
    color: "orange",
    text: "يقع البحر المتوسط شمال مصر. وتُستخدم مياهه في الصيد والنقل البحري والسياحة، كما تعيش فيه أنواع متعددة من الكائنات البحرية.",
    fact: "البحر المتوسط يقع شمال مصر.",
  },
  {
    id: "red",
    name: "البحر الأحمر",
    emoji: "🐠",
    category: "مياه مالحة",
    color: "orange",
    text: "يقع البحر الأحمر شرق مصر، ويتميز بالشعاب المرجانية والكائنات البحرية الجميلة. كما يجذب السياح ويساعد في دعم الصيد والسياحة.",
    fact: "البحر الأحمر معروف بالشعاب المرجانية.",
  },
];

const activityQuestions = [
  {
    q: "نهر النيل من مصادر المياه...",
    options: ["العذبة", "المالحة", "المجمدة"],
    answer: 0,
    explain: "صحيح! مياه نهر النيل عذبة.",
  },
  {
    q: "أين توجد المياه الجوفية؟",
    options: ["في السحب فقط", "تحت سطح الأرض", "في البحر فقط"],
    answer: 1,
    explain: "أحسنتِ! توجد المياه الجوفية تحت سطح الأرض.",
  },
  {
    q: "أي بحر يقع شمال مصر؟",
    options: ["البحر الأحمر", "البحر المتوسط", "بحيرة ناصر"],
    answer: 1,
    explain: "رائع! يقع البحر المتوسط شمال مصر.",
  },
];

const examQuestions = [
  {
    q: "ما المصدر الرئيسي للمياه العذبة في مصر؟",
    options: ["نهر النيل", "البحر الأحمر", "البحر المتوسط"],
    answer: 0,
  },
  {
    q: "تقع بحيرة ناصر خلف...",
    options: ["قناطر إدفينا", "السد العالي", "قناة السويس"],
    answer: 1,
  },
  {
    q: "أي مصدر من الآتي مياهه مالحة؟",
    options: ["نهر النيل", "المياه الجوفية العذبة", "البحر الأحمر"],
    answer: 2,
  },
  {
    q: "توجد المياه الجوفية...",
    options: ["تحت سطح الأرض", "في قمم الجبال فقط", "في الهواء"],
    answer: 0,
  },
  {
    q: "من طرق المحافظة على المياه...",
    options: [
      "ترك الصنبور مفتوحًا",
      "تلويث الأنهار",
      "ترشيد الاستهلاك",
    ],
    answer: 2,
  },
];

const pageNames = [
  "البداية",
  "أهداف التعلم",
  "مصادر المياه",
  "المياه العذبة",
  "المياه المالحة",
  "خريطة مصر",
  "تحدي المياه",
  "ملخص الدرس بالفيديو",
  "الاختبار النهائي",
  "معلومات البرمجية",
];

function Heading({ eyebrow, title, subtitle }) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const [activityAnswers, setActivityAnswers] = useState([]);
  const [activityFeedback, setActivityFeedback] = useState("");
  const [examIndex, setExamIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState([]);
  const [examFeedback, setExamFeedback] = useState("");
  const [mapPlace, setMapPlace] = useState(sources[0]);
  const [finishedExam, setFinishedExam] = useState(false);

  const currentSource = sources[sourceIndex];
  const currentActivity = activityQuestions[activityIndex];
  const currentExam = examQuestions[examIndex];

  function goTo(nextPage) {
    setPage(Math.max(0, Math.min(pageNames.length - 1, nextPage)));
  }

  function chooseActivity(answerIndex) {
    if (activityAnswers[activityIndex] !== undefined) return;

    if (answerIndex === currentActivity.answer) {
      const updated = [...activityAnswers];
      updated[activityIndex] = answerIndex;
      setActivityAnswers(updated);
      setActivityFeedback("✅ " + currentActivity.explain);
    } else {
      setActivityFeedback(
        "💡 حاولي مرة أخرى! فكري في المعلومة التي تعلمناها."
      );
    }
  }

  function nextActivity() {
    if (activityAnswers[activityIndex] === undefined) return;

    if (activityIndex < activityQuestions.length - 1) {
      setActivityIndex(activityIndex + 1);
      setActivityFeedback("");
    } else {
      goTo(7);
    }
  }

  function chooseExam(answerIndex) {
    if (examAnswers[examIndex] !== undefined) return;

    if (answerIndex === currentExam.answer) {
      const updated = [...examAnswers];
      updated[examIndex] = answerIndex;
      setExamAnswers(updated);
      setExamFeedback("✅ إجابة صحيحة، أحسنتِ!");
    } else {
      setExamFeedback("❌ ليست الإجابة الصحيحة. حاولي مرة أخرى.");
    }
  }

  function nextExam() {
    if (examAnswers[examIndex] === undefined) return;

    if (examIndex < examQuestions.length - 1) {
      setExamIndex(examIndex + 1);
      setExamFeedback("");
    } else {
      setFinishedExam(true);
      setExamFeedback("");
    }
  }

  function resetExam() {
    setExamIndex(0);
    setExamAnswers([]);
    setExamFeedback("");
    setFinishedExam(false);
  }

  const examScore = examAnswers.filter(
    (answer, index) => answer === examQuestions[index].answer
  ).length;

  return (
    <div className="app-shell" dir="rtl">
      <header className="topbar">
        <button className="brand" onClick={() => goTo(0)}>
          <span className="brand-icon">💧</span>
          <span>
            <strong>رحلة المياه</strong>
            <small>مغامرة تعليمية في مصر</small>
          </span>
        </button>
      </header>

      <div className="app-layout">
        <aside className="sidebar">
          <div className="sidebar-title">محطات الرحلة</div>

          {pageNames.map((name, index) => (
            <button
              key={name}
              className={`nav-item ${page === index ? "active" : ""}`}
              onClick={() => goTo(index)}
            >
              <span className="nav-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{name}</span>
            </button>
          ))}

          <div className="sidebar-note">
            <span>🌍</span>
            <p>كل نقطة مياه تصنع فرقًا. هيا نحافظ عليها!</p>
          </div>
        </aside>

        <main className="main-content">
          {page === 0 && (
            <section className="hero-page">
              <div className="hero-copy">
                <span className="eyebrow">
                  مغامرة الصف الخامس الابتدائي
                </span>

                <h1>
                  أهلًا بك في
                  <br />
                  <span>رحلة المياه</span>
                </h1>

                <p>
                  استعد لاكتشاف أسرار الموارد المائية في مصر، من نهر النيل
                  إلى البحار والبحيرات والمياه الجوفية.
                </p>

                <div className="hero-buttons">
                  <button className="primary-btn" onClick={() => goTo(1)}>
                    ابدأ المغامرة <span>←</span>
                  </button>
                </div>

                <div className="hero-stats">
                  <div>
                    <strong>6</strong>
                    <span>مصادر للمياه</span>
                  </div>
                  <div>
                    <strong>5</strong>
                    <span>أسئلة نهائية</span>
                  </div>
                  <div>
                    <strong>1</strong>
                    <span>مهمة الحفاظ على المياه</span>
                  </div>
                </div>
              </div>

              <div className="hero-art">
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="hero-water">💧</div>
                <span className="float-icon icon-one">🐟</span>
                <span className="float-icon icon-two">🌱</span>
                <span className="float-icon icon-three">☀️</span>
                <div className="art-caption">
                  <span>🌊</span>
                  <div>
                    <strong>الماء سر الحياة</strong>
                    <small>اكتشف وتعلم واستمتع</small>
                  </div>
                </div>
              </div>
            </section>
          )}

          {page === 1 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الأولى"
                title="ماذا سنتعلم اليوم؟"
                subtitle="في نهاية رحلتنا، ستكون قادرًا على التعرف إلى أهم مصادر المياه في مصر."
              />

              <div className="objectives-grid">
                {[
                  ["🔎", "التعرّف إلى المصادر", "التعرف على مصادر المياه العذبة والمالحة في مصر."],
                  ["🗺️", "تحديد المواقع", "تحديد مواقع بعض مصادر المياه على خريطة مصر."],
                  ["💡", "فهم الأهمية", "توضيح أهمية المياه للإنسان والزراعة والبيئة."],
                  ["💙", "حماية المياه", "اقتراح سلوكيات تساعد على ترشيد استهلاك المياه."],
                ].map(([emoji, title, desc]) => (
                  <article className="objective-card" key={title}>
                    <span className="large-emoji">{emoji}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </article>
                ))}
              </div>

              <div className="callout">
                <span>🎒</span>
                <p>جهّز نفسك يا بطل! أمامك رحلة مليئة بالاكتشافات.</p>
              </div>

              <div className="page-actions">
                <button className="primary-btn" onClick={() => goTo(2)}>
                  هيا نكتشف المصادر ←
                </button>
              </div>
            </section>
          )}

          {page === 2 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الثانية"
                title="مصادر المياه في مصر"
                subtitle="تنقّل بين البطاقات لاكتشاف كل مصدر."
              />

              <div className="source-layout">
                <div className="source-list">
                  {sources.map((source, index) => (
                    <button
                      key={source.id}
                      className={`source-list-item ${
                        sourceIndex === index ? "selected" : ""
                      }`}
                      onClick={() => setSourceIndex(index)}
                    >
                      <span className="source-emoji">{source.emoji}</span>
                      <span className="source-list-text">
                        <strong>{source.name}</strong>
                        <small>{source.category}</small>
                      </span>
                      <span>←</span>
                    </button>
                  ))}
                </div>

                <article className={`source-detail ${currentSource.color}`}>
                  <div className="source-detail-top">
                    <span className="source-detail-emoji">
                      {currentSource.emoji}
                    </span>
                    <span className="pill">{currentSource.category}</span>
                  </div>

                  <h2>{currentSource.name}</h2>
                  <p>{currentSource.text}</p>

                  <div className="fact-box">
                    <span>⭐ معلومة مهمة</span>
                    <p>{currentSource.fact}</p>
                  </div>

                  <div className="source-pagination">
                    <button
                      className="secondary-btn"
                      disabled={sourceIndex === 0}
                      onClick={() =>
                        setSourceIndex((index) => Math.max(0, index - 1))
                      }
                    >
                      → السابق
                    </button>

                    <span>
                      {sourceIndex + 1} من {sources.length}
                    </span>

                    <button
                      className="primary-btn"
                      disabled={sourceIndex === sources.length - 1}
                      onClick={() =>
                        setSourceIndex((index) =>
                          Math.min(sources.length - 1, index + 1)
                        )
                      }
                    >
                      التالي ←
                    </button>
                  </div>
                </article>
              </div>

              <div className="page-actions">
                <button className="primary-btn" onClick={() => goTo(3)}>
                  المياه العذبة ←
                </button>
              </div>
            </section>
          )}

          {page === 3 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الثالثة"
                title="المياه العذبة"
                subtitle="مياه نحتاج إليها في حياتنا كل يوم."
              />

              <div className="feature-banner fresh-banner">
                <span className="banner-emoji">💧</span>
                <div>
                  <span className="pill">مياه عذبة</span>
                  <h2>مياه الحياة</h2>
                  <p>
                    نستخدم المياه العذبة في الشرب والزراعة وبعض الأنشطة اليومية.
                  </p>
                </div>
              </div>

              <div className="three-cards">
                {sources
                  .filter((source) =>
                    ["nile", "lake", "ground"].includes(source.id)
                  )
                  .map((source) => (
                    <article className="mini-card" key={source.id}>
                      <span className="large-emoji">{source.emoji}</span>
                      <h3>{source.name}</h3>
                      <p>{source.text}</p>
                    </article>
                  ))}
              </div>

              <div className="callout">
                <span>⚠️</span>
                <p>لا نهدر المياه العذبة، ولا نلقي المخلفات في الأنهار.</p>
              </div>

              <div className="page-actions">
                <button className="primary-btn" onClick={() => goTo(4)}>
                  اكتشف المياه المالحة ←
                </button>
              </div>
            </section>
          )}

          {page === 4 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الرابعة"
                title="المياه المالحة"
                subtitle="البحار ثروة طبيعية مهمة، ولها فوائد كثيرة."
              />

              <div className="feature-banner salt-banner">
                <span className="banner-emoji">🌊</span>
                <div>
                  <span className="pill">مياه مالحة</span>
                  <h2>عالم البحار</h2>
                  <p>
                    تدعم البحار الصيد والسياحة والنقل البحري، وتعيش فيها كائنات متنوعة.
                  </p>
                </div>
              </div>

              <div className="three-cards">
                {sources
                  .filter((source) =>
                    ["med", "red", "lakes"].includes(source.id)
                  )
                  .map((source) => (
                    <article className="mini-card" key={source.id}>
                      <span className="large-emoji">{source.emoji}</span>
                      <h3>{source.name}</h3>
                      <p>{source.text}</p>
                    </article>
                  ))}
              </div>

              <div className="callout">
                <span>🐬</span>
                <p>نحافظ على البحار من التلوث لحماية الأسماك والكائنات البحرية.</p>
              </div>

              <div className="page-actions">
                <button className="primary-btn" onClick={() => goTo(5)}>
                  استكشف الخريطة ←
                </button>
              </div>
            </section>
          )}

          {page === 5 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الخامسة"
                title="استكشف خريطة مصر"
                subtitle="اختاري مصدرًا من القائمة، ثم تعرّفي إلى موقعه وأهميته."
              />

              <div className="map-layout">
                <div className="map-visual">
                  <div className="map-sea north">البحر المتوسط</div>
                  <div className="egypt-shape">
                    <div className="map-pin pin-nile">🌊<small>النيل</small></div>
                    <div className="map-pin pin-lake">💧<small>بحيرة ناصر</small></div>
                    <div className="map-pin pin-west">🪨<small>مياه جوفية</small></div>
                    <div className="map-pin pin-east">🐠<small>البحر الأحمر</small></div>
                    <div className="map-pin pin-lakes">🦆<small>البحيرات</small></div>
                  </div>
                  <div className="map-sea east">البحر الأحمر</div>
                  <p className="map-disclaimer">
                    رسم تعليمي توضيحي لمواقع بعض مصادر المياه، وليس خريطة بمقياس رسم.
                  </p>
                </div>

                <div className="map-info">
                  <h3>اختاري مصدرًا</h3>

                  {sources.map((source) => (
                    <button
                      key={source.id}
                      className={`map-choice ${
                        mapPlace.id === source.id ? "selected" : ""
                      }`}
                      onClick={() => setMapPlace(source)}
                    >
                      <span>{source.emoji}</span>
                      <strong>{source.name}</strong>
                    </button>
                  ))}

                  <div className="map-selected">
                    <span className="large-emoji">{mapPlace.emoji}</span>
                    <h3>{mapPlace.name}</h3>
                    <p>{mapPlace.text}</p>
                  </div>
                </div>
              </div>

              <div className="page-actions">
                <button className="primary-btn" onClick={() => goTo(6)}>
                  ابدأ تحدي المياه ←
                </button>
              </div>
            </section>
          )}

          {page === 6 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة السادسة"
                title="تحدي المياه 💦"
                subtitle="أجيبي عن كل سؤال بشكل صحيح لتنتقلي إلى التحدي التالي."
              />

              <div className="quiz-card">
                <div className="quiz-progress">
                  <span>
                    السؤال {activityIndex + 1} من {activityQuestions.length}
                  </span>
                  <div className="progress-track">
                    <div
                      style={{
                        width: `${
                          ((activityIndex + 1) / activityQuestions.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <span className="quiz-emoji">🧠</span>
                <h2>{currentActivity.q}</h2>

                <div className="answer-list">
                  {currentActivity.options.map((option, index) => (
                    <button
                      key={option}
                      className={`answer-option ${
                        activityAnswers[activityIndex] === index
                          ? "correct-answer"
                          : ""
                      }`}
                      onClick={() => chooseActivity(index)}
                      disabled={activityAnswers[activityIndex] !== undefined}
                    >
                      <span>{["أ", "ب", "ج"][index]}</span>
                      {option}
                    </button>
                  ))}
                </div>

                {activityFeedback && (
                  <div className="feedback-box">{activityFeedback}</div>
                )}

                {activityAnswers[activityIndex] !== undefined && (
                  <button
                    className="primary-btn full-width"
                    onClick={nextActivity}
                  >
                    {activityIndex === activityQuestions.length - 1
                      ? "إلى ملخص الدرس ←"
                      : "السؤال التالي ←"}
                  </button>
                )}
              </div>
            </section>
          )}

          {page === 7 && (
            <section className="content-page summary-page">
              <Heading
                eyebrow="المحطة السابعة"
                title="🎬 ملخص درس الموارد المائية في مصر"
                subtitle="شاهدي الفيديو واستمعي إلى الشرح قبل دخول الاختبار النهائي."
              />

              <div className="video-container">
                <iframe
                  className="lesson-video"
                  src="https://www.youtube-nocookie.com/embed/JYVoaN1ybUo"
                  title="شرح الموارد المائية في مصر للصف الخامس الابتدائي"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              <div className="video-fallback">
                لو الفيديو لم يعمل داخل الصفحة، افتحيه مباشرة من يوتيوب:
                <a
                  href="https://www.youtube.com/watch?v=JYVoaN1ybUo"
                  target="_blank"
                  rel="noreferrer"
                >
                  مشاهدة ملخص الدرس على يوتيوب ↗
                </a>
              </div>

              <div className="callout">
                <span>💧</span>
                <p>
                  تذكري أن نهر النيل مصدر مهم للمياه العذبة، وأن البحيرات
                  والمياه الجوفية والبحار لها أهمية كبيرة. ويجب علينا ترشيد
                  استهلاك المياه والمحافظة على نظافتها.
                </p>
              </div>

              <div className="page-actions">
                <button className="secondary-btn" onClick={() => goTo(6)}>
                  → العودة إلى تحدي المياه
                </button>

                <button className="primary-btn" onClick={() => goTo(8)}>
                  الانتقال إلى الاختبار النهائي 🎯
                </button>
              </div>
            </section>
          )}

          {page === 8 && (
            <section className="content-page">
              <Heading
                eyebrow="المحطة الثامنة"
                title="الاختبار النهائي 🎯"
                subtitle="اختبري معلوماتك بعد مشاهدة ملخص الدرس."
              />

              {finishedExam ? (
                <div className="result-card">
                  <div className="result-emoji">
                    {examScore >= 4 ? "🏆" : examScore >= 3 ? "⭐" : "💪"}
                  </div>
                  <h2>
                    {examScore >= 4
                      ? "رائع! أنت بطل المياه!"
                      : "أحسنت المحاولة!"}
                  </h2>
                  <p>نتيجتك النهائية</p>

                  <div className="score-circle">
                    <strong>{examScore}</strong>
                    <span>من {examQuestions.length}</span>
                  </div>

                  <p>
                    {examScore >= 4
                      ? "أصبحت تعرف الكثير عن مصادر المياه في مصر."
                      : "يمكنك مراجعة الدرس والمحاولة مرة أخرى."}
                  </p>

                  <div className="hero-buttons centered">
                    <button className="primary-btn" onClick={resetExam}>
                      إعادة الاختبار ↻
                    </button>
                    <button
                      className="secondary-btn"
                      onClick={() => goTo(9)}
                    >
                      معلومات البرمجية ←
                    </button>
                  </div>
                </div>
              ) : (
                <div className="quiz-card final-quiz">
                  <div className="quiz-progress">
                    <span>
                      السؤال {examIndex + 1} من {examQuestions.length}
                    </span>
                    <div className="progress-track">
                      <div
                        style={{
                          width: `${
                            ((examIndex + 1) / examQuestions.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  <span className="quiz-emoji">🎓</span>
                  <h2>{currentExam.q}</h2>

                  <div className="answer-list">
                    {currentExam.options.map((option, index) => (
                      <button
                        key={option}
                        className={`answer-option ${
                          examAnswers[examIndex] === index
                            ? "correct-answer"
                            : ""
                        }`}
                        onClick={() => chooseExam(index)}
                        disabled={examAnswers[examIndex] !== undefined}
                      >
                        <span>{["أ", "ب", "ج"][index]}</span>
                        {option}
                      </button>
                    ))}
                  </div>

                  {examFeedback && (
                    <div className="feedback-box">{examFeedback}</div>
                  )}

                  {examAnswers[examIndex] !== undefined && (
                    <button
                      className="primary-btn full-width"
                      onClick={nextExam}
                    >
                      {examIndex === examQuestions.length - 1
                        ? "عرض النتيجة 🏆"
                        : "السؤال التالي ←"}
                    </button>
                  )}
                </div>
              )}
            </section>
          )}

          {page === 9 && (
            <section className="content-page credits-page">
              <div className="credits-art">💧</div>
              <span className="eyebrow">نهاية الرحلة</span>
              <h1>شكرًا يا أبطال المياه!</h1>
              <p className="credits-intro">
                تذكّروا دائمًا أن المحافظة على المياه مسؤولية الجميع.
              </p>

              <div className="credits-card">
                <h2>إعداد البرمجية التعليمية</h2>
                <p className="student-name">فاطمة الزهراء بخيت</p>
                <div className="credits-divider" />
                <h3>إشراف</h3>
                <p>د. نرمين نصر</p>
                <p>د. حسام حمدي</p>
              </div>

              <button className="primary-btn" onClick={() => goTo(0)}>
                ↻ العودة إلى البداية
              </button>
            </section>
          )}

          <footer className="page-footer">
            <span>💧 رحلة المياه في مصر</span>
            <span>
              المحطة {page + 1} من {pageNames.length}
            </span>
            <div className="footer-progress">
              <div
                style={{
                  width: `${((page + 1) / pageNames.length) * 100}%`,
                }}
              />
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
