export default function MaintenanceContent({ title, steps }: { title: string, steps: any[] }) {
  return (
    <div className="h-full flex flex-col justify-center px-[10vw]">
      <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <a 
            key={index} 
            href={step.href} 
            className="group p-6 border border-gray-800 hover:border-white transition-all duration-300"
          >
            <span className="text-sm text-gray-500">{step.id}</span>
            <h3 className="text-xl text-white mt-2 group-hover:text-white">{step.label}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}