const options = {wekday: 'long', day: 'numeric' , month: 'long', year: 'numeric'};
document.getElementBy('currentdate').textContent = new Date().toLocaleDateString('en-us', option);