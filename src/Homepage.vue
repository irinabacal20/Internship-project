<template>
  <div id="homepage">
    <div id="hero-section">Hero Section</div>
    <div id="browse-anime">
      <p style="font-weight:bold; font-size:25px;">Looking for more anime?</p>
      <p>Browse the rest of the catalog</p>
      <router-link to="/browse_anime">
        <button>Browse</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage"
};
</script>

<style>
#browse-anime {
  background: var(--first-color);
  box-shadow: var(--box-shadow);
  display: grid;
  grid-template-columns: 1fr;
  color: var(--third-color);
}

#browse-anime > p {
  text-align: center;
  font-family: var(--general-font);
  padding-top: 30px;
}
#browse-anime > a {
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
}

#browse-anime > a > button {
  background-color: var(--second-color);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  padding: 10px;
  box-shadow: var(--box-shadow);
  font-weight: bold;
}

#browse-anime > a > button:hover {
  background-color: var(--button-hover);
  border: var(--button-hover-border);
  cursor: pointer;
}
</style>


