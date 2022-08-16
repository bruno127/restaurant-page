function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 036 324 422'

  const address = document.createElement('p')
  address.textContent = '🏠 Stjepana Radića 21, Mostar 88000, Bosna i Hercegovina'

  const workingHours = document.createElement('p')
  workingHours.textContent = '🕒 Radno vrijeme: 07:00 - 23:00'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = 'images/restaurant-location.png'
  restaurantLocation.alt = 'Roma restaurant location'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(workingHours)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact
