export default function SectionHeading({
  subtitle,
  title,
  highlight,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      <p className="uppercase tracking-[4px] text-[#C89B3C] text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">

        {title}

        <span className="text-[#C89B3C]">
          {" "}
          {highlight}
        </span>

      </h2>

      <div className="w-24 h-1 bg-[#C89B3C] mx-auto rounded-full mt-6"></div>

      <p className="text-gray-400 mt-8 leading-8">
        {description}
      </p>

    </div>
  );
}