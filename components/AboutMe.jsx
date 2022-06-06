import Link from "next/link"
import { SecondaryButton } from "./buttons"
import { motion } from "framer-motion"

const AboutMe = () => {
  return (
    <div className="h-full py-8 flex flex-col lg:flex-row lg:justify-between lg:items-center xl:h-screen" id="about-me">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="w-full mb-8 lg:w-2/5 lg:mb-0">
            <img src="/assets/profile-image.jpg" className="w-full" alt="Profile Picture" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="w-full border-t-2 border-b-2 space-y-8 border-grayDarkBlue/20 py-12 lg:w-3/5 lg:max-w-2xl lg:space-y-12">
            <h2>About Me</h2>
            <p className="font-public text-grayDarkBlue leading-[30px]">I’m a junior front-end developer looking for a new freelance opportunity or role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Macedonia, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
            <SecondaryButton>
              <Link href="/portfolio">Go to portfolio</Link>
            </SecondaryButton>
        </motion.div>
    </div>
  )
}

export default AboutMe