import { PrimaryButton } from "../components/buttons"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero w-full h-[550px] flex flex-col justify-end md:h-[600px]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="bg-white py-8 space-y-4 md:w-[514px] lg:w-[514px] lg:py-12 lg:space-y-8">
            <h1>Hey, I'm Damjan Stamenov and I love building beautiful websites</h1>
            <PrimaryButton>
              About Me
            </PrimaryButton>
        </motion.div>
    </div>
  )
}

export default Hero