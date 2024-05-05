package Java.Practice;

import java.util.HashSet;
import java.util.Set;

public class Car {
    private String brand;
    private String color;
    public static final Set<String> ALLOWES_COLORS = new HashSet<>();

    static {
        ALLOWES_COLORS.add("blue");
        ALLOWES_COLORS.add("red");
        ALLOWES_COLORS.add("white");
    }

    public Car(String brand, String color) {
        this.brand = brand; 
        this.color = color; 
    }

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String value) {
        this.brand = value;
    }


    public String getColor() {
        return this.color;
    }

    public void setColor(String value) {
        if (ALLOWES_COLORS.contains(value)) {
            this.color = value;
        }
    }

    public String getInfo() {
        return "Brand: " + this.brand + " Color: " + this.color;
    }

    public static void main(String[] args) {
       Car car1  = new Car("Tesla", "green");
       System.out.println(car1.getInfo());
       car1.setColor("white");
       System.out.println(car1.getInfo());
    }
}