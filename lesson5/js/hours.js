const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('hours').textContent = new Date().toLocaleDateString('en-US', options)

