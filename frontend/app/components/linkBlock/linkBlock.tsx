import Link from "next/link";

export const LinkBlock = (iconName: string, name: string, href: string) => {
    return (
        <div>
            <div>
                <img src={`../../images/${iconName}.png`} alt={name} />
            </div>
            <Link href={href}>{name}</Link>
        </div>
    )
}