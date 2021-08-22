<template>
  <c-box
    class="loading-screen fixed w-full text-white text-center top-0 left-0 z-20"
  >
    <svg width="150" viewBox="0 0 40 60">
      <polygon
        strokeWidth="1"
        stroke="#fff"
        fill="none"
        points="20,1 40,40 1,40"
      ></polygon>
      <text fill="#fff" x="6" y="50">Loading</text>
    </svg>
  </c-box>
</template>

<script>
export default {
  name: 'LoadingScreen',
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.loading-screen {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0008;
  // opacity: 0.2;

  svg {
    text {
      font-size: 5px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      animation: text 1s ease-in-out infinite;
    }

    polygon {
      stroke-dasharray: 22;
      stroke-dashoffset: 1;
      animation: dash 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite
        alternate-reverse;
    }
  }
}

@keyframes text {
  50% {
    opacity: 0.1;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 234;
  }
}
</style>
