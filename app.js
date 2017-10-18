const vm = new Vue({
  el: '#app',
  data: {
    results: ""
  },
  mounted() {
    axios.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
    .then(response => {this.results = response.data.content})
  }
});
  