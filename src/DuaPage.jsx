import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

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

const ArabicText = ({ text, translation, source, transliteration }) => (
    <div className="my-8 p-6 md:p-8 bg-stone-50 border-r-4 border-emerald-600 rounded-l-lg shadow-sm">
        <p className="text-3xl md:text-4xl font-amiri text-right mb-4 text-emerald-900 leading-relaxed" dir="rtl">
            {text}
        </p>
        {transliteration && (
            <p className="text-stone-500 font-mono text-sm md:text-base mb-3 opacity-80">{transliteration}</p>
        )}
        <p className="text-stone-700 font-serif italic text-lg md:text-xl mb-3">"{translation}"</p>
        <p className="text-stone-500 text-sm font-semibold tracking-wide uppercase">— {source}</p>
    </div>
);

// --- Content Data ---

const DUAS_DATA = [
    {
        category: "Prophet Adam (A.S)",
        context: "The first dua ever said by mankind. Recited when he turned to Allah in repentance.",
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        transliteration: "Rabbana thalamna anfusana wain lam taghfir lana watarhamna lanakoonanna mina alkhasireena",
        translation: "Our Lord! We have wronged ourselves. If You forgive us not, and bestow not upon us Your Mercy, we shall certainly be of the losers.",
        source: "Quran 7:23"
    },
    {
        category: "Prophet Yunus (A.S)",
        context: "Said when he was stuck inside the belly of a whale. A powerful dua for distress.",
        arabic: "لَّا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
        transliteration: "La ilaha illa anta subhanaka innee kuntu mina alththalimeena",
        translation: "No one has the right to be worshiped but You (O Allah), Glorified (and Exalted) are You. Truly, I have been of the wrong-doers.",
        source: "Quran 21:87"
    },
    {
        category: "Prophet Ayub (A.S)",
        context: "Recited after years of illness and suffering. A dua for patience and healing.",
        arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        transliteration: "Annee massaniya alddurru waanta arhamu alrrahimeena",
        translation: "Verily, distress has seized me, and You are the Most Merciful of all those who show mercy.",
        source: "Quran 21:83"
    },
    {
        category: "Prophet Ibrahim (A.S)",
        context: "A prayer for wisdom and righteous company.",
        arabic: "رَبِّ هَبْ لِى حُكْمًۭا وَأَلْحِقْنِى بِٱلصَّـٰلِحِينَ",
        transliteration: "Rabbi hab lee hukman waalhiqnee bialssaliheena",
        translation: "My Lord! Bestow judgment on me, and join me with the righteous.",
        source: "Quran 26:83"
    },
    {
        category: "Prophet Musa (A.S)",
        context: "For self-confidence and eloquence in speech.",
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
        transliteration: "Rabbi ishrah lee sadree Wayassir lee amree Waohlul AAuqdatan min lisanee Yafqahoo qawlee",
        translation: "O my Lord! Open for me my chest (grant me self-confidence, contentment, and boldness). And ease my task for me; And make loose the knot from my tongue, that they understand my speech.",
        source: "Quran 20:25-28"
    },
    {
        category: "Prophet Musa (A.S)",
        context: "For seeking good provisions.",
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        transliteration: "Rabbi innee lima anzalta ilayya min khayrin faqeerun",
        translation: "My Lord! Truly, I am in need of whatever good that You bestow on me!",
        source: "Quran 28:24"
    },
    {
        category: "Prophet Yusuf (A.S)",
        context: "To die as a Muslim.",
        arabic: "فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ أَنتَ وَلِيِّي فِي الدُّنُيَا وَالآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        transliteration: "Fatira alssamawati waalardi anta waliyyee fee alddunya waalakhirati tawaffanee musliman waalhiqnee bialssaliheena",
        translation: "The Creator of the heavens and the earth! You are my Protector in this world and in the Hereafter, cause me to die as a Muslim, and join me with the righteous.",
        source: "Quran 12:101"
    },
    {
        category: "Prophet Nuh (A.S)",
        context: "For forgiveness and seeking knowledge.",
        arabic: "رَبِّ اِنِّىۡۤ اَعُوۡذُ بِكَ اَنۡ اَسۡـئَلَكَ مَا لَـيۡسَ لِىۡ بِهٖ عِلۡمٌ​ؕ وَاِلَّا تَغۡفِرۡ لِىۡ وَتَرۡحَمۡنِىۡۤ اَكُنۡ مِّنَ الۡخٰسِرِيۡنَ",
        transliteration: "Rabbi innee aAAoothu bika an as-alaka ma laysa lee bihee AAilmun wailla taghfir lee watarhamnee akun mina alkhasireena",
        translation: "O my Lord! I seek refuge with You from asking You that of which I have no knowledge. And unless You forgive me and have mercy on me, I would indeed be one of the losers.",
        source: "Quran 11:47"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        context: "For relief and mercy.",
        arabic: "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْث",
        transliteration: "Ya Hayyu Ya Qayyum! Bi rahmatika astagheeth",
        translation: "O Living and Eternal Sustainer! By Your mercy I seek relief.",
        source: "Hadith"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        context: "For good in both worlds.",
        arabic: "اللَّهُمَّ آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        transliteration: "Allahuma atina fid dunya hasanatan wafil akhirat hasanatan waqina adhaban naar",
        translation: "O Allah, grant us the good in this world and the good in the Hereafter and save us from the torment of Hell-Fire.",
        source: "Muslim"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        context: "For guidance and piety.",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",
        transliteration: "Allahumma inni as’alukal l-huda wattuqa wal ‘afafa wal ghina",
        translation: "O Allah! Indeed I, I ask of You, guidance, piety and chastity and to be free of depending upon anyone (except You).",
        source: "Muslim"
    },
    {
        category: "Prophet Muhammad (PBUH)",
        context: "For turning the heart towards obedience.",
        arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
        transliteration: "Ya Muqallibal-qulub, thabbit qalbi 'ala dinik",
        translation: "O Allah! The One Who turns the hearts, turn my heart towards Your obedience.",
        source: "Muslim"
    }
];

const DuaPage = ({ onNavigate }) => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-50 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <button
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-4 transition-colors text-sm font-bold uppercase tracking-wide"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                    <div className="flex justify-center mb-4 text-emerald-600">
                        <MessageCircle size={48} />
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-6">Prophetic Duas</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Supplications from the Quran and Sunnah. These are the words used by the best of creation to ask from the Creator.
                    </p>
                </div>

                <div className="space-y-12">
                    {DUAS_DATA.map((dua, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                                <div className="bg-emerald-50/50 px-6 py-4 border-b border-emerald-100 flex items-center justify-between">
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

                <div className="mt-20 text-center">
                    <p className="text-stone-500 italic">"Dua is the weapon of the believer."</p>
                </div>
            </div>
        </div>
    );
};

export default DuaPage;
