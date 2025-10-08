import React from 'react'

import { SimpleButton } from '../Buttons'

const ActionContainer = () => {
    return (
        <>
            <div className="relative flex items-center gap-2">
                <p
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                    maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
                    }}
                >
                    This is a long text that will fade out near the button
                </p>
                <SimpleButton className=" px-5 py-2 rounded-full active:bg-white active:text-[#3D74B6] active:border active:border-[#3D74B6] transition-colors duration-200 ease-in-out bg-[#3D74B6] text-white">
                    Action
                </SimpleButton>
            </div>
        </>
    )
}

export default ActionContainer