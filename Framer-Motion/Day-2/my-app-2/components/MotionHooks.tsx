import {motion} from 'motion/react' 

const MotionHooks = () => {
    return (
        <div className='min-h-screen bg-neutral-900 flex items-center justify-center'>
            <div className='grid grid-col-2  divide-y divide-white'>
                <div className="col-span-2 bg-green-400 h-60"></div>
                <div className=" bg-red-400 h-60 w-40"></div>
                <div className=" bg-neutral-400 h-60 w-40"></div>
                <div className="col-span-2 bg-neutral-400 h-60"></div>
                <div className=" bg-neutral-400 h-60 w-40"></div>
                <div className=" bg-neutral-400 h-60 w-40"></div>
            </div>
        </div>
    )
}

export default MotionHooks
