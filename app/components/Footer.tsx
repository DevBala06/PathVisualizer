"use client"
import Link from "next/link"



const Footer = () => {
  return (
    <>
    <div className='w-[97%] relative bg-[#F5F5F5] rounded-xl  h-[98%] m-auto '>
    <div className="absolute  -right-1 w-14 h-14 bg-black rounded-xl "></div>
    <svg className='absolute w-11 h-11 bg-[#F6FB7A] text-black z-10 right-0 top-1  p-1 rounded-full -rotate-90' xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 16" fill="none"><path d="M0.90332 8.04297L19.0446 8.04297" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path><path d="M11.0708 0.710938C11.0708 4.81094 14.6368 8.12807 19.0445 8.12807" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path><path d="M19.0967 8.29297C14.6891 8.29297 11.123 11.6101 11.123 15.7101" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 100 100" className=' absolute right-[2.6rem] -top-1 -rotate-[270deg]' >
    <path d="M51.9 0V1.9C24.3 1.9 1.9 24.3 1.9 51.9H0V0H51.9Z" fill="black"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100" className=' absolute -right-1 top-[3.3rem]  rotate-[90deg]' >
    <path d="M51.9 0V1.9C24.3 1.9 1.9 24.3 1.9 51.9H0V0H51.9Z" fill="black"/>
    </svg>
    <footer className=" text-black  flex pt-24 mx-auto px-6">
        <div className="w-[90%]">
            <h1 className="text-5xl mb-4 font-semibold">PathVisualizer.io</h1>
            <p className="text-xl font-semibold  w-[50%]">Subscribe & enjoy weekly free resources!</p>
            <div className="bg-black p-3 mt-1   flex items-center justify-center rounded-full w-fit">
            <input type="text" className="text-white lg:w-[14rem] bg-transparent outline-none px-2 p-1" placeholder="Enter your email" ></input>
            <svg className=' w-8 h-8 bg-[#F6FB7A] text-black   p-1 rounded-full -rotate-45' xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 16" fill="none"><path d="M0.90332 8.04297L19.0446 8.04297" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path><path d="M11.0708 0.710938C11.0708 4.81094 14.6368 8.12807 19.0445 8.12807" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path><path d="M19.0967 8.29297C14.6891 8.29297 11.123 11.6101 11.123 15.7101" stroke="currentColor" strokeWidth="var(--svg-stroke-width--main)" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>

            </div>
        </div>
      <div className="container mx-auto flex gap-x-20 items-start  w-[80%]">
        {/* Company Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2 font-semibold text-base">
          <li>
    <Link
      href="/"
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/contact"
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      Contact
    </Link>
  </li>
  <li>
    <Link
      href="/about-us"
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      href="/docs"
      className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
    >
      Docs
    </Link>
  </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col ">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="space-y-2 font-semibold text-base">
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <div>
            <div>
            <h1 className="text-xl font-bold mb-4">Contact us</h1>
            <Link href="mailto:pwrbuster-balajisamy369@gmailcom" className="flex justify-center items-center gap-x-1 text-base font-semibold">balajisamy369@gmail.com</Link>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-2 mt-4">Based in</h1>
                <h1 className="text-base font-semibold">Mumbai</h1>
            </div>
        </div>
      </div>
      
    </footer>
    <div className="overflow-hidden mt-20 select-none text-black py-4">
      <div className="flex animate-scroll">
        {/* Repeat the text container twice */}
        <div className="flex-shrink-0 flex space-x-4">
          {Array(10)
            .fill("PathVisualizer™")
            .map((text, index) => (
              <span
                key={`first-${index}`}
                className="text-8xl font-extrabold whitespace-nowrap"
              >
                {text}
              </span>
            ))}
        </div>
        <div className="flex-shrink-0 flex space-x-4">
          {Array(10)
            .fill("PathVisualizer™")
            .map((text, index) => (
              <span
                key={`second-${index}`}
                className="text-lg font-extrabold whitespace-nowrap"
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      {/* Tailwind CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
    <div className="flex w-full p-4 justify-between absolute font-semibold bottom-1  text-black">
        <h1 className="">Copyright © 2025 PathVisualizer™</h1>
        
        <div className="flex gap-x-4 ">
        <Link className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" href={'/'}>Cookies</Link>
        <Link className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" href={'/'}>Privacy Policy</Link>
        <Link className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full" href={'/'}>Terms of Service</Link> 
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer