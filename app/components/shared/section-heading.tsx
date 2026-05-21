export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-muted-foreground/50 mb-10 text-sm leading-none font-medium uppercase">
      {children}
    </h2>
  );
}
