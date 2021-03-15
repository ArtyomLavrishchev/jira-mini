import Table from "../components/table/table";
import styles from "./app.module.scss";
import SideMenu from "../components/side-menu/side-menu";
import Header from "../components/header/header";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import PageHeader from "../components/page-header/page-header";
import {Message} from "@material-ui/icons";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6fffff",
            light: "#007bff"
        }
    }
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SideMenu/>
            <div className={styles.appMain}>
                <Header/>
                <PageHeader
                icon={<Message/>}
                title={"Page header"}
                subTitle={"Page description"}
                />
            </div>
            <CssBaseline/>

            {/*<Table/>*/}
        </ThemeProvider>
    );
};

export default App;