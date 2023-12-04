import type { Recipe } from "@/interfaces/IDrink"

const createIngredientStructure = (data: any, searchedIngridientKey: string, searchedMeasureKey: string): Recipe[] => {
    const foundedIngridientKeys: string[] = Object.keys(data).filter(item => item.indexOf(searchedIngridientKey) !== -1)
    // const map = new Map<[key: string], string>()
    const recipes: Recipe[] = []

    foundedIngridientKeys.forEach((foundedIngridientKey: string) => {
        const measureKey: string = searchedMeasureKey + foundedIngridientKey.substring(searchedIngridientKey.length)

        if (foundedIngridientKey in data && measureKey in data) {
            if (data[foundedIngridientKey] !== null && data[measureKey] !== null) {
                const recipe: Recipe = {
                    ingredient: data[foundedIngridientKey],
                    measure: data[measureKey]
                }

                recipes.push(recipe)
            }

            // if (data[foundedIngridientKey] !== null && data[measureKey] !== null)
            // map.set(data[foundedIngridientKey], data[measureKey])
        }
    })

    return recipes
}

export { createIngredientStructure }