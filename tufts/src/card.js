import blue from "./assets/blue.jpeg"
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={blue} alt="blue rug "></img>
            <h2>tuft rugs</h2>
            <p>I make websites alive</p>

        </div>
    )
}

export default Card