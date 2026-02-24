// File: exercise3.js
const filterBar = document.querySelector('#filter-bar');
const cards = document.querySelectorAll('.card');
const filterBtns = document.querySelectorAll('.filter-btn');

// Error checking for selectors
if (!filterBar) {
    console.error("Element with id 'filter-bar' not found.");
} else if (!cards) {
    console.error("Element with class '.card' not found.");
} else {
    filterBar.addEventListener('click', function(event) {
        // 1. Guard: if event.target does not match '.filter-btn', return
        if(!event.target.matches(".filter-btn")) {return;}

        // 2. Update active class on all buttons
        filterBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        event.target.classList.add("active");

        // 3. Read the filter value from event.target.dataset.filter
        const filter = event.target.dataset.filter;

        // 4. Loop through cards
        cards.forEach(card => {
            // - If filter === 'all': remove .hidden from every card
            // - Otherwise: compare card.dataset.category to filter
            const shouldHide = filter !== 'all' && card.dataset.category !== filter;
            // add .hidden if no match, remove .hidden if match
            card.classList.toggle('hidden', shouldHide);
        })
        
    });
}