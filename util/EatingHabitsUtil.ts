export const eatingHabitsMap: IeatingHabitsMap = {
    'Vegan': 'leaf', //0
    'Contains frozen ingredients': 'frozen', //1
    'Celery and products thereof': 'celery', //2
    'Milk and products thereof': 'milk', //3
    'Sulphur dioxide and sulphites > 10mg/l': 'wine', //4
    'Fish and products thereof': 'fish', //5
    'Eggs and products thereof': 'egg', //6
    'Pork and products thereof': 'pig', //7
    'Soybeans and products thereof': 'soy_beans', //8
    'Cereals containing gluten': 'wheat',   //9
    'Sesame seeds and products thereof': 'sesame', //10
    'Contains nuts': 'cashew_nut' //11
}

//Create interface for eatingHabitsMap
export interface IeatingHabitsMap {
    [key: string]: string;
}

export const getImageOfIndex = (index: number) => {
    return Object.values(eatingHabitsMap)[index];
}
