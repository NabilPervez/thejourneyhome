import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, DoorOpen, Star, Heart, Droplets, Swords, BookOpen, User, Sun } from 'lucide-react';

const GATES_DATA = [
    {
        id: 'salah',
        title: "Baab As-Salah",
        arabic: "بَاب الصَّلاة",
        meaning: "The Gate of Prayer",
        icon: Star,
        color: "text-blue-500",
        bg: "bg-blue-50",
        border: "border-blue-200",
        summary: "For those who were constant and punctual in their prayers.",
        desc: [
            "This gate is reserved for those who were steadfast in their Salah (prayers). They did not just pray when it was convenient; they prioritized their connection with Allah above all worldly matters.",
            "It represents dedication, discipline, and the spiritual oxygen of the believer. Those called from this gate found their comfort and coolness of eyes in prayer, as the Prophet (PBUH) did."
        ],
        traits: "Punctuality in the 5 daily prayers, performing voluntary prayers (Sunnah/Nafl), and Khushu (focus/humility).",
        quote: "The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound. And if it is bad, then the rest of his deeds will be bad.",
        source: "Sunan al-Tirmidhi"
    },
    {
        id: 'jihad',
        title: "Baab Al-Jihad",
        arabic: "بَاب الْجِهَاد",
        meaning: "The Gate of Struggle",
        icon: Swords,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        summary: "For those who sacrificed and struggled for the sake of Allah.",
        desc: [
            "Jihad essentially means 'struggle'. While it includes the physical defense of the faith/community, the 'Greater Jihad' is the struggle against one's own ego and desires (Nafs).",
            "Those called from this gate were not passive. They stood up for truth, protected the weak, and exerted their utmost effort to make the word of Allah supreme."
        ],
        traits: "Bravery, self-sacrifice, speaking truth to power, and fighting against one's own inner evil inclinations.",
        quote: "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.",
        source: "Quran 29:69"
    },
    {
        id: 'sadaqah',
        title: "Baab As-Sadaqah",
        arabic: "بَاب الصَّدَقَة",
        meaning: "The Gate of Charity",
        icon: Heart,
        color: "text-rose-500",
        bg: "bg-rose-50",
        border: "border-rose-200",
        summary: "For those who frequently gave from their wealth to help others.",
        desc: [
            "This gate welcomes the generous souls who realized that their wealth was a trust from Allah. They fed the hungry, supported the orphans, and gave secretly so that their left hand did not know what their right hand spent.",
            "Charity extinguishes sins as water extinguishes fire. It is proof of one's trust in Allah's abundance."
        ],
        traits: "Generosity, lack of attachment to material wealth, empathy for the poor, and consistency in giving.",
        quote: "The believer's shade on the Day of Resurrection will be his charity.",
        source: "Al-Tirmidhi"
    },
    {
        id: 'rayyan',
        title: "Baab Ar-Rayyan",
        arabic: "بَاب الرَّيَّان",
        meaning: "The Gate of Quenching Thirst",
        icon: Droplets,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        summary: "Exclusively for those who fasted frequently.",
        desc: [
            "Ar-Rayyan is derived from the word 'Irrwa' meaning water/quenching. It is a reward for those who voluntarily went thirsty and hungry for Allah's sake.",
            "This gate is unique: once the fasters have entered through it, it will be closed, and no one else will enter through it. It promises that those who enter will never feel thirst again."
        ],
        traits: "Fasting Ramadan with sincerity, and voluntary fasting (Mondays/Thursdays, White Days).",
        quote: "In Paradise there is a gate called Ar-Rayyan, through which only those who fast will enter on the Day of Resurrection.",
        source: "Sahih Bukhari"
    },
    {
        id: 'hajj',
        title: "Baab Al-Hajj",
        arabic: "بَاب الْحَجّ",
        meaning: "The Gate of Pilgrimage",
        icon: User,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        summary: "For those who completed the Hajj pilgrimage.",
        desc: [
            "This gate is for those who answered the call of Abraham and visited the House of Allah. They performed the Hajj with all its rites, returning purified as the day their mothers bore them.",
            "It represents the unity of the Ummah and the ultimate submission to Allah's command."
        ],
        traits: "Performing Hajj (if able), respecting the rites of Allah, and maintaining the purity gained from Hajj.",
        quote: "And proclaim to the people the Hajj [pilgrimage]; they will come to you on foot and on every lean camel...",
        source: "Quran 22:27"
    },
    {
        id: 'ayman',
        title: "Baab Al-Ayman",
        arabic: "بَاب الْأَيْمَن",
        meaning: "The Right Gate / Gate of Faith",
        icon: DoorOpen,
        color: "text-amber-500",
        bg: "bg-amber-50",
        border: "border-amber-200",
        summary: "For those who have complete trust (Tawakkul) and no reckoning.",
        desc: [
            "This is a special gate for the elite believers who had such perfect faith that they enter Paradise without any accounting (Hisab) or punishment.",
            "They are those who did not rely on omens or seek forbidden cures, but put their full trust in their Lord."
        ],
        traits: "Perfect Tawakkul (Trust) in Allah, leaving doubtful matters, and pure Tawheed (Monotheism).",
        quote: "They are those who do not ask for Ruqyah, do not believe in omens... and put their trust in their Lord.",
        source: "Sahih Bukhari"
    },
    {
        id: 'dhikr',
        title: "Baab Ad-Dhikr",
        arabic: "بَاب الذِّكْر",
        meaning: "The Gate of Remembrance",
        icon: BookOpen,
        color: "text-violet-500",
        bg: "bg-violet-50",
        border: "border-violet-200",
        summary: "For those who constantly remembered Allah.",
        desc: [
            "This gate calls to those whose tongues were always moist with the remembrance of Allah. They praised Him in ease and in hardship.",
            "Dhikr is the polish of the heart. These people found tranquility in 'SubhanAllah', 'Alhamdulillah', and 'Allahu Akbar'."
        ],
        traits: "Constant remembrance, reciting Quran, and being mindful of Allah's presence at all times.",
        quote: "Unquestionably, by the remembrance of Allah hearts are assured.",
        source: "Quran 13:28"
    },
    {
        id: 'kazimeen',
        title: "Baab Al-Kazimeen",
        arabic: "بَاب الْكَاظِمِينَ الْغَيْظ",
        meaning: "The Gate of Forgivers",
        icon: Sun,
        color: "text-orange-500",
        bg: "bg-orange-50",
        border: "border-orange-200",
        summary: "For those who suppressed their anger and forgave people.",
        desc: [
            "This gate is for those who had the power to retaliate but chose to forgive. They swallowed their anger when it boiled.",
            "Allah loves the doers of good (Al-Muhsinin), and this gate honors those who showed mercy to creation so that the Creator would show mercy to them."
        ],
        traits: "Controlling anger, forgiving others, and showing kindness in response to harshness.",
        quote: "Who repress anger, and who pardon men; verily, Allah loves the Al-Muhsinun (the good-doers).",
        source: "Quran 3:134"
    }
];

