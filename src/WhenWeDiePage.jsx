import React from 'react';
import { ArrowLeft, ArrowRight, Skull, Cloud, MessageCircle, Moon, Clock } from 'lucide-react';

const TIMELINE_EVENTS = [
    {
        title: "1. The Arrival of the Angel of Death",
        desc: "When the decreed time comes, the Angel of Death (Malak al-Maut) arrives to extract the soul. He is not alone.",
        believer: "For the believer, angels of mercy with faces like the sun arrive, bringing shrouds and perfumes from Paradise. The Angel of Death sits at the head and says: 'O good soul, come out to forgiveness from Allah and His pleasure.' The soul flows out as easily as a drop of water from a waterskin.",
        disbeliever: "For the disbeliever, angels of punishment with dark faces arrive. The Angel of Death says: 'O wicked soul, come out to the wrath of Allah.' The soul scatters inside the body and is ripped out like a skewer through wet wool.",
        source: "Musnad Ahmad (Hadith of Al-Bara' ibn 'Azib)"
    },
    {
        title: "2. The Journey to the Heavens",
        desc: "The soul is taken up by the angels.",
        believer: "The angels pass by other groups of angels who ask, 'Who is this good soul?' They call him by his best names. The gates of the lowest heaven are opened for him, and he is welcomed by the inhabitants of each heaven until he reaches the Seventh Heaven. Allah says: 'Write the book of My slave in Illiyyin (the highest status).'",
        disbeliever: "The angels pass by predicting endless doom. They call him by his worst names. They ask for the gates of heaven to be opened, but they are not opened. Allah says: 'Write his book in Sijjin (the lowest earth).'",
        source: "Quran 7:40"
    },
    {
        title: "3. The Return to the Earth",
        desc: "The soul is returned to the body in the grave for questioning. This is not a physical life, but a life of the Barzakh (barrier).",
        believer: "He hears the footsteps of his family leaving him. He is not afraid, for his good deeds (Prayer, Fasting, Charity) surround him to protect him.",
        disbeliever: "He is returned in a state of terror and confusion."
    },
    {
        title: "4. The Questioning (Munkar and Nakir)",
        desc: "Two blue-eyed, black-skinned angels, Munkar and Nakir, arrive to test the deceased.",
        questions: [
            { q: "Who is your Lord?", a_believer: "My Lord is Allah.", a_disbeliever: "Ah, ah, I do not know." },
            { q: "What is your religion?", a_believer: "My religion is Islam.", a_disbeliever: "Ah, ah, I do not know." },
            { q: "Who is this man who was sent among you?", a_believer: "He is the Messenger of Allah (Muhammad).", a_disbeliever: "I heard people saying something, so I said it too." }
        ],
        source: "Sunan Abu Dawood"
    },
    {
        title: "5. The Result: Life in Al-Barzakh",
        desc: "Depending on the answers, the grave transforms.",
        believer: "A voice calls from the sky: 'My slave has spoken the truth.' His grave is expanded as far as the eye can see and illuminated. A door to Paradise is opened, and he feels its breeze and smells its fragrance. He says: 'O Lord, establish the Hour so I can return to my family and wealth.'",
        disbeliever: "A voice calls: 'He has lied.' His grave is constricted until his ribs interlock. A door to Hellfire is opened, and he feels its heat. He says: 'O Lord, do not establish the Hour.'",
        source: "Musnad Ahmad"
    }
];

export default function WhenWeDiePage({ onNavigate }) {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-50 animate-fade-in text-stone-800">
            <div className="max-w-4xl mx-auto">
                <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-8 text-sm font-bold uppercase">
                    <ArrowLeft size={16} /> Home
                </button>

                <div className="text-center mb-16">
                    <div className="inline-block p-4 rounded-full bg-stone-200 text-stone-600 mb-4">
                        <Skull size={40} />
                    </div>
                    <h1 className="font-playfair text-4xl md:text-6xl text-stone-900 mb-6">When We Die</h1>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        Death is not the end; it is simply a transition. It is taking off the tight shoe of the Dunya and stepping into the reality of the Akhirah. Here is the timeline of the first moments of eternity.
                    </p>
                </div>

                <div className="space-y-12">
                    {TIMELINE_EVENTS.map((event, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12 border-l-4 border-stone-200">
                            <div className="absolute -left-[22px] md:-left-[26px] top-0 w-10 h-10 bg-white border-4 border-stone-300 rounded-full flex items-center justify-center text-stone-400 font-bold shadow-sm">
                                {idx + 1}
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100">
                                <h2 className="font-playfair text-2xl md:text-3xl text-stone-800 mb-4">{event.title}</h2>
                                <p className="text-stone-600 italic mb-6">{event.desc}</p>

                                {event.questions ? (
                                    <div className="space-y-4 mb-6">
                                        {event.questions.map((q, qIdx) => (
                                            <div key={qIdx} className="bg-stone-50 p-4 rounded-lg">
                                                <p className="font-bold text-stone-800 mb-2">{q.q}</p>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                    <div className="text-emerald-700 bg-emerald-50 px-3 py-2 rounded">
                                                        <span className="font-bold block uppercase text-xs mb-1">Believer:</span> "{q.a_believer}"
                                                    </div>
                                                    <div className="text-red-700 bg-red-50 px-3 py-2 rounded">
                                                        <span className="font-bold block uppercase text-xs mb-1">Disbeliever:</span> "{q.a_disbeliever}"
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                                        <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                                            <h3 className="font-bold text-emerald-800 mb-2 uppercase text-xs tracking-wide flex items-center gap-2"><Moon size={14} /> The Believer</h3>
                                            <p className="text-stone-700 leading-relaxed text-sm">{event.believer}</p>
                                        </div>
                                        <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                                            <h3 className="font-bold text-red-800 mb-2 uppercase text-xs tracking-wide flex items-center gap-2"><Cloud size={14} /> The Disbeliever</h3>
                                            <p className="text-stone-700 leading-relaxed text-sm">{event.disbeliever}</p>
                                        </div>
                                    </div>
                                )}

                                {event.source && (
                                    <p className="text-xs text-stone-400 font-mono mt-4 text-right">Source: {event.source}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-stone-100 p-8 rounded-2xl">
                    <MessageCircle className="mx-auto text-stone-400 mb-4" />
                    <p className="text-stone-600 text-lg font-serif italic mb-4">
                        "Grave is the first stage of the cooling of the eye for the believer."
                    </p>
                    <p className="text-stone-500 font-bold uppercase text-xs mb-8">Prophet Muhammad (PBUH)</p>

                    <button
                        onClick={() => onNavigate('judgment')}
                        className="w-full md:w-auto px-8 py-4 bg-stone-800 text-white rounded-full font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 mx-auto"
                    >
                        Next Stage: The Day of Judgment <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
