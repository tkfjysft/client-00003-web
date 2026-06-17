export default function AboutContent({ title, body, links }: { title: string, body: string, links: any[] }) {
  return (
    <div className="h-full flex flex-col justify-center px-[10vw]">
      <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter mb-8">
        {title}
      </h2>
      <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
        {body}
      </p>
      {links.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          className="inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}