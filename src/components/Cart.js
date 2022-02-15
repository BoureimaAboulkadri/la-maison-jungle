import { useState } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const monsteraPrice = 8
	const prix=monsteraPrice * cart

	return isOpen ?(
		<div className='lmj-cart'>
			
			<button className="lmj-cart-closed" onclick={()=>setIsOpen(false)}> Fermer </button>
			<h2>Panier</h2> 
			<div>
				monstera:{monsteraPrice}€
				<button className=" lmj-cart-add-button " onClick={()=>updateCart(cart+1)}>Ajouter </button>
			</div>
			
			<h3>total : {prix}€</h3>
			<div>
			<button onClick={()=>updateCart(0)}>Vider</button>
			</div>
		</div>
	):<div className="lmj-cart-closed"> (<button cclassName="lmj-cart-toggle-butto" onClick={()=>setIsOpen(true)}> ouvrir le Panier</button>)</div>
}

export default Cart