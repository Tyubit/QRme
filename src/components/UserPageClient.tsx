
'use client'

import { useState } from 'react'

import { SimpleButton, IconButton, BlueButton } from '@/components/Buttons';
import { InputField } from '@/components/InputFields';
import Favicon from '@/components/getFavicon';

interface Props {
    user: any
    canEdit: boolean
}

export default function UserPageClient({ user, canEdit }: Props) {
    
    return (
        <div className='bg-[#3D74B6] w-full h-screen flex justify-center-safe items-center'>
            <div className='px-2.5 w-full h-full bg-white md:w-fit md:h-fit  md:px-5 md:py-10 md:rounded-[48px] md:shadow-2xl' >
                <div>
                </div>
                <div className='w-full flex-col flex items-center'>
                    <h3>Company name</h3>
                    <h1 className='text-3xl'>Person name</h1>
                    <p className='font-light'>Subtitles</p>
                </div>
                <div className='w-full flex justify-center gap-2.5'>
                    <IconButton><Favicon siteUrl='https://www.youtube.com/'/></IconButton>
                    <IconButton><Favicon siteUrl='https://www.artstation.com/slimeprincess'/></IconButton>
                    <IconButton><Favicon siteUrl='https://www.linkedin.com/'/></IconButton>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    )
};