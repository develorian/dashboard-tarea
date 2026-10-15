/// mi primer boton con react

// Interface -> Objetos que se pueden utilizar
interface ButtonVariant {
    variant?: "primary" | "outline" | "destructive";
}


export const MyButton = ({variant="primary"}:ButtonVariant) => {
    
    let className = "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

    if (variant === "outline") {
        className = "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
    } 
    
    else if (variant==="destructive") {
        className = "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    }

    return (
        <button type="button" className={className}>
            My React Button
        </button>
    );
}


export const MyButton2 = () => {

    return (
        <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">My Second React Button</button>
    );
}

export function MyButton3() {
    return (
        <button type="button" className="rounded-lg bg-amber-300">My third React Button</button>
    );
}