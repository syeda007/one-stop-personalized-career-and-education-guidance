// lang.js

const translations = {
  en: {
    nav: { home: "Home", test: "Aptitude Test", colleges: "Colleges", courses: "Courses" },
    hero: {
      title: "Your Personalized Career & Education Journey Starts Here",
      subtitle: "Discover your potential with our aptitude test, explore government colleges, and get personalized career guidance in multiple languages.",
      startTest: "Take Aptitude Test",
      exploreColleges: "Explore Colleges"
    },
    test: { start: "Start Test", resultTitle: "Your Recommendations", resultSubtitle: "Based on your answers, we recommend these fields and colleges:" },
    footer: { rights: "All rights reserved." }
  },
  hi: {
    nav: { home: "होम", test: "अभिक्षमता परीक्षा", colleges: "सरकारी कॉलेज", courses: "पाठ्यक्रम" },
    hero: {
      title: "आपकी व्यक्तिगत करियर और शिक्षा यात्रा यहाँ से शुरू होती है",
      subtitle: "हमारी अभिक्षमता परीक्षा से अपनी क्षमता खोजें, सरकारी कॉलेज देखें, और बहुभाषी व्यक्तिगत मार्गदर्शन प्राप्त करें।",
      startTest: "परीक्षा शुरू करें",
      exploreColleges: "कॉलेज देखें"
    },
    test: { start: "परीक्षा शुरू करें", resultTitle: "आपकी सिफ़ारिशें", resultSubtitle: "आपके उत्तरों के आधार पर हम ये क्षेत्र और कॉलेज सुझाते हैं:" },
    footer: { rights: "सर्वाधिकार सुरक्षित।" }
  },
  te: {
    nav: { home: "హోమ్", test: "అభిజ్ఞత పరీక్ష", colleges: "ప్రభుత్వ కళాశాలలు", courses: "కోర్సులు" },
    hero: {
      title: "మీ వ్యక్తిగత కెరీర్ & విద్యా ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది",
      subtitle: "మా అభిజ్ఞత పరీక్షతో మీ సామర్థ్యాన్ని కనుగొనండి, ప్రభుత్వ కళాశాలలను అన్వేషించండి, మరియు బహుభాషా వ్యక్తిగత మార్గదర్శకాన్ని పొందండి.",
      startTest: "పరీక్ష ప్రారంభించండి",
      exploreColleges: "కళాశాలలు చూడండి"
    },
    test: { start: "పరీక్ష ప్రారంభించండి", resultTitle: "మీ సిఫార్సులు", resultSubtitle: "మీ సమాధానాల ఆధారంగా మేము ఈ రంగాలు మరియు కళాశాలలను సూచిస్తున్నాము:" },
    footer: { rights: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి." }
  },
  ur: {
    nav: { home: "ہوم", test: "اہلیت ٹیسٹ", colleges: "سرکاری کالج", courses: "کورسز" },
    hero: {
      title: "آپ کا ذاتی کیریئر اور تعلیم کا سفر یہاں سے شروع ہوتا ہے",
      subtitle: "ہمارے اہلیت ٹیسٹ کے ساتھ اپنی صلاحیت دریافت کریں، سرکاری کالجز دیکھیں، اور کثیر لسانی ذاتی رہنمائی حاصل کریں۔",
      startTest: "ٹیسٹ شروع کریں",
      exploreColleges: "کالج دیکھیں"
    },
    test: { start: "ٹیسٹ شروع کریں", resultTitle: "آپ کی سفارشات", resultSubtitle: "آپ کے جوابات کی بنیاد پر ہم یہ شعبے اور کالجز تجویز کرتے ہیں:" },
    footer: { rights: "جملہ حقوق محفوظ ہیں۔" }
  }
};

// Load saved language or default to English
let currentLang = localStorage.getItem("lang") || "en";

// Apply translations on page load
function applyTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    let keys = el.getAttribute("data-translate").split(".");
    let text = translations[currentLang];
    keys.forEach(k => (text = text[k]));
    if (text) el.innerText = text;
  });

  // Keep dropdown in sync
  const langSelect = document.querySelector("select");
  if (langSelect) langSelect.value = currentLang;
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

// Run after page loads
window.addEventListener("DOMContentLoaded", applyTranslations);
