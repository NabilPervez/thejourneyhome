import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen, Heart, Star, Sun, Moon, Droplets, Mountain, Compass, Anchor,
  User, Check, X, ArrowRight, Scroll, Sparkles, ChevronLeft, ChevronRight,
  Wind, Thermometer, Map, Activity, GraduationCap, HeartHandshake, Coffee,
  MessageCircle, Flame, Mic2, Shield, Smile, ArrowLeft, Menu, Eye, Cloud,
  Ghost, Scale, Lock, Globe, Swords, Flag, Tent, Crown
} from 'lucide-react';

// --- DATA: Traits of a Believer (Expanded) ---
const TRAITS_DATA = [
  {
    id: 'ilm',
    icon: GraduationCap,
    arabic: "عِلْم",
    transliteration: "Ilm",
    english: "Knowledge",
    color: "bg-blue-50 text-blue-800",
    quote: "Seek knowledge from the cradle to the grave.",
    quran: "Allah will raise those who have believed among you and those who were given knowledge, by degrees.",
    source: "Quran 58:11",
    desc: [
      "In Islam, faith is not blind; it is built on understanding. The very first word revealed was 'Iqra' (Read). Seeking knowledge of the world (science, math, medicine) and the divine is considered an act of worship.",
      "Ignorance is seen as the root of evil. A believer must be intellectually curious, questioning, and studious. The Prophet (peace be upon him) said, 'The seeking of knowledge is obligatory for every Muslim.' This includes both religious and secular knowledge that benefits humanity.",
      "True knowledge leads to humility. The more one learns about the complexity of the universe, the more one realizes the greatness of the Creator. Arrogance is the sign of superficial knowledge; humility is the sign of deep understanding."
    ],
    practice: "Start by reading one page of a beneficial book a day. Do not shy away from questions; the truth can handle scrutiny. Dedicate time to learn a new skill that can help your community."
  },
  {
    id: 'ibadah',
    icon: Star,
    arabic: "عِبَادَة",
    transliteration: "Ibadah",
    english: "Devotion",
    color: "bg-emerald-50 text-emerald-800",
    quote: "Worship is the connection between the finite and the Infinite.",
    quran: "And I did not create the jinn and mankind except to worship Me.",
    source: "Quran 51:56",
    desc: [
      "Ibadah is often translated as 'worship', but it means much more. It implies a state of submission and love. It is not limited to rituals; it encompasses every action done with the intention to please God.",
      "Smiling at your neighbor is worship. Removing a stone from the road is worship. Working honestly to provide for your family is worship. Even sleep, if intended to rest the body for good deeds, becomes worship.",
      "However, the ritual pillars (Prayer, Fasting, Hajj) are the structural foundation. Just as a house needs beams to stand, the spiritual heart needs the structure of the five daily prayers to remain connected to its Source."
    ],
    practice: "Try to maintain the 5 daily prayers. They are the 'oxygen' for the spiritual heart, resetting your focus throughout the busy day. Make a conscious intention before every mundane task: 'I am doing this for the sake of Allah.'"
  },
  {
    id: 'zakat',
    icon: HeartHandshake,
    arabic: "زَكَاة",
    transliteration: "Zakat",
    english: "Charity",
    color: "bg-amber-50 text-amber-800",
    quote: "Charity does not decrease wealth.",
    quran: "Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase...",
    source: "Quran 9:103",
    desc: [
      "Zakat literally means 'to purify' and 'to grow'. Muslims believe that wealth is not owned, but entrusted. God gives wealth to test if we will share it. 2.5% of accumulated savings belongs by right to the poor.",
      "By giving away this portion, we 'purify' the remaining wealth and detach our hearts from greed. It creates a circulation of wealth in society so that the rich do not hoard resources while the poor starve.",
      "Beyond the obligatory Zakat, there is Sadaqah (voluntary charity). The Prophet said, 'Your smile for your brother is charity.' Even meeting your brother with a cheerful face is a good deed."
    ],
    practice: "Give a small amount to someone in need this week, but do it secretly. The best charity is when the left hand does not know what the right hand has given."
  },
  {
    id: 'sawm',
    icon: Coffee,
    arabic: "صَوْم",
    transliteration: "Sawm",
    english: "Fasting",
    color: "bg-purple-50 text-purple-800",
    quote: "Fasting is a shield.",
    quran: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
    source: "Quran 2:183",
    desc: [
      "Fasting during Ramadan is not just starving the body; it is feeding the soul. By denying physical cravings (food, water, intimacy) from dawn to sunset, we gain mastery over our impulses.",
      "It teaches discipline. If you can stay away from Halal (permissible) food for God, you can certainly stay away from Haram (forbidden) sins like lying and backbiting. The Prophet warned, 'Whoever does not give up evil speech and acting upon it, Allah has no need of his giving up his food and drink.'",
      "It also creates deep empathy. When your stomach growls, you remember the poor who feel this hunger involuntarily every day."
    ],
    practice: "Try fasting one day outside of Ramadan (Mondays or Thursdays). Use the hunger pangs as reminders to remember God and discipline your tongue."
  },
  {
    id: 'dua',
    icon: MessageCircle,
    arabic: "دُعَاء",
    transliteration: "Du'a",
    english: "Supplication",
    color: "bg-rose-50 text-rose-800",
    quote: "Du'a is the weapon of the believer.",
    quran: "And your Lord says, 'Call upon Me; I will respond to you.'",
    source: "Quran 40:60",
    desc: [
      "Du'a is an intimate conversation with the Creator. It requires no formality, no appointment, and no intermediary. You can ask for a new job, for forgiveness, or simply for peace of heart.",
      "God loves to be asked. In human relationships, people get annoyed if you ask too much. In the relationship with Allah, He gets angry if you *don't* ask, because it shows arrogance or self-reliance.",
      "There are three answers to Du'a: Yes; Yes, but later; or No, because I have something better for you. A believer trusts that the denial of a wish is often a protection."
    ],
    practice: "Take 5 minutes before sleeping to talk to God. Vent your frustrations and ask for what you need. He is the best Listener."
  },
  {
    id: 'sunnah',
    icon: Sparkles,
    arabic: "سُنَّة",
    transliteration: "Sunnah",
    english: "Prophetic Example",
    color: "bg-teal-50 text-teal-800",
    quote: "He was a walking Quran.",
    quran: "There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day...",
    source: "Quran 33:21",
    desc: [
      "The Sunnah is the lifestyle, sayings, and silent approvals of Prophet Muhammad (peace be upon him). While the Quran is the theory, the Sunnah is the practical application.",
      "He taught us how to eat (stopping before full), how to sleep (on the right side), how to treat neighbors (never eating while they are hungry), and how to control anger (changing position or seeking refuge in God).",
      "Following the Sunnah is not about blind imitation of 7th-century culture, but adopting the character traits and ethical standards he embodied. It turns mundane habits into rewards."
    ],
    practice: "Adopt one simple Sunnah: Smile more often, eat with your right hand, visit the sick, or say 'Bismillah' (In the name of God) before you start any task."
  },
  {
    id: 'qiraah',
    icon: BookOpen,
    arabic: "قِرَاءَة",
    transliteration: "Qira'ah",
    english: "Recitation",
    color: "bg-stone-100 text-stone-800",
    quote: "The Quran is a letter from the Beloved.",
    quran: "Recite, in the name of your Lord who created...",
    source: "Quran 96:1",
    desc: [
      "Qira'ah refers to the recitation of the Quran. It is not merely reading; it is a melodic, spiritual engagement with the Divine speech. The Quran describes itself as a healing for what is in the breasts.",
      "Reciting with Tajweed (proper pronunciation) and contemplation calms the heart and sharpens the intellect. It connects the reciter directly to the moment of revelation.",
      "The Prophet said, 'The best of you are those who learn the Quran and teach it.' It is the primary source of guidance, law, and comfort for a Muslim."
    ],
    practice: "Listen to a recitation of Surah Ar-Rahman (The Chapter of Mercy) online. Close your eyes and let the sound wash over you."
  },
  {
    id: 'dhikr',
    icon: Activity,
    arabic: "ذِكْر",
    transliteration: "Dhikr",
    english: "Mindfulness",
    color: "bg-indigo-50 text-indigo-800",
    quote: "The heart rusts like iron, and its polish is Dhikr.",
    quran: "Unquestionably, by the remembrance of Allah hearts are assured.",
    source: "Quran 13:28",
    desc: [
      "Dhikr is the constant remembrance of God. It is the Islamic equivalent of mindfulness. Whether walking to work, cooking, or driving, a believer keeps their tongue moist with gratitude and praise.",
      "It brings the heart from a state of agitation to a state of tranquility. It is a reminder that Allah is present in every moment, not just during prayer times.",
      "Common forms of Dhikr include saying 'SubhanAllah' (Glory be to God), 'Alhamdulillah' (Praise be to God), and 'Allahu Akbar' (God is Greater)."
    ],
    practice: "When you feel stressed, repeat 'SubhanAllah', 'Alhamdulillah', 'Allahu Akbar' 33 times each. It is a spiritual prescription for anxiety."
  },
  {
    id: 'sabr',
    icon: Shield,
    arabic: "صَبْر",
    transliteration: "Sabr",
    english: "Patience",
    color: "bg-orange-50 text-orange-800",
    quote: "Patience is beautiful.",
    quran: "Indeed, Allah is with the patient.",
    source: "Quran 2:153",
    desc: [
      "Sabr is often mistranslated as passive patience. In reality, it is active resilience. It is holding your ground when the wind blows hard. It is perseverance in doing good despite difficulty.",
      "There are three types of Sabr: Patience in obeying God, patience in refraining from sin, and patience during times of calamity.",
      "The Prophet said, 'Amazing is the affair of the believer, verily all of his affair is good... If prosperity befalls him, he is thankful (Shukr)... and if adversity befalls him, he is patient (Sabr).'"
    ],
    practice: "Next time you are stuck in traffic or face a minor inconvenience, take a deep breath and say 'Whatever Allah wills happens.' Do not let anger win."
  },
  {
    id: 'shukr',
    icon: Smile,
    arabic: "شُكْر",
    transliteration: "Shukr",
    english: "Gratitude",
    color: "bg-lime-50 text-lime-800",
    quote: "Gratitude is the key to increase.",
    quran: "If you are grateful, I will surely increase you [in favor].",
    source: "Quran 14:7",
    desc: [
      "Shukr is the antidote to envy and despair. It is recognizing that every breath, every heartbeat, and every meal is a gift we did not earn but were graciously given.",
      "True gratitude is expressed in three ways: recognizing the blessing in the heart, praising God with the tongue, and using the blessing to please God (actions).",
      "Satan's primary goal is to make humans ungrateful. Focusing on what you lack creates misery; focusing on what you have creates abundance."
    ],
    practice: "Keep a gratitude journal. Every night, write down three things you were thankful for that day, no matter how small."
  }
];

