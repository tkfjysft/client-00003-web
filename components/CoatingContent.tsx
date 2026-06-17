export default function CoatingContent({ title, links }: { title: string, links: any[] }) {
  return (
    <div className="h-full flex flex-col justify-center px-[10vw]">
      <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">
        {title}
      </h2>
      <div className="mt-12 flex flex-col gap-6">
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="group flex items-center gap-4 text-xl text-gray-300 hover:text-white transition-colors border-b border-gray-700 pb-4"
          >
            <span>{link.label}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}