import React from 'react';
import { ArrowLeft, ArrowRight, Scale, Footprints, Droplets, BookOpen, AlertCircle, Sun } from 'lucide-react';

const JUDGMENT_EVENTS = [
    {
        title: "1. The Trumpet (As-Soor)",
        desc: "The angel Israfil will blow the trumpet twice.",
        detail: "The first blow (Nafkhat al-Faza) causes every living being in the heavens and earth to fall dead, and the terror of it destroys the universe. The mountains will crumble into dust. After a period (known only to Allah), the second blow (Nafkhat al-Ba'ath) is blown, and all souls are returned to their recreated bodies.",
        quran: "And the Horn will be blown, and whoever is in the heavens and whoever is on the earth will fall dead except whom Allah wills. Then it will be blown again, and at once they will be standing, looking on.",
        source: "Quran 39:68"
    },
    {
        title: "2. The Gathering (Al-Hashr)",
        desc: "Humanity is gathered on a vast, white, flat plain.",
        detail: "People will be resurrected barefoot, naked, and uncircumcised. The sun will be brought within a mile of the heads. People will drown in their own sweat according to their sins: some to their ankles, some to their knees, some to their throats. The believers will be shaded by the Throne of Allah or their charity.",
        quran: "The Day when mankind will stand before the Lord of the worlds.",
        source: "Quran 83:6"
    },
    {
        title: "3. The Presentation of Deeds",
        desc: "Books of deeds will be distributed.",
        detail: "The righteous will receive their book in their right hand—a sign of success. They will be overjoyed and show it to others. The wicked will receive their book in their left hand or from behind their back—a sign of doom. Every small and big deed is recorded.",
        quran: "So as for he who is given his record in his right hand, he will say, 'Here, read my record!'... But as for he who is given his record in his left hand, he will say, 'Oh, I wish I had not been given my record.'",
        source: "Quran 69:19-25"
    },
    {
        title: "4. The Scales (Al-Mizan)",
        icon: Scale,
        desc: "The deeds are weighed with absolute justice.",
        detail: "It is a physical scale with two pans. Good deeds are placed on one side, and bad deeds on the other. A single 'SubhanAllah' or a good character trait is incredibly heavy. The heaviest thing on the scale is good character. If the good deeds outweigh the bad, the person is saved.",
        quran: "And We place the scales of justice for the Day of Resurrection, so no soul will be treated unjustly at all.",
        source: "Quran 21:47"
    },
    {
        title: "5. The Fount (Al-Hawd)",
        icon: Droplets,
        desc: "The water of purification and relief.",
        detail: "Each Prophet has a Hawd (Fount), but the Prophet Muhammad's (PBUH) is the largest. Its water is whiter than milk and sweeter than honey. Who drinks from it will never feel thirst again. It is the first relief for believers after the thirst of the Gathering.",
        quran: "Indeed, We have granted you, [O Muhammad], Al-Kawthar.",
        source: "Quran 108:1"
    },
    {
        title: "6. The Bridge (As-Sirat)",
        icon: Footprints,
        desc: "The bridge over the Hellfire.",
        detail: "Every human must cross it to reach Paradise. It is described as thinner than a hair and sharper than a sword. Below it is the roaring Hellfire with hooks to snatch people. People cross according to their light (deeds): some like lightning, some like wind, some running, some crawling, and some fall.",
        quran: "There is not one of you but will pass over it (Hell). This is upon your Lord an inevitability decreed.",
        source: "Quran 19:71"
    },
    {
        title: "7. The Qantarah (Mutual Justice)",
        desc: "The final purification.",
        detail: "After crossing the Sirat and before entering Jannah, believers are stopped on an arched bridge (Qantarah). Here, any minor grudges or wrongs between them are settled so they enter Paradise with hearts pure of any resentment (Ghill).",
        quran: "And We will remove whatever is in their breasts of resentment, [so they will be] brothers, on thrones facing each other.",
        source: "Quran 15:47"
    }
];

export default function JudgementDayPage({ onNavigate }) {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-900 text-stone-200 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-400 hover:text-white mb-8 text-sm font-bold uppercase transition-colors">
                    <ArrowLeft size={16} /> Home
                </button>

                <div className="text-center mb-16">
                    <AlertCircle className="mx-auto text-red-500 mb-6" size={50} />
                    <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">The Day of Judgment</h1>
                    <p className="text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed">
                        Yawm al-Qiyamah. The day 50,000 years long. It is the day where the veil is lifted, and absolute Justice is served.
                    </p>
                </div>

                <div className="space-y-16">
                    {JUDGMENT_EVENTS.map((event, idx) => (
                        <div key={idx} className="relative bg-stone-800 p-8 rounded-3xl border border-stone-700 hover:border-emerald-500/30 transition-colors">
                            <div className="absolute -top-6 left-8 bg-stone-900 border border-stone-700 text-emerald-500 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl">
                                Stage {idx + 1}
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center gap-4 mb-4">
                                    {event.icon && <event.icon className="text-emerald-500" size={28} />}
                                    <h2 className="font-playfair text-3xl text-white">{event.title}</h2>
                                </div>

                                <p className="text-stone-300 text-lg mb-6 leading-relaxed">{event.desc}</p>
                                <div className="bg-stone-900/50 p-6 rounded-xl border-l-2 border-emerald-500 mb-6">
                                    <p className="text-stone-300 text-base leading-relaxed">{event.detail}</p>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="font-serif italic text-stone-400 text-lg mb-2">"{event.quran}"</p>
                                    <p className="text-xs font-bold text-stone-500 uppercase">{event.source}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => onNavigate('gates')}
                        className="w-full md:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 mx-auto shadow-2xl transform hover:scale-105"
                    >
                        Next Stage: The Gates of Jannah <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
