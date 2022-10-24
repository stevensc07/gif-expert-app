import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Harry Potter']);
    const onAddCategory = (newCategory) => {
        //  categories.push(newCategory);
        // console.log(newCategory)
        if (categories.includes(newCategory)) return; // validacion que no  sea la misma categoria el include es si incluye o si esta en el arreglo
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            
                {

                    categories.map((category) => (
                        <GifGrid key={category}
                            category={category}
                        />
                    ))

                }
            
        </>

    )
}
