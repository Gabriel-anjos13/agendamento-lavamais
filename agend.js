const form = document.getElementById("agendamento-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedDate = datePicker.value;
    const selectedTime = timeSlot.value;

    const currentDate = new Date();
    const selectedDateTime = new Date(selectedDate);

    if (selectedDateTime < currentDate) {
        mensagem.textContent = "A data selecionada não disponível. Por favor, escolha outra data.";
    } else {
        window.location.href = "pagament.html";
    }
});
