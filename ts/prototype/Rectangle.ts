package com.epam.eng.pattern.prototype;
class Rectangle {
    private width: number;
    private height: number;
    private color: string;

    constructor(width: number, height: number, color: string) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getColor(): string {
        return this.color;
    }
}

/***
 * todo: To apply the Prototype Pattern to this program, we need to make the Rectangle object cloneable.
 * we can create new instances by cloning existing ones. and just modify some of fields.  for example: same size but different color.
 */

