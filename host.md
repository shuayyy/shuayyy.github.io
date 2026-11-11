# Local Website Preview

This portfolio is a static website. It does not need React, npm, Vite, or a build step.

## Option 1: Python Server

From the repo root, run:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500/
```

To stop the server, press `Ctrl+C` in the terminal.

## Option 2: VS Code Extension

Install one of these VS Code extensions:

- Live Server by Ritwick Dey
- Live Preview by Microsoft

For Live Server:

1. Open this folder in VS Code.
2. Open `index.html`.
3. Click `Go Live` in the bottom-right status bar.
4. If `Go Live` is missing, reload VS Code or use the Python server option above.

The Python server option should always work for this website.
