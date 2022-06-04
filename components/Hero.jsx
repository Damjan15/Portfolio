import { PrimaryButton } from "../components/buttons"

const Hero = () => {
  return (
    <div className="hero w-full h-[550px] flex flex-col justify-end md:h-[600px]">
        <div className="bg-white py-8 space-y-4 md:w-[514px] lg:w-[514px] lg:py-12 lg:space-y-8">
            <h1>Hey, I'm Damjan Stamenov and I love building beautiful websites</h1>
            <PrimaryButton>About Me</PrimaryButton>
        </div>
    </div>
  )
}

export default Hero