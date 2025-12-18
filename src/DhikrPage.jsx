import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Activity, Heart, Shield, Sparkles, Clock, Smartphone } from 'lucide-react';

// --- Utilities ---

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

// --- Content Data ---

const DHIKR_DATA = [
    {
        category: "Praise & Tasbih",
        title: "Tahlil: The Best Dhikr",
        arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ",
        transliteration: "Lā ilāha illā-Allāh",
        translation: "There is no god but Allah.",
        benefit: "The Messenger of Allah ﷺ said: 'The best dhikr is La ilaha illa Allah.' (Nasa'i)",
        source: "Nasa'i"
    },
    {
        category: "Praise & Tasbih",
        title: "Tasbih, Tahmid, Takbir",
        arabic: "سُبْحَانَ اللّٰهِ ، اَلْحَمْدُ لِلّٰهِ ، اَللّٰهُ أَكْبَرُ",
        transliteration: "Subḥāna-llāh. Alḥamdu li-llāh, Allāhu akbar.",
        translation: "Allah is free from imperfection. All praise be to Allah. Allah is the Greatest.",
        benefit: "The Messenger of Allah ﷺ said: 'The most beloved statements to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illa Allah, Allahu Akbar.' (Muslim)",
        source: "Muslim"
    },
    {
        category: "Strength & Protection",
        title: "Hawqalah: Treasure of Paradise",
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",
        transliteration: "Lā ḥawla wa lā quwwata illā bi-llāh",
        translation: "There is no power (in averting evil) or strength (in attaining good) except through Allah.",
        benefit: "The Prophet ﷺ said: 'It is a gate from the gates of Paradise.' (Tirmidhi)",
        source: "Tirmidhi"
    },
    {
        category: "Salawat",
        title: "Salawat",
        arabic: "اَللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ",
        transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad...",
        translation: "O Allah, honour and have mercy upon Muhammad and the family of Muhammad...",
        benefit: "Invoking peace upon the Prophet ﷺ brings blessings.",
        source: "Bukhari"
    },
    {
        category: "Praise & Tasbih",
        title: "Best Statement of Prophets",
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration: "Lā ilāha illā-Allāh, waḥdahū lā sharīka lah, lahu-l-mulk, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr.",
        translation: "There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful.",
        benefit: "The Prophet ﷺ said: 'The best of what I and the Prophets before me have said is [this].'",
        source: "Tirmidhi"
    },
    {
        category: "Praise & Tasbih",
        title: "Heavy on the Scales",
        arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ ، سُبْحَانَ اللهِ الْعَظِيْم",
        transliteration: "Subḥāna-llāhi wa bi-ḥamdihī, subḥāna-llāhi-l-aẓīm.",
        translation: "Allah is free from imperfection and all praise is due to Him, Allah is free from imperfection, the Greatest.",
        benefit: "Two statements that are light on the tongue, heavy on the Scale, and beloved to the Most Merciful.",
        source: "Bukhari"
    },
    {
        category: "Forgiveness & Relief",
        title: "For Distress",
        arabic: "يَا حَيُّ يَا قَيُّوْمُ ، بِرَحْمَتِكَ أَسْتَغِيْثُ",
        transliteration: "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth.",
        translation: "O The Ever Living, The One Who sustains and protects all that exists; I seek assistance through Your Mercy.",
        benefit: "When the Prophet ﷺ would be distressed, he would say this.",
        source: "Tirmidhi"
    },
    {
        category: "Forgiveness & Relief",
        title: "Supplication of Yunus (A.S)",
        arabic: "لَآ إِلٰهَ إِلَّآ أَنْتَ سُبۡحٰنَكَ إِنِّيْ كُنْتُ مِنَ الظّٰلِمِيْنَ",
        transliteration: "Lā ilāha illā Anta subḥānaka innī kuntu mina-ẓ-ẓālimīn.",
        translation: "There is no god worthy of worship except You; You are free from all imperfection. Indeed, I have been of the wrongdoers.",
        benefit: "No Muslim man ever supplicates with this except that Allah answers his supplication.",
        source: "Tirmidhi"
    },
    {
        category: "Forgiveness & Relief",
        title: "For Forgiveness",
        arabic: "أَسْتَغْفِرُ اللهَ الْعَظِيْمَ الَّذِيْ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ ، وَأَتُوْبُ إِلَيْهِ",
        transliteration: "Astaghfiru-l-llāha-l-aẓīm al-ladhī lā ilāha illā Huwa-l-Ḥayyu-l-Qayyūm, wa atūbu ilayh.",
        translation: "I seek forgiveness from Allah, the Greatest, whom there is none worthy of worship except Him, The Ever Living... and turn to Him in repentance.",
        benefit: "Whoever says this, Allah will forgive him.",
        source: "Tirmidhi"
    }
];

