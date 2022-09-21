import Link from "next/link"

export const ActiveLink = ({ text, href }) => {
	return (
		<Link href={href}>
			<h2>{text}</h2>
		</Link>
	)
}
