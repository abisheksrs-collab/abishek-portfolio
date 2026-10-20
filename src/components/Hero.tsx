import { motion } from 'framer-motion'


export interface HeroProps {
  reducedMotion?: boolean
}

export function Hero({ reducedMotion }: HeroProps = {}) {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-dark-bg/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto w-full text-center px-4">
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tight"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit="out"
            transition={{ duration: 0.8 }}
          >
            ABISHEK R
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ERP Consultant with 4+ years of experience in Microsoft Dynamics 365 Finance & Operations (F&O) and Supply Chain Management (SCM), covering functional support, ERP administration, deployments, and business process troubleshooting.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent text-dark font-medium rounded-full transition-colors duration-200"
              onClick={() => window.location.href='#experience'}
            >
              View Experience
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white text-white font-medium rounded-full transition-colors duration-200"
              onClick={() => window.location.href='mailto:abishek.srs@gmail.com?subject=Resume%20request'}
            >
              Request Resume
            </motion.button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <svg className="w-20 h-20 text-emerald-500/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <svg className="w-16 h-16 text-emerald-500/50 absolute -top-4 -left-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {/* Animated background connections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-dark">
          <div className="absolute opacity-20 rounded-full blur-3xl top-1/4 left-1/4 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-500/20 motion-safe:animate-pulse" />
          <div className="absolute opacity-10 rounded-full blur-3xl bottom-1/4 right-1/4 -translate-x-1/4 -translate-y-1/4 w-64 h-64 bg-cyan-500/20 motion-safe:animate-pulse" />
        </div>
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-cyan-500/5 rounded-full opacity-30 animate-gradient" />
          </div>
        </div>
      </div>
    </section>
  )
}