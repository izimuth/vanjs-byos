import { createEffect, createSignal } from "./signal"

export function setupCounter(element) 
{
	let [counter, setCounter] = createSignal(0);

	createEffect(() => {
		element.innerHTML = `count is ${counter()}`
	});

	element.addEventListener('click', () => setCounter(counter() + 1))
}


