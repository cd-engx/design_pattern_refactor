package com.epam.eng.pattern.state;

public class TrafficSignal {
    private int state;

    public TrafficSignal() {
        this.state = 0;
    }

    public void setState(int state) {
        this.state = state;
    }

    public void runSignal() {
        while (true) {
            switch (state) {
                case 0:
                    System.out.println("Red Light for 30 seconds...");
                    try {
                        Thread.sleep(30000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    setState(1);
                    break;
                case 1:
                    System.out.println("Green Light for 60 seconds...");
                    try {
                        Thread.sleep(60000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    setState(2);
                    break;
                case 2:
                    System.out.println("Yellow Light for 10 seconds...");
                    try {
                        Thread.sleep(10000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    setState(0);
                    break;
            }
        }
    }
}
// todo: consider to abstract states Red/Green/Yellow, they can change TrafficSignal context state