export default function getLocalizedValue(obj: Record<string, string> | null = {}) {
    if (!obj || Object.entries(obj).length == 0) {
        return null;
    }

    // try favorites
    if (obj["pt-BR"]) {
        return obj["pt-BR"];
    } else if (obj["en"]) {
        return obj["en"];
    }

    // try another one
    return obj[Object.keys(obj)[0]];
}