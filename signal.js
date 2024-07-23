
/** @type {Function | null} */
let activeEffect = null;

export function createSignal(initial)
{
	let value = initial;
	let subscribers = new Set();

	const getter = () => {
		if (activeEffect)
			subscribers.add(activeEffect);

		return value;
	};

	const setter = (val) => {
		value = val;
		for(const fn of subscribers)
			fn();
	};

	return [getter, setter];
}

export function createEffect(callback)
{
	const effect = () => {
		activeEffect = effect;
		callback();
		activeEffect = null;
	};

	effect();
}


