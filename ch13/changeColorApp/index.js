// Model
const model = {
    currentColor: '#ffffff', // default color
};

// View
const view = {
    changeColorBtn: document.getElementById('changeColorBtn'),
    resetColorBtn: document.getElementById('resetColorBtn'),

    updateBackgroundColor: function(color) {
        document.body.style.backgroundColor = color;
    },
};

// Controller
const controller = {
    init: function() {
        view.changeColorBtn.addEventListener('click', this.handleColorButtonClick);
        view.resetColorBtn.addEventListener('click', this.handleResetButtonClick);
        view.updateBackgroundColor(model.currentColor);
    },

    handleColorButtonClick: function() {
        const newColor = controller.generateRandomColor();
        model.currentColor = newColor;
        view.updateBackgroundColor(newColor);
    },

    handleResetButtonClick: function() {
        const defaultColor = '#ffffff';
        model.currentColor = defaultColor;
        view.updateBackgroundColor(defaultColor);
    },

    generateRandomColor: function() {
        // Generate a random hex color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
};

// Initialize the app
controller.init();
