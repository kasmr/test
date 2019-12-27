const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', async e => {
  e.preventDefault();

  const token = '123456';
  const url = `https://partner/api/admin/addOrder.html?token=${token}`;
  const formData = document.querySelectorAll('input[type="text"]');

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
});
