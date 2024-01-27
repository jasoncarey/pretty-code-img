"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utils";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

function LanguageSelector({
  language,
  setLanguage,
  setActiveIcon,
}: LanguageSelectorProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
    const activeIcon = languages.find((lang) => lang.name === language)?.icon;
    if (activeIcon) {
      setActiveIcon(activeIcon);
    }
    toggleDropdown();
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Language</p>
      <div className="dropdown-title capitalize w-[120px] top-[94px]">
        {language}
        <ChevronDown />
      </div>
      {showDropdown && (
        <div className="dropdown-menu w-[120px]">
          {languages.map((lang, idx) => {
            return (
              <div key={idx}>
                <button
                  className="dropdown-item capitalize text-left"
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
