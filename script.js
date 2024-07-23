document.addEventListener('DOMContentLoaded', () => {
    const itineraryForm = document.getElementById('itinerary-form');
    const itineraryList = document.getElementById('itinerary-list');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const shareForm = document.getElementById('share-form');

    let itineraries = [];
    let expenses = [];

    // Handle itinerary form submission
    itineraryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const activities = document.getElementById('activities').value;

        const itinerary = { destination, startDate, endDate, activities };
        itineraries.push(itinerary);
        displayItineraries();

        itineraryForm.reset();
    });

    // Handle expense form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = document.getElementById('expense-description').value;
        const amount = document.getElementById('expense-amount').value;

        const expense = { description, amount: parseFloat(amount) };
        expenses.push(expense);
        displayExpenses();

        expenseForm.reset();
    });

    // Handle share form submission
    shareForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('friend-email').value;
        alert(`Itinerary shared with ${email}`);
        shareForm.reset();
    });

    // Display itineraries
    function displayItineraries() {
        itineraryList.innerHTML = '';
        itineraries.forEach((itinerary, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${itinerary.destination}</h3>
                <p>From: ${itinerary.startDate} To: ${itinerary.endDate}</p>
                <p>${itinerary.activities}</p>
                <button onclick="removeItinerary(${index})">Remove</button>
            `;
            itineraryList.appendChild(div);
        });
    }

    // Display expenses
    function displayExpenses() {
        expenseList.innerHTML = '';
        let total = 0;
        expenses.forEach((expense, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>${expense.description} - $${expense.amount.toFixed(2)}</p>
                <button onclick="removeExpense(${index})">Remove</button>
            `;
            expenseList.appendChild(div);
            total += expense.amount;
        });
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        expenseList.appendChild(totalDiv);
    }

    // Remove itinerary
    window.removeItinerary = function(index) {
        itineraries.splice(index, 1);
        displayItineraries();
    };

    // Remove expense
    window.removeExpense = function(index) {
        expenses.splice(index, 1);
        displayExpenses();
    };
});
