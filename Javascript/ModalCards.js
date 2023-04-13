const closeModalBtn = document.querySelector(".btn-close");
            const overlay = document.querySelector(".overlay");
            const openModalBtns = document.querySelectorAll(".btn-open");
            // close modal function
            // close modal function
            const closeModal = function() {
                const modals = document.querySelectorAll(".profilemodal:not(.hidden)");
                modals.forEach(function(modal) {
                    modal.classList.add("hidden");
                });
                overlay.classList.add("hidden");
            };
            // add event listener to all close buttons
            const closeModalBtns = document.querySelectorAll(".btn-close");
            closeModalBtns.forEach(function(btn) {
                btn.addEventListener("click", closeModal);
            });
            // close the modal when the close button and overlay is clicked
            closeModalBtn.addEventListener("click", closeModal);
            overlay.addEventListener("click", closeModal);
            // close modal when the Esc key is pressed
            document.addEventListener("keydown", function(e) {
                if (e.key === "Escape") {
                    closeModal();
                }
            });
            // open modal when the button is clicked
            openModalBtns.forEach(function(btn) {
                btn.addEventListener("click", function() {
                    const modalId = btn.dataset.modal;
                    const modal = document.querySelector('#' + modalId);
                    modal.classList.remove("hidden");
                    overlay.classList.remove("hidden");
                });
            });