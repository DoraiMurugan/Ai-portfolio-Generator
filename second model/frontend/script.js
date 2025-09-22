const input = document.getElementById("input");
const sendBtn = document.getElementById("send");
const msgs = document.getElementById("msgs");
const suggestionsBox = document.getElementById("suggestions");

// Handle send button click
sendBtn.addEventListener("click", sendMessage);

// Handle Enter key press
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // prevent form submit/reload
    sendMessage();
  }
});

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  // Show user message
  addMessage("user", message);

  try {
    // Send message to backend
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    // If reply contains HTML (portfolio), show as code block
    if (/<!DOCTYPE html>/i.test(data.reply)) {
      addMessage("bot", `<pre><code>${escapeHtml(data.reply)}</code></pre>`);
    } else {
      addMessage("bot", data.reply);
    }

    // Show suggestions
    showSuggestions(data.suggestions || []);
  } catch (err) {
    addMessage("bot", "⚠️ Error connecting to server.");
  }

  input.value = "";
}

// Add message to chat window
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.innerHTML = text; // already escaped if needed
  msgs.appendChild(msg);
  msgs.scrollTop = msgs.scrollHeight; // auto scroll
}

// Escape HTML so it shows as text, not rendered
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Show clickable suggestions
function showSuggestions(suggestions) {
  suggestionsBox.innerHTML = "";
  suggestions.forEach((s) => {
    const btn = document.createElement("button");
    btn.className = "suggestion-btn";
    btn.innerText = s;
    btn.onclick = () => {
      input.value = s;
      sendMessage();
    };
    suggestionsBox.appendChild(btn);
  });
}

// Initial greeting
addMessage(
  "bot",
  "Hi! I can pull your portfolio data. Try <em>List projects</em> or <em>Generate portfolio HTML</em>."
);
showSuggestions([
  "Show profile summary",
  "List projects",
  "Share skills",
  "Generate portfolio HTML",
  "Filter projects by React",
  "Contact details"
]);
