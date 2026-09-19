import { useEffect, useRef, useState } from "react";
import { personal } from "../data/profile";

const commands = [
  { command: "help", description: "Show available commands" },
  { command: "about", description: "Open the about section" },
  { command: "projects", description: "Jump to projects" },
  { command: "skills", description: "Open the skills section" },
  { command: "contact", description: "Jump to contact" },
  { command: "Ask Manma", description: "Open the AI assistant" },
  { command: "theme", description: "Toggle light/dark mode" },
];
const initial = [
  { type: "out", text: "MayankOS v1.0 — portfolio shell initialized." },
  { type: "out", text: 'Type "help" to explore the system.' },
];

export function Terminal({ onCommand }) {
  const [lines, setLines] = useState(initial),
    [value, setValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current?.focus(), []);
  const run = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    let output = "";
    if (command === "help")
      output = commands
        .map((item) => `${item.command.padEnd(10)} ${item.description}`)
        .join("\n");
    else if (command === "whoami" || command === "about")
      output = `${personal.name} — ${personal.role}`;
    else if (command === "theme") output = "Theme command accepted.";
    else if (["projects", "skills", "contact"].includes(command))
      output = `Opening ${command}…`;
    else output = `command not found: ${command}`;
    setLines((current) => [
      ...current,
      { type: "in", text: `$ ${raw}` },
      { type: "out", text: output },
    ]);
    onCommand(command);
    setValue("");
  };
  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-bar">
        <span />
        <span />
        <span />
        <b>terminal — mayank</b>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <div
            key={index}
            className={line.type === "in" ? "terminal-in" : "terminal-out"}
          >
            {line.text.split("\n").map((part, lineIndex) => (
              <div key={lineIndex}>{part || " "}</div>
            ))}
          </div>
        ))}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            run(value);
          }}
          className="terminal-form"
        >
          <span>$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-label="Terminal command"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
