package org.example.scenario;

import java.awt.*;

class ColorFactory {

    public static Color getColor(String colorName) {
        Color color;

        switch (colorName) {
            case "Red":
                color = new Color(255, 0, 0);
                break;
            case "Green":
                color = new Color(0, 255, 0);
                break;
            case "Blue":
                color = new Color(0, 0, 255);
                break;
            default:
                color = null;
        }

        return color;
    }
}

/**
 * please reuse instances of different colors as needed
 */