<template>
  <div class="container">
    <div class="image">
      <h2 class="title-about">ABOUT US</h2>
    </div>
    <div class="txt-about">
      <div class="left">
        <h2>A little bit more about us</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vitae neque turpis quis luctus ut ante orci. Sed lobortis nibh suspendisse nibh nibh. Feugiat cursus habitant adipiscing nisl. Ac at at euismod suspendisse cras amet tellus neque pretium. Nisl cras ullamcorper at scelerisque. In ultrices congue tristique purus sed. Laoreet et pellentesque nunc eu praesent. Odio platea lectus urna, sit purus varius.
Lobortis arcu, ut sit luctus metus consectetur. Nibh morbi quam mattis sagittis purus lacus, fermentum amet diam. Eu in amet, congue porttitor sed tellus commodo imperdiet. Cras nibh ac urna duis nunc, non sed feugiat. Tellus nibh integer sem purus at. Fermentum duis commodo dictum fringilla malesuada sit urna sem. In vitae, purus non non fringilla maecenas vulputate odio nunc. Fringilla sit nibh in fringilla ultricies feugiat leo sed in. Curabitur dolor sit a, non id et. Nibh vel feugiat vitae, sed et eget. Et id nunc felis diam eu, morbi habitant dignissim aliquam. Sit sit morbi accumsan orci.
Viverra imperdiet commodo nec lectus pharetra, urna, cras in condimentum. Et nunc rhoncus consectetur at blandit. Ornare neque, eu, id pharetra, sed luctus turpis vulputate. Vitae sapien accumsan, neque, consectetur. Maecenas feugiat leo mauris odio id vel lectus. In arcu parturient posuere dui aliquet a. Enim volutpat dignissim enim proin pellentesque. Arcu, sit elementum arcu ut egestas orci feugiat vivamus diam.
Tellus id turpis phasellus justo, sit fusce et. Nam volutpat purus adipiscing massa, at sed elementum adipiscing. Fermentum condimentum et ac turpis ut lorem sed orci. Lectus lorem metus amet condimentum eu. Leo eros, luctus tortor felis auctor. Dolor quis turpis id vel tempor volutpat cursus id. Semper nulla in porttitor fermentum. Praesent mattis condimentum feugiat mi dignissim cras nascetur. Aenean sed sed volutpat, vulputate amet nulla gravida ipsum.
          In in in condimentum enim, facilisis dictumst. Mi curabitur tortor, nam sem tempor. Risus enim, sagittis suspendisse id. Mollis ac tellus nisi nulla egestas sociis in purus. Dignissim eget non, porttitor nulla. Dolor gravida eleifend </span>
      </div>
      <div class="right">
        <img src="../assets/img-about.png">
        <h2>Pierre Gaultier</h2>
        <span>Co-Founder</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
  .container{
    display:flex;
    height:100%;
    width: 100%;
    flex-direction: column;
  }
  .image{
    display:flex;
    height:30%;
    width: 100%;
    background-image: url("../assets/bg-about.jpeg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
  .title-about{
    color:white;
    font-size: 3em;
  }
  .txt-about{
    display:flex;
    height:70%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  .left{
    display:flex;
    height:70%;
    width:60%;
    background-color:white;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
    padding:10px;
    font-size: 0.9em;
    justify-content: center;
    align-items: center;
  }
  .right{
    display:flex;
    height:70%;
    width:30%;
    background-color:white;
    border-radius: 20px;
    box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .right img{
    height:200px;
  }
</style>