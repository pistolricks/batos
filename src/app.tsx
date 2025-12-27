import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {onMount, Suspense} from "solid-js";
import "./app.css";
import {ThemeProvider} from "./contexts/theme-context";
import {VolumeProvider} from "./contexts/volume-context";
import {MetaProvider} from "@solidjs/meta";



export default function App() {

    return (
        <Router
            root={props => (
                <MetaProvider>
                    <ThemeProvider>
                        <VolumeProvider>
                            <Suspense>{props.children}</Suspense>
                        </VolumeProvider>
                    </ThemeProvider>
                </MetaProvider>
            )}
        >
            <FileRoutes/>
        </Router>
    );
}
