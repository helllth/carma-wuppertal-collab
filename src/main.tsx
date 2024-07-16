import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Routes,
  Route,
  useSearchParams,
} from 'react-router-dom';
import TopicMapContextProvider from 'react-cismap/contexts/TopicMapContextProvider';

import Content from './content';
import Flooding from './flooding/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const originalWarn = console.warn.bind(console);
const originalError = console.error.bind(console);
console.warn = (message, ...args) => {
  if (
    message?.includes &&
    !message.includes('ReactDOM.render is no longer supported in React 18')
  ) {
    originalWarn(message, ...args);
  }
};
console.error = (message, ...args) => {
  if (
    message?.includes &&
    !message.includes('ReactDOM.render is no longer supported in React 18')
  ) {
    originalError(message, ...args);
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <TopicMapContextProvider appKey="ais-generix-texts-tester">
      <Router>
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/flooding" element={<Flooding />}></Route>
          <Route path="/baederkarte" element={<Content />}></Route>
        </Routes>
      </Router>
    </TopicMapContextProvider>
  </StrictMode>
);
