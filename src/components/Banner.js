import "../styles/Banner.css"

import logo from "../assets/logo.png"

function Banner() {
	const title = " la maison jugle!"
	return (
	<div className="lmj-Banner">
				<img src={logo} alt='la maison jungle ' className='lmj-logo' />
				<h1 className='lmj-title'>{title}</h1> 
		</div >
	)
}

export default Banner 