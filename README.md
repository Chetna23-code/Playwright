# JavaScript & Playwright Learning Repository

A personal learning repository covering JavaScript fundamentals, identifier rules, naming conventions, comments, and helpful VS Code keyboard shortcut references.

---

## Repository Structure

```
.
├── javascript_identifier_rules.js          # Demo of JavaScript identifier rules
└── Playwright2x/
    ├── Chapter_01_Basics/                  # JavaScript basics
    │   ├── 01_Basics.js
    │   ├── 02_JS.js
    │   ├── 03_Javascript_Verify_Setup.js
    │   └── 04_HotCode.js
    ├── Chapter_02_Javascript_Concepts/     # Core JS concepts
    │   └── 05_JS_Basics.js
    ├── Chapter_03_Idenitifer_Literals/     # Identifiers & naming
    │   ├── 06_Identifier_Rules.js
    │   ├── 07_Identifier_Part2.js
    │   └── 08_Comments.js
    └── Chapter_03_Identifier_Literals/     # VS Code shortcuts
        ├── VS_Code_keyborad_ShortCut_mac.md
        └── VS_Code_keyborad_ShortCut_windows.md
```

---

## Topics Covered

| File / Folder | Topic |
|---------------|-------|
| `Chapter_01_Basics/` | Introduction to JavaScript: `console.log`, variables, loops, functions |
| `Chapter_02_Javascript_Concepts/` | Variable declaration with `var` and re-assignment |
| `06_Identifier_Rules.js` | JavaScript identifier naming rules |
| `07_Identifier_Part2.js` | Naming conventions: camelCase, snake_case, PascalCase, UPPER_SNAKE_CASE, Hungarian notation |
| `08_Comments.js` | Single-line and multi-line comments in JavaScript |
| `VS_Code_keyborad_ShortCut_*.md` | Default VS Code keyboard shortcuts for macOS and Windows |
| `javascript_identifier_rules.js` | Runnable demo illustrating all 5 identifier rules with examples |

---

## How to Run

Make sure [Node.js](https://nodejs.org/) is installed, then execute any `.js` file from the terminal:

```bash
node javascript_identifier_rules.js
```

Or navigate into a chapter folder:

```bash
cd Playwright2x/Chapter_01_Basics
node 01_Basics.js
```

---

## JavaScript Identifier Rules (Quick Reference)

1. Can contain letters, digits, underscores (`_`), and dollar signs (`$`).
2. Must begin with a letter, underscore, or dollar sign.
3. **Cannot** begin with a digit.
4. **Cannot** be a reserved keyword (`var`, `let`, `function`, `class`, `return`, etc.).
5. Are **case-sensitive** (`myVar`, `MyVar`, and `MYVAR` are three different identifiers).

---

## Naming Conventions

| Convention | Example | Use Case |
|------------|---------|----------|
| camelCase | `firstName` | Variables, functions |
| snake_case | `first_name` | Some variable styles |
| PascalCase | `FirstName` | Classes, constructors |
| UPPER_SNAKE_CASE | `FIRST_NAME` | Constants |
| Hungarian notation | `strFirstName` | Type-prefixed variables |

---

## VS Code Shortcuts

Quick-reference markdown files are included for:

- **macOS** → `VS_Code_keyborad_ShortCut_mac.md`
- **Windows** → `VS_Code_keyborad_ShortCut_windows.md`

Categories covered: General, Basic Editing, Navigation, Search/Replace, Multi-cursor, Editor Management, File Management, Display, Debug, and Integrated Terminal.

---

## License

This repository is for educational and personal learning purposes.
