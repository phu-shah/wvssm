    new TomSelect("#jobTitle", {
      create: true,
      maxItems: 1, // ensures only one selection
      sortField: false,
      options: [
        { value: "EN", text: "EN - Enrolled Nurse" },
        { value: "RN", text: "RN - Registered Nurse" },
        { value: "SRN", text: "SRN - Senior Registered Nurse" },
        { value: "CN", text: "CN - Clinical Nurse" }
      ],
      placeholder: "e.g. RN, CN, or type your own..."
    });
