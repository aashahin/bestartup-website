import { Sparkles } from 'lucide-react'

type FeatureCardProps = {
  title: string
  description: string
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="group relative flex h-full transform flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10 dark:border-white/10 dark:bg-slate-800/30 dark:hover:shadow-purple-400/10">
      {/* Icon and Title */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/70 dark:to-pink-900/70">
          <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-300" />
        </div>
        <h3 className="text-base font-bold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  )
}
