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