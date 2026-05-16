type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
            dark ? "text-amber-300" : "text-amber-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-neutral-300" : "text-neutral-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
