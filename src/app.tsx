import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {onMount, Suspense} from "solid-js";
import "./app.css";
import {ThemeProvider} from "./contexts/theme-context";
import {VolumeProvider} from "./contexts/volume-context";
import {MetaProvider} from "@solidjs/meta";
import { initFlowbite } from 'flowbite';


export default function App() {

    onMount(() => {
        initFlowbite();
    });

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
