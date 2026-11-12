/* =========================================================
   CT BRUCUTUS
   Script
   ========================================================= */


/* =========================================================
   1. DADOS
   ========================================================= */

/*
  Senha do Wi-Fi informada no cadastro
*/
const wifiPassword = "Ctbrucutus2026#";


/* =========================================================
   2. ELEMENTOS
   ========================================================= */

const copyWifiButton =
  document.getElementById("copyWifiButton");

const copyFeedback =
  document.getElementById("copyFeedback");


/* =========================================================
   3. EVENTO DE CÓPIA
   ========================================================= */

copyWifiButton.addEventListener(
  "click",
  async () => {

    try {
      await navigator.clipboard.writeText(
        wifiPassword
      );

      showCopyFeedback();

    } catch (error) {

      /*
        Fallback para navegadores mais antigos
      */
      const temporaryInput =
        document.createElement("textarea");

      temporaryInput.value =
        wifiPassword;

      temporaryInput.style.position =
        "fixed";

      temporaryInput.style.opacity =
        "0";

      temporaryInput.style.pointerEvents =
        "none";

      document.body.appendChild(
        temporaryInput
      );

      temporaryInput.focus();
      temporaryInput.select();

      document.execCommand("copy");

      temporaryInput.remove();

      showCopyFeedback();
    }

  }
);


/* =========================================================
   4. FEEDBACK VISUAL
   ========================================================= */

function showCopyFeedback() {
  copyFeedback.classList.add("is-visible");

  clearTimeout(window.copyFeedbackTimeout);

  window.copyFeedbackTimeout =
    setTimeout(() => {
      copyFeedback.classList.remove("is-visible");
    }, 2200);
}
