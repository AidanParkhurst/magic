import { mount } from 'svelte';
import App from './App.svelte';

// Handle GitHub Pages 404 redirect for SPA routing
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
	history.replaceState(null, null, redirect);
}

const app = mount(App, {
	target: document.getElementById('app')
});

export default app;

