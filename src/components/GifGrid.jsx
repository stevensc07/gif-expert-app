
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GIfItem } from "./GIfItem";


export const GifGrid = ({ category }) => {
    const {images, isLoading}=useFetchGifs(category)
 
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => (
                      <GIfItem key={image.id}
                      {...image}
                      >

                      </GIfItem>
                    ))
                }
            </div> 
        </>
    )
}
