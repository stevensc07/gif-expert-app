import { useEffect, useState } from "react";
import { getGif } from "../controllers/getGifs";
import { GIfItem } from "./GIfItem";


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGif(category);
        console.log(newImages);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

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
