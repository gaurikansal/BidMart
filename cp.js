// Sample auction items data
const items = [
    { id: 1, name: "Item 1", currentBid: 10 },
    { id: 2, name: "Item 2", currentBid: 20 },
    { id: 3, name: "Item 3", currentBid: 15 },
    { id: 4, name: "Item 4", currentBid: 34 }
];

// Function to display auction items
function displayItems() {
    const itemsContainer = document.getElementById('auction-items');
    itemsContainer.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Current Bid: $${item.currentBid}</p>
            <button onclick="showBidForm(${item.id})">Place Bid</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Function to display bid form for a specific item
function showBidForm(itemId) {
    const bidForm = document.getElementById('bid-form');
    bidForm.style.display = 'block';
    const bidAmountInput = document.getElementById('bid-amount');
    bidAmountInput.dataset.itemId = itemId;
    document.getElementById('message').textContent = '';
}

// Function to place a bid
function placeBid() {
    const bidAmount = parseFloat(document.getElementById('bid-amount').value);
    const itemId = parseInt(document.getElementById('bid-amount').dataset.itemId);
    const item = items.find(item => item.id === itemId);
    if (bidAmount <= item.currentBid) {
        document.getElementById('message').textContent = 'Bid amount must be higher than current bid.';
    } else {
        item.currentBid = bidAmount;
        document.getElementById('message').textContent = 'Bid placed successfully.';
        displayItems();
    }
}

// Initial setup
displayItems();
