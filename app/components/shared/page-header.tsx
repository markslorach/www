type PageHeaderProps = {
  children?: React.ReactNode;
  title: string;
};

export default function PageHeader({ children, title }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="text-foreground text-xl leading-6 font-medium tracking-tight">
        {title}
      </h1>

      <p className="text-muted-foreground text-[15px] text-pretty">
        {children}
      </p>
    </header>
  );
}
