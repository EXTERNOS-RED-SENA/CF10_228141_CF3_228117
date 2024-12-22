<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Medidas de posición</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-3 h-100 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/69.png" />
        </div>
        <div class="col-lg-5 my-3">
          <div class="bg17 p-3 brad">
            <p class="mb-0">
              Las <b>medidas de posici&oacute;n</b> son herramientas
              estad&iacute;sticas que permiten dividir un conjunto de datos en
              partes iguales para identificar la ubicaci&oacute;n de un valor en
              relaci&oacute;n con el resto del conjunto. Estas medidas son
              fundamentales para describir la posici&oacute;n relativa de una
              observaci&oacute;n dentro de una distribuci&oacute;n. Las
              principales medidas de posici&oacute;n son los
              <b>cuartiles, deciles y percentiles</b>, que permiten dividir los
              datos en diferentes porcentajes, y tambi&eacute;n se utilizan para
              identificar valores at&iacute;picos.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-3">
          <img class="img-t img-a" src="@/assets/curso/temas/70.png" />
        </div>
      </div>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_3_1" class="titulo-segundo color-acento-botones">
          <h2>3.1&#x9;Cuartiles</h2>
        </div>
        <p>
          Los <b>cuartiles</b> dividen un conjunto de datos ordenados en cuatro
          partes iguales, de modo que cada cuartil contiene el 25% de los datos.
          Los cuartiles son particularmente &uacute;tiles para describir la
          dispersi&oacute;n de los datos y su distribuci&oacute;n en el rango
          intercuart&iacute;lico.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-5 my-3">
            <div class="bg10 brad p-4 h-100">
              <p class="mb-4"><b>F&oacute;rmula:</b></p>
              <div class="bgw p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Primer cuartil</b> (Q1): Valor que deja por debajo al
                      25% de los datos.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad my-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Segundo cuartil</b> (Q2): Valor que deja por debajo al
                      50% de los datos (es equivalente a la mediana).</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      ><b>Tercer cuartil</b> (Q3): Valor que deja por debajo al
                      75% de los datos.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 my-3">
            <div class="bg21 brad p-4 h-100">
              <p class="mb-4"><b>Interpretaci&oacute;n:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Q1 divide el conjunto en un 25% de valores por debajo y un
                    75% por encima.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Q2, o mediana, divide el conjunto en dos partes
                    iguales.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Q3 divide el conjunto en un 75% de valores por debajo y un
                    25% por encima.</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 my-3">
            <div class="bg14 brad p-4 h-100 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/71.svg" />
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_3_2" class="titulo-segundo color-acento-botones">
          <h2>3.2&#x9;Deciles</h2>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-8 my-3">
            <p>
              Los <b>deciles</b> dividen el conjunto de datos en diez partes
              iguales, de modo que cada decil contiene el 10% de las
              observaciones. Son &uacute;tiles para observar la posici&oacute;n
              de un valor dentro de una divisi&oacute;n m&aacute;s detallada del
              conjunto de datos que los cuartiles.
            </p>
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-auto my-3">
                <img class="img-t img-a" src="@/assets/curso/temas/72.png" />
              </div>
              <div class="col my-3">
                <p class="mb-4"><b>F&oacute;rmula:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Primer decil</b> (D<sub>1</sub>): Valor que deja por
                      debajo al 10% de los datos.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Segundo decil</b> (D<sub>2</sub>): Valor que deja por
                      debajo al 20% de los datos.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i><span> ... </span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      ><b>Noveno decil</b> (D<sub>9</sub>): Valor que deja por
                      debajo al 90% de los datos.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="bg22 brad p-4 h-100">
              <p class="mb-4"><b>Interpretaci&oacute;n:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Cada decil indica la posici&oacute;n del conjunto de datos
                    en fracciones del 10 %, proporcionando una idea m&aacute;s
                    granular de c&oacute;mo se distribuyen los valores.</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/73.png" />
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_3_3" class="titulo-segundo color-acento-botones">
          <h2>3.3&#x9;Percentiles</h2>
        </div>
        <p>
          Los <b>percentiles</b> dividen un conjunto de datos en cien partes
          iguales, de modo que cada percentil contiene el 1 % de las
          observaciones. Los percentiles son ampliamente utilizados en muchos
          campos, como la educaci&oacute;n y la salud, para determinar la
          posici&oacute;n relativa de un individuo o una observaci&oacute;n
          dentro de una poblaci&oacute;n.
        </p>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/74.png" />
          </div>
          <div class="col-lg-8 my-3">
            <p class="mb-4"><b>F&oacute;rmula:</b></p>
            <ul class="lista-ul--color fa-ul">
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Primer percentil (P<sub>1</sub>)</b>: Valor que deja por
                  debajo al 1 % de los datos.</span
                >
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i>
                <p>
                  <b>D&eacute;cimo percentil (P<sub>10</sub>)</b>: Valor que
                  deja por debajo al 10 % de los datos.
                </p>
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  ><b></b><b>Percentil 50 (P<sub>50</sub>):</b> Es equivalente a
                  la mediana, ya que deja por debajo al 50 % de los datos.</span
                >
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  ><b>Percentil 90 (P<sub>90</sub>):</b> Valor que deja por
                  debajo al 90% de los datos.</span
                >
              </li>
            </ul>
            <div class="bg7 brad p-4 h-100">
              <p class="mb-4">
                <b class="text-white">Interpretaci&oacute;n:</b>
              </p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span class="text-white"
                    >El percentil proporciona informaci&oacute;n sobre la
                    posici&oacute;n de un valor respecto a un grupo m&aacute;s
                    amplio. Por ejemplo, si una persona se encuentra en el
                    percentil 80 de un examen, significa que su
                    puntuaci&oacute;n es superior a la del 80% de los
                    participantes.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_3_4" class="titulo-segundo color-acento-botones">
          <h2>3.4&#x9;Rango intercuart&iacute;lico</h2>
        </div>
        <p>
          El <b>rango intercuart&iacute;lico (IQR)</b> es una medida de
          dispersi&oacute;n que se basa en los cuartiles y representa la
          diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1). Es
          &uacute;til para medir la variabilidad de la parte central de los
          datos, eliminando el efecto de los valores extremos o at&iacute;picos.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-9 my-3">
            <div class="bg17 brad p-4 h-100">
              <p class="mb-4"><b>F&oacute;rmula:</b></p>
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/76.png"
                alt="La imagen proporciona información educativa sobre el rango intercuartílico (IQR). Se presenta la fórmula del rango: IQR=Q3 - Q1, donde Q3Q_3Q3  representa el tercer cuartil y Q1Q_1Q1 el primer cuartil. "
              />
              <p class="mb-4"><b>Interpretaci&oacute;n:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >El rango intercuart&iacute;lico mide la dispersi&oacute;n
                    del 50% central de los datos, lo que proporciona una
                    visi&oacute;n m&aacute;s clara de c&oacute;mo est&aacute;n
                    distribuidos los valores centrales del conjunto.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Es menos sensible a los valores extremos que otras medidas
                    de dispersi&oacute;n, como la desviaci&oacute;n
                    est&aacute;ndar.</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-7 my-3">
            <div class="bgw brad p-4 h-100 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/75.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
