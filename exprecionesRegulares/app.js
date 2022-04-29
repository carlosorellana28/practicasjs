/* CREAR EXPRECIONES REGULARES */

/* las expreciones regulares siempre se ponen entre barras inclinadas

******** si lo que queremos es buscar caracteres especificos los encerramos entre parentesis
******* si solo es la palabra la colocamos completa dentro de las barras
*******si queremos coisidir con una palabre u otra lo colocamos con una barra vertical 
Ejemplo: /Carlos|Carl/i
******la letra i  significa que no distinga entre mayusculas y minusculas
******** la letra g significa que busque globalmente el contenido entre una cadena de texto
*******para  evaluar una exprecion regular utilizamos el metodo test()
existen varios para comprender mejor los demas ver la documentacin oficial

*/

const regExp = /Carlos|Carl/i;

console.log(regExp.test("carl orellana esta escribiendo codigo de programacion"));