// --- DATA: The Unseen (Al-Ghaib) ---
const UNSEEN_DATA = [
  {
    id: 'angels',
    title: "The Angels (Mala'ikah)",
    icon: Cloud,
    color: "text-blue-500",
    summary: "Beings of light who execute God's commands.",
    desc: [
      "Angels are a creation of Allah made from light (Noor). Unlike humans and Jinn, they have no free will; they are programmed to obey and worship Allah perfectly. They do not eat, drink, sleep, or tire.",
      "They are vast in number and size. The Prophet described the Angel Gabriel (Jibreel) covering the horizon with 600 wings. They manage the affairs of the universe by God's command—driving the clouds, recording deeds, and taking souls.",
      "Every human being has angels assigned to them: The Hafazah (Guardians) who protect them from decree until it comes, and the Kiraman Katibin (Noble Recorders) who sit on the right and left shoulders, writing down good and bad deeds."
    ],
    evidence: "They exalt Him night and day and do not slacken.",
    source: "Quran 21:20",
    implication: "Belief in angels brings comfort—knowing you are never truly alone, that you are protected, and that your actions are being recorded with precision."
  },
  {
    id: 'jinn',
    title: "The Jinn",
    icon: Flame,
    color: "text-orange-500",
    summary: "Beings of smokeless fire with free will.",
    desc: [
      "The Jinn are a creation made from smokeless fire. They coexist with us on Earth but exist in a parallel dimension (unseen to us, though they see us). Like humans, they have free will, gender, societies, and religions.",
      "Because they have free will, they can be good (Muslims) or bad (Disbelievers). The bad Jinn are known as Shayateen (Devils). Satan (Iblis) is not a fallen angel (since angels cannot disobey), but a Jinn who refused to bow to Adam out of arrogance.",
      "We are taught not to fear them but to seek refuge in Allah from their harm. They have no power over a true believer except to whisper suggestions (waswasa)."
    ],
    evidence: "And I did not create the jinn and mankind except to worship Me.",
    source: "Quran 51:56",
    implication: "Acknowledging the Jinn explains the nature of evil whispers and temptations. It clarifies that Satan is an enemy who swore to mislead humanity, and we must be vigilant against his influence."
  },
  {
    id: 'judgment',
    title: "Day of Judgment (Qiyamah)",
    icon: Scale,
    color: "text-emerald-500",
    summary: "The ultimate court of justice.",
    desc: [
      "Islam teaches that this life is a temporary test. The universe will one day end (The Hour). All souls will be resurrected and gathered on a vast plain to stand before Allah.",
      "It is a day of absolute justice. No bribe can be paid; no lineage will help. Every atom's weight of good and evil will be shown. The mouths will be sealed, and the limbs will testify to what they did.",
      "People will cross the Sirat (a bridge over Hellfire). The righteous will cross with the speed of lightning into Paradise (Jannah), while the wicked will fall. It is the day where the oppressed will finally get justice from their oppressors."
    ],
    evidence: "So whoever does an atom's weight of good will see it, and whoever does an atom's weight of evil will see it.",
    source: "Quran 99:7-8",
    implication: "Belief in the Afterlife gives meaning to suffering and accountability to power. It ensures that Hitler and Mother Teresa do not share the same fate. It motivates moral behavior when no one is watching."
  },
  {
    id: 'qadr',
    title: "Divine Destiny (Al-Qadr)",
    icon: Lock,
    color: "text-purple-500",
    summary: "God's knowledge and decree of all things.",
    desc: [
      "Al-Qadr implies that Allah knows everything that will happen before it happens, has written it in the Preserved Tablet (Al-Lawh Al-Mahfuz), and has willed it to exist.",
      "This is often a difficult concept: If God wrote it, do I have free will? The answer is yes. God's knowledge is outside of time—He sees your choices before you make them, but He does not force you to make them. You are responsible for your intent and effort; the outcome is in Allah's hands.",
      "Whatever misses you was never meant to hit you, and whatever hits you was never meant to miss you."
    ],
    evidence: "Indeed, all things We created with predestination.",
    source: "Quran 54:49",
    implication: "Qadr brings immense peace. It removes anxiety about the future and regret about the past. You do your best, and then trust that the result chosen by Allah is the best for you, even if it feels painful in the moment."
  }
];

