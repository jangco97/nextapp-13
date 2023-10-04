"use client";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="pt-[75px] mx-10 sm:mx-20 md:mx-30 xl:mx-50">{children}</div>
  );
};

export default Container;
