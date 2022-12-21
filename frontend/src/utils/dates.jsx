import { format, add } from 'date-fns';

export function formataData(date) {
    const d = add(+new Date(date), { hours: 3 });
    return format(+new Date(d), 'dd/MM/yy');
}
