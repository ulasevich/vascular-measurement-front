import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    typography: {
        fontFamily: 'Inter, Arial, sans-serif', // typeface-inter
        h1: {
            fontSize: 32,
            fontWeight: 700
        },
        h2: {
            fontSize: 20,
            fontWeight: 700
        },
        h3: {
            fontSize: 16,
            fontWeight: 500
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#4094F7'
        },
        background: {
            default: '#F6F8F9'
        },
        text: {
            primary: '#252C32'
        }
    },
});