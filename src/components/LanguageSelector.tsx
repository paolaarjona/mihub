
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = 'en' | 'es';

type LanguageOption = {
  code: Language;
  name: string;
  flag: string;
};

const languages: LanguageOption[] = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    console.log('Changing language to:', value);
    setLanguage(value as Language);
  };

  if (!mounted) {
    return null;
  }

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="flex items-center">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger 
          className="w-[100px] sm:w-[120px] h-8 sm:h-10 border-none bg-transparent focus:ring-0 text-xs sm:text-sm" 
          aria-label="Select Language"
        >
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            <span className="text-white text-xs sm:text-sm hidden sm:inline">
              {currentLanguage?.flag} {currentLanguage?.name}
            </span>
            <span className="text-white text-xs sm:hidden">
              {currentLanguage?.flag}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[140px] sm:w-[160px] z-50">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span className="text-xs sm:text-sm">{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
