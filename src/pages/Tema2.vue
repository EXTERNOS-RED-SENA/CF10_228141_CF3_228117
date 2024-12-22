<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Medidas de dispersión</h1>
      </div>
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/33.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Las <b>medidas de dispersi&oacute;n</b> son herramientas
            estad&iacute;sticas que describen qu&eacute; tan dispersos o
            esparcidos est&aacute;n los datos en un conjunto. Estas medidas
            indican la variabilidad de los datos alrededor de una medida de
            tendencia central, como la media o la mediana. Cuanto mayor sea la
            dispersi&oacute;n, m&aacute;s lejos estar&aacute;n los datos de la
            tendencia central, lo que refleja una mayor variabilidad en el
            conjunto de datos.
          </p>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5 my-3">
          <div class="titulo-sexto color-acento-contenido aos-init">
            <h5>Figura 2.</h5>
            <span>Medidas de dispersi&oacute;n.</span>
          </div>
          <img
            class="contions mx-auto aos-init img-t bg-img"
            src="@/assets/curso/temas/34.svg"
            alt="La Figura 2 se denomina «Medidas de dispersión», y muestra las diferentes medidas que indican la variabilidad de los datos alrededor de una medida de tendencia central."
          />
          <figcaption
            class="border border-secundary border-start-0 border-end-0 border-2 mt-2"
          >
            <p class="text-center text-dark mb-0">Fuente: OIT, 2024.</p>
          </figcaption>
        </div>
        <div class="col-lg-5 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/35.png" />
        </div>
      </div>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_2_1" class="titulo-segundo color-acento-botones">
          <h2>2.1&#x9;Rango</h2>
        </div>
        <p>
          El <b>rango</b> es la diferencia entre el valor m&aacute;s alto y el
          m&aacute;s bajo en un conjunto de datos. Es la medida de
          dispersi&oacute;n m&aacute;s simple y se usa para describir la
          amplitud total de los valores observados.
        </p>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-5 col-7 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/36.png" />
          </div>
          <div class="col-lg-7 my-3">
            <h5>Fórmula:</h5>
            <img class="img-t mb-4" src="@/assets/curso/temas/37.png" />
            <div class="brad p-3 h-100">
              <p class="mb-3"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/38.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el valor m&aacute;ximo del conjunto de datos.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/39.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el valor m&iacute;nimo del conjunto de datos.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg7 brad p-3 h-100">
              <p class="mb-3"><b class="text-white">Propiedades</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span class="text-white"
                    >Es f&aacute;cil de calcular, pero es muy sensible a los
                    valores at&iacute;picos, ya que solo depende de los
                    extremos.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span class="text-white"
                    >No proporciona informaci&oacute;n sobre c&oacute;mo se
                    distribuyen los datos entre los valores m&aacute;s altos y
                    bajos.</span
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
        <div id="t_2_2" class="titulo-segundo color-acento-botones">
          <h2>2.2&#x9;Desviaci&oacute;n media</h2>
        </div>
        <p>
          La<b>desviaci&oacute;n media</b> es la media de las diferencias
          absolutas entre cada valor del conjunto de datos y la media
          aritm&eacute;tica. Proporciona una medida del promedio de la
          dispersi&oacute;n sin considerar la direcci&oacute;n de las
          desviaciones.
        </p>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4 col-7 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/42.png" />
          </div>
          <div class="col-lg-8 my-3">
            <h5>Fórmula:</h5>
            <img
              class="img-t mb-4"
              src="@/assets/curso/temas/43.png"
              alt="la imagen muestra es la fórmula para calcular la desviación media de un conjunto de datos. Desviación media = Σ|xi - x̄| / n donde: xi representa cada uno de los valores del conjunto de datos; x̄ es la media aritmética del conjunto; n es el número total de observaciones. La fórmula calcula la desviación media sumando las diferencias absolutas entre cada valor y la media, y luego dividiendo entre el número total de datos."
            />
            <div class="brad p-3 h-100">
              <p class="mb-3"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/44.png"
                        alt="la imagen muestra es la fórmula para calcular la desviación media de un conjunto de datos. Desviación media = Σ|xi - x̄| / n donde: xi representa cada uno de los valores del conjunto de datos; x̄ es la media aritmética del conjunto; n es el número total de observaciones. La fórmula calcula la desviación media sumando las diferencias absolutas entre cada valor y la media, y luego dividiendo entre el número total de datos."
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">es cada valor del conjunto de datos.</p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/45.png"
                        alt="la imagen muestra es la fórmula para calcular la desviación media de un conjunto de datos. Desviación media = Σ|xi - x̄| / n donde: xi representa cada uno de los valores del conjunto de datos; x̄ es la media aritmética del conjunto; n es el número total de observaciones. La fórmula calcula la desviación media sumando las diferencias absolutas entre cada valor y la media, y luego dividiendo entre el número total de datos."
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">es la media aritm&eacute;tica.</p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/46.png"
                        alt="la imagen muestra es la fórmula para calcular la desviación media de un conjunto de datos. Desviación media = Σ|xi - x̄| / n donde: xi representa cada uno de los valores del conjunto de datos; x̄ es la media aritmética del conjunto; n es el número total de observaciones. La fórmula calcula la desviación media sumando las diferencias absolutas entre cada valor y la media, y luego dividiendo entre el número total de datos."
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el n&uacute;mero total de observaciones.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bgi brad p-3 h-100">
              <p class="mb-3"><b>Propiedades</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Es una medida intuitiva de la dispersi&oacute;n, pero no es
                    tan com&uacute;n como otras medidas como la varianza o la
                    desviaci&oacute;n est&aacute;ndar.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Utiliza las desviaciones absolutas, lo que evita que las
                    diferencias positivas y negativas se cancelen entre
                    s&iacute;.</span
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
        <div id="t_2_3" class="titulo-segundo color-acento-botones">
          <h2>2.3&#x9;Varianza</h2>
        </div>
        <p class="mb-5">
          La <b>varianza</b> es una medida que refleja el promedio de los
          cuadrados de las desviaciones de cada valor respecto a la media. La
          varianza indica qu&eacute; tan dispersos est&aacute;n los datos, y es
          una de las medidas m&aacute;s importantes en la estad&iacute;stica
          inferencial.
        </p>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-4 my-3 bg17 p-3 brad">
            <h5>Fórmula:</h5>
            <img class="img-t mb-4" src="@/assets/curso/temas/47.png" />
            <div class="brad p-3 h-100">
              <p class="mb-3"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/48.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">es cada valor del conjunto de datos.</p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/49.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">es la media aritm&eacute;tica.</p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/50.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el n&uacute;mero total de observaciones.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 my-3">
            <div>
              <p class="mb-3"><b>Propiedades</b></p>
              <div class="bg18 p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span
                      >La varianza utiliza los cuadrados de las desviaciones, lo
                      que magnifica el impacto de las observaciones m&aacute;s
                      alejadas de la media.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bg18 p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span
                      >Es muy &uacute;til para c&aacute;lculos
                      estad&iacute;sticos avanzados, pero su principal
                      desventaja es que est&aacute; en unidades cuadradas, lo
                      que puede hacer que sea dif&iacute;cil de interpretar
                      directamente.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-7 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/51.png" />
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_2_4" class="titulo-segundo color-acento-botones">
          <h2>2.4&#x9;Desviaci&oacute;n est&aacute;ndar</h2>
        </div>
        <p class="mb-5">
          La <b>desviaci&oacute;n est&aacute;ndar</b> es la ra&iacute;z cuadrada
          positiva de la varianza y es quiz&aacute;s la medida de
          dispersi&oacute;n m&aacute;s utilizada. A diferencia de la varianza,
          la desviaci&oacute;n est&aacute;ndar est&aacute; en las mismas
          unidades que los datos originales, lo que facilita su
          interpretaci&oacute;n.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-3 col-7 my-3">
            <img class="img-t img-a" src="@/assets/curso/temas/52.png" />
          </div>
          <div class="col-lg-5 my-3">
            <div class="bg17 p-3 brad h-100">
              <h5>Fórmula:</h5>
              <img class="img-t mb-4" src="@/assets/curso/temas/53.png" />
              <div class="brad p-3 h-100">
                <p class="mb-3"><b>Donde:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/54.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">
                          es la desviaci&oacute;n est&aacute;ndar.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/55.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">es cada valor del conjunto de datos.</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/56.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">es la media aritm&eacute;tica.</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/57.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">
                          es el n&uacute;mero total de observaciones.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 my-3">
            <div class="bg19 p-3 brad h-100">
              <p class="mb-3"><b>Propiedades</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Indica qu&eacute; tan dispersos est&aacute;n los valores
                    con respecto a la media.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Es f&aacute;cil de interpretar porque est&aacute; en las
                    mismas unidades que los datos originales.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Es sensible a los valores at&iacute;picos, ya que utiliza
                    las desviaciones cuadradas.</span
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
        <div id="t_2_5" class="titulo-segundo color-acento-botones">
          <h2>2.5&#x9;Coeficiente de variaci&oacute;n</h2>
        </div>
        <p class="mb-5">
          El <b>coeficiente de variaci&oacute;n (CV)</b> es una medida de
          dispersi&oacute;n relativa que expresa la desviaci&oacute;n
          est&aacute;ndar como un porcentaje de la media. Es &uacute;til para
          comparar la variabilidad entre diferentes conjuntos de datos que
          pueden tener diferentes unidades o medias.
        </p>
        <div class="row justify-content-center bg20 brad">
          <div class="col-lg-3 p-0">
            <img
              class="img-t d-lg-block d-none"
              src="@/assets/curso/temas/58.png"
            />
          </div>
          <div class="col-lg-4 my-3 my-lg-0 py-3">
            <div>
              <h5>Fórmula:</h5>
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/59.png"
                alt="la imagen muestra la fórmula para calcular el coeficiente de variación (CV), que es una medida de dispersión relativa. Específicamente: CV = (σ / x̄) x 100. σ representa la desviación estándar del conjunto de datos. x̄ representa la media aritmética del conjunto de datos. "
              />
              <div class="brad p-3 h-100">
                <p class="mb-3"><b>Donde:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/60.png"
                          alt="la imagen muestra la fórmula para calcular el coeficiente de variación (CV), que es una medida de dispersión relativa. Específicamente: CV = (σ / x̄) x 100. σ representa la desviación estándar del conjunto de datos. x̄ representa la media aritmética del conjunto de datos. "
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">
                          es la desviaci&oacute;n est&aacute;ndar.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/61.png"
                          alt="la imagen muestra la fórmula para calcular el coeficiente de variación (CV), que es una medida de dispersión relativa. Específicamente: CV = (σ / x̄) x 100. σ representa la desviación estándar del conjunto de datos. x̄ representa la media aritmética del conjunto de datos. "
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">es cada valor del conjunto de datos.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 my-3 my-lg-0 py-3">
            <div class="bg19 p-3 brad h-100">
              <p class="mb-3"><b>Propiedades</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Permite comparar la dispersi&oacute;n de diferentes
                    conjuntos de datos, incluso cuando tienen unidades o escalas
                    diferentes.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i
                  ><span
                    >Un coeficiente de variaci&oacute;n m&aacute;s alto indica
                    una mayor dispersi&oacute;n en relaci&oacute;n con la
                    media.</span
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
        <div id="t_2_6" class="titulo-segundo color-acento-botones">
          <h2>2.6&#x9;Rango intercuart&iacute;lico</h2>
        </div>
        <div class="row justify-content-center align-items-center mb-5">
          <div class="col-lg-auto">
            <img class="img-a img-t" src="@/assets/curso/temas/62.png" alt="" />
          </div>
          <div class="col pt-lg-0 pt-md-4">
            <p class="mb-0">
              El <b>rango intercuart&iacute;lico (IQR)</b> mide la
              dispersi&oacute;n de los datos entre el primer cuartil (Q1Q_1Q1) y
              el tercer cuartil (Q3Q_3Q3), es decir, la dispersi&oacute;n del 50
              % central de los datos. Es una medida robusta de
              dispersi&oacute;n, ya que no se ve afectada por valores
              at&iacute;picos.
            </p>
          </div>
        </div>
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-5 my-3 bg17 p-3 brad">
            <h5>Fórmula:</h5>
            <img
              class="img-t mb-4"
              src="@/assets/curso/temas/63.png"
              alt="la imagen muestra la fórmula para calcular el rango intercuartílico (IQR):IQR = Q3 - Q1. Q3 es el tercer cuartil, que representa el valor por debajo del cual se encuentra el 75 % de los datos. Q1 es el primer cuartil, que representa el valor por debajo del cual se encuentra el 25 % de los datos. El rango intercuartílico se calcula restando el primer cuartil (Q1) del tercer cuartil (Q3). Esta medida de dispersión nos informa sobre el rango de valores centrales, excluyendo los valores más altos y más bajos (los extremos)."
            />
            <div class="brad p-3 h-100">
              <p class="mb-3"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/64.png"
                        alt="la imagen muestra la fórmula para calcular el rango intercuartílico (IQR):IQR = Q3 - Q1. Q3 es el tercer cuartil, que representa el valor por debajo del cual se encuentra el 75 % de los datos. Q1 es el primer cuartil, que representa el valor por debajo del cual se encuentra el 25 % de los datos. El rango intercuartílico se calcula restando el primer cuartil (Q1) del tercer cuartil (Q3). Esta medida de dispersión nos informa sobre el rango de valores centrales, excluyendo los valores más altos y más bajos (los extremos)."
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el tercer cuartil (75 % de los datos por debajo).
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/65.png"
                        alt="la imagen muestra la fórmula para calcular el rango intercuartílico (IQR):IQR = Q3 - Q1. Q3 es el tercer cuartil, que representa el valor por debajo del cual se encuentra el 75 % de los datos. Q1 es el primer cuartil, que representa el valor por debajo del cual se encuentra el 25 % de los datos. El rango intercuartílico se calcula restando el primer cuartil (Q1) del tercer cuartil (Q3). Esta medida de dispersión nos informa sobre el rango de valores centrales, excluyendo los valores más altos y más bajos (los extremos)."
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        es el primer cuartil (25 % de los datos por debajo).
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 my-3">
            <div>
              <p class="mb-3"><b>Propiedades</b></p>
              <div class="bg18 p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span
                      >El rango intercuart&iacute;lico es m&aacute;s robusto que
                      la varianza o la desviaci&oacute;n est&aacute;ndar, ya que
                      excluye los extremos.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bg18 p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span
                      >Es &uacute;til cuando se quiere analizar la
                      dispersi&oacute;n central sin la influencia de valores
                      extremos o at&iacute;picos.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_2_7" class="titulo-segundo color-acento-botones">
          <h2>2.7&#x9;Amplitud de variaci&oacute;n</h2>
        </div>
        <p class="mb-5">
          La <b>amplitud de variaci&oacute;n</b> (rango total) es otra forma de
          medir la dispersi&oacute;n, y representa la diferencia entre el valor
          m&aacute;ximo y el m&iacute;nimo de un conjunto de datos.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-7 my-3 order-1">
            <div class="bg7 brad p-4">
              <h5 class="text-white">Fórmula:</h5>
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/63.png"
                alt="la imagen corresponde al rango intercuartílico (IQR), que mide la dispersión de los datos en un conjunto estadístico. La fórmula es: IQR=Q3 - Q1. "
              />
              <p class="mb-4 text-white"><b>Propiedades:</b></p>
              <div class="bgw p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span class="mb-0"
                      >Es una medida simple que ofrece una indicaci&oacute;n
                      r&aacute;pida de la variabilidad.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"> </i
                    ><span class="mb-0"
                      >No toma en cuenta c&oacute;mo se distribuyen los datos
                      entre el valor m&aacute;ximo y el m&iacute;nimo.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5 my-3 order-lg-2">
            <div>
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/67.png"
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
        <div id="t_2_8" class="titulo-segundo color-acento-botones">
          <h2>2.8&#x9;Coeficiente de variaci&oacute;n</h2>
        </div>
      </section>
      <div
        class="bloque-texto-g bloque-texto-g--inverso color-acento-botones p-3 p-sm-4 p-md-5"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/68.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            El coeficiente de variaci&oacute;n es una medida que estandariza la
            desviaci&oacute;n est&aacute;ndar respecto a la media, expresando la
            dispersi&oacute;n en t&eacute;rminos porcentuales.
          </p>
        </div>
      </div>
    </div>
  </div>
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
