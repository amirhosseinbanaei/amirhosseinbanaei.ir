export default function TitleAndDescription({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto w-full md:w-3/4 space-y-5">
      {title && (
        <h1 className="text-center text-7xl font-bold text-typography-primary">
          {title}
        </h1>
      )}
      {description && (
        <p className="text-md text-center text-typography-secondary lg:text-xl lg:leading-8 fa:leading-8 fa:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
