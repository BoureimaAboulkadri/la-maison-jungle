import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	function handleInput(e){
		setInputValue(e.target.value)
		
	}
	function handleBlur() {
	
		if (!inputValue.includes('@')){alert("attenention ,il y'a pa d'@,ceci n'est pas une adresse Valide")}
	}
	return (
		<footer className="lmj-footer">
			<div className="lmj-footer)elem">
				pour les passionné e s de plante 

				<div className="lmj-footer"> Laisez nous votre mail :</div>
				<input placeholder="Entrez votre mail"
					onchange={handleInput}
					value={inputValue}
					onBlur={handleBlur} 
					
				/>
			</div>

		</footer>
	)
}
export default Footer