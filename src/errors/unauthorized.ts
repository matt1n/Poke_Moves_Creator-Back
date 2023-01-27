export function unauthorized(): {name: string, message: string}{
    return {
		name: "unauthorized",
		message: `Unauthorized`
	};
}