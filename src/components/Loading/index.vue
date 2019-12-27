<!--  -->
<template>
  <div class="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped>
body{margin: 0
}
.loader{
  position: absolute;
  top: 50%;
  left: 40%;
  margin-left: 10%;
  transform :translate3d(-50%,-50%,0);
}
.dot{
  width :24px;
  height: 24px;
  background:#3ac;
  border-radius:100%;
  display: inline-block;
  animation :slide 1s infinite;
}
/* for n in (1..5){ */
  /* .dot:nth-child({n}) {
    animation-delay :(.1s * n);
    background: red(#3ac, (50 * n));
  } */
/* } */
  @keyframes slide{
  0%{
    transform: scale(1);
  }
  50%{
    opacity :0.3;
    transform: scale(2);
  }
  100%{
    transform :scale(1);
  }
  }
</style>
