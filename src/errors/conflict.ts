export function conflictError(): {name: string, message: string}{
    return {
        name: "conflict",
        message: "e-mail already registered"
    }
}