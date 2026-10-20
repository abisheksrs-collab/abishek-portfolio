import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { education, certifications, skills } from '../data/resume'

export interface EducationProps {
  reducedMotion?: boolean
}

export function Education({ reducedMotion }: EducationProps = {}) {
  return (
    <section id="education" className="py-24 md:py-32 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Academic background in computer science and cloud computing.
            </motion.p>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl border border-dark-border bg-dark/50 transition-all duration-300"
                  whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.h3
                    className="text-xl font-display font-semibold text-white mb-3"
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {edu.degree}
                  </motion.h3>

                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <motion.p
                      className="text-sm text-gray-400 mb-2"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {edu.institution}
                    </motion.p>
                    <motion.p
                      className="text-sm text-gray-500"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {edu.location}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}

              {/* Certifications within education section */}
              <motion.div
                key="certs"
                className="mt-8 p-6 rounded-2xl border border-dark-border bg-dark/50 transition-all duration-300"
                whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-5 h-5 text-emerald-500 mb-3" />
                <motion.h3
                  className="text-xl font-display font-semibold text-white mb-3"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Certifications
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="text-xs text-gray-400">
                      <span className="font-medium text-white">{cert.name}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">{cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills summary in education section */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-white mb-8"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Core Competencies
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {skills
                .filter(s => s.category === 'd365-supply-chain' || s.category === 'erp-functional')
                .slice(0, 10)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded bg-dark/50 text-xs text-gray-300 transition-all duration-200"
                    whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0`} style={{ background: '#00d4aa' }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}