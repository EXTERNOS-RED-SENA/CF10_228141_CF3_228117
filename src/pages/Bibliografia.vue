<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Batanero, C. (2001). Didáctica de la estadística. Granada: Universidad de Granada.',
      },
      {
        referencia:
          'Cochran, W. G. (1980). Técnicas de muestreo (3.ª ed.). México: CECSA.',
      },
      {
        referencia:
          'Escobar Mercado, M., Fernández Macías, E., & Bernardi, F. (2012). Análisis de datos con Stata (2ª ed.). Centro de Investigaciones Sociológicas. Recuperado de Academia.',
      },
      {
        referencia:
          'Hernández Martín, Z. (2018). Métodos de análisis de datos: apuntes. Universidad de La Rioja. Recuperado de Universidad de la Rioja.',
      },
      {
        referencia:
          'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6.ª ed.). México: McGraw-Hill.',
      },
      {
        referencia:
          'Martínez, J. (2004). Muestreo estadístico. Madrid: Alianza Editorial.',
      },
      {
        referencia:
          'Montgomery, D. C., & Runger, G. C. (2015). Probabilidad y estadística aplicada a la ingeniería (5.ª ed.). México: McGraw-Hill.',
      },
      {
        referencia:
          'Obando-Bastidas, J. A., & Castellanos Sánchez, M. T. (2021). Gráficos estadísticos: guía práctica para estadística descriptiva. Universidad Cooperativa de Colombia. Recuperado de Repositorio UCC.',
      },
      {
        referencia:
          'Panteleeva, O. V. (2005). Fundamentos de Probabilidad y Estadística. UAEM.',
      },
      {
        referencia:
          'Ramos Calcina, A., Villasante Saravia, F. H., & Álvarez Rozas, T. P. (2023). Estadística descriptiva con R (2ª ed.). Universidad Nacional del Altiplano. Recuperado de Repositorio UNAP.',
      },
      {
        referencia:
          'Scheaffer, R. L., Mendenhall, W., & Ott, R. L. (2007). Elementos de muestreo (6.ª ed.). México: Thomson.',
      },
      {
        referencia:
          'Triola, M. F. (2018). Estadística (12.ª ed.). México: Pearson Educación.',
      },
      {
        referencia:
          'Walpole, R. E., Myers, R. H., Myers, S. L., & Ye, K. (2012). Probabilidad y estadística para ingenieros (9.ª ed.). México: Pearson Educación.',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
