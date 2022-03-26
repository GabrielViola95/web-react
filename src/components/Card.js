import { useState } from "react";

const Card = (props) => {

    const [description, setDescription] = useState(false);

    const handleDescription = () => {
        setDescription(!description)
    }

    return (
        <div className="Card-container" >
            <div className="card-image">
                <img src={props.image} alt="posracionalismo" onClick={handleDescription} />
            </div>
            <div className="card-description">
                <h2 className="title-description">{props.title}</h2>
                {description && <p className="p-description">{props.description}</p> }
                <p onClick={handleDescription} className="p-description read-more">{!description ? "Leer más..." : "Ocultar..."}</p>
            </div>
            <button className="btn-homelink">INVESTIGAR <i class="fa-solid fa-play"></i></button>
        </div>
    )
} 

export default Card