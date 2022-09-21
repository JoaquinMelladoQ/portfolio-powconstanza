import Link from "next/link"
import {useRouter} from "next/router"

const style = {
	fontSize: '35px',
}

export const ActiveLink = ({ text, href }) => {
	const { asPath } = useRouter()
	return (
		<Link href={href}>
			<h2 style={ asPath === href ? style : null}>{text}</h2>
		</Link>
	)
}
