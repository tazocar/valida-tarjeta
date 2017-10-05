# Validación Tarjeta

En este proyecto creamos un programa que confirma o rechaza la validez de una tarjeta de crédito, utilizando el algorítmo de Luhn.

### Utilidad
+ Validar números de tarjeta

### Cifrado
+ Llamar a la función
```
javascript
isValidCard()
```
+ Pedir el número de tarjeta a evaluar
	- **if** está vacío, pedir nuevo mensaje.
	- **if** contiene letras, pedir nuevo número.
+ Separar los números (string) con **Split**.
+ Iterar en los números e invertir su orden y pásalos a *number*
+ Crear var **result** *Para sumar todos los números*
+ Crear var **even** *para los números en posiciones pares*
+ Iterar en los números separados.
	- **if** está enuna posición impar, súmalo a result.
	- si no, multiplícalo por 2 y pongo en **even**
+ Itera en **even**.
	- **if** el número es menor a 10, súmalo a **result**
	- Si no, pásalo a *string*, sepáralos
	- Vuelve a pasarlos a *number* y suma los índices a **result**.
+ **if** **result** módulo de 10 es 0.
	- Return "Felicitaciones"
	- Si no, "Tarjeta Inválida"
	
#### Diagrama de flujo

+ https://cloud.smartdraw.com/share.aspx/?pubDocShare=5865DD3558BE8E59475A4F5CF1D02913476



##### Versión de archivo `0.01`