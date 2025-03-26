<img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp" width="70">
<img src="https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-angular-language-javascript-static-type-coding-lang-pack-logos-icons-7577992.png" width="70" align=right>

## React Mower

#### `<Website docs/>` https://react-mower.vercel.app/

A powerful React package for protecting your web applications from unwanted developer tools access and cursor-based interactions.

---

### Features

1. 🛡️ Block Developer Tools access
2. 🖱️ Cursor protection
3. 📸 Block screenshot
3. ⚡ Lightweight and easy to use
4. 🔳 Github Star Button Count
5. 🔒 Multiple protection layers

---

### Installation
```
npm install react-mower
```

##### This package requires react-toastify as a peer dependency, and you only need to install react-mower

---

## Usage
#### Basic Setup

#### Loading in the `main.tsx` component
##### `DevTools Blocker Only` using `main.tsx`
```tsx
import { DevToolsBlocker } from 'react-mower';

    <DevToolsBlocker>
      <App />
    </DevToolsBlocker>
);
```
`Custom Style Toast`
```tsx
import { DevToolsBlocker } from 'react-mower';

...

<DevToolsBlocker
  toastOptions={{
    position: "bottom-right",
    autoClose: 3000,
    closeOnClick: false,
    pauseOnHover: true,
    color: "#ff9800"
  }}
  >
  <App />
</DevToolsBlocker>
```
#### Using Individual Components
`Cursor Protection Only`
```tsx
import { CursorProtect } from 'react-mower';

function App() {
  return (
    <CursorProtect message='❌ Screen Blocked'>
      <YourApp />
    </CursorProtect>
  );
}
```
#### `message` With the message attribute, you can give your own arbitrary name when the screen block is on

---

### Using for Code Example

| Tablets                  | Import                | Props                      |
|--------------------------|-----------------------|----------------------------|
| Cursor Protect           | `<CursorProtect />`   | {message}                  | 
| Github Star Button Count | `<GitHubStarCount />` | {githubStar}, username/repo |
| Dev Tools Blocker        | `<DevToolsBlocker  />`| soon                       |


---

### Components
### DevToolsBlocker
Prevents access to browser developer tools through:

F12 key blocking
Ctrl+Shift+I blocking
Right-click context menu blocking
DevTools window size detection

<!-- ### CursorProtect
Provides cursor-based protection:

Blocks Window+g key combination
Shows protection screen when mouse leaves window
Automatically hides protection screen when mouse returns -->

### Security Features

#### DevTools Protection:
Blocks common DevTools shortcuts
Prevents right-click context menu
Detects DevTools through window size changes
Shows warning toast messages


#### Cursor Protection:
Monitors mouse position
Blocks specific keyboard shortcuts
Shows full-screen protection overlay
Prevents unauthorized interactions



### Browser Compatibility

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Opera (latest)

---

### Contributing
##### Contributions are welcome! Please feel free to submit a Pull Request.

##### Fork the repository
##### Create your feature branch (git checkout -b feature/AmazingFeature)
##### Commit your changes (git commit -m 'Add some AmazingFeature')
##### Push to the branch (git push origin feature/AmazingFeature)
##### Open a Pull Request

---

<!-- ### License
MIT © [Jasur Haydarov]
Author
Jasur Haydarov

GitHub: @jasurhaydarovcode
Website: www.jasurhaydarovcode.uz -->

---

### Support
If you have any questions or need help integrating the package, please open an issue in the GitHub repository.