// --- DATA: Prophet Timeline ---
const PROPHET_TIMELINE = [
  {
    year: "570 CE",
    title: "The Year of the Elephant",
    desc: "Born in Mecca. His father Abdullah died before his birth. His mother Aminah died when he was six. He was raised by his grandfather Abdul-Muttalib, and later his uncle Abu Talib. He grew up as an orphan in a tribal society.",
    quote: "Did He not find you an orphan and give [you] refuge?",
    source: "Quran 93:6"
  },
  {
    year: "595 CE",
    title: "Marriage to Khadijah",
    desc: "Known as 'Al-Amin' (The Trustworthy) for his honesty in trade, he married Khadijah, a wealthy businesswoman. She was 40, he was 25. It was a monogamous marriage filled with love and support until her death.",
    quote: "She believed in me when people rejected me.",
    source: "Hadith (Musnad Ahmad)"
  },
  {
    year: "610 CE",
    title: "The First Revelation",
    desc: "At age 40, retreating to the Cave of Hira to meditate on the corruption of society, Angel Gabriel appeared and commanded him: 'Read!'. Shaken, he ran home to Khadijah who comforted him.",
    quote: "Read in the name of your Lord who created...",
    source: "Quran 96:1"
  },
  {
    year: "613 CE",
    title: "Public Preaching & Persecution",
    desc: "After 3 years of secret preaching, he publicly invited Mecca to One God. The ruling elites (Quraish), fearing loss of power and tourism to the idols, began a campaign of torture, boycott, and mockery.",
    quote: "Have you seen the one who forbids a servant when he prays?",
    source: "Quran 96:9-10"
  },
  {
    year: "619 CE",
    title: "The Year of Sorrow",
    desc: "His wife Khadijah and his protector Uncle Abu Talib both died. He went to Ta'if to preach but was stoned by street children until his shoes filled with blood. He prayed for their guidance, not their destruction.",
    quote: "I was sent only as a mercy."
  },
  {
    year: "622 CE",
    title: "The Hijrah (Migration)",
    desc: "After an assassination attempt, he migrated to Medina (Yathrib). This marks year 0 of the Islamic Calendar (AH). He established a constitution securing rights for Muslims and Jews alike.",
    quote: "If you do not aid the Prophet - Allah has already aided him...",
    source: "Quran 9:40"
  },
  {
    year: "624 CE",
    title: "Battle of Badr",
    desc: "The first major military encounter. 313 ill-equipped Muslims faced 1,000 well-armed Quraish soldiers. Against all odds, Muslims won, signaling a shift in power.",
    quote: "And Allah had already given you victory at Badr while you were few.",
    source: "Quran 3:123"
  },
  {
    year: "625 CE",
    title: "Battle of Uhud",
    desc: "The Muslims were winning until archers disobeyed the Prophet's command to hold their post. The tables turned; 70 Muslims were martyred, and the Prophet was wounded. A lesson in obedience.",
    quote: "And Allah had certainly fulfilled His promise to you when you were killing the enemy by His permission until [the time] when you lost courage and fell to disputing...",
    source: "Quran 3:152"
  },
  {
    year: "628 CE",
    title: "Treaty of Hudaybiyyah",
    desc: "A peace treaty that seemed humiliating to Muslims at first (returning refugees), but it established a 10-year truce. This peace allowed Islam to spread rapidly through dialogue.",
    quote: "Indeed, We have given you, [O Muhammad], a clear conquest.",
    source: "Quran 48:1"
  },
  {
    year: "630 CE",
    title: "Conquest of Mecca",
    desc: "Quraish broke the treaty. The Prophet marched with 10,000. Mecca surrendered without blood. He stood at the Kaaba and forgave his persecutors: 'Go, for you are free.'",
    quote: "When the victory of Allah has come and the conquest...",
    source: "Quran 110:1"
  },
  {
    year: "632 CE",
    title: "The Farewell Sermon & Death",
    desc: "He delivered his final sermon, declaring equality of all races and sanctity of women's rights. He died in Medina with his head in Aisha's lap, whispering 'To the highest companion.'",
    quote: "Today I have perfected your religion for you...",
    source: "Quran 5:3"
  }
];

