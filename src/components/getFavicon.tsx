import Image from "next/image";

interface FaviconProps {
  siteUrl: string;
  className ?: string
}

export default function Favicon({ siteUrl,className }: FaviconProps) {
  // Extract domain only
  let domain: string | null = null;

  try {
    domain = new URL(siteUrl).hostname;
  } catch (e) {
    console.warn("Invalid URL passed to Favicon:", siteUrl);
    domain = null;
  }
  if (!domain) return null;


  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

  return (
    <Image
      src={faviconUrl}
      alt={`${domain} favicon`}
      width={44}
      height={44}
      className={`${className}`}
    />
  );
}