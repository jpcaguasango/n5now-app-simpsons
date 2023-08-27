import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toolbar from "./components/Toolbar";
import Characters from "./components/Characters";
import "./language/i18n";
import { StrictMode } from "react";

const queryClient = new QueryClient();

const Main = styled.main`
  background-color: #02040e;
  color: white;
  min-height: 100vh;
`;

function App() {
  return (
    <StrictMode>
      <Main>
        <QueryClientProvider client={queryClient}>
          <Toolbar title="Rick and morty" />
          <Characters />
        </QueryClientProvider>
      </Main>
    </StrictMode>
  );
}

export default App;
