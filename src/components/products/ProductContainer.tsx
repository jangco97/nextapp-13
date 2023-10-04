"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const ProductContainer: React.FC<ContainerProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
      {children}
    </div>
  );
};

export default ProductContainer;
