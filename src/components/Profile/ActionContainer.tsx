import React from 'react'

import { SimpleButton } from '../Buttons'

interface ActionContainerProps {
  type: "email" | "phone" | "website" | "address";
  value: string;
}

const ActionContainer: React.FC<ActionContainerProps> = ({ type, value }) => {

    if (!value) return null; // hide if no value

    let label = "";
    let href = "";

    switch (type) {
        case "email":
            label = "Email";
            href = `mailto:${value}`;
        break;
        case "phone":
            label = "Call";
            href = `tel:${value}`;
        break;
        case "website":
            label = "Visit";
            href = value.startsWith("http") ? value : `https://${value}`;
        break;
        case "address":
            label = "Map";
            href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                value
            )}`;
        break;
        default:
            label = "Action";
            href = "#";
    }

    const handleClick = () => {
        if (type === "website" || type === "address") {
        window.open(href, "_blank", "noopener,noreferrer");
        } else {
        window.location.href = href; // email or phone
        }
    };

    return (   
        <div className="relative flex items-center w-[300px] sm:w-[480px] gap-2 my-5">
            <p
                className="whitespace-nowrap overflow-hidden pr-10"
                style={{
                maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
                WebkitMaskImage:
                    "linear-gradient(to right, black 80%, transparent 100%)",
                }}
            >
                {value}
            </p>
            <SimpleButton onClick={handleClick} className="absolute right-0 px-5 py-2 rounded-full active:bg-white active:text-[#3D74B6] active:border active:border-[#3D74B6] transition-colors duration-200 ease-in-out bg-[#3D74B6] text-white">
                {label}
            </SimpleButton>
        </div>
    );
}

export default ActionContainer