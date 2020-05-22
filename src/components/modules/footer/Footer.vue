<template>

  <b-container align="center">
  <b-row>
    <b-col>
      <div class="footerBorder">
        <div class="footerBorder mt-3 mb-3 ml-4 mr-4">
          <b-container>
            <b-row>
              <b-col>
                <b-container>
                  <b-row>
                    <b-col><p class="footerText">Скачивай приложение XCE FACTOR</p></b-col>
                  </b-row>
                  <b-row>
                    <b-col><img alt="App Store" src="@/assets/logos/appstore.png"></b-col>
                    <b-col></b-col>
                  </b-row>
                </b-container>
              </b-col>
              <b-col>
                <b-container>
                  <b-row>
                    <b-col><p class="footerText">Следи за нами в соц. сетях</p></b-col>
                  </b-row>
                  <b-row>
                    <b-col></b-col>
                    <b-col></b-col>
                  </b-row>
                </b-container>

              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footerBorder{
    border: 1px solid #FF05B9;
    box-sizing: border-box;
  }
  .footerText{
    font-family: Montserrat,serif;
    color: #FFFFFF;
    text-transform: uppercase;
  }
</style>
