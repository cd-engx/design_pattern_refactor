package com.epam.eng.pattern.prototype;

public class Rectangle {
    private int width;
    private int height;
    private String color;

    public Rectangle(int width, int height, String color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getWidth() {
        return this.width;
    }

    public int getHeight() {
        return this.height;
    }

    public String getColor() {
        return this.color;
    }
}

/***
 * todo: To apply the Prototype Pattern to this program, we need to make the Rectangle object cloneable.
 * we can create new instances by cloning existing ones. and just modify some of fields.  for example: same size but different color.
 */

