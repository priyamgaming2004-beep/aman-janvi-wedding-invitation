const languageGate = document.getElementById("languageGate");
const languageButtons = document.querySelectorAll(".language-btn");
const languageToggle = document.getElementById("languageToggle");
const preloader = document.getElementById("preloader");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const nav = document.getElementById("nav");

const translations = {
  en: {
    preloaderText:"Two hearts. One beautiful journey.", openInvitation:"Open Invitation", navStory:"Our Story", navEvents:"Events", navVenue:"Venue", navFamily:"Our Family", navGallery:"Gallery",
    heroEyebrow:"You are cordially invited to celebrate our wedding", heroDate:"01 & 02 DECEMBER 2026", heroLocation:"Chandausi, Badaun", scrollCue:"Scroll down to begin our story", quote:"“Some love stories feel like destiny.”",
    storyEyebrow:"OUR STORY", storyTitle1:"From a thousand little moments", storyTitle2:"to one beautiful forever.", storyCaption:"It was always about finding joy in the ordinary.", storyP1:"Somewhere between laughter, adventures, quiet conversations and countless memories, two lives began to feel like one story.", storyP2:"And now, we're turning the page to our favourite chapter yet.", nextChapter:"THE NEXT CHAPTER", beginsForever:"Begins with forever.",
    countdownEyebrow:"COUNTDOWN TO OUR FOREVER", countdownTitle:"The wait is almost over.", days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds", weddingEyebrow:"THE WEDDING", weddingTitle1:"A celebration of", weddingTitle2:"love, rituals & togetherness.", monday:"MONDAY", tuesday:"TUESDAY", wednesday:"WEDNESDAY", dec2026:"DECEMBER 2026", dec2026b:"DECEMBER 2026",
    venueEyebrow:"WHERE WE SAY “I DO”", venueLocation:"Chandausi, Badaun, Uttar Pradesh", openMaps:"Open in Google Maps ↗", familyEyebrow:"OUR FAMILY", familyTitle1:"Surrounded by the people", familyTitle2:"who make every moment special.", grandparents:"Grand Father & Grand Mother", familyBlessing:"WITH THEIR BLESSINGS", familyParents:"FAMILY & LOVED ONES", familyCircle:"OUR CIRCLE", galleryEyebrow:"OUR JOURNEY", galleryTitle1:"A few moments", galleryTitle2:"from our story.", closingEyebrow:"THE BEGINNING OF FOREVER", closingTitle1:"We can't wait", closingTitle2:"to celebrate with you.", closingDate:"01 & 02 December 2026", findVenue:"Find the Venue ↗",
    event_Bhaat:"Bhaat", event_Sangeet:"Sangeet", event_Ghud_Chadhi:"Ghud Chadhi", event_Haldi:"Haldi", event_Nikrosi:"Nikrosi", event_Khet_Lagun:"Khet Lagun", event_Baraat:"Baraat", event_Jaymala:"Jaymala", event_Phere:"Phere", event_Vidaai:"Vidaai"
  },
  hi: {
    preloaderText:"दो दिल। एक खूबसूरत सफ़र।", openInvitation:"निमंत्रण खोलें", navStory:"हमारी कहानी", navEvents:"कार्यक्रम", navVenue:"स्थान", navFamily:"हमारा परिवार", navGallery:"तस्वीरें",
    heroEyebrow:"आपको हमारी शादी के जश्न में सादर आमंत्रित किया जाता है", heroDate:"01 और 02 दिसंबर 2026", heroLocation:"चंदौसी, बदायूं", scrollCue:"हमारी कहानी शुरू करने के लिए नीचे जाएँ", quote:"“कुछ प्रेम कहानियाँ किस्मत जैसी लगती हैं।”",
    storyEyebrow:"हमारी कहानी", storyTitle1:"हज़ारों छोटी-छोटी यादों से", storyTitle2:"एक खूबसूरत हमेशा के सफ़र तक।", storyCaption:"हर छोटी खुशी में साथ रहना ही हमारी कहानी थी।", storyP1:"हँसी, सफ़र, ख़ामोश बातचीत और अनगिनत यादों के बीच, दो ज़िंदगियाँ धीरे-धीरे एक कहानी बन गईं।", storyP2:"और अब हम अपनी कहानी का सबसे खूबसूरत अध्याय शुरू करने जा रहे हैं।", nextChapter:"अगला अध्याय", beginsForever:"हमेशा के साथ की शुरुआत।",
    countdownEyebrow:"हमेशा के सफ़र की उलटी गिनती", countdownTitle:"इंतज़ार अब लगभग खत्म होने वाला है।", days:"दिन", hours:"घंटे", minutes:"मिनट", seconds:"सेकंड", weddingEyebrow:"शुभ विवाह", weddingTitle1:"प्यार, रस्मों और", weddingTitle2:"अपनों के साथ जश्न।", monday:"सोमवार", tuesday:"मंगलवार", wednesday:"बुधवार", dec2026:"दिसंबर 2026", dec2026b:"दिसंबर 2026",
    venueEyebrow:"जहाँ हम कहेंगे “हाँ”", venueLocation:"चंदौसी, बदायूं, उत्तर प्रदेश", openMaps:"Google Maps में देखें ↗", familyEyebrow:"हमारा परिवार", familyTitle1:"उन अपनों के बीच", familyTitle2:"जो हर पल को खास बनाते हैं।", grandparents:"दादा-दादी", familyBlessing:"उनके आशीर्वाद के साथ", familyParents:"परिवार और अपने", familyCircle:"हमारा अपना संसार", galleryEyebrow:"हमारा सफ़र", galleryTitle1:"हमारी कहानी के", galleryTitle2:"कुछ खूबसूरत पल।", closingEyebrow:"हमेशा की शुरुआत", closingTitle1:"हम इंतज़ार नहीं कर सकते", closingTitle2:"आपके साथ जश्न मनाने का।", closingDate:"01 और 02 दिसंबर 2026", findVenue:"स्थान देखें ↗",
    event_Bhaat:"भात", event_Sangeet:"संगीत", event_Ghud_Chadhi:"घुड़ चढ़ी", event_Haldi:"हल्दी", event_Nikrosi:"निकरोसी", event_Khet_Lagun:"खेत लगुन", event_Baraat:"बारात", event_Jaymala:"जयमाला", event_Vidaai:"विदाई"
  }
};

function setLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "hi" ? "hi" : "en";
  document.body.dataset.language = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key] !== undefined) el.textContent=dict[key];
  });
  document.querySelectorAll("[data-name-en][data-name-hi]").forEach(el=>{
    el.textContent = lang === "hi" ? el.dataset.nameHi : el.dataset.nameEn;
  });
  document.querySelectorAll("[data-role-en][data-role-hi]").forEach(el=>{
    el.textContent = lang === "hi" ? el.dataset.roleHi : el.dataset.roleEn;
  });
  if(languageToggle) languageToggle.textContent = lang === "hi" ? "English" : "हिंदी";
  localStorage.setItem("weddingLanguage",lang);
}

function showInvitation(){
  languageGate.classList.add("hide");
  preloader.classList.remove("hide-preloader");
  document.body.classList.add("locked");
}

languageButtons.forEach(btn=>btn.addEventListener("click",()=>{
  setLanguage(btn.dataset.lang);
  showInvitation();
}));

languageToggle.addEventListener("click",()=>{
  const next=document.body.dataset.language === "hi" ? "en" : "hi";
  setLanguage(next);
});

enterBtn.addEventListener("click", async () => {
  preloader.classList.add("hide");
  document.body.classList.remove("locked");
  try { await music.play(); musicToggle.classList.add("playing"); } catch (_) {}
});

document.body.classList.add("locked");

musicToggle.addEventListener("click", async () => {
  if (music.paused) { try { await music.play(); musicToggle.classList.add("playing"); } catch (_) {} }
  else { music.pause(); musicToggle.classList.remove("playing"); }
});

window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>40),{passive:true});

const weddingDate = new Date("2026-12-01T13:00:00+05:30").getTime();
function updateCountdown(){
  let diff=Math.max(0,weddingDate-Date.now());
  const d=Math.floor(diff/86400000); diff%=86400000;
  const h=Math.floor(diff/3600000); diff%=3600000;
  const m=Math.floor(diff/60000); diff%=60000;
  const s=Math.floor(diff/1000);
  document.getElementById("days").textContent=String(d).padStart(2,"0");
  document.getElementById("hours").textContent=String(h).padStart(2,"0");
  document.getElementById("minutes").textContent=String(m).padStart(2,"0");
  document.getElementById("seconds").textContent=String(s).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -30px 0px"});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const heroPhoto=document.querySelector(".hero__photo");
window.addEventListener("scroll",()=>{if(heroPhoto&&window.scrollY<window.innerHeight*1.2)heroPhoto.style.transform=`scale(1.04) translateY(${window.scrollY*.08}px)`},{passive:true});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".gallery-grid img").forEach(img=>img.addEventListener("click",()=>{lightboxImg.src=img.src;lightboxImg.alt=img.alt;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImg.src="";}
document.getElementById("lightboxClose").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();});

const savedLanguage=localStorage.getItem("weddingLanguage");
if(savedLanguage && translations[savedLanguage]){
  setLanguage(savedLanguage);
  languageGate.classList.add("hide");
  preloader.classList.remove("hide-preloader");
} else {
  languageGate.classList.remove("hide");
  preloader.classList.add("hide-preloader");
}
