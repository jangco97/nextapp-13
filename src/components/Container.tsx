"use client";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    //container박스 안의 요소는 최소 width 640px를 보장한다. 또한 최대 크기 2520px를 보장한다.
    <div className="max-w-[2520px] mx-10 sm:mx-20 md:mx-72 h-screen min-w-[640px]">
        {children}
    </div>
  );
};

export default Container;
