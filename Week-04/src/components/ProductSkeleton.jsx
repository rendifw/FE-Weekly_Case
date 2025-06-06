const ProductSkeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-[400px] bg-white rounded-xl">
        <div className="relative flex justify-center w-full min-h-[222px] rounded-xl bg-gray-300 animate-pulse"></div>
        <div className="flex flex-col w-full gap-5 px-6 py-4 h-full justify-between">
          <div className="flex flex-col w-full gap-2">
            <span className="text-sm bg-gray-300 animate-pulse rounded h-4 w-1/4"></span>
            <h3 className="text-lg bg-gray-300 animate-pulse rounded h-6 w-3/4"></h3>
            <h3 className="text-lg bg-gray-300 animate-pulse rounded h-6 w-1/2"></h3>
            <div className="flex gap-3">
              <div className="flex gap-1">
                <div className="bg-gray-300 animate-pulse rounded-full h-5 w-5"></div>
                <div className="bg-gray-300 animate-pulse rounded-full h-5 w-5"></div>
                <div className="bg-gray-300 animate-pulse rounded-full h-5 w-5"></div>
                <div className="bg-gray-300 animate-pulse rounded-full h-5 w-5"></div>
                <div className="bg-gray-300 animate-pulse rounded-full h-5 w-5"></div>
              </div>
              <span className="text-sm bg-gray-300 animate-pulse rounded h-4 w-1/6"></span>
            </div>
          </div>
          <h2 className="font-semibold text-2xl bg-gray-300 animate-pulse rounded h-8 w-1/3"></h2>
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
