import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toolbar from "./components/Toolbar";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  const Main = styled.main`
    background-color: #02040e;
    color: white;
    min-height: 100vh;
  `;

  return (
    <Main>
      <QueryClientProvider client={queryClient}>
        <Toolbar title="Rick and morty" />
        <Characters />
      </QueryClientProvider>
    </Main>
  );
}

export default App;
