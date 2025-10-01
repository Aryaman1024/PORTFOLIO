document.getElementById("portfolioForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value.split(",");
  const projects = document.getElementById("projects").value.split(",");
  const resumeFile = document.getElementById("resume").files[0];
  let resumeLink = "";
  if (resumeFile) {
    resumeLink = URL.createObjectURL(resumeFile);
  }
  // Preview (resume link included)
  const previewHTML = `
    <h1>${name}</h1>
    <h2>About Me</h2>
    <p>${about}</p>
    <h2>Skills</h2>
    <ul>${skills.map(s => `<li>${s.trim()}</li>`).join("")}</ul>
    <h2>Projects</h2>
    <ul>${projects.map(p => `<li>${p.trim()}</li>`).join("")}</ul>
    ${resumeLink ? `<a href="${resumeLink}" target="_blank"><button>View Resume</button></a>` : ""}
  `;
  document.getElementById("preview").innerHTML = previewHTML;
  // Final portfolio (resume removed)
  const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${name} - Portfolio</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #a8edea, #fed6e3);
          margin: 0;
          padding: 20px;
        }
        .container {
          background: #ffffff;
          max-width: 400px;
          margin: 20px auto;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        h1 {
          color: #008080;
          border-bottom: 3px solid #008080;
          padding-bottom: 5px;
          font-size: 36px;
        }
        h2 {
          color: #008080;
          border-bottom: 2px solid #008080;
          padding-bottom: 5px;
          margin-top: 20px;
          font-size: 20px;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${name}</h1>
        <h2>About Me</h2>
        <p>${about}</p>
        <h2>Skills</h2>
        <ul>${skills.map(s => `<li>${s.trim()}</li>`).join("")}</ul>
        <h2>Projects</h2>
        <ul>${projects.map(p => `<li>${p.trim()}</li>`).join("")}</ul>
      </div>
    </body>
    </html>
  `;
  const blob = new Blob([portfolioHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "portfolio.html";
  link.click();
});
