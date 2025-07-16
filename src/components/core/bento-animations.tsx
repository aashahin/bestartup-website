export const AiBusinessAnimation = () => {
  // Predefined values to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 20, duration: 4.2, delay: 0.3 },
    { left: 85, top: 15, duration: 3.8, delay: 1.1 },
    { left: 65, top: 80, duration: 5.1, delay: 0.7 },
    { left: 25, top: 70, duration: 4.5, delay: 1.8 },
    { left: 75, top: 35, duration: 3.2, delay: 0.1 },
    { left: 45, top: 25, duration: 4.8, delay: 1.4 },
    { left: 90, top: 60, duration: 3.7, delay: 0.9 },
    { left: 35, top: 85, duration: 4.1, delay: 1.6 },
    { left: 55, top: 50, duration: 3.9, delay: 0.5 },
    { left: 10, top: 45, duration: 5.3, delay: 1.2 },
    { left: 80, top: 90, duration: 4.7, delay: 0.2 },
    { left: 20, top: 10, duration: 3.5, delay: 1.9 },
  ]

  return (
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-10" />
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-300 opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute top-8 left-8">
        <div className="mb-4 flex h-16 w-16 transform items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-transform duration-300 hover:scale-105">
          <svg
            className="h-8 w-8 animate-pulse text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-32 animate-pulse rounded-full bg-blue-200 shadow-sm">
            <div
              className="h-full animate-pulse rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              style={{ width: '70%' }}
            />
          </div>
          <div
            className="h-2 w-24 animate-pulse rounded-full bg-purple-200 shadow-sm"
            style={{ animationDelay: '0.5s' }}
          >
            <div
              className="h-full animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
              style={{ width: '85%', animationDelay: '0.5s' }}
            />
          </div>
          <div
            className="h-2 w-28 animate-pulse rounded-full bg-pink-200 shadow-sm"
            style={{ animationDelay: '1s' }}
          >
            <div
              className="h-full animate-pulse rounded-full bg-gradient-to-r from-pink-400 to-pink-600"
              style={{ width: '60%', animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-8 bottom-8">
        <div className="flex space-x-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-blue-400 shadow-lg" />
          <div
            className="h-3 w-3 animate-bounce rounded-full bg-purple-400 shadow-lg"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="h-3 w-3 animate-bounce rounded-full bg-pink-400 shadow-lg"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}

export const AiMentorAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-teal-600 to-cyan-500 opacity-10" />
    {/* Animated learning path */}
    <div className="absolute inset-0">
      <svg className="h-full w-full opacity-20" viewBox="0 0 300 200">
        <path
          d="M 50 150 Q 100 50 150 100 T 250 50"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute top-6 left-6">
      <div className="mb-6 flex items-center space-x-3">
        <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div
          className="flex h-8 w-8 scale-0 transform animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg"
          style={{
            animation: 'scaleIn 2s ease-in-out infinite',
            animationDelay: '1s',
          }}
        >
          <svg
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-emerald-200">
            <div
              className="h-full animate-pulse rounded-full bg-emerald-400"
              style={{
                width: '100%',
                animation: 'fillBar 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="h-2 w-2 animate-ping rounded-full bg-teal-400"
            style={{ animationDelay: '0.5s' }}
          />
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-teal-200">
            <div
              className="h-full rounded-full bg-teal-400"
              style={{
                width: '75%',
                animation: 'fillBar 3s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className="h-2 w-2 animate-ping rounded-full bg-cyan-400"
            style={{ animationDelay: '1s' }}
          />
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-cyan-200">
            <div
              className="h-full rounded-full bg-cyan-400"
              style={{
                width: '45%',
                animation: 'fillBar 3s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute right-6 bottom-6 flex space-x-2">
      <div className="flex h-6 w-6 animate-bounce items-center justify-center rounded-full bg-white shadow-lg">
        <div className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
      </div>
    </div>
    <style jsx>{`
      @keyframes scaleIn {
        0%,
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes fillBar {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    `}</style>
  </div>
)

export const AiVisionPlannerAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-violet-500 via-purple-600 to-indigo-600 opacity-10" />
    {/* Orbiting elements */}
    <div className="absolute inset-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-violet-300 opacity-40"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: '0 0',
            transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(60px)`,
            animation: `orbit 8s linear infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="relative">
        <div className="mb-4 flex h-20 w-20 rotate-12 transform animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-2xl transition-all duration-500 hover:rotate-0">
          <svg
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 h-4 w-4 animate-ping rounded-full bg-yellow-400" />
        <div
          className="absolute -bottom-2 -left-2 h-3 w-3 animate-ping rounded-full bg-pink-400"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute -top-1 -left-3 h-2 w-2 animate-ping rounded-full bg-cyan-400"
          style={{ animationDelay: '1s' }}
        />
      </div>
    </div>
    <div className="absolute top-4 left-4 space-y-2">
      <div className="h-1 w-16 animate-pulse rounded-full bg-violet-300" />
      <div
        className="h-1 w-12 animate-pulse rounded-full bg-purple-300"
        style={{ animationDelay: '0.3s' }}
      />
      <div
        className="h-1 w-14 animate-pulse rounded-full bg-indigo-300"
        style={{ animationDelay: '0.6s' }}
      />
    </div>
    <style jsx>{`
      @keyframes orbit {
        0% {
          transform: translate(-50%, -50%) rotate(0deg) translateX(60px)
            rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(360deg) translateX(60px)
            rotate(-360deg);
        }
      }
    `}</style>
  </div>
)

export const GPTAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 via-red-500 to-pink-500 opacity-10" />
    <div className="absolute top-6 left-6">
      <div className="mb-4 flex items-center space-x-2">
        <div className="flex h-10 w-10 animate-pulse items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div className="flex space-x-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-orange-400 shadow-sm" />
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-red-400 shadow-sm"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-pink-400 shadow-sm"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="animate-slideInLeft flex space-x-2">
          <div className="h-6 w-6 animate-pulse rounded-lg bg-orange-200 shadow-sm" />
          <div className="h-2 w-20 self-center rounded-full bg-orange-200 shadow-sm">
            <div
              className="h-full animate-pulse rounded-full bg-orange-400"
              style={{ width: '80%' }}
            />
          </div>
        </div>
        <div
          className="animate-slideInRight flex justify-end space-x-2"
          style={{ animationDelay: '1s' }}
        >
          <div className="h-2 w-16 self-center rounded-full bg-red-200 shadow-sm">
            <div
              className="h-full animate-pulse rounded-full bg-red-400"
              style={{ width: '90%' }}
            />
          </div>
          <div className="h-6 w-6 animate-pulse rounded-lg bg-red-200 shadow-sm" />
        </div>
      </div>
    </div>
    <div className="absolute right-4 bottom-4">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-lg"
        style={{ animation: 'spin 3s linear infinite' }}
      >
        <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
      </div>
    </div>
    <style jsx>{`
      @keyframes slideInLeft {
        0% {
          transform: translateX(-20px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideInRight {
        0% {
          transform: translateX(20px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}</style>
  </div>
)

export const AiCodeGeneratorAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 opacity-10" />
    {/* Terminal-like animation */}
    <div className="absolute inset-0">
      <div className="absolute top-4 right-4 h-2 w-2 animate-ping rounded-full bg-green-400" />
      <div className="absolute top-8 right-8 animate-pulse font-mono text-xs text-green-400 opacity-60">
        {'{ building... }'}
      </div>
    </div>
    <div className="absolute top-6 left-6">
      <div className="mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <div className="space-y-1">
        <div
          className="animate-typewriter flex items-center space-x-2"
          style={{ animationDelay: '0s' }}
        >
          <div className="h-3 w-3 rounded-sm bg-green-400 shadow-sm" />
          <div className="h-1 w-16 animate-pulse rounded-full bg-green-300" />
        </div>
        <div
          className="animate-typewriter flex items-center space-x-2 pl-4"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="h-2 w-2 rounded-sm bg-emerald-400 shadow-sm" />
          <div className="h-1 w-12 animate-pulse rounded-full bg-emerald-300" />
        </div>
        <div
          className="animate-typewriter flex items-center space-x-2 pl-4"
          style={{ animationDelay: '1s' }}
        >
          <div className="h-2 w-2 rounded-sm bg-teal-400 shadow-sm" />
          <div className="h-1 w-14 animate-pulse rounded-full bg-teal-300" />
        </div>
        <div
          className="animate-typewriter flex items-center space-x-2"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="h-3 w-3 rounded-sm bg-green-400 shadow-sm" />
          <div className="h-1 w-10 animate-pulse rounded-full bg-green-300" />
        </div>
      </div>
    </div>
    <div className="absolute right-6 bottom-6 flex space-x-1">
      <div className="h-8 w-1 animate-pulse rounded-full bg-green-400 shadow-sm" />
      <div
        className="h-6 w-1 animate-pulse rounded-full bg-emerald-400 shadow-sm"
        style={{ animationDelay: '0.2s' }}
      />
      <div
        className="h-10 w-1 animate-pulse rounded-full bg-teal-400 shadow-sm"
        style={{ animationDelay: '0.4s' }}
      />
      <div
        className="h-4 w-1 animate-pulse rounded-full bg-green-400 shadow-sm"
        style={{ animationDelay: '0.6s' }}
      />
      <div
        className="h-7 w-1 animate-pulse rounded-full bg-emerald-400 shadow-sm"
        style={{ animationDelay: '0.8s' }}
      />
    </div>
    <style jsx>{`
      @keyframes typewriter {
        0% {
          opacity: 0;
          transform: translateX(-10px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}</style>
  </div>
)

export const AiImageGeneratorAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 opacity-20" />
    <div className="absolute top-8 left-8">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600">
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8 w-8 animate-pulse rounded-lg bg-pink-300 opacity-60" />
        <div
          className="h-8 w-8 animate-pulse rounded-lg bg-purple-300 opacity-60"
          style={{ animationDelay: '0.3s' }}
        />
        <div
          className="h-8 w-8 animate-pulse rounded-lg bg-indigo-300 opacity-60"
          style={{ animationDelay: '0.6s' }}
        />
        <div
          className="h-8 w-8 animate-pulse rounded-lg bg-indigo-300 opacity-60"
          style={{ animationDelay: '0.9s' }}
        />
        <div
          className="h-8 w-8 animate-pulse rounded-lg bg-pink-300 opacity-60"
          style={{ animationDelay: '1.2s' }}
        />
        <div
          className="h-8 w-8 animate-pulse rounded-lg bg-purple-300 opacity-60"
          style={{ animationDelay: '1.5s' }}
        />
      </div>
    </div>
    <div className="absolute right-8 bottom-8">
      <div className="h-6 w-6 animate-ping rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
    </div>
  </div>
)

export const AiVoiceOverAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </div>
      <div className="flex justify-center space-x-1">
        <div className="h-8 w-1 animate-pulse rounded-full bg-cyan-400" />
        <div
          className="h-12 w-1 animate-pulse rounded-full bg-blue-400"
          style={{ animationDelay: '0.1s' }}
        />
        <div
          className="h-6 w-1 animate-pulse rounded-full bg-indigo-400"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="h-10 w-1 animate-pulse rounded-full bg-cyan-400"
          style={{ animationDelay: '0.3s' }}
        />
        <div
          className="h-4 w-1 animate-pulse rounded-full bg-blue-400"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
  </div>
)

export const AiArticleWizardAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500 via-green-600 to-teal-600 opacity-20" />
    <div className="absolute top-6 right-6 left-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </div>
      <div className="space-y-3">
        <div className="h-2 w-full rounded-full bg-emerald-300 opacity-60" />
        <div className="h-2 w-4/5 rounded-full bg-green-300 opacity-60" />
        <div className="h-2 w-full rounded-full bg-teal-300 opacity-60" />
        <div className="h-2 w-3/4 rounded-full bg-emerald-300 opacity-60" />
        <div className="h-2 w-5/6 rounded-full bg-green-300 opacity-60" />
      </div>
    </div>
    <div className="absolute right-6 bottom-6">
      <div className="flex space-x-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-400" />
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-green-400"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-teal-400"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
  </div>
)

export const AiWebsiteAnalyzerAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-600 opacity-20" />
    {/* Website layout mockup */}
    <div className="absolute top-8 right-8 left-8">
      <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
        <div className="mb-3 flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-4 h-2 flex-1 rounded-full bg-white/20" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-blue-300/40" />
          <div
            className="h-2 w-3/4 animate-pulse rounded bg-indigo-300/40"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="h-2 w-1/2 animate-pulse rounded bg-purple-300/40"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </div>
      {/* Performance indicators */}
      <div className="mt-4 flex space-x-4">
        {[85, 72, 94].map((score, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/30">
              <span className="text-xs font-bold text-white">{score}</span>
              <svg className="absolute inset-0 h-8 w-8 -rotate-90 transform">
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-white/20"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 12}`}
                  strokeDashoffset={`${2 * Math.PI * 12 * (1 - score / 100)}`}
                  className="animate-pulse text-blue-400"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Scanning animation */}
    <div className="absolute inset-0">
      <div
        className="h-0.5 w-full animate-pulse bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        style={{
          animation: 'scan 3s ease-in-out infinite',
          top: '20%',
        }}
      />
    </div>
    <style jsx>{`
      @keyframes scan {
        0% {
          top: 20%;
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          top: 80%;
          opacity: 0;
        }
      }
    `}</style>
  </div>
)

export const AiImageAnalyzerAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500 via-teal-600 to-cyan-600 opacity-20" />
    {/* Image analysis visualization */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="relative">
        {/* Mock image */}
        <div className="h-16 w-24 rounded-lg bg-gradient-to-br from-emerald-300 to-teal-400 shadow-lg" />
        {/* Detection boxes */}
        {[
          { top: '10%', left: '15%', width: '30%', height: '40%' },
          { top: '60%', left: '45%', width: '40%', height: '25%' },
          { top: '30%', left: '70%', width: '25%', height: '30%' },
        ].map((box, i) => (
          <div
            key={i}
            className="absolute animate-pulse rounded border-2 border-emerald-400"
            style={{
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-emerald-400" />
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-emerald-400" />
            <div className="absolute -right-1 -bottom-1 h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        ))}
        {/* Analysis indicators */}
        <div className="absolute top-0 -right-8 space-y-1">
          <div className="h-1 w-6 animate-pulse rounded-full bg-emerald-400" />
          <div
            className="h-1 w-4 animate-pulse rounded-full bg-teal-400"
            style={{ animationDelay: '0.3s' }}
          />
          <div
            className="h-1 w-5 animate-pulse rounded-full bg-cyan-400"
            style={{ animationDelay: '0.6s' }}
          />
        </div>
      </div>
    </div>
    {/* Scanning grid */}
    <div className="absolute inset-0 opacity-20">
      <div className="grid h-full grid-cols-8 grid-rows-6">
        {[...Array(48)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse border border-emerald-400/20"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  </div>
)

export const AiSpeechToTextAnimation = () => {
  // Predefined values to avoid hydration mismatch
  const waveformHeights = [
    22, 35, 18, 42, 28, 15, 38, 31, 25, 44, 19, 36, 29, 17, 41, 26, 33, 21, 39,
    14,
  ]

  return (
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-600 to-rose-600 opacity-20" />
      {/* Audio waveform */}
      <div className="absolute bottom-1/3 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-end space-x-1">
        {waveformHeights.map((height, i) => (
          <div
            key={i}
            className="rounded-full bg-purple-400"
            style={{
              width: '3px',
              height: `${height}px`,
              animation: `wave 2s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
      {/* Microphone */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 transform">
        <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        {/* Sound waves */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-400 opacity-30"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              animation: `ripple 2s ease-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      {/* Text output */}
      <div className="absolute right-8 bottom-8 left-8">
        <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
          <div className="space-y-1">
            <div className="h-1.5 w-full animate-pulse rounded bg-purple-300/60" />
            <div
              className="h-1.5 w-3/4 animate-pulse rounded bg-pink-300/60"
              style={{ animationDelay: '0.5s' }}
            />
            <div
              className="h-1.5 w-1/2 animate-pulse rounded bg-rose-300/60"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            height: 10px;
          }
          50% {
            height: 40px;
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export const AiContentEditorAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-orange-600 to-red-600 opacity-20" />
    <div className="absolute top-8 right-8 left-8">
      <div className="mb-6 flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-1.5 w-20 rounded-full bg-yellow-300 opacity-60" />
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-1.5 w-16 rounded-full bg-orange-300 opacity-60" />
            <div className="h-2 w-2 rounded-full bg-red-400" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-1.5 w-full rounded-full bg-yellow-200 opacity-40" />
        <div className="h-1.5 w-4/5 rounded-full bg-orange-200 opacity-40" />
        <div className="h-1.5 w-5/6 rounded-full bg-red-200 opacity-40" />
      </div>
    </div>
  </div>
)

export const AiDocAnalyzerAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-slate-500 via-gray-600 to-zinc-600 opacity-20" />
    <div className="absolute top-8 left-8">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-500 to-gray-600">
        <svg
          className="h-7 w-7 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-sm bg-slate-300 opacity-60" />
          <div className="h-1.5 w-24 rounded-full bg-slate-300 opacity-60" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-sm bg-gray-300 opacity-60" />
          <div className="h-1.5 w-20 rounded-full bg-gray-300 opacity-60" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 rounded-sm bg-zinc-300 opacity-60" />
          <div className="h-1.5 w-28 rounded-full bg-zinc-300 opacity-60" />
        </div>
      </div>
    </div>
    <div className="absolute right-8 bottom-8">
      <div className="flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
        <svg
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    </div>
  </div>
)

export const AiPresentationAnimation = () => {
  // Predefined values to avoid hydration mismatch
  const floatingElements = [
    { left: 12, top: 15 },
    { left: 78, top: 23 },
    { left: 45, top: 67 },
    { left: 89, top: 34 },
    { left: 23, top: 78 },
    { left: 67, top: 12 },
    { left: 34, top: 89 },
    { left: 91, top: 56 },
  ]

  return (
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-600 to-blue-600 opacity-20" />
      {/* Presentation slides animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="relative">
          {/* Main slide */}
          <div className="h-20 w-32 rotate-3 transform animate-pulse rounded-lg bg-gradient-to-br from-indigo-300 to-purple-400 shadow-xl">
            <div className="space-y-1 p-3">
              <div className="h-2 w-full rounded bg-white/60" />
              <div className="h-1.5 w-3/4 rounded bg-white/40" />
              <div className="h-1.5 w-1/2 rounded bg-white/40" />
            </div>
          </div>
          {/* Background slides */}
          <div
            className="absolute -top-2 -left-2 h-20 w-32 -rotate-6 transform animate-pulse rounded-lg bg-gradient-to-br from-purple-300 to-blue-400 opacity-80 shadow-lg"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-1 p-3">
              <div className="h-2 w-2/3 rounded bg-white/50" />
              <div className="h-1.5 w-full rounded bg-white/30" />
              <div className="h-1.5 w-3/4 rounded bg-white/30" />
            </div>
          </div>
          <div
            className="absolute -top-4 -left-4 h-20 w-32 rotate-12 transform animate-pulse rounded-lg bg-gradient-to-br from-blue-300 to-indigo-400 opacity-60 shadow-md"
            style={{ animationDelay: '1s' }}
          >
            <div className="space-y-1 p-3">
              <div className="h-2 w-1/2 rounded bg-white/40" />
              <div className="h-1.5 w-5/6 rounded bg-white/20" />
              <div className="h-1.5 w-2/3 rounded bg-white/20" />
            </div>
          </div>
          {/* Chart elements */}
          <div className="absolute -right-4 -bottom-4 flex items-end space-x-1">
            <div className="h-6 w-2 animate-pulse rounded-t bg-indigo-400" />
            <div
              className="h-8 w-2 animate-pulse rounded-t bg-purple-400"
              style={{ animationDelay: '0.2s' }}
            />
            <div
              className="h-4 w-2 animate-pulse rounded-t bg-blue-400"
              style={{ animationDelay: '0.4s' }}
            />
            <div
              className="h-10 w-2 animate-pulse rounded-t bg-indigo-400"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        </div>
      </div>
      {/* Floating design elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-indigo-300 opacity-40"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export const AiLandingPageMakerAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500 via-blue-600 to-indigo-600 opacity-20" />
    {/* Website builder interface */}
    <div className="absolute top-8 right-8 left-8">
      {/* Browser mockup */}
      <div className="rounded-t-lg bg-white/10 p-2 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <div className="ml-2 h-1.5 flex-1 rounded-full bg-white/20" />
        </div>
      </div>
      {/* Website content */}
      <div className="space-y-3 rounded-b-lg bg-white/5 p-4">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 animate-pulse rounded bg-cyan-400" />
          <div className="h-1.5 w-16 animate-pulse rounded bg-cyan-300/60" />
        </div>
        {/* Hero section */}
        <div className="space-y-2">
          <div className="h-2 w-full animate-pulse rounded bg-blue-300/60" />
          <div
            className="h-1.5 w-3/4 animate-pulse rounded bg-indigo-300/40"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="h-3 w-1/3 animate-pulse rounded bg-cyan-400/80"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
        {/* Content blocks */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 animate-pulse rounded bg-blue-300/30" />
          <div
            className="h-8 animate-pulse rounded bg-indigo-300/30"
            style={{ animationDelay: '0.3s' }}
          />
          <div
            className="h-8 animate-pulse rounded bg-cyan-300/30"
            style={{ animationDelay: '0.6s' }}
          />
        </div>
      </div>
    </div>
    {/* Code blocks floating */}
    <div className="absolute right-8 bottom-8 space-y-1">
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-sm bg-cyan-400" />
        <div className="h-1 w-8 animate-pulse rounded bg-cyan-300/60" />
      </div>
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-sm bg-blue-400" />
        <div
          className="h-1 w-6 animate-pulse rounded bg-blue-300/60"
          style={{ animationDelay: '0.2s' }}
        />
      </div>
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-sm bg-indigo-400" />
        <div
          className="h-1 w-10 animate-pulse rounded bg-indigo-300/60"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
    {/* Building animation */}
    <div className="absolute top-4 right-4">
      <div className="h-3 w-3 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
    </div>
  </div>
)

export const AiCustomizedTemplatesAnimation = () => (
  <div className="relative h-80 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 via-pink-600 to-purple-600 opacity-20" />
    {/* Template selection interface */}
    <div className="absolute top-6 left-6">
      <div className="mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      </div>
      {/* Template grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="animate-fadeInUp space-y-1">
          <div className="h-8 w-12 transform animate-pulse rounded bg-rose-300 opacity-60 shadow-sm transition-transform hover:scale-105" />
          <div className="h-1 w-8 animate-pulse rounded-full bg-rose-400 opacity-60" />
        </div>
        <div
          className="animate-fadeInUp space-y-1"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="h-8 w-12 transform animate-pulse rounded bg-pink-300 opacity-60 shadow-sm transition-transform hover:scale-105" />
          <div className="h-1 w-10 animate-pulse rounded-full bg-pink-400 opacity-60" />
        </div>
        <div
          className="animate-fadeInUp space-y-1"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="h-8 w-12 transform animate-pulse rounded bg-purple-300 opacity-60 shadow-sm transition-transform hover:scale-105" />
          <div className="h-1 w-9 animate-pulse rounded-full bg-purple-400 opacity-60" />
        </div>
        <div
          className="animate-fadeInUp space-y-1"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="h-8 w-12 transform animate-pulse rounded bg-rose-400 opacity-60 shadow-sm transition-transform hover:scale-105" />
          <div className="h-1 w-7 animate-pulse rounded-full bg-rose-500 opacity-60" />
        </div>
      </div>
    </div>
    {/* AI customization indicators */}
    <div className="absolute right-6 bottom-6">
      <div className="flex space-x-1">
        <div className="h-2 w-2 animate-ping rounded-full bg-rose-400" />
        <div
          className="h-2 w-2 animate-ping rounded-full bg-pink-400"
          style={{ animationDelay: '0.3s' }}
        />
        <div
          className="h-2 w-2 animate-ping rounded-full bg-purple-400"
          style={{ animationDelay: '0.6s' }}
        />
      </div>
    </div>
    {/* Magic wand effect */}
    <div className="absolute top-1/2 right-8 -translate-y-1/2 transform">
      <div className="relative">
        <div className="h-8 w-1 rotate-45 transform animate-pulse rounded-full bg-gradient-to-t from-rose-400 to-pink-400" />
        <div className="absolute -top-1 -right-1 h-2 w-2 animate-ping rounded-full bg-yellow-400" />
        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-ping rounded-full bg-yellow-300"
            style={{
              left: `${Math.cos((i * 60 * Math.PI) / 180) * 15}px`,
              top: `${Math.sin((i * 60 * Math.PI) / 180) * 15}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  </div>
)
