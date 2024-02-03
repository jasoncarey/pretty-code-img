'use client';
import React, { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import { backgrounds, languages, themes } from '@/utils/utils';
import LanguageSelector from '@/components/languageSelector';
import ThemeSelector from '@/components/themeSelector';
import BackgroundSelector from '@/components/backgroundSelector';
import PaddingSelector from '@/components/paddingSelector';
import { Download } from 'lucide-react';
import Footer from '@/components/Footer';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(['1rem', '2rem', '3rem', '4rem']);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);
  const [code, setCode] = useState('');

  const editorRef = useRef(null);

  const exportPng = async () => {
    console.log('click logged');
    const editorElem = editorRef.current;
    if (editorElem) {
      const canvas = await html2canvas(editorElem);
      const image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      const link = document.createElement('a');
      link.download = 'code.png';
      link.href = image;
      link.click();
      console.log('exported');
    }
  };

  return (
    <main className='h-[100vh] flex flex-col items-center justify-between'>
      <header
        className='mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10
      bg-[#191919] rounded border border-[#3C3C3C] shadow-md'
      >
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />
        <div className='export-button self-center ml-auto'>
          <button
            className='flex items-center gap-3 bg-blue-400 py-2 px-3 rounded-md text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300'
            onClick={exportPng}
          >
            <Download />
            Export PNG
          </button>
        </div>
      </header>
      <div className='code-editor-ref mt-[14rem]' ref={editorRef}>
        <CodeEditor
          language={language}
          theme={theme}
          icon={activeIcon}
          background={background}
          currentPadding={currentPadding}
        />
      </div>
      <Footer />
    </main>
  );
}
