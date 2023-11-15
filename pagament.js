const paymentOptions = document.getElementsByName("payment");
        const paymentDetails = document.getElementById("payment-details");
        for (const option of paymentOptions) {
            option.addEventListener("change", function () {
                paymentDetails.innerHTML = "";
                finalizeButton.style.display = "none";

                if (option.value === "cartao") {
                    paymentDetails.innerHTML = `
                        <div class="form-pagamento">
                            <form id="card-form">
                                <div class="form-100">
                                    <label for="card-number">Dados do Cartão</label>
                                    <input type="text" id="card-number" oninput="this.value = this.value.replace(/[^0-9.]/g, '')" maxlength="16" placeholder="0000 0000 0000 0000"/>
                                </div>
                                <div class="form-50">
                                    <input type="text" id="card-expiry" oninput="this.value = this.value.replace(/[^0-9.]/g, '')" placeholder="MM/AA" maxlength="4">
                                    <input type="text" id="card-cvc" oninput="this.value = this.value.replace(/[^0-9.]/g, '')" placeholder="CVC" maxlength="3">
                                </div>
                                <div class="form-100">
                                    <input type="text" id="card-name" maxlength="50" placeholder="NOME NO CARTÃO">
                                </div>
                                <div id="card-errors" class="error"></div>
                            </form>
                        </div>
                    `;

                    document.getElementById("card-form").addEventListener("submit", function (event) {
                        event.preventDefault();
                        const cardNumber = document.getElementById("card-number").value;
                        const cardExpiry = document.getElementById("card-expiry").value;
                        const cardCvc = document.getElementById("card-cvc").value;
                        const cardName = document.getElementById("card-name").value;
    
                    });

                } else if (option.value === "pix") {
                    const chavePix = gerarChavePix();

                    paymentDetails.innerHTML = `
                        <p>Chave PIX: <span id="chavePix">${chavePix}</span></p>
                        <button id="copyButton">Copiar</button>
                        <p>
                        <div id="qrcode"></div>
                    `;

                    const qr = new QRCode(document.getElementById('qrcode'), {
                        text: chavePix,
                        width: 280,
                        height: 280
                    });
                    
                    const copyButton = document.getElementById('copyButton');
                    copyButton.addEventListener('click', function () {
                        const chavePixElement = document.getElementById('chavePix');
                        const chavePixText = chavePixElement.textContent;
                        const tempInput = document.createElement('input');
                        tempInput.value = chavePixText;
                        document.body.appendChild(tempInput);
                        tempInput.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempInput);
                        copyButton.textContent = 'Chave PIX Copiada!';
                        const finalizeButton = document.getElementById("finalize-button");
        const resultText = document.getElementById("result");

        finalizeButton.addEventListener("click", function () {
            resultText.innerText = "Agendamento finalizado! Mais informações foram enviadas para o seu e-mail";
        });
                    });

                } else if (option.value === "presencial") {
                    paymentDetails.innerHTML = ``;
                }
                finalizeButton.style.display = "block";
            });
        }

        function gerarChavePix() {
            const caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let chave = '';

            for (let i = 0; i < 25; i++) {
                chave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            }

            return chave;
        }
        const finalizeButton = document.getElementById("finalize-button");
        const resultText = document.getElementById("result");

        finalizeButton.addEventListener("click", function () {
            window.location.href = "pag-fin.html";
});
