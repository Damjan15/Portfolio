import Link from "next/link"
import { motion } from "framer-motion"
import { SecondaryButton } from "./buttons"

const ContactMe = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-col items-center py-12 md:flex-row md:justify-between">
        <div className="text-center mb-8 md:mb-0 md:max-w-lg md:text-left">
            <h2>Interested in doing a project together?</h2>
        </div>

        <div>
            <SecondaryButton>
              <Link href="/contact">Contact Me</Link>
            </SecondaryButton>
        </div>
    </motion.div>
  )
}

export default ContactMe