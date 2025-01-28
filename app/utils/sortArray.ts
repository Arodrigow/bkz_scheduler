export const sortArray = (a: string, b: string, type: string) => {

    if (type === 'week') {
        const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
        const indexA = days.findIndex((value) => value === a);
        const indexB = days.findIndex((value) => value === b);
        if (indexA < indexB) {
            return -1;
        }
        if (indexA > indexB) {
            return 1;
        }

    }

    if (type === 'string') {
        const nameA = a.toUpperCase(); // ignore upper and lowercase
        const nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
    }
    if (type === 'number') {
        if (Number(a) < Number(b)) {
            return -1;
        }
        if (Number(a) > Number(b)) {
            return 1;
        }
    }

    // names must be equal
    return 0;
}