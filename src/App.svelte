<script>
  import { Router, Route } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Media from './pages/Media.svelte';
  import Bookings from './pages/Bookings.svelte';

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/media">
      <Media />
    </Route>
    <Route path="/bookings">
      <Bookings />
    </Route>
  </div>
</Router>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
