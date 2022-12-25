export const eatingHabitsMap: IeatingHabitsMap = {
    'Vegan': 'leaf',
    'Contains frozen ingredients': 'frozen',
    'Celery and products thereof': 'celery',
    'Milk and products thereof': 'milk',
    'Sulphur dioxide and sulphites > 10mg/l': 'wine',
    'Fish and products thereof': 'fish',
    'Egg and products thereof': 'egg',
    'Pork and products thereof': 'pig',
    'Soybeans and products thereof': 'soy_beans',
    'Cereals containing gluten': 'wheat',
    'Sesame seeds and products thereof': 'sesame',
    'Contains nuts': 'cashew_nut'
}

//Create interface for eatingHabitsMap
export interface IeatingHabitsMap {
    [key: string]: string;
}

export const getImageOfIndex = (index: number) => {
    return Object.values(eatingHabitsMap)[index];
}
