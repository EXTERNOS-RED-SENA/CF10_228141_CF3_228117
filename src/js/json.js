export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medidas de tendencia central',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Media aritmética',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mediana',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Moda',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Media geométrica',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Media ponderada',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Media recortada',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trimedia',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medidas de dispersión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Rango',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Desviación media',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Varianza',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Desviación estándar',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Coeficiente de variación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Rango intercuartílico',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Amplitud de variación',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Coeficiente de variación',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas de posición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cuartiles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Deciles',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Percentiles',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Rango intercuartílico',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Probabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Cálculo de probabilidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Probabilidades marginales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Regla de la adición',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Regla de la multiplicación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Teorema de Bayes',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Distribución normal',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Distribución <em>t-student</em>',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Prueba de valor z',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo:
              'Aplicaciones de la probabilidad en el análisis estadístico',
            hash: 't_4_9',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gráficos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de gráficos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Elección del gráfico adecuado según el tipo de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Interpretación de gráficos estadísticos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estructura de un informe estadístico',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Presentación de datos en un informe',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Lenguaje claro y conciso',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Tipos de informes estadísticos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Elaboración de conclusiones y recomendaciones',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Errores comunes en los informes estadísticos',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228117_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Análisis estadístico de datos y generación de gráficos',
    Description:
      'Este componente explora los conceptos fundamentales y las herramientas necesarias para el análisis estadístico, cubriendo desde las medidas de tendencia central y dispersión hasta las probabilidades y gráficos estadísticos. Abarca técnicas precisas para calcular medias, varianza y coeficientes, y profundiza en la interpretación de gráficos y la redacción de informes estadísticos efectivos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
