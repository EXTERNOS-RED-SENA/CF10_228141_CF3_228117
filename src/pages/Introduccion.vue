<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-3 order-1">
          <div class="brad p-3 mb-4">
            <p class="mb-0">
              En el &aacute;mbito de la estad&iacute;stica aplicada, la
              comprensi&oacute;n y el uso de medidas estad&iacute;sticas
              permiten describir, analizar y entender patrones dentro de los
              datos. Las medidas de tendencia central, dispersi&oacute;n y
              posici&oacute;n, junto con el c&aacute;lculo de probabilidades,
              son fundamentales para interpretar correctamente la
              informaci&oacute;n y realizar inferencias v&aacute;lidas sobre
              poblaciones a partir de muestras.
            </p>
          </div>
          <div class="row justify-content-center align-items-center bg8 mb-4">
            <div class="col-lg-4 h-100">
              <img class="img-fluid" src="@/assets/curso/temas/2.png" alt="" />
            </div>
            <div class="col-lg-8 bgi">
              <div class="p-4">
                <p class="mb-0">
                  &iquest;C&oacute;mo se aplican estas herramientas para obtener
                  resultados precisos y representativos en el an&aacute;lisis
                  estad&iacute;stico? Este componente formativo explora los
                  principios y metodolog&iacute;as de las medidas
                  estad&iacute;sticas clave, abarcando desde los conceptos de
                  media y varianza hasta las distribuciones de probabilidad y su
                  interpretaci&oacute;n en gr&aacute;ficos estad&iacute;sticos.
                  Adem&aacute;s, se proporcionar&aacute;n enfoques
                  pr&aacute;cticos para seleccionar y presentar datos de manera
                  clara y efectiva en informes estad&iacute;sticos.
                </p>
              </div>
            </div>
          </div>
          <p>
            A lo largo de este componente, el aprendiz desarrollar&aacute;
            habilidades para calcular y aplicar medidas estad&iacute;sticas,
            interpretar distribuciones y utilizar gr&aacute;ficos para comunicar
            hallazgos. Asimismo, se destacar&aacute;n las mejores
            pr&aacute;cticas para estructurar datos y elegir el tipo de
            gr&aacute;fico adecuado, optimizando la precisi&oacute;n y la
            claridad en la presentaci&oacute;n de resultados.
          </p>
        </div>
        <div class="col-lg-4 my-3 order-lg-2">
          <img class="img-a img-t" src="@/assets/curso/temas/1.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 my-3">
          <div
            class="row justify-content-center align-items-center bg7 p-4 brad text-white mb-5"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/3.svg"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Las medidas estad&iacute;sticas y su interpretaci&oacute;n son
                pilares para cualquier an&aacute;lisis riguroso, ya que
                &ldquo;la precisi&oacute;n de las conclusiones depende de la
                correcta aplicaci&oacute;n de los principios
                estad&iacute;sticos&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4 class="mb-4">
        &iexcl;Bienvenido a este recorrido por el mundo de la estad&iacute;stica
        y la visualizaci&oacute;n efectiva de datos para el an&aacute;lisis!
      </h4>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/f8NNG5EV38o?si=ci8K76uvPS7fBGMR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
