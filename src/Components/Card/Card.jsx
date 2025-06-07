export default function Card({ name, image, constellation, techniques, rank }) {


    return (

        <h3>
            <p>{name}</p>
            <img src={image} />
            <p>{constellation}</p>
            <p>{techniques}</p>
            <p>{rank}</p>

        </h3>




    )

}