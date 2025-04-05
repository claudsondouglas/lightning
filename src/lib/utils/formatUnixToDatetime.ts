//import { DateTime } from "luxon";

export default function formatUnixToDatetime(unix: number): string {
    const date = new Date(unix * 1000);

    if (isNaN(date.getTime())) {
        return 'n/a'
    }

    return date.toLocaleDateString('pt-BR') + ' às ' + date.toLocaleTimeString('pt-BR').slice(0, 5)
}