# Parte A

Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de los cuatro componentes de un paradigma mencionados por Kuhn.

## 1. Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?

Las generalizaciones simbólicas son las reglas y conceptos que definen cómo funciona un lenguaje. En JavaScript, dentro de la programación estructurada, se encuentran:

* Uso de variables y constantes mediante let, const y, tradicionalmente, var.
* Uso de distintos tipos de datos como number, string, boolean, null, undefined, entre otros.
* Uso de operadores aritméticos, lógicos, relacionales y de asignación.
* Uso de estructuras de control como if, else, switch, for, while y do while.
* Organización del programa mediante funciones.
* Uso de expresiones y sentencias para realizar operaciones y controlar el flujo del programa.
* Uso de bloques de código delimitados mediante {}.

Estas reglas determinan cómo se escribe un programa en JavaScript y cómo se ejecutan sus instrucciones.

## 2. Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

Los programadores de JavaScript suelen valorar:

* Su facilidad para comenzar a programar y su sintaxis relativamente sencilla.
* La posibilidad de ejecutar código directamente en los navegadores web.
* Su amplia disponibilidad y soporte en diferentes plataformas.
* La gran cantidad de bibliotecas y herramientas disponibles.
* La posibilidad de utilizarlo tanto en el desarrollo frontend como en el backend mediante entornos como Node.js.
* Su flexibilidad para desarrollar diferentes tipos de aplicaciones.

Estas características hacen que JavaScript sea considerado una opción práctica y versátil para muchos tipos de proyectos.

## 3. Valores: ¿Qué pensamiento o estilo de programación consideraron mejor los creadores?

Los creadores de JavaScript buscaron principalmente un lenguaje que fuera relativamente sencillo de utilizar, flexible y adecuado para agregar comportamiento dinámico a las páginas web.

Dentro del paradigma de programación estructurada, se priorizan valores como:

* Simplicidad.
* Flexibilidad.
* Facilidad de uso.
* Portabilidad.
* Reutilización mediante funciones.
* Claridad en la organización del flujo de control.

## 4. Ejemplares: ¿Qué clase de problemas pueden resolverse más fácilmente en el lenguaje?

JavaScript, utilizando programación estructurada, es particularmente adecuado para:

* Desarrollo de páginas web interactivas.
* Validación y procesamiento de datos ingresados por usuarios.
* Automatización de tareas mediante scripts.
* Desarrollo de pequeños programas y herramientas.
* Manipulación de datos y realización de cálculos.
* Desarrollo de aplicaciones mediante entornos como Node.js.

# Parte B

Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de los ejes propuestos para la elección de un lenguaje de programación.

## 1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?

Sí, JavaScript tiene una sintaxis y una semántica formalmente definidas mediante el estándar ECMAScript, mantenido por ECMA International.

Además, existe documentación oficial y documentación técnica ampliamente utilizada para conocer las características del lenguaje y sus APIs. También existen diferentes motores de JavaScript, como V8, SpiderMonkey y JavaScriptCore, que implementan el estándar.

## 2. ¿Es posible comprobar el código producido en ese lenguaje?

Sí, JavaScript permite comprobar el código mediante diferentes mecanismos.

Los intérpretes o motores de JavaScript detectan ciertos errores antes o durante la ejecución, como errores de sintaxis. Además, existen herramientas como linters, analizadores estáticos y pruebas automatizadas que permiten detectar errores durante el desarrollo.

También se pueden utilizar herramientas como TypeScript o JSDoc para agregar comprobaciones de tipos.

Sin embargo, JavaScript es un lenguaje dinámico, por lo que algunos errores relacionados con los tipos o con la lógica del programa solamente pueden detectarse durante la ejecución.

## 3. ¿Es confiable?

JavaScript puede ser confiable cuando se programa correctamente, pero su flexibilidad y tipado dinámico pueden facilitar la aparición de ciertos errores.

Por ejemplo, una variable puede cambiar de tipo durante la ejecución o pueden producirse errores por utilizar valores undefined o null de manera incorrecta.

Además, ciertas conversiones automáticas de tipos pueden producir comportamientos inesperados.

Pero, sin embargo, utilizando buenas prácticas, pruebas automatizadas y herramientas de análisis, es posible desarrollar software confiable utilizando JavaScript.

## 4. ¿Es ortogonal?

JavaScript tiene un nivel de ortogonalidad moderado.

Muchas de sus características pueden combinarse de diferentes maneras. Por ejemplo, las funciones pueden recibir distintos tipos de valores como parámetros, devolver valores y utilizarse dentro de diferentes estructuras de control.

Sin embargo, existen ciertas excepciones y comportamientos particulares del lenguaje. Por ejemplo, JavaScript realiza conversiones implícitas de tipos y existen diferencias en el comportamiento de operadores como == y ===.

Por lo tanto, JavaScript presenta una ortogonalidad moderada, pero no completamente uniforme.

## 5. ¿Cuáles son sus características de consistencia y uniformidad?

JavaScript posee una sintaxis relativamente consistente y uniforme en muchos aspectos.

* Las instrucciones pueden terminar con ;.
* Los bloques de código se delimitan mediante {}.
* Las estructuras de control utilizan una sintaxis similar.
* Las funciones siguen una estructura relativamente uniforme.
* Los operadores tienen reglas definidas para trabajar con diferentes valores.

Sin embargo, existen algunas particularidades del lenguaje que pueden afectar su uniformidad, como las conversiones automáticas de tipos, la diferencia entre == y === y ciertos comportamientos históricos que se mantienen por compatibilidad.

## 6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?

Sí, JavaScript es extensible en varios sentidos.

El lenguaje puede utilizar bibliotecas y módulos para agregar funcionalidades sin modificar el núcleo del lenguaje. También es posible crear bibliotecas propias y utilizar APIs proporcionadas por el navegador o por entornos como Node.js.

Además, existen subconjuntos o formas restringidas de utilizar JavaScript. Por ejemplo, Strict Mode ("use strict") restringe ciertos comportamientos del lenguaje y ayuda a evitar algunos errores.

También pueden utilizarse herramientas como TypeScript, que agrega un sistema de tipos estáticos y luego genera código JavaScript.

## 7. El código producido, ¿es transportable?

Sí, JavaScript tiene un alto grado de transportabilidad.

Un programa escrito siguiendo el estándar de JavaScript puede ejecutarse en diferentes sistemas y dispositivos siempre que exista un entorno compatible, como un navegador web o un runtime de JavaScript.

Por ejemplo, un mismo programa JavaScript puede ejecutarse en diferentes sistemas operativos utilizando navegadores compatibles.

Sin embargo, la transportabilidad puede verse afectada cuando el programa utiliza APIs específicas de un entorno. Por ejemplo, un programa que utiliza APIs exclusivas del navegador no necesariamente podrá ejecutarse directamente en Node.js, y viceversa.
