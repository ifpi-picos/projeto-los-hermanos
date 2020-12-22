<template>
  <div>
    <b-container fluid class="pr-0 pl-0">
      <Header></Header>
    </b-container>

    <b-container>
      <b-row>
        <b-card
          title="Ads auxilio1"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            O auxlio da turma de ads será depositado logo mais.
          </b-card-text>

          <b-button href="#" variant="primary">saiba mais</b-button>
        </b-card>

        <b-card
          title="Ads auxilio2"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="ml-right"
        >
          <b-card-text>
            O auxlio da turma de ads será depositado logo mais.
          </b-card-text>

          <b-button href="#" variant="primary">saiba mais</b-button>
        </b-card>

        <b-card
          title="Ads auxilio3"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="ml-auto"
        >
          <b-card-text>
            O auxlio da turma de ads será depositado logo mais.
          </b-card-text>

          <b-button href="#" variant="primary">saiba mais</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
