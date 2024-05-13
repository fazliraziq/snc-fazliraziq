export default function Loading() {
    return <>
        <div className="bg-gray-100 rounded-lg w-[400px]">
            <div className="w-full rounded-lg shadow-md overflow-hidden">
            {/* User profile skeleton */}
            <div className="animate-pulse bg-gray-300 h-48 w-full rounded-lg"></div>
            {/* User details skeleton */}
            <div className="p-4 text-gray-400">
                <div className="animate-pulse h-6 w-3/4 bg-gray-300 mb-4"></div>
                <div className="animate-pulse h-4 w-1/2 bg-gray-300"></div>
                <div className="animate-pulse h-4 w-2/3 bg-gray-300 mt-2"></div>
            </div>
            </div>
        </div>
    </>
  }