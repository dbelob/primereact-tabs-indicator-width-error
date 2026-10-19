import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'delay-fonts',
            configureServer(server) {
                // Inject middleware directly to execute it first, before Vite's built-in static file plugins
                server.middlewares.use((req, _res, next) => {
                    // Check if the requested URL contains a font file extension
                    if (req.url && /\.(woff2|woff|ttf|otf)/i.test(req.url)) {

                        // This log will appear in your IDE/OS Terminal where Vite is running, not in the browser console
                        console.log(`\x1b[33m[Vite Delay Plugin] Slowing down font loading: ${req.url}\x1b[0m`);

                        // Set the artificial delay in milliseconds (e.g., 5000ms = 5 seconds)
                        setTimeout(() => {
                            next();
                        }, 5000);

                    } else {
                        next();
                    }
                });
            },
        }
    ]
})
