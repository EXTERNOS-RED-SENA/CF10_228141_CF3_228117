<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Medidas de tendencia central</h1>
      </div>
      <p>
        Las medidas de tendencia central son valores que resumen un conjunto de
        datos, indicando el punto central o típico alrededor del cual los datos
        tienden a agruparse. Estas medidas proporcionan información sobre la
        distribución de los datos y permiten describir el comportamiento general
        de la muestra o población.
      </p>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5 my-3">
          <div class="titulo-sexto color-acento-contenido aos-init">
            <h5>Figura 1.</h5>
            <span>Medidas de tendencia central</span>
          </div>
          <img
            class="contions mx-auto aos-init img-t bg-img"
            src="@/assets/curso/temas/figura1.svg"
            alt="La Figura 1 se denomina «Medidas de tendencia central», y muestra las diferentes medidas que proporcionan información sobre la distribución de los datos y permiten describir el comportamiento general de la muestra o población."
          />
          <figcaption
            class="border border-secundary border-start-0 border-end-0 border-2 mt-2"
          >
            <p class="text-center text-dark mb-0">Fuente: OIT, 2024.</p>
          </figcaption>
        </div>
        <div class="col-lg-5 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/4.png" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-botones">
        <h2>1.1 Media aritmética</h2>
      </div>
      <p class="mb-5">
        La <b>media aritm&eacute;tica</b>, tambi&eacute;n conocida simplemente
        como media, es la medida de tendencia central m&aacute;s utilizada. Se
        calcula sumando todos los valores de los datos y dividiendo el resultado
        entre el n&uacute;mero total de observaciones. La media es especialmente
        &uacute;til cuando los datos est&aacute;n distribuidos de manera
        sim&eacute;trica, ya que refleja el valor promedio del conjunto.
      </p>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-3 my-3">
          <img
            class="img-t img-a d-lg-block d-none"
            src="@/assets/curso/temas/5.png"
          />
        </div>
        <div class="col-lg-7 my-3">
          <h5>Formula:</h5>
          <img
            class="img-t mb-4"
            src="@/assets/curso/temas/f-1.png"
            alt="Texto alternativo: La imagen muestra una representación visual educativa para calcular la media aritmética. La media aritmética (representada por la letra x con una barra encima) se calcula sumando todos los valores (xi) y dividiendo entre el número total de valores (n). La sumatoria de los valores (Σxi) representa la suma de todos los valores individuales. n representa el número total de valores o observaciones en el conjunto de datos. Al dividir la sumatoria de los valores entre el número total de valores, se obtiene la media aritmética, que es la medida de tendencia central que representa el valor promedio del conjunto."
          />
          <div class="brad p-3 h-100">
            <div class="mb-3">
              <b>Donde:</b>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"> </i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/6.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">es la medida aritm&eacute;tica.</p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/7.png"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p class="mb-0">
                        representa cada uno de los valores del conjunto de
                        datos.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i>
                  <div class="row justify-content-center align-items-center">
                    <div class="col-auto">
                      <img
                        class="img-a img-t"
                        src="@/assets/curso/temas/8.png"
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
          <div class="bg9 brad p-3 h-100">
            <p class="mb-3"><b>Propiedades</b></p>
            <ul class="lista-ul--color fa-ul">
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span>Es f&aacute;cil de calcular y comprender.</span>
              </li>
              <li class="mb-3">
                <i class="fas fa-check v1"></i
                ><span
                  >Afectada por valores at&iacute;picos (<em>outliers</em>), lo
                  que puede distorsionar la interpretaci&oacute;n.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_1_2" class="titulo-segundo color-acento-botones">
          <h2>1.2&#x9;Mediana</h2>
        </div>
        <div class="row justify-content-center align-items-center mb-5">
          <div class="col-lg-auto">
            <img
              class="img-a img-t mb-lg-0 mb-3"
              src="@/assets/curso/temas/9.png"
              alt=""
            />
          </div>
          <div class="col pt-lg-0 pt-md-4">
            <p class="mb-0">
              La <b>mediana</b> es el valor central de un conjunto de datos
              ordenado de menor a mayor. Divide el conjunto de datos en dos
              partes iguales, de tal manera que el 50 % de las observaciones son
              menores o iguales a la mediana, y el 50 % son mayores o iguales a
              ella. A diferencia de la media, la mediana no se ve afectada por
              valores at&iacute;picos, lo que la convierte en una medida
              m&aacute;s robusta en distribuciones asim&eacute;tricas.
            </p>
            <p></p>
          </div>
        </div>
        <div class="mb-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 my-3">
              <div class="bg10 brad p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/10.png"
                />
                <div class="row justify-content-center mb-4">
                  <p class="col-lg-auto mb-4 bg11 text-white px-4 text-center">
                    <b>C&aacute;lculo:</b>
                  </p>
                </div>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Si el n&uacute;mero de observaciones es impar, la mediana
                      es el valor que ocupa la posici&oacute;n central.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Si el n&uacute;mero de observaciones es par, la mediana
                      es el promedio de los dos valores centrales.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 my-3">
              <div class="bg10 brad p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/11.png"
                />
                <div class="row justify-content-center mb-4">
                  <p
                    class="col-lg-auto mb-4 bg11 text-white px-4 &lt;p class="
                    mb-4=""
                    bg4=""
                  >
                    <b>Propiedades:</b>
                  </p>
                </div>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span>No est&aacute; afectada por valores extremos.</span>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Es &uacute;til para distribuciones sesgadas, ya que
                      ofrece una representaci&oacute;n m&aacute;s precisa del
                      valor central.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 my-3">
              <div class="bg13 brad p-4 h-100">
                <img class="img-t img-a" src="@/assets/curso/temas/12.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_1_3" class="titulo-segundo color-acento-botones">
          <h2>1.3&#x9;Moda</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 my-3 order-1">
            <p>
              La <b>moda</b> es el valor o los valores que m&aacute;s se repiten
              en un conjunto de datos. Es &uacute;til cuando se desea
              identificar el valor m&aacute;s frecuente en la
              distribuci&oacute;n. Puede haber distribuciones
              <b>unimodales</b> (con una moda), <b>bimodales</b> (con dos modas)
              o <b>multimodales</b> (con m&aacute;s de dos modas).
            </p>
            <div class="bg7 brad p-4">
              <p class="mb-4 text-white"><b>Propiedades:</b></p>
              <div class="bgw p-3 brad mb-3">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      >Es la &uacute;nica medida de tendencia central que puede
                      aplicarse a variables cualitativas.</span
                    >
                  </li>
                </ul>
              </div>
              <div class="bgw p-3 brad">
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      >Puede no ser representativa del conjunto si los datos no
                      tienen una moda clara o si hay varias modas.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 my-3 order-lg-2">
            <div class="bg14 brad p-4 h-100">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/13.svg"
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
        <div id="t_1_4" class="titulo-segundo color-acento-botones">
          <h2>1.4&#x9;Media geom&eacute;trica</h2>
        </div>
        <p class="mb-5">
          La <b>media geom&eacute;trica</b> es una medida de tendencia central
          que se utiliza principalmente para conjuntos de datos positivos que
          est&aacute;n relacionados multiplicativamente, como tasas de
          crecimiento o porcentajes de cambio. Se calcula multiplicando todos
          los valores y extrayendo la ra&iacute;z en&eacute;sima del producto,
          donde n es el n&uacute;mero total de observaciones.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-3">
            <div class="bg16 brad p-4 h-100">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/14.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-8 my-3">
            <div class="bg15 brad br-d h-100 p-4">
              <h5>Fórmula:</h5>
              <img class="img-t mb-4" src="@/assets/curso/temas/15.png" />
              <div>
                <p class="mb-3"><b>Donde:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/16.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">es la media geom&eacute;trica.</p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/17.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">
                          representa cada valor en el conjunto de datos.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/18.png"
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
              <p class="mb-4"><b>Propiedades:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span class="mb-0"
                    >Es adecuada para datos que var&iacute;an en
                    proporci&oacute;n, como en el crecimiento de una
                    poblaci&oacute;n o el rendimiento de una
                    inversi&oacute;n.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span class="mb-0"
                    >Menos sensible a valores extremos que la media
                    aritm&eacute;tica.</span
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
        <div id="t_1_5" class="titulo-segundo color-acento-botones">
          <h2>1.5&#x9;Media ponderada</h2>
        </div>
        <p class="mb-5">
          La <b>media ponderada</b> es una variante de la media
          aritm&eacute;tica en la que cada valor del conjunto de datos se
          multiplica por un peso espec&iacute;fico que refleja su importancia
          relativa. La media ponderada se usa cuando algunos valores tienen
          mayor relevancia o peso en el an&aacute;lisis que otros.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-4 my-3">
            <div class="bg7 brad h-100 p-4">
              <h5 class="text-white">Fórmula:</h5>
              <img class="img-t mb-4" src="@/assets/curso/temas/20.png" />
              <div>
                <p class="mb-3"><b class="text-white">Donde:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/21.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0 text-white">es la media ponderada.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/22.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0 text-white">
                          es el peso asignado al valor
                        </p>
                      </div>
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/23.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li class="mb-3"><i></i></li>
                  <li>
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/24.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0 text-white">
                          es el n&uacute;mero total de observaciones.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-3">
            <img
              class="img-a img-t mb-4"
              src="@/assets/curso/temas/19.png"
              alt=""
            />
            <div>
              <p class="mb-4"><b>Propiedades:</b></p>
              <ul class="lista-ul--color fa-ul">
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Permite dar m&aacute;s relevancia a ciertos valores
                    seg&uacute;n su importancia o frecuencia.</span
                  >
                </li>
                <li class="mb-3">
                  <i class="fas fa-check v1"></i
                  ><span
                    >Es especialmente &uacute;til cuando se necesita reflejar la
                    influencia desigual de los datos.</span
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
        <div id="t_1_6" class="titulo-segundo color-acento-botones">
          <h2>1.6&#x9;Media recortada</h2>
        </div>
        <div class="row justify-content-center align-items-center mb-5">
          <div class="col-lg-auto">
            <img class="img-a img-t" src="@/assets/curso/temas/25.png" alt="" />
          </div>
          <div class="col pt-lg-0 pt-md-4">
            <p class="mb-0">
              La <b>media recortada</b> es una versi&oacute;n modificada de la
              media aritm&eacute;tica, en la que se eliminan los valores
              m&aacute;s extremos (los mayores y menores) antes de calcular la
              media. Esto permite reducir el efecto de los valores
              at&iacute;picos en el c&aacute;lculo.
            </p>
          </div>
        </div>
        <div class="mb-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 my-3">
              <div class="bg10 brad p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/26.png"
                />
                <div class="row justify-content-center mb-4">
                  <p class="col-lg-auto mb-4 bg11 text-white px-4 text-center">
                    <b>C&aacute;lculo:</b>
                  </p>
                </div>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Se elimina un porcentaje predeterminado de los valores
                      m&aacute;s altos y m&aacute;s bajos.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Se calcula la media aritm&eacute;tica de los valores
                      restantes.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 my-3">
              <div class="bg10 brad p-4 h-100">
                <img
                  class="img-t img-a mb-4"
                  src="@/assets/curso/temas/27.png"
                />
                <div class="row justify-content-center mb-4">
                  <p
                    class="col-lg-auto mb-4 bg11 text-white px-4 &lt;p class="
                    mb-4=""
                    bg4=""
                  >
                    <b>Propiedades:</b>
                  </p>
                </div>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Proporciona una medida de tendencia central menos
                      sensible a valores at&iacute;picos.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Es &uacute;til en situaciones donde los datos contienen
                      valores extremos que podr&iacute;an distorsionar la
                      media.</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 my-3">
              <div>
                <img
                  class="img-t img-a d-lg-block d-none"
                  src="@/assets/curso/temas/28.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="separador-container">
        <div class="separador"></div>
      </div>
      <section>
        <div id="t_1_7" class="titulo-segundo color-acento-botones">
          <h2>1.7&#x9;Trimedia</h2>
        </div>
        <p class="mb-5">
          La <b>trimedia</b> es una medida de tendencia central que toma en
          cuenta tanto la mediana como los cuartiles (primer y tercer cuartil)
          del conjunto de datos. Es una medida robusta que combina
          informaci&oacute;n de diferentes puntos de la distribuci&oacute;n para
          proporcionar un resumen m&aacute;s equilibrado de la tendencia
          central.
        </p>
        <div class="row justify-content-center">
          <div class="col-lg-5 my-3">
            <div>
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/29.png"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-7 my-3">
            <div>
              <h5>Fórmula:</h5>
              <img class="img-t mb-4" src="@/assets/curso/temas/30.png" />
              <div>
                <p class="mb-3"><b>Donde:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/31.png"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <p class="mb-0">
                          es el primer cuartil (25 % de los datos por debajo).
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i>
                    <div class="row justify-content-center align-items-center">
                      <div class="col-auto">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
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
                    <i class="fas fa-check v1"></i
                    ><span class="mb-0"
                      >La mediana divide el conjunto de datos en dos mitades.
                    </span>
                  </li>
                </ul>
              </div>
              <div class="bgi p-4 brad">
                <p class="mb-4"><b>Propiedades:</b></p>
                <ul class="lista-ul--color fa-ul">
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Proporciona una medida que tiene en cuenta tanto la
                      dispersi&oacute;n como el centro de los datos.</span
                    >
                  </li>
                  <li class="mb-3">
                    <i class="fas fa-check v1"></i
                    ><span
                      >Es menos sensible a los valores at&iacute;picos que la
                      media aritm&eacute;tica.
                    </span>
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
  name: 'Tema1',
  components: {},
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
