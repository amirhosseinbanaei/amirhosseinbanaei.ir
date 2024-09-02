import { ReactNode } from "react";

export default function SideSpace({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-4 py-10 md:px-8 xl:px-[10%] ${className}`}>
      {children}
    </div>
  );
}
