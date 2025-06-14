document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const guestList = document.getElementById('guest-list');
  let guestCount = 0;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = input.value.trim();
    if (!name) return;

    if (guestCount >= 10) {
      alert("Guest limit reached (10 guests max)");
      return;
    }

    addGuest(name);
    input.value = '';
  });

  function addGuest(name) {
    guestCount++;

    const li = document.createElement('li');
    li.textContent = name;

    // Toggle RSVP
    const rsvpBtn = document.createElement('button');
    rsvpBtn.textContent = 'Toggle RSVP';
    rsvpBtn.addEventListener('click', () => {
      li.classList.toggle('attending');
      li.classList.toggle('not-attending');
      li.dataset.status = li.classList.contains('attending') ? 'Attending' : 'Not Attending';
    });

    // Remove
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      li.remove();
      guestCount--;
    });

    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
    li.classList.add('not-attending');
    guestList.appendChild(li);
  }
});
