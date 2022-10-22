import { useState } from 'react'

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    }
    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue)
    }
    return (
        <form  onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
