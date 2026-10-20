import { motion } from 'framer-motion'
import { FolderOpen } from 'lucide-react'
import { Fragment } from 'react'
import { workExperience, certifications, education } from '../data/resume'

export interface ExperienceProps {
  reducedMotion?: boolean
}

export function Experience({ reducedMotion }: ExperienceProps = {}) {
  return (
    <section id="experience" className="py-24 md:py-32 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional journey across enterprise client environments and consulting roles.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline Section */}
          <div>
            <motion.h3
              className="text-2xl font-display font-bold text-white mb-10"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Timeline
            </motion.h3>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-64 bg-dark-border"></div>

              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative flex items-start mb-12 px-6"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Company badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark font-bold mb-4">
                    {index === 0 ? 'K' : 'A'}
                  </div>

                  {/* Experience card */}
                  <div className="relative pl-14 pr-6 bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-emerald-500/30">
                    <motion.h4
                      className="text-xl font-display font-semibold text-white mb-2"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {exp.position}
                    </motion.h4>

                    <motion.p
                      className="text-sm text-gray-400 mb-4"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {exp.company}
                    </motion.p>

                    <motion.p
                      className="text-gray-300 leading-relaxed"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {exp.responsibilities.map((resp, i) => (
                        <Fragment key={i}>
                          <span className="block text-gray-300">
                            {i === 0 ? '•' : '•'}
                            {resp}
                          </span>
                        </Fragment>
                      ))}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div>
            <motion.h3
              className="text-2xl font-display font-bold text-white mb-8"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Certifications
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="p-4 rounded-lg border border-dark-border bg-dark/50 transition-all duration-200"
                  whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.span
                    className={`w-3 h-3 rounded-full flex-shrink-0 mr-3`}
                    style={{ background: '#00d4aa' }}
                  />
                  <div>
                    <motion.h4
                      className="text-sm font-medium text-white"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {cert.name}
                    </motion.h4>
                    <motion.p
                      className="text-xs text-gray-400"
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {cert.issuer}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              key="education"
              className="mt-8 p-4 rounded-lg border border-dark-border bg-dark/50 transition-all duration-200"
              whileHover={{ backgroundColor: 'rgba(16,185,129,0.08)' }}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FolderOpen className="w-4 h-4 text-emerald-500 mb-3" />
              <div>
                <motion.h4
                  className="text-sm font-medium text-white"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Education
                </motion.h4>
                <motion.p
                  className="text-xs text-gray-400"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {education.map((edu, i) => (
                    <Fragment key={i}>
                      <span>{edu.degree}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.institution}</span>
                    </Fragment>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}