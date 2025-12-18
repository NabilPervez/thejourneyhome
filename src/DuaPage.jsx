import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MessageCircle, Heart, Shield, Sparkles } from 'lucide-react';

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

const DUAS_DATA = [
    {
        category: "Prophet Adam (A.S)",
        purpose: "Seeking Forgiveness",
        context: "The first dua ever said by mankind. Recited when he turned to Allah in repentance.",
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana thalamna anfusana wain lam taghfir lana watarhamna lanakoonanna mina alkhasireena",
        translation: "Our Lord! We have wronged ourselves. If You forgive us not, and bestow not upon us Your Mercy, we shall certainly be of the losers.",
        source: "Quran 7:23"
    },
    {
        category: "Prophet Yunus (A.S)",
        purpose: "Seeking Forgiveness",
        context: "Said when he was stuck inside the belly of a whale. A powerful dua for distress.",
        arabic: "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka innee kuntu mina alththalimeena",
        translation: "No one has the right to be worshiped but You (O Allah), Glorified (and Exalted) are You. Truly, I have been of the wrong-doers.",
        source: "Quran 21:87"
    },
    {
        category: "Prophet Nuh (A.S)",
        purpose: "Seeking Forgiveness",
        context: "For forgiveness and seeking knowledge.",
        arabic: "رَبِّ اِنِّىۡۤ اَعُوۡذُ بِكَ اَنۡ اَسۡـئَلَكَ مَا لَـيۡسَ لِىۡ بِهٖ عِلۡمٌ​ؕ وَاِلَّا تَغۡفِرۡ لِىۡ وَتَرۡحَمۡنِىۡۤ اَكُنۡ مِّنَ الۡخٰسِرِيۡنَ",
        transliteration: "Rabbi innee aAAoothu bika an as-alaka ma laysa lee bihee AAilmun wailla taghfir lee watarhamnee akun mina alkhasireena",
        translation: "O my Lord! I seek refuge with You from asking You that of which I have no knowledge. And unless You forgive me and have mercy on me, I would indeed be one of the losers.",
        source: "Quran 11:47"
    },
    {
        category: "Prophet Ibrahim (A.S)",
        purpose: "Asking For Guidance",
        context: "A prayer for wisdom and righteous company.",
        arabic: "رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ",
        transliteration: "Rabbi hab lee hukman waalhiqnee bialssaliheena",
        translation: "My Lord! Bestow judgment on me, and join me with the righteous.",
        source: "Quran 26:83"
    },
    {
        category: "Prophet Yusuf (A.S)",
        purpose: "Asking For Guidance",
        context: "To die as a Muslim.",
        arabic: "فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ أَنتَ وَلِيِّي فِي الدُّنُيَا وَالآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Fatira alssamawati waalardi anta waliyyee fee alddunya waalakhirati tawaffanee musliman waalhiqnee bialssaliheena",
        translation: "The Creator of the heavens and the earth! You are my Protector in this world and in the Hereafter, cause me to die as a Muslim, and join me with the righteous.",
        source: "Quran 12:101"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        purpose: "Asking For Guidance",
        context: "For guidance and piety.",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        transliteration: "Allahumma inni as’alukal l-huda wattuqa wal ‘afafa wal ghina",
        translation: "O Allah! Indeed I, I ask of You, guidance, piety and chastity and to be free of depending upon anyone (except You).",
        source: "Muslim"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        purpose: "Asking For Guidance",
        context: "For turning the heart towards obedience.",
        arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        transliteration: "Ya Muqallibal-qulub, thabbit qalbi 'ala dinik",
        translation: "O Allah! The One Who turns the hearts, turn my heart towards Your obedience.",
        source: "Muslim"
    },
    {
        category: "Prophet Ayub (A.S)",
        purpose: "Seeking Relief & Strength",
        context: "Recited after years of illness and suffering. A dua for patience and healing.",
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Annee massaniya alddurru waanta arhamu alrrahimeena",
        translation: "Verily, distress has seized me, and You are the Most Merciful of all those who show mercy.",
        source: "Quran 21:83"
    },
    {
        category: "Prophet Musa (A.S)",
        purpose: "Seeking Relief & Strength",
        context: "For self-confidence and eloquence in speech.",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
        transliteration: "Rabbi ishrah lee sadree Wayassir lee amree Waohlul AAuqdatan min lisanee Yafqahoo qawlee",
        translation: "O my Lord! Open for me my chest (grant me self-confidence, contentment, and boldness). And ease my task for me; And make loose the knot from my tongue, that they understand my speech.",
        source: "Quran 20:25-28"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        purpose: "Seeking Relief & Strength",
        context: "For relief and mercy.",
        arabic: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْث",
        transliteration: "Ya Hayyu Ya Qayyum! Bi rahmatika astagheeth",
        translation: "O Living and Eternal Sustainer! By Your mercy I seek relief.",
        source: "Hadith"
    },
    {
        category: "Prophet Musa (A.S)",
        purpose: "General Good & Provision",
        context: "For seeking good provisions.",
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        transliteration: "Rabbi innee lima anzalta ilayya min khayrin faqeerun",
        translation: "My Lord! Truly, I am in need of whatever good that You bestow on me!",
        source: "Quran 28:24"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        purpose: "General Good & Provision",
        context: "For good in both worlds.",
        arabic: "اللَّهُمَّ آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration: "Allahuma atina fid dunya hasanatan wafil akhirat hasanatan waqina adhaban naar",
        translation: "O Allah, grant us the good in this world and the good in the Hereafter and save us from the torment of Hell-Fire.",
        source: "Muslim"
    }
];

