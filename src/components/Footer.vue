<script setup></script>

<template>
  <footer class="footer">
    <div class="footer__heading">
      <img
        src="/logo.svg"
        alt="logo"
        class="footer-logo"
      />
      <h4>Фильмография</h4>
    </div>

    <p>
      Developer:
      <a
        href="https://drive.google.com/file/d/1qtt2zr-LSLVHMOcoxE1Pu0unG3xSWko6/view"
        target="_blank"
      >
        Eugene Zuev
      </a>
    </p>
  </footer>
</template>

<style lang="css" scoped>
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-top: auto;

    .footer__heading {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      h4 {
        margin: 0;
      }
    }

    p {
      margin: 0 0 10px 0;
      font-size: 16px;
      a {
        color: #1eb4c3;
      }
    }
  }

  .footer-logo {
    max-width: 35px;
    margin-right: 10px;
  }
</style>
