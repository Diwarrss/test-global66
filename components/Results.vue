<template>
  <b-container class="results">
    <b-row>
      <b-col cols="12" class="not_results text-center">
        <h2>Uh-oh!</h2>
        <p class="m-0">You look lost on your journey!</p>
        <b-link to="/" class="btn btn-danger">Go back home</b-link>
      </b-col>
      <b-col cols="12" class="success_results p-0">
        <b-list-group class="text-center">
          <b-list-group-item button
            >Button item
            <b-button class="add_favorite">
              <img src="img/icon-favorite-gray.svg" alt="add-favorite" />
            </b-button>
          </b-list-group-item>
          <b-list-group-item button
            >Button item
            <b-button class="add_favorite">
              <img src="img/icon-favorite-gray.svg" alt="add-favorite" />
            </b-button>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <!-- Modal show Result-->
    <div>
      <b-button v-b-modal.modal-center>Launch centered modal</b-button>
      <b-modal id="modal-center" centered title="BootstrapVue">
        <p class="my-4">Vertically centered modal!</p>
      </b-modal>
    </div>
  </b-container>
</template>
<style lang="scss">
.results {
  .not_results {
    padding-top: 50px;
    h2 {
      @include font-bold();
      margin-bottom: 10px;
      font-size: 36px;
      line-height: 43px;
    }
    p {
      color: #5e5e5e;
      font-size: 20px;
      line-height: 150%;
    }
    .btn-danger {
      margin-top: 25px;
      width: 155px;
      @include btn-pokedex();
    }
  }
  .success_results {
    .list-group {
      margin-top: 40px;
      align-items: center;
      .list-group-item {
        padding: 8px 8px 8px 20px;
        max-width: 570px;
        margin: 5px 0;
        background: #ffffff;
        border-radius: 5px;
        border: none;
        color: #353535;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add_favorite {
          background-color: #f5f5f5;
          border: none;
          border-radius: 50%;
          height: 44px;
          width: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 26px;
            width: 26px;
          }
        }
      }
    }
  }
}
</style>
