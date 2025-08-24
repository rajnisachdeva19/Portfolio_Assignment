// Handle contact form submission
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  // Placeholder until Supabase is integrated
  alert("Thank you, " + name + "! Your message has been submitted. (Next step: Supabase integration)");
  
  // Reset form
  document.getElementById("contactForm").reset();
});