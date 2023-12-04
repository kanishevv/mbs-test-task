import { defineStore } from 'pinia'
import ApiService from '@/services/api'
import { createIngredientStructure } from '@/services/helpers'
import type { IDrink } from '@/interfaces/IDrink'

interface State {
    codes: string[],
    drinks: IDrink[]
}

export const useAppStore = defineStore('app', {
    state: (): State => {
        return {
            codes: ['margarita', 'mojito', 'a1', 'kir'],
            drinks: []
        }
    },
    actions: {
        getCocktailData(code: string): void {

            this.drinks = []

            ApiService.getData(code).then(
                (response) => {
                    response.drinks.forEach((drink: { [key: string]: string } | any) => {
                        this.drinks.push({
                            id: drink.idDrink,
                            name: drink.strDrink,
                            category: drink.strCategory,
                            alcoholic: drink.strAlcoholic,
                            glass: drink.strGlass,
                            instructions: drink.strInstructions,
                            thumbnail: drink.strDrinkThumb,
                            ingredients: createIngredientStructure(drink, 'strIngredient', 'strMeasure')
                        })
                    });
                },
                (error) => console.error(error)
            )
        }
    }
})