import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./providers/Providers";

import "@/shared/styles/reset.css";
import "@/shared/styles/global.css";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
	<StrictMode>
		<Providers />
	</StrictMode>,
);
