<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Amplitud de variación',
          significado:
            'Diferencia entre el valor máximo y mínimo de un conjunto de datos, utilizada como medida básica de dispersión.',
        },
        {
          termino: 'Coeficiente de variación',
          significado:
            'Medida de dispersión relativa que permite comparar la variabilidad de dos o más conjuntos de datos con unidades diferentes.',
        },
        {
          termino: 'Cuartiles',
          significado:
            'Valores que dividen un conjunto de datos ordenado en cuatro partes iguales, cada una representando el 25% de la distribución.',
        },
        {
          termino: 'Cálculo de probabilidades',
          significado:
            'Métodos y fórmulas utilizados para determinar la probabilidad de ocurrencia de un evento en un espacio muestral.',
        },
        {
          termino: 'Deciles',
          significado:
            'Valores que dividen un conjunto de datos en diez partes iguales, cada una representando el 10 % de la distribución.',
        },
        {
          termino: 'Desviación estándar',
          significado:
            'Medida de dispersión que indica cuánto se alejan los datos en promedio de la media; calcula la variabilidad en una distribución.',
        },
        {
          termino: 'Desviación media',
          significado:
            'Promedio de las diferencias absolutas de cada valor con respecto a la media, utilizada para medir la dispersión de los datos.',
        },
        {
          termino: 'Distribución de probabilidades',
          significado:
            'Distribución que describe cómo se asignan las probabilidades a los diferentes valores de una variable aleatoria.',
        },
        {
          termino: 'Distribución normal',
          significado:
            'Distribución de probabilidad simétrica en forma de campana que describe cómo se distribuyen los datos alrededor de la media.',
        },
        {
          termino: 'Distribución <em>t-student</em>',
          significado:
            'Distribución de probabilidad utilizada en inferencia estadística, especialmente cuando el tamaño de la muestra es pequeño.',
        },
        {
          termino: 'Elección del gráfico adecuado',
          significado:
            'Proceso de seleccionar el tipo de gráfico más apropiado según el tipo de datos y el objetivo del análisis.',
        },
        {
          termino: 'Informe estadístico',
          significado:
            'Documento que presenta los resultados de un análisis estadístico de forma organizada, con conclusiones y recomendaciones.',
        },
        {
          termino: 'Interpretación de gráficos',
          significado:
            'Proceso de analizar gráficos estadísticos para extraer información y comprender patrones o tendencias en los datos.',
        },
        {
          termino: 'Media aritmética',
          significado:
            'Promedio de un conjunto de datos, calculado sumando todos los valores y dividiendo entre la cantidad de observaciones.',
        },
        {
          termino: 'Media geométrica',
          significado:
            'Media calculada multiplicando todos los valores y extrayendo la raíz enésima (según el número de valores), utilizada en datos con crecimiento proporcional.',
        },
        {
          termino: 'Media ponderada',
          significado:
            'Promedio que considera la importancia o peso de cada valor en el conjunto de datos, otorgando mayor relevancia a ciertos valores.',
        },
        {
          termino: 'Media recortada',
          significado:
            'Media calculada excluyendo los valores extremos (superiores e inferiores) de un conjunto de datos para reducir el impacto de los valores atípicos.',
        },
        {
          termino: 'Mediana',
          significado:
            'Valor central de un conjunto de datos ordenado; divide la distribución en dos partes iguales.',
        },
        {
          termino: 'Moda',
          significado:
            'Valor o categoría que aparece con mayor frecuencia en un conjunto de datos; útil en datos cualitativos y cuantitativos.',
        },
        {
          termino: 'Percentiles',
          significado:
            'Valores que dividen un conjunto de datos en 100 partes iguales; indican el porcentaje de datos que se encuentra por debajo de un valor específico.',
        },
        {
          termino: 'Probabilidades marginales',
          significado:
            'Probabilidades de ocurrencia de un solo evento en un espacio muestral, sin considerar la ocurrencia de otros eventos.',
        },
        {
          termino: 'Prueba de valor z',
          significado:
            'Prueba estadística para evaluar si una muestra pertenece a una población conocida o para comparar dos medias de poblaciones cuando se conoce la desviación estándar.',
        },
        {
          termino: 'Rango',
          significado:
            'Diferencia entre el valor máximo y mínimo en un conjunto de datos; medida sencilla de dispersión.',
        },
        {
          termino: 'Rango intercuartílico',
          significado:
            'Diferencia entre el tercer y el primer cuartil de un conjunto de datos; mide la dispersión en la parte central de la distribución.',
        },
        {
          termino: 'Regla de la adición',
          significado:
            'Regla de probabilidad que permite calcular la probabilidad de que ocurra al menos uno de varios eventos mutuamente excluyentes.',
        },
        {
          termino: 'Regla de la multiplicación',
          significado:
            'Regla de probabilidad que permite calcular la probabilidad conjunta de que ocurran dos o más eventos independientes.',
        },
        {
          termino: 'Teorema de Bayes',
          significado:
            'Teorema que permite actualizar la probabilidad de un evento con base en nueva evidencia o información; utilizado en inferencia estadística.',
        },
        {
          termino: 'Trimedia',
          significado:
            'Medida de tendencia central calculada a partir de los cuartiles, que combina la mediana con otros valores para una representación robusta de los datos.',
        },
        {
          termino: 'Tipos de gráficos',
          significado:
            'Diferentes formas de representación visual de datos, como histogramas, gráficos de barras y gráficos circulares, cada uno adecuado para tipos específicos de datos.',
        },
        {
          termino: 'Varianza',
          significado:
            'Medida de dispersión que indica la variabilidad de los datos respecto a la media; es el cuadrado de la desviación estándar.',
        },
        {
          termino: 'Visualización de datos',
          significado:
            'Representación gráfica de los datos para facilitar la interpretación de patrones y tendencias en los análisis estadísticos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
