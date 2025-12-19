import React from 'react';
import { ArrowLeft, Crown, Sparkles, Droplets, Home, Eye } from 'lucide-react';

export default function JannahPage({ onNavigate }) {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-white animate-fade-in text-stone-800">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-8 text-sm font-bold uppercase transition-colors">
                    <ArrowLeft size={16} /> Home
                </button>

                <div className="text-center mb-16">
                    <Crown className="mx-auto text-emerald-500 mb-6" size={50} />
                    <h1 className="font-playfair text-4xl md:text-6xl text-stone-900 mb-6">Jannah: The Eternal Home</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        "I have prepared for My righteous slaves what no eye has seen, no ear has heard, and has never crossed the heart of a human being." — Hadith Qudsi
                    </p>
                </div>

                {/* Section 1: Intro */}
                <section className="mb-16">
                    <p className="text-lg leading-relaxed text-stone-700 mb-6">
                        Jannah (Paradise) is not just a garden; it is the ultimate fulfillment of every human desire, purified and amplified. It is a place where "tired" does not exist, where "boredom" is impossible, and where grief is a distant memory.
                    </p>
                    <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                        <p className="font-serif italic text-xl text-emerald-900 mb-2">
                            "They will say: 'Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative.'"
                        </p>
                        <p className="text-xs font-bold uppercase text-emerald-600">Quran 35:34</p>
                    </div>
                </section>

                {/* Section 2: Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-stone-50 p-8 rounded-3xl">
                        <Sparkles className="text-amber-500 mb-4" size={32} />
                        <h3 className="font-playfair text-2xl font-bold mb-4">The Soil & Construction</h3>
                        <p className="text-stone-600 mb-4">
                            When asked about the construction of Jannah, the Prophet (PBUH) described it: "Bricks of gold and bricks of silver. Its mortar is musk, its pebbles are pearls and rubies, and its soil is saffron."
                        </p>
                        <p className="text-xs text-stone-400 uppercase font-bold">Source: Jami at-Tirmidhi</p>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-3xl">
                        <Droplets className="text-blue-500 mb-4" size={32} />
                        <h3 className="font-playfair text-2xl font-bold mb-4">The Rivers</h3>
                        <p className="text-stone-600 mb-4">
                            It has rivers that do not change in taste, rivers of milk, rivers of wine (delicious and non-intoxicating), and rivers of pure honey. These rivers flow not in trenches, but on the surface of the ground, guided by the believer's command.
                        </p>
                        <p className="text-xs text-stone-400 uppercase font-bold">Source: Quran 47:15</p>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-3xl">
                        <Home className="text-purple-500 mb-4" size={32} />
                        <h3 className="font-playfair text-2xl font-bold mb-4">The Palaces</h3>
                        <p className="text-stone-600 mb-4">
                            For the believer is a tent made of a single hollowed pearl, sixty miles high. The believer will have palaces where he can see the outside from the inside and the inside from the outside, showing their purity and clarity.
                        </p>
                        <p className="text-xs text-stone-400 uppercase font-bold">Source: Sahih Bukhari</p>
                    </div>

                    <div className="bg-stone-50 p-8 rounded-3xl">
                        <Crown className="text-rose-500 mb-4" size={32} />
                        <h3 className="font-playfair text-2xl font-bold mb-4">Eternal Youth</h3>
                        <p className="text-stone-600 mb-4">
                            People will enter Jannah at the age of 33, in the form of Adam (60 cubits tall), with the beauty of Yusuf. There is no illness, no old age, no sleep (as sleep is the brother of death), and no death.
                        </p>
                        <p className="text-xs text-stone-400 uppercase font-bold">Source: Sahih Muslim</p>
                    </div>
                </div>

                {/* Section 3: The Greatest Reward */}
                <section className="bg-stone-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl mb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                    <Eye className="mx-auto text-emerald-400 mb-6 relative z-10" size={48} />
                    <h2 className="font-playfair text-3xl md:text-5xl mb-6 relative z-10">The Greatest Reward</h2>
                    <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto mb-8 relative z-10">
                        While they are enjoying their blessings, a light will shine from above. The Lord of the Worlds will reveal His Veil. They will look at His Face. By Allah, they will not have been given anything dearer to them than looking at their Lord.
                    </p>
                    <p className="font-serif italic text-emerald-400 text-lg relative z-10">"Some faces, that Day, will be radiant, looking at their Lord."</p>
                    <p className="text-xs text-stone-500 uppercase font-bold mt-2 mb-8 relative z-10">Quran 75:22-23</p>

                    <button
                        onClick={() => onNavigate('home')}
                        className="relative z-10 w-full md:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 mx-auto shadow-2xl transform hover:scale-105"
                    >
                        <Home size={20} /> Return Home
                    </button>
                </section>

                {/* Section 4: Sources Footer */}
                <div className="border-t border-stone-200 pt-8">
                    <h3 className="font-bold text-stone-800 mb-4">Sources & References</h3>
                    <ul className="grid md:grid-cols-2 gap-2 text-xs text-stone-500 font-mono">
                        <li>• Quran: Surah Rahman, Surah Waqiah, Surah Insan</li>
                        <li>• Sahih Bukhari: Book of Beginning of Creation</li>
                        <li>• Sahih Muslim: Book of Paradise</li>
                        <li>• Jami at-Tirmidhi: Chapters on The Description of Paradise</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
