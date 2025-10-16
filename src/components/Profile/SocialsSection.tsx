"use client"
import { IconButton } from "@/components/Buttons";
import Favicon from "@/components/getFavicon"

interface SocialFaviconsProps {
  socials?: string[]; // optional array of URLs
}

const SocialsSection: React.FC<SocialFaviconsProps> = ({ socials }) => {
    // Ensure socials is an array
    const socialLinks = socials || [];

    // Helper to get domain from URL
    const getDomain = (url: string): string | null => {
        try {
        const { hostname } = new URL(url);
        return hostname;
        } catch (e) {
        return null; // invalid URL
        }
    };

    return (
        <div className="w-full flex justify-center gap-2.5">
        {socialLinks.map((link, index) => {
            const domain = getDomain(link);
            if (!domain) return null; // skip invalid URLs
            return (
            <IconButton key={index}  onClick={() => window.open(link, "_blank", "noopener,noreferrer")}>
                <Favicon siteUrl={link} />
            </IconButton>
            );
        })}
        </div>
    );
};

export default SocialsSection;