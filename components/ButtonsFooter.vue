<template>
  <div class="main_content">
    <div class="buttons_footer my-auto row d-flex justify-content-center">
      <div class="my-auto">
        <b-row>
          <b-button class="btn-option">
            <img src="img/icon-list.svg" alt="list" />
            All
          </b-button>
          <b-button class="btn-option">
            <img src="img/icon-favorite-white.svg" alt="favorite-white" />
            Favorites
          </b-button>
        </b-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main_content {
  .buttons_footer {
    position: fixed;
    bottom: 0%;
    width: 101%;
    z-index: -1;
    background: #ffffff;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    height: 80px;
    .btn-option {
      @include font-bold();
      @include btn-pokedex();
      background-color: #bfbfbf;
      border: none;
      margin: 0 10px;
      width: 275px;
      @media (max-width: 600px) {
        width: 150px;
        margin: 0 7.5px;
      }
      &.checked {
        @include btn-pokedex();
      }
    }
  }
}
</style>
