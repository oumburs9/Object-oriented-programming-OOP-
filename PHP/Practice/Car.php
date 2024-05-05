<?php

class Car {

    // properties / fields
    private string $color;
    private string $brand;
    // public $coler;
    // protected $brand;

    //  constructor
    public function __construct(string $brand, string $color)
    {
        $this->brand = $brand;
        $this->color = $color;
    }

    // getter and setter methods
    public function getBrand(): string
    {
        return $this->brand;
    }
    public function setBrand(string $brand): void
    {
        $this->brand = $brand;
    }
    public function getColor(): string
    {
        return $this->color;
    }
    public function setColor(string $color)
    {
        $allowedColors = ['red', 'blue', 'black'];

        if (in_array($color, $allowedColors))
            $this->color = $color;
    }

    // methods
    public function getInfo(): string
    {
        return "Brand: " . $this->brand . " Color: " . $this->color; 
    }

    public function __toString(): string {
        return $this->getInfo() . "\n";
    }

}

$car1 = new Car('Tesla', 'green');
echo $car1;
echo $car1->setColor('black');
echo $car1;