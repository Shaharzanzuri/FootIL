import { formatDate } from '../handlers/formatDate.js';

function renderReservations(reservations) {
  const username = JSON.parse(localStorage.getItem('user')).user.name;
  const container = document.getElementById('container');
  container.innerHTML = '';

  $('#user-res').text(`${username} Reservations`);
  reservations.forEach((reservation, index) => {
    const products = reservation.products;
    const formatted = formatDate(reservation.dateOfReservation);
    const productRows = products
      .map(product => {
        return `<div>${product.name}</div>`;
      })
      .join('');

    const row = `
    <tr>
      <td>${index + 1}</td>
      <td><div>${formatted.formattedDate}</div><div>${
      formatted.formattedTime
    }</div></td>
      <td class="w-50"><div>Number of Products: ${
        products.length
      }</div>${productRows}</td>
    </tr>
    `;
    container.innerHTML += row;
  });
}

export { renderReservations };