const styles = {
    introCard: "p-8 bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow",
    iconWrapper: "w-14 h-14 rounded-full flex items-center justify-center mb-4 text-emerald-600 bg-emerald-50",
    sectionTitle: "font-playfair font-bold text-xl text-stone-800 mb-3",
    sectionText: "text-stone-600 leading-relaxed"
};

const DhikrPage = ({ onNavigate }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-50 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <button
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-6 transition-colors text-sm font-bold uppercase tracking-wide"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>

                    <div className="flex justify-center mb-4 text-emerald-600">
                        <Activity size={48} />
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-6">Popular Dhikr</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Remembrance that polishes the heart and brings tranquility.
                    </p>
                </div>

                {/* Intro Sections */}
                <FadeInSection>
                    <div className="grid md:grid-cols-2 gap-6 mb-20">
                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Heart size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>What is Dhikr?</h3>
                            <p className={styles.sectionText}>
                                Dhikr is the constant remembrance of God, the Islamic equivalent of mindfulness. Whether walking to work, cooking, or driving, a believer keeps their tongue moist with gratitude and praise. It brings the heart from agitation to tranquility.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>Why do we do it?</h3>
                            <p className={styles.sectionText}>
                                "Unquestionably, by the remembrance of Allah hearts are assured" (Quran 13:28). Over time, the heart gathers "rust" from worldly distractions and sins. Dhikr is the polish that removes this rust, allowing the light of faith to shine again.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Sparkles size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>How do we do it?</h3>
                            <p className={styles.sectionText}>
                                You can do it with your tongue (pronouncing the words) or your heart (contemplating the meaning). Doing both is best. Start by repeating simple phrases like "SubhanAllah" (Glory be to God) 33 times after prayer or whenever you have a moment.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>When can we do it?</h3>
                            <p className={styles.sectionText}>
                                Anytime. Unlike prayer (Salah), Dhikr does not require ablution (Wudu) or a prayer mat. You can do it while lying in bed, commuting, waiting in line, or doing chores. It turns "wasted" time into worship.
                            </p>
                        </div>
                    </div>
                </FadeInSection>

                {/* Filter Selection */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
                    {['All', ...new Set(DHIKR_DATA.map(d => d.category))].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === category
                                    ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                                    : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-300 hover:text-emerald-600'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Dhikr List */}
                <div className="space-y-8">
                    {DHIKR_DATA
                        .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
                        .map((item, index) => (
                            <FadeInSection key={index} delay={index * 100}>
                                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="bg-emerald-50/30 px-6 py-4 border-b border-emerald-100 flex flex-wrap gap-2 items-center justify-between">
                                        <h3 className="font-playfair font-bold text-xl text-emerald-900">{item.title}</h3>
                                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">{item.source}</span>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <p className="text-stone-500 italic mb-6 text-sm md:text-base border-l-4 border-stone-200 pl-4">
                                            {item.benefit}
                                        </p>

                                        <div className="my-6">
                                            <p className="text-3xl md:text-4xl font-amiri text-right mb-4 text-stone-800 leading-relaxed" dir="rtl">
                                                {item.arabic}
                                            </p>
                                        </div>

                                        <div className="bg-stone-50 p-4 rounded-lg mb-4">
                                            <p className="font-mono text-emerald-700 text-sm md:text-base leading-relaxed opacity-90">
                                                {item.transliteration}
                                            </p>
                                        </div>

                                        <p className="text-stone-700 font-serif text-lg md:text-xl leading-relaxed">
                                            "{item.translation}"
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-stone-500 italic">"Keep your tongue moist with the remembrance of Allah."</p>
                </div>
            </div>
        </div>
    );
};

export default DhikrPage;
