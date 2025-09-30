
import { motion } from "motion/react";

// SkeletonCard.jsx
// Tailwind + motion/react
// Usage:
// <SkeletonCard loading={isGenerating} imageUrl={imageUrl} title="Generated image" onRetry={retryFn} />

export default function SkeletonCard({
  loading = false,
  imageUrl = "",
  title = "",
  onRetry = null,
}) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        {/* IMAGE / SKELETON AREA */}
        <div className="w-full h-56 md:h-64 lg:h-72 relative bg-gray-100 dark:bg-gray-700">
          {loading ? (
            // skeleton shimmer
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4">
                <div className="w-full h-full rounded-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse" />
              </div>
            </div>
          ) : (
            // image with subtle motion entrance
            <motion.img
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              src={imageUrl}
              alt={title || "generated"}
              className="object-cover w-full h-full"
              onError={(e) => {
                // fallback UI handled in the card body (no crash)
                e.currentTarget.style.display = "none";
              }}
            />
          )}

          {/* small status badge */}
          <div className="absolute top-3 left-3">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm ${
                loading ? "bg-yellow-500" : "bg-green-500"
              }`}
            >
              {loading ? "Generating..." : "Ready"}
            </div>
          </div>
        </div>

        {/* CARD BODY */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                {title || (loading ? "Working on it" : "Generated image")}
              </h3>

              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {loading
                  ? "This may take a few seconds. The image is being created from your prompt."
                  : imageUrl
                  ? "Image generated successfully."
                  : "Failed to generate image."}
              </p>
            </div>

            <div className="flex-shrink-0">
              {/* action button(s) */}
              {loading ? (
                <button
                  className="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg bg-white/20 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                  disabled
                >
                  Waiting
                </button>
              ) : imageUrl ? (
                <a
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  View
                </a>
              ) : (
                <button
                  onClick={onRetry}
                  className="inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                >
                  Retry
                </button>
              )}
            </div>
          </div>

          {/* progress / hint line */}
          {loading && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 animate-[progress_2.5s_linear_infinite]" style={{ width: "40%" }} />
              </div>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Tip: you can cancel or adjust your prompt while generating.</p>
            </div>
          )}

          {!loading && imageUrl && (
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Size: 1024×1024</span>
              <span>•</span>
              <span>Format: PNG</span>
            </div>
          )}
        </div>
      </div>

      {/* small helper note */}
      <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
        {loading ? "Generating image — this is a placeholder skeleton card." : "Image generation finished."}
      </p>
    </div>
  );
}

/*
Notes:
- Uses Tailwind classes (animate-pulse + utility classes).
- The progress bar uses a tiny custom animation class name ("animate-[progress_2.5s_linear_infinite]") — if your Tailwind config strips arbitrary animations, replace with a static animated gradient or use an inline CSS animation.
- Replace sample text / sizes with real generator metadata where available.
*/
