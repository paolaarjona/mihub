
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
          className="w-[120px] h-10 border-none bg-transparent focus:ring-0" 
          aria-label="Select Language"
        >
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4 text-white" />
            <span className="text-white text-sm">
              {currentLanguage?.flag} {currentLanguage?.name}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[160px]">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
