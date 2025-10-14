
'use client'

import { useState } from 'react'

import { SimpleButton, IconButton, BlueButton } from '@/components/Buttons';
import { InputField } from '@/components/InputFields';
import ActionContainer from './ActionContainer';
import AvatarPic from './AvatarPic';
import Favicon from '@/components/getFavicon';
import { ProfileEdit } from './ProfileEdit';

interface Props {
    user: any
    canEdit: boolean
}

interface Profile {
    name: string;
    company_name: string;
    phone_num: string;
    cont_email: string;
    socials: string[];
    address: string;
    website: string;
}

export default function UserPageClient({ user, canEdit }: Props) {

    const [profile, setProfile] = useState<Profile>({
            name: user.name || '',
            company_name: user.company_name || '',
            phone_num: user.phone_num || '',
            cont_email: user.cont_email || '',
            socials: user.socials || [],
            address: user.address || '',
            website: user.website || ''
    });
    

    console.log(profile)
    const [isEditing, setIsEditing] = useState(false)

    if (isEditing) {
        // Show edit component instead of profile view
        return <ProfileEdit user={profile} onCancel={() => setIsEditing(false)} onSave={(updatedProfile: Profile) => {
          setProfile(updatedProfile); // Update state in parent
            setIsEditing(false);
        }} />
    }

    return (
        <div className='bg-[#3D74B6] w-full h-screen flex justify-center-safe items-center'>
            <div className='mt-70 px-2.5 w-full h-full bg-white md:w-fit md:h-fit  md:px-5 md:py-10 rounded-[48px] md:shadow-2xl' >
                <AvatarPic/>
                <div className='w-full flex-col flex items-center'>
                    <h3 className='text-gray-500'>{ profile.company_name}</h3>
                    <h1 className='text-3xl'>{profile.name}</h1>
                    <p className='text-gray-500 font-light'>Subtitles</p>
                </div>
                <div className='w-full flex justify-center gap-2.5'>
                    <IconButton><Favicon siteUrl='https://www.youtube.com/'/></IconButton>
                    <IconButton><Favicon siteUrl='https://www.artstation.com/slimeprincess'/></IconButton>
                    <IconButton><Favicon siteUrl='https://www.linkedin.com/'/></IconButton>
                </div>

                {/* email,phone,website,address info*/}
                <div>
                    <ActionContainer type="email" value={profile.cont_email}/>
                    <ActionContainer type="phone" value={profile.phone_num}/>
                    <ActionContainer type="website" value={profile.website}/>
                    <ActionContainer type="address" value={profile.address}/>
                </div>

                {canEdit ? (
                <SimpleButton className='px-5 py-2 rounded-full active:bg-white active:text-[#3D74B6] active:border active:border-[#3D74B6] transition-colors duration-200 ease-in-out bg-[#3D74B6] text-white'
                onClick={() => setIsEditing(true)}>
                    Edit
                </SimpleButton>
                ): (<></>)}
            </div>
        </div>
    )
};