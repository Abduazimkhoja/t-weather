import { NuqsAdapter } from "nuqs/adapters/react-router/v6";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import RouterProvider from "@/routes/RouterProvider";
import { persistor, store } from "@/store/store";

const Providers = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NuqsAdapter>
					<BrowserRouter>
						<RouterProvider />
					</BrowserRouter>
				</NuqsAdapter>
			</PersistGate>
		</Provider>
	);
};

export default Providers;
