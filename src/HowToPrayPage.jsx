import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';

const HowToPrayPage = ({ onNavigate }) => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-stone-50 animate-fade-in">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
                <div className="text-center mb-8">
                    <button
                        onClick={() => onNavigate('home')}
                        className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-600 mb-4 transition-colors text-sm font-bold uppercase tracking-wide"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </button>
                    <div className="flex justify-center mb-4 text-emerald-600">
                        <BookOpen size={48} />
                    </div>
                    <h1 className="font-playfair text-4xl md:text-5xl text-stone-800 mb-6">How to Pray</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed mb-4">
                        A step-by-step guide to performing the daily prayers (Salah).
                    </p>
                    <p className="text-stone-500 text-sm">
                        Source: <a href="https://salamcenter.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Salam Center</a>
                    </p>
                </div>

                <div className="flex-grow bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden h-[800px] md:h-[1000px] relative">
                    <iframe
                        src="https://salamcenter.org/wp-content/uploads/2020/09/Prayer-Guide.pdf"
                        className="w-full h-full border-none"
                        title="Prayer Guide PDF"
                    />
                </div>

                <div className="mt-8 text-center text-stone-500 text-sm">
                    <p>If the PDF does not load, you can <a href="https://salamcenter.org/wp-content/uploads/2020/09/Prayer-Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold">view it directly here</a>.</p>
                </div>

            </div>
        </div>
    );
};

export default HowToPrayPage;
