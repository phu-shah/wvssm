    const form = document.getElementById('userForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        idNumber: form.idNumber.value.trim(),
        jobTitle: form.jobTitle.value.trim()
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbz3sK_gNkUH0xHSk9qF-MCI1ecLQCWt6CFbJ7sQKAzIrO7n_iVP9-rSql9KIrh9FJaU2g/exec', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          form.reset();
          successMsg.classList.remove('d-none');
        } else {
          alert('⚠️ Submission failed. Please try again.');
        }
      } catch (error) {
        alert('❌ Connection error. Check your internet or script URL.');
      }
    });
