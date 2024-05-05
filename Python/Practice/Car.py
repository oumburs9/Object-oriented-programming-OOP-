class Car:
    def __init__(self, brand :str, color :str) -> None:
        self._brand = brand
        self._color = color
      
    def __str__(self) -> str:
        return self.get_info()
        
    # setter and getter methods
    @property
    def brand(self) -> str:
        return self._brand
    
    @brand.setter
    def brand(self, value :str) -> None:
        self._brand = value
        
    @property
    def color(self) -> str:
        return self._color
    
    @color.setter
    def color(self, value :str) -> None:
        allowedColors = {'blue', 'red','yellow'}
        if value in allowedColors:
                self._color = value
    
    # methods
    def get_info(self) -> str:
        return f"Brand: {self._brand} Color: {self._color}"
    

car1  = Car('Tesla', 'red')

print(car1)
print(car1.get_info())
car1.color = "yellow"
print(car1.get_info())
    
# ################## Simple Way #######################
# class Car:
#     def __init__(self, brand :str, color :str) -> None:
#         self._brand = brand
#         self._color = color
      
#     def __str__(self) -> str:
#         return self.get_info()
        
#     # setter and getter methods
#     def get_brand(self) -> str:
#         return self._brand
#     def set_brand(self, brand :str) -> None:
#         self._brand = brand
#     def get_color(self) -> str:
#         return self._color
#     def set_color(self, color :str) -> None:
#         allowedColors = {'blue', 'red','yellow'}
#         if color in allowedColors:
#                 self._color = color
    
#     # methods
#     def get_info(self) -> str:
#         return f"Brand: {self._brand} Color: {self._color}"
    

# car1  = Car('Tesla', 'red')

# print(car1)
# print(car1.get_info())
# car1.set_color('blue')
# print(car1.get_info())
    
        