export default function Card({ name, image, constellation, techniques, rank }) {

    console.log('name: ', name);
    console.log('techniques: ', techniques);
    return (

        <span id='Card'>

            {/*First letter in capital letters */}
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
            <img id='img' src={image} />
            {/*First letter in capital letters */}
            <span id='constellation'>{constellation.charAt(0).toUpperCase() + constellation.slice(1)}</span>
            {/*Only first subindex of array - First letter in capital letters */}
            <span id='techniques'>{techniques[0].charAt(0).toUpperCase() + techniques[0].slice(1)}</span>
            {/*First letter in capital letters */}
            <span id='rank'>{rank.charAt(0).toUpperCase() + rank.slice(1)}</span>

        </span>




    )

}


