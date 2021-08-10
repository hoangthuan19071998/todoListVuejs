export default function validateForm(payload) {
    if (payload.name.length < 1) {
        return { error: true, message: "title task is required" }
    }
    return { error: false, message: "Action success!" }
}