export default function GatesOfJannahPage({ onNavigate }) {
    const [selectedGate, setSelectedGate] = useState(null);

    if (selectedGate) {
        // Detail View
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-900 text-stone-100 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setSelectedGate(null)}
                        className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 transition-colors font-bold uppercase text-sm"
                    >
                        <ArrowLeft size={16} /> Back to Gates
                    </button>

                    <div className="bg-stone-800 rounded-3xl p-8 md:p-12 border border-stone-700 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <selectedGate.icon size={300} />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-xl bg-stone-900 ${selectedGate.color}`}>
                                <selectedGate.icon size={32} />
                            </div>
                            <div>
                                <h1 className="font-playfair text-3xl md:text-5xl text-white mb-2">{selectedGate.title}</h1>
                                <p className="font-amiri text-2xl text-emerald-500">{selectedGate.arabic}</p>
                            </div>
                        </div>

                        <p className="text-xl text-stone-400 font-serif italic mb-8 border-l-4 border-emerald-600 pl-4">
                            "{selectedGate.meaning}"
                        </p>

                        <div className="prose prose-invert prose-lg text-stone-300 mb-12">
                            {selectedGate.desc.map((paragraph, i) => (
                                <p key={i} className="leading-relaxed mb-6">{paragraph}</p>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-stone-900/50 p-6 rounded-xl border border-stone-700">
                                <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-wide">
                                    Requirements & Traits
                                </h3>
                                <p className="text-stone-300 leading-relaxed">{selectedGate.traits}</p>
                            </div>

                            <div className="bg-emerald-900/20 p-6 rounded-xl border border-emerald-900/50">
                                <h3 className="font-bold text-emerald-400 mb-4 uppercase text-sm tracking-wide">
                                    Evidence
                                </h3>
                                <p className="font-serif italic text-stone-300 mb-2">"{selectedGate.quote}"</p>
                                <p className="text-xs text-stone-500 font-bold uppercase">{selectedGate.source}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // List View
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-900 text-stone-100 animate-fade-in">
            <div className="max-w-6xl mx-auto">
                <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 text-sm font-bold uppercase">
                    <ArrowLeft size={16} /> Home
                </button>

                <div className="text-center mb-16">
                    <DoorOpen className="mx-auto text-emerald-400 mb-6" size={48} />
                    <h1 className="font-playfair text-4xl md:text-6xl text-white mb-4">The Eight Gates of Jannah</h1>
                    <p className="text-xl text-stone-400 max-w-2xl mx-auto">
                        Jannah has eight gates, and each gate calls those who excelled in a specific deed. Which gate will call you?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GATES_DATA.map((gate) => (
                        <button
                            key={gate.id}
                            onClick={() => setSelectedGate(gate)}
                            className="text-left bg-stone-800 p-6 rounded-2xl border border-stone-700 hover:bg-stone-750 hover:border-emerald-500/50 transition-all group h-full flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-stone-900 ${gate.color} group-hover:scale-110 transition-transform`}>
                                    <gate.icon size={24} />
                                </div>
                                <span className="font-amiri text-xl text-stone-500 group-hover:text-emerald-500 transition-colors">{gate.arabic}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{gate.title}</h3>
                            <p className="text-sm text-stone-400 mb-4 flex-grow">
                                {gate.meaning}
                            </p>

                            <div className="mt-auto pt-4 border-t border-stone-700 w-full flex justify-between items-center text-emerald-500">
                                <span className="text-xs font-bold uppercase tracking-widest">Details</span>
                                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
