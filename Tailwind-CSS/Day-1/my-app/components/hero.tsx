const Hero = () => {
  return (
    <div className="my-40 justify-cente flex items-center w-full flex-col">
        <h1 className="text-5xl font-bold tracking-tight max-w-2xl text-center leading-tight bg-linear-to-b from-neutral-50 to bg-neutral-500 bg-clip-text text-transparent">
            Unleash the Power of intutive finance
        </h1>
        <p className="text-neutral-400 mx-auto mt-10 max-w-3xl text-center text-lg selection:bg-white">
            Say GoodBye to the <span className="text-sky-400">outdated</span> financial tools. Every Small business owner, regardless of the background, can now manage their business like a pro.
            Simple. <span className="text-sky-400">Intuitive</span>. And never boring. 
        </p>
        <div className="flex justify-center mt-8 w-full max-w-lg">
            <input 
                type="text"
                className="mr-4 rounded-xl border border-neutral-600 text-white placeholder:text-neutral-500 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
                placeholder="Enter Your Email"
            />
            <button className="relative text-white rounded-2xl cursor-pointer border border-neutral-600 px-4 py-2">
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-linear-to-r from-transparent via-sky-600 to-transparent"></div>
                Join the Waitlist</button>
        </div>
        
    </div>
  )
}

export default Hero
