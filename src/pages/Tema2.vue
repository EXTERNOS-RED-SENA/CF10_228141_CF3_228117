<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Medidas de dispersión
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto
          img.img-a.img-t(src='@/assets/curso/temas/33.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0
            | Las 
            b medidas de dispersi&oacute;n
            |  son herramientas estad&iacute;sticas que describen qu&eacute; tan dispersos o esparcidos est&aacute;n los datos en un conjunto. Estas medidas indican la variabilidad de los datos alrededor de una medida de tendencia central, como la media o la mediana. Cuanto mayor sea la dispersi&oacute;n, m&aacute;s lejos estar&aacute;n los datos de la tendencia central, lo que refleja una mayor variabilidad en el conjunto de datos.
      .row.justify-content-center.align-items-center
        .col-lg-5.my-3
          .titulo-sexto.color-acento-contenido.aos-init
            h5 Figura 2.
            span Medidas de dispersi&oacute;n.
          img.contions.mx-auto.aos-init.img-t.bg-img(src='@/assets/curso/temas/34.svg' alt='La Figura 2 se denomina «Medidas de dispersión», y muestra las diferentes medidas que indican la variabilidad de los datos alrededor de una medida de tendencia central.')
          figcaption.border.border-secundary.border-start-0.border-end-0.border-2.mt-2
            p.text-center.text-dark.mb-0 Fuente: OIT, 2024.
        .col-lg-5.my-3
          img.img-a.img-t(src='@/assets/curso/temas/35.png')
      .separador-container
        .separador
      section
        #t_2_1.titulo-segundo.color-acento-botones
          h2 2.1&#x9;Rango
        p
          | El 
          b rango
          |  es la diferencia entre el valor m&aacute;s alto y el m&aacute;s bajo en un conjunto de datos. Es la medida de dispersi&oacute;n m&aacute;s simple y se usa para describir la amplitud total de los valores observados.
        .row.justify-content-center.align-items-center
          .col-lg-5.my-3
            img.img-t.img-a(src='@/assets/curso/temas/36.png')
          .col-lg-7.my-3
            h5  Formula:
            .p-3.color-primario--borde.tarjeta.d-inline-block.bg-transparent
              math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML")
                <mi>R</mi><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><msub><mi>x</mi><mrow><mi>m</mi><mi>a</mi><mi>x</mi></mrow></msub><mo>-</mo><msub><mi>x</mi><mrow><mi>m</mi><mi>i</mi><mi>n</mi></mrow></msub>
            .brad.p-3.h-100
              p.mb-3
                b Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3.d-flex
                  i.fas.fa-check.v1 
                  p.mb-0 #[em(style='font-size: 20px') X#[sub max]] es el valor m&aacute;ximo del conjunto de datos.
                li.mb-3.d-flex
                  i.fas.fa-check.v1 
                  p.mb-0 #[em(style='font-size: 20px') X#[sub min]] es el valor m&iacute;nimo del conjunto de datos.
            .bg7.brad.p-3.h-100
              p.mb-3
                b.text-white Propiedades
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  span.text-white
                    | Es f&aacute;cil de calcular, pero es muy sensible a los valores at&iacute;picos, ya que solo depende de los extremos.
                li.mb-3
                  i.fas.fa-check.v1 
                  span.text-white
                    | No proporciona informaci&oacute;n sobre c&oacute;mo se distribuyen los datos entre los valores m&aacute;s altos y bajos.
      .separador-container
        .separador
      section
        #t_2_2.titulo-segundo.color-acento-botones
          h2 2.2&#x9;Desviaci&oacute;n media
        p
          | El 
          b desviaci&oacute;n media
          |  es la media de las diferencias absolutas entre cada valor del conjunto de datos y la media aritm&eacute;tica. Proporciona una medida del promedio de la dispersi&oacute;n sin considerar la direcci&oacute;n de las desviaciones.
        .row.justify-content-center.align-items-center
          .col-lg-4.my-3
            img.img-t.img-a(src='@/assets/curso/temas/42.png')
          .col-lg-8.my-3
            h5  Formula:
            .p-3.color-primario--borde.tarjeta.d-inline-block.bg-transparent
              math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML") 
                <mi>D</mi><mi>e</mi><mi>s</mi><mi>v</mi><mi>i</mi><mi>a</mi><mi>c</mi><mi>i</mi><mi>&#xf3;</mi><mi>n</mi><mo>&#xA0;</mo><mi>m</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>a</mi><mo>&#xA0;</mo><mo>=</mo><mo>&#xA0;</mo><mfrac><msubsup><mo>&#x2211;</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mfenced open="|" close="|"><mtable><mtr><mtd><msub><mi>x</mi><mi>i</mi></msub><mo>-</mo></mtd><mtd><mover accent='true'><mi>x</mi><mo>&#x2212;</mo></mover></mtd></mtr></mtable></mfenced></mrow><mi>n</mi></msubsup><mi>n</mi></mfrac>
            .brad.p-3.h-100
              p.mb-3
                b Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 X #[sub i]]  es cada valor del conjunto de datos.
                li.mb-3
                  i.fas.fa-check.v1 
                  p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 x̅] es la media aritm&eacute;tica.
                li.mb-3
                  i.fas.fa-check.v1 
                  p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 n] es el n&uacute;mero total de observaciones.
            .bgi.brad.p-3.h-100
              p.mb-3
                b Propiedades
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Es una medida intuitiva de la dispersi&oacute;n, pero no es tan com&uacute;n como otras medidas como la varianza o la desviaci&oacute;n est&aacute;ndar.
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Utiliza las desviaciones absolutas, lo que evita que las diferencias positivas y negativas se cancelen entre s&iacute;.
      .separador-container
        .separador
      section
        #t_2_3.titulo-segundo.color-acento-botones
          h2 2.3&#x9;Varianza
        p.mb-5
          | La 
          b varianza
          |  es una medida que refleja el promedio de los cuadrados de las desviaciones de cada valor respecto a la media. La varianza indica qu&eacute; tan dispersos est&aacute;n los datos, y es una de las medidas m&aacute;s importantes en la estad&iacute;stica inferencial.
        .row.justify-content-center.align-items-center
          .col-lg-4
            .p-4(style="background-color: #e5e9eb ")
              h5  Formula: 
              .p-3.color-primario--borde.tarjeta.d-inline-block.bg-transparent.overflow-auto
                math.h4.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML") 
                  <mi>V</mi><mi>a</mi><mi>r</mi><mi>i</mi><mi>a</mi><mi>n</mi><mi>z</mi><mi>a</mi><mo>&#xA0;</mo><mo>=</mo><msup><mi>&#x3c3;</mi><mn>2</mn></msup><mo>=</mo><mo>&#xA0;</mo><mfrac><mrow><msubsup><mo>&#x2211;</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mfenced><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>-</mo><mover accent='true'><mi>x</mi><mo>&#x2212;</mo></mover></mrow></mfenced></mrow><mi>n</mi></msubsup><mn>2</mn></mrow><mi>n</mi></mfrac>
              .p-3
                p.mb-3
                  b Donde:
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 X #[sub i]] es cada valor del conjunto de datos.
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 x̅] es la media aritm&eacute;tica.
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 n] es el n&uacute;mero total de observaciones.
          .col-lg-5
            div
              p.mb-3
                b Propiedades
              .bg18.p-3.brad.mb-3
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span
                      | La varianza utiliza los cuadrados de las desviaciones, lo que magnifica el impacto de las observaciones m&aacute;s alejadas de la media.
              .bg18.p-3.brad
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span
                      | Es muy &uacute;til para c&aacute;lculos estad&iacute;sticos avanzados, pero su principal desventaja es que est&aacute; en unidades cuadradas, lo que puede hacer que sea dif&iacute;cil de interpretar directamente.
          .col-lg-3.my-3
            img.img-t.img-a(src='@/assets/curso/temas/51.png')
      .separador-container
        .separador
      section
        #t_2_4.titulo-segundo.color-acento-botones
          h2 2.4&#x9;Desviaci&oacute;n est&aacute;ndar
        p.mb-5
          | La 
          b desviaci&oacute;n est&aacute;ndar
          |  es la ra&iacute;z cuadrada positiva de la varianza y es quiz&aacute;s la medida de dispersi&oacute;n m&aacute;s utilizada. A diferencia de la varianza, la desviaci&oacute;n est&aacute;ndar est&aacute; en las mismas unidades que los datos originales, lo que facilita su interpretaci&oacute;n.
        .row.justify-content-center
          .col-lg-3.my-3
            img.img-t.img-a(src='@/assets/curso/temas/52.png')
          .col-lg-5.my-3
            .bg17.p-3.brad.h-100
              h5  Formula: 
              .p-4.color-primario--borde.bg-white.tarjeta.d-inline-block
                math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML") 
                  <mi>&#x3c3;</mi><mo>=</mo><mo>&#xA0;</mo><msqrt><mfrac><mrow><msubsup><mo>&#x2211;</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mfenced><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>-</mo><mover accent='true'><mi>x</mi><mo>&#x2212;</mo></mover></mrow></mfenced></mrow><mi>n</mi></msubsup><mn>2</mn></mrow><mi>n</mi></mfrac></msqrt>
              .brad.p-3.h-100
                p.mb-3
                  b Donde:
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 σ] es la desviaci&oacute;n est&aacute;ndar. 
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 X #[sub i]] es cada valor del conjunto de datos.
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 x̅] es la media aritm&eacute;tica.
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 n] es el n&uacute;mero total de observaciones.
          .col-lg-4.my-3
            .bg19.p-3.brad.h-100
              p.mb-3
                b Propiedades
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Indica qu&eacute; tan dispersos est&aacute;n los valores con respecto a la media.
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Es f&aacute;cil de interpretar porque est&aacute; en las mismas unidades que los datos originales.
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Es sensible a los valores at&iacute;picos, ya que utiliza las desviaciones cuadradas.
      .separador-container
        .separador
      section
        #t_2_5.titulo-segundo.color-acento-botones
          h2 2.5&#x9;Coeficiente de variaci&oacute;n
        p.mb-5
          | El 
          b coeficiente de variaci&oacute;n (CV)
          |  es una medida de dispersi&oacute;n relativa que expresa la desviaci&oacute;n est&aacute;ndar como un porcentaje de la media. Es &uacute;til para comparar la variabilidad entre diferentes conjuntos de datos que pueden tener diferentes unidades o medias.
        .row.justify-content-center.bg20.brad
          .col-lg-3.p-0
            img.img-t(src='@/assets/curso/temas/58.png')
          .col-lg-4.my-3.my-lg-0.py-3
            div
              h5  Formula:
              .p-3.color-primario--borde.tarjeta.d-inline-block.bg-white.border-2
                math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML")  
                  <mi>C</mi><mi>V</mi><mo>=</mo><mfrac><mi>&#x3c3;</mi><mover accent='true'><mi>x</mi><mo>&#x2212;</mo></mover></mfrac><mo>&#xd7;</mo><mn>100</mn>
              .brad.p-3.h-100
                p.mb-3
                  b Donde:
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 σ es la desviaci&oacute;n est&aacute;ndar. 
                  li.mb-3
                    i.fas.fa-check.v1 
                    p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 x̅] es cada valor del conjunto de datos.
          .col-lg-5.my-3.my-lg-0.py-3
            .bg19.p-3.brad.h-100
              p.mb-3
                b Propiedades
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Permite comparar la dispersi&oacute;n de diferentes conjuntos de datos, incluso cuando tienen unidades o escalas diferentes.
                li.mb-3
                  i.fas.fa-check.v1 
                  span
                    | Un coeficiente de variaci&oacute;n m&aacute;s alto indica una mayor dispersi&oacute;n en relaci&oacute;n con la media.
      .separador-container
        .separador
      section
        #t_2_6.titulo-segundo.color-acento-botones
          h2 2.6&#x9;Rango intercuart&iacute;lico
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/62.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              | El 
              b rango intercuart&iacute;lico (IQR)
              |  mide la dispersi&oacute;n de los datos entre el primer cuartil (Q1Q_1Q1) y el tercer cuartil (Q3Q_3Q3), es decir, la dispersi&oacute;n del 50% central de los datos. Es una medida robusta de dispersi&oacute;n, ya que no se ve afectada por valores at&iacute;picos.
        .row.justify-content-center.align-items-center
          .col-lg-5.my-3.bg17.p-3.brad
            h5  Formula: 
            .p-3.color-primario--borde.tarjeta.d-inline-block.bg-white.border-1.mb-4
              math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML") 
                <mi>I</mi><mi>Q</mi><mi>R</mi><mo>&#xA0;</mo><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>-</mo><msub><mi>Q</mi><mn>1</mn></msub>
            .brad.p-3.h-100
              p.mb-3
                b Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1 
                  p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 Q#[sub 3]] es el tercer cuartil (75 % de los datos por debajo).
                li.mb-3
                  i.fas.fa-check.v1 
                  p.mb-0 #[span.fst-italic(style='font-size: 20px').me-3 Q#[sub 1]] es el primer cuartil (25% de los datos por debajo).
          .col-lg-7.my-3
            div
              p.mb-3
                b Propiedades
              .bg18.p-3.brad.mb-3
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span
                      | El rango intercuart&iacute;lico es m&aacute;s robusto que la varianza o la desviaci&oacute;n est&aacute;ndar, ya que excluye los extremos.
              .bg18.p-3.brad
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span
                      | Es &uacute;til cuando se quiere analizar la dispersi&oacute;n central sin la influencia de valores extremos o at&iacute;picos.
      .separador-container
        .separador
      section
        #t_2_7.titulo-segundo.color-acento-botones
          h2 2.7&#x9;Amplitud de variaci&oacute;n
        p.mb-5
          | La 
          b amplitud de variaci&oacute;n
          |  (rango total) es otra forma de medir la dispersi&oacute;n, y representa la diferencia entre el valor m&aacute;ximo y el m&iacute;nimo de un conjunto de datos.
        .row.justify-content-center
          .col-lg-7.my-3.order-1
            .bg7.brad.p-4
              h5.text-white  Formula: 
              .p-3.color-primario--borde.tarjeta.d-inline-block.bg-white.border-1.mb-4
                math.h2.fw-normal.mb-0(xmlns="http://www.w3.org/1998/Math/MathML") 
                  <mi>I</mi><mi>Q</mi><mi>R</mi><mo>&#xA0;</mo><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>-</mo><msub><mi>Q</mi><mn>1</mn></msub>
              p.mb-4.text-white
                b Propiedades:
              .bgw.p-3.brad.mb-3
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span.mb-0
                      | Es una medida simple que ofrece una indicaci&oacute;n r&aacute;pida de la variabilidad.
              .bgw.p-3.brad
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1 
                    span.mb-0
                      | No toma en cuenta c&oacute;mo se distribuyen los datos entre el valor m&aacute;ximo y el m&iacute;nimo.
          .col-lg-5.my-3.order-lg-2
            div
              img.img-a.img-t(src='@/assets/curso/temas/67.png' alt='')
      .separador-container
        .separador
      section
        #t_2_8.titulo-segundo.color-acento-botones
          h2 2.8&#x9;Coeficiente de variaci&oacute;n
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/68.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0             
            | El coeficiente de variaci&oacute;n es una medida que estandariza la desviaci&oacute;n est&aacute;ndar respecto a la media, expresando la dispersi&oacute;n en t&eacute;rminos porcentuales.
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
