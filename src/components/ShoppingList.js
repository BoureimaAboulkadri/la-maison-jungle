import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
//categories nous vient de la partie precedente pour recuper les toute les categories de plantes

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className ="lmj-shopping-List">
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div key={id}>
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						/><button onclick={() => updateCart(cart + 1)}> ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList