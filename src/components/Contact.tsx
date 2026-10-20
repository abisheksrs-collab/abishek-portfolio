import { motion } from 'framer-motion'
import { Mail, Link as Linkedin, Globe } from 'lucide-react'

export interface ContactProps {
  reducedMotion?: boolean
}

export function Contact({ reducedMotion }: ContactProps = {}) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Mail className="w-6 h-6 text-emerald-500 mb-4" />
                <div>
                  <p className="text-lg font-medium text-white">Email</p>
                  <a
                    href="mailto:abishek.srs@gmail.com"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    onClick={() => window.open('mailto:abishek.srs@gmail.com')}
                  >
                    abishek.srs@gmail.com
                  </a>
                </div>
              </motion.div>

              

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Globe className="w-6 h-6 text-emerald-500 mb-4" />
                <div>
                  <p className="text-lg font-medium text-white">Location</p>
                  <p className="text-gray-400">Bengaluru, Karnataka</p>
                </div>
              </motion.div>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Linkedin className="w-6 h-6 text-emerald-500 mb-4" />
                <div>
                  <p className="text-lg font-medium text-white">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/abishek-r-57858a224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                  >
                    linkedin.com/in/abishek-r-57858a224
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-8"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Social
            </motion.h2>

            <div className="space-y-4">
              {[
                { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/abishek-r-57858a224' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-dark-border bg-dark/50 hover:bg-emerald-500/20 transition-all duration-300"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <social.icon aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-dark-border text-center">
          <motion.p
            className="text-sm text-gray-500"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Abishek R. All rights reserved.
          </motion.p>

          <div className="mt-4 space-x-4">
            <motion.a
              href="https://linkedin.com/in/abishek-r-57858a224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="mailto:abishek.srs@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}