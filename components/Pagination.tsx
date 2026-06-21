import { SECTIONS } from "@/config/content";

interface PaginationProps {
  activeSection: number;
  onNavigate: (id: number) => void; // 関数型であることを明示
  setActiveSection: (id: number) => void;
  isSixActiveSection: boolean;
}

export default function Pagination({ activeSection, onNavigate, setActiveSection, isSixActiveSection }: PaginationProps) {
  const scrollToSection = (id: number) => {
    // 現在のセクションIDに基づいて、対応する要素をDOMから探すか、
    // あるいは単純に id で指定してスクロールさせます
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
{SECTIONS.map((section) => (
  <button
    key={section.id}
    onClick={() => onNavigate(section.id)}
    // 状態が 6 なら、6 のボタンが光る。それ以外は一致するidが光る。
    className={`w-3 h-3 rounded-full transition-all duration-300 ${
      activeSection === section.id 
        ? "bg-white scale-125" 
        : "bg-white/30 hover:bg-white/60"
    }`}
  />
))}
   </div>
  );
}