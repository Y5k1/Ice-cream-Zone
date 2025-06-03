document.getElementById('submitBtn').addEventListener('click', () => {
    // Fetching input values
    const address = document.querySelector('input[name="address"]').value.trim(); // Use 'address' consistently
    const icecreamName = document.querySelector('input[name="icecream name"]').value.trim();
    const toppings = document.getElementById('toppings').value;
    const phone = document.querySelector('input[name="phone"]').value.trim();

    // Validation
    if (!icecreamName || !address || toppings === 'select' || !phone) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // Display the order details in the Yorder section
    const yOrderDiv = document.querySelector('.Yorder');
    yOrderDiv.innerHTML = `
      <table>
        <tr>
          <th colspan="2">Your Order</th>
        </tr>
        <tr>
          <td><strong>Icecream Name:</strong></td>
          <td>${icecreamName}</td>
        </tr>
        <tr>
          <td><strong>Toppings:</strong></td>
          <td>${toppings}</td>
        </tr>
        <tr>
          <td><strong>Address:</strong></td>
          <td>${address}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>${phone}</td>
        </tr>
      </table>
      <p>Thank you for your order!</p>
    `;
    alert('Order submitted successfully!');
});
