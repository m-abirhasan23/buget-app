export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}


const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}


// create budget 
export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,

        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }

    const existingBudget = fetchData("budgets") ?? []
    return localStorage.setItem("budgets",
        JSON.stringify([...existingBudget, newItem])
    )
}
// create expense 
export const createExpense = ({ name, amount,budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId:budgetId
    }

    const existingExpenses = fetchData("expenses") ?? []
    return localStorage.setItem("expenses",
        JSON.stringify([...existingExpenses, newItem])
    )
}

// delete item 

export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}


// total spend by budgets 
export const calculatedSpentByBudget=(budgetId)=>{
    const expenses= fetchData("expenses")?? []

    const budgetSpent= expenses.reduce((acc,expense)=>{
if (expense.budgetId!==budgetId) return acc

return acc += expense.amount
    },0)

   
    return budgetSpent
}

//FORMATTING 
    export const formatPercentage=(amount)=>{
        return amount.toLocaleString(undefined,{
            style:"percent",
            minimumFractionDigits:0
        })
    }
    export const formatCurrency=(amount)=>{
        return amount.toLocaleString(undefined,{
            style:"currency",
            currency:"USD"
        })
    }

    export const formatDate=(epoch)=> new Date(epoch).toLocaleDateString()