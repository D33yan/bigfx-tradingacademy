// components/ui/skeleton-loader.tsx
export default function SkeletonLoader() {
    return (
      <div className="space-y-8">
        <div className="h-8 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="h-6 bg-gray-700 rounded w-2/4 animate-pulse"></div>
        <div className="h-6 bg-gray-700 rounded w-full animate-pulse"></div>
      </div>
    );
  }
  