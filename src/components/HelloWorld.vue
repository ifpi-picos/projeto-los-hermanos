<template>
  <div class="hello">
    <div>
      <b-button v-if="false">Button</b-button>

      <b-button @click="changeImg(true)" variant="danger">Button</b-button>
      <b-button @click="changeImg(false)" variant="success">Button</b-button>

      <b-button variant="outline-primary">Button</b-button>

      <b-list-group v-for="(people, index) in newArray" :key="index">
        <b-list-group-item>{{ people.nome }}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      status: false,
      newArray: [
        {
          dataAlteracao: "2020-11-03T12:51:17.263Z",
          _id: "5fa1524cf5dbb511596bb1c4",
          nome: "Jesiel",
          idade: 30,
          __v: 0,
        },
        {
          dataAlteracao: "2020-11-03T13:10:08.120Z",
          _id: "5fa156e6264bab001755ab78",
          nome: "Paulinho",
          idade: 25,
          __v: 0,
        },
        {
          dataAlteracao: "2020-11-03T13:10:08.120Z",
          _id: "5fa156f0264bab001755ab79",
          nome: "danone",
          idade: 23,
          __v: 0,
        },
      ],
    };
  },

  methods: {
    changeImg(value) {
      this.$emit("show-img", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
