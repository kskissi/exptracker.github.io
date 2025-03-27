const dateInput = document.getElementById('date');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const addExpenseButton = document.getElementById('addExpense');
const expensesList = document.getElementById('expenses');
const totalDisplay = document.getElementById('total');

let expenses = [];

function renderExpenses() {
    expensesList.innerHTML = '';
    let total = 0;
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.date} - ${expense.category} - ${expense.description}</span>
            <span>$${expense.amount.toFixed(2)}</span>
        `;
        expensesList.appendChild(li);
        total += parseFloat(expense.amount);
    });
    totalDisplay.textContent = total.toFixed(2);
}

addExpenseButton.addEventListener('click', () => {
    const date = dateInput.value;
    const category = categoryInput.value;
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value;

    if (date && category && !isNaN(amount) && description) {
        expenses.push({ date, category, amount, description });
        renderExpenses();
        dateInput.value = '';
        amountInput.value = '';
        descriptionInput.value = '';
    }
});

renderExpenses();
