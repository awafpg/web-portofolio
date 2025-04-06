function sendEmail() {
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    if (!subject || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    const mailtoLink = `mailto:awafpg@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  
    window.location.href = mailtoLink;
  }
  