import { motion } from 'framer-motion'

import { skills } from '../data/resume'

type SkillCategoryColors = {
  d365: string
  erp: string
  reporting: string
  power: string
  cloud: string
  tools: string
}

export interface SkillsProps {
  reducedMotion?: boolean
}

const categoryColors: SkillCategoryColors = {
  d365: 'from-emerald-600 to-emerald-400',
  erp: 'from-cyan-600 to-cyan-400',
  reporting: 'from-purple-600 to-purple-400',
  power: 'from-pink-600 to-pink-400',
  cloud: 'from-blue-600 to-blue-400',
  tools: 'from-green-600 to-green-400',
}

export function Skills({ reducedMotion }: SkillsProps = {}) {
  // Group skills by category
  const categories = {
    d365: skills.filter(s => s.category === 'd365-supply-chain'),
    erp: skills.filter(s => s.category === 'erp-functional'),
    reporting: skills.filter(s => s.category === 'reporting-analytics'),
    power: skills.filter(s => s.category === 'power-platform'),
    cloud: skills.filter(s => s.category === 'cloud-devops'),
    tools: skills.filter(s => s.category === 'tools-admin'),
  }

  return (
    <section id="skills" className="py-24 md:py-32 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expertise in Microsoft Dynamics 365 F&O Supply Chain Management, ERP administration, reporting & analytics, Power Platform, and Cloud & DevOps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              className="p-6 rounded-2xl border border-dark-border bg-transparent transition-all duration-300 hover:bg-dark-card"
              whileHover={{ scale: 1.02 }}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Category header with icon and count */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium`}
                    style={{ background: categoryColors[category as keyof SkillCategoryColors] }}
                  >
                    {categorySkills.length}
                  </motion.span>
                  <motion.h3
                    className="text-lg font-display font-medium text-white"
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </motion.h3>
                </div>
                <motion.span
                  className={`w-3 h-3 rounded-full flex items-center justify-center`}
                  style={{ background: '#6b7280' }}
                />
              </div>

              {/* Skills list */}
              <div className="space-y-2">
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3 px-3 py-2 rounded bg-dark/50 transition-all duration-200"
                    whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)', transform: 'translateX(4px)' }}
                  >
                    <motion.span
                      className={`w-3 h-3 rounded-full flex-shrink-0`}
                      style={{ background: categoryColors[category as keyof SkillCategoryColors] }}
                    />
                    <span className="text-sm text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}