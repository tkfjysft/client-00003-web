import { SECTIONS } from "@/config/content";
import CustomImage from "@/components/CustomImage";

export default function MessageContent() {
  const data = SECTIONS.find(s => s.type === "message") as any;
  if (!data) return null;

  return (
    // justify-center を削除し、items-start (左上寄せ) に変更
    // mx-auto を削除し、左寄せを強制します

<div className="h-full flex flex-col justify-start pl-[100px] pr-[8vw] py-20"> {/* ベース色 */}
  
  {/* ヘッダーエリア：ラインに Primary-1 を使用 */}
  <div className="mb-16 border-l-[3px] border-[#416E98] pl-8"> 
        <h2 className="text-[3rem] md:text-[9rem] text-clr-light-2 uppercase">{data.title}</h2>

    <p className="text-[#C0C0C0] tracking-[0.2em] uppercase text-xs mt-4">
      {data.subtitle}
    </p>
  </div>

  {/* コンテンツエリア */}
  <div className="grid md:grid-cols-2 gap-16 w-full max-w-[1200px] items-start">
    
    {/* 写真枠：枠線を追加 */}
    <div className="relative w-full aspect-video overflow-hidden rounded-sm border border-[#416E98]/30 shadow-2xl">
      <CustomImage
        src={data.photo}
        alt="Coating Service"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>

    {/* テキスト枠：微かな背景色でブロックを表現 */}
    <div className="space-y-12 bg-[#1A1625]/30 p-8 rounded-sm border-l border-[#416E98]/50">
      <p className="text-[#C0C0C0] font-light leading-relaxed tracking-wide text-base md:text-lg">
        {data.intro}
      </p>
      
      <div className="space-y-8">
        {(data.details as any[]).map((item: any, idx: number) => (
          <div key={idx}>
            <h4 className="text-[#416E98] font-bold text-sm md:text-base tracking-[0.2em] uppercase mb-2">
              {item.label}
            </h4>
            <p className="text-[#C0C0C0] font-light text-base md:text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* フッター：アクセントの区切り線 */}
  <div className="mt-16 pt-8 border-t border-[#416E98]/20 w-full max-w-[1200px]">
    <p className="text-[#C0C0C0] text-base md:text-lg italic font-light tracking-wide">
      {data.footer}
    </p>
  </div>
</div>


  );
}