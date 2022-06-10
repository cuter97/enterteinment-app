export const errorsFirebase = (code) => {
    switch (code) {
        
        case "auth/email-already-in-use":
            return {
                code: "email",
                message: "User already registered",
            };
        case "auth/invalid-email":
            return {
                code: "email",
                message: "Invalid email format",
            };
        case "auth/user-not-found":
            return {
                code: "email",
                message: "Unregistered user",
            };
        case "auth/wrong-password":
            return {
                code: "password",
                message: "Incorrect password",
            };
        case "auth/too-many-requests":
            return {
                code: "password",
                message: "You have made too many queries",
            };

        default:
            return {
                code: "email",
                message: "An error occurred on the server",
            };
    }
}