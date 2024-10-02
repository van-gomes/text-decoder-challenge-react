export function copyTextToClipboard(text, showMessage) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showMessage('Texto copiado com sucesso!');
    })
    .catch(() => {
      showMessage('Ops, ocorreu um erro ao copiar o texto!');
    });
}