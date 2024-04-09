
document.getElementById('details').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const phoneNo = document.getElementById('phone').value;

    const formData = {
        name,
        phoneNo
    };

    console.log(formData)

    try {
        const response = await fetch('http://localhost:4324/api/regUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        console.log('Success:', data);
        } catch (error) {
        console.error('Error:', error);
    }
});
