import React from 'react'


interface ProductInfoProps {
  description: string,
} 
const BoardInfo = ({
  description,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className='min-h-[300px]'>{description}</div>
    </div>
  );
};

export default BoardInfo;
