import { useState } from "react";

export const GifExpertApp=()=>{
    
    //Hook de react para mantener el estado
    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    console.log(categories)

    return (
        <>
            {/*Titulo */}
            <h1>GIFExpertApp</h1>

            {/*Input */}

            {/*Listado de Gif */}
            <ol>
                {categories.map(category=>{
                    return <li key={category}>{category}</li>
                })}
                <li></li>
            </ol>
                {/*Gif item */}
        </>
    )
}