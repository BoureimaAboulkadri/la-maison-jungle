import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(e) {
	console.log("ceci est in clic ")

}
function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem