// type DrinkIngredient = {
//     [ingredient: string]: [measure: string]
// }

type Recipe = { ingredient: string, measure: string }

interface IDrink {
    id?: string | number
    name: string
    category: string
    alcoholic: string
    glass: string
    instructions: string
    thumbnail?: string
    ingredients: Recipe[]
}

export type { IDrink, Recipe }