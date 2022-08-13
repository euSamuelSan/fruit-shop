import apple from '../assets/images/apple.png'
import banana from '../assets/images/banana.png'
import mango from '../assets/images/mango.png'
import pear from '../assets/images/pear.png'
import pineapple from '../assets/images/pineapple.png'

export type Fruit = {
    id: string
    name: string
    price: number
    image: string
    measurementUnit: string
}

type GetAllResponse = {
    data: Fruit[]
}

type GetResponse = {
    data: Fruit
}

export const getAllFruits = async (): Promise<GetAllResponse | void> => {
    try {
        return Promise.resolve({ data: fruitsMock })
    } catch (err) {
        console.error(err)
    }
}

export const getFruitById = async (id: string): Promise<GetResponse | void> => {
    try {
        const item = fruitsMock.find(fruit => fruit.id === id)

        return item
            ? Promise.resolve({ data: item })
            : Promise.reject('ID informado não encontrado.')
    } catch (err) {
        console.error(err)
    }
}

export const fruitsMock: Fruit[] = [
    {
        id: '1',
        name: 'Maçã',
        price: 5.56,
        image: apple,
        measurementUnit: 'KG',
    },
    {
        id: '2',
        name: 'Pêra',
        price: 7.22,
        image: pear,
        measurementUnit: 'KG',
    },
    {
        id: '3',
        name: 'Banana',
        price: 2.5,
        image: banana,
        measurementUnit: 'KG',
    },
    {
        id: '4',
        name: 'Abacaxi',
        price: 6.65,
        image: pineapple,
        measurementUnit: 'Un',
    },
    {
        id: '5',
        name: 'Manga',
        price: 4.44,
        image: mango,
        measurementUnit: 'KG',
    },
]
