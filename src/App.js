import { ColorModeContext,useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

// components
import TopBar from "./scenes/global/TopBar";



function App() {

  const [ theme, colorMode ] = useMode();

  return ( 
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />


    <div className="app"> 

    {/* Main content */}
    <main className="content">
    <TopBar />


    </main>

    {/* End main content */}
    
    </div>
    </ThemeProvider>
    
    </ColorModeContext.Provider>
  );
}

export default App;