const styles = {
    introCard: "p-8 bg-white rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow",
    iconWrapper: "w-14 h-14 rounded-full flex items-center justify-center mb-4 text-emerald-600 bg-emerald-50",
    sectionTitle: "font-playfair font-bold text-xl text-stone-800 mb-3",
    sectionText: "text-stone-600 leading-relaxed"
};

const DuaPage = ({ onNavigate }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Group duas by purpose
    const groupedDuas = DUAS_DATA.reduce((acc, dua) => {
        if (!acc[dua.purpose]) acc[dua.purpose] = [];
        acc[dua.purpose].push(dua);
        return acc;
    }, {});

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
                        <MessageCircle size={48} />
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-6">Prophetic Duas</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Words of connection between the created and the Creator.
                    </p>
                </div>

                <FadeInSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Heart size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>What is Dua?</h3>
                            <p className={styles.sectionText}>
                                Dua is an intimate conversation with Allah. It is not just asking; it is worship. It is the vulnerable act of admitting you cannot succeed without His help.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>Why do we do it?</h3>
                            <p className={styles.sectionText}>
                                We do it to shift reliance from ourselves to the All-Powerful. Allah gets angry when we <em>don't</em> ask, because it implies arrogance. Dua changes destiny.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <Sparkles size={28} />
                            </div>
                            <h3 className={styles.sectionTitle}>How do we do it?</h3>
                            <p className={styles.sectionText}>
                                Start with praise ("Alhamdulillah"), send blessings on the Prophet (Salawat), and then ask with absolute conviction. Be persistent; God loves the persistent caller.
                            </p>
                        </div>

                        <div className={styles.introCard}>
                            <div className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3 className={styles.sectionTitle}>When?</h3>
                            <p className={styles.sectionText}>
                                Anytime. However, times of acceptance are: during Sujood, before Tasleem in prayer, between Adhan & Iqamah, when it rains, and the last third of the night.
                            </p>
                        </div>
                    </div>
                </FadeInSection>

                {/* Filter Selection */}
                <div className="flex flex-wrapjustify-center gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    {['All', ...new Set(DUAS_DATA.map(d => d.purpose))].map((category) => (
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

                {/* Duas List Grouped by Category */}
                <div className="space-y-16">
                    {Object.entries(groupedDuas)
                        .filter(([category]) => selectedCategory === 'All' || category === selectedCategory)
                        .map(([category, duas], groupIndex) => (
                            <div key={category}>
                                <FadeInSection delay={groupIndex * 100}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-px bg-stone-200 flex-1"></div>
                                        <h2 className="font-playfair text-2xl md:text-3xl text-stone-800 text-center px-4">
                                            {category}
                                        </h2>
                                        <div className="h-px bg-stone-200 flex-1"></div>
                                    </div>
                                </FadeInSection>

                                <div className="space-y-8">
                                    {duas.map((dua, index) => (
                                        <FadeInSection key={index} delay={index * 100}>
                                            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                                                <div className="bg-emerald-50/30 px-6 py-4 border-b border-emerald-100 flex flex-wrap gap-2 items-center justify-between">
                                                    <h3 className="font-playfair font-bold text-xl text-emerald-900">{dua.category}</h3>
                                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">{dua.source}</span>
                                                </div>
                                                <div className="p-6 md:p-8">
                                                    <p className="text-stone-500 italic mb-6 text-sm md:text-base border-l-4 border-stone-200 pl-4">
                                                        {dua.context}
                                                    </p>

                                                    <div className="my-6">
                                                        <p className="text-3xl md:text-4xl font-amiri text-right mb-4 text-stone-800 leading-relaxed" dir="rtl">
                                                            {dua.arabic}
                                                        </p>
                                                    </div>

                                                    <div className="bg-stone-50 p-4 rounded-lg mb-4">
                                                        <p className="font-mono text-emerald-700 text-sm md:text-base leading-relaxed opacity-90">
                                                            {dua.transliteration}
                                                        </p>
                                                    </div>

                                                    <p className="text-stone-700 font-serif text-lg md:text-xl leading-relaxed">
                                                        "{dua.translation}"
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInSection>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-stone-500 italic">"Dua is the essence of worship."</p>
                </div>
            </div>
        </div>
    );
};

export default DuaPage;
