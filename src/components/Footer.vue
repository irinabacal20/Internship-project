<template>
  <footer id="footer">
    <div id="footer-content-container">
      <div id="social-media">
        <a href="https://www.facebook.com/bacal.irina" target="_bank">
          <img :src="facebook" alt="Facebook Logo" width="35px" height="35px">
        </a>
        <a href="https://www.instagram.com/irinabacal/" target="_bank">
          <img :src="instagram" alt="Instagram Logo" width="35px" height="35px">
        </a>
        <a href="https://twitter.com/ireneB_Md" target="_bank">
          <img :src="twitter" alt="Twitter Logo" width="35px" height="35px">
        </a>
      </div>
      <div id="footer-text">
        <router-link to="/">Home</router-link>
        <router-link to>Contacts</router-link>
        <router-link to>About</router-link>
      </div>
      <span>&#169; 2020 Bacal Irina</span>
    </div>
  </footer>
</template>

<script>
import facebookLogo from "@/assets/facebook.png";
import instagramLogo from "@/assets/instagram.png";
import twitterLogo from "@/assets/twitter.png";

export default {
  name: "Footer",
  data() {
    return {
      facebook: facebookLogo,
      instagram: instagramLogo,
      twitter: twitterLogo
    };
  }
};
</script>

<style>
#footer {
  background: var(--third-color);
}
#footer-content-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
#footer-content-container>span{
  font-family: var(--general-font);
  font-size: 14px;
  color: var(--first-color);
  text-align: center;
  padding-bottom: 15px;
}
#social-media {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
#social-media >a>img {
  padding: 0 20px;
  filter: drop-shadow(0 0 0.25rem black);
}
#social-media > a>img:hover {
  filter: drop-shadow(0 0 0.25rem var(--second-color));
}
#footer-text>a{
  color: var(--first-color);
  padding-bottom: 20px;
  text-align: center;
  font-family: var(--general-font);
  text-decoration: none;
  padding:10px 40px;
}
#footer-text>a:hover{
  font-size: 15px;
  text-shadow:3px -4px 12px var(--second-color);

}
#footer-text{
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}

@media screen and (max-width: 900px){
  #footer-content-container {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

  #footer-text{
    display: grid;
  }
}

@media screen and (max-width: 480px){
  #social-media{
    display: grid;
  }
  #social-media>a{
    padding-bottom: 8px;
  }
}

</style>


