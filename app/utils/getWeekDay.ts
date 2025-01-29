export const getWeekDay = (dayNum: number): 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira' | 'Nenhum' => {
    switch (dayNum) {
        case 1:
            return 'Segunda-feira'
            break;
        case 2:
            return 'Terça-feira'
            break;
        case 3:
            return 'Quarta-feira'
            break;
        case 4:
            return 'Quinta-feira'
            break;
        case 5:
            return 'Sexta-feira'
            break;
    
        default:
            return 'Nenhum'
            break;
    }
}

export const getWeekDayObjName = (day: 'Segunda-feira' | 'Terça-feira' | 'Quarta-feira' | 'Quinta-feira' | 'Sexta-feira'): 'Segunda' | 'Terca' | 'Quarta' | 'Quinta' | 'Sexta' => {
    switch (day) {
        case 'Segunda-feira':
            return 'Segunda'
            break;
        case 'Terça-feira':
            return 'Terca'
            break;
        case 'Quarta-feira':
            return 'Quarta'
            break;
        case 'Quinta-feira':
            return 'Quinta'
            break;
        case 'Sexta-feira':
            return 'Sexta'
            break;
    
        default:
            return 'Segunda'
            break;
    }
}