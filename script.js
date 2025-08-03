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
        const response = await fetch('YOUR_SCRIPT_URL', {
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
