function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  function updateDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.getElementById('date').textContent = dateString;
  }
  
  updateClock();
  updateDate();
  setInterval(updateClock, 10);
  