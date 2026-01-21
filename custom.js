function addSmoothToggleButtons() {
    const classicCodeCells = document.querySelectorAll('div.code_cell');
    const labCodeCells = document.querySelectorAll('.jp-CodeCell');
    const allCodeCells = [...classicCodeCells, ...labCodeCells];

    allCodeCells.forEach((cell) => {
        if (cell.getAttribute('data-toggle-added') === 'true') return;

        let codeInput = cell.querySelector('.input') || cell.querySelector('.jp-Cell-inputWrapper');
        if (!codeInput) return;

        const wrapper = document.createElement("div");
        wrapper.classList.add("code-transition");
        codeInput.parentNode.insertBefore(wrapper, codeInput);
        wrapper.appendChild(codeInput);

        const btn = document.createElement("button");
        btn.textContent = "Show Code";
        btn.className = "toggle-btn";

        btn.onclick = () => {
            wrapper.classList.toggle("show");
            btn.textContent = wrapper.classList.contains("show") ? "Hide Code" : "Show Code";
        };

        cell.insertBefore(btn, wrapper);
        cell.setAttribute('data-toggle-added', 'true');
    });

    /* Hide prompts */
    document.querySelectorAll('.jp-InputPrompt, .jp-OutputPrompt')
        .forEach(el => el.style.display = 'none');
}

// document.addEventListener("DOMContentLoaded", addSmoothToggleButtons);
// setTimeout(addSmoothToggleButtons, 1200);
