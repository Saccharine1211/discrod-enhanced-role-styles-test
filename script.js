document.addEventListener('DOMContentLoaded', () => {
    const usernamePreview = document.getElementById('username-preview');
    const usernameInput = document.getElementById('username-input');
    const color1Input = document.getElementById('color-1');
    const color2Input = document.getElementById('color-2');
    const color1TextInput = document.getElementById('color-1-text');
    const color2TextInput = document.getElementById('color-2-text');
    const hoverToggle = document.getElementById('hover-toggle');

    function updateStyle() {
        const username = usernameInput.value;
        const color1 = color1Input.value;
        const color2 = color2Input.value;

        usernamePreview.textContent = username;
        usernamePreview.dataset.text = username;

        usernamePreview.style.setProperty('--custom-gradient-color-1', color1);
        usernamePreview.style.setProperty('--custom-gradient-color-2', color2);
        usernamePreview.style.setProperty('--custom-gradient-color-3', color1); // Color 3 is the same as Color 1
    }

    function toggleHoverPreview() {
        if (hoverToggle.checked) {
            usernamePreview.classList.add('force-hover');
        } else {
            usernamePreview.classList.remove('force-hover');
        }
    }

    function syncColorInputs(source, target) {
        target.value = source.value;
    }

    usernameInput.addEventListener('input', updateStyle);

    color1Input.addEventListener('input', () => {
        syncColorInputs(color1Input, color1TextInput);
        updateStyle();
    });
    color1TextInput.addEventListener('input', () => {
        syncColorInputs(color1TextInput, color1Input);
        updateStyle();
    });

    color2Input.addEventListener('input', () => {
        syncColorInputs(color2Input, color2TextInput);
        updateStyle();
    });
    color2TextInput.addEventListener('input', () => {
        syncColorInputs(color2TextInput, color2Input);
        updateStyle();
    });

    hoverToggle.addEventListener('change', toggleHoverPreview);

    // Initialize with default values
    updateStyle();
}); 