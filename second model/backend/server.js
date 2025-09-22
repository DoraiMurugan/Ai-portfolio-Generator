

const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// API endpoint for chat
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  let reply = "";
  let suggestions = [];

   if (/hi/i.test(message)) {
    reply = "Hi 👋 I am an AI Portfolio Generator. How can I help you?";
    suggestions = ["Show profile summary", "List projects", "Generate portfolio HTML"];
  } else if (/how can i create portfolio/i.test(message)) {
    reply = "I can help you build a portfolio dynamically!";
    suggestions = [
      "Show profile summary",
      "List projects",
      "Share skills",
      "Generate portfolio HTML",
      "Filter projects by React",
      "Contact details"
    ];
  } 
  else if (/give me a sample portfolio html/i.test(message)) {
    reply = "Sure! Here is a sample portfolio HTML:";
    reply = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>    // give a title
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    header { background: #f6efefff; color: #fff; padding: 1rem; text-align: center; }
    section { padding: 2rem; }
    .projects { display: flex; gap: 1rem; flex-wrap: wrap; }
    .card { background: #f4f4f4; padding: 1rem; border-radius: 8px; flex: 1; min-width: 200px; }
  </style>
</head>
<body>
  <header>
    <h1>My Portfolio</h1>     // give a heading
    <p>Full Stack Developer | Node.js | React | MongoDB</p>     // give a subheading
  </header>

  <section>
    <h2>About Me</h2>
    <p>This is a full-stack portfolio generated dynamically by the chat system.</p>     // give a description of yourself
  </section>

  <section>
    <h2>Projects</h2>
    <div class="projects">
      <div class="card">
        <h3>Portfolio Generator</h3>      // give a project name
        <p>A tool to auto-generate portfolios with Node.js & Express.</p>      // give a brief description of the project

      
      </div>
      <div class="card">
        <h3>ChatBot AI</h3>      // give a project name
        <p>An AI-powered chatbot with NLP capabilities.</p>     // give a brief description of the project
      </div>
    </div>
  </section>
</body>
</html>
`;
    suggestions = ["Show skills", "Show contact details"];
  }

  if (/project/i.test(message)) {
    reply = "Here are some featured projects: Portfolio Generator, ChatBot AI, ...";
    suggestions = ["Show profile summary", "Share skills", "Contact details"];
  } else if (/skills?/i.test(message)) {
    reply = "My skills are Node.js, React, MongoDB, Express, ...";
    suggestions = ["Show projects", "Contact details"];
  } else if (/profile/i.test(message)) {
    reply = "This is a full-stack portfolio generator built with Node.js and Express.";
    suggestions = ["List projects", "Share skills"];
  } else if (/hi/i.test(message)) {
    reply = "Hi 👋 I am an AI Portfolio Generator. How can I help you?";
    suggestions = ["Show profile summary", "List projects", "Generate portfolio HTML"];
  } else if (/how can i create portfolio/i.test(message)) {
    reply = "I can help you build a portfolio dynamically!";
    suggestions = [
      "Show profile summary",
      "List projects",
      "Share skills",
      "Generate portfolio HTML",
      "Filter projects by React",
      "Contact details"
    ];
  } else if (/give me the full html for portfolio/i.test(message)) {
    reply = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Brief Portfolio</title>
  <style>
    :root{--accent:#2b7a78;--muted:#666}
    *{box-sizing:border-box}
    body{font-family:Inter,system-ui,Segoe UI,Arial;line-height:1.5;margin:0;color:#111}
    .container{max-width:1000px;margin:32px auto;padding:20px}
    header{display:flex;gap:20px;align-items:center}
    .avatar{width:120px;height:120px;border-radius:12px;object-fit:cover;flex-shrink:0}
    h1{margin:0;font-size:1.6rem}
    p.lead{margin:6px 0;color:var(--muted)}
    .grid{display:grid;grid-template-columns:1fr 320px;gap:24px;margin-top:20px}
    .card{background:#fff;border:1px solid #eee;padding:16px;border-radius:12px;box-shadow:0 6px 18px rgba(15,15,15,0.03)}
    .skills li{margin-bottom:10px;list-style:none}
    .bar{height:10px;background:#eee;border-radius:999px;overflow:hidden}
    .bar > i{display:block;height:100%;background:var(--accent);border-radius:999px}
    .projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}
    .project{display:block;text-decoration:none;color:inherit}
    .project img{width:100%;height:130px;object-fit:cover;border-radius:8px}
    .project h4{margin:8px 0 4px;font-size:1rem}
    .cert-list{display:flex;flex-direction:column;gap:8px}
    .cert{display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;border:1px dashed #e8e8e8}
    .btn{background:var(--accent);color:white;padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
    footer{margin-top:28px;text-align:center;color:var(--muted);font-size:0.9rem}
    @media (max-width:820px){.grid{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <img class="avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Profile photo">
      <div>
        <h1>Mohamed fizal — Frontend Developer</h1>     // give your name and title
        <p class="lead">I build clean, accessible web interfaces. Currently learning full-stack development and building small projects to improve UX.</p>
        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
          <a class="btn" href="#projects">Projects</a>
          <a class="btn" href="#certificates" style="background:#4a90e2">Certificates</a>
        </div>
      </div>
    </header>

    <div class="grid">
      <main>
        <section id="projects" class="card">      // project section
          <h2 style="margin-top:0">Projects</h2>
          <div class="projects">
            <a class="project" href="#" target="_blank">     // give project link
              <img src="https://via.placeholder.com/600x400.png?text=Project+1" alt="Project 1 screenshot">
              <h4>Project One</h4>
              <div style="color:var(--muted);font-size:0.9rem">A short description of the project and tech used (React, Node).</div>
            </a>

            <a class="project" href="#" target="_blank">     // give project link
              <img src="https://via.placeholder.com/600x400.png?text=Project+2" alt="Project 2 screenshot">
              <h4>Project Two</h4>
              <div style="color:var(--muted);font-size:0.9rem">Design + implementation of a responsive landing page.</div>
            </a>

            <a class="project" href="#" target="_blank">    // add more projects as needed
              <img src="https://via.placeholder.com/600x400.png?text=Project+3" alt="Project 3 screenshot">
              <h4>Project Three</h4>
              <div style="color:var(--muted);font-size:0.9rem">Automated data visualization dashboard using Chart.js.</div>
            </a>
          </div>
        </section>

        <section id="certificates" class="card" style="margin-top:16px">
          <h2 style="margin-top:0">Certificates</h2>
          <div class="cert-list">
            <div class="cert">
              <div>
                <strong>Full-Stack Web Development — Coursera</strong>    // give certificate name and platform
                <div style="color:var(--muted);font-size:0.9rem">Issued: June 2025</div>
              </div>
              <a class="btn" href="#" download>Download</a>
            </div>

            <div class="cert">
              <div>
                <strong>Responsive Web Design — freeCodeCamp</strong>    /// give your certificate name and issuing organization
                <div style="color:var(--muted);font-size:0.9rem">Issued: Feb 2024</div>
              </div>
              <a class="btn" href="#" download>Download</a>
            </div>

          </div>
        </section>
      </main>

      <aside>
        <div class="card">
          <h3 style="margin-top:0">Skills</h3>
          <ul class="skills" style="padding:0;margin:0">    // list your skills and proficiency levels
            <li>
              <div style="display:flex;justify-content:space-between;font-weight:600"><span>HTML/CSS</span><span>90%</span></div>
              <div class="bar" aria-hidden="true"><i style="width:90%"></i></div>
            </li>
            <li>
              <div style="display:flex;justify-content:space-between;font-weight:600"><span>JavaScript</span><span>80%</span></div>
              <div class="bar" aria-hidden="true"><i style="width:80%"></i></div>
            </li>
            <li>
              <div style="display:flex;justify-content:space-between;font-weight:600"><span>React</span><span>75%</span></div>
              <div class="bar" aria-hidden="true"><i style="width:75%"></i></div>
            </li>
            <li>
              <div style="display:flex;justify-content:space-between;font-weight:600"><span>Node.js</span><span>60%</span></div>
              <div class="bar" aria-hidden="true"><i style="width:60%"></i></div>
            </li>
          </ul>
        </div>

        <div class="card" style="margin-top:16px">
          <h3 style="margin-top:0">Contact</h3>   // give your contact details
          <p style="margin:6px 0">Email: <a href="mailto:you@example.com">you@example.com</a></p>
          <p style="margin:6px 0">GitHub: <a href="#">github.com/yourname</a></p>
          <p style="margin:6px 0">LinkedIn: <a href="#">linkedin.com/in/yourname</a></p>
        </div>
      </aside>
    </div>

    <footer>
      © 2025 Mohamed fizal • Built with ❤️ • <a href="#">Download resume</a>   // give a link to download your resume
    </footer>
  </div>
</body>
</html>

    `;
    suggestions = ["Show skills", "Show contact details"];
  } else {
    reply = `You said: ${message}`;
    suggestions = ["List projects", "Generate portfolio HTML"];
  }

  res.json({ reply, suggestions });
});



// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`✅ Server running → http://localhost:${PORT}`);
});
