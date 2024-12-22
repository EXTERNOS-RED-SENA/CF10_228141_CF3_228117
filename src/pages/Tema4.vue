<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Probabilidades</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/77.png" />
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg21 p-3 brad j1 h-100">
            <p class="mb-0">
              La <b>probabilidad</b> es una rama de la matem&aacute;tica que
              estudia la posibilidad de que ocurra un evento o fen&oacute;meno
              aleatorio. En estad&iacute;stica, la probabilidad permite
              cuantificar la incertidumbre asociada con los resultados de un
              experimento o evento, proporcionando una medida num&eacute;rica
              entre 0 y 1, donde 0 indica que el evento no ocurrir&aacute; y 1
              indica que el evento es seguro.
            </p>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-t img-a" src="@/assets/curso/temas/78.png" />
        </div>
      </div>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_1" class="titulo-segundo color-acento-botones">
          <h2>4.1&#x9;C&aacute;lculo de probabilidades</h2>
        </div>
        <p>
          La <b>probabilidad</b> de que ocurra un evento AAA se define como la
          proporci&oacute;n de casos favorables entre el n&uacute;mero total de
          casos posibles. La f&oacute;rmula b&aacute;sica es:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-7 my-3">
            <div class="bg21 brad p-3 h-100">
              <p class="mb-4"><b>F&oacute;rmula:</b></p>
              <img
                class="img-t mb-4 d-flex m-auto"
                src="@/assets/curso/temas/80.svg"
                alt="la imagen presenta la forma de calcular la probabilidad de ocurrencia de un evento A, que se define como: P(A) = Número de casos favorables / Número total de casos posibles. P(A) es la probabilidad del evento A. El número de casos favorables son las situaciones que cumplen la condición del evento. El número total de casos posibles incluye todas las situaciones que podrían ocurrir. Se divide el número de resultados favorables entre el número total de resultados posibles. Esto nos da la proporción o probabilidad de que ocurra el evento A."
              />
              <p class="mb-4"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span>P(A) es la probabilidad del evento A.</span>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >El <b>n&uacute;mero de casos favorables</b> son las
                    situaciones que cumplen la condici&oacute;n del
                    evento.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >El <b>n&uacute;mero total de casos posibles</b> incluye las
                    situaciones que podr&iacute;an ocurrir.</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 my-3">
            <div class="bgw brad p-4 h-100 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/79.png" />
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_2" class="titulo-segundo color-acento-botones">
          <h2>4.2&#x9;Probabilidades marginales</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-7 my-3">
            <p>
              Las <b>probabilidades</b> marginales se refieren a la probabilidad
              de que ocurra un solo evento sin considerar ning&uacute;n otro
              evento. Es la probabilidad simple de un evento particular.
            </p>
            <div class="bg7 brad p-4">
              <ul class="lista-ul--color fa-ul mb-4">
                <li>
                  <i class="fas fa-check v1"></i
                  ><span class="text-white"
                    ><b>Ejemplo:</b> En un lanzamiento de un dado de 6 caras, la
                    probabilidad marginal de obtener un n&uacute;mero par
                    (eventos favorables: 2, 4, 6) es:</span
                  >
                </li>
              </ul>
              <img
                class="img-t img-a"
                src="@/assets/curso/temas/81.png"
                alt="La imagen explica en el ejemplo proporcionado, un lanzamiento de un dado de 6 caras. La probabilidad marginal de obtener un número par (eventos favorables: 2, 4, 6) es: P(Número par) = 3/6 = 0.5. La fórmula muestra cómo se calcula esta probabilidad marginal, dividiendo el número de casos favorables entre el número total de casos posibles."
              />
            </div>
          </div>
          <div class="col-lg-5 my-3">
            <div class="bgw brad p-4 h-100 j1">
              <img
                class="img-t img-a"
                src="@/assets/curso/temas/82.png"
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
        <div id="t_4_3" class="titulo-segundo color-acento-botones">
          <h2>4.3&#x9;Regla de la adici&oacute;n</h2>
        </div>
        <p class="mb-4">
          La <b>regla de la adici&oacute;n</b> se utiliza para calcular la
          probabilidad de que ocurra uno de varios eventos. Existen dos casos:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/84.png" />
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg23 text-white p-4 brad h-100">
              <div class="row justify-content-start mb-4">
                <p class="col-lg-auto mb-4 bg11 text-white px-3">
                  <b>Eventos mutuamente excluyentes</b>
                </p>
              </div>
              <p>
                Son aquellos eventos que no pueden ocurrir al mismo tiempo. La
                probabilidad de que ocurra AAA o BBB es la suma de las
                probabilidades de cada evento:
              </p>
              <img
                class="img-t img-a"
                src="@/assets/curso/temas/82.svg"
                alt="la imagen presenta dos casos para calcular probabilidades cuando se tienen eventos mutuamente excluyentes y eventos no mutuamente excluyentes. Para eventos mutuamente excluyentes: son aquellos eventos que no pueden ocurrir al mismo tiempo. La probabilidad de que ocurra AAA o BBB es la suma de las probabilidades de cada evento: P(A o B) = P(A) + P(B). Para eventos no mutuamente excluyentes: son eventos que pueden ocurrir juntos.En este caso, es necesario restar la intersección de ambos eventos para evitar contar dos veces la probabilidad compartida: P(A o B) = P(A) + P(B) - P(A y B). La fórmula para eventos no mutuamente excluyentes nos dice que la probabilidad de que ocurra A o B es igual a la probabilidad de A más la probabilidad de B, menos la probabilidad de que ocurran A y B de forma conjunta. "
              />
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3 j1">
            <div class="bg24 text-white p-4 brad h-100">
              <div class="row justify-content-start mb-4">
                <p class="col-lg-auto mb-4 bg11 text-white px-3">
                  <b>Eventos no mutuamente excluyentes</b>
                </p>
              </div>
              <p>
                Son eventos que pueden ocurrir juntos. En este caso, es
                necesario restar la intersecci&oacute;n de ambos eventos:
              </p>
              <img
                class="img-t img-a"
                src="@/assets/curso/temas/83.svg"
                alt="la imagen presenta dos casos para calcular probabilidades cuando se tienen eventos mutuamente excluyentes y eventos no mutuamente excluyentes. Para eventos mutuamente excluyentes: son aquellos eventos que no pueden ocurrir al mismo tiempo. La probabilidad de que ocurra AAA o BBB es la suma de las probabilidades de cada evento: P(A o B) = P(A) + P(B). Para eventos no mutuamente excluyentes: son eventos que pueden ocurrir juntos.En este caso, es necesario restar la intersección de ambos eventos para evitar contar dos veces la probabilidad compartida: P(A o B) = P(A) + P(B) - P(A y B). La fórmula para eventos no mutuamente excluyentes nos dice que la probabilidad de que ocurra A o B es igual a la probabilidad de A más la probabilidad de B, menos la probabilidad de que ocurran A y B de forma conjunta. "
              />
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_4" class="titulo-segundo color-acento-botones">
          <h2>4.4&#x9;Regla de la multiplicaci&oacute;n</h2>
        </div>
        <p>
          La <b>regla de la multiplicaci&oacute;n </b> se utiliza para calcular
          la probabilidad de que ocurran dos o m&aacute;s eventos de manera
          conjunta (intersecci&oacute;n de eventos). Existen dos casos:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg17 p-4 brad h-100">
              <div class="row justify-content-start mb-4">
                <p class="col-lg-auto mb-2 bg11 text-white px-3">
                  <b>Eventos independientes</b>
                </p>
              </div>
              <p>
                Si los eventos no afectan la probabilidad del otro, la
                probabilidad conjunta de que ocurra AAA y BBB es:
              </p>
              <img
                class="img-t img-a"
                src="@/assets/curso/temas/85.svg"
                alt="La imagen explica la regla de la multiplicación en probabilidad, que se utiliza para calcular la probabilidad de que ocurran dos o más eventos de manera conjunta (intersección de eventos). Existen dos casos: En eventos independientes la fórmula para calcular la probabilidad conjunta es: P(A y B)=P(A)×P(B). P(A): probabilidad de que ocurra el evento AAA. P(B)P(B)P(B): Probabilidad de que ocurra el evento BBB. Se multiplican porque la probabilidad de que ambos ocurran no depende de que el otro haya sucedido. En eventos dependientes la fórmula para calcular la probabilidad conjunta es: P(A y B)=P(A)×P(B∣A). P(A): probabilidad de que ocurra el evento AAA. P(B∣A): Probabilidad de que ocurra el evento BBB dado que AAA ya ocurrió. La probabilidad de B se ajusta considerando que A ha ocurrido, lo que refleja su relación dependiente."
              />
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg7 text-white p-4 brad h-100">
              <div class="row justify-content-start mb-4">
                <p class="col-lg-auto mb-2 bg11 text-white px-3">
                  <b>Eventos dependientes</b>
                </p>
              </div>
              <p>
                Si los eventos est&aacute;n relacionados, la probabilidad
                conjunta se calcula:
              </p>
              <img
                class="img-t img-a mb-4"
                src="@/assets/curso/temas/86.svg"
                alt="La imagen explica la regla de la multiplicación en probabilidad, que se utiliza para calcular la probabilidad de que ocurran dos o más eventos de manera conjunta (intersección de eventos). Existen dos casos: En eventos independientes la fórmula para calcular la probabilidad conjunta es: P(A y B)=P(A)×P(B). P(A): probabilidad de que ocurra el evento AAA. P(B)P(B)P(B): Probabilidad de que ocurra el evento BBB. Se multiplican porque la probabilidad de que ambos ocurran no depende de que el otro haya sucedido. En eventos dependientes la fórmula para calcular la probabilidad conjunta es: P(A y B)=P(A)×P(B∣A). P(A): probabilidad de que ocurra el evento AAA. P(B∣A): Probabilidad de que ocurra el evento BBB dado que AAA ya ocurrió. La probabilidad de B se ajusta considerando que A ha ocurrido, lo que refleja su relación dependiente."
              />
              <p>
                Donde P(B|A) es la probabilidad de que ocurra B dado que ya
                ocurri&oacute; A.
              </p>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/87.png" />
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_5" class="titulo-segundo color-acento-botones">
          <h2>4.5&#x9;Teorema de Bayes</h2>
        </div>
        <p>
          El <b>teorema de Bayes</b> es una f&oacute;rmula que describe la
          probabilidad de que ocurra un evento AAA, dado que ya ha ocurrido otro
          evento BBB. Este teorema es &uacute;til cuando se tiene
          informaci&oacute;n condicional sobre la probabilidad de un evento y se
          desea actualizar esa probabilidad a la luz de nueva
          informaci&oacute;n.
        </p>
        <div class="row justify-content-center mb-4">
          <div class="col-lg-3 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/88.png" />
          </div>
          <div class="col-lg-7 my-lg-0 my-3">
            <div class="bg25 brad p-3 h-100">
              <p class="mb-4"><b>F&oacute;rmula:</b></p>
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/89.svg"
                alt="la imagen muestra la fórmula de teorema de Bayes. Es: P(B|A) = (P(B|A) x P(A)) / P(B). P(B|A) es la probabilidad de A dado B. P(A|B) es la probabilidad de B dado A. P(A) y P(B) son las probabilidades marginales de A y B, respectivamente. "
              />
              <p class="mb-4"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span>P(B|A) es la probabilidad de A dado B.</span>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span>P(A|B) es la probabilidad de B dado A.</span>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >P(A) y P(B) son las probabilidades marginales de A y B,
                    respectivamente.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row justify-content-start mb-5">
          <div class="col-auto">
            <div class="list">
              <div class="list__item">
                <div class="list__item__icon">
                  <img src="@/assets/curso/temas/icon.svg" alt="" />
                </div>
              </div>
              <div class="list__txt bgicon brad p-0 px-4 text-white">
                <h4 class="mb-0">Distribuci&oacute;n de probabilidades</h4>
              </div>
            </div>
          </div>
        </div>
        <p class="mb-4">
          Una <b>distribuci&oacute;n de probabilidades</b> describe c&oacute;mo
          se distribuyen las probabilidades entre los diferentes resultados de
          un experimento aleatorio. Hay diferentes tipos de distribuciones de
          probabilidad, seg&uacute;n el tipo de variable (discreta o continua) y
          el contexto del problema.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg15 p-4 brad h-100">
              <img class="img-t img-a mb-4" src="@/assets/curso/temas/90.png" />
              <div class="row justify-content-center mb-4">
                <p class="col-lg-auto mb-2 bg26 px-3">
                  <b>Distribuci&oacute;n de probabilidad discreta</b>
                </p>
              </div>
              <p>
                Describe la probabilidad de que una variable aleatoria discreta
                tome ciertos valores. Ejemplos incluyen la distribuci&oacute;n
                binomial o la distribuci&oacute;n de Poisson.
              </p>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg15 p-4 brad h-100">
              <img class="img-t img-a mb-4" src="@/assets/curso/temas/91.png" />
              <div class="row justify-content-center mb-4">
                <p class="col-lg-auto mb-2 bg26 px-3">
                  <b>Distribuci&oacute;n de probabilidad discreta</b>
                </p>
              </div>
              <p>
                Describe la probabilidad de que una variable aleatoria continua
                caiga dentro de un rango de valores. Ejemplos incluyen la
                distribuci&oacute;n normal y la distribuci&oacute;n uniforme.
              </p>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/92.png" />
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_6" class="titulo-segundo color-acento-botones">
          <h2>4.6&#x9;Distribuci&oacute;n normal</h2>
        </div>
        <p class="mb-5">
          La <b>distribuci&oacute;n normal</b>, tambi&eacute;n conocida como
          campana de Gauss, es una de las distribuciones de probabilidad
          m&aacute;s importantes en estad&iacute;stica. Muchos fen&oacute;menos
          naturales y sociales siguen una distribuci&oacute;n normal.
          Est&aacute; completamente definida por dos par&aacute;metros: la media
          (&mu;\mu&mu;) y la desviaci&oacute;n est&aacute;ndar
          (&sigma;\sigma&sigma;).
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-8 my-lg-0 my-3">
            <div class="bg19 br-d brad p-3 h-100">
              <div class="row justify-content-center">
                <div class="col-lg-3 my-lg-0 my-3 j1">
                  <img class="img-t img-a" src="@/assets/curso/temas/93.png" />
                </div>
                <div class="col-lg-9 my-lg-0 my-3">
                  <div>
                    <p><b>Caracter&iacute;sticas:</b></p>
                    <ul class="lista-ul--color fa-ul">
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span>Es sim&eacute;trica respecto a la media.</span>
                      </li>
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span
                          >La media, la mediana y la moda son iguales.</span
                        >
                      </li>
                      <li class="mb-3">
                        <i class="fas fa-check v1"></i
                        ><span
                          >Aproximadamente el 68% de los datos se encuentra
                          dentro de una desviaci&oacute;n est&aacute;ndar de la
                          media, el 95% dentro de dos desviaciones
                          est&aacute;ndar, y el 99.7% dentro de tres
                          desviaciones est&aacute;ndar (regla
                          emp&iacute;rica).</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/94.png" />
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_4_7" class="titulo-segundo color-acento-botones">
          <h2>4.7&#x9;Distribuci&oacute;n <em>t-student</em></h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-3 my-lg-0 my-3 j1">
            <img class="img-t img-a" src="@/assets/curso/temas/95.png" />
          </div>
          <div class="col-lg-9 my-lg-0 my-3">
            <p>
              La <b>distribuci&oacute;n <em>t-student</em></b> se utiliza cuando
              el tama&ntilde;o de la muestra es peque&ntilde;o y la
              desviaci&oacute;n est&aacute;ndar de la poblaci&oacute;n es
              desconocida. Es similar a la distribuci&oacute;n normal, pero con
              colas m&aacute;s gruesas, lo que refleja una mayor probabilidad de
              valores extremos.
            </p>
            <div class="bg17 br-d brad p-4">
              <p class="mb-4"><b>Aplicaciones:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >La distribuci&oacute;n t se utiliza principalmente en
                    pruebas de hip&oacute;tesis, como la prueba t, cuando se
                    trabaja con muestras peque&ntilde;as (generalmente n &gt;
                    30n &gt; 30n &gt; 30).</span
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
        <div id="t_4_8" class="titulo-segundo color-acento-botones">
          <h2>4.8&#x9;Prueba de valor z</h2>
        </div>
        <p>
          La <b>prueba de valor z</b> es una t&eacute;cnica estad&iacute;stica
          que permite calcular la probabilidad de que una observaci&oacute;n en
          particular est&eacute; alejada de la media de un conjunto de datos,
          medida en unidades de desviaci&oacute;n est&aacute;ndar.
        </p>
        <div class="row justify-content-center mb-4">
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg27 brad p-3 h-100 j1">
              <img class="img-t img-a" src="@/assets/curso/temas/97.png" />
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg25 brad p-3 h-100">
              <p class="mb-4"><b>F&oacute;rmula:</b></p>
              <img
                class="img-t mb-4"
                src="@/assets/curso/temas/96.svg"
                alt="la imagen muestra la fórmula de la prueba de valor z. Es: z = (x - μ) / σ. x es el valor de la observación. μ es la media de la población. σ es la desviación estándar de la población."
              />
              <p class="mb-4"><b>Donde:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <p>x es el valor de la observaci&oacute;n.</p>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <p>&mu; es la media de la poblaci&oacute;n.</p>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <p>
                    &sigma; es la desviaci&oacute;n est&aacute;ndar de la
                    poblaci&oacute;n.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg21 brad p-3 h-100">
              <p class="mb-4"><b>Interpretaci&oacute;n:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <p>
                    Un valor z positivo indica que el valor est&aacute; por
                    encima de la media.
                  </p>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <p>
                    Un valor z negativo indica que el valor est&aacute; por
                    debajo de la media.
                  </p>
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
        <div id="t_4_9" class="titulo-segundo color-acento-botones">
          <h2>
            4.9&#x9;Aplicaciones de la probabilidad en el an&aacute;lisis
            estad&iacute;stico
          </h2>
        </div>
        <p class="mb-4">
          La probabilidad se utiliza en una amplia variedad de aplicaciones en
          el an&aacute;lisis estad&iacute;stico, desde la estimaci&oacute;n de
          probabilidades de eventos simples hasta la toma de decisiones basada
          en informaci&oacute;n incompleta o incierta. Algunos ejemplos de uso
          incluyen:
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg15 p-4 brad h-100">
              <img class="img-t img-a mb-4" src="@/assets/curso/temas/98.png" />
              <div class="row justify-content-center mb-4">
                <p class="col-lg-auto mb-2 bg26 px-3">
                  <b>Pruebas de hip&oacute;tesis</b>
                </p>
              </div>
              <p>
                Se utilizan probabilidades para evaluar si una hip&oacute;tesis
                es v&aacute;lida o no, con base en la evidencia de los datos
                muestrales.
              </p>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg15 p-4 brad h-100">
              <img class="img-t img-a mb-4" src="@/assets/curso/temas/99.png" />
              <div class="row justify-content-center mb-4">
                <p class="col-lg-auto mb-2 bg26 px-3">
                  <b>Modelos predictivos</b>
                </p>
              </div>
              <p>
                La probabilidad es fundamental en modelos predictivos, como el
                an&aacute;lisis de regresi&oacute;n y las redes bayesianas,
                donde se calcula la probabilidad de resultados futuros con base
                en datos hist&oacute;ricos.
              </p>
            </div>
          </div>
          <div class="col-lg-4 my-lg-0 my-3">
            <div class="bg15 p-4 brad h-100">
              <img
                class="img-t img-a mb-4"
                src="@/assets/curso/temas/100.png"
              />
              <div class="row justify-content-center mb-4">
                <p class="col-lg-auto mb-2 bg26 px-3">
                  <b>Toma de decisiones</b>
                </p>
              </div>
              <p>
                En la teor&iacute;a de la decisi&oacute;n, se usan
                probabilidades para evaluar el riesgo y la incertidumbre en
                situaciones donde se deben tomar decisiones, como en inversiones
                o an&aacute;lisis de riesgos.
              </p>
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
