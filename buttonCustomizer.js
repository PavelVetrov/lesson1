class ButtonCustomizer {
    constructor(config) {
      this.config = config;
    }
  
    applyStyles() {
      const buttons = this.config.buttons;
      buttons.forEach(buttonConfig => {
        const button = document.getElementById(buttonConfig.id);
        if (button) {
          const styles = buttonConfig.styles;
          Object.keys(styles).forEach(style => {
            button.style[style] = styles[style];
          });
        }
      });
    }
  }
  
  // Пример использования
  const config = {
    "buttons": [
      {
        "id": "button1",
        "styles": {
          "backgroundColor": "blue",
          "color": "white",
          "borderRadius": "5px",
          "padding": "10px 20px",
          "fontSize": "16px"
        }
      },
      {
        "id": "button2",
        "styles": {
          "backgroundColor": "green",
          "color": "black",
          "borderRadius": "10px",
          "padding": "15px 30px",
          "fontSize": "18px"
        }
      }
    ]
  };
  
  const customizer = new ButtonCustomizer(config);
  customizer.applyStyles();  