// --- Utility Components ---

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ArabicText = ({ text, translation, source }) => (
  <div className="my-8 p-6 md:p-8 bg-stone-50 border-r-4 border-emerald-600 rounded-l-lg shadow-sm">
    <p className="text-3xl md:text-4xl font-amiri text-right mb-4 text-emerald-900 leading-relaxed" dir="rtl">
      {text}
    </p>
    <p className="text-stone-700 font-serif italic text-lg md:text-xl mb-3">"{translation}"</p>
    <p className="text-stone-500 text-sm font-semibold tracking-wide uppercase">— {source}</p>
  </div>
);

// --- Science Carousel ---
const ScienceCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };
  const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative max-w-4xl mx-auto touch-pan-y">
      <div
        className="overflow-hidden rounded-2xl bg-white shadow-xl border border-stone-200 min-h-[550px] md:min-h-[500px] flex flex-col select-none"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
      >
        <div className="w-full h-2 bg-stone-100">
          <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}></div>
        </div>
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full shrink-0">
              {React.createElement(items[currentIndex].icon, { size: 32 })}
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-stone-800 leading-tight">{items[currentIndex].title}</h3>
          </div>
          <div className="mb-6 space-y-2">
            <p className="text-emerald-800 font-serif font-bold tracking-wide text-xs md:text-sm uppercase">The Revelation (7th Century)</p>
            <p className="text-stone-600 italic text-lg border-l-2 border-emerald-300 pl-4">"{items[currentIndex].quran}"</p>
            <p className="text-xs text-stone-400 font-mono mt-1">{items[currentIndex].citation}</p>
          </div>
          <div className="space-y-2">
            <p className="text-blue-800 font-serif font-bold tracking-wide text-xs md:text-sm uppercase">The Discovery ({items[currentIndex].scienceDate})</p>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed">{items[currentIndex].explanation}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 px-4">
        <button onClick={prevSlide} className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-emerald-600 hover:text-white transition-colors"><ChevronLeft size={24} /></button>
        <div className="flex flex-col items-center">
          <span className="text-stone-400 font-mono font-bold text-sm">{currentIndex + 1} / {items.length}</span>
        </div>
        <button onClick={nextSlide} className="p-3 rounded-full bg-stone-800 text-stone-300 hover:bg-emerald-600 hover:text-white transition-colors"><ChevronRight size={24} /></button>
      </div>
    </div>
  );
};

