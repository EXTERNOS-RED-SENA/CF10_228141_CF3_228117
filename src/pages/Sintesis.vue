<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-fluid img-a" src="@/assets/curso/temas/122.png" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 my-lg-0 my-3">
              <div class="bg7 text-white p-3 brad j1 h-100">
                <p>
                  El siguiente diagrama proporciona una visi&oacute;n general de
                  los principales temas abordados en este componente, centrado
                  en el uso de medidas estad&iacute;sticas y
                  probabil&iacute;sticas para el an&aacute;lisis de datos. Este
                  mapa conceptual est&aacute; dise&ntilde;ado para facilitar al
                  lector la visualizaci&oacute;n de las interrelaciones entre
                  las diferentes &aacute;reas que componen el proceso de
                  an&aacute;lisis estad&iacute;stico, contribuyendo a una
                  comprensi&oacute;n estructurada y pr&aacute;ctica de los
                  conceptos clave.
                </p>
              </div>
            </div>
            <div class="col-lg-5 my-lg-0 my-3 j1">
              <img class="img-fluid img-a" src="@/assets/curso/temas/106.png" />
            </div>
          </div>
          <div
            class="row justify-content-center align-items-center bg19 br-d p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/121.png"
                alt=""
              />
            </div>

            n
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                En el origen del diagrama se encuentra el concepto principal de
                &quot; An&aacute;lisis estad&iacute;stico de datos y
                generaci&oacute;n de gr&aacute;ficos&quot;, del cual se derivan
                los temas esenciales: Medidas de tendencia central, Medidas de
                dispersi&oacute;n, Medidas de posici&oacute;n, Probabilidades y
                Gr&aacute;ficos estad&iacute;sticos. Cada &aacute;rea se
                subdivide en conceptos espec&iacute;ficos, como media, varianza,
                cuartiles y distribuci&oacute;n de probabilidades, los cuales
                reflejan la organizaci&oacute;n del contenido del componente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-5">
        Este diagrama act&uacute;a como una gu&iacute;a visual que
        acompa&ntilde;a al lector en la exploraci&oacute;n de los conceptos
        presentados, permiti&eacute;ndole captar de manera r&aacute;pida la
        estructura y el alcance de los temas tratados, as&iacute; como sus
        conexiones. Al consultar este mapa, el lector podr&aacute; apreciar
        c&oacute;mo los distintos aspectos de la estad&iacute;stica se integran
        para formar un proceso coherente de an&aacute;lisis y
        presentaci&oacute;n de datos. Se invita a utilizar este diagrama como un
        complemento al contenido detallado del componente, sirviendo como una
        referencia visual y un recordatorio de los principios esenciales en el
        an&aacute;lisis estad&iacute;stico y la visualizaci&oacute;n de datos.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5 bgs brad p-5">
          <figure>
            <img
              src="@/assets/curso/temas/sintesis.svg"
              alt="La Figura 4 se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre el análisis estadístico de datos y generación de gráficos y algunos subtemas que los integran."
            />
            <figcaption>Fuente: OIT, 2024.</figcaption>
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sintesis',
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
