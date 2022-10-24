import { getGif } from "../controllers/getGifs";


export const GifGrid = ({ category }) => {

    getGif(category);
    
    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>
    )
}
