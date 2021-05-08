<template>
  <b-container class="page_search">
    <b-row>
      <b-col cols="12 d-flex justify-content-center">
        <b-input-group class="input_search">
          <template #prepend>
            <b-input-group-text
              ><img src="img/icon-search.svg" alt="search"
            /></b-input-group-text>
          </template>
          <b-form-input id="input-search" placeholder="Buscar"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss">
.page_search {
  .input_search {
    margin-top: 35px;
    max-width: 570px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    border: none;
    .input-group-text {
      background: #ffffff;
      border: none;
    }
    .form-control {
      background: #ffffff;
      border: none;
    }
  }
}
</style>
