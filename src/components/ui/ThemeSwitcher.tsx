const toggleHandler = () => {

    alert('theme switched');
 
}

export const Switcher = () => {
    return(
        
        <button onClick={toggleHandler} className="absolute right-20 mt-10 bg-gray-950">
            Toggle
        </button>
        
    )
}