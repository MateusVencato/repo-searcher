Vue.component('search-repo', {
  data: function () {
    return {
      user: '',
      repo: [],
    }
  },
  methods: {
    async getUserRepo() {
      const url = `https://api.github.com/users/${this.user}/repos`;
      const response = await fetch(url);
      const data = await response.json();

      this.repo = data
    },
  },
  template: ` <div>
  <label>Change the user name</label>
  <input type="text" id="userName" v-model="user">
  <button v-on:click="getUserRepo">Click me</button>
    <ul>
      <li v-for="(item, index) in repo" :key="index"><a :href="item.html_url">{{ item.name }}</a><span> Stars: {{ item.stargazers_count }}</span></li>
    </ul>
  </div>
  `
})
new Vue({
  el: '#app',
});