// --- Trait Card (For Hub) ---
const TraitCard = ({ trait, onClick }) => (
  <button
    onClick={() => onClick(trait)}
    className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full w-full"
  >
    <div className={`w-16 h-16 ${trait.color} rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
      <trait.icon size={32} />
    </div>
    <h3 className="font-playfair font-bold text-xl text-stone-800 mb-1">{trait.english}</h3>
    <p className="font-amiri text-lg text-emerald-600 mb-2">{trait.transliteration}</p>
    <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">Read More</p>
  </button>
);

// --- Infinite Scrolling Names Component ---
const InfiniteNamesMarquee = () => {
  const names = [
    { ar: "الْمَلِكُ", tr: "Al-Malik", en: "The King" }, { ar: "الْقُدُّوسُ", tr: "Al-Quddus", en: "The Most Holy" },
    { ar: "السَّلاَمُ", tr: "As-Salam", en: "The Source of Peace" }, { ar: "الْمُؤْمِنُ", tr: "Al-Mu'min", en: "The Granter of Security" },
    { ar: "الْمُهَيْمِنُ", tr: "Al-Muhaymin", en: "The Guardian" }, { ar: "الْعَزِيزُ", tr: "Al-Aziz", en: "The Almighty" },
    { ar: "الْجَبَّارُ", tr: "Al-Jabbar", en: "The Compeller" }, { ar: "الْمُتَكَبِّرُ", tr: "Al-Mutakabbir", en: "The Supreme" },
    { ar: "الْخَالِقُ", tr: "Al-Khaliq", en: "The Creator" }, { ar: "الْبَارِئُ", tr: "Al-Bari", en: "The Evolver" }
  ];
  const seamlessList = [...names, ...names, ...names];

  return (
    <div className="w-full overflow-hidden py-10 bg-emerald-50/30 border-t border-b border-emerald-100 relative group">
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-emerald-50/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-emerald-50/50 to-transparent z-10 pointer-events-none"></div>
      <div className="flex animate-marquee hover:pause whitespace-nowrap">
        {seamlessList.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg p-5 mr-4 shadow-sm border border-stone-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
              <span className="font-amiri text-xl text-emerald-800">{item.ar}</span>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-sm">{item.tr}</h4>
              <p className="text-xs text-stone-500 italic">{item.en}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- PAGES ---

// 1. Home Page View
const HomePage = ({ onNavigate }) => {
  const scientificMiracles = [
    {
      icon: User,
      title: "1. The Clinging Clot",
      quran: "Then We made the sperm-drop into a clinging clot (Alaqah)...",
      citation: "Quran 23:14",
      scienceDate: "20th Century (Embryology)",
      explanation: "The Arabic word 'Alaqah' has three meanings: a leech, a suspended thing, and a blood clot. Microscopic imaging confirms the early human embryo looks exactly like a leech."
    },
    {
      icon: Wind,
      title: "2. The Protective Atmosphere",
      quran: "And We made the sky a protected ceiling, but they, from its signs, are turning away.",
      citation: "Quran 21:32",
      scienceDate: "20th Century",
      explanation: "The atmosphere protects Earth from lethal solar radiation and meteorites. Without this specific 'ceiling', life would be instantly sterilized."
    },
    {
      icon: Compass,
      title: "3. The Seven Layers",
      quran: "It is Allah who has created seven heavens and of the earth, the like of them.",
      citation: "Quran 65:12",
      scienceDate: "Modern Meteorology",
      explanation: "Scientists have identified that the atmosphere consists of exactly 7 layers (Troposphere, Stratosphere, etc). Similarly, Earth's internal structure has 7 layers."
    },
    {
      icon: Map,
      title: "4. The Lowest Point",
      quran: "The Byzantines have been defeated. In the lowest land (Adna al-Ard)...",
      citation: "Quran 30:2-3",
      scienceDate: "Satellite Topography",
      explanation: "The battle took place near the Dead Sea. The Dead Sea basin is geographically the lowest point of dry land on Earth (approx 400m below sea level)."
    },
    {
      icon: Anchor,
      title: "5. Iron From Space",
      quran: "And We sent down (Anzalna) iron...",
      citation: "Quran 57:25",
      scienceDate: "Astrophysics",
      explanation: "Iron can only be created in stars larger than the Sun. It literally 'came down' to Earth via meteorites."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-stone-900"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
          <h1 className="font-playfair text-5xl md:text-7xl mb-8 leading-tight">
            You are not wandering.<br />
            <span className="text-emerald-400">You are returning.</span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Every soul knows its Creator. The questions you feel—why am I here? where is peace?—are not signs of confusion. They are the call of Home.
          </p>
          <button
            onClick={() => document.getElementById('common-ground').scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 mx-auto"
          >
            Begin the Path <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* Common Ground - RESTORED */}
      <section id="common-ground" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <div className="mb-6 flex justify-center"><Heart className="text-emerald-600" size={40} /></div>
            <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-8">We Are More Alike Than Different</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Before we discuss labels, let's discuss the human condition. We all feel a profound sense of gratitude when we see a sunset. We all feel a pang of injustice when we see the weak oppressed. We all have an internal moral compass.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Islam teaches that this "compass" is the <em>Fitrah</em>—a primordial state of purity. You were created to know your Creator. That feeling of missing something? It isn't an emptiness; it's a homesickness for the Divine.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Intro Allah - EXPANDED */}
      <section className="py-24 bg-emerald-50/50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-6">Who is Waiting for You?</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-8">
                The Media often portrays God in Islam as a harsh judge. But when a Muslim opens the Quran, the very first sentence they read is: <em>"In the name of God, the Entirely Merciful, the Especially Merciful."</em> He is Al-Wadud (The Loving), closer to you than your jugular vein.
              </p>
              <button
                onClick={() => onNavigate('names')}
                className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:underline mb-8"
              >
                Learn His Beautiful Names <ArrowRight size={16} />
              </button>
            </div>

            {/* Featured Names Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4"><span className="font-amiri text-2xl text-emerald-800">الْوَدُودُ</span></div>
                <h3 className="font-bold">Al-Wadud</h3><p className="text-sm text-stone-500">The Most Loving</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4"><span className="font-amiri text-2xl text-emerald-800">الرَّحْمَنُ</span></div>
                <h3 className="font-bold">Ar-Rahman</h3><p className="text-sm text-stone-500">The Entirely Merciful</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4"><span className="font-amiri text-2xl text-emerald-800">الْغَفُورُ</span></div>
                <h3 className="font-bold">Al-Ghafur</h3><p className="text-sm text-stone-500">The Forgiving</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4"><span className="font-amiri text-2xl text-emerald-800">الْقَرِيبُ</span></div>
                <h3 className="font-bold">Al-Qareeb</h3><p className="text-sm text-stone-500">The Near One</p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <InfiniteNamesMarquee />
      </section>

      {/* The Books - RESTORED */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <BookOpen className="text-emerald-600 mb-6" size={48} />
                <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-6">A Letter from the Beloved</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  If the Creator loves us, would He leave us without guidance? Would He create a complex universe and leave us to guess the rules?
                </p>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  God sent manuals with previous messengers (Moses, Jesus, David). But over centuries, those manuals were edited by human hands. The Quran is the final reminder, sent to confirm the truth in the previous books and correct the errors.
                </p>
                <p className="font-bold text-emerald-800">
                  It is the only religious text on Earth that has remained identical, letter for letter, for 1,400 years.
                </p>
              </div>
              <div className="md:w-1/2 bg-stone-100 p-8 rounded-2xl border-l-4 border-stone-300">
                <p className="italic text-stone-600 text-lg mb-4">
                  "If this book were from other than Allah, they would have found within it much contradiction."
                </p>
                <p className="text-xs font-bold uppercase tracking-wide text-stone-400">Quran 4:82</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Science Carousel */}
      <section className="py-24 px-6 bg-stone-900 text-stone-100">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl text-emerald-400 mb-6">Signs for the Thinking Mind</h2>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                The Quran is not a science textbook—it is a book of signs. But when it speaks about the natural world, it describes facts that were impossible for a human in the 7th-century desert to know.
              </p>
            </div>
            <ScienceCarousel items={scientificMiracles} />
          </FadeInSection>
        </div>
      </section>

      {/* Beliefs Summary - RESTORED/MODIFIED */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-12 text-center">What We Believe</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Oneness of God", desc: "There is only one Creator. He has no partners, no children, and no equal." },
                { title: "The Angels", desc: "Beings of light who execute God's commands." },
                { title: "The Books", desc: "Original Torah, Psalms, Gospel, and the Quran." },
                { title: "The Prophets", desc: "From Adam to Noah, Abraham, Moses, Jesus, and finally Muhammad." },
                { title: "Day of Judgment", desc: "This life is a test. We will be held accountable for our kindness." },
                { title: "Divine Decree", desc: "God has knowledge of all things. Nothing happens without His permission." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-stone-50 rounded-lg hover:bg-emerald-50 transition-colors">
                  <h3 className="font-bold text-xl mb-3 text-emerald-800">{item.title}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button
                onClick={() => onNavigate('unseen')}
                className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 font-bold uppercase text-sm border border-stone-200 px-6 py-3 rounded-full hover:border-emerald-600 transition-colors"
              >
                Deep Dive: The Unseen <ArrowRight size={16} />
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Prophet/Character Summary - RESTORED/MODIFIED */}
      <section className="py-24 px-6 bg-emerald-900 text-emerald-50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl mb-6">The Embodiment of Good</h2>
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  How do we translate these beliefs into action? We look at the life of <strong>Prophet Muhammad (Peace Be Upon Him)</strong>. He was the most generous, the most patient, and the most honest.
                </p>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  He taught that "A smile is charity." He taught that "The best of you are those who are best to their families." He taught us to care for animals, the environment, and our neighbors—regardless of their faith.
                </p>
                <button
                  onClick={() => onNavigate('prophet')}
                  className="px-6 py-3 bg-white text-emerald-900 rounded-full font-bold hover:bg-emerald-100 transition-colors flex items-center gap-2"
                >
                  Read His Full Story <ArrowRight size={16} />
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors cursor-pointer" onClick={() => onNavigate('traits')}>
                  <h3 className="font-bold text-xl flex items-center gap-2 mb-2"><User size={20} /> The Character</h3>
                  <p className="text-sm opacity-80">A Muslim is one from whose tongue and hand other people are safe. If you believe in God, you must be good to His creation.</p>
                  <p className="text-xs font-bold uppercase mt-3 text-emerald-300">Explore Traits &rarr;</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                  <h3 className="font-bold text-xl flex items-center gap-2 mb-2"><Sparkles size={20} /> The Forgiveness</h3>
                  <p className="text-sm opacity-80">Even after 23 years of persecution, when the Prophet re-entered Mecca, he forgave everyone who had hurt him. This is the heart of Islam.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Invitation */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-stone-800 mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            If your heart feels the pull of the Divine Love, the door is always open.
          </p>
          <button
            onClick={() => document.querySelector('nav button.bg-emerald-600').click()}
            className="px-10 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all transform hover:scale-105 shadow-2xl"
          >
            View the Testimony
          </button>
        </div>
      </section>
    </>
  );
};

// 2. Traits Hub View
const TraitsHub = ({ onNavigate, onSelectTrait }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-50 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-4 transition-colors text-sm font-bold uppercase tracking-wide"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          <h1 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-4">The Character of a Believer</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Islam is not just rituals; it is a state of being. These ten traits represent the roadmap to purifying the soul and finding peace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAITS_DATA.map((trait) => (
            <TraitCard key={trait.id} trait={trait} onClick={onSelectTrait} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Trait Detail View
const TraitDetail = ({ trait, onBack }) => {
  if (!trait) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-8 transition-colors font-bold"
        >
          <ArrowLeft size={20} /> Back to Traits
        </button>

        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-lg border border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <trait.icon size={300} />
          </div>

          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${trait.color} text-sm font-bold uppercase tracking-wider mb-6`}>
            <trait.icon size={18} />
            {trait.transliteration}
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl text-stone-900 mb-4">{trait.english}</h1>
          <p className="font-amiri text-3xl text-emerald-600 mb-8">{trait.arabic}</p>

          <p className="text-2xl font-serif italic text-stone-600 mb-8 leading-relaxed border-l-4 border-emerald-400 pl-6">
            "{trait.quote}"
          </p>

          <div className="prose prose-lg text-stone-700 mb-12 space-y-4">
            {Array.isArray(trait.desc) ? trait.desc.map((p, i) => <p key={i}>{p}</p>) : <p>{trait.desc}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-4 uppercase text-sm tracking-wide">
                <BookOpen size={18} /> Evidence
              </h3>
              <p className="font-serif italic text-stone-600 mb-2">"{trait.quran}"</p>
              <p className="text-xs text-stone-400 font-bold uppercase">{trait.source}</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-4 uppercase text-sm tracking-wide">
                <Activity size={18} /> Practice It Today
              </h3>
              <p className="text-stone-700">{trait.practice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Know Allah Page (Iframe)
const NamesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-stone-50 animate-fade-in flex flex-col">
      <iframe
        src="https://learnthenamesofallah.netlify.app/"
        className="w-full flex-grow border-none"
        title="Learn the Names of Allah"
        style={{ minHeight: '85vh' }}
      />
    </div>
  );
};

// 5. Prophet Page
const ProphetPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-6 text-sm font-bold uppercase"><ArrowLeft size={16} /> Home</button>

        <h1 className="font-playfair text-4xl md:text-6xl text-stone-900 mb-6">The Man Who Changed The World</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-12">
          Michael H. Hart, in his book <em>The 100: A Ranking of the Most Influential Persons in History</em>, ranked Muhammad (peace be upon him) as number one. Why? He was the only man in history who was supremely successful on both the religious and secular levels.
        </p>

        {/* Timeline Section */}
        <div className="space-y-16 border-l-4 border-emerald-100 ml-4 pl-8 relative pb-4">
          {PROPHET_TIMELINE.map((event, idx) => (
            <div className="relative" key={idx}>
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-sm z-10"></div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-2 border border-emerald-100">{event.year}</span>
              <h3 className="font-bold text-2xl text-emerald-900 mb-2 font-playfair">{event.title}</h3>
              <p className="text-stone-600 leading-relaxed mb-4 text-lg">
                {event.desc}
              </p>
              {event.quote && (
                <div className="bg-stone-50 p-4 rounded-lg border-l-2 border-stone-300">
                  <p className="font-serif italic text-stone-700">"{event.quote}"</p>
                  {event.source && <p className="text-xs text-stone-400 font-bold uppercase mt-2">— {event.source}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-stone-50 p-8 rounded-2xl border border-stone-200 text-center">
          <p className="font-serif italic text-xl text-stone-700 mb-4">"My example is like that of a man who kindled a fire... I am holding you back from the fire, but you are rushing into it."</p>
          <p className="text-xs font-bold uppercase text-stone-400 tracking-widest">— Prophet Muhammad (Sahih Muslim)</p>
        </div>
      </div>
    </div>
  );
};

// 6. Unseen Hub
const UnseenHub = ({ onNavigate, onSelectUnseen }) => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-900 text-stone-100 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 text-sm font-bold uppercase"><ArrowLeft size={16} /> Home</button>

        <div className="text-center mb-16">
          <Eye className="mx-auto text-emerald-400 mb-6" size={48} />
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-4">Believing in the Unseen</h1>
          <p className="text-xl text-stone-400 max-w-2xl mx-auto">
            Islam requires belief in <em>Al-Ghaib</em> (The Unseen). It is the acknowledgement that our physical senses are limited, and reality extends far beyond what we can touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {UNSEEN_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectUnseen(item)}
              className="text-left bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:bg-stone-750 hover:border-emerald-500/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className={item.color} size={28} />
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{item.title}</h3>
              </div>
              <p className="text-stone-400 leading-relaxed mb-4">
                {item.summary}
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 group-hover:text-emerald-400 flex items-center gap-2">
                Read More <ArrowRight size={14} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 7. Unseen Detail Page
const UnseenDetail = ({ item, onBack }) => {
  if (!item) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-900 text-stone-100 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors font-bold uppercase text-sm"
        >
          <ArrowLeft size={16} /> Back to The Unseen
        </button>

        <div className="bg-stone-800 rounded-3xl p-8 md:p-12 border border-stone-700 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <item.icon size={300} />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-stone-900 ${item.color}`}>
              <item.icon size={32} />
            </div>
            <h1 className="font-playfair text-3xl md:text-5xl text-white">{item.title}</h1>
          </div>

          <div className="prose prose-invert prose-lg text-stone-300 mb-12">
            {item.desc.map((paragraph, i) => (
              <p key={i} className="leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-700">
              <h3 className="flex items-center gap-2 font-bold text-white mb-4 uppercase text-sm tracking-wide">
                <BookOpen size={18} /> Divine Evidence
              </h3>
              <p className="font-serif italic text-stone-300 mb-2">"{item.evidence}"</p>
              <p className="text-xs text-stone-500 font-bold uppercase">{item.source}</p>
            </div>

            <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-900/50">
              <h3 className="flex items-center gap-2 font-bold text-emerald-400 mb-4 uppercase text-sm tracking-wide">
                <Activity size={18} /> Spiritual Impact
              </h3>
              <p className="text-stone-300">{item.implication}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function TheJourneyHome() {
  const [view, setView] = useState('home');
  const [selectedTrait, setSelectedTrait] = useState(null);
  const [selectedUnseen, setSelectedUnseen] = useState(null); // New State for Unseen
  const [showShahada, setShowShahada] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedTrait, selectedUnseen]);

  // Load Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleNavigate = (newView) => {
    setView(newView);
    if (newView === 'traits') setSelectedTrait(null);
    if (newView === 'unseen') setSelectedUnseen(null);
    setMobileMenuOpen(false);
  };

  const handleSelectTrait = (trait) => {
    setSelectedTrait(trait);
    setView('trait-detail');
  };

  const handleSelectUnseen = (item) => {
    setSelectedUnseen(item);
    setView('unseen-detail');
  };

  const NavLink = ({ target, label, icon: Icon }) => (
    <button
      onClick={() => handleNavigate(target)}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors font-bold text-sm ${(view === target || (target === 'traits' && view === 'trait-detail') || (target === 'unseen' && view === 'unseen-detail'))
        ? 'text-emerald-700 bg-emerald-50'
        : 'text-stone-500 hover:text-emerald-600 hover:bg-stone-50'
        }`}
    >
      {Icon && <Icon size={16} />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-stone-50 font-lato text-stone-800 overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">

      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-12">

            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer z-50"
              onClick={() => handleNavigate('home')}
            >
              <Moon className="text-emerald-600 fill-emerald-600" size={24} />
              <span className="font-playfair font-bold text-lg md:text-xl tracking-tight text-stone-800 hidden sm:block">The Journey Home</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              <NavLink target="home" label="Home" />
              <NavLink target="names" label="Know Allah" icon={Globe} />
              <NavLink target="prophet" label="The Prophet" icon={Scroll} />
              <NavLink target="unseen" label="The Unseen" icon={Eye} />
              <NavLink target="traits" label="The Character" icon={User} />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowShahada(true)}
                className="text-xs md:text-sm font-bold px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
              >
                The Testimony
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-stone-500 hover:bg-stone-100 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl py-4 px-6 flex flex-col gap-2 animate-fade-in">
            <NavLink target="home" label="Home" />
            <NavLink target="names" label="Know Allah" icon={Globe} />
            <NavLink target="prophet" label="The Prophet" icon={Scroll} />
            <NavLink target="unseen" label="The Unseen" icon={Eye} />
            <NavLink target="traits" label="The Character" icon={User} />
          </div>
        )}
      </nav>

      {/* View Logic */}
      {view === 'home' && <HomePage onNavigate={handleNavigate} />}
      {view === 'names' && <NamesPage />}
      {view === 'prophet' && <ProphetPage onNavigate={handleNavigate} />}
      {view === 'unseen' && <UnseenHub onNavigate={handleNavigate} onSelectUnseen={handleSelectUnseen} />}
      {view === 'unseen-detail' && <UnseenDetail item={selectedUnseen} onBack={() => handleNavigate('unseen')} />}
      {view === 'traits' && <TraitsHub onNavigate={handleNavigate} onSelectTrait={handleSelectTrait} />}
      {view === 'trait-detail' && <TraitDetail trait={selectedTrait} onBack={() => handleNavigate('traits')} />}

      {/* Footer */}
      {(view !== 'names') && (
        <footer className="bg-white border-t border-stone-200 text-stone-500 py-12 text-center mt-auto">
          <p className="mb-2 font-serif text-lg">"Peace be upon those who follow the guidance."</p>
          <p className="text-xs opacity-60">© 2024 The Journey Home.</p>
        </footer>
      )}

      {/* Shahada Modal (Global) */}
      {showShahada && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/95 backdrop-blur-md transition-opacity animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-12 relative shadow-2xl animate-fade-in-up overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowShahada(false)}
              className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full text-stone-400 hover:bg-stone-200 hover:text-stone-800 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h3 className="font-playfair text-2xl md:text-3xl mb-4 text-emerald-800">The Testimony of Faith</h3>
              <div className="bg-emerald-50 p-6 md:p-10 rounded-2xl border border-emerald-100 mb-8 shadow-inner">
                <p className="text-3xl md:text-5xl font-amiri text-emerald-900 mb-8 leading-loose" dir="rtl">
                  أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ <br />
                  وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ
                </p>
                <div className="space-y-2">
                  <p className="text-stone-600 text-lg md:text-xl font-serif italic">"Ash-hadu an la ilaha illa Allah,"</p>
                  <p className="text-stone-600 text-lg md:text-xl font-serif italic">"Wa ash-hadu anna Muhammadan Rasul Allah."</p>
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-2">Meaning</h4>
                <p className="text-xl md:text-3xl text-stone-800 font-playfair leading-relaxed">
                  "I bear witness that there is no god but Allah, and I bear witness that Muhammad is His Messenger."
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-xl text-left text-blue-900 flex gap-4 items-start">
                <Check className="shrink-0 mt-1 text-blue-600" size={24} />
                <div>
                  <p className="font-bold mb-1">Did you say it?</p>
                  <p className="text-sm leading-relaxed text-blue-800/80">
                    If you said this with sincerity, then welcome. All your past mistakes are wiped clean. You start today with a fresh page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @font-face {
          font-family: 'Amiri';
          src: url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
        }
        .font-amiri { font-family: 'Amiri', serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 20px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}