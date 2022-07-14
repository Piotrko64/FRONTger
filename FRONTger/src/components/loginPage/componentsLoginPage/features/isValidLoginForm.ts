export function isValidLoginForm(email: string, password: string) {
    if (email.length < 7 || password.length < 5 || !email.includes("@")) {
        return false;
    } else {
        return true;
    }
}
