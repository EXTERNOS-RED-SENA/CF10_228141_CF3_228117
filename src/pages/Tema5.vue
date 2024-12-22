<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>5</span></div>
        <h1>Gráficos estadísticos</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div
            class="row justify-content-center align-items-center bg7 p-4 brad text-white"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/101.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Los gr&aacute;ficos estad&iacute;sticos son representaciones
                visuales de datos que permiten observar tendencias, patrones y
                relaciones dentro de un conjunto de datos. Son herramientas
                poderosas para simplificar y comunicar resultados complejos de
                manera clara y concisa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_5_1" class="titulo-segundo color-acento-botones">
          <h2>5.1&#x9;Tipos de gr&aacute;ficos</h2>
        </div>
        <p>
          Existen varios tipos de gr&aacute;ficos que se pueden utilizar
          seg&uacute;n el tipo de datos y el objetivo del an&aacute;lisis.
        </p>
        <div class="titulo-sexto color-acento-contenido aos-init mt-5">
          <h5>Tabla 1.</h5>
          <span>Tipos de gr&aacute;ficos</span>
        </div>
        <div class="tabla-a color-acento-botones mb-5">
          <table>
            <thead class="border-0">
              <tr class="text-center">
                <th style="background-color: #3ba935">Gr&aacute;fico</th>
                <th style="background-color: #3ba935">Descripci&oacute;n</th>
                <th style="background-color: #3ba935">
                  Caracter&iacute;sticas
                </th>
                <th style="background-color: #3ba935">Aplicaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">Histograma.</td>
                <td>
                  Representación gráfica de la distribución de una variable
                  cuantitativa, donde la altura de cada barra representa la
                  frecuencia en intervalos o clases.
                </td>
                <td>
                  - Para variables cuantitativas (discretas o continuas).<br /><br />-
                  Muestra la forma de la distribución (simétrica, sesgada,
                  multimodal).<br /><br />- Permite visualizar la concentración
                  de datos en ciertos rangos.
                </td>
                <td>
                  - Distribución de edades en una población.<br /><br />-
                  Distribución de ingresos en una empresa.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Gráfico de barras</td>
                <td>
                  Representa datos cualitativos o categóricos mediante barras
                  donde la altura indica la frecuencia o porcentaje de cada
                  categoría.
                </td>
                <td>
                  - Para variables cualitativas (nominales u ordinales).<br /><br />-
                  Las barras no se tocan entre sí.<br /><br />- Ideal para
                  comparar varias categorías.
                </td>
                <td>
                  - Preferencias de consumidores para marcas.<br /><br />-
                  Cantidad de personas en diferentes grupos demográficos.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Diagrama de tallos y hojas</td>
                <td>
                  El diagrama de tallos y hojas es una representación gráfica de
                  datos numéricos que muestra la distribución y la forma de los
                  datos, dividiéndolos en "tallos" (dígitos principales) y
                  "hojas" (dígitos restantes). Esto permite ver cada valor
                  individual al tiempo que se muestra la estructura general de
                  la distribución.
                </td>
                <td>
                  - Se utiliza principalmente para datos numéricos,
                  especialmente con valores de dos o más dígitos.<br /><br />-
                  Cada "tallo" representa una categoría o rango de valores
                  principales.<br /><br />- Cada "hoja" representa la parte
                  final de cada dato, permitiendo visualizar valores
                  individuales.<br /><br />- Es una herramienta útil para ver la
                  dispersión y concentración de datos, similar a un histograma
                  pero sin perder el detalle de cada valor.
                </td>
                <td>
                  - Análisis exploratorio de datos en pequeñas muestras.<br /><br />-
                  Visualización de distribuciones en contextos educativos y
                  estadísticos básicos.<br /><br />- Comparación rápida de dos
                  conjuntos de datos en un mismo diagrama (usando dos columnas
                  de hojas en cada lado de un tallo común).<br /><br />- Útil
                  para detectar patrones, tendencias y valores atípicos en datos
                  numéricos.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Gráfico circular</td>
                <td>
                  También llamado gráfico de pastel muestra la proporción o
                  porcentaje de cada categoría respecto al total mediante
                  sectores proporcionales.
                </td>
                <td>
                  - Para datos cualitativos nominales.<br /><br />- Ideal para
                  proporciones o porcentajes.<br /><br />- No adecuado para
                  categorías con pequeñas diferencias en proporciones.
                </td>
                <td>
                  - Participación de mercado de empresas.<br /><br />-
                  Distribución de votos en una elección.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Polígono de frecuencias</td>
                <td>
                  Gráfico de líneas que conecta los puntos medios de los
                  intervalos de un histograma, útil para observar la forma de la
                  distribución de los datos de manera continua y comparar
                  diferentes conjuntos de datos.
                </td>
                <td>
                  - Para variables cuantitativas continuas.<br /><br />- Conecta
                  puntos medios de intervalos de clase.<br /><br />- Puede
                  superponerse con otros polígonos para comparar distribuciones.
                </td>
                <td>
                  - Comparar puntuaciones en exámenes.<br /><br />- Evolución de
                  la temperatura en diferentes horas del día.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Ojiva</td>
                <td>
                  Representación gráfica de la frecuencia acumulada o relativa
                  acumulada de los datos, mostrando cómo se acumulan las
                  frecuencias al aumentar los valores de la variable.
                </td>
                <td>
                  - Para variables cuantitativas.<br /><br />- Los puntos
                  representan frecuencias acumuladas conectadas por líneas.<br /><br />-
                  Permite calcular percentiles y cuartiles visualmente.
                </td>
                <td>
                  - Proporción acumulada de empleados con ciertos ingresos.<br /><br />-
                  Estudiantes con calificaciones bajo cierto valor.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">Diagrama de dispersión</td>
                <td>
                  Muestra la relación entre dos variables cuantitativas mediante
                  puntos (x, y), útil para observar correlaciones o tendencias
                  entre las variables.
                </td>
                <td>
                  - Para relaciones entre dos variables cuantitativas.<br /><br />-
                  Permite identificar tendencias lineales o no lineales.<br /><br />-
                  Útil para detectar relaciones directas, inversas o la ausencia
                  de relación.
                </td>
                <td>
                  - Relación entre peso y altura.<br /><br />- Relación entre
                  tiempo de estudio y rendimiento académico.
                </td>
              </tr>
              <tr>
                <td class="fw-bold">
                  <em>Boxplot</em> (Diagrama de caja y bigotes)
                </td>
                <td>
                  Gráfico que representa la dispersión de un conjunto de datos,
                  mostrando el rango intercuartílico, la mediana y los valores
                  atípicos mediante una caja y "bigotes".
                </td>
                <td>
                  - Resume la distribución de datos y muestra valores
                  atípicos.<br /><br />- Muestra cuartiles y mediana, indicando
                  simetría o asimetría.<br /><br />- Permite comparar
                  distribuciones entre grupos.
                </td>
                <td>
                  - Comparar ingresos entre departamentos.<br /><br />- Evaluar
                  la dispersión de puntuaciones en un examen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <figcaption
          class="border border-secundary border-start-0 border-end-0 border-2 mt-2"
        >
          <p class="text-center text-dark mb-0">Fuente: OIT, 2024.</p>
        </figcaption>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_5_2" class="titulo-segundo color-acento-botones">
          <h2>
            5.2&#x9;Elecci&oacute;n del gr&aacute;fico adecuado seg&uacute;n el
            tipo de datos
          </h2>
        </div>
        <p>
          La elecci&oacute;n del gr&aacute;fico adecuado depende del tipo de
          datos y del objetivo del an&aacute;lisis. Algunas pautas generales
          para seleccionar el gr&aacute;fico correcto son:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-8 my-3">
            <div class="bg15 brad br-d h-100 p-4">
              <div class="row justify-content-center">
                <div class="col-lg-3 my-lg-0 my-3 j1">
                  <img class="img-t img-a" src="@/assets/curso/temas/102.png" />
                </div>
                <div class="col-lg-9 my-lg-0 my-3 j1">
                  <div>
                    <ul class="lista-ul--color fa-ul">
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span class="mb-0"
                          ><b>Datos cualitativos:</b> Gr&aacute;fico de barras o
                          gr&aacute;fico circular.</span
                        >
                      </li>
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span class="mb-0"
                          ><b>Datos cuantitativos continuos:</b> Histograma,
                          pol&iacute;gono de frecuencias, ojiva.</span
                        >
                      </li>
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span class="mb-0"
                          ><b>Comparaci&oacute;n de distribuciones:</b>
                          <em> Boxplot</em>, histograma.</span
                        >
                      </li>
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span class="mb-0"
                          ><b>Relaci&oacute;n entre dos variables:</b> Diagrama
                          de dispersi&oacute;n.</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 my-3 j1">
            <div>
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/103.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_5_3" class="titulo-segundo color-acento-botones">
          <h2>
            5.3&#x9;Interpretaci&oacute;n de gr&aacute;ficos estad&iacute;sticos
          </h2>
        </div>
        <p class="mb-5">
          La correcta <b>interpretaci&oacute;n</b> de los gr&aacute;ficos
          estad&iacute;sticos sirve para extraer conclusiones v&aacute;lidas de
          los datos. Al interpretar gr&aacute;ficos, es importante prestar
          atenci&oacute;n a:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-lg-0 my-3 j1">
            <div>
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/104.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-8 my-lg-0 my-3">
            <div class="bg7 brad p-4">
              <div class="bgw p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Distribuci&oacute;n:</b> Observar si los datos son
                      sim&eacute;tricos, sesgados o multimodales.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Tendencias:</b> Identificar patrones ascendentes,
                      descendentes o c&iacute;clicos en los datos.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Relaciones:</b> En diagramas de dispersi&oacute;n,
                      buscar correlaciones o asociaciones entre las
                      variables.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Valores at&iacute;picos:</b> Detectar puntos que se
                      alejan significativamente del resto del conjunto de datos
                      (particularmente en <em>boxplots</em>).</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema5',
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
