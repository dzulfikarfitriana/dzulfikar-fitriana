<template>
  <div class="">
    <h2>Repo List</h2>
    <ul>
      <li v-for="(repo, index) in repos" :key="index">{{ repo.full_name }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      repos: []
    }
  },
  created(){
    this.getRepos()
  },
  methods: {
    getRepos(){
      fetch('https://api.github.com/users/nuabdi310/repos')
      .then((response) => response.json())
      .then((res) => {
        console.log(res)
        this.repos = res
      });

    }
  }
}
</script>

<style>

</style>
