## React Mower
A powerful React package for protecting your web applications from unwanted developer tools access and cursor-based interactions.

---

### Features

1. 🛡️ Block Developer Tools access
2. 🖱️ Cursor protection
3. ⚡ Lightweight and easy to use
4. 🔒 Multiple protection layers

---

### Installation
```
npm install react-mower react-toastify
```

##### This package requires react-toastify as a peer dependency.

---

## Usage
#### Basic Setup

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CursorProtect, DevToolsBlocker } from 'react-mower';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <CursorProtect>
      <DevToolsBlocker>
        <App />
      </DevToolsBlocker>
    </CursorProtect>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      pauseOnHover
      draggable
      limit={1}
    />
  </StrictMode>
);
```

Using Individual Components
DevTools Blocker Only
```tsx
import { DevToolsBlocker } from 'react-mower';

function App() {
  return (
    <DevToolsBlocker>
      <YourApp />
    </DevToolsBlocker>
  );
}
Cursor Protection Only
jsxCopyimport { CursorProtect } from 'react-mower';

function App() {
  return (
    <CursorProtect>
      <YourApp />
    </CursorProtect>
  );
}